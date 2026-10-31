"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type FocusEvent, type KeyboardEvent, type TouchEvent } from "react";

const photos = [
  {
    src: "/images/music/canto-escenario-colores.jpg",
    width: 2560, height: 1706,
    alt: "Tamara interpretando una canción con micrófono bajo iluminación de escenario",
    caption: "Interpretación en vivo",
    category: "Escenario"
  },
  {
    src: "/images/music/retrato-estudio-guitarra.jpg",
    width: 2560, height: 1706,
    alt: "Retrato artístico de Tamara con guitarra y bombo en una sesión de estudio",
    caption: "Retrato de estudio con instrumentos",
    category: "Retrato"
  },
  {
    src: "/images/music/tamara-escenario-mar-de-ajo.jpg",
    width: 1066, height: 1600,
    alt: "Tamara cantando durante una presentación musical en Mar de Ajó",
    caption: "Presentación en Mar de Ajó",
    category: "Escenario"
  },
  {
    src: "/images/music/retrato-vinilos.jpg",
    width: 2560, height: 1706,
    alt: "Composición artística de Tamara junto a discos de vinilo y partituras",
    caption: "Sesión conceptual de identidad musical",
    category: "Retrato"
  },
  {
    src: "/images/music/actuacion-escenario.jpg",
    width: 648, height: 466,
    alt: "Tamara cantando con micrófono en un escenario iluminado",
    caption: "Presentación con público",
    category: "Escenario"
  },
  {
    src: "/images/music/tamara-show-mar-de-ajo.jpg",
    width: 899, height: 1599,
    alt: "Tamara en escena durante una actuación nocturna en Mar de Ajó",
    caption: "Otra mirada del show en Mar de Ajó",
    category: "Escenario"
  },
  {
    src: "/images/music/duo-musical.jpg",
    width: 1288, height: 966,
    alt: "Tamara posando junto a un músico con guitarra en una producción fotográfica",
    caption: "Colaboración musical",
    category: "Producción"
  },
  {
    src: "/images/music/actuacion-television.jpg",
    width: 1280, height: 776,
    alt: "Captura televisiva de Tamara cantando en un programa",
    caption: "Interpretación en televisión",
    category: "Medios"
  },
  {
    src: "/images/music/expresion-artistica.jpg",
    width: 1200, height: 1600,
    alt: "Fotografía de expresión corporal de Tamara con atuendo de escena",
    caption: "Expresión artística",
    category: "Retrato"
  },
  {
    src: "/images/music/entrevista-television.jpg",
    width: 1600, height: 720,
    alt: "Entrevista de Tamara Atadía en una transmisión televisiva",
    caption: "Participación en medios",
    category: "Medios"
  }
] as const;

const intervalMs = 5000;

