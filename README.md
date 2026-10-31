# Portfolio Tamara Atadía — fases 0, 1 y 2

## Ejecutar

Node.js 20.9+ (recomendado Node 22/24). `npm ci`, `npm run dev`, abrir http://localhost:3000.

## Validar

`npm run lint`, `npm run typecheck`, `npm run build`.

## Alcance

Fase 0: Next.js App Router, TypeScript strict, Tailwind 4, ESLint, lockfile, repositorio git local. Preview Vercel pendiente de conectar cuenta y repositorio remoto.
Fase 1: tokens CSS/Tailwind, Geist con next/font, grid mobile-first, botones, headings, cards, componente de media sustituible y reduced motion.
Fase 2: header sticky, navegación móvil desplegable con Escape, anchors activos, hero, perfil, impacto, expertise, experiencia seleccionada y cierre de navegación a contacto.

Contenido profesional centralizado en src/content; tipos en src/types. Solo Header es Client Component; el contenido es Server Component. Placeholder de retrato sustituible por ProjectMedia; imágenes con next/image y proporción fija.

Las métricas vienen del portfolio, sin evidencia original recibida. `verified: false` y `sourceNote` permiten revisar antes de publicar. No se inventan fotos ni enlaces de email/LinkedIn.

## Próximas fases

3: casos Full Medios, Milpos, Strong Gym, Tamms y metodología. 4: formulario, email receptor, LinkedIn y antispam. 5–8: motion, SEO completo, analytics, QA completo y assets. El CTA WhatsApp mínimo utiliza el número confirmado. No se simula un envío de formulario.

## Vercel Preview

Importar este repositorio en Vercel, framework Next.js, build `npm run build`; cada PR generará un preview. No se configuró un dominio ni se publicó desde esta entrega.

## Dirección visual

Grafito #121212, marfil #F5F2EB, dorado #C2A05D. Tipografía Geist para UI y Georgia para énfasis editorial. Base 16px, controles >=44px y diseño desde 360px. Sin stock ni imágenes inventadas.

## Fases 3, 4 y 5

- Casos de Full Medios, Milpos, Strong Gym y Tamms con expansión inline nativa (`details`). Sin rutas adicionales ni dependencias de un drawer. Teclado y tacto soportados.
- Metodología, enlaces de WhatsApp con mensajes precargados y formulario con estados de validación, envío, éxito y error.
- Animaciones por IntersectionObserver y CSS, microinteracciones y `prefers-reduced-motion`. El contenido sigue disponible sin JavaScript.

### Contacto con Formspree (sin dominio propio)

El formulario mantiene su ruta `/contacto` y realiza la validación en cliente y en el endpoint propio `POST /api/contact`. El servidor envía solamente datos validados a Formspree. No se requiere una biblioteca adicional, credencial Resend ni dominio propio.

1. Crear una cuenta en https://formspree.io con un correo verificado.
2. Crear un formulario llamado «Contacto · Portfolio Tamara», elegir `tammatadia@gmail.com` como **Target Email** o email de notificaciones y verificar la dirección en Formspree.
3. En la sección **Integration**, copiar el identificador que aparece en `https://formspree.io/f/XXXXXXXX` (solo el ID).
4. Configurar la variable `FORMSPREE_FORM_ID` en Vercel, para `Production` y `Preview`. No usar la dirección de Gmail ni una URL arbitraria como valor.
5. Volver a desplegar la aplicación. Verificar la entrega solo con autorización del destinatario.

`NEXT_PUBLIC_CONTACT_EMAIL` sigue siendo opcional y permite abrir el correo del visitante con `mailto:` si Formspree aún no está configurado. Esta alternativa **no envía mensajes automáticamente**. Cuando falta `FORMSPREE_FORM_ID`, no se realiza ningún POST al proveedor. El destinatario de los mensajes no está controlado por Vercel: se configura exclusivamente en el panel de Formspree.

El endpoint valida origen, tamaño, contenido, consentimiento y honeypot. El rate limit en memoria de cinco intentos cada diez minutos **no es distribuido**; si escala la aplicación, utilizar WAF o almacenamiento compartido. Los errores del proveedor se devuelven con códigos adecuados (incluido 429), sin exponer datos sensibles. No se envían correos reales durante las pruebas automatizadas.

El plan gratuito de Formspree permite hasta 50 envíos al mes y mantiene un historial limitado. Se puede configurar el email de notificación sin dominio propio; el panel del proveedor requiere verificar el email vinculado. El estado `ok` indica que Formspree aceptó el envío, no que Gmail lo entregó.

Las variables antiguas `RESEND_API_KEY`, `CONTACT_EMAIL_FROM` y `CONTACT_EMAIL_TO` ya no son utilizadas por el código. Se pueden retirar de Vercel luego de revisar que ningún otro flujo dependa de ellas.

### Material pendiente

Las fotografías, videos y capturas reales siguen pendientes. No se añadieron imágenes de stock ni evidencia ficticia. Las métricas son las aportadas para el portfolio; falta contrastarlas con los informes originales antes de publicar. Editar los casos en `src/content/cases.ts`.

### Verificación de esta entrega

Lint, TypeScript y build de producción aprobados. Pruebas del handler con objetos Request/Response: rechazo de origen ajeno, honeypot, email inválido, consentimiento ausente, envío demasiado rápido, configuración ausente y límite de intentos. No se envió correo real: requiere credenciales y prueba de entrega posterior. La inspección visual con navegador quedó pendiente porque este entorno no contiene Chromium. Comprobar en 360, 390, 768 y 1440 px: overflow, navegación, expansión de casos, formularios y reducción de movimiento.
