# Conversión, SEO y analítica: lanzamiento

## Objetivo
Conservar los tres recorridos del portafolio y facilitar que una visita se transforme en un contacto. Se muestran dos proyectos reales, sin duplicar la página de casos.

## Eventos (sin datos personales)
- `contact_cta_click`: botón principal del hero, origen `home_hero`.
- `projects_cta_click`: acceso a trabajos del hero, origen `home_hero`.
- `case_cta_click`: apertura desde los dos casos destacados, origen identificador público del proyecto.
- `contact_form_success`: solo después de que el backend confirma aceptación; parámetro `intent` (categoría predefinida).
- **No** instrumentar nombre, email, teléfono, mensaje ni identificadores de sesión.

Los eventos personalizados requieren un plan Vercel **Pro o Enterprise**, según documentación de Vercel. En planes que no los habilitan se puede medir tráfico y páginas con Web Analytics, pero **no considerar operativos los eventos personalizados**. Antes de medir, activar `Web Analytics` en Vercel Dashboard → Proyecto → Analytics → Enable y volver a desplegar. La presencia del SDK en el repositorio no implica que el dashboard esté habilitado.

## SEO
- Imagen social 1200×630 generada por `src/app/opengraph-image.tsx`; Twitter Card en `src/app/twitter-image.tsx`.
- Metadatos con intención específica por página y canonicales existentes.
- Verificar Search Console y sitemap en `/sitemap.xml`. No afirmar indexación solo porque existe el sitemap.
- Probar previsualizaciones de LinkedIn y WhatsApp tras el despliegue; pueden quedar cacheadas.

## QA móvil recomendado
1. Revisar portada, navegación y CTA principal en anchos 360, 390, 768 y 1280 px, sin desbordes horizontales.
2. Abrir casos destacados y verificar que cada URL lleve al caso concreto en Proyectos.
3. Completar el formulario con datos de prueba; solo la aceptación por backend permite confirmar el evento de éxito. **No enviar pruebas en producción sin coordinación previa.**
4. Verificar /opengraph-image y /twitter-image responden PNG, y que las seis páginas siguen usando H1 único.
5. Comparar Lighthouse móvil/escritorio en Inicio, Servicios, Música y Contacto; anotar LCP, INP y CLS, sin inventar cifras.
6. Comprobar que los cuatro videos y diez fotografías no cambian.

## Estado
Se añadieron comprobaciones automatizadas de enlaces, imágenes sociales y navegación; la QA visual y los Core Web Vitals deben evaluarse en el preview en un navegador real antes de fusionar.
