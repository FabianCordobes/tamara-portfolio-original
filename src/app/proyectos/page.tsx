import type { Metadata } from "next";
import { PageIntro } from "@/components/layout/page-intro";
import { Cases } from "@/components/sections/cases";
import { CtaBand } from "@/components/sections/cta-band";

export const metadata: Metadata = {
  title: "Experiencia y trabajos realizados",
  description: "Casos reales de comunicación, marketing, desarrollo comercial y gestión de proyectos de Tamara Atadía.",
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
