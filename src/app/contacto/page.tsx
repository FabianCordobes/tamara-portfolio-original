import type { Metadata } from "next";
import { PageIntro } from "@/components/layout/page-intro";
import { ContactForm } from "@/components/sections/contact-form";
import { socialLinks, instagramHandle } from "@/content/social";
import { getFormspreeEndpoint } from "@/lib/formspree";
import { intentByReason } from "@/lib/contact";

export const metadata: Metadata = {
  title: "Contacto | Estrategia, producción y oportunidades",
  description: "Conversemos sobre tu negocio, proyecto, producción, oportunidad laboral o colaboración artística con Tamara Atadía.",
  alternates: { canonical: "/contacto" }
};

type ContactPageProps = { searchParams: Promise<{ motivo?: string | string[] }> };

export default async function ContactoPage({ searchParams }: ContactPageProps) {
  const { motivo } = await searchParams;
  const reason = Array.isArray(motivo) ? motivo[0] : motivo;
  const defaultIntent = (reason && intentByReason[reason]) || "";
  const publicEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL?.trim() || undefined;
  const canSendDirectly = Boolean(getFormspreeEndpoint(process.env.FORMSPREE_FORM_ID));
  const delivery = canSendDirectly ? "direct" as const : publicEmail ? "email" as const : "unavailable" as const;

  const guidance = reason === "musica"
    ? { title: "Colaboración artística", detail: "Contame sobre el formato, el repertorio y las fechas tentativas." }
    : reason === "empleo"
      ? { title: "Oportunidad profesional", detail: "Compartí el rol, la organización y la modalidad prevista." }
      : { title: "El comienzo de una conversación", detail: "No hace falta un presupuesto cerrado: explicame qué querés desarrollar y en qué etapa está." };

  return (
    <>
      <PageIntro eyebrow="Contacto / Nuevas oportunidades"
        title={<>Conversemos sobre lo que <em>querés desarrollar.</em></>}
        description="Contame el contexto de tu necesidad. Vamos a iniciar una conversación clara, sin formularios interminables ni promesas automáticas." />
      <section id="formulario" className="section shell contact-form-layout" aria-label="Enviar una consulta">
        <ContactForm key={defaultIntent} defaultIntent={defaultIntent} delivery={delivery} email={publicEmail} />
        <aside className="contact-side-info">
          <p className="eyebrow">Información útil</p>
          <h2>{guidance.title}</h2>
          <p>{guidance.detail}</p>
          <div className="contact-side-social">
            <p className="eyebrow">Otras vías de contacto</p>
            <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-link">LinkedIn ↗</a>
            <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="text-link">Instagram {instagramHandle} ↗</a>
            {publicEmail && <a href={`mailto:${publicEmail}`} className="text-link">Escribir por email ↗</a>}
          </div>
        </aside>
      </section>
    </>
  );
}
