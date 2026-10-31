import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/layout/page-intro";
import { MusicPlayer } from "@/components/sections/music-player";
import { CtaBand } from "@/components/sections/cta-band";

export const metadata: Metadata = {
  title: "Música y escenario | Cantante y comunicación",
  description: "Conocé la faceta artística de Tamara Atadía: interpretaciones vocales, música en vivo y un perfil que integra canto, producción y estrategia de marketing.",
  alternates: { canonical: "/musica" }
};

export default function MusicaPage() {
  return (
    <>
      <PageIntro eyebrow="Tamara Atadía / Música y escenario"
        title={<>La música también es <em>parte de quien soy.</em></>}
        description="Soy cantante y mi recorrido artístico convive con mi experiencia en comunicación, marketing y producción. Me interesa participar en propuestas musicales donde la interpretación, la identidad y la conexión con el público sean protagonistas.">
        <Link href="#videos" className="button button-primary">Ver interpretaciones ↗</Link>
        <Link href="/contacto?motivo=musica" className="button button-secondary">Proponer una colaboración</Link>
      </PageIntro>
      <section className="section shell music-identity">
        <div>
          <p className="eyebrow">Una identidad, distintas expresiones</p>
          <h2>Voz, escenario y <em>visión estratégica.</em></h2>
        </div>
        <div>
          <p>La música no es un complemento de mi perfil: forma parte de mi identidad. Mis experiencias musicales y culturales conviven con el trabajo en marketing, comunicación y coordinación de proyectos.</p>
          <p>Puedo aportar interpretación vocal a una propuesta artística y, cuando el proyecto lo necesita, sumar una mirada de difusión, posicionamiento, comunicación con el público y producción.</p>
        </div>
      </section>
      <div id="videos" className="music-anchor"><MusicPlayer /></div>
      <section className="section shell music-synergy" aria-labelledby="music-synergy-heading">
        <p className="eyebrow">Mi diferencial</p>
        <h2 id="music-synergy-heading">Una artista que también piensa <em>el proyecto completo.</em></h2>
        <div className="music-synergy-grid">
          <article><span className="eyebrow">01 / Interpretación</span><h3>Canto y expresión</h3><p>Presentaciones en vivo y exploración de distintos estilos musicales, desde lo melódico hasta el folklore.</p></article>
          <article><span className="eyebrow">02 / Comunicación</span><h3>Identidad y difusión</h3><p>Experiencia en contenidos, comunicación de proyectos y conexión con públicos, medios y comunidades.</p></article>
          <article><span className="eyebrow">03 / Producción</span><h3>Organización y equipo</h3><p>Experiencia en coordinación de eventos, programación cultural, trabajo con artistas y gestión de actividades.</p></article>
        </div>
        <p className="music-case-links">También podés conocer mis experiencias en <Link href="/proyectos#caso-tamms">Tamms</Link> y <Link href="/proyectos#caso-brush-fest">Brush Fest</Link>.</p>
      </section>
      <CtaBand eyebrow="Convocatorias · Castings · Colaboraciones"
        title="¿Buscás una voz y una mirada estratégica?"
        description="Podemos conversar sobre presentaciones, proyectos musicales, audiciones, colaboraciones y propuestas que integren música y comunicación."
        href="/contacto?motivo=musica" label="Contactar por una propuesta artística" />
    </>
  );
}
