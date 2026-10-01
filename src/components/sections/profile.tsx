import { profile } from "@/content/profile";
import { SectionHeading } from "@/components/ui/section-heading";
export function Profile() {
  return (
    <section id="perfil" className="section shell">
      <SectionHeading
        number="01"
        label="Perfil"
        title="Un recorrido entre medios, negocios y cultura."
      />
      <div className="profile-grid">
        <p className="statement">
          Experiencia en proyectos propios y organizaciones de distintos sectores.
        </p>
        <div className="space-y-5">
          {profile.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
