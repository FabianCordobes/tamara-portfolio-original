import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/layout/page-intro";
import { Profile } from "@/components/sections/profile";
import { SelectedExperience } from "@/components/sections/selected-experience";
import { Education } from "@/components/sections/education";
import { CtaBand } from "@/components/sections/cta-band";
import { socialLinks } from "@/content/social";

export const metadata: Metadata = {
  title: "Trayectoria profesional",
  description: "Conocé la trayectoria de Tamara Atadía en marketing, comunicación, ventas, medios, coordinación y proyectos culturales.",
  alternates: { canonical: "/perfil-profesional" }
};

export default function PerfilProfesionalPage() {
  return (
    <>
      <PageIntro eyebrow="Perfil / Para empresas y reclutadores"
        title={<>Comunicación, negocios y <em>gestión de equipos.</em></>}
        description="Trabajé en medios, emprendimientos y proyectos comerciales. Me interesa aportar esa experiencia a equipos que necesiten organización, criterio y ejecución.">
        <Link className="button button-primary" href="/contacto?motivo=empleo#formulario">Contactar por una oportunidad ↗</Link>
        <a className="text-link" href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer">Ver LinkedIn ↗</a>
      </PageIntro>
      <Profile />
      <SelectedExperience />
      <Education />
      <section className="section shell professional-music-bridge">
        <div><p className="eyebrow">Otro lado de mi recorrido</p><h2>También soy <em>cantante.</em></h2></div>
        <div><p>Conocé mis actuaciones y los proyectos culturales en los que participé.</p>
          <div className="professional-social-links">
            <Link href="/musica" className="text-link">Música y escenario ↗</Link>
            <a href={socialLinks.instagram} className="text-link" target="_blank" rel="noopener noreferrer">Instagram @tammatadia ↗</a>
          </div>
        </div>
      </section>
      <CtaBand eyebrow="Selección de talento" title="¿Hay una posición en la que pueda sumar?"
        description="Compartime el rol y la empresa para iniciar la conversación."
        href="/contacto?motivo=empleo#formulario" label="Enviar propuesta laboral" />
    </>
  );
}
