import { profile } from "@/content/profile";
import { SectionHeading } from "@/components/ui/section-heading";

export function Profile() {
  return (
    <section id="perfil" className="section shell">
      <SectionHeading number="01" label="Sobre mí" title="De los medios al mundo emprendedor." />
      <div className="profile-grid">
        <p className="statement">Aprendí a trabajar tanto detrás de una estrategia como en la operación diaria.</p>
        <div className="space-y-5">
          {profile.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
        </div>
      </div>
    </section>
  );
}
