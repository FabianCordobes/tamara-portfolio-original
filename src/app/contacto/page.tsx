import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/layout/page-intro";
import { ContactForm } from "@/components/sections/contact-form";
import { socialLinks, instagramHandle } from "@/content/social";

export const metadata: Metadata = {
  title: "Contacto",
  description: "Contactá a Tamara Atadía para servicios de comunicación y marketing, oportunidades profesionales, castings y colaboraciones musicales.",
  alternates: { canonical: "/contacto" }
};

type ContactPageProps = { searchParams: Promise<{ motivo?: string | string[] }> };

export default async function ContactoPage({ searchParams }: ContactPageProps) {
  const { motivo } = await searchParams;
  const isEmployment = motivo === "empleo";
  const isMusic = motivo === "musica";
  const defaultIntent = isMusic ? "Propuesta artística o casting" : isEmployment ? "Oportunidad profesional" : motivo === "servicio" ? "Proyecto o consultoría" : "";
  const emailEnabled = Boolean(process.env.RESEND_API_KEY && process.env.CONTACT_EMAIL_FROM && process.env.CONTACT_EMAIL_TO);

  return (
    <>
      <PageIntro eyebrow="Contacto / Empecemos por conversar" title={<>Toda oportunidad comienza con <em>una conversación.</em></>} description="¿Querés trabajar conmigo en un proyecto o compartir una búsqueda profesional o artística? Elegí la opción que mejor se ajuste a tu consulta." />
      <section className="section shell contact-page">
        <div className="contact-choice-grid" aria-label="Motivo de contacto">
          <Link href="/contacto?motivo=servicio" aria-current={defaultIntent === "Proyecto o consultoría" ? "true" : undefined} className={`contact-choice ${defaultIntent === "Proyecto o consultoría" ? "selected" : ""}`}>
            <span className="eyebrow">Para marcas y proyectos</span><strong>Quiero contratar un servicio ↗</strong><span>Marketing, comunicación, gestión y desarrollo de iniciativas.</span>
          </Link>
          <Link href="/contacto?motivo=empleo" aria-current={isEmployment ? "true" : undefined} className={`contact-choice ${isEmployment ? "selected" : ""}`}>
            <span className="eyebrow">Para empresas y RR. HH.</span><strong>Tengo una oportunidad laboral ↗</strong><span>Experiencia, coordinación de equipos y nuevos desafíos profesionales.</span>
          </Link>
          <Link href="/contacto?motivo=musica" aria-current={isMusic ? "true" : undefined} className={`contact-choice ${isMusic ? "selected" : ""}`}>
            <span className="eyebrow">Para castings y proyectos musicales</span><strong>Quiero proponer una colaboración artística ↗</strong><span>Presentaciones, audiciones, canto y proyectos con comunicación.</span>
          </Link>
        </div>
        <div className="contact-action">
          <div>
            <p className="eyebrow">Canal directo</p>
            <h2>Hablemos de tu <em>propuesta.</em></h2>
            <p>Contame brevemente el objetivo, el contexto y qué tipo de colaboración buscás. Podés escribirme por LinkedIn o enviarme un mensaje directo a Instagram, especialmente si se trata de música o proyectos artísticos.</p>
            <div className="contact-social-actions">
              <a className={`button ${isMusic ? "button-secondary" : "button-primary"}`} href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" aria-label="Contactar a Tamara por LinkedIn (abre en otra pestaña)">LinkedIn ↗</a>
              <a className={`button ${isMusic ? "button-primary" : "button-secondary"}`} href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" aria-label="Contactar a Tamara por Instagram, @tammatadia (abre en otra pestaña)">Instagram {instagramHandle} ↗</a>
            </div>
            <p className="contact-context">Si escribís por una oportunidad laboral o artística, incluí el tipo de propuesta, fechas aproximadas y una breve descripción.</p>
          </div>
          {emailEnabled && <ContactForm key={defaultIntent} enabled defaultIntent={defaultIntent} />}
        </div>
      </section>
    </>
  );
}
