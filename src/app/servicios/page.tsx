import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/layout/page-intro";
import { Methodology } from "@/components/sections/methodology";
import { ProjectPreview } from "@/components/sections/project-preview";
import { CtaBand } from "@/components/sections/cta-band";

export const metadata: Metadata = {
  title: "Servicios de marketing, comunicación y gestión de proyectos",
  description: "Estrategia de comunicación, contenidos, desarrollo comercial y coordinación de proyectos con Tamara Atadía.",
  alternates: { canonical: "/servicios" }
};

const services = [
  { number: "01", title: "Estrategia de marketing",
    premise: "Cuando faltan prioridades claras",
    detail: "Analizo el contexto y las audiencias para definir un enfoque de posicionamiento y un plan de acción.",
    output: "Diagnóstico, objetivos y planificación." },
  { number: "02", title: "Comunicación y contenidos",
    premise: "Cuando el mensaje no llega",
    detail: "Organizo qué comunicar, a quién, en qué canales y con qué identidad para que cada pieza tenga propósito.",
    output: "Mensajes, contenidos y criterios de publicación." },
  { number: "03", title: "Desarrollo comercial",
    premise: "Cuando hay oportunidades por activar",
    detail: "Aporto experiencia en ventas, vinculación institucional y propuestas comerciales para conectar con nuevos públicos.",
    output: "Propuesta de valor, relaciones y acciones comerciales." },
  { number: "04", title: "Producción y coordinación",
    premise: "Cuando una idea necesita ejecución",
    detail: "Planifico etapas y coordino personas, recursos y operaciones, especialmente en iniciativas y experiencias presenciales.",
    output: "Organización, responsabilidades y seguimiento." }
];

export default function ServiciosPage() {
  return (
    <>
      <PageIntro eyebrow="Servicios / Para marcas y organizaciones"
        title={<>Lo que necesitás resolver. <em>Cómo puedo aportar.</em></>}
        description="Cada colaboración empieza por entender el problema. Estas son las áreas en las que puedo acompañarte.">
        <Link href="/contacto?motivo=servicio" className="button button-primary">Consultar por un proyecto ↗</Link>
        <Link href="/proyectos" className="text-link">Ver trabajos anteriores ↗</Link>
      </PageIntro>
      <section className="section shell" aria-labelledby="services-heading">
        <div className="section-heading">
          <p className="eyebrow">Áreas de trabajo</p>
          <h2 id="services-heading">Cuatro formas de <em>sumar valor.</em></h2>
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
        description="Compartime el contexto y vemos qué tipo de colaboración tiene sentido."
        href="/contacto?motivo=servicio" label="Enviar consulta" />
    </>
  );
}