export function MusicGallery() {
  const [current, setCurrent] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [inView, setInView] = useState(false);
  const [pageVisible, setPageVisible] = useState(true);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const galleryRef = useRef<HTMLElement>(null);
  const touchStart = useRef<number | null>(null);

  const go = (step: number) =>
    setCurrent(index => (index + step + photos.length) % photos.length);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    // A user's reduced-motion preference disables automatic cycling by default.
    // An explicit click on the play button can re-enable it.
    let mounted = true;
    queueMicrotask(() => {
      if (mounted && query.matches) setPlaying(false);
    });
    const onChange = (event: MediaQueryListEvent) => {
      if (event.matches) setPlaying(false);
    };
    query.addEventListener("change", onChange);
    return () => {
      mounted = false;
      query.removeEventListener("change", onChange);
    };
  }, []);

  useEffect(() => {
    const element = galleryRef.current;
    if (!element) return;

    if (!("IntersectionObserver" in window)) {
      const timer = window.setTimeout(() => setInView(true), 0);
      return () => window.clearTimeout(timer);
    }

    const observer = new IntersectionObserver(
      entries => setInView(entries.some(entry => entry.isIntersecting)),
      { threshold: 0.25 }
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onVisibilityChange = () => setPageVisible(!document.hidden);
    document.addEventListener("visibilitychange", onVisibilityChange);
    return () => document.removeEventListener("visibilitychange", onVisibilityChange);
  }, []);

  useEffect(() => {
    if (!playing || !inView || !pageVisible || hovered || focused) return;
    const timer = window.setTimeout(() => {
      setCurrent(index => (index + 1) % photos.length);
    }, intervalMs);
    return () => window.clearTimeout(timer);
  }, [current, playing, inView, pageVisible, hovered, focused]);

  const handleKeys = (event: KeyboardEvent<HTMLElement>) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      go(-1);
    }
    if (event.key === "ArrowRight") {
      event.preventDefault();
      go(1);
    }
  };

  const handleTouchStart = (event: TouchEvent<HTMLElement>) => {
    touchStart.current = event.touches[0]?.clientX ?? null;
  };

  const handleTouchEnd = (event: TouchEvent<HTMLElement>) => {
    const start = touchStart.current;
    touchStart.current = null;
    if (start === null) return;
    const delta = event.changedTouches[0]?.clientX - start;
    if (Math.abs(delta) >= 60) go(delta < 0 ? 1 : -1);
  };

  const handleBlur = (event: FocusEvent<HTMLElement>) => {
    if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
      setFocused(false);
    }
  };

  return (
    <section
      id="fotos"
      ref={galleryRef}
      className="section shell music-gallery-section"
      aria-labelledby="music-gallery-title"
      onPointerEnter={event => { if (event.pointerType === "mouse") setHovered(true); }}
      onPointerLeave={event => { if (event.pointerType === "mouse") setHovered(false); }}
      onFocusCapture={() => setFocused(true)}
      onBlurCapture={handleBlur}
    >
      <div className="music-gallery-heading">
        <div>
          <p className="eyebrow">Portfolio fotográfico</p>
          <h2 id="music-gallery-title">Escenario, identidad <em>y expresión.</em></h2>
          <p>Diez momentos de actuaciones, sesiones artísticas y participaciones en medios.</p>
        </div>
        <div className="music-gallery-controls" role="group" aria-label="Controles de la galería">
          <button type="button" aria-label="Fotografía anterior" onClick={() => go(-1)}>←</button>
          <span aria-live={playing ? "off" : "polite"} aria-atomic="true">
            {String(current + 1).padStart(2, "0")} / {String(photos.length).padStart(2, "0")}
          </span>
          <button type="button" aria-label="Fotografía siguiente" onClick={() => go(1)}>→</button>
          <button
            type="button"
            className="music-gallery-playback"
            aria-label={playing ? "Pausar avance automático" : "Reanudar avance automático"}
            aria-pressed={!playing}
            onClick={() => setPlaying(value => !value)}
          >
            <span aria-hidden="true">{playing ? "Ⅱ" : "▶"}</span>
            <span>{playing ? "Pausar" : "Reproducir"}</span>
          </button>
        </div>
      </div>

      <div
        className="music-gallery-stage"
        role="region"
        aria-roledescription="carrusel"
        aria-label="Diez fotografías del recorrido artístico de Tamara"
        tabIndex={0}
        onKeyDown={handleKeys}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onTouchCancel={() => { touchStart.current = null; }}
      >
        {photos.map((photo, index) => (
          <figure
            key={photo.src}
            className="music-gallery-slide"
            hidden={index !== current}
            aria-label={`Imagen ${index + 1} de ${photos.length}`}
          >
            <div className="music-gallery-media">
              <Image
                src={photo.src}
                alt={photo.alt}
                width={photo.width}
                height={photo.height}
                sizes="(max-width: 768px) 92vw, 820px"
                loading={index < 2 ? "eager" : "lazy"}
                className="music-gallery-image"
              />
            </div>
            <figcaption>
              <span className="eyebrow">{photo.category}</span>
              <span>{photo.caption}</span>
            </figcaption>
          </figure>
        ))}
      </div>

      <div className="music-gallery-thumbnail-rail" role="group" aria-label="Elegir una fotografía">
        {photos.map((photo, index) => (
          <button
            type="button"
            key={photo.src}
            className={`music-gallery-thumb ${index === current ? "active" : ""}`}
            aria-label={`Mostrar fotografía ${index + 1}: ${photo.caption}`}
            aria-pressed={index === current}
            onClick={() => setCurrent(index)}
          >
            <Image src={photo.src} alt="" width={112} height={85} sizes="112px" loading="lazy" />
          </button>
        ))}
      </div>
      <p className="music-gallery-hint">
        Las fotografías avanzan automáticamente cada 5 segundos. Podés usar las flechas, deslizar o seleccionar una miniatura; el avance se pausa mientras interactuás.
      </p>
    </section>
  );
}
