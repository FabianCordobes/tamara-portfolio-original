import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://tamara-portfolio-original.vercel.app";
  return ["/", "/servicios", "/proyectos", "/perfil-profesional", "/contacto"].map((path) => ({
    url: `${base}${path}`,
    changeFrequency: "monthly" as const,
    priority: path === "/" ? 1 : 0.7
  }));
}
