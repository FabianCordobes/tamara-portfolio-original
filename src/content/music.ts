/** Material artístico seleccionado de la carpeta que compartió Tamara.
 * Los permisos de reproducción pública de Google Drive deben validarse antes de publicar.
 */
export type MusicVideo = {
  id: string;
  title: string;
  description: string;
  context: string;
  orientation: "portrait" | "landscape";
  duration: string;
};

export const musicVideos: MusicVideo[] = [
  {
    id: "1Iqs0YqcFnoHpvJEr3Ru3oKcwSVdMPHCg",
    title: "Melódico romántico",
    description: "Interpretación vocal sobre escenario, con primeros planos y momentos expresivos.",
    context: "Interpretación en vivo",
    orientation: "portrait",
    duration: "0:38"
  },
  {
    id: "1vSWw3LPIpkBciZgAFU1o5ozqbOl9-MJ-",
    title: "Folklore",
    description: "Presentación musical junto a instrumentistas, en un escenario íntimo.",
    context: "Actuación con músicos",
    orientation: "portrait",
    duration: ""
  },
  {
    id: "1G6tcMvoLrNc24b_TykvbB0OoHeGVGGap",
    title: "Expresión chacarera",
    description: "Interpretación en formato audiovisual, con guitarra y un entorno diferente al escenario tradicional.",
    context: "Interpretación audiovisual",
    orientation: "landscape",
    duration: ""
  },
  {
    id: "1JR3tMfqlsG754DWud4OlLAsFDETc0zYZ",
    title: "Canción inédita",
    description: "Registro de una interpretación en un espacio cercano al público.",
    context: "Presentación íntima",
    orientation: "portrait",
    duration: "0:22"
  }
];

export function googleDriveVideoUrl(id: string) {
  return `https://drive.google.com/file/d/${id}/view`;
}

export function googleDrivePreviewUrl(id: string) {
  return `https://drive.google.com/file/d/${id}/preview`;
}
