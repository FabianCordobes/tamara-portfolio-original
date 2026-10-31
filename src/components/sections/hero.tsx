import { TrackedLink } from "@/components/ui/tracked-link";
import { MediaPlaceholder } from "@/components/ui/media-placeholder";

export function Hero() {
  return (
    <section id="inicio" className="shell hero hero-redesign" aria-labelledby="brand-heading">
      <div className="hero-copy">
        <p className="eyebrow">TAMARA ATADÍA / Dirección, estrategia y producción</p>
        <h1 id="brand-heading">Transformo ideas en <em>proyectos que toman forma.</em></h1>
        <p className="hero-intro">
          Integro estrategia, comunicación y gestión para desarrollar iniciativas, coordinar equipos y convertir objetivos en acciones concretas.
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
            Ver proyectos ↗
          </TrackedLink>
        </div>
      </div>
      <MediaPlaceholder media={{ src: "/images/tamara-atadia.png", alt: "Retrato de Tamara Atadía", width: 1254, height: 1254 }} />
    </section>
  );
}
