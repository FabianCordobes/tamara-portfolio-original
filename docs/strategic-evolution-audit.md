# Evolución estratégica del portfolio — decisión, evidencia y QA

**Fecha:** 31/10/2026. **Base:** rama master previa a este PR. **Estado:** cambios en PR borrador, no publicados hasta merge.

## 1. Auditoría y decisiones

| Dimensión | Antes | Evolución y motivo |
| --- | --- | --- |
| Identidad | Marketing y música al mismo nivel en el hero | Una marca personal con estrategia, dirección y producción como eje; música accesible como Universo creativo |
| Arquitectura | Menú de servicios, proyectos, trayectoria, música y contacto | Perfil, Soluciones, Proyectos, Metodología y Contacto; Universo creativo separado visualmente. Se conservan URLs antiguas. |
| Conversión | Tres tarjetas por público | Tres accesos por necesidad con anchors funcionales; contacto directo en el hero |
| Soluciones | Cuatro áreas operativas | Cinco pilares integrados con problema, abordaje, alcance, resultado buscado y conexión |
| Casos | Contexto/rol, cifras sin fuente visible | Proceso descriptivo y responsabilidades; cifras no verificadas quedan en fuente sin exhibición pública |
| Trayectoria | Medios como punto de partida implícito | Tamms como origen de gestión, con secuencia no lineal de experiencias |
| Metodología | Cuatro pasos | Seis momentos adaptables, página propia |
| Contacto | Cuatro motivos amplios | Ocho motivos, organización y web opcionales, enlace a privacidad, Formspree intacto |
| SEO | Metadatos, sitemap y OG existentes | Sitemap con Metodología, títulos y copy orientados a dirección/producción |
| UI | Grafito/marfil/dorado editorial | Se mantienen tokens y fotografías; refuerzo de jerarquía, ritmo y layout responsivo |
| Rendimiento | next/image y lazy load; multimedia | Sin nuevas imágenes pesadas ni dependencias. Falta Lighthouse móvil real. |

## 2. Arquitectura de marca y recorridos

**TAMARA ATADÍA**: estrategia, producción, desarrollo comercial, comunicación y dirección. Una sola identidad. Música, canto y producción cultural como dimensión complementaria.

- Negocios: Inicio → Soluciones#estrategia o #comercial → Proyectos → Metodología → Contacto.
- Producción: Inicio → Soluciones#produccion → Brush Fest / Full Fest / Tamms → Contacto.
- Comunicación: Inicio → Soluciones#comunicacion → Milpos / Full Medios → Contacto.
- Empresas y selección: Perfil → Trayectoria → Casos → Contacto.
- Producciones artísticas: Universo creativo → videos/fotografías → Contacto por colaboración.

## 3. Evidencia y afirmaciones pendientes

1. **Tamms:** información más reciente aportada por Tamara: actividad hasta 2023, un equipo de hasta cinco empleados, producciones desde 2021. El sitio anterior indicaba 2020–2024. Debe confirmar fechas exactas, alcance de gestión y responsabilidades antes del merge.
2. **Full Medios:** ≈1M vistas/30 días, +370% Instagram, Facebook 509→8613, ≈8 programas y transmisiones hasta ocho horas se conservan como información aportada, pero se requieren capturas fechadas, períodos, qué se midió y atribución del rol individual frente al equipo.
3. **Brush Fest:** hasta 500 personas en una edición; solicitar documentación de convocatoria y fuentes.
4. **Costa Acuática:** >800 personas informado pero sin soporte; permanece como experiencia cualitativa, no se muestra esa cifra.
5. **Strong Fitness Gym, Milpos y Movia:** faltan objetivos, alcance verificable, decisiones concretas, fechas o métricas de cierre. No agregar resultados inferidos.
6. **Imágenes:** material original de GitHub conservado, incluidos diez archivos de música y cinco distribuidos en secciones. Verificar permisos, créditos e identidad de terceros antes del merge.

Los valores de `results` y `src/content/metrics.ts` quedan disponibles en el repositorio para un proceso editorial de verificación. **No son automáticamente métricas comprobadas.**

## 4. Integraciones

- **Formspree:** conservar `FORMSPREE_FORM_ID`. El formulario envía organización y URL opcionales solamente tras validar. Confirmar entrega y estado del receptor con consentimiento; no enviar mensajes de prueba en producción sin autorización.
- **Analítica:** se conserva `@vercel/analytics`. Los eventos no transportan nombre, email, organización ni mensaje. La activación del panel, consentimiento aplicable y los eventos personalizados requieren verificar el plan.
- **WhatsApp:** `src/lib/whatsapp.ts` contiene un número histórico no validado expresamente para este portfolio; **no enlazarlo** hasta confirmar que pertenece al contacto profesional correcto.
- **CRM/fidelización:** no existe CRM conectado ni automatización de correos. Se proporciona una plantilla en `docs/opportunity-tracking-template.csv` para preparar un seguimiento manual sin cargar datos personales al repo público.
- **Gestor de paquetes:** el proyecto real utiliza **npm/package-lock.json**; no se migra a pnpm sin plan de CI/despliegue.

## 5. Pruebas y mantenimiento

CI automatizado: `npm ci`, auditoría de dependencias de producción, ESLint, TypeScript, `npm run build`, smoke de rutas, CTA, navegación, fotos, video, validación de API y metadatos. Ver resultados en el PR.

**Pendiente de QA manual (no se declara probado):** inspección a 360, 390, 430, 768 y 1440 píxeles; menú móvil, teclado, foco/contraste WCAG 2.2 AA, formularios con Formspree real, preview social, consola, Google Search Console y medición real LCP/INP/CLS. No se informan puntuaciones sin medición.

Después del merge, actualizar casos en `src/content/cases.ts`, soluciones en `src/content/solutions.ts`, textos en `src/content/profile.ts`; nunca publicar métricas sin adjuntar fuente y atribución. No almacenar contactos de visitantes en GitHub.
