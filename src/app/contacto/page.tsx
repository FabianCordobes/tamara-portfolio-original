import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/layout/page-intro";
import { ContactForm } from "@/components/sections/contact-form";

export const metadata: Metadata = {
  title: "Contacto",
  description: "Contactá a Tamara Atadía para consultas sobre servicios de marketing y comunicación o para compartir oportunidades laborales.",
  alternates: { canonical: "/contacto" }
};

type ContactPageProps = { searchParams: Promise<{ motivo?: string | string[] }> };

export default async function ContactoPage({ searchParams }: ContactPageProps) {
  const { motivo } = await searchParams;
  const isEmployment = motivo === "empleo";
  const defaultIntent = isEmployment ? "Oportunidad profesional" : motivo === "servicio" ? "Proyecto o consultoría" : "";
  const emailEnabled = Boolean(process.env.RESEND_API_KEY && process.env.CONTACT_EMAIL_FROM && process.env.CONTACT_EMAIL_TO);

  return (
    <>
      <PageIntro eyebrow="Contacto / Empecemos por conversar" title={<>Toda oportunidad comienza con <em>una conversación.</em></>} description="¿Querés trabajar conmigo en un proyecto o compartir una búsqueda profesional? Elegí la opción que mejor se ajuste a tu consulta." />
      <section className="section shell contact-page">
        <div className="contact-choice-grid" aria-label="Motivo de contacto">
          <Link href="/contacto?motivo=servicio" aria-current={defaultIntent === "Proyecto o consultoría" ? "true" : undefined} className={`contact-choice ${defaultIntent === "Proyecto o consultoría" ? "selected" : ""}`}>
            <span className="eyebrow">Para marcas y proyectos</span><strong>Quiero contratar un servicio ↗</strong><span>Marketing, comunicación, gestión y desarrollo de iniciativas.</span>
          </Link>
          <Link href="/contacto?motivo=empleo" aria-current={isEmployment ? "true" : undefined} className={`contact-choice ${isEmployment ? "selected" : ""}`}>
            <span className="eyebrow">Para empresas y RR. HH.</span><strong>Tengo una oportunidad laboral ↗</strong><span>Experiencia, coordinación de equipos y nuevos desafíos profesionales.</span>
          </Link>
        </div>
        <div className="contact-action">
          <div>
            <p className="eyebrow">Canal directo</p>
            <h2>Hablemos de tu <em>propuesta.</em></h2>
            <p>Podés contactarme por LinkedIn y contarme brevemente el objetivo, el contexto y qué tipo de colaboración buscás.</p>
            <a className="button button-primary" href="https://www.linkedin.com/in/tamaraatadia/" target="_blank" rel="noopener noreferrer">Contactar por LinkedIn ↗</a>
            <p className="contact-context">Si escribís por una oportunidad laboral, incluí el puesto, la modalidad y una breve descripción del rol.</p>
          </div>
          {emailEnabled && <ContactForm enabled defaultIntent={defaultIntent} />}
        </div>
      </section>
    </>
  );
}
