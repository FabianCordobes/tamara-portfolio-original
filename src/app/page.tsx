import { Education } from "@/components/sections/education";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { Profile } from "@/components/sections/profile";
import { Impact } from "@/components/sections/impact";
import { Expertise } from "@/components/sections/expertise";
import { SelectedExperience } from "@/components/sections/selected-experience";
import { Cases } from "@/components/sections/cases";
import { Methodology } from "@/components/sections/methodology";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
export default function Home() {
  return (
    <>
      <a className="skip-link" href="#contenido">
        Saltar al contenido
      </a>
      <Header />
      <main id="contenido">
        <Hero />
        <Profile />
        <Impact />
        <Expertise />
        <Cases />
        <SelectedExperience />
        <Education />
        <Methodology />
      </main>
      <Footer />
      <ScrollReveal />
    </>
  );
}
