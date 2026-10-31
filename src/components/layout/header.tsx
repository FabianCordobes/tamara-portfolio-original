"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { navigation } from "@/content/navigation";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!open) return;
    function close(e: KeyboardEvent) {
      if (e.key === "Escape") { setOpen(false); toggle.current?.focus(); }
    }
    document.addEventListener("keydown", close);
    return () => document.removeEventListener("keydown", close);
  }, [open]);
  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Link href="/" className="wordmark" onClick={() => setOpen(false)} aria-label="Tamara Atadía, ir al inicio">
          TAMARA ATADÍA<span>COMUNICACIÓN · MÚSICA · PROYECTOS</span>
        </Link>
        <nav aria-label="Principal" className="desktop-nav">
          {navigation.map(item => (
            <Link key={item.href} href={item.href === "/contacto" ? "/contacto#formulario" : item.href} aria-current={pathname === item.href ? "page" : undefined}>{item.label}</Link>
          ))}
        </nav>
        <button ref={toggle} type="button" className="menu-toggle" aria-expanded={open}
          aria-controls="mobile-navigation" aria-label={open ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setOpen(value => !value)}>
          {open ? "Cerrar" : "Menú"}<span aria-hidden="true">{open ? "×" : "☰"}</span>
        </button>
      </div>
      <nav id="mobile-navigation" aria-label="Navegación móvil" className="mobile-nav shell" hidden={!open}>
        <Link href="/" aria-current={pathname === "/" ? "page" : undefined} onClick={() => setOpen(false)}>Inicio</Link>
        {navigation.map(item => (
          <Link key={item.href} href={item.href === "/contacto" ? "/contacto#formulario" : item.href} aria-current={pathname === item.href ? "page" : undefined} onClick={() => setOpen(false)}>{item.label}</Link>
        ))}
      </nav>
    </header>
  );
}
