import Image from "next/image";
import { cases } from "@/content/cases";
import { SectionHeading } from "@/components/ui/section-heading";
export function Cases() {
  return (
    <section id="proyectos" className="section cases-section">
      <div className="shell">
        <SectionHeading number="03" label="Proyectos seleccionados" title="Distintos desafíos. Un aporte concreto." />
        <div className="case-list">
          {cases.map((project, index) => (
            <article key={project.id} className={`case-study case-${project.id}`}>
              <div className="case-intro">
                <div className="case-topline"><span className="eyebrow">0{index + 1} / {project.category}</span><span className="case-brand">{project.logo && <Image className="case-logo" src={project.logo} alt={`Logo de ${project.name}`} width={72} height={72} sizes="72px" />}<span className="case-name">{project.name}</span></span></div>
                <p className="case-period">{project.period}</p>
                {project.affiliation && <p className="eyebrow">{project.affiliation}</p>}
                <h3>{project.headline}</h3>
                <p>{project.challenge}</p>
                <p><strong className="text-accent">Mi responsabilidad:</strong> {project.role}</p>
              </div>
              {project.results.length > 0 && <dl className="case-results">{project.results.map(result => <div key={`${result.value}-${result.label}`}><dt>{result.value}</dt><dd>{result.label}</dd></div>)}</dl>}
              <details className="case-details">
                <summary><span>Conocer el trabajo <span className="sr-only">en {project.name}</span></span><span className="details-icon" aria-hidden="true">+</span></summary>
                <div className="case-expanded"><a className="case-social" href={project.instagram} target="_blank" rel="noopener noreferrer">Ver {project.name} en Instagram ↗</a></div>
                {project.featuredProject && <div className="case-expanded">
                  <div><p className="eyebrow">{project.featuredProject.period}</p><h4>{project.featuredProject.name} — {project.featuredProject.title}</h4></div>
                  <div>{project.featuredProject.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}</div>
                </div>}
                {project.broadcast && <figure className="case-reel case-broadcast">
                  <iframe src={project.broadcast.embed} title={`Transmisión de ${project.featuredProject?.name ?? project.name}`} loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
                  <figcaption><p>{project.broadcast.caption}</p><a className="case-social" href={project.broadcast.url} target="_blank" rel="noopener noreferrer">Ver transmisión en YouTube ↗</a></figcaption>
                </figure>}
                {project.reel && <figure className="case-reel">
                  <iframe src={project.reel.embed} title={`Video de ${project.name}`} loading="lazy" allow="autoplay; encrypted-media; fullscreen; picture-in-picture" allowFullScreen />
                  <figcaption><p>{project.reel.caption}</p><a className="case-social" href={project.reel.url} target="_blank" rel="noopener noreferrer">Ver reel en Instagram ↗</a></figcaption>
                </figure>}
                {project.sample && <figure className="case-sample">
                  <Image src={project.sample.src} alt={project.sample.alt} width={project.sample.width ?? 360} height={project.sample.height ?? 640} sizes="(max-width: 640px) 80vw, 280px" />
                  <figcaption><p>{project.sample.caption}</p><a className="case-social" href={project.sample.url} target="_blank" rel="noopener noreferrer">Ver publicación original ↗</a></figcaption>
                </figure>}
                {project.gallery?.map(photo => <figure className="case-sample" key={photo.src}>
                  <Image src={photo.src} alt={photo.alt} width={1080} height={1080} sizes="(max-width: 640px) 80vw, 280px" />
                  <figcaption><p>{photo.caption}</p><a className="case-social" href={photo.url} target="_blank" rel="noopener noreferrer">Ver publicación original ↗</a></figcaption>
                </figure>)}
              </details>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
