import type { Metadata } from "next";
import { Hero } from "@/components/sections/hero";
import { JourneySelector } from "@/components/sections/journey-selector";
import { ProjectPreview } from "@/components/sections/project-preview";
import Link from "next/link";
import { socialLinks } from "@/content/social";
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
      <section className="section shell music-home-teaser">
        <div><p className="eyebrow">Mi faceta artística</p><h2>También vivo la música <em>desde el escenario.</em></h2></div>
        <div><p>La interpretación vocal, las presentaciones en vivo y la producción cultural forman parte de mi recorrido. Conocé mis videos musicales y cómo conecto el arte con la comunicación.</p><div className="music-teaser-actions">
          <Link href="/musica" className="button button-secondary">Explorar Música y escenario ↗</Link>
          <a href={socialLinks.instagram} className="text-link" target="_blank" rel="noopener noreferrer">Instagram @tammatadia ↗</a>
        </div></div>
      </section>
      <section className="section shell home-statement">
        <p className="eyebrow">Mi enfoque</p>
        <h2>Una buena estrategia necesita <em>personas que la hagan posible.</em></h2>
        <p>Mi experiencia combina marketing, comunicación, desarrollo comercial y gestión de proyectos. Me interesa comprender cada desafío, conectar equipos y llevar las ideas a la práctica con una dirección clara.</p>
      </section>
      <CtaBand eyebrow="Empecemos" title="¿Hay algo que quieras hacer realidad?" description="Contame sobre tu proyecto o tu búsqueda profesional. El primer paso es entender qué necesitás." href="/contacto" label="Ir a contacto" />
    </>
  );
}
