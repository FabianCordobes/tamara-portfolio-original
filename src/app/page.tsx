import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/sections/hero";
import { JourneySelector } from "@/components/sections/journey-selector";

export const metadata: Metadata = { alternates: { canonical: "/" } };

export default function Home() {
  return (
    <>
      <Hero />
      <JourneySelector />
      <section className="section shell experience-proof" aria-labelledby="experience-proof-heading">
        <div>
          <p className="eyebrow">Experiencia aplicada</p>
          <h2 id="experience-proof-heading">Más allá de las ideas, <em>la experiencia.</em></h2>
        </div>
        <div className="experience-proof-copy">
          <p>Mi trabajo abarca medios de comunicación, iniciativas comerciales, emprendimientos y producción cultural. Cada experiencia aporta herramientas para afrontar desafíos diferentes.</p>
          <Link href="/proyectos" className="text-link">Conocé algunos de mis trabajos ↗</Link>
        </div>
      </section>
    </>
  );
}
