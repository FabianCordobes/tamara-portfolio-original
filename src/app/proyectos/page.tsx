import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/layout/page-intro";
import { Cases } from "@/components/sections/cases";
import { CtaBand } from "@/components/sections/cta-band";

export const metadata: Metadata = {
  title: "Proyectos y experiencia",
  description: "Casos reales de marketing, comunicación, producción y desarrollo de proyectos de Tamara Atadía: Full Medios, Milpos, Strong Fitness Gym, Tamms y Brush Fest.",
  alternates: { canonical: "/proyectos" }
};

export default function ProyectosPage() {
  return (
    <>
      <PageIntro eyebrow="Proyectos / Experiencia real" title={<>Distintos desafíos. <em>Un aporte concreto.</em></>} description="Conocé experiencias en medios, gestión ambiental, fitness, emprendimientos y producción cultural. Cada caso muestra el contexto, mis responsabilidades y el trabajo realizado.">
        <Link className="button button-secondary" href="/servicios">Ver servicios</Link>
        <Link className="button button-secondary" href="/perfil-profesional">Ver trayectoria profesional</Link>
      </PageIntro>
      <Cases />
      <CtaBand eyebrow="¿Te interesa trabajar conmigo?" title="Hablemos de lo que necesitás." description="Podemos conversar sobre un proyecto puntual o una oportunidad laboral." href="/contacto" label="Contactar" />
    </>
  );
}
