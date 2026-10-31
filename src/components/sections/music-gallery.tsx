"use client";

import Image from "next/image";
import { useCallback, useEffect, useMemo, useRef, useState, type KeyboardEvent } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

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

export function MusicGallery() {
  const [selected, setSelected] = useState(0);
  const [motion, setMotion] = useState<"pending" | "regular" | "reduced">("pending");
  const [playChoice, setPlayChoice] = useState<"default" | "play" | "pause">("default");
  const [inView, setInView] = useState(false);
  const [tabVisible, setTabVisible] = useState(true);
  const galleryRef = useRef<HTMLElement>(null);
  const autoplay = useMemo(() =>
    Autoplay({
      delay: 5000,
      playOnInit: false,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
      stopOnFocusIn: true
    }), []
  );
  const [viewportRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "center", duration: 32 },
    [autoplay]
  );

  const shouldPlay = playChoice === "play" || (playChoice === "default" && motion === "regular");

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    let mounted = true;
    queueMicrotask(() => {
      if (mounted) setMotion(media.matches ? "reduced" : "regular");
    });
    const onChange = () => setMotion(media.matches ? "reduced" : "regular");
    media.addEventListener("change", onChange);
    return () => {
      mounted = false;
      media.removeEventListener("change", onChange);
    };
  }, []);

  useEffect(() => {
    const element = galleryRef.current;
    if (!element) return;
    if (typeof IntersectionObserver === "undefined") {
      const timer = window.setTimeout(() => setInView(true), 0);
      return () => window.clearTimeout(timer);
    }
    const observer = new IntersectionObserver(
      entries => setInView(entries.some(entry => entry.isIntersecting)),
      { threshold: 0.2 }
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const update = () => setTabVisible(!document.hidden);
    document.addEventListener("visibilitychange", update);
    return () => document.removeEventListener("visibilitychange", update);
  }, []);

  const onSelect = useCallback(() => {
    if (emblaApi) setSelected(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    let active = true;
    queueMicrotask(() => { if (active) onSelect(); });
    return () => {
      active = false;
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  useEffect(() => {
    if (!emblaApi) return;
    const plugin = emblaApi.plugins().autoplay;
    if (shouldPlay && inView && tabVisible) plugin?.play();
    else plugin?.stop();
    return () => plugin?.stop();
  }, [emblaApi, shouldPlay, inView, tabVisible]);

  const navigate = useCallback(
    (index: number) => {
      emblaApi?.scrollTo(index);
      emblaApi?.plugins().autoplay?.reset();
    },
    [emblaApi]
  );
  const next = () => {
    emblaApi?.scrollNext();
    emblaApi?.plugins().autoplay?.reset();
  };
  const previous = () => {
    emblaApi?.scrollPrev();
    emblaApi?.plugins().autoplay?.reset();
  };
  const onKeyboard = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      next();
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      previous();
    }
  };

  return (
    <section id="fotos" ref={galleryRef} className="section shell music-gallery-section" aria-labelledby="music-gallery-title">
      <div className="music-gallery-heading">
        <div>
          <p className="eyebrow">Momentos del recorrido artístico</p>
          <h2 id="music-gallery-title">Escenario, identidad <em>y expresión.</em></h2>
          <p>Diez momentos de actuaciones, sesiones artísticas y participaciones en medios.</p>
        </div>
      </div>

      <div
        className="music-gallery-viewport"
        ref={viewportRef}
        role="region"
        aria-roledescription="carrusel"
        aria-label="Diez fotografías del recorrido artístico de Tamara"
        tabIndex={0}
        onKeyDown={onKeyboard}
      >
        <div className="music-gallery-track">
          {photos.map((photo, index) => (
            <figure
              key={photo.src}
              className="music-gallery-slide"
              role="group"
              aria-roledescription="diapositiva"
              aria-label={`Fotografía ${index + 1} de ${photos.length}`}
              aria-hidden={index !== selected}
            >
              <div className="music-gallery-media">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  width={photo.width}
                  height={photo.height}
                  sizes="(max-width: 640px) 92vw, (max-width: 1024px) 84vw, 840px"
                  priority={index === 0}
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
      </div>

      <div className="music-gallery-footer">
        <div className="music-gallery-controls" role="group" aria-label="Controles de la galería">
          <button type="button" onClick={previous} aria-label="Fotografía anterior">←</button>
          <span className="music-gallery-counter" aria-live="off" aria-atomic="true">
            <strong>{String(selected + 1).padStart(2, "0")}</strong>
            <span> / {String(photos.length).padStart(2, "0")}</span>
          </span>
          <button type="button" onClick={next} aria-label="Fotografía siguiente">→</button>
          <button
            type="button"
            className="music-gallery-playback"
            aria-label={shouldPlay ? "Pausar avance automático" : "Reanudar avance automático"}
            aria-pressed={!shouldPlay}
            onClick={() => setPlayChoice(shouldPlay ? "pause" : "play")}
          >
            <span aria-hidden="true">{shouldPlay ? "Ⅱ" : "▶"}</span>
          </button>
        </div>
        <div className="music-gallery-thumbnail-rail" role="group" aria-label="Elegir una fotografía">
          {photos.map((photo, index) => (
            <button
              type="button"
              key={photo.src}
              className={`music-gallery-thumb ${index === selected ? "active" : ""}`}
              aria-label={`Mostrar fotografía ${index + 1}: ${photo.caption}`}
              aria-pressed={index === selected}
              onClick={() => navigate(index)}
            >
              <Image src={photo.src} alt="" width={112} height={85} sizes="80px" />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
