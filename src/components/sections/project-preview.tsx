import Image from "next/image";
import Link from "next/link";
import { cases } from "@/content/cases";

const featuredIDs = ["full-medios", "milpos", "strong-gym"];
const featured = featuredIDs.flatMap((id) => {
  const project = cases.find((item) => item.id === id);
  return project ? [project] : [];
});

export function ProjectPreview() {
  return (
    <section className="section shell projects-preview" aria-labelledby="featured-work-heading">
      <div className="section-heading section-heading-with-link">
        <div>
          <p className="eyebrow">Trabajos reales</p>
          <h2 id="featured-work-heading">Experiencia que habla <em>por sí misma.</em></h2>
          <p>Proyectos de comunicación, gestión comercial y desarrollo de negocios que reflejan distintas formas de generar valor.</p>
        </div>
        <Link className="text-link" href="/proyectos">Ver todos los proyectos ↗</Link>
      </div>
      <div className="project-preview-grid">
        {featured.map((project, index) => (
          <article className="preview-card" key={project.id}>
            <div className="preview-card-head">
              <span className="eyebrow">0{index + 1} / {project.category}</span>
              {project.logo && <Image src={project.logo} alt={`Identidad visual de ${project.name}`} width={76} height={76} className="preview-logo" />}
            </div>
            <h3>{project.name}</h3>
            <p className="preview-headline">{project.headline}</p>
            <p>{project.challenge}</p>
            {project.results[0] && <p className="preview-evidence"><strong>{project.results[0].value}</strong> · {project.results[0].label}</p>}
            <Link className="text-link" href={`/proyectos#caso-${project.id}`}>Conocer el proyecto ↗</Link>
          </article>
        ))}
      </div>
    </section>
  );
}
