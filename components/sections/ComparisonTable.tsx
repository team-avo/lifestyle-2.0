import { Section, Eyebrow } from "@/components/primitives/Section";

export function ComparisonTable({
  eyebrow,
  heading,
  intro,
  colA,
  colB,
  rows,
}: {
  eyebrow?: string;
  heading: string;
  intro?: string;
  colA: string;
  colB: string;
  rows: { label: string; a: string; b: string }[];
}) {
  return (
    <Section>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className="max-w-3xl text-3xl sm:text-4xl text-ink">{heading}</h2>
      {intro && <p className="mt-4 max-w-2xl text-muted">{intro}</p>}
      <div className="mt-10 overflow-x-auto rounded-card border border-line">
        <table className="w-full min-w-[640px] text-left text-sm">
          <thead>
            <tr className="bg-surface">
              <th className="p-4 font-medium text-muted"></th>
              <th className="p-4 font-serif text-base text-brand">{colA}</th>
              <th className="p-4 font-serif text-base text-ink">{colB}</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.label} className="border-t border-line align-top">
                <td className="p-4 font-medium text-ink">{r.label}</td>
                <td className="p-4 text-muted">{r.a}</td>
                <td className="p-4 text-muted">{r.b}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Section>
  );
}
