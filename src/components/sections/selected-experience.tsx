import { experience } from "@/content/experience";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
export function SelectedExperience() {
  return (
    <section id="experiencia" className="section shell">
      <SectionHeading
        number="02"
        label="Otros ámbitos de experiencia"
        title="Otros sectores en los que trabajé."
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
