/** Validates the dashboard-issued form identifier before constructing a fixed provider URL. */
export function getFormspreeEndpoint(formID: string | undefined): string | null {
  const id = formID?.trim();
  if (!id || !/^[a-zA-Z0-9]{6,32}$/.test(id)) return null;
  return `https://formspree.io/f/${id}`;
}
