import { profile } from "@/content/profile";
import { ButtonLink } from "@/components/ui/button";
import { MediaPlaceholder } from "@/components/ui/media-placeholder";

export function Hero() {
  return (
    <section id="inicio" className="shell hero hero-redesign">
      <div className="hero-copy">
        <p className="eyebrow">Tamara Atadía · Marketing, comunicación y proyectos</p>
        <h1>Ideas claras.<br />Equipos conectados.<br /><em>Proyectos que avanzan.</em></h1>
        <p className="hero-intro">Soy Tamara Atadía. Conecto estrategia de comunicación, desarrollo comercial y gestión de personas para transformar desafíos en planes de acción concretos.</p>
        <div className="hero-actions">
          <ButtonLink href="/servicios">Quiero impulsar un proyecto ↗</ButtonLink>
          <ButtonLink href="/perfil-profesional" variant="secondary">Busco incorporar talento</ButtonLink>
        </div>
        <p className="hero-signature">{profile.positioning}</p>
      </div>
      <MediaPlaceholder media={{ src: "/images/tamara-atadia.png", alt: "Retrato de Tamara Atadía", width: 1254, height: 1254 }} />
      <div className="hero-bottom">
        <span>ESTRATEGIA / LIDERAZGO / CREATIVIDAD / EJECUCIÓN</span>
        <a href="#elegir-recorrido">Elegí cómo podemos trabajar juntos ↓</a>
      </div>
    </section>
  );
}
