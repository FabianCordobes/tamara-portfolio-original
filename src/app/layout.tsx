import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
const geist = Geist({ subsets: ["latin"], variable: "--font-geist" });
export const metadata: Metadata = {
  title: "Tamara Atadía | Marketing y Comunicación",
  description:
    "Portfolio profesional de Tamara Atadía. Marketing y comunicación, gestión de proyectos, desarrollo comercial y producción cultural.",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={geist.variable}>{children}</body>
    </html>
  );
}
