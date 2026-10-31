import Link from "next/link";

export function CtaBand({ eyebrow, title, description, href, label }: {
  eyebrow: string;
  title: string;
  description: string;
  href: string;
  label: string;
}) {
  return (
    <section className="cta-band">
      <div className="shell cta-band-inner">
        <div>
          <p className="eyebrow">{eyebrow}</p>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <Link className="button button-primary" href={href}>{label} ↗</Link>
      </div>
    </section>
  );
}
