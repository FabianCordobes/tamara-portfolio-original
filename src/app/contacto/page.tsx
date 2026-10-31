import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/layout/page-intro";
import { ContactForm } from "@/components/sections/contact-form";
import { socialLinks, instagramHandle } from "@/content/social";

export const metadata: Metadata = {
  title: "Contacto",
  description: "Contactá a Tamara Atadía por servicios, oportunidades profesionales o propuestas musicales.",
  alternates: { canonical: "/contacto" }
};

type ContactPageProps = { searchParams: Promise<{ motivo?: string | string[] }> };
const reasons = [
  { key: "servicio", title: "Contratar servicios", description: "Marketing, comunicación y gestión." },
  { key: "empleo", title: "Proponer un trabajo", description: "Roles y desafíos profesionales." },
  { key: "musica", title: "Convocar a cantar", description: "Castings, escenarios y colaboraciones." }
] as const;

export default async function ContactoPage({ searchParams }: ContactPageProps) {
  const { motivo } = await searchParams;
  const isMusic = motivo === "musica";
  const isEmployment = motivo === "empleo";
  const isService = motivo === "servicio";
  const defaultIntent = isMusic ? "Propuesta artística o casting" : isEmployment ? "Oportunidad profesional" : isService ? "Proyecto o consultoría" : "";
  const emailEnabled = Boolean(process.env.RESEND_API_KEY && process.env.CONTACT_EMAIL_FROM && process.env.CONTACT_EMAIL_TO);
  const note = isMusic
    ? "En convocatorias musicales, indicá repertorio, modalidad de presentación y fechas tentativas."
    : isEmployment
      ? "En búsquedas laborales, precisá el puesto, la organización y la modalidad."
      : isService
        ? "Para consultas comerciales, describí el desafío principal o los objetivos."
        : "Elegí el motivo para que podamos empezar por lo importante.";

  return (
    <>
      <PageIntro eyebrow="Contacto" title={<>Hablemos de tu <em>propuesta.</em></>}
        description="Seleccioná el tipo de propuesta. Después, elegí tu canal de contacto." />
      <section className="section shell contact-page" aria-label="Opciones de contacto">
        <div className="contact-choice-grid" aria-label="Motivo de contacto">
          {reasons.map(reason => (
            <Link key={reason.key} href={`/contacto?motivo=${reason.key}`}
              aria-current={motivo === reason.key ? "true" : undefined}
              className={`contact-choice ${motivo === reason.key ? "selected" : ""}`}>
              <span className="eyebrow">{reason.key === "servicio" ? "01 / Proyectos" : reason.key === "empleo" ? "02 / Empleo" : "03 / Música"}</span>
              <strong>{reason.title}</strong>
              <span>{reason.description}</span>
              {motivo === reason.key && <span className="contact-choice-status">Seleccionado ✓</span>}
            </Link>
          ))}
        </div>
        <div className="contact-action">
          <div>
            <p className="eyebrow">Canales de contacto</p>
            <h2>{isMusic ? "Conectemos desde la música." : "Escribime directamente."}</h2>
            <p>{note}</p>
            <div className="contact-social-actions">
              <a className={`button ${isMusic ? "button-secondary" : "button-primary"}`}
                href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
              <a className={`button ${isMusic ? "button-primary" : "button-secondary"}`}
                href={socialLinks.instagram} target="_blank" rel="noopener noreferrer">Instagram {instagramHandle} ↗</a>
            </div>
            {!emailEnabled && <p className="contact-context">El formulario por email todavía no está habilitado. Podés contactarme por cualquiera de estos perfiles.</p>}
          </div>
          {emailEnabled && <ContactForm key={defaultIntent} enabled defaultIntent={defaultIntent} />}
        </div>
      </section>
    </>
  );
}
