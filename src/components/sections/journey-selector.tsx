import Link from "next/link";

const journeys = [
  {
    number: "01",
    eyebrow: "PARA MARCAS, EMPRENDIMIENTOS Y ORGANIZACIONES",
    title: "Necesito impulsar un proyecto",
    description: "Estrategia de marketing y comunicación, desarrollo comercial y coordinación de iniciativas desde la idea hasta su ejecución.",
    points: ["Servicios adaptados al desafío", "Casos de proyectos reales", "Contacto para solicitar una propuesta"],
    href: "/servicios",
    action: "Explorar servicios"
  },
  {
    number: "02",
    eyebrow: "PARA EMPRESAS Y RECLUTADORES",
    title: "Quiero conocer su experiencia",
    description: "Una mirada transversal que combina planificación, liderazgo de equipos, comunicación y gestión de proyectos.",
    points: ["Trayectoria en distintos sectores", "Competencias y formación", "Contacto por oportunidades laborales"],
    href: "/perfil-profesional",
    action: "Ver perfil profesional"
  },
  {
    number: "03",
    eyebrow: "PARA BANDAS, CASTINGS Y PROYECTOS MUSICALES",
    title: "Busco una cantante con visión artística",
    description: "Conocé mis interpretaciones en vivo y una mirada que une canto, comunicación y producción cultural.",
    points: ["Videos con interpretaciones vocales", "Experiencia musical y cultural", "Contacto para propuestas artísticas"],
    href: "/musica",
    action: "Escuchar mis interpretaciones"
  }
];

export function JourneySelector() {
  return (
    <section id="elegir-recorrido" className="section shell journeys-section" aria-labelledby="journeys-heading">
      <div className="section-heading">
        <p className="eyebrow">Tres caminos, una identidad</p>
        <h2 id="journeys-heading">¿De qué manera podemos <em>conectar?</em></h2>
        <p>Elegí qué estás buscando y encontrá la información que necesitás, sin rodeos.</p>
      </div>
      <div className="journey-grid journey-grid-three">
        {journeys.map((journey) => (
          <article className="journey-card" key={journey.number}>
            <div className="journey-card-heading"><span className="journey-index">{journey.number}</span><span className="eyebrow">{journey.eyebrow}</span></div>
            <h3>{journey.title}</h3>
            <p>{journey.description}</p>
            <ul>{journey.points.map((point) => <li key={point}>{point}</li>)}</ul>
            <Link href={journey.href} className="button button-secondary">{journey.action} <span aria-hidden="true">↗</span></Link>
          </article>
        ))}
      </div>
    </section>
  );
}
