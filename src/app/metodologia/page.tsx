import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/layout/page-intro";
import { Methodology } from "@/components/sections/methodology";
import { CtaBand } from "@/components/sections/cta-band";

export const metadata: Metadata = {
  title: "Metodología: de la estrategia a la producción",
  description: "Cómo Tamara Atadía aborda proyectos: comprender, definir, diseñar, producir, evaluar y evolucionar.",
  alternates: { canonical: "/metodologia" }
};

export default function MetodologiaPage() {
  return (
    <>
      <PageIntro
        eyebrow="Metodología / Una forma de trabajar"
        title={<>Cada proyecto necesita <em>criterio y dirección.</em></>}
        description="Conecto estrategia, recursos y personas para que las decisiones se conviertan en acciones. El proceso se adapta a cada desafío."
      >
        <Link href="/proyectos" className="text-link">Conocé los proyectos ↗</Link>
      </PageIntro>
      <Methodology />
      <CtaBand
        eyebrow="Nuevos proyectos"
        title="Conversemos sobre lo que querés desarrollar."
        description="Compartime el punto de partida para evaluar cómo puedo aportar."
        href="/contacto?motivo=proyectos#formulario"
        label="Iniciar una conversación"
      />
    </>
  );
}
