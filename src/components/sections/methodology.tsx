const steps = [
 ["Entender", "El negocio, el contexto y los objetivos."],
 ["Detectar", "Oportunidades, diferenciales y prioridades."],
 ["Definir", "Una dirección y un plan de acción."],
 ["Liderar", "Personas, recursos y responsabilidades."],
 ["Ejecutar", "Conectar disciplinas y llevar el plan a la práctica."],
 ["Medir", "Resultados, aprendizajes y próximos pasos."]
];
export function Methodology() {
 return <section id="metodologia" className="section"><div className="shell"><p className="eyebrow">Cómo trabajo</p><h2>La estrategia necesita <em>movimiento.</em></h2><ol className="method-grid">{steps.map(([title, text], i) => <li key={title}><span className="eyebrow">0{i + 1}</span><h3>{title}</h3><p>{text}</p></li>)}</ol></div></section>;
}
