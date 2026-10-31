import Link from "next/link";

export function Footer() {
  return (
    <footer className="contact-footer">
      <div className="shell">
        <div className="footer-cta-grid">
          <div>
            <p className="eyebrow">¿Tenés un proyecto?</p>
            <h2>Las buenas ideas merecen <em>avanzar.</em></h2>
            <p>Contame qué necesitás resolver y veamos cómo podemos trabajar juntos.</p>
            <Link className="button button-primary" href="/contacto?motivo=servicio">Quiero contratar un servicio ↗</Link>
          </div>
          <div>
            <p className="eyebrow">¿Buscás talento?</p>
            <h2>Conectemos <em>experiencias.</em></h2>
            <p>Conocé mi trayectoria o contactame por una oportunidad profesional.</p>
            <Link className="button button-secondary" href="/contacto?motivo=empleo">Quiero contactar por empleo ↗</Link>
          </div>
        </div>
        <div className="footer-music-link"><p className="eyebrow">Música y escenario</p><p>¿Buscás una cantante para una actuación, casting o proyecto artístico? <Link className="text-link" href="/musica">Conocé mis videos y mi perfil musical ↗</Link></p></div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Tamara Atadía</span>
          <a href="https://www.linkedin.com/in/tamaraatadia/" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
          <Link href="/">Volver al inicio ↑</Link>
        </div>
      </div>
    </footer>
  );
}
