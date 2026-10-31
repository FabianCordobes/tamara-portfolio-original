import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import "./globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" });

export const metadata: Metadata = {
  metadataBase: new URL("https://tamara-portfolio-original.vercel.app"),
  title: {
    default: "Tamara Atadía | Estrategia, comunicación y proyectos",
    template: "%s | Tamara Atadía"
  },
  description: "Tamara Atadía: estrategia de marketing y comunicación, desarrollo comercial, gestión de proyectos y experiencia profesional.",
  openGraph: {
    type: "website",
    locale: "es_AR",
    siteName: "Tamara Atadía",
    title: "Tamara Atadía | Estrategia, comunicación y proyectos",
    description: "Servicios para marcas y proyectos, y un recorrido profesional para empresas y reclutadores."
  },
  robots: { index: true, follow: true }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={geist.variable}>
        <a className="skip-link" href="#contenido">Saltar al contenido</a>
        <Header />
        <main id="contenido">{children}</main>
        <Footer />
        <ScrollReveal />
      </body>
    </html>
  );
}
