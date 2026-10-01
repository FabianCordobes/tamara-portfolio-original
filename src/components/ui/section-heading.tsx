export function SectionHeading({
  number,
  label,
  title,
}: {
  number: string;
  label: string;
  title: string;
}) {
  return (
    <header className="section-heading">
      <p className="eyebrow">
        {number} / {label}
      </p>
      <h2>{title}</h2>
    </header>
  );
}
