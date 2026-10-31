"use client";

import { useState } from "react";
import { googleDrivePreviewUrl, musicVideos } from "@/content/music";

export function MusicPlayer() {
  const publicVideos = musicVideos.filter(video => !/in[eé]dita/i.test(video.title));
  const [selectedID, setSelectedID] = useState(publicVideos[0].id);
  const selected = publicVideos.find((video) => video.id === selectedID) ?? publicVideos[0];

  return (
    <section className="section shell music-player-section" aria-labelledby="music-samples-heading">
      <div className="section-heading">
        <p className="eyebrow">Selección audiovisual</p>
        <h2 id="music-samples-heading">Actuaciones <em>seleccionadas.</em></h2>
        <p>Seleccioná una interpretación. El video se reproduce en esta misma página.</p>
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
                allow="fullscreen; encrypted-media"
                sandbox="allow-scripts allow-same-origin allow-presentation"
                allowFullScreen
              />
            </div>
          </div>
          <div className="music-current-info">
            <p className="eyebrow">{selected.context}</p>
            <h3>{selected.title}</h3>
            <p>{selected.description}</p>
          </div>
        </div>
        <div className="music-player-sidebar">
          <p className="eyebrow">Elegí una presentación</p>
          <div className="music-playlist" role="group" aria-label="Videos de Tamara">
            {publicVideos.map((video,index) => (
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
        </div>
      </div>
    </section>
  );
}
