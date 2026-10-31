import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/layout/page-intro";
import { solutions } from "@/content/solutions";
import { CtaBand } from "@/components/sections/cta-band";
import { ProjectPhoto } from "@/components/ui/project-photo";

export const metadata: Metadata = {
  title: "Estrategia, producción y dirección de proyectos",
  description: "Soluciones integradas de estrategia, producción, dirección de proyectos, comunicación y desarrollo comercial con Tamara Atadía.",
  alternates: { canonical: "/servicios" }
};

export default function ServiciosPage() {
  return (
    <>
      <PageIntro eyebrow="Soluciones / Estrategia, producción y dirección"
        title={<>De una necesidad concreta a <em>un proyecto realizable.</em></>}
        description="No se trata de sumar tareas aisladas. Cada intervención combina criterio estratégico, producción, comunicación y gestión según el desafío.">
        <Link href="/contacto?motivo=proyectos#formulario" className="button button-primary">Consultar por un proyecto ↗</Link>
        <Link href="/proyectos" className="text-link">Ver trabajos anteriores ↗</Link>
      </PageIntro>
      <section className="section shell" aria-labelledby="services-heading">
        <div className="section-heading">
          <p className="eyebrow">Áreas de trabajo</p>
          <h2 id="services-heading">Cinco capacidades que <em>se conectan.</em></h2>
        </div>
        <div className="solutions-list">
          {solutions.map(solution => (
            <article key={solution.id} id={solution.id} className="solution-row">
              <div className="solution-heading">
                <span className="eyebrow">{solution.number} / {solution.name}</span>
                <h3>{solution.name}</h3>
                <p className="solution-problem">{solution.problem}</p>
              </div>
              <div className="solution-detail">
                <p>{solution.approach}</p>
                <p><strong>Qué puede incluir:</strong> {solution.scope}</p>
                <p><strong>Qué buscamos:</strong> {solution.outcome}</p>
                <p className="solution-connection">{solution.connects}</p>
                <Link className="text-link" href={`/contacto?motivo=${solution.id}#formulario`}>Conversemos sobre esta necesidad ↗</Link>
              </div>
            </article>
          ))}
        </div>
        <div className="editorial-photo-feature service-photo-feature">
          <ProjectPhoto
            src="/images/projects/brush-fest-programacion.jpg"
            alt="Pieza gráfica de difusión con la programación de Brush Fest"
            caption="Material de comunicación de Brush Fest · Programación de diciembre de 2023"
            variant="document"
          />
          <div className="editorial-photo-copy">
            <p className="eyebrow">Un ejemplo real / Brush Fest</p>
            <h3>Comunicación que acompaña la producción.</h3>
            <p>La planificación también se expresa en materiales concretos. Esta pieza de difusión pertenece al proyecto Brush Fest, donde participé en la coordinación y organización del evento.</p>
            <Link className="text-link" href="/proyectos#caso-brush-fest">Conocé el trabajo de Brush Fest ↗</Link>
          </div>
        </div>
      </section>
      <section className="section shell strategy-method-bridge">
        <p className="eyebrow">Del diagnóstico a la realización</p>
        <h2>Una forma de trabajar con <em>dirección y flexibilidad.</em></h2>
        <p>El proceso se adapta a cada contexto. Lo importante es comprender, definir y organizar antes de producir y evaluar.</p>
        <Link href="/metodologia" className="text-link">Conocé la metodología ↗</Link>
      </section>
      <CtaBand eyebrow="Consultas de servicios" title="¿Cuál es el desafío de tu proyecto?"
        description="Describí tu necesidad para evaluar un alcance de trabajo adecuado."
        href="/contacto?motivo=servicio#formulario" label="Enviar consulta" />
    </>
  );
}
