import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/layout/page-intro";

export const metadata: Metadata = {
  title: "Privacidad y contacto",
  description: "Información sobre los datos que se solicitan para responder consultas al portfolio de Tamara Atadía.",
  alternates: { canonical: "/privacidad" }
};
export default function PrivacyPage() {
  return (
    <>
      <PageIntro
        eyebrow="Privacidad"
        title={<>Tus datos, solo para <em>responder tu consulta.</em></>}
        description="Esta página explica la información solicitada a través del formulario de contacto."
      />
      <section className="section shell privacy-copy" aria-label="Tratamiento de consultas">
        <h2>Qué se solicita</h2>
        <p>Nombre, correo electrónico, motivo y mensaje. Empresa y sitio web son opcionales. Los datos permiten identificar la consulta y responderla.</p>
        <h2>Cómo se procesa</h2>
        <p>El formulario utiliza un servicio externo, Formspree, para recibir las consultas. El destino de notificación y la conservación de datos se gestionan en ese proveedor; esta web no publica los mensajes recibidos.</p>
        <p>La información no se solicita para publicidad ni para suscripciones automáticas. Si no querés usar el formulario, podés comunicarte por LinkedIn desde la página de contacto.</p>
        <h2>Solicitudes sobre tus datos</h2>
        <p>Podés pedir información, corrección o eliminación de tu consulta usando las vías de contacto publicadas. La atención de la solicitud depende del acceso a los registros del proveedor y de las obligaciones aplicables.</p>
        <Link href="/contacto" className="text-link">Volver a contacto ↗</Link>
      </section>
    </>
  );
}
