import { ArrowDown, ArrowRight } from "@phosphor-icons/react/dist/ssr";

type Row = { label: string; value: string; kind?: "score" | "passed" };

const before = {
  title: "Water bottle black",
  copy: "24 oz bottle. Stainless steel. Screw lid. Charcoal.",
  rows: [
    { label: "Listing score", value: "41 / 100", kind: "score" },
    { label: "Search terms covered", value: "2 of 9" },
    { label: "Time to write", value: "30 min" },
  ] as Row[],
};

const after = {
  title: "24 oz Stainless Steel Water Bottle with Screw-Top Lid, Charcoal",
  bullets: [
    "24 oz capacity for your daily routine",
    "Stainless-steel body in a charcoal finish",
    "Screw-top lid for straightforward opening and closing",
  ],
  rows: [
    { label: "Listing score", value: "88 / 100", kind: "score" },
    { label: "Search terms covered", value: "9 of 9" },
    { label: "Brand voice match", value: "94%" },
    { label: "Amazon rules check", value: "Passed", kind: "passed" },
    { label: "Time with AI + review", value: "8 min" },
  ] as Row[],
};

function Rows({ rows, highlight }: { rows: Row[]; highlight: boolean }) {
  return (
    <dl className="m-0 mt-6 divide-y divide-sand border-t border-sand">
      {rows.map((row) => (
        <div key={row.label} className="flex items-center justify-between gap-4 py-3.5">
          <dt className="text-slate">{row.label}</dt>
          <dd className="m-0 font-display font-semibold">
            {row.kind === "score" ? (
              <span
                className={`rounded-full px-3 py-1 text-sm ${
                  highlight ? "bg-cyan text-graphite" : "bg-sand text-slate"
                }`}
              >
                {row.value}
              </span>
            ) : row.kind === "passed" ? (
              <span className="inline-flex items-center gap-2">
                <span aria-hidden className="h-2 w-2 rounded-full bg-cyan" />
                {row.value}
              </span>
            ) : (
              row.value
            )}
          </dd>
        </div>
      ))}
    </dl>
  );
}

export default function CaseStudy() {
  return (
    <section id="case-study" className="mx-auto mt-28 max-w-7xl px-4 sm:px-6 md:mt-44">
      <div className="reveal max-w-3xl">
        <p className="font-display text-sm font-semibold uppercase tracking-[0.14em] text-royal">
          Case study
        </p>
        <h2 className="mt-3 font-display text-[clamp(2rem,4.4vw,4rem)] font-bold leading-[1.05] tracking-[-0.03em]">
          From a 30-minute draft to an 88/100 listing in 8 minutes.
        </h2>
        <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate">
          The seller gave us the facts. AI organised them into a listing that passes Amazon’s rules
          check, ready for the seller’s final review.
        </p>
      </div>

      <div className="mt-12 grid items-start gap-5 md:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] md:items-center md:gap-6">
        {/* Before */}
        <article className="reveal flex flex-col rounded-[2rem] bg-white p-6 sm:p-8">
          <div className="flex items-center gap-3">
            <span className="rounded-full bg-sand px-3 py-1 font-display text-xs font-semibold uppercase tracking-[0.08em] text-slate">
              Before
            </span>
            <h3 className="font-display text-lg font-semibold">Seller draft</h3>
          </div>
          <div className="mt-6 rounded-2xl bg-offwhite p-5">
            <p className="font-display text-lg font-semibold leading-snug">{before.title}</p>
            <p className="mt-2 text-slate">{before.copy}</p>
          </div>
          <div>
            <Rows rows={before.rows} highlight={false} />
          </div>
        </article>

        {/* Connector */}
        <div className="flex items-center justify-center gap-3 py-1 text-center md:flex-col md:self-center md:py-0">
          <ArrowDown aria-hidden size={22} weight="bold" className="text-royal md:hidden" />
          <ArrowRight aria-hidden size={26} weight="bold" className="hidden text-royal md:block" />
          <p className="max-w-[9rem] font-display text-sm font-semibold text-slate">
            AI organises your supplied facts
          </p>
        </div>

        {/* After */}
        <article className="reveal flex flex-col rounded-[2rem] bg-white p-6 shadow-[0_30px_80px_-30px_rgba(28,47,214,0.35)] ring-2 ring-royal sm:p-8">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <span className="rounded-full bg-royal px-3 py-1 font-display text-xs font-semibold uppercase tracking-[0.08em] text-offwhite">
                After
              </span>
              <h3 className="font-display text-lg font-semibold">Suggested listing</h3>
            </div>
            <span className="rounded-full px-3 py-1 text-xs font-medium text-slate ring-1 ring-sand">
              Draft · pending review
            </span>
          </div>
          <div className="mt-6 rounded-2xl bg-offwhite p-5">
            <p className="font-display text-lg font-semibold leading-snug">{after.title}</p>
            <ul className="mt-3 list-disc space-y-1.5 pl-5 text-slate">
              {after.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </div>
          <div>
            <Rows rows={after.rows} highlight />
          </div>
        </article>
      </div>
    </section>
  );
}
