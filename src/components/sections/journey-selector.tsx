import Link from "next/link";

const journeys = [
  { number: "01", kind: "Empresas y emprendimientos",
    title: "Necesito impulsar una marca",
    description: "Estrategia de marca, comunicación comercial y ejecución orientada a objetivos.",
    href: "/servicios", action: "Conocer servicios" },
  { number: "02", kind: "Selección de talento",
    title: "Busco una profesional",
    description: "Trayectoria en marketing, coordinación operativa y conducción de equipos.",
    href: "/perfil-profesional", action: "Ver trayectoria" },
  { number: "03", kind: "Bandas, castings y escenarios",
    title: "Busco una cantante",
    description: "Muestras vocales, experiencia escénica y producción cultural.",
    href: "/musica", action: "Ver actuaciones" }
];

export function JourneySelector() {
  return (
    <section id="elegir-recorrido" className="section shell journeys-section" aria-labelledby="journeys-heading">
      <div className="section-heading">
        <p className="eyebrow">Elegí tu recorrido</p>
        <h2 id="journeys-heading">¿Qué te trae <em>por acá?</em></h2>
      </div>
      <div className="journey-grid journey-grid-three">
        {journeys.map(journey => (
          <article className="journey-card" key={journey.number}>
            <Link href={journey.href} className="journey-card-link">
              <span className="journey-card-heading">
                <span className="journey-index">{journey.number}</span>
                <span className="eyebrow">{journey.kind}</span>
              </span>
              <h3>{journey.title}</h3>
              <p>{journey.description}</p>
              <span className="journey-action">{journey.action} <span aria-hidden="true">↗</span></span>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
