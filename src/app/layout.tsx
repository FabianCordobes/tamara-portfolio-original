import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Analytics } from "@vercel/analytics/next";
import { socialLinks } from "@/content/social";
import "./globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" });

export const metadata: Metadata = {
  metadataBase: new URL("https://tamara-portfolio-original.vercel.app"),
  title: {
    default: "Tamara Atadía | Marketing, comunicación, proyectos y canto",
    template: "%s | Tamara Atadía"
  },
  description: "Conocé a Tamara Atadía: marketing, comunicación, coordinación de proyectos y canto. Experiencia real, servicios y propuestas artísticas.",
  openGraph: {
    type: "website",
    locale: "es_AR",
    siteName: "Tamara Atadía",
    title: "Tamara Atadía | Estrategia, comunicación y proyectos",
    description: "Servicios, trayectoria profesional y faceta artística: música, interpretación vocal y proyectos culturales."
  },
  twitter: { card: "summary_large_image", title: "Tamara Atadía | Comunicación, proyectos y canto", description: "Experiencia profesional y artística, casos reales y contacto." },
  robots: { index: true, follow: true },
  other: { "profile:username": "tammatadia" }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={geist.variable}>
        <a className="skip-link" href="#contenido">Saltar al contenido</a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Tamara Atadía",
            url: "https://tamara-portfolio-original.vercel.app",
            sameAs: [socialLinks.instagram, socialLinks.linkedin],
            knowsAbout: ["Marketing", "Comunicación", "Producción cultural", "Música", "Canto"]
          }).replace(/</g, "\\u003c") }}
        />
        <Header />
        <main id="contenido">{children}</main>
        <Footer />
        <ScrollReveal />
        <Analytics />
      </body>
    </html>
  );
}
