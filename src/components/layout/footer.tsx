import Link from "next/link";
import { instagramHandle, socialLinks } from "@/content/social";

export function Footer() {
  return (
    <footer className="contact-footer">
      <div className="shell">
        <div className="footer-simple">
          <div>
            <p className="eyebrow">Tamara Atadía</p>
            <p className="footer-summary">Marketing, comunicación, producción cultural y canto.</p>
          </div>
          <nav aria-label="Enlaces de cierre" className="footer-quick-links">
            <Link href="/contacto#formulario">Contacto</Link>
            <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
            <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer">Instagram {instagramHandle} ↗</a>
          </nav>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Tamara Atadía</span>
          <Link href="/">Inicio ↑</Link>
        </div>
      </div>
    </footer>
  );
}
