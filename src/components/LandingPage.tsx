import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CaretDown, DownloadSimple } from "@phosphor-icons/react/dist/ssr";
import ContactForm from "@/components/ContactForm";
import SiteHeader from "@/components/SiteHeader";
import TalkButton from "@/components/TalkButton";
import { SITE_URL, landingPages } from "@/lib/landing-pages";

export type LandingSection = { id: string; heading: string; body: ReactNode };
export type LandingFaq = { question: string; answer: string };

export type LandingContent = {
  slug: string;
  breadcrumb: string;
  question: string; // the H1, phrased exactly as people search it
  answer: string; // the direct three-sentence answer under the H1
  description: string; // same text as the meta description
  image: { src: string; alt: string; tile: string };
  updated: string; // ISO date
  sections: LandingSection[];
  faqs: LandingFaq[];
};

const reviewSteps = [
  "You send us a link to one Amazon listing.",
  "We review its title, bullets, A+ content and images.",
  "We email you what we’d improve first.",
];

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
      author: organization,
      publisher: organization,
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

      <SiteHeader guide={page.slug} />

      <main id="main" className="flex-1 overflow-x-clip">
        <article>
          {/* Question and direct answer */}
          <div className="mx-auto max-w-7xl px-4 pt-32 sm:px-6 md:pt-40">
            <div className="grid items-center gap-10 md:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] md:gap-14">
              <div>
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
                  className="rise mt-6 font-display text-[clamp(2.4rem,5.2vw,4.5rem)] font-bold leading-[1.03] tracking-[-0.04em]"
                  style={{ "--i": 0 } as React.CSSProperties}
                >
                  {page.question}
                </h1>
                <div
                  className="rise mt-8 flex flex-wrap items-center gap-x-7 gap-y-4"
                  style={{ "--i": 1 } as React.CSSProperties}
                >
                  <TalkButton href="#review" label="Get a free listing review" />
                  <a
                    href={`/guides/nautilo-${page.slug}-guide.pdf`}
                    download
                    className="group inline-flex items-center gap-3 rounded-full bg-white py-2 pl-5 pr-2 font-display font-semibold text-graphite ring-2 ring-graphite transition-transform duration-150 ease-out active:scale-[0.97]"
                  >
                    Download the free PDF guide
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-cyan transition-transform duration-300 ease-(--ease-out-strong) group-hover:translate-y-0.5">
                      <DownloadSimple size={18} weight="bold" aria-hidden />
                    </span>
                  </a>
                  <Link
                    href="/#contact"
                    className="py-3 font-display font-semibold text-graphite underline decoration-sand decoration-2 underline-offset-8 transition-colors hover:decoration-royal"
                  >
                    Talk to us
                  </Link>
                </div>
              </div>
              <div
                className={`rise relative aspect-[4/3] overflow-hidden rounded-[2rem] ${page.image.tile}`}
                style={{ "--i": 2 } as React.CSSProperties}
              >
                <Image
                  src={page.image.src}
                  alt={page.image.alt}
                  fill
                  priority
                  sizes="(min-width: 768px) 40vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
            <div
              className="rise on-dark mt-5 rounded-[2rem] bg-royal p-8 text-offwhite md:p-14"
              style={{ "--i": 3 } as React.CSSProperties}
            >
              <p className="font-display text-sm font-semibold uppercase tracking-[0.14em] text-cyan">
                Short answer
              </p>
              <p className="mt-4 max-w-4xl font-display text-[clamp(1.25rem,2.3vw,1.75rem)] font-medium leading-[1.35] tracking-[-0.01em]">
                {page.answer}
              </p>
            </div>
          </div>

          {/* Sections: the heading stays beside its content on wide screens */}
          <div className="mx-auto mt-20 max-w-7xl space-y-16 px-4 sm:px-6 md:mt-28 md:space-y-24">
            <div className="space-y-16 md:space-y-24">
              {page.sections.map((section) => (
                <section
                  key={section.id}
                  id={section.id}
                  className="reveal grid scroll-mt-28 gap-6 border-t border-sand pt-10 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] md:gap-14"
                >
                  <h2 className={`${h2} md:sticky md:top-28 md:self-start`}>{section.heading}</h2>
                  <div className="space-y-5 text-lg leading-relaxed text-slate [&_a]:text-graphite [&_a]:underline [&_a]:decoration-royal/40 [&_a]:underline-offset-4 [&_a:hover]:text-royal [&_h3]:font-display [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:text-graphite [&_li]:pl-1 [&_ol]:list-decimal [&_ol]:space-y-3 [&_ol]:pl-6 [&_strong]:font-semibold [&_strong]:text-graphite [&_ul]:grid [&_ul]:list-none [&_ul]:gap-3 [&_ul]:p-0 md:[&_ul]:grid-cols-2 [&_ul>li]:rounded-[1.5rem] [&_ul>li]:bg-white [&_ul>li]:p-6 [&_ul>li]:text-base md:[&_ul>li:last-child:nth-child(odd)]:col-span-2">
                    {section.body}
                  </div>
                </section>
              ))}
            </div>

              {/* Full guide as a PDF */}
              <a
                href={`/guides/nautilo-${page.slug}-guide.pdf`}
                download
                className="reveal group flex items-center justify-between gap-6 rounded-[2rem] bg-graphite p-6 text-offwhite sm:p-8"
              >
                <span>
                  <span className="block font-display text-sm font-semibold uppercase tracking-[0.14em] text-cyan">
                    Free PDF guide · 10 pages
                  </span>
                  <span className="mt-2 block font-display text-2xl font-semibold leading-snug tracking-[-0.01em]">
                    Download the full guide, with examples, charts and a checklist.
                  </span>
                </span>
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-cyan text-graphite transition-transform duration-300 ease-(--ease-out-strong) group-hover:translate-y-0.5">
                  <DownloadSimple size={20} weight="bold" aria-hidden />
                </span>
              </a>

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
                <div className="mt-6 max-w-4xl divide-y divide-sand border-y border-sand">
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
