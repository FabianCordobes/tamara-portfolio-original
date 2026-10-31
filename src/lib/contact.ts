export type ContactData = { name: string; email: string; intent: string; message: string; consent: boolean };
export type ContactErrors = Partial<Record<keyof ContactData, string>>;
export const intents = ["Proyecto o consultoría", "Oportunidad profesional", "Propuesta artística o casting", "Otra consulta"];
export function validateContact(data: ContactData): ContactErrors {
 const errors: ContactErrors = {};
 if(data.name.trim().length < 2 || data.name.length > 100) errors.name = "Escribí tu nombre (entre 2 y 100 caracteres).";
 if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email) || data.email.length > 254) errors.email = "Escribí un email válido.";
 if(!intents.includes(data.intent)) errors.intent = "Seleccioná el motivo de tu consulta.";
 if(data.message.trim().length < 20 || data.message.length > 3000) errors.message = "Contanos un poco más (entre 20 y 3.000 caracteres).";
 if(!data.consent) errors.consent = "Necesitamos tu autorización para responder la consulta.";
 return errors;
}
