export type AnchorID =
  "formacion" | "inicio" | "perfil" | "impacto" | "expertise" | "experiencia" | "proyectos" | "metodologia" | "contacto";
export type NavigationItem = { id: AnchorID; label: string };
export type Metric = {
  value: string;
  label: string;
  detail: string;
  sourceNote: string;
  verified: boolean;
};
export type Expertise = { title: string; description: string };
export type Experience = {
  name: string;
  category: string;
  description: string;
};
export type ProjectMedia = {
  src: string;
  alt: string;
  width: number;
  height: number;
};
