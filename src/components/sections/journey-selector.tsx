import Link from "next/link";

const needs = [
  {
    number: "01",
    kind: "Estrategia y desarrollo",
    title: "Quiero desarrollar o transformar mi negocio",
    description: "Definir prioridades, analizar oportunidades y construir una propuesta de valor.",
    href: "/servicios#estrategia",
    action: "Explorar estrategia"
  },
  {
    number: "02",
    kind: "Producción y dirección",
    title: "Necesito producir y dirigir un proyecto",
    description: "Articular recursos, proveedores, personas y tiempos para concretar una idea.",
    href: "/servicios#produccion",
    action: "Explorar producción"
  },
  {
    number: "03",
    kind: "Comunicación y posicionamiento",
    title: "Necesito fortalecer mi comunicación",
    description: "Dar claridad a la identidad, los mensajes y la relación con cada público.",
    href: "/servicios#comunicacion",
    action: "Explorar comunicación"
  }
];

export function JourneySelector() {
  return (
    <section id="elegir-recorrido" className="section shell journeys-section" aria-labelledby="journeys-heading">
      <div className="section-heading">
        <p className="eyebrow">Empecemos por tu necesidad</p>
        <h2 id="journeys-heading">¿Qué necesitás <em>hacer realidad?</em></h2>
      </div>
      <div className="journey-grid journey-grid-three">
        {needs.map(item => (
          <article className="journey-card" key={item.number}>
            <Link href={item.href} className="journey-card-link">
              <span className="journey-card-heading">
                <span className="journey-index">{item.number}</span>
                <span className="eyebrow">{item.kind}</span>
              </span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <span className="journey-action">{item.action} <span aria-hidden="true">↗</span></span>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
