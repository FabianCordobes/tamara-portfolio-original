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
  {
    number: "01", name: "Estrategia de marketing y comunicación",
    problem: "Cuando hay muchas ideas pero falta una dirección clara.",
    offer: "Trabajo sobre el contexto, la audiencia y los objetivos para definir prioridades de posicionamiento, comunicación y próximas acciones.",
    includes: "Diagnóstico, enfoque estratégico y planificación."
  },
  {
    number: "02", name: "Comunicación, contenidos y posicionamiento",
    problem: "Cuando una propuesta tiene valor, pero no logra expresarlo.",
    offer: "Ayudo a ordenar mensajes, definir líneas de contenido y conectar la identidad del proyecto con las personas a las que quiere llegar.",
    includes: "Mensajes, contenidos, canales y criterios de comunicación."
  },
  {
    number: "03", name: "Desarrollo comercial y vinculación",
    problem: "Cuando hace falta conectar visibilidad con oportunidades concretas.",
    offer: "Aporto experiencia en comercialización, relacionamiento y articulación de propuestas con públicos, aliados y potenciales clientes.",
    includes: "Oportunidades comerciales, propuestas de valor y coordinación."
  },
  {
    number: "04", name: "Gestión y producción de proyectos",
    problem: "Cuando una idea necesita equipo, organización y ejecución.",
    offer: "Integro planificación, coordinación de personas, recursos y producción de experiencias, con foco en ordenar el proceso de trabajo.",
    includes: "Etapas, responsabilidades, coordinación y seguimiento."
  }
];

export default function ServiciosPage() {
  return (
    <>
      <PageIntro eyebrow="01 / Para marcas, emprendimientos y organizaciones" title={<>Estrategia para crecer. <em>Gestión para avanzar.</em></>} description="Cada proyecto tiene desafíos propios. Puedo ayudarte a identificar prioridades, organizar el trabajo y convertir ideas en acciones concretas.">
        <Link href="/contacto?motivo=servicio" className="button button-primary">Contame sobre tu proyecto ↗</Link>
        <Link href="/proyectos" className="button button-secondary">Ver trabajos reales</Link>
      </PageIntro>
      <section className="section shell" aria-labelledby="services-heading">
        <div className="section-heading"><p className="eyebrow">Cómo puedo aportar</p><h2 id="services-heading">Servicios con una <em>mirada integral.</em></h2></div>
        <div className="services-grid">
          {services.map((service) => (
            <article key={service.number} className="service-card">
              <span className="eyebrow">{service.number} / {service.problem}</span>
              <h3>{service.name}</h3>
              <p>{service.offer}</p>
              <p className="service-deliverables"><strong>Podemos trabajar en:</strong> {service.includes}</p>
              <Link className="text-link" href="/contacto?motivo=servicio">Consultar por este servicio ↗</Link>
            </article>
          ))}
        </div>
      </section>
      <Methodology />
      <ProjectPreview />
      <CtaBand eyebrow="Empecemos a conversar" title="Tu proyecto merece una propuesta pensada para él." description="Contame qué estás construyendo, qué te gustaría mejorar o qué desafío necesitás resolver." href="/contacto?motivo=servicio" label="Solicitar una conversación" />
    </>
  );
}
