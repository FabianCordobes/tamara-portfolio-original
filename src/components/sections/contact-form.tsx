"use client";

import { useRef, useState, type FormEvent } from "react";
import { intents, validateContact, type ContactData, type ContactErrors } from "@/lib/contact";

type Delivery = "direct" | "email" | "unavailable";

export function ContactForm({ delivery, email, defaultIntent = "" }: {
  delivery: Delivery;
  email?: string;
  defaultIntent?: string;
}) {
  const [errors, setErrors] = useState<ContactErrors>({});
  const [state, setState] = useState<"idle" | "pending" | "success" | "error">("idle");
  const [notice, setNotice] = useState("");
  const startedAt = useRef<number>(0);
  const status = useRef<HTMLParagraphElement>(null);
  const canSubmit = delivery !== "unavailable";

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (state === "pending" || !canSubmit) return;
    const form = event.currentTarget;
    const values = new FormData(form);
    const data: ContactData = {
      name: String(values.get("name") ?? "").trim(),
      email: String(values.get("email") ?? "").trim(),
      intent: String(values.get("intent") ?? ""),
      message: String(values.get("message") ?? "").trim(),
      consent: values.get("consent") === "on"
    };
    const validation = validateContact(data);
    setErrors(validation);
    if (Object.keys(validation).length) {
      setNotice("Revisá los campos señalados para continuar.");
      form.querySelector<HTMLElement>(`[name="${Object.keys(validation)[0]}"]`)?.focus();
      return;
    }

    if (delivery === "email" && email) {
      const subject = encodeURIComponent(`Consulta desde el portafolio · ${data.intent}`);
      const body = encodeURIComponent(`Nombre: ${data.name}\nEmail: ${data.email}\nMotivo: ${data.intent}\n\n${data.message}`);
      window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
      setNotice("Se preparó un mensaje en tu aplicación de correo. Confirmá el envío desde allí.");
      status.current?.focus();
      return;
    }

    setState("pending");
    setNotice("Enviando tu consulta…");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, website: values.get("website"), startedAt: startedAt.current }),
        signal: AbortSignal.timeout(15000)
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.message || "No se pudo entregar el mensaje.");
      setState("success");
      setNotice("Tu consulta se registró correctamente. Gracias por escribir.");
      setErrors({});
      form.reset();
      startedAt.current = 0;
    } catch (error) {
      setState("error");
      setNotice(error instanceof Error ? error.message : "No pudimos enviar el mensaje. Probá nuevamente.");
    }
    status.current?.focus();
  }

  return (
    <form className="contact-form contact-form-primary" onSubmit={submit} noValidate aria-labelledby="contact-form-title" onFocus={() => { if (!startedAt.current) startedAt.current = Date.now(); }}>
      <div className="contact-form-heading">
        <p className="eyebrow">Formulario de contacto</p>
        <h2 id="contact-form-title">Contame tu propuesta.</h2>
        <p>Usaré el correo que indiques para responder tu consulta.</p>
      </div>
      <fieldset disabled={!canSubmit || state === "pending"}>
        <div className="form-grid">
          {([["name", "Nombre y apellido", "text", "name"], ["email", "Correo electrónico", "email", "email"]] as const).map(([name,label,type,autocomplete]) => (
            <div className="form-field" key={name}>
              <label htmlFor={`contact-${name}`}>{label} <span aria-hidden="true">*</span></label>
              <input id={`contact-${name}`} name={name} type={type} autoComplete={autocomplete}
                required maxLength={name === "name" ? 100 : 254}
                aria-invalid={!!errors[name]}
                aria-describedby={errors[name] ? `${name}-error` : undefined}
                placeholder={name === "name" ? "Tu nombre" : "nombre@ejemplo.com"} />
              {errors[name] && <p className="field-error" id={`${name}-error`}>{errors[name]}</p>}
            </div>
          ))}
        </div>
        <div className="form-field">
          <label htmlFor="contact-intent">Tipo de consulta <span aria-hidden="true">*</span></label>
          <select id="contact-intent" name="intent" defaultValue={defaultIntent} required
            aria-invalid={!!errors.intent} aria-describedby={errors.intent ? "intent-error" : undefined}>
            <option value="">Seleccioná una opción</option>
            {intents.map(intent => <option value={intent} key={intent}>{intent}</option>)}
          </select>
          {errors.intent && <p className="field-error" id="intent-error">{errors.intent}</p>}
        </div>
        <div className="form-field">
          <label htmlFor="contact-message">Mensaje <span aria-hidden="true">*</span></label>
          <textarea id="contact-message" name="message" rows={6} minLength={20} maxLength={3000} required
            placeholder="Describí brevemente tu proyecto, oportunidad laboral o propuesta artística…"
            aria-invalid={!!errors.message} aria-describedby={errors.message ? "message-error" : undefined} />
          {errors.message && <p className="field-error" id="message-error">{errors.message}</p>}
        </div>
        <div className="form-trap" aria-hidden="true">
          <label htmlFor="website">Sitio web</label>
          <input id="website" name="website" tabIndex={-1} autoComplete="off" />
        </div>
        <label className="consent">
          <input type="checkbox" name="consent" required aria-invalid={!!errors.consent} aria-describedby="contact-privacy" />
          <span>Autorizo el uso de mis datos exclusivamente para responder esta consulta. <span aria-hidden="true">*</span></span>
        </label>
        {errors.consent && <p className="field-error" role="alert">{errors.consent}</p>}
        <p id="contact-privacy" className="privacy-note">No se utilizarán tus datos con fines publicitarios.</p>
        <button className="button button-primary" type="submit">
          {state === "pending" ? "Enviando…" : delivery === "email" ? "Continuar al correo ↗" : "Enviar mensaje ↗"}
        </button>
        {delivery === "email" && <p className="form-notice">El mensaje se abrirá en tu aplicación de correo para que confirmes el envío.</p>}
      </fieldset>
      {delivery === "unavailable" && <p className="form-notice">La recepción de formularios aún no está configurada. Contactame desde alguno de mis perfiles.</p>}
      <p ref={status} tabIndex={-1} role="status" aria-live="polite" className={`form-status ${state === "error" ? "field-error" : ""}`}>{notice}</p>
    </form>
  );
}
