export type PortfolioCase = {
  broadcast?: { embed: string; url: string; caption: string };
  gallery?: { src: string; alt: string; caption: string; url: string }[];
  reel?: { embed: string; url: string; caption: string };
  featuredProject?: { name: string; title: string; period: string; paragraphs: string[] };
  sample?: { src: string; alt: string; caption: string; url: string; width?: number; height?: number };
  id: string; name: string; category: string; headline: string; period: string; instagram: string; logo?: string; affiliation?: string;
  challenge: string; role: string; steps: string[];
  results: { value: string; label: string }[]; conclusion: string;
};
export const cases: PortfolioCase[] = [
  {
    period: "Junio de 2025 – enero de 2026", instagram: "https://www.instagram.com/full_medios/", logo: "/images/logos/full-medios.jpg", id: "full-medios", name: "Full Medios", category: "Medios / Streaming / Contenidos",
    headline: "Producción con una dirección común.",
    broadcast: { embed: "https://www.youtube.com/embed/bPZc0YGSNVs?start=23100&end=23160&autoplay=1&mute=1&playsinline=1&rel=0", url: "https://www.youtube.com/watch?v=bPZc0YGSNVs", caption: "Full Fest · Pasarela de Claushin Models sobre la alfombra roja. Fragmento de un minuto de la transmisión en vivo. Activá el audio desde los controles." },
    gallery: [{ src: "/images/projects/fullfest-pasarela.webp", alt: "Desfile de Claushin Models en la pasarela de Full Fest", caption: "Pasarela de Claushin Models · Fotografía: Teka Audiovisuales. Publicación colaborativa de noviembre de 2025.", url: "https://www.instagram.com/claushinmodels/p/DRpWYhokeac/" }],
    sample: { src: "/images/projects/full-medios-estudio.jpg", alt: "Estudio de Full Medios con micrófonos y consola de audio", caption: "Estudio de radio y streaming de Full Medios · Octubre de 2025.", url: "https://www.instagram.com/full_medios/reel/DPjdpVPkcNr/" },
    challenge: "Medio de radio y streaming con programación audiovisual y presencia en redes.",
    role: "Planificación del trabajo, definición de roles y coordinación entre áreas. Formación del equipo comercial en venta de publicidad para contribuir a la financiación del evento de cierre.",
    featuredProject: {
      name: "Full Fest",
      title: "Dirección y producción integral de un evento en vivo",
      period: "Proyecto destacado de Full Medios · Noviembre de 2025",
      paragraphs: ["Diseño de la programación, convocatoria artística e integración de desfiles de diseñadores con actuaciones de cantantes solistas.", "Organización de las presentaciones, transiciones y sorteos. Articulación de recursos operativos, servicios y cobertura de prensa para los artistas."]
    },
    steps: ["Planificar la producción de contenidos y definir prioridades de trabajo.", "Coordinar las distintas áreas y asignar responsabilidades al equipo.", "Capacitar al equipo de ventas en comercialización de publicidad.", "Orientar el trabajo comercial a la financiación del evento de noviembre."],
    results: [{ value: "8 horas", label: "de transmisión en vivo continua en Full Fest" }],
    conclusion: "Estrategia, equipo y distribución bajo una misma dirección."
  },
  {
    period: "Julio de 2024 – junio de 2025", instagram: "https://www.instagram.com/milpos.reciclaje/", logo: "/images/logos/milpos.jpg", id: "milpos", name: "Milpos", category: "Gestión ambiental / RR.PP. / Territorio",
    headline: "Comunicación que llega al territorio.",
    challenge: "Iniciativa de recolección de residuos eléctricos y electrónicos con acciones de concientización ambiental.",
    role: "Diseño de rutas, producción de contenidos y vinculación con escuelas técnicas para apoyar las campañas de recolección.",
    steps: ["Planificar las rutas de recolección de residuos electrónicos.", "Producir contenidos para comunicar las acciones del proyecto.", "Gestionar relaciones institucionales con escuelas técnicas.", "Articular comunicación y operación territorial para apoyar la recolección y la concientización ambiental."],
    results: [{ value: "Zona Norte", label: "Buenos Aires" }, { value: "CABA", label: "alcance territorial" }, { value: "Chacabuco", label: "alcance territorial" }],
    conclusion: "De la visibilidad a vínculos y acciones concretas."
  },
  {
    period: "Marzo – junio de 2025", instagram: "https://www.instagram.com/strongfitnessgym2025/", logo: "/images/logos/strong-gym.jpg", id: "strong-gym", name: "Strong Fitness Gym", category: "Fitness / Estrategia / Posicionamiento",
    headline: "Una propuesta enfocada en su público.",
    challenge: "Lanzamiento de un gimnasio exclusivo para mujeres.",
    role: "Análisis de tendencias del mercado para definir el modelo de negocio. Planificación de contenidos de inauguración y cobertura de los entrenamientos cotidianos.",
    steps: ["Analizar tendencias del mercado para orientar la propuesta de negocio.", "Definir el enfoque exclusivo para mujeres como diferencial de posicionamiento.", "Planificar los contenidos de comunicación para la inauguración.", "Realizar la cobertura de los entrenamientos cotidianos del gimnasio."],
    results: [],
    conclusion: "Una dirección estratégica construida desde la identidad del negocio."
  },
  {
    period: "2020 – 2024", instagram: "https://www.instagram.com/tammsoficial/", logo: "/images/logos/tamms.jpg", id: "tamms", name: "Tamms", category: "Proyecto propio / Gastronomía / Experiencias",
    headline: "Creación y expansión de un espacio gastronómico y cultural.",
    gallery: [{ src: "/images/projects/tamms-escenario.jpg", alt: "Presentación de voz y danza de alumnos de Tamms sobre un escenario", caption: "Muestras de alumnos · Ensamble de voces, instrumentos, poesía y danza.", url: "https://www.instagram.com/tammsoficial/p/C1X-Q2OJT78/?img_index=2" }],
    reel: { embed: "https://www.instagram.com/p/CuINEEnJhF-/embed/", url: "https://www.instagram.com/tammsoficial/reel/CuINEEnJhF-/", caption: "El espacio · Presentación de Tamms, junio de 2023. Actividad musical destacada cerca del minuto 1:05." },
    sample: { src: "/images/projects/tamms-formacion.jpg", alt: "Participantes e instrumentos en una actividad de formación musical en Tamms", caption: "Formación musical · Actividad en Tamms, junio de 2023.", url: "https://www.instagram.com/tammsoficial/p/CtATZMIJsJU/", width: 530, height: 640 },
    challenge: "Fundé Tamms como un emprendimiento gastronómico y lo desarrollé como espacio de formación y encuentro artístico. Su programación reunió a distintos docentes de música, canto y apoyo escolar, además de muestras que combinaban voces, instrumentos, poesía y danza.",
    role: "Definí la identidad del proyecto, dirigí su desarrollo y organicé la programación, los equipos y la actividad comercial. En las producciones artísticas, gestioné entrevistas y cobertura de prensa para acompañar la difusión de los participantes.",
    steps: ["Crear el concepto y desarrollar la propuesta gastronómica.", "Ampliar el espacio hacia actividades culturales y formativas.", "Integrar clases de música, canto, apoyo escolar y otras actividades.", "Coordinar la producción de las primeras dos ediciones de Brush Fest en Tamms."],
    results: [{ value: "2 ediciones", label: "de Brush Fest: sede de una iniciativa de apoyo a artistas emergentes y participación comunitaria" }],
    conclusion: "Un proyecto propio que amplió su propuesta y se convirtió en sede de formación y producción cultural."
  },
{
  "logo": "/images/logos/brush-fest.jpg", "id": "brush-fest",
  "name": "Brush Fest",
  "reel": { "embed": "https://www.instagram.com/p/C0M0_3eJoo8/embed/", "url": "https://www.instagram.com/brush.fiestacultural/reel/C0M0_3eJoo8/", "caption": "Presentación de Brush Fest · Noviembre de 2023." },
  "sample": { "src": "/images/projects/brush-fest-programacion.jpg", "alt": "Flyer de Brush Fest con la programación de la fiesta de fin de año del 16 de diciembre", "caption": "Pieza de difusión con la programación de la fiesta de fin de año · Diciembre de 2023.", "url": "https://www.instagram.com/brush.fiestacultural/reel/C0uwVDyp1tJ/" },
  "category": "Proyecto propio / Producción cultural",
  "period": "Junio – diciembre de 2023",
  "instagram": "https://www.instagram.com/brush.FIESTACULTURAL/",
  "headline": "Un encuentro para reactivar el trabajo artístico.",
  "challenge": "Impulsé esta iniciativa desde Tamms junto a otros artistas tras la pandemia. La jornada reunió distintas generaciones, géneros y disciplinas: talentos emergentes locales y nacionales, artesanos, feriantes e intervenciones plásticas en un mural colectivo. Contó con el respaldo de comerciantes y referentes culturales.",
  "role": "Dirección de producción, diseño de la programación, definición de roles y coordinación operativa. Capacitación comercial para financiar el encuentro mediante publicidad. Gestión de prensa, entrevistas y cobertura artística.",
  "steps": [
    "Crear la propuesta de resistencia cultural y convocar a artistas emergentes locales y nacionales.",
    "Realizar las primeras dos ediciones en Tamms y articular el apoyo de comerciantes y responsables de otros centros culturales.",
    "Coordinar equipos y distribuir responsabilidades entre las distintas áreas.",
    "Integrar la operación gastronómica con la producción del evento.",
    "Capacitar al equipo de ventas en comercialización de publicidad para financiar el evento."
  ],
  "results": [{ "value": "500 personas", "label": "reunidas en una edición en apoyo a la iniciativa" }],
  "conclusion": "Una de las ediciones reunió a 500 personas que apoyaron la iniciativa, entre ellas comerciantes y responsables de otros centros culturales. Las primeras dos ediciones se realizaron en Tamms."
}
];


