import { education, additionalStudies } from "@/content/education";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";
export function Education() {
  return (
    <section id="formacion" className="section shell">
      <SectionHeading number="05" label="Formación" title="Herramientas para comunicar, coordinar y crear." />
      <div className="grid gap-4 md:grid-cols-2">
        {education.map(item => <Card key={item.name}><p className="eyebrow">{item.institution}</p><h3>{item.name}</h3><p>{item.detail}</p></Card>)}
      </div>
      <h3 className="additional-studies-heading">Otros estudios</h3>
      <ul className="additional-studies">{additionalStudies.map(item => <li key={item.name}><strong>{item.name}</strong><p>{item.detail}</p></li>)}</ul>
    </section>
  );
}
