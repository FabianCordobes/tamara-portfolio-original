import { experience } from "@/content/experience";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
export function SelectedExperience() {
  return (
    <section id="experiencia" className="section shell">
      <SectionHeading
        number="04"
        label="Experiencia seleccionada"
        title="Distintas industrias. La misma capacidad de conectar."
      />
      <div className="grid gap-4 md:grid-cols-2">
        {experience.map((e) => (
          <Card key={e.name}>
            <p className="eyebrow">{e.category}</p>
            <h3>{e.name}</h3>
            <p>{e.description}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}
