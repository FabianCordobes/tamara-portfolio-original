import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/sections/hero";
import { JourneySelector } from "@/components/sections/journey-selector";
import { ProjectPreview } from "@/components/sections/project-preview";
import { socialLinks } from "@/content/social";

export const metadata: Metadata = { alternates: { canonical: "/" } };

export default function Home() {
  return (
    <>
      <Hero />
      <JourneySelector />
      <ProjectPreview />
      <section className="section shell music-home-teaser" aria-labelledby="home-music-heading">
        <div>
          <p className="eyebrow">En el escenario</p>
          <h2 id="home-music-heading">Una voz, <em>distintas canciones.</em></h2>
        </div>
        <div>
          <p>Melódico, folklore y una canción inédita: una selección de interpretaciones para escuchar online.</p>
          <div className="music-teaser-actions">
            <Link href="/musica" className="button button-secondary">Ver mis videos ↗</Link>
            <a href={socialLinks.instagram} className="text-link" target="_blank" rel="noopener noreferrer">Instagram @tammatadia ↗</a>
          </div>
        </div>
      </section>
    </>
  );
}
