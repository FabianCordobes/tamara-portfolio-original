export type ContactData = {
  name: string;
  email: string;
  company?: string;
  siteUrl?: string;
  intent: string;
  message: string;
  consent: boolean;
};
export type ContactErrors = Partial<Record<keyof ContactData, string>>;

export const intents = [
  "Estrategia y desarrollo de negocios",
  "Producción y dirección de proyectos",
  "Comunicación y posicionamiento",
  "Desarrollo comercial",
  "Dirección y coordinación",
  "Oportunidad profesional",
  "Colaboración artística",
  "Otro motivo"
] as const;

export const intentByReason: Record<string, (typeof intents)[number]> = {
  proyectos: "Producción y dirección de proyectos",
  produccion: "Producción y dirección de proyectos",
  estrategia: "Estrategia y desarrollo de negocios",
  negocio: "Estrategia y desarrollo de negocios",
  servicio: "Estrategia y desarrollo de negocios",
  comunicacion: "Comunicación y posicionamiento",
  comercial: "Desarrollo comercial",
  direccion: "Dirección y coordinación",
  empleo: "Oportunidad profesional",
  musica: "Colaboración artística",
  otro: "Otro motivo"
};

export function validateContact(data: ContactData): ContactErrors {
  const errors: ContactErrors = {};
  if (data.name.trim().length < 2 || data.name.length > 100)
    errors.name = "Escribí tu nombre (entre 2 y 100 caracteres).";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email) || data.email.length > 254)
    errors.email = "Escribí un email válido.";
  if (data.company && data.company.trim().length > 120)
    errors.company = "El nombre de la organización no puede superar 120 caracteres.";
  if (data.siteUrl) {
    try {
      const url = new URL(data.siteUrl);
      if (!["https:", "http:"].includes(url.protocol) || data.siteUrl.length > 300)
        errors.siteUrl = "Ingresá una dirección web válida (https://...).";
    } catch {
      errors.siteUrl = "Ingresá una dirección web válida (https://...).";
    }
  }
  if (!intents.some(intent => intent === data.intent))
    errors.intent = "Seleccioná el motivo de tu consulta.";
  if (data.message.trim().length < 20 || data.message.length > 3000)
    errors.message = "Contanos un poco más (entre 20 y 3.000 caracteres).";
  if (!data.consent) errors.consent = "Necesitamos tu autorización para responder la consulta.";
  return errors;
}
