import { TrackedLink } from "@/components/ui/tracked-link";
import { MediaPlaceholder } from "@/components/ui/media-placeholder";

export function Hero() {
  return (
    <section id="inicio" className="shell hero hero-redesign" aria-labelledby="brand-heading">
      <div className="hero-copy">
        <p className="eyebrow">TAMARA ATADÍA / Dirección, estrategia y producción</p>
        <h1 id="brand-heading">Conecto ideas, personas y recursos para <em>hacer proyectos realidad.</em></h1>
        <p className="hero-intro">
          Estrategia, producción, desarrollo comercial y comunicación para negocios y organizaciones que necesitan definir una dirección y llevarla a la práctica.
        </p>
        <div className="hero-actions">
          <TrackedLink
            href="/contacto?motivo=proyectos#formulario"
            className="button button-primary"
            analyticsEvent="contact_cta_click"
            analyticsContext="home_hero"
          >
            Conversemos sobre tu proyecto ↗
          </TrackedLink>
          <TrackedLink
            href="/proyectos"
            className="button button-secondary"
            analyticsEvent="projects_cta_click"
            analyticsContext="home_hero"
          >
            Explorar proyectos ↗
          </TrackedLink>
        </div>
        <a className="hero-tertiary-link" href="#elegir-recorrido">
          Conocé cómo puedo aportar a tu proyecto ↓
        </a>
      </div>
      <MediaPlaceholder media={{ src: "/images/tamara-atadia.png", alt: "Retrato de Tamara Atadía", width: 1254, height: 1254 }} />
    </section>
  );
}
