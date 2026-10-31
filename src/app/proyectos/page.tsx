import type { Metadata } from "next";
import { PageIntro } from "@/components/layout/page-intro";
import { Cases } from "@/components/sections/cases";
import { CtaBand } from "@/components/sections/cta-band";

export const metadata: Metadata = {
  title: "Proyectos reales de marketing, medios y eventos",
  description: "Casos de Tamara Atadía en medios, marketing, emprendimientos y producción de eventos: Full Medios, Milpos, Strong Fitness Gym, Tamms y Brush Fest."
  alternates: { canonical: "/proyectos" }
};

export default function ProyectosPage() {
  return (
    <>
      <PageIntro eyebrow="Experiencia aplicada"
        title={<>Experiencia que se traduce <em>en acción.</em></>}
        description="Algunas experiencias de mi recorrido profesional, desde medios de comunicación hasta iniciativas comerciales y culturales. Cada caso refleja el contexto, las responsabilidades asumidas y el trabajo realizado." />
      <Cases />
      <CtaBand eyebrow="Conocés mi trabajo" title="¿Querés explorar una colaboración?"
        description="Contame qué tipo de participación estás buscando."
        href="/contacto" label="Ponernos en contacto" />
    </>
  );
}
