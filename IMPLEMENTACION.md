# Registro de implementación — fases 0–2

Documento fuente: Plan_Desarrollo_SPA_Portfolio_Tamara_Atadia.docx, versión 1.0.

## Fase 0
Implementado: Next.js 16.3.8 (versión comprobada en npm), App Router, TypeScript strict, Tailwind CSS 4, ESLint, npm lockfile, git local y workflow de validación para GitHub.
Pendiente: repositorio remoto y conexión a Vercel para preview. No se publicó ni se modificó el portfolio artístico existente.
Se usa npm, disponible en el entorno, en lugar del pnpm recomendado. Un solo lockfile.

## Fase 1
Tokens centrales de color, tipografía Geist con next/font, grid progresivo, botones >=44px, headings, cards y placeholder con integración next/image. Cuerpo 16px; reglas para 640px y 1024px; reduced motion global.

## Fase 2
Header sticky con menú desplegable, cierre Escape y navegación por anchors. Hero, perfil, impacto, cinco pilares de expertise y cuatro experiencias complementarias. Contacto básico por WhatsApp para resolver navegación y CTA; formulario, email y LinkedIn pertenecen a fase 4.
Casos Full Medios/Milpos/Strong Gym/Tamms y metodología quedan para fase 3; no se agregan links a anchors inexistentes.

## Validación realizada
- ESLint: pasó.
- TypeScript strict: pasó.
- Build Next.js producción: pasó; ruta principal prerenderizada estáticamente.
- Revisión de límites Server/Client: solo Header requiere use client.
- Revisión del contenido: métricas con sourceNote y verified=false.
- Verificación visual automatizada: bloqueada por restricciones de arranque de Chrome (socket Operation not permitted). No se declara QA mobile/desktop, Lighthouse o E2E como completados.

## Pendientes antes de publicar
Revisión visual real a 360, 390, 430, 768, 1024 y 1440px; navegación por teclado y Escape; scroll sin desbordes; verificación con JavaScript desactivado; conectar remoto y Vercel.
Luego avanzar a fase 3. Fotografías originales, email receptor, LinkedIn y dominio siguen pendientes según el plan.

## Entrega adicional: fases 3–5

Implementados casos tipados, expansión inline, metodología, formulario validado en cliente/servidor, configuración de contacto, protecciones anti-spam básicas y polish visual/motion. Root de Turbopack fijado para evitar la advertencia por lockfiles externos. Sin nuevas dependencias.

Pendientes para publicación: assets reales y evidencia de métricas, email/LinkedIn, credenciales de correo, rate limit compartido para escala, QA visual en navegador y prueba de entrega real. Ver README para instrucciones.
