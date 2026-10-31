import type { Metadata } from "next";
import { Hero } from "@/components/sections/hero";
import { JourneySelector } from "@/components/sections/journey-selector";
import { HomeProof } from "@/components/sections/home-proof";
import { CreativeBridge } from "@/components/sections/creative-bridge";

export const metadata: Metadata = {
  title: "Estrategia, producción y dirección de proyectos",
  description: "Tamara Atadía integra estrategia, comunicación y gestión de proyectos. Conocé su experiencia en medios, emprendimientos y producción cultural.",
  alternates: { canonical: "/" }
};

export default function Home() {
  return (
    <>
      <Hero />
      <JourneySelector />
      <HomeProof />
      <CreativeBridge />
    </>
  );
}
