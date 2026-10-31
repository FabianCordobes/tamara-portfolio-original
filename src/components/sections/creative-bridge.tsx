import Link from "next/link";

export function CreativeBridge() {
  return (
    <section className="section creative-bridge" aria-labelledby="creative-bridge-heading">
      <div className="shell creative-bridge-inner">
        <div>
          <p className="eyebrow">Una dimensión de mi identidad</p>
          <h2 id="creative-bridge-heading">También hay un <em>universo creativo.</em></h2>
        </div>
        <div>
          <p>La música y la producción cultural forman parte de mi recorrido. El trabajo con artistas, públicos y escenarios amplió mi mirada sobre comunicación, experiencias y producción.</p>
          <Link href="/musica" className="text-link">Explorar música, actuaciones y fotografías ↗</Link>
        </div>
      </div>
    </section>
  );
}
