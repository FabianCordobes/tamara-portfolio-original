import Link from "next/link";
import { cases } from "@/content/cases";
import { TrackedLink } from "@/components/ui/tracked-link";

const featuredIDs = ["full-medios", "brush-fest"] as const;
const featuredCases = featuredIDs.map(id => {
  const project = cases.find(item => item.id === id);
  if (!project || project.results.length === 0) {
    throw new Error(`El caso destacado ${id} necesita un resultado documentado.`);
  }
  return project;
});

export function HomeProof() {
  return (
    <section className="section shell home-proof" aria-labelledby="home-proof-heading">
      <div className="home-proof-intro">
        <p className="eyebrow">Experiencia aplicada</p>
        <h2 id="home-proof-heading">Proyectos reales, <em>trabajo concreto.</em></h2>
        <p>Estos ejemplos muestran responsabilidades asumidas y alcances documentados en medios y producción cultural.</p>
      </div>
      <div className="home-proof-list">
        {featuredCases.map(project => (
          <article key={project.id} className="home-proof-item">
            <div>
              <p className="eyebrow">{project.category}</p>
              <h3>{project.name}</h3>
              <p>{project.role}</p>
            </div>
            <div className="home-proof-outcome">
              <strong>{project.results[0].value}</strong>
              <span>{project.results[0].label}</span>
              <TrackedLink
                href={`/proyectos#caso-${project.id}`}
                analyticsEvent="case_cta_click"
                analyticsContext={project.id}
                className="text-link"
              >
                Ver el caso ↗
              </TrackedLink>
            </div>
          </article>
        ))}
        <Link className="home-proof-all text-link" href="/proyectos">
          Explorar todos los proyectos ↗
        </Link>
      </div>
    </section>
  );
}
