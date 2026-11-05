import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowUpRight, CaretDown } from "@phosphor-icons/react/dist/ssr";
import ContactForm from "@/components/ContactForm";
import SiteHeader from "@/components/SiteHeader";
import { SITE_URL, landingPages } from "@/lib/landing-pages";

export type LandingSection = { id: string; heading: string; body: ReactNode };
export type LandingFaq = { question: string; answer: string };
export type LandingSource = { title: string; publisher: string; url: string; date?: string };

export type LandingContent = {
  slug: string;
  breadcrumb: string;
  question: string; // the H1, phrased exactly as people search it
  answer: string; // the direct three-sentence answer under the H1
  description: string; // same text as the meta description
  author: { name: string; role: string };
  updated: string; // ISO date
  readMinutes: number;
  sections: LandingSection[];
  faqs: LandingFaq[];
  sources: LandingSource[];
};

const reviewSteps = [
  "You send us a link to one Amazon listing.",
  "We review its title, bullets, A+ content and images.",
  "We email you what we’d improve first.",
];

function formatDate(iso: string) {
  return new Date(`${iso}T12:00:00Z`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

// Article, FAQ and breadcrumb data for search engines and AI answer engines.
function structuredData(page: LandingContent) {
  const url = `${SITE_URL}/${page.slug}`;
  const organization = { "@type": "Organization", name: "Nautilo Studio", url: SITE_URL };
  return [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: page.question,
      description: page.description,
      mainEntityOfPage: url,
      dateModified: page.updated,
      author: { "@type": "Person", name: page.author.name, worksFor: organization },
      publisher: organization,
      citation: page.sources.map((source) => source.url),
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: page.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: page.breadcrumb, item: url },
      ],
    },
  ];
}

const h2 =
  "font-display text-[clamp(1.75rem,3.2vw,2.75rem)] font-bold leading-[1.1] tracking-[-0.025em]";

