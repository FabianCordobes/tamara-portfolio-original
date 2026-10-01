import { profile } from "@/content/profile";
import { ButtonLink } from "@/components/ui/button";
import { MediaPlaceholder } from "@/components/ui/media-placeholder";
export function Hero() {
  return (
    <section id="inicio" className="shell hero">
      <div className="hero-copy">
        <p className="eyebrow">Portfolio profesional / Estrategia en acción</p>
        <h1>
          Estrategia que
          <br />
          se convierte
          <br />
          en <em>acción.</em>
        </h1>
        <p className="hero-intro">{profile.intro}</p>
        <div className="flex flex-wrap gap-3">
          <ButtonLink href="#proyectos">Explorar experiencia</ButtonLink>
          <ButtonLink href="#contacto" variant="secondary">
            Conversemos
          </ButtonLink>
        </div>
        <p className="hero-signature">
          Marketing y Comunicación · Gestión de proyectos
        </p>
      </div>
      <MediaPlaceholder media={{ src: "/images/tamara-atadia.png", alt: "Retrato de Tamara Atadía", width: 1254, height: 1254 }} />
      <div className="hero-bottom">
        <span>TAMARA ATADÍA</span>
        <span>Estrategia / Liderazgo / Creatividad / Ejecución</span>
      </div>
    </section>
  );
}
