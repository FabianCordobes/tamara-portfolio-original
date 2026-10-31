import Link from "next/link";
import { cases } from "@/content/cases";
import { TrackedLink } from "@/components/ui/tracked-link";
import { ProjectPhoto } from "@/components/ui/project-photo";

const featuredIDs = ["tamms", "full-medios", "brush-fest"] as const;
const featuredCases = featuredIDs.map(id => {
  const project = cases.find(item => item.id === id);
  if (!project) {
    throw new Error(`No existe el caso destacado ${id}.`);
  }
  return project;
});

export function HomeProof() {
  return (
    <section className="section shell home-proof" aria-labelledby="home-proof-heading">
      <div className="home-proof-intro">
        <p className="eyebrow">Experiencia aplicada</p>
        <h2 id="home-proof-heading">Experiencia que se traduce <em>en decisiones.</em></h2>
        <p>De un emprendimiento propio a medios y producciones culturales. Conocé el desafío, el alcance y el rol en cada proyecto.</p>
      </div>
      <div className="home-proof-list">
        {featuredCases.map(project => (
          <article key={project.id} className="home-proof-item">
            <div>
              <p className="eyebrow">{project.category}</p>
              <h3>{project.name}</h3>
              <p>{project.role}</p>
              {project.id === "full-medios" && (
                <ProjectPhoto
                  className="home-proof-photo"
                  src="/images/projects/full-medios-estudio.jpg"
                  alt="Estudio de radio y streaming de Full Medios"
                  caption="Estudio de Full Medios · Archivo del proyecto, 2025"
                />
              )}
            </div>
            <div className="home-proof-outcome">
              <strong className="home-proof-label">Mi aporte</strong>
              <span>{project.conclusion}</span>
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
