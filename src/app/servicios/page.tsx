import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/layout/page-intro";
import { Methodology } from "@/components/sections/methodology";
import { ProjectPreview } from "@/components/sections/project-preview";
import { CtaBand } from "@/components/sections/cta-band";

export const metadata: Metadata = {
  title: "Servicios de marketing, comunicación y gestión de proyectos",
  description: "Servicios de marketing, posicionamiento, desarrollo comercial y producción para organizaciones.",
  alternates: { canonical: "/servicios" }
};

const services = [
  { number: "01", title: "Estrategia de marketing",
    premise: "Cuando faltan prioridades claras",
    detail: "Estudio el contexto competitivo, identifico públicos relevantes y establezco prioridades de posicionamiento.",
    output: "Diagnóstico estratégico, objetivos y hoja de ruta." },
  { number: "02", title: "Comunicación y contenidos",
    premise: "Cuando el mensaje no llega",
    detail: "Desarrollo mensajes consistentes con la identidad de marca. Selecciono formatos y canales según cada audiencia.",
    output: "Narrativa de marca, contenidos y lineamientos editoriales." },
  { number: "03", title: "Desarrollo comercial",
    premise: "Cuando hay oportunidades por activar",
    detail: "Detecto oportunidades de negocio mediante propuestas comerciales, alianzas institucionales y acciones de vinculación.",
    output: "Propuestas de valor, gestión de vínculos y desarrollo de oportunidades." },
  { number: "04", title: "Producción y coordinación",
    premise: "Cuando una idea necesita ejecución",
    detail: "Estructuro procesos de producción, distribuyo responsabilidades y superviso experiencias presenciales.",
    output: "Plan operativo, coordinación de equipos y seguimiento." }
];

export default function ServiciosPage() {
  return (
    <>
      <PageIntro eyebrow="Servicios / Para marcas y organizaciones"
        title={<>Lo que necesitás resolver. <em>Cómo puedo aportar.</em></>}
        description="Cada intervención parte de un diagnóstico. El alcance se define según los objetivos del proyecto.">
        <Link href="/contacto?motivo=servicio#formulario" className="button button-primary">Consultar por un proyecto ↗</Link>
        <Link href="/proyectos" className="text-link">Ver trabajos anteriores ↗</Link>
      </PageIntro>
      <section className="section shell" aria-labelledby="services-heading">
        <div className="section-heading">
          <p className="eyebrow">Áreas de trabajo</p>
          <h2 id="services-heading">Cuatro áreas de <em>especialización.</em></h2>
        </div>
        <div className="services-grid">
          {services.map(service => (
            <article key={service.number} className="service-card">
              <span className="eyebrow">{service.number} / {service.premise}</span>
              <h3>{service.title}</h3>
              <p>{service.detail}</p>
              <p className="service-deliverables"><strong>En qué trabajamos:</strong> {service.output}</p>
            </article>
          ))}
        </div>
      </section>
      <Methodology />
      <ProjectPreview />
      <CtaBand eyebrow="Consultas de servicios" title="¿Cuál es el desafío de tu proyecto?"
        description="Describí tu necesidad para evaluar un alcance de trabajo adecuado."
        href="/contacto?motivo=servicio#formulario" label="Enviar consulta" />
    </>
  );
}
