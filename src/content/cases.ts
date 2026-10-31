export type PortfolioCase = {
  broadcast?: { embed: string; url: string; caption: string };
  gallery?: { src: string; alt: string; caption: string; url: string }[];
  reel?: { embed: string; url: string; caption: string };
  featuredProject?: { name: string; title: string; period: string; paragraphs: string[] };
  sample?: { src: string; alt: string; caption: string; url: string; width?: number; height?: number };
  id: string;
  name: string;
  category: string;
  headline: string;
  period: string;
  instagram: string;
  logo?: string;
  affiliation?: string;
  challenge: string;
  role: string;
  steps: string[];
  results: { value: string; label: string }[];
  conclusion: string;
};

export const cases: PortfolioCase[] = [
  {
    id: "full-medios",
    name: "Full Medios",
    category: "Comunicación / Medios / Gestión comercial",
    period: "Junio de 2025 – enero de 2026",
    instagram: "https://www.instagram.com/full_medios/",
    logo: "/images/logos/full-medios.jpg",
    headline: "Estrategia, equipos y comunicación bajo una misma dirección.",
    challenge: "Medio de radio y streaming con programación audiovisual, presencia digital y necesidades de coordinación entre áreas.",
    role: "Planificación operativa, definición de responsabilidades y coordinación de equipos. Capacitación comercial en venta de publicidad para apoyar la financiación de un evento de cierre.",
    featuredProject: {
      name: "Full Fest",
      title: "Coordinación integral de un evento en vivo",
      period: "Proyecto destacado de Full Medios · Noviembre de 2025",
      paragraphs: [
        "Coordinación de programación, proveedores, roles, transiciones y necesidades operativas de la jornada.",
        "Articulación de recursos, servicios, comunicación y cobertura de prensa para sostener la ejecución."
      ]
    },
    gallery: [{
      src: "/images/projects/fullfest-pasarela.webp",
      alt: "Pasarela y producción del evento Full Fest",
      caption: "Producción y coordinación de Full Fest · Fotografía: Teka Audiovisuales. Noviembre de 2025.",
      url: "https://www.instagram.com/claushinmodels/p/DRpWYhokeac/"
    }],
    steps: [
      "Planificar contenidos y prioridades de trabajo.",
      "Definir roles, responsables y coordinación entre áreas.",
      "Capacitar al equipo comercial en venta de publicidad.",
      "Articular comunicación y operación durante el evento."
    ],
    results: [{ value: "8 horas", label: "de transmisión continua durante Full Fest" }],
    conclusion: "Planificación, liderazgo y ejecución conectados."
  },
  {
    id: "milpos",
    name: "Milpos",
    category: "Comunicación institucional / Territorio",
    period: "Julio de 2024 – junio de 2025",
    instagram: "https://www.instagram.com/milpos.reciclaje/",
    logo: "/images/logos/milpos.jpg",
    headline: "Comunicación que llega al territorio.",
    challenge: "Iniciativa de recolección de residuos eléctricos y electrónicos con campañas de concientización ambiental.",
    role: "Planificación de rutas, producción de contenidos y vinculación con escuelas técnicas para apoyar las campañas de recolección.",
    steps: [
      "Planificar rutas de recolección de residuos electrónicos.",
      "Producir contenidos para comunicar acciones.",
      "Gestionar vínculos institucionales con escuelas técnicas.",
      "Conectar acciones territoriales y comunicación."
    ],
    results: [
      { value: "Zona Norte", label: "Buenos Aires" },
      { value: "CABA", label: "alcance territorial" },
      { value: "Chacabuco", label: "alcance territorial" }
    ],
    conclusion: "Una estrategia de comunicación conectada con acciones concretas."
  },
  {
    id: "strong-gym",
    name: "Strong Fitness Gym",
    category: "Estrategia / Lanzamiento / Posicionamiento",
    period: "Marzo – junio de 2025",
    instagram: "https://www.instagram.com/strongfitnessgym2025/",
    logo: "/images/logos/strong-gym.jpg",
    headline: "Un lanzamiento orientado a su público.",
    challenge: "Lanzamiento de un gimnasio exclusivo para mujeres.",
    role: "Análisis de tendencias para orientar el modelo de negocio, planificación de contenidos de inauguración y cobertura de la actividad cotidiana.",
    steps: [
      "Analizar tendencias y oportunidades de mercado.",
      "Definir un diferencial orientado a la audiencia.",
      "Planificar la comunicación de inauguración.",
      "Generar contenidos sobre los servicios y actividades del negocio."
    ],
    results: [],
    conclusion: "Una propuesta de posicionamiento construida desde la identidad del negocio."
  },
  {
    id: "tamms",
    name: "Tamms",
    category: "Emprendimiento propio / Desarrollo de negocio",
    period: "2020 – 2024",
    instagram: "https://www.instagram.com/tammsoficial/",
    logo: "/images/logos/tamms.jpg",
    headline: "De una idea a un emprendimiento con identidad propia.",
    challenge: "Desarrollé un emprendimiento gastronómico que amplió su propuesta con actividades formativas y encuentros presenciales.",
    role: "Definición de identidad, dirección de la operación y articulación de equipos, programación de actividades y desarrollo comercial.",
    steps: [
      "Crear el concepto y desarrollar la propuesta gastronómica.",
      "Definir identidad, comunicación y prioridades comerciales.",
      "Organizar los equipos y la operación cotidiana.",
      "Coordinar encuentros y actividades complementarias en el espacio."
    ],
    results: [{ value: "2020–2024", label: "período de desarrollo del emprendimiento" }],
    conclusion: "Experiencia directa en creación, gestión y evolución de un negocio."
  },
  {
    id: "brush-fest",
    name: "Brush Fest",
    category: "Producción de eventos / Coordinación comercial",
    period: "Junio – diciembre de 2023",
    instagram: "https://www.instagram.com/brush.FIESTACULTURAL/",
    logo: "/images/logos/brush-fest.jpg",
    headline: "Una iniciativa llevada a la práctica con organización y comunidad.",
    challenge: "Organización de encuentros presenciales de participación comunitaria que involucraron colaboradores, comerciantes y distintos equipos de trabajo.",
    role: "Dirección de producción, coordinación operativa, asignación de responsabilidades, gestión de prensa y capacitación comercial para financiar el encuentro mediante publicidad.",
    steps: [
      "Definir el alcance y la planificación general del evento.",
      "Gestionar apoyos y vínculos con comerciantes y organizaciones.",
      "Coordinar equipos, roles y logística.",
      "Capacitar en comercialización de publicidad para contribuir a la financiación."
    ],
    results: [{ value: "500 personas", label: "reunidas en una edición de la iniciativa" }],
    conclusion: "Capacidad de convocatoria, coordinación y gestión para ejecutar un proyecto."
  }
];
