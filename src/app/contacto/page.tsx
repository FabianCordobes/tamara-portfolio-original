import type { Metadata } from "next";
import { PageIntro } from "@/components/layout/page-intro";
import { ContactForm } from "@/components/sections/contact-form";
import { socialLinks, instagramHandle } from "@/content/social";

export const metadata: Metadata = {
  title: "Contacto | Consultas profesionales y artísticas",
  description: "Formulario para contactar a Tamara Atadía por proyectos, búsquedas laborales o propuestas musicales.",
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
  const canSendDirectly = Boolean(process.env.RESEND_API_KEY && process.env.CONTACT_EMAIL_FROM && (process.env.CONTACT_EMAIL_TO || publicEmail));
  const delivery = canSendDirectly ? "direct" as const : publicEmail ? "email" as const : "unavailable" as const;

  return (
    <>
      <PageIntro eyebrow="Contacto / Nuevas oportunidades"
        title={<>Cada propuesta merece <em>una conversación.</em></>}
        description="Compartí tu consulta a través del formulario. El motivo quedará seleccionado cuando ingreses desde servicios, trayectoria o música." />
      <section id="formulario" className="section shell contact-form-layout" aria-label="Enviar una consulta">
        <ContactForm key={defaultIntent} defaultIntent={defaultIntent} delivery={delivery} email={publicEmail} />
        <aside className="contact-side-info">
          <p className="eyebrow">Información útil</p>
          <h2>Para orientarnos <em>desde el inicio.</em></h2>
          <div className="contact-side-group">
            <h3>Servicios profesionales</h3>
            <p>Indicá el alcance previsto, los principales objetivos y el contexto de tu organización.</p>
          </div>
          <div className="contact-side-group">
            <h3>Propuestas laborales</h3>
            <p>Compartí el puesto, la modalidad de trabajo y los aspectos centrales de la búsqueda.</p>
          </div>
          <div className="contact-side-group">
            <h3>Convocatorias musicales</h3>
            <p>Incluí repertorio, formato de presentación y fechas tentativas.</p>
          </div>
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
