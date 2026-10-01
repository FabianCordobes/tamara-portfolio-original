import { metrics } from "@/content/metrics";
import { SectionHeading } from "@/components/ui/section-heading";
export function Impact() {
  const verifiedMetrics = metrics.filter((metric) => metric.verified);
  if (!verifiedMetrics.length) return null;
  return (
    <section id="impacto" className="section impact-section">
      <div className="shell">
        <SectionHeading
          number="02"
          label="Impacto"
          title="Resultados y alcance."
        />
        <div className="metric-grid">
          {verifiedMetrics.map((m, i) => (
            <article
              key={m.label}
              className={`metric ${i < 3 ? "metric-main" : ""}`}
            >
              <p className="metric-value">{m.value}</p>
              <h3>{m.label}</h3>
              <p className="metric-detail">{m.detail}</p>
            </article>
          ))}
        </div>
        <p className="source-note">
          Resultados con evidencia verificada.
        </p>
      </div>
    </section>
  );
}
