const steps = [
  { title: "Comprender", description: "Conocer el contexto, escuchar las necesidades y definir el problema antes de intervenir." },
  { title: "Definir", description: "Acordar prioridades, objetivos, criterio de decisión y dirección del proyecto." },
  { title: "Diseñar", description: "Planificar el alcance, los recursos, los responsables y los tiempos de trabajo." },
  { title: "Producir y ejecutar", description: "Articular personas, proveedores y tareas; acompañar decisiones y resolver contingencias." },
  { title: "Evaluar", description: "Revisar indicadores pertinentes, resultados y aprendizajes, sin atribuir lo que no corresponde." },
  { title: "Evolucionar", description: "Determinar qué conviene ajustar, sostener o desarrollar en la próxima etapa." }
];

export function Methodology() {
  return (
    <section id="metodologia" className="section methodology-section" aria-labelledby="methodology-heading">
      <div className="shell">
        <p className="eyebrow">Cómo trabajo</p>
        <h2 id="methodology-heading">Dar dirección. <em>Hacerlo realidad.</em></h2>
        <p className="method-intro">No es una fórmula cerrada: cada proyecto exige un alcance distinto. Estos seis momentos orientan el trabajo y pueden superponerse según la realidad de cada equipo.</p>
        <ol className="method-grid method-grid-six">
          {steps.map(({ title, description }, index) => (
            <li key={title}>
              <span className="eyebrow">{String(index + 1).padStart(2, "0")}</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
