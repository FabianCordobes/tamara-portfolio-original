import type { Metadata } from "next";
import { Hero } from "@/components/sections/hero";
import { JourneySelector } from "@/components/sections/journey-selector";
import { HomeProof } from "@/components/sections/home-proof";
import { CreativeBridge } from "@/components/sections/creative-bridge";

export const metadata: Metadata = {
  title: "Estrategia, producción y dirección de proyectos",
  description: "Tamara Atadía conecta estrategia, personas y recursos para desarrollar negocios, producir proyectos y fortalecer la comunicación. Conocé su trabajo.",
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
