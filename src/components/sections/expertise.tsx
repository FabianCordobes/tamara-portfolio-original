import { expertise } from "@/content/expertise";
import { SectionHeading } from "@/components/ui/section-heading";
export function Expertise() {
  return (
    <section id="expertise" className="section shell">
      <SectionHeading
        number="02"
        label="Especialidades"
        title="Una visión transversal. Una dirección clara."
      />
      <div>
        {expertise.map((e, i) => (
          <article key={e.title} className="expertise-row">
            <span className="eyebrow">0{i + 1}</span>
            <h3>{e.title}</h3>
            <p>{e.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
