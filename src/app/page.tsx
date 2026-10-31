import type { Metadata } from "next";
import { Hero } from "@/components/sections/hero";
import { JourneySelector } from "@/components/sections/journey-selector";
import { HomeProof } from "@/components/sections/home-proof";

export const metadata: Metadata = {
  title: "Marketing, comunicación, proyectos y canto",
  description: "Tamara Atadía trabaja en marketing, comunicación y coordinación de proyectos, y comparte su experiencia como cantante. Servicios, casos reales y contacto.",
  alternates: { canonical: "/" }
};

export default function Home() {
  return (
    <>
      <Hero />
      <JourneySelector />
      <HomeProof />
    </>
  );
}
