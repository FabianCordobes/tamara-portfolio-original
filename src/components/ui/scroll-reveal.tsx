"use client";
import { useEffect } from "react";
export function ScrollReveal() {
 useEffect(() => {
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
  if (reduced.matches || !("IntersectionObserver" in window)) return;
  const elements = document.querySelectorAll<HTMLElement>(".section-heading, .case-study, .method-grid li, .expertise-row, .metric");
  const observer = new IntersectionObserver(entries => {
   entries.forEach(entry => { if(entry.isIntersecting) { entry.target.classList.add("is-visible"); observer.unobserve(entry.target); } });
  }, { threshold: 0.08 });
  elements.forEach(el => { el.classList.add("reveal"); observer.observe(el); });
  const show = () => { if(reduced.matches) elements.forEach(el => el.classList.add("is-visible")); };
  reduced.addEventListener("change", show);
  return () => { observer.disconnect(); reduced.removeEventListener("change", show); elements.forEach(el => el.classList.remove("reveal")); };
 }, []);
 return null;
}
