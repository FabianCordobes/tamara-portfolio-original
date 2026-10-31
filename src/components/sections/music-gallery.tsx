import Image from "next/image";

const photos = [
  {
    src: "/images/music/canto-escenario-colores.jpg",
    alt: "Tamara Atadía interpretando una canción bajo iluminación de escenario",
    width: 2560,
    height: 1706,
    caption: "En escena",
    detail: "Una interpretación en vivo."
  },
  {
    src: "/images/music/retrato-estudio-guitarra.jpg",
    alt: "Retrato artístico de Tamara Atadía con guitarra en estudio",
    width: 2560,
    height: 1706,
    caption: "Identidad artística",
    detail: "Producción fotográfica con instrumentos."
  },
  {
    src: "/images/music/tamara-escenario-mar-de-ajo.jpg",
    alt: "Tamara Atadía cantando durante una actuación en Mar de Ajó",
    width: 1066,
    height: 1600,
    caption: "Mar de Ajó",
    detail: "Un registro de presentación en vivo."
  }
] as const;

export function MusicGallery() {
  return (
    <section id="fotos" className="section shell music-editorial-section" aria-labelledby="music-photos-heading">
      <div className="music-editorial-heading">
        <p className="eyebrow">Momentos del recorrido artístico</p>
        <h2 id="music-photos-heading">La voz también <em>tiene imagen.</em></h2>
        <p>Una mirada breve al escenario, la producción artística y las presentaciones en directo.</p>
      </div>
      <div className="music-editorial-grid">
        {photos.map((photo, index) => (
          <figure className={`music-editorial-card ${index === 0 ? "music-editorial-card--featured" : ""}`} key={photo.src}>
            <Image src={photo.src} alt={photo.alt} width={photo.width} height={photo.height}
              sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 33vw"
              className="music-editorial-image" />
            <figcaption>
              <strong>{photo.caption}</strong>
              <span>{photo.detail}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
