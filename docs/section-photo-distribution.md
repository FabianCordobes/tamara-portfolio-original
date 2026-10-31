# Fotografías de proyectos — ampliación editorial

## Distribución sin repeticiones

Las diez fotografías de `src/components/sections/music-gallery.tsx` quedan exclusivamente en el carrusel de Música. Ninguna se reutiliza.

| Página | Archivo existente | Contexto |
| --- | --- | --- |
| Inicio | `full-medios-estudio.jpg` | Estudio de Full Medios, junto a experiencia destacada |
| Servicios | `brush-fest-programacion.jpg` | Ejemplo de material de difusión en producción cultural |
| Trayectoria | `tamms-formacion.jpg` | Actividad de formación musical y coordinación del espacio |
| Proyectos / Tamms | `tamms-escenario.jpg` | Muestra artística del proyecto |
| Proyectos / Tamms | `tamms-evento.jpg` | Archivo fotográfico de evento de Tamms |

Las dos imágenes de Tamms figuran visibles dentro de su caso, no repetidas en otras páginas. El registro original de Full Fest (`fullfest-pasarela.webp`) permanece dentro de los detalles de Full Medios.

## Procedencia y derechos

Todos los archivos ya existían en `public/images/projects`. Las descripciones conocidas se basan en el historial del repo. La foto `tamms-evento.jpg` carece de identificación editorial detallada; su epígrafe deliberadamente es neutro. Antes de publicar, el propietario debe verificar encuadre, identidad, atribución y autorización para imágenes con terceros, especialmente fotos de eventos. No se han añadido imágenes externas ni imágenes generadas por IA.

## QA

- Verificar 360/390/768/1280 px, sin cortes de contenido ni saltos de diseño.
- Revisar contraste, alt, epígrafes, recortes y atribuciones, en especial Tamms.
- Confirmar que el carrusel conserva diez fotografías y los videos permanecen sin cambios.
- El smoke test comprueba que cada nuevo archivo aparece solo en su página asignada.
- La página de Servicios utiliza el archivo del flyer como pieza de documentación, no como fotografía.
