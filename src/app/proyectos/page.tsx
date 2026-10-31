import type { Metadata } from "next";
import { PageIntro } from "@/components/layout/page-intro";
import { Cases } from "@/components/sections/cases";
import { CtaBand } from "@/components/sections/cta-band";

export const metadata: Metadata = {
  title: "Proyectos reales de marketing, medios y eventos",
  description: "Casos de Tamara Atadía en medios, marketing, emprendimientos y producción de eventos: Full Medios, Milpos, Strong Fitness Gym, Tamms y Brush Fest.",
  alternates: { canonical: "/proyectos" }
};

export default function ProyectosPage() {
  return (
    <>
      <PageIntro eyebrow="Experiencia aplicada"
        title={<>Experiencia que se traduce <em>en acción.</em></>}
        description="De un negocio propio a medios y producciones culturales: cada caso presenta su contexto, mis responsabilidades y el trabajo realizado. Las cifras sin documentación quedan pendientes de verificación." />
      <Cases />
      <CtaBand eyebrow="Conocés mi trabajo" title="¿Querés explorar una colaboración?"
        description="Contame qué tipo de participación estás buscando."
        href="/contacto" label="Ponernos en contacto" />
    </>
  );
}
