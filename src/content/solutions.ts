export type Solution = {
  id: string;
  number: string;
  name: string;
  problem: string;
  approach: string;
  scope: string;
  outcome: string;
  connects: string;
};

export const solutions: Solution[] = [
  {
    id: "estrategia",
    number: "01",
    name: "Estrategia y desarrollo de negocios",
    problem: "Hay oportunidades, pero falta una dirección o prioridades compartidas.",
    approach: "Analizar el contexto y el negocio para distinguir lo urgente de lo importante.",
    scope: "Diagnóstico, propuesta de valor, objetivos, líneas estratégicas y prioridades de acción.",
    outcome: "Un rumbo claro sobre el que puedan organizarse decisiones y recursos.",
    connects: "La estrategia orienta el trabajo comercial, la comunicación y la producción."
  },
  {
    id: "produccion",
    number: "02",
    name: "Producción y dirección de proyectos",
    problem: "Una idea necesita estructura y personas capaces de llevarla a cabo.",
    approach: "Traducir el concepto en planificación, coordinación y seguimiento de la ejecución.",
    scope: "Alcance, recursos, cronograma, presupuestos, articulación de profesionales y proveedores, supervisión y cierre según el proyecto.",
    outcome: "Condiciones de trabajo más claras para concretar producciones culturales, comerciales, audiovisuales o eventos.",
    connects: "La producción integra estrategia, equipos, comunicación y operación."
  },
  {
    id: "comunicacion",
    number: "03",
    name: "Comunicación y posicionamiento",
    problem: "El valor de una organización no se expresa con suficiente claridad.",
    approach: "Encontrar un mensaje consistente con la identidad y las necesidades de cada público.",
    scope: "Narrativa, contenidos, lineamientos de comunicación y articulación de medios y canales.",
    outcome: "Una comunicación reconocible, comprensible y alineada con el proyecto.",
    connects: "Los mensajes acompañan la estrategia comercial y su puesta en práctica."
  },
  {
    id: "comercial",
    number: "04",
    name: "Desarrollo comercial",
    problem: "Hay que convertir vínculos y propuestas en oportunidades de negocio.",
    approach: "Identificar públicos, relaciones y procesos que permitan desarrollar una propuesta.",
    scope: "Prospección, propuestas comerciales, alianzas, captación, organización y seguimiento de oportunidades.",
    outcome: "Un proceso comercial más ordenado, con prioridades y posibilidades de continuidad.",
    connects: "El trabajo comercial se sostiene con posicionamiento, procesos y coordinación."
  },
  {
    id: "direccion",
    number: "05",
    name: "Dirección y coordinación",
    problem: "Un proyecto involucra diferentes áreas y necesita decisiones compartidas.",
    approach: "Organizar responsabilidades, recursos, comunicación entre equipos y seguimiento.",
    scope: "Coordinación interdisciplinaria, objetivos, roles, procesos, supervisión y resolución de situaciones durante la ejecución.",
    outcome: "Mayor claridad para conducir el trabajo y tomar decisiones a tiempo.",
    connects: "La dirección hace posible que las distintas disciplinas actúen como un conjunto."
  }
];
