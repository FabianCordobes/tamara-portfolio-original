import { profile } from "@/content/profile";
import { SectionHeading } from "@/components/ui/section-heading";

export function Profile() {
  return (
    <section id="perfil" className="section shell">
      <SectionHeading number="01" label="Perfil" title="Del emprendimiento propio a la dirección de proyectos." />
      <div className="profile-grid">
        <p className="statement">{profile.headline}</p>
        <div className="space-y-5">
          {profile.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
        </div>
      </div>
    </section>
  );
}
