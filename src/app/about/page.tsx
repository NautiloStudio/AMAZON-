import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import Nautilus from "@/components/Nautilus";
import SiteHeader from "@/components/SiteHeader";
import TeamCarousel from "@/components/TeamCarousel";
import { SITE_URL } from "@/lib/landing-pages";
import { team } from "@/lib/team";

const title = "About Nautilo Studio | Amazon Marketing for US Sellers";
const description =
  "Nautilo Studio is four master's students at TBS Education in Barcelona, building the marketing team that US Amazon sellers don't have. Meet the team.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: `${SITE_URL}/about` },
  openGraph: { title, description, url: `${SITE_URL}/about`, siteName: "Nautilo Studio", type: "website" },
};

const facts = ["4 founders", "4 services", "Based in Barcelona", "Built for US Amazon sellers"];

const story = [
  {
    heading: "What we saw",
    text: "US sellers with a good product on Amazon and no one to market it. Agencies do the work for them and keep the know-how. Tools hand them data and leave them alone.",
  },
  {
    heading: "Our idea",
    text: "Bring data, AI and hands-on work together, and do it with the seller, not for them. We start with one listing, show what changes and grow from there.",
  },
  {
    heading: "Why a nautilus",
    text: "A nautilus grows one chamber at a time along the golden spiral. We help stores grow the same way: one listing, one keyword, one report at a time.",
  },
];

const reviewSteps = [
  "You send us a link to one Amazon listing.",
  "We review its title, bullets, A+ content and images.",
  "We email you what we’d improve first.",
];

// Who's who, for search engines and AI answer engines.
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Nautilo Studio",
  url: SITE_URL,
  description,
  member: team.map((member) => ({
    "@type": "Person",
    name: member.name,
    jobTitle: member.role,
    sameAs: [member.linkedin],
  })),
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}
      />
      <SiteHeader />

      <main id="main" className="flex-1 overflow-x-clip">
        {/* Intro */}
        <section className="mx-auto max-w-7xl px-4 pt-32 sm:px-6 md:pt-40">
          <div className="grid items-center gap-10 md:grid-cols-[minmax(0,8fr)_minmax(0,4fr)]">
            <div>
              <p
                className="rise font-display text-sm font-semibold uppercase tracking-[0.14em] text-royal"
                style={{ "--i": 0 } as React.CSSProperties}
              >
                About us
              </p>
              <h1
                className="rise mt-4 font-display text-[clamp(2.4rem,5.6vw,5rem)] font-bold leading-[1.03] tracking-[-0.04em]"
                style={{ "--i": 1 } as React.CSSProperties}
              >
                Four master’s students. One marketing team for your Amazon store.
              </h1>
              <p
                className="rise mt-6 max-w-2xl text-lg leading-relaxed text-slate sm:text-xl"
                style={{ "--i": 2 } as React.CSSProperties}
              >
                We met at TBS Education in Barcelona, where we are studying for our master’s
                degrees. Nautilo Studio is what we built together: the marketing team that US
                Amazon sellers don’t have.
              </p>
              <ul
                className="rise m-0 mt-8 flex list-none flex-wrap gap-2 p-0"
                style={{ "--i": 3 } as React.CSSProperties}
              >
                {facts.map((fact) => (
                  <li
                    key={fact}
                    className="rounded-full bg-white px-4 py-2 font-display text-sm font-semibold ring-1 ring-sand"
                  >
                    {fact}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rise hidden md:block" style={{ "--i": 2 } as React.CSSProperties}>
              <Nautilus className="mx-auto w-full max-w-xs rotate-12" />
            </div>
          </div>
        </section>

        {/* Story */}
        <section aria-labelledby="story" className="mx-auto mt-20 max-w-7xl px-4 sm:px-6 md:mt-28">
          <h2 id="story" className="sr-only">
            Our story
          </h2>
          <ol className="m-0 grid list-none gap-5 p-0 md:grid-cols-3">
            {story.map((item, index) => (
              <li key={item.heading} className="reveal rounded-[2rem] bg-white p-8">
                <p className="font-display text-sm font-semibold text-royal">0{index + 1}</p>
                <h3 className="mt-3 font-display text-2xl font-semibold tracking-[-0.01em]">
                  {item.heading}
                </h3>
                <p className="mt-3 text-lg leading-relaxed text-slate">{item.text}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* Team */}
        <section
          id="team"
          aria-labelledby="team-heading"
          className="mx-auto mt-24 max-w-7xl scroll-mt-24 px-4 sm:px-6 md:mt-36"
        >
          <div className="reveal max-w-3xl">
            <h2
              id="team-heading"
              className="font-display text-[clamp(2rem,4.4vw,4rem)] font-bold leading-[1.05] tracking-[-0.03em]"
            >
              Meet the team.
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate">
              We all work on almost everything, but each of us leads one service, so you always know
              who to talk to.
            </p>
          </div>
          <div className="mt-10">
            <TeamCarousel />
          </div>
        </section>

        {/* Free listing review */}
        <section id="review" className="on-dark mx-auto mt-28 max-w-7xl scroll-mt-24 px-4 sm:px-6 md:mt-36">
          <div className="grid gap-12 rounded-[2rem] bg-graphite px-8 py-14 text-offwhite md:grid-cols-2 md:gap-16 md:px-16 md:py-24">
            <div>
              <h2 className="font-display text-[clamp(2rem,4.4vw,4rem)] font-bold leading-[1.05] tracking-[-0.03em]">
                Start with one listing.
              </h2>
              <p className="mt-5 max-w-md text-lg leading-relaxed text-offwhite/80">
                Send it to us and the four of us will tell you, for free, what to fix first.
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
