"use client";
import { useEffect, useRef, useState } from "react";
import { navigation } from "@/content/navigation";
export function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const toggle = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries)
          if (entry.isIntersecting) setActive(entry.target.id);
      },
      { rootMargin: "-20% 0px -60% 0px" },
    );
    navigation.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    if (!open) return;
    const close = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggle.current?.focus();
      }
    };
    document.addEventListener("keydown", close);
    return () => document.removeEventListener("keydown", close);
  }, [open]);
  return (
    <header className="site-header">
      <div className="shell header-inner">
        <a href="#inicio" className="wordmark" onClick={() => setOpen(false)}>
          TAMARA ATADÍA<span>ESTRATEGIA & COMUNICACIÓN</span>
        </a>
        <nav aria-label="Principal" className="desktop-nav">
          {navigation.map((i) => (
            <a
              key={i.id}
              href={`#${i.id}`}
              aria-current={active === i.id ? "location" : undefined}
            >
              {i.label}
            </a>
          ))}
        </nav>
        <button
          ref={toggle}
          type="button"
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? "Cerrar" : "Menú"}
          <span aria-hidden="true">{open ? "×" : "☰"}</span>
        </button>
      </div>
      <nav
        id="mobile-navigation"
        aria-label="Navegación móvil"
        hidden={!open}
        className="mobile-nav shell"
      >
        {navigation.map((i) => (
          <a
            key={i.id}
            href={`#${i.id}`}
            aria-current={active === i.id ? "location" : undefined}
            onClick={() => setOpen(false)}
          >
            {i.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
