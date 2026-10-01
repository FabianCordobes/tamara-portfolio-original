export function whatsappUrl(intent: "project" | "opportunity" = "project") {
  const message =
    intent === "project"
      ? "Hola Tamara, vi tu portfolio y me gustaría conversar sobre un proyecto."
      : "Hola Tamara, vi tu portfolio y me gustaría conversar sobre una oportunidad profesional.";
  return `https://wa.me/5493487200083?text=${encodeURIComponent(message)}`;
}
