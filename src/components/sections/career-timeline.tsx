import Link from "next/link";
import { cases } from "@/content/cases";

const steps = [
  { id: "tamms", year: "2020–2023", label: "Crear y gestionar", desc: "Emprendimiento propio: operación, comercialización, equipo y evolución hacia eventos y contratación artística." },
  { id: "brush-fest", year: "2023", label: "Producir y articular", desc: "Dirección de producción, equipos y vínculos comerciales para un encuentro cultural." },
  { id: "milpos", year: "2024–2025", label: "Conectar territorio y comunicación", desc: "Campañas, coordinación logística y articulación con escuelas e instituciones." },
  { id: "full-medios", year: "2025–2026", label: "Coordinar contenidos y medios", desc: "Organización operativa y participación en capacitación comercial en medios y proyectos audiovisuales." }
];
export function CareerTimeline() {
  return (
    <section id="trayectoria" className="section shell career-section" aria-labelledby="career-title">
      <p className="eyebrow">Trayectoria</p>
      <h2 id="career-title">Responsabilidades que se <em>fueron conectando.</em></h2>
      <p className="career-intro">Las experiencias se superponen en algunos períodos. El recorrido muestra cómo se amplió el alcance del trabajo, no una sucesión rígida de cargos.</p>
      <ol className="career-timeline">
        {steps.map(item => (
          <li key={item.id}>
            <span className="eyebrow">{item.year}</span>
            <div>
              <h3>{item.label}</h3>
              <p>{item.desc}</p>
              <Link href={`/proyectos#caso-${item.id}`} className="text-link">Ver experiencia ↗</Link>
            </div>
          </li>
        ))}
      </ol>
      <p className="career-context">Otras experiencias como Costa Acuática, Movia y la actividad comercial complementan este recorrido; sus fechas y alcances específicos están por documentarse.</p>
    </section>
  );
}