export default function LandingPage({ page }: { page: LandingContent }) {
  const related = landingPages.filter((link) => link.slug !== page.slug);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData(page)).replace(/</g, "\\u003c"),
        }}
      />

      <SiteHeader />

      <main id="main" className="flex-1 overflow-x-clip">
        <article>
          {/* Question and direct answer */}
          <div className="mx-auto max-w-4xl px-4 pt-32 sm:px-6 md:pt-40">
            <nav aria-label="Breadcrumb" className="text-sm text-slate">
              <ol className="m-0 flex list-none gap-2 p-0">
                <li>
                  <Link href="/" className="underline underline-offset-4 hover:text-royal">
                    Home
                  </Link>
                </li>
                <li aria-hidden>/</li>
                <li aria-current="page" className="text-graphite">
                  {page.breadcrumb}
                </li>
              </ol>
            </nav>
            <h1
              className="rise mt-6 font-display text-[clamp(2.4rem,5.6vw,4.75rem)] font-bold leading-[1.03] tracking-[-0.04em]"
              style={{ "--i": 0 } as React.CSSProperties}
            >
              {page.question}
            </h1>
            <div
              className="rise mt-8 rounded-[2rem] bg-white p-6 ring-2 ring-royal sm:p-8"
              style={{ "--i": 1 } as React.CSSProperties}
            >
              <p className="font-display text-sm font-semibold uppercase tracking-[0.14em] text-royal">
                Short answer
              </p>
              <p className="mt-3 text-lg leading-relaxed text-graphite sm:text-xl">{page.answer}</p>
            </div>
            <p
              className="rise mt-6 text-sm text-slate"
              style={{ "--i": 2 } as React.CSSProperties}
            >
              By <span className="font-medium text-graphite">{page.author.name}</span>,{" "}
              {page.author.role} · Updated <time dateTime={page.updated}>{formatDate(page.updated)}</time>{" "}
              · {page.readMinutes} min read
            </p>
          </div>

          {/* Contents and sections */}
          <div className="mx-auto mt-16 grid max-w-6xl gap-12 px-4 sm:px-6 md:mt-24 md:grid-cols-[14rem_minmax(0,1fr)] md:gap-16">
            <nav aria-label="On this page" className="hidden md:block">
              <div className="sticky top-28">
                <p className="font-display text-sm font-semibold uppercase tracking-[0.14em] text-slate">
                  On this page
                </p>
                <ol className="m-0 mt-4 list-none space-y-3 p-0 text-sm">
                  {page.sections.map((section) => (
                    <li key={section.id}>
                      <a href={`#${section.id}`} className="text-slate transition-colors hover:text-royal">
                        {section.heading}
                      </a>
                    </li>
                  ))}
                  <li>
                    <a href="#faq" className="text-slate transition-colors hover:text-royal">
                      Frequently asked questions
                    </a>
                  </li>
                </ol>
              </div>
            </nav>

            <div className="max-w-3xl space-y-16">
              {page.sections.map((section) => (
                <section key={section.id} id={section.id} className="reveal scroll-mt-28">
                  <h2 className={h2}>{section.heading}</h2>
                  <div className="mt-5 space-y-5 text-lg leading-relaxed text-slate [&_a]:text-graphite [&_a]:underline [&_a]:decoration-royal/40 [&_a]:underline-offset-4 [&_a:hover]:text-royal [&_h3]:font-display [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:text-graphite [&_li]:pl-1 [&_ol]:list-decimal [&_ol]:space-y-2 [&_ol]:pl-6 [&_strong]:font-semibold [&_strong]:text-graphite [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6">
                    {section.body}
                  </div>
                </section>
              ))}

              {/* Case study teaser */}
              <Link
                href="/#case-study"
                className="reveal group flex items-center justify-between gap-6 rounded-[2rem] bg-apricot p-6 sm:p-8"
              >
                <span>
                  <span className="block font-display text-sm font-semibold uppercase tracking-[0.14em] text-graphite/70">
                    Case study
                  </span>
                  <span className="mt-2 block font-display text-2xl font-semibold leading-snug tracking-[-0.01em]">
                    See a seller draft next to the listing we suggested.
                  </span>
                </span>
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-graphite text-offwhite transition-transform duration-300 ease-(--ease-out-strong) group-hover:-translate-y-px group-hover:translate-x-0.5">
                  <ArrowUpRight size={20} weight="bold" aria-hidden />
                </span>
              </Link>

              {/* FAQ */}
              <section id="faq" className="reveal scroll-mt-28">
                <h2 className={h2}>Frequently asked questions</h2>
                <div className="mt-6 divide-y divide-sand border-y border-sand">
                  {page.faqs.map((faq) => (
                    <details key={faq.question} className="group py-5">
                      <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-display text-lg font-semibold [&::-webkit-details-marker]:hidden">
                        <h3 className="text-lg font-semibold">{faq.question}</h3>
                        <CaretDown
                          size={20}
                          weight="bold"
                          aria-hidden
                          className="shrink-0 text-royal transition-transform duration-200 group-open:rotate-180"
                        />
                      </summary>
                      <p className="mt-3 text-lg leading-relaxed text-slate">{faq.answer}</p>
                    </details>
                  ))}
                </div>
              </section>

              {/* Sources */}
              <section aria-labelledby="sources" className="reveal">
                <h2 id="sources" className="font-display text-xl font-semibold">
                  Sources
                </h2>
                <ol className="mt-4 space-y-2 pl-5 text-slate">
                  {page.sources.map((source) => (
                    <li key={source.url}>
                      {source.publisher},{" "}
                      <a
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-graphite underline underline-offset-4 hover:text-royal"
                      >
                        {source.title}
                      </a>
                      {source.date ? `, ${source.date}` : ""}.
                    </li>
                  ))}
                </ol>
              </section>

              {/* Internal links */}
              <section aria-labelledby="related" className="reveal">
                <h2 id="related" className="font-display text-xl font-semibold">
                  Keep reading
                </h2>
                <ul className="mt-4 flex flex-wrap gap-3 p-0">
                  {related.map((link) => (
                    <li key={link.slug} className="list-none">
                      <Link
                        href={`/${link.slug}`}
                        className="inline-block rounded-full bg-white px-4 py-2 ring-1 ring-sand transition-colors hover:ring-royal"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                  <li className="list-none">
                    <Link
                      href="/#services"
                      className="inline-block rounded-full bg-white px-4 py-2 ring-1 ring-sand transition-colors hover:ring-royal"
                    >
                      Our services for Amazon sellers
                    </Link>
                  </li>
                  <li className="list-none">
                    <Link
                      href="/#how"
                      className="inline-block rounded-full bg-white px-4 py-2 ring-1 ring-sand transition-colors hover:ring-royal"
                    >
                      How we work
                    </Link>
                  </li>
                  <li className="list-none">
                    <Link
                      href="/#contact"
                      className="inline-block rounded-full bg-white px-4 py-2 ring-1 ring-sand transition-colors hover:ring-royal"
                    >
                      Talk to us
                    </Link>
                  </li>
                </ul>
              </section>
            </div>
          </div>
        </article>

        {/* Free listing review */}
        <section id="review" className="on-dark mx-auto mt-28 max-w-7xl scroll-mt-24 px-4 sm:px-6 md:mt-36">
          <div className="grid gap-12 rounded-[2rem] bg-graphite px-8 py-14 text-offwhite md:grid-cols-2 md:gap-16 md:px-16 md:py-24">
            <div>
              <h2 className="font-display text-[clamp(2rem,4.4vw,4rem)] font-bold leading-[1.05] tracking-[-0.03em]">
                Want us to check your listing?
              </h2>
              <p className="mt-5 max-w-md text-lg leading-relaxed text-offwhite/80">
                Send one listing and we’ll tell you, for free, what to fix first.
              </p>
              <ol className="m-0 mt-8 list-none space-y-4 p-0">
                {reviewSteps.map((step, index) => (
                  <li key={step} className="flex gap-4 text-lg leading-relaxed text-offwhite/85">
                    <span className="w-4 shrink-0 font-display font-semibold text-cyan" aria-hidden>
                      {index + 1}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </div>
            <ContactForm variant="review" />
          </div>
        </section>
      </main>

      <footer className="mx-auto mt-10 flex w-full max-w-7xl flex-col gap-2 px-4 pb-10 text-sm text-slate sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p>© 2026 Nautilo Studio. Analyse. Optimise. Automate.</p>
        <p>
          A student project at TBS Education Barcelona.{" "}
          <Link href="/privacy" className="underline underline-offset-4 hover:text-royal">
            Privacy note
          </Link>
        </p>
      </footer>
    </>
  );
}
