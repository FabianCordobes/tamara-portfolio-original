import type { Metadata } from "next";
import { PageIntro } from "@/components/layout/page-intro";
import { ContactForm } from "@/components/sections/contact-form";
import { socialLinks, instagramHandle } from "@/content/social";
import { getFormspreeEndpoint } from "@/lib/formspree";

export const metadata: Metadata = {
  title: "Contacto para proyectos, empleo y propuestas musicales",
  description: "Contactá a Tamara Atadía por servicios de comunicación, oportunidades laborales, castings y colaboraciones musicales.",
  alternates: { canonical: "/contacto" }
};

type ContactPageProps = { searchParams: Promise<{ motivo?: string | string[] }> };

export default async function ContactoPage({ searchParams }: ContactPageProps) {
  const { motivo } = await searchParams;
  const reason = Array.isArray(motivo) ? motivo[0] : motivo;
  const defaultIntent = reason === "musica"
    ? "Propuesta artística o casting"
    : reason === "empleo"
      ? "Oportunidad profesional"
      : reason === "servicio"
        ? "Proyecto o consultoría"
        : "";
  const publicEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL?.trim() || undefined;
  const canSendDirectly = Boolean(getFormspreeEndpoint(process.env.FORMSPREE_FORM_ID));
  const delivery = canSendDirectly ? "direct" as const : publicEmail ? "email" as const : "unavailable" as const;

  const guidance = reason === "musica"
    ? { title: "Propuesta artística", detail: "Incluí repertorio, formato de presentación y fechas tentativas." }
    : reason === "empleo"
      ? { title: "Oferta laboral", detail: "Compartí el puesto, las responsabilidades y la modalidad de trabajo." }
      : reason === "servicio"
        ? { title: "Consulta comercial", detail: "Describí el proyecto, sus objetivos y el alcance esperado." }
        : { title: "Una consulta clara", detail: "Indicá el motivo de tu mensaje y la información necesaria para evaluar tu propuesta." };

  return (
    <>
      <PageIntro eyebrow="Contacto / Nuevas oportunidades"
        title={<>Presentá tu <em>propuesta.</em></>}
        description="Completá el formulario para consultar por servicios, oportunidades laborales o colaboraciones artísticas." />
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
