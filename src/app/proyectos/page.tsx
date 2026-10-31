import type { Metadata } from "next";
import { PageIntro } from "@/components/layout/page-intro";
import { Cases } from "@/components/sections/cases";
import { CtaBand } from "@/components/sections/cta-band";

export const metadata: Metadata = {
  title: "Proyectos y experiencia",
  description: "Casos reales de comunicación, marketing, desarrollo comercial y gestión de proyectos de Tamara Atadía.",
  alternates: { canonical: "/proyectos" }
};

export default function ProyectosPage() {
  return (
    <>
      <PageIntro eyebrow="Experiencia aplicada"
        title={<>Cinco proyectos. <em>Trabajo real.</em></>}
        description="Medios, gestión ambiental, fitness y cultura. En cada caso vas a encontrar el contexto, las tareas que asumí y materiales del proyecto." />
      <Cases />
      <CtaBand eyebrow="Conocés mi trabajo" title="¿Querés explorar una colaboración?"
        description="Contame qué tipo de participación estás buscando."
        href="/contacto" label="Ponernos en contacto" />
    </>
  );
}
