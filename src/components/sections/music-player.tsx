"use client";

import { useState } from "react";
import { googleDrivePreviewUrl, googleDriveVideoUrl, musicVideos } from "@/content/music";

export function MusicPlayer() {
  const [selectedID, setSelectedID] = useState(musicVideos[0].id);
  const selected = musicVideos.find((video) => video.id === selectedID) ?? musicVideos[0];

  return (
    <section className="section shell music-player-section" aria-labelledby="music-samples-heading">
      <div className="section-heading">
        <p className="eyebrow">Selección audiovisual</p>
        <h2 id="music-samples-heading">Interpretaciones para <em>escuchar.</em></h2>
        <p>Seleccioná un video para reproducirlo acá.</p>
      </div>
      <div className="music-player-layout">
        <div className="music-player-screen">
          <div className="music-player-stage">
            <div className={`music-frame music-frame--${selected.orientation}`}>
              <iframe
                key={selected.id}
                src={googleDrivePreviewUrl(selected.id)}
                title={`Video de Tamara Atadía: ${selected.title}`}
                loading="lazy"
                allow="fullscreen"
                allowFullScreen
              />
            </div>
          </div>
          <div className="music-current-info">
            <p className="eyebrow">{selected.context}</p>
            <h3>{selected.title}</h3>
            <p>{selected.description}</p>
            <a className="text-link" href={googleDriveVideoUrl(selected.id)} target="_blank" rel="noopener noreferrer">Abrir este video en Drive ↗</a>
          </div>
        </div>
        <div className="music-player-sidebar">
          <p className="eyebrow">Elegí una presentación</p>
          <div className="music-playlist" role="group" aria-label="Videos de Tamara">
            {musicVideos.map((video,index) => (
              <button
                type="button"
                key={video.id}
                className={`music-track ${selected.id === video.id ? "music-track--active" : ""}`}
                aria-pressed={selected.id === video.id}
                onClick={() => setSelectedID(video.id)}
              >
                <span className="music-track-index">0{index + 1}</span>
                <span className="music-track-copy"><strong>{video.title}</strong><small>{video.context}</small></span>
                <span className="music-track-arrow" aria-hidden="true">{selected.id === video.id ? "▶" : "↗"}</span>
              </button>
            ))}
          </div>
          <p className="music-drive-note">Si un video no carga, podés abrirlo directamente desde su enlace a Drive.</p>
        </div>
      </div>
    </section>
  );
}
