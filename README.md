# Tamara Atadía — portfolio profesional y universo creativo

Sitio Next.js App Router + React + TypeScript + Tailwind 4. **npm**, no pnpm, es el gestor actual (`package-lock.json` versionado). No se realizó una reconstrucción del proyecto.

## Desarrollo
- Node.js 22/24 (según versión de Vercel y CI); `npm ci`, `npm run dev`.
- `npm run lint`, `npm run typecheck`, `npm run build` y `node scripts/smoke.mjs` tras compilar.
- GitHub Actions valida instalación, dependencias, lint, TypeScript, build y rutas.
- Vercel despliega preview por PR; **nunca fusionar sin revisar cambios y CI**.

## Arquitectura
- `src/app`: Inicio, Perfil y Trayectoria (`/perfil-profesional`), Soluciones (`/servicios`), Proyectos, Metodología, Contacto y Universo creativo (`/musica`).
- `src/content`: casos, soluciones, experiencia y perfil; conservar afirmaciones verificables y separar métricas sin documentar.
- `src/components`: secciones y componentes reutilizables de UI.
- `public/images`: imágenes reales existentes de proyectos y diez fotos musicales sin duplicaciones.
- `src/app/api/contact/route.ts`: validación de contacto y entrega a Formspree; rate limit local por instancia.

## Integraciones
`FORMSPREE_FORM_ID` (servidor, en Vercel Production/Preview) habilita el envío. `NEXT_PUBLIC_CONTACT_EMAIL` es fallback opcional mediante `mailto:` (no un envío automático). `@vercel/analytics` requiere activación y plan compatibles en Vercel; los eventos nunca incluyen PII. No hay CRM conectado ni WhatsApp validado.

## Documentación
- `docs/strategic-evolution-audit.md`: diagnóstico, decisiones, pendientes de evidencia y QA.
- `docs/section-photo-distribution.md`: procedencia y distribución de imágenes.
- `docs/opportunity-tracking-template.csv`: esquema de seguimiento manual. No cargar datos de visitantes en el repo.
- `docs/conversion-seo-qa.md`: guía previa de conversión y SEO.

## Entrega responsable
Verificar contenido, material visual y autorizaciones antes de publicar. Las métricas de los proyectos no deben afirmarse como comprobadas hasta contar con informes y atribución. Pruebas visuales en móviles y Core Web Vitals son tareas complementarias al CI.
