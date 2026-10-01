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

### Activar el contacto

Copiar `.env.example` a `.env.local` y completar:

- `NEXT_PUBLIC_CONTACT_EMAIL`: email público real de Tamara.
- `NEXT_PUBLIC_LINKEDIN_URL`: URL verificada de su perfil de LinkedIn.
- `RESEND_API_KEY`: clave privada de Resend (nunca usar un prefijo NEXT_PUBLIC).
- `CONTACT_EMAIL_FROM`: dirección remitente de un dominio verificado en Resend.
- `CONTACT_EMAIL_TO`: dirección donde recibir las consultas.

Sin configuración de correo, el formulario se muestra deshabilitado y dirige a WhatsApp. No simula un envío exitoso. Los enlaces de email y LinkedIn aparecen únicamente cuando están configurados; no se inventaron datos personales. Reiniciar desarrollo después de cambiar variables y reconstruir producción. No incluir `.env.local` en git ni en archivos compartidos.

El endpoint valida en servidor tipo/tamaño de campos, consentimiento, origen, honeypot y tiempo mínimo. Limita a cinco intentos cada diez minutos por instancia y dirección confiable de Vercel. Fuera de Vercel usa un bucket común: adaptar el identificador al proxy confiable. En un deployment distribuido, complementar con un rate limiter compartido o WAF: la memoria no persiste entre instancias. No se registran los mensajes en logs. Revisar el aviso de privacidad y las políticas del proveedor antes del lanzamiento público.

### Material pendiente

Las fotografías, videos y capturas reales siguen pendientes. No se añadieron imágenes de stock ni evidencia ficticia. Las métricas son las aportadas para el portfolio; falta contrastarlas con los informes originales antes de publicar. Editar los casos en `src/content/cases.ts`.

### Verificación de esta entrega

Lint, TypeScript y build de producción aprobados. Pruebas del handler con objetos Request/Response: rechazo de origen ajeno, honeypot, email inválido, consentimiento ausente, envío demasiado rápido, configuración ausente y límite de intentos. No se envió correo real: requiere credenciales y prueba de entrega posterior. La inspección visual con navegador quedó pendiente porque este entorno no contiene Chromium. Comprobar en 360, 390, 768 y 1440 px: overflow, navegación, expansión de casos, formularios y reducción de movimiento.
