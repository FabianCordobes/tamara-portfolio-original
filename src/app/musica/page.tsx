import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/layout/page-intro";
import { MusicPlayer } from "@/components/sections/music-player";
import { CtaBand } from "@/components/sections/cta-band";
import { socialLinks } from "@/content/social";

export const metadata: Metadata = {
  title: "Música y escenario | Canto y comunicación",
  description: "Interpretaciones en vivo de Tamara Atadía. Una propuesta artística que conecta canto, comunicación y producción cultural.",
  alternates: { canonical: "/musica" }
};

export default function MusicaPage() {
  return (
    <>
      <PageIntro eyebrow="Música / Interpretaciones vocales"
        title={<>Mi voz, <em>en escena.</em></>}
        description="Compartí escenario con músicos y exploré distintas expresiones del canto. Acá podés escuchar una selección de esas interpretaciones.">
        <Link href="#videos" className="button button-primary">Ver videos ↓</Link>
        <Link href="/contacto?motivo=musica" className="text-link">Convocatorias y colaboraciones ↗</Link>
      </PageIntro>
      <div id="videos" className="music-anchor"><MusicPlayer /></div>
      <section className="section shell music-synergy" aria-labelledby="music-synergy-heading">
        <div className="music-synergy-intro">
          <p className="eyebrow">Canto y producción</p>
          <h2 id="music-synergy-heading">Además de interpretar, conozco <em>el detrás de escena.</em></h2>
        </div>
        <div>
          <p>Mi experiencia en comunicación y organización de eventos también me permite aportar a la difusión y coordinación de propuestas artísticas.</p>
          <p className="music-case-links">Conocé el trabajo en <Link href="/proyectos#caso-tamms">Tamms</Link> y <Link href="/proyectos#caso-brush-fest">Brush Fest</Link>.</p>
          <a href={socialLinks.instagram} className="text-link" target="_blank" rel="noopener noreferrer">Seguí mi actividad en Instagram @tammatadia ↗</a>
        </div>
      </section>
      <CtaBand eyebrow="Castings · Presentaciones · Colaboraciones"
        title="¿Buscás una cantante para tu proyecto?"
        description="Contame el repertorio, el formato y la propuesta."
        href="/contacto?motivo=musica" label="Enviar propuesta artística" />
    </>
  );
}
