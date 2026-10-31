import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/layout/page-intro";
import { Profile } from "@/components/sections/profile";
import { SelectedExperience } from "@/components/sections/selected-experience";
import { Education } from "@/components/sections/education";
import { ProjectPreview } from "@/components/sections/project-preview";
import { CtaBand } from "@/components/sections/cta-band";
import { socialLinks } from "@/content/social";

export const metadata: Metadata = {
  title: "Perfil profesional y trayectoria",
  description: "Conocé la experiencia profesional de Tamara Atadía en marketing, comunicación, liderazgo, desarrollo comercial, medios y gestión de proyectos.",
  alternates: { canonical: "/perfil-profesional" }
};

export default function PerfilProfesionalPage() {
  return (
    <>
      <PageIntro eyebrow="02 / Para empresas y reclutadores" title={<>Visión estratégica. <em>Capacidad de ejecución.</em></>} description="Mi recorrido integra comunicación, marketing, desarrollo comercial y coordinación de equipos en proyectos de diferentes sectores. Me interesa sumar esa mirada a nuevos desafíos profesionales.">
        <Link className="button button-primary" href="/contacto?motivo=empleo">Contactar por una oportunidad ↗</Link>
        <a className="button button-secondary" href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer">Ver LinkedIn ↗</a>
      </PageIntro>
      <Profile />
      <section className="section shell professional-music-bridge"><p className="eyebrow">Perfil multidisciplinario</p><h2>Experiencia profesional y <em>expresión artística.</em></h2><p>Mi trayectoria incluye tanto la comunicación y gestión comercial como el canto y la producción cultural. También me interesan propuestas que necesiten combinar interpretación, marketing y trabajo en equipo.</p><div className="professional-social-links">
        <Link href="/musica" className="text-link">Ver mi perfil musical y videos ↗</Link>
        <a href={socialLinks.instagram} className="text-link" target="_blank" rel="noopener noreferrer">Mi Instagram artístico @tammatadia ↗</a>
      </div></section>
      <SelectedExperience />
      <Education />
      <ProjectPreview />
      <CtaBand eyebrow="Oportunidades profesionales" title="¿Buscás sumar experiencia y compromiso a tu equipo?" description="Podés contactarme para compartir el rol, la empresa y el desafío que están abordando. El CV actualizado puede solicitarse por contacto." href="/contacto?motivo=empleo" label="Contactar a Tamara" />
    </>
  );
}
