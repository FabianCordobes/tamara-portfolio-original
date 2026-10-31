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
        <h2 id="music-samples-heading">Escuchame y conocé mi <em>universo musical.</em></h2>
        <p>Elegí una interpretación para reproducirla desde esta misma página, sin descargar el archivo.</p>
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
                allow="fullscreen; autoplay"
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
          <p className="music-drive-note">Los videos se reproducen desde Google Drive. El acceso requiere que los archivos estén compartidos para cualquier persona con el enlace; si un reproductor no abre, usá su enlace a Drive.</p>
        </div>
      </div>
    </section>
  );
}
