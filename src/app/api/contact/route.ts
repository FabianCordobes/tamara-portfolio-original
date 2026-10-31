import { validateContact, type ContactData } from "@/lib/contact";
export const runtime = "nodejs";
const attempts = new Map<string, { count: number; expires: number }>();
export async function POST(request: Request) {
 const origin = request.headers.get("origin");
 if(!origin || origin !== new URL(request.url).origin) return Response.json({ message: "Solicitud no permitida." }, { status: 403 });
 if(!request.headers.get("content-type")?.startsWith("application/json")) return Response.json({ message: "Formato no válido." }, { status: 415 });
 const now = Date.now();
 for(const [key, value] of attempts) if(value.expires < now) attempts.delete(key);
 // In-memory protection per server instance; use a shared store/WAF for distributed deployment.
 const ip = request.headers.get("x-vercel-forwarded-for")?.split(",")[0]?.trim() || "local";
 const bucket = attempts.get(ip) || { count: 0, expires: now + 600000 };
 if(bucket.count >= 5 || attempts.size >= 10000) return Response.json({ message: "Demasiados intentos. Esperá unos minutos antes de volver a enviar." }, { status: 429, headers: { "Retry-After": "600" } });
 bucket.count++; attempts.set(ip, bucket);
 let body: Record<string, unknown>;
 try {
  const raw = await request.text(); if(new TextEncoder().encode(raw).length > 16000) return Response.json({ message: "Mensaje demasiado largo." }, { status: 413 });
  const parsed: unknown = JSON.parse(raw);
  if(!parsed || typeof parsed !== "object" || Array.isArray(parsed)) throw new Error();
  body = parsed as Record<string, unknown>;
 } catch { return Response.json({ message: "Solicitud no válida." }, { status: 400 }); }
 if(body.website || typeof body.startedAt !== "number" || now - body.startedAt < 2000 || now - body.startedAt > 86400000) return Response.json({ message: "No pudimos validar el envío. Intentá nuevamente." }, { status: 400 });
 if(["name", "email", "intent", "message"].some(key => typeof body[key] !== "string") || typeof body.consent !== "boolean") return Response.json({ message: "Revisá los campos del formulario." }, { status: 400 });
 const data: ContactData = { name: (body.name as string).trim(), email: (body.email as string).trim(), intent: body.intent as string, message: (body.message as string).trim(), consent: body.consent as boolean };
 if(Object.keys(validateContact(data)).length) return Response.json({ message: "Revisá los campos del formulario." }, { status: 400 });
 const { RESEND_API_KEY, CONTACT_EMAIL_FROM } = process.env;
 const destination = process.env.CONTACT_EMAIL_TO || process.env.NEXT_PUBLIC_CONTACT_EMAIL;
 if(!RESEND_API_KEY || !destination || !CONTACT_EMAIL_FROM) return Response.json({ message: "El formulario no está disponible. Podés comunicarte desde los canales alternativos." }, { status: 503 });
 try {
  const sent = await fetch("https://api.resend.com/emails", { method: "POST", headers: { Authorization: `Bearer ${RESEND_API_KEY}`, "Content-Type": "application/json" }, body: JSON.stringify({ from: CONTACT_EMAIL_FROM, to: [destination], reply_to: data.email, subject: `Portfolio · ${data.intent}`, text: `Nombre: ${data.name}\nEmail: ${data.email}\nMotivo: ${data.intent}\n\n${data.message}` }), signal: AbortSignal.timeout(10000) });
  if(!sent.ok) throw new Error("delivery-failed");
  return Response.json({ ok: true });
 } catch { return Response.json({ message: "No pudimos enviar la consulta. Intentá nuevamente o contactá por LinkedIn." }, { status: 502 }); }
}
