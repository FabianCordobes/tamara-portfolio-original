import Link from "next/link";
import { instagramHandle, socialLinks } from "@/content/social";

export function Footer() {
  return (
    <footer className="contact-footer">
      <div className="shell">
        <div className="footer-simple">
          <div>
            <p className="eyebrow">Tamara Atadía</p>
            <p className="footer-summary">Estrategia, producción, desarrollo comercial y comunicación. Una identidad, diferentes maneras de conectar.</p>
          </div>
          <nav aria-label="Enlaces de cierre" className="footer-quick-links">
            <Link href="/contacto#formulario">Contacto</Link>
            <Link href="/perfil-profesional#trayectoria">Trayectoria</Link>
            <Link href="/musica">Universo creativo</Link>
            <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
            <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer">Instagram {instagramHandle} ↗</a>
          </nav>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Tamara Atadía</span>
          <Link href="/privacidad">Privacidad</Link>
          <Link href="/">Inicio ↑</Link>
        </div>
      </div>
    </footer>
  );
}
