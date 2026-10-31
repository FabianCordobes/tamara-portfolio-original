import type { Metadata } from "next";
import { Hero } from "@/components/sections/hero";
import { JourneySelector } from "@/components/sections/journey-selector";
import { ProjectPreview } from "@/components/sections/project-preview";
import { CtaBand } from "@/components/sections/cta-band";

export const metadata: Metadata = {
  alternates: { canonical: "/" }
};

export default function Home() {
  return (
    <>
      <Hero />
      <JourneySelector />
      <ProjectPreview />
      <section className="section shell home-statement">
        <p className="eyebrow">Mi enfoque</p>
        <h2>Una buena estrategia necesita <em>personas que la hagan posible.</em></h2>
        <p>Mi experiencia combina trabajo comercial, comunicación, medios y producción cultural. Me interesa comprender cada desafío, conectar equipos y llevar las ideas a la práctica con una dirección clara.</p>
      </section>
      <CtaBand eyebrow="Empecemos" title="¿Hay algo que quieras hacer realidad?" description="Contame sobre tu proyecto o tu búsqueda profesional. El primer paso es entender qué necesitás." href="/contacto" label="Ir a contacto" />
    </>
  );
}
