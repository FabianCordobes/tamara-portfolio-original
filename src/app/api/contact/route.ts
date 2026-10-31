import { validateContact, type ContactData } from "@/lib/contact";
import { getFormspreeEndpoint } from "@/lib/formspree";

export const runtime = "nodejs";

type Attempt = { count: number; expires: number };
const attempts = new Map<string, Attempt>();
const windowMs = 10 * 60 * 1000;
const maxAttempts = 5;

function json(message: object, status: number, headers: Record<string, string> = {}) {
  return Response.json(message, {
    status,
    headers: { "Cache-Control": "no-store", ...headers }
  });
}

export async function POST(request: Request) {
  const origin = request.headers.get("origin");
  const requestURL = new URL(request.url);
  const host = request.headers.get("host");
  // Next.js may expose an internal request URL behind a proxy while preserving the public Host.
  const expectedOrigins = [requestURL.origin];
  if (host) expectedOrigins.push(`${requestURL.protocol}//${host}`);
  if (!origin || !expectedOrigins.includes(origin)) {
    return json({ message: "Solicitud no permitida." }, 403);
  }
  if (!request.headers.get("content-type")?.startsWith("application/json")) {
    return json({ message: "Formato no válido." }, 415);
  }

  const now = Date.now();
  for (const [key, value] of attempts) {
    if (value.expires <= now) attempts.delete(key);
  }

  // This rate limit is per instance. Configure a shared rate limiter or WAF for scale.
  const ip = request.headers.get("x-vercel-forwarded-for")?.split(",")[0]?.trim() || "local";
  const bucket = attempts.get(ip) || { count: 0, expires: now + windowMs };
  if (bucket.count >= maxAttempts || attempts.size >= 10000) {
    return json({ message: "Demasiados intentos. Esperá unos minutos antes de volver a enviar." }, 429, {
      "Retry-After": String(Math.max(1, Math.ceil((bucket.expires - now) / 1000)))
    });
  }
  bucket.count++;
  attempts.set(ip, bucket);

  let body: Record<string, unknown>;
  try {
    const raw = await request.text();
    if (new TextEncoder().encode(raw).length > 16000) {
      return json({ message: "Mensaje demasiado largo." }, 413);
    }
    const parsed: unknown = JSON.parse(raw);
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) throw new Error("invalid-body");
    body = parsed as Record<string, unknown>;
  } catch {
    return json({ message: "Solicitud no válida." }, 400);
  }

  // Avoid a hard 2-second minimum; autofill and assistive input can be legitimately fast.
  const startedAt = body.startedAt;
  if (
    body.website ||
    typeof startedAt !== "number" ||
    !Number.isFinite(startedAt) ||
    startedAt <= 0 ||
    startedAt > now + 60000 ||
    now - startedAt > 86400000
  ) {
    return json({ message: "No pudimos validar el envío. Intentá nuevamente." }, 400);
  }

  if (
    ["name", "email", "intent", "message"].some(key => typeof body[key] !== "string") ||
    typeof body.consent !== "boolean"
  ) {
    return json({ message: "Revisá los campos del formulario." }, 400);
  }

  const data: ContactData = {
    name: (body.name as string).trim(),
    email: (body.email as string).trim(),
    intent: body.intent as string,
    message: (body.message as string).trim(),
    consent: body.consent as boolean
  };
  if (Object.keys(validateContact(data)).length) {
    return json({ message: "Revisá los campos del formulario." }, 400);
  }

  const endpoint = getFormspreeEndpoint(process.env.FORMSPREE_FORM_ID);
  if (!endpoint) {
    return json({ message: "El formulario no está disponible. Usá los canales alternativos de contacto." }, 503);
  }

  // Only validated fields are forwarded. The recipient is configured in the Formspree dashboard.
  const form = new FormData();
  form.set("name", data.name);
  form.set("email", data.email); // Formspree uses this field as notification Reply-To.
  form.set("intent", data.intent);
  form.set("message", data.message);
  form.set("subject", `Portafolio · ${data.intent}`);
  form.set("consent", "Autorizado para responder esta consulta");
  form.set("_gotcha", "");

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        Accept: "application/json",
        Origin: origin,
        Referer: `${origin}/contacto`
      },
      body: form,
      redirect: "manual",
      signal: AbortSignal.timeout(10000)
    });

    if (response.status === 429) {
      return json(
        { message: "Hay demasiadas consultas en este momento. Esperá unos minutos antes de volver a intentar." },
        429,
        { "Retry-After": response.headers.get("Retry-After") || "60" }
      );
    }

    // A redirect or HTML page from a provider is not evidence of a successful AJAX submission.
    if (!response.ok || !response.headers.get("content-type")?.includes("application/json")) {
      return json({ message: "No pudimos registrar la consulta. Intentá nuevamente o escribí por email." }, 502);
    }

    const result: unknown = await response.json();
    if (!result || typeof result !== "object" || ("ok" in result && result.ok === false)) {
      return json({ message: "No pudimos registrar la consulta. Intentá nuevamente o escribí por email." }, 502);
    }

    // Formspree accepted the submission; notification delivery depends on its dashboard settings.
    return json({ ok: true }, 200);
  } catch {
    return json({ message: "No pudimos registrar la consulta. Intentá nuevamente o escribí por email." }, 502);
  }
}
