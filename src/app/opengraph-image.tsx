import { ImageResponse } from "next/og";

export const alt = "Tamara Atadía: marketing, comunicación, proyectos y canto";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          backgroundColor: "#111211",
          color: "#f4eee3",
          padding: "62px 70px",
          flexDirection: "column",
          justifyContent: "space-between",
          position: "relative",
          overflow: "hidden"
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", zIndex: 1 }}>
          <div style={{ display: "flex", letterSpacing: "3px", fontSize: 24, fontWeight: 700 }}>
            TAMARA ATADÍA
          </div>
          <div style={{ display: "flex", fontSize: 17, letterSpacing: "2px", color: "#c2a05d" }}>
            PORTFOLIO
          </div>
        </div>
        <div style={{ display: "flex", position: "absolute", width: 380, height: 380, top: 130, right: -100, borderRadius: "50%", border: "36px solid #5c4a2d", opacity: 0.52 }} />
        <div style={{ display: "flex", position: "absolute", width: 258, height: 258, top: 190, right: -40, borderRadius: "50%", border: "2px solid #c2a05d", opacity: 0.6 }} />
        <div style={{ display: "flex", flexDirection: "column", zIndex: 1, maxWidth: 940 }}>
          <div style={{ display: "flex", fontSize: 68, fontWeight: 700, lineHeight: 1.12, letterSpacing: "-2px" }}>
            Estrategia, comunicación
          </div>
          <div style={{ display: "flex", fontSize: 68, fontWeight: 700, lineHeight: 1.12, letterSpacing: "-2px", color: "#c2a05d" }}>
            y expresión.
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", borderTop: "1px solid #61523d", paddingTop: 23, color: "#e0d2b9", zIndex: 1, fontSize: 20 }}>
          <span>MARKETING · PROYECTOS · CANTO</span>
          <span>tamara-portfolio-original.vercel.app</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
