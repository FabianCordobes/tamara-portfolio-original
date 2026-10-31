const steps = [
  ["Entender", "Escuchar qué necesita el proyecto y conocer su contexto."],
  ["Ordenar", "Definir prioridades, recursos y responsabilidades."],
  ["Hacer", "Coordinar la ejecución con las personas involucradas."],
  ["Revisar", "Evaluar lo logrado y los próximos pasos."]
];
export function Methodology() {
  return (
    <section id="metodologia" className="section methodology-section">
      <div className="shell">
        <p className="eyebrow">Mi forma de trabajar</p>
        <h2>Del diagnóstico <em>a la práctica.</em></h2>
        <ol className="method-grid">
          {steps.map(([title, description], index) => (
            <li key={title}><span className="eyebrow">0{index + 1}</span><h3>{title}</h3><p>{description}</p></li>
          ))}
        </ol>
      </div>
    </section>
  );
}
