"use client";
import { useRef, useState, type FormEvent } from "react";
import { intents, validateContact, type ContactData, type ContactErrors } from "@/lib/contact";
export function ContactForm({ enabled, defaultIntent = "" }: { enabled: boolean; defaultIntent?: string }) {
 const [errors, setErrors] = useState<ContactErrors>({});
 const [state, setState] = useState<"idle" | "pending" | "success" | "error">("idle");
 const [notice, setNotice] = useState("");
 const startedAt = useRef<number>(0);
 const status = useRef<HTMLParagraphElement>(null);
 async function submit(event: FormEvent<HTMLFormElement>) {
  event.preventDefault(); if(state === "pending" || !enabled) return;
  const form = event.currentTarget;
  const values = new FormData(form);
  const data: ContactData = { name: String(values.get("name") ?? "").trim(), email: String(values.get("email") ?? "").trim(), intent: String(values.get("intent") ?? ""), message: String(values.get("message") ?? "").trim(), consent: values.get("consent") === "on" };
  const validation = validateContact(data); setErrors(validation);
  if(Object.keys(validation).length) { form.querySelector<HTMLElement>(`[name="${Object.keys(validation)[0]}"]`)?.focus(); return; }
  setState("pending"); setNotice("Enviando tu consulta…");
  try {
   const response = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...data, website: values.get("website"), startedAt: startedAt.current }), signal: AbortSignal.timeout(15000) });
   const result = await response.json();
   if(!response.ok) throw new Error(result.message || "No pudimos enviar la consulta. Intentá nuevamente o contactá por LinkedIn.");
   setState("success"); setNotice("Tu consulta fue enviada. Gracias por contactarte."); form.reset(); startedAt.current = 0;
  } catch(error) { setState("error"); setNotice(error instanceof Error && error.name === "Error" ? error.message : "No pudimos conectar. Intentá nuevamente o contactá por LinkedIn."); }
  status.current?.focus();
 }
 return <form className="contact-form" onSubmit={submit} noValidate onFocus={() => { if(!startedAt.current) startedAt.current = Date.now(); }}>
  <p className="eyebrow">Contame qué tenés en mente</p>
  <fieldset disabled={!enabled || state === "pending"}>
   <div className="form-grid">{([ ["name", "Tu nombre", "text", "name"], ["email", "Tu email", "email", "email"] ] as const).map(([name, label, type, autocomplete]) => <div className="form-field" key={name}><label htmlFor={`contact-${name}`}>{label}</label><input id={`contact-${name}`} name={name} type={type} autoComplete={autocomplete} required maxLength={name === "name" ? 100 : 254} aria-invalid={!!errors[name]} aria-describedby={errors[name] ? `${name}-error` : undefined} />{errors[name] && <p className="field-error" id={`${name}-error`}>{errors[name]}</p>}</div>)}</div>
   <div className="form-field"><label htmlFor="contact-intent">Quiero conversar sobre</label><select id="contact-intent" name="intent" defaultValue={defaultIntent} required aria-invalid={!!errors.intent} aria-describedby={errors.intent ? "intent-error" : undefined}><option value="">Elegí una opción</option>{intents.map(intent => <option key={intent}>{intent}</option>)}</select>{errors.intent && <p className="field-error" id="intent-error">{errors.intent}</p>}</div>
   <div className="form-field"><label htmlFor="contact-message">Tu consulta</label><textarea id="contact-message" name="message" rows={5} minLength={20} maxLength={3000} required aria-invalid={!!errors.message} aria-describedby={errors.message ? "message-error" : undefined} />{errors.message && <p className="field-error" id="message-error">{errors.message}</p>}</div>
   <div className="form-trap" aria-hidden="true"><label htmlFor="website">Sitio web</label><input id="website" name="website" tabIndex={-1} autoComplete="off" /></div>
   <label className="consent"><input type="checkbox" name="consent" required aria-invalid={!!errors.consent} aria-describedby="contact-privacy" /><span>Autorizo el uso de estos datos para responder mi consulta.</span></label>
   {errors.consent && <p className="field-error">{errors.consent}</p>}
   <p id="contact-privacy" className="privacy-note">Tus datos se usan únicamente para responder este mensaje y no se incorporan a listas de marketing.</p>
   <button className="button button-primary" type="submit">{state === "pending" ? "Enviando…" : "Enviar consulta"}</button>
  </fieldset>
  {!enabled && <p className="form-notice">El formulario estará disponible próximamente. Mientras tanto, podés comunicarte por LinkedIn.</p>}
  <p ref={status} tabIndex={-1} role="status" aria-live="polite" className={`form-status ${state === "error" ? "field-error" : ""}`}>{notice}</p>
 </form>;
}
