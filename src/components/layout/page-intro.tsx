import type { ReactNode } from "react";

export function PageIntro({ eyebrow, title, description, children }: {
  eyebrow: string;
  title: ReactNode;
  description: string;
  children?: ReactNode;
}) {
  return (
    <section className="shell page-intro">
      <p className="eyebrow">{eyebrow}</p>
      <h1>{title}</h1>
      <p className="page-intro-description">{description}</p>
      {children && <div className="hero-actions">{children}</div>}
    </section>
  );
}
