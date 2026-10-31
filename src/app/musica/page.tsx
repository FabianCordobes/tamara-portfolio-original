import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/layout/page-intro";
import { MusicPlayer } from "@/components/sections/music-player";
import { MusicGallery } from "@/components/sections/music-gallery";
import { CtaBand } from "@/components/sections/cta-band";
import { socialLinks } from "@/content/social";

export const metadata: Metadata = {
  title: "Universo creativo: canto, música y producción cultural",
  description: "Escuchá interpretaciones de Tamara Atadía: rock, melódico y folklore. Videos de actuaciones en vivo y fotografías de escenario.",
  alternates: { canonical: "/musica" }
};

export default function MusicaPage() {
  return (
    <>
      <PageIntro eyebrow="Universo creativo / Música y expresión"
        title={<>Mi voz, <em>en escena.</em></>}
        description="Una dimensión de mi recorrido: canto, interpretación, experiencias culturales y trabajo con públicos. Explorá registros auténticos de rock, canción melódica y folklore.">
        <Link href="#videos" className="button button-primary">Escuchar actuaciones ↓</Link>
        <Link href="#fotos" className="text-link">Ver fotografías ↓</Link>
      </PageIntro>
      <div id="videos" className="music-anchor"><MusicPlayer /></div>
      <MusicGallery />
      <section className="section shell music-synergy" aria-labelledby="music-synergy-heading">
        <div className="music-synergy-intro">
          <p className="eyebrow">Canto y producción</p>
          <h2 id="music-synergy-heading">También detrás <em>del escenario.</em></h2>
        </div>
        <div>
          <p>La experiencia en comunicación amplía mi participación artística. Puedo contribuir desde la planificación de contenidos, la promoción de espectáculos o la coordinación operativa.</p>
          <p className="music-case-links">Conocé el trabajo en <Link href="/proyectos#caso-tamms">Tamms</Link> y <Link href="/proyectos#caso-brush-fest">Brush Fest</Link>.</p>
          <a href={socialLinks.instagram} className="text-link" target="_blank" rel="noopener noreferrer">Seguí mi actividad en Instagram @tammatadia ↗</a>
        </div>
      </section>
      <CtaBand eyebrow="Castings · Presentaciones · Colaboraciones"
        title="¿Buscás una cantante para tu proyecto?"
        description="Compartí el repertorio, el formato previsto y las fechas de la convocatoria."
        href="/contacto?motivo=musica#formulario" label="Enviar propuesta artística" />
    </>
  );
}
