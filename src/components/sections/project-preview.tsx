import Image from "next/image";
import Link from "next/link";
import { cases } from "@/content/cases";

const featuredIDs = ["full-medios", "milpos", "strong-gym"];
const featured = featuredIDs.flatMap(id => {
  const project = cases.find(item => item.id === id);
  return project ? [project] : [];
});

export function ProjectPreview() {
  return (
    <section id="trabajos" className="section shell projects-preview" aria-labelledby="featured-work-heading">
      <div className="section-heading section-heading-with-link">
        <div>
          <p className="eyebrow">Proyectos seleccionados</p>
          <h2 id="featured-work-heading">Trabajo real, <em>en contexto.</em></h2>
          <p>Una muestra de las responsabilidades que asumí en distintos sectores.</p>
        </div>
        <Link className="text-link" href="/proyectos">Ver los cinco proyectos ↗</Link>
      </div>
      <div className="project-preview-grid">
        {featured.map((project, index) => (
          <article className="preview-card" key={project.id}>
            <div className="preview-card-head">
              <span className="eyebrow">0{index + 1} / {project.category}</span>
              {project.logo && <Image src={project.logo} alt="" width={76} height={76} className="preview-logo" />}
            </div>
            <h3>{project.name}</h3>
            <p className="preview-headline">{project.headline}</p>
            <p className="preview-evidence">{project.results[0]
              ? <><strong>{project.results[0].value}</strong><span>{project.results[0].label}</span></>
              : <span>{project.period}</span>}</p>
            <Link className="text-link" href={`/proyectos#caso-${project.id}`}>Conocer el caso ↗</Link>
          </article>
        ))}
      </div>
    </section>
  );
}
