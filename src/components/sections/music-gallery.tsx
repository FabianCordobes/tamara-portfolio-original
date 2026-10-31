"use client";

import Image from "next/image";
import { useState, type KeyboardEvent } from "react";

const photos = [
  {
    src: "/images/music/tamara-escenario-mar-de-ajo.jpg",
    alt: "Tamara Atadía cantando con micrófono durante una presentación en Mar de Ajó",
    caption: "Interpretación en vivo · Mar de Ajó"
  },
  {
    src: "/images/music/tamara-show-mar-de-ajo.jpg",
    alt: "Tamara Atadía en una presentación musical frente al público",
    caption: "Presencia escénica · Mar de Ajó"
  }
] as const;

export function MusicGallery() {
  const [current, setCurrent] = useState(0);
  const go = (step: number) => setCurrent((index) => (index + step + photos.length) % photos.length);
  const handleKeys = (event: KeyboardEvent<HTMLElement>) => {
    if (event.key === "ArrowLeft") { event.preventDefault(); go(-1); }
    if (event.key === "ArrowRight") { event.preventDefault(); go(1); }
  };

  return (
    <section className="section shell music-gallery-section" aria-labelledby="music-gallery-title">
      <div className="music-gallery-heading">
        <div>
          <p className="eyebrow">Galería fotográfica</p>
          <h2 id="music-gallery-title">La expresión también <em>se ve.</em></h2>
          <p>Imágenes de presentaciones reales, registradas durante actuaciones en Mar de Ajó.</p>
        </div>
        <div className="music-gallery-controls" aria-label="Controles del carrusel">
          <button type="button" aria-label="Fotografía anterior" onClick={() => go(-1)}>←</button>
          <span aria-live="polite" aria-atomic="true">{String(current + 1).padStart(2,"0")} / {String(photos.length).padStart(2,"0")}</span>
          <button type="button" aria-label="Siguiente fotografía" onClick={() => go(1)}>→</button>
        </div>
      </div>
      <div className="music-gallery-stage" onKeyDown={handleKeys} tabIndex={0} role="region" aria-roledescription="carrusel" aria-label="Fotografías de Tamara en el escenario">
        {photos.map((photo, index) => (
          <figure key={photo.src} className="music-gallery-slide" hidden={index !== current} aria-label={`Fotografía ${index + 1} de ${photos.length}`}>
            <Image src={photo.src} alt={photo.alt} width={1066} height={1600}
              className="music-gallery-image" sizes="(max-width: 768px) 95vw, 650px" priority={index === 0} />
            <figcaption>{photo.caption}</figcaption>
          </figure>
        ))}
      </div>
      <div className="music-gallery-pagination" role="group" aria-label="Elegir fotografía">
        {photos.map((photo, index) => (
          <button type="button" key={photo.src} className={`music-gallery-dot ${index === current ? "active" : ""}`}
            aria-label={`Mostrar fotografía ${index+1}`} aria-pressed={index === current}
            onClick={() => setCurrent(index)} />
        ))}
      </div>
    </section>
  );
}
