import { TrackedLink } from "@/components/ui/tracked-link";
import { MediaPlaceholder } from "@/components/ui/media-placeholder";

export function Hero() {
  return (
    <section id="inicio" className="shell hero hero-redesign">
      <div className="hero-copy">
        <p className="eyebrow">Tamara Atadía / Marketing · Comunicación · Canto</p>
        <h1>Estrategia para marcas. <em>Presencia para escenarios.</em></h1>
        <p className="hero-intro">
          Trabajo en marketing, desarrollo comercial y coordinación de proyectos.
          También llevo mi voz al escenario. Conocé mi experiencia y conversemos sobre tu propuesta.
        </p>
        <div className="hero-actions">
          <TrackedLink
            href="/contacto?motivo=servicio#formulario"
            className="button button-primary"
            analyticsEvent="contact_cta_click"
            analyticsContext="home_hero"
          >
            Consultar por un proyecto ↗
          </TrackedLink>
          <TrackedLink
            href="/proyectos"
            className="button button-secondary"
            analyticsEvent="projects_cta_click"
            analyticsContext="home_hero"
          >
            Ver trabajos reales ↗
          </TrackedLink>
        </div>
        <a className="hero-tertiary-link" href="#elegir-recorrido">
          ¿Buscás una profesional o cantante? Elegí tu recorrido ↓
        </a>
      </div>
      <MediaPlaceholder media={{ src: "/images/tamara-atadia.png", alt: "Retrato de Tamara Atadía", width: 1254, height: 1254 }} />
    </section>
  );
}
