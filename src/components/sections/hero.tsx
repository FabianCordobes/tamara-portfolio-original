import { ButtonLink } from "@/components/ui/button";
import { MediaPlaceholder } from "@/components/ui/media-placeholder";

export function Hero() {
  return (
    <section id="inicio" className="shell hero hero-redesign">
      <div className="hero-copy">
        <p className="eyebrow">Tamara Atadía / Comunicación · Gestión · Canto</p>
        <h1>Comunicación con propósito. <em>Expresión con identidad.</em></h1>
        <p className="hero-intro">Mi trayectoria abarca marketing, desarrollo comercial y producción cultural. Como cantante, traslado esa sensibilidad creativa al escenario.</p>
        <div className="hero-actions">
          <ButtonLink href="#elegir-recorrido">Encontrá lo que buscás ↓</ButtonLink>
          <ButtonLink href="/musica" variant="secondary">Escuchame cantar ↗</ButtonLink>
        </div>
      </div>
      <MediaPlaceholder media={{ src: "/images/tamara-atadia.png", alt: "Retrato de Tamara Atadía", width: 1254, height: 1254 }} />
    </section>
  );
}
