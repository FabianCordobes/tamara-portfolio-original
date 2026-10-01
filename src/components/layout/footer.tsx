import { ButtonLink } from "@/components/ui/button";
export function Footer() {
  return (
    <footer id="contacto" className="contact-footer">
      <div className="shell">
        <p className="eyebrow">Conversemos</p>
        <h2>Convirtamos una oportunidad en <em>acción.</em></h2>
        <p>Si tenés un proyecto o una oportunidad profesional, contactame por LinkedIn. Contame qué necesitás y conversemos sobre cómo puedo aportar.</p>
        <ButtonLink href="https://www.linkedin.com/in/tamaraatadia/" target="_blank" rel="noopener noreferrer">Contactar por LinkedIn ↗</ButtonLink>
        <div className="footer-bottom">
          <span>Tamara Atadía</span>
          <a href="#inicio">Volver al inicio</a>
          <span>Marketing y Comunicación</span>
        </div>
      </div>
    </footer>
  );
}
