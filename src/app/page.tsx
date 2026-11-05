import Image from "next/image";
import Link from "next/link";
import CaseStudy from "@/components/CaseStudy";
import ContactForm from "@/components/ContactForm";
import ListingCompare from "@/components/ListingCompare";
import Nautilus from "@/components/Nautilus";
import TalkButton from "@/components/TalkButton";

const services = [
  {
    title: "Ads & SEO",
    problem: "“Shoppers can’t find my product.”",
    text: "We improve your keyword ranking and run Sponsored Products campaigns, so more shoppers reach your listings.",
    image: "/img/service-ads.jpg",
    alt: "Magnifying glass leaning against a small parcel",
    tile: "bg-cyan",
    span: "md:col-span-7",
  },
  {
    title: "Listing optimisation",
    problem: "“People look, but they don’t buy.”",
    text: "We rework your titles, bullets, A+ content and images, so more visitors choose to buy.",
    image: "/img/service-listing.jpg",
    alt: "Bamboo cutting board with a blank paper tag",
    tile: "bg-apricot",
    span: "md:col-span-5",
  },
  {
    title: "Data analysis",
    problem: "“I don’t know which numbers matter.”",
    text: "We turn your sales, traffic and conversion data into clear next steps.",
    image: "/img/service-data.jpg",
    alt: "Cardboard parcels stacked in rising columns like a bar chart",
    tile: "bg-royal",
    span: "md:col-span-5",
  },
  {
    title: "AI automation",
    problem: "“Repetitive work eats my week.”",
    text: "We set up AI agents to handle repetitive listing and reporting tasks.",
    image: "/img/service-ai.jpg",
    alt: "White robotic arm placing a parcel at the end of a neat row",
    tile: "bg-graphite",
    span: "md:col-span-7",
  },
];

const steps = [
  {
    word: "Analyse.",
    text: "We read your sales, traffic and conversion data and turn it into clear next steps.",
  },
  {
    word: "Optimise.",
    text: "We work on titles, bullets, A+ content and images, then on keywords and Sponsored Products campaigns.",
  },
  {
    word: "Automate.",
    text: "AI agents take over the repetitive listing and reporting tasks.",
  },
];

const reviewSteps = [
  "You send us a link to one Amazon listing.",
  "We review its title, bullets, A+ content and images.",
  "We email you what we’d improve first.",
];

const statement =
  "Running an Amazon store takes enough time. Improving every listing shouldn’t be on you alone.";

export default function Home() {
  return (
    <>
      <header className="on-dark fixed inset-x-0 top-4 z-20 flex justify-center px-4">
        <nav
          aria-label="Main"
          className="flex w-full max-w-3xl items-center justify-between rounded-full bg-graphite/95 py-2 pl-5 pr-2 shadow-[0_12px_40px_-12px_rgba(22,25,31,0.5)] ring-1 ring-white/10 backdrop-blur-md"
        >
          <a href="#main" aria-label="Nautilo Studio, back to top">
            <Image
              src="/nautilo-wordmark-light.png"
              alt="Nautilo Studio"
              width={668}
              height={270}
              priority
              className="h-9 w-auto"
            />
          </a>
          <div className="flex items-center gap-6 text-sm text-offwhite/85">
            <a href="#services" className="hidden py-3 transition-colors hover:text-cyan sm:inline">
              Services
            </a>
            <a href="#how" className="hidden py-3 transition-colors hover:text-cyan sm:inline">
              How we work
            </a>
            <TalkButton href="#review" label="Free listing review" tone="cyan" size="sm" />
          </div>
        </nav>
      </header>

      <main id="main" className="flex-1 overflow-x-clip">
        {/* Hero */}
        <section className="mx-auto max-w-7xl px-4 pt-32 text-center sm:px-6 md:pt-40">
          <h1
            className="rise mx-auto max-w-6xl font-display text-[clamp(2.6rem,6.4vw,6rem)] font-bold leading-[1.02] tracking-[-0.04em]"
            style={{ "--i": 0 } as React.CSSProperties}
          >
            The marketing team your Amazon store doesn’t have.
          </h1>
          <p
            className="rise mx-auto mt-7 max-w-xl text-lg leading-relaxed text-slate sm:text-xl"
            style={{ "--i": 1 } as React.CSSProperties}
          >
            Data and AI to help US Amazon sellers grow and convert more.
          </p>
          <div
            className="rise mt-9 flex flex-wrap items-center justify-center gap-x-7 gap-y-4"
            style={{ "--i": 2 } as React.CSSProperties}
          >
            <TalkButton href="#review" label="Get a free listing review" />
            <a
              href="#services"
              className="font-display font-semibold text-graphite underline decoration-sand decoration-2 underline-offset-8 py-3 transition-colors hover:decoration-royal"
            >
              See our services
            </a>
          </div>
          <p
            className="rise mt-5 text-slate"
            style={{ "--i": 3 } as React.CSSProperties}
          >
            Not sure what you need?{" "}
            <a
              href="#contact"
              className="font-medium text-graphite underline underline-offset-4 transition-colors hover:text-royal"
            >
              Talk to us
            </a>
            .
          </p>

          <div
            className="rise relative mx-auto mt-16 max-w-5xl text-left md:mt-20"
            style={{ "--i": 3 } as React.CSSProperties}
          >
            <Nautilus className="pointer-events-none absolute -right-2 -top-12 z-10 w-24 rotate-12 md:-right-20 md:-top-20 md:w-44" />
            <ListingCompare />
          </div>
        </section>

        {/* Statement */}
        <section className="mx-auto max-w-6xl px-4 py-28 text-center sm:px-6 md:py-44">
          <p className="font-display text-[clamp(2.2rem,5.6vw,5.25rem)] font-bold leading-[1.06] tracking-[-0.035em]">
            {statement.split(" ").map((word, i) => (
              <span key={i} className="ink-word">
                {word}{" "}
              </span>
            ))}
          </p>
          <p className="reveal mx-auto mt-10 max-w-xl text-lg leading-relaxed text-slate sm:text-xl">
            You already sell a good product on Amazon. Agencies do it for you and tools leave you on
            your own, so we work on it with you.
          </p>
        </section>

        {/* Services */}
        <section id="services" className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="reveal max-w-3xl font-display text-[clamp(2rem,4.4vw,4rem)] font-bold leading-[1.05] tracking-[-0.03em]">
            Which of these sounds like your store?
          </h2>
          <div className="mt-12 grid gap-x-5 gap-y-10 md:grid-cols-12 md:gap-y-14">
            {services.map((service) => (
              <article key={service.title} className={`reveal ${service.span}`}>
                <div
                  className={`relative aspect-[4/3] overflow-hidden rounded-[2rem] md:aspect-auto md:h-[28rem] ${service.tile}`}
                >
                  <Image
                    src={service.image}
                    alt={service.alt}
                    fill
                    sizes="(min-width: 768px) 60vw, 100vw"
                    className="object-cover transition-transform duration-700 ease-(--ease-out-strong) [@media(hover:hover)]:hover:scale-[1.03]"
                  />
                </div>
                <h3 className="mt-5 font-display text-2xl font-semibold tracking-[-0.01em]">
                  {service.problem}
                </h3>
                <p className="mt-2 max-w-md text-lg leading-relaxed text-slate">
                  <strong className="font-semibold text-graphite">{service.title}.</strong>{" "}
                  {service.text}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* How we work */}
        <section id="how" className="steps-timeline mx-auto mt-28 max-w-7xl px-4 sm:px-6 md:mt-44">
          <div className="grid items-start gap-10 md:grid-cols-2 md:gap-16">
            <div className="md:sticky md:top-28">
              <h2 className="font-display text-[clamp(2rem,4.4vw,4rem)] font-bold leading-[1.05] tracking-[-0.03em]">
                Grow chamber by chamber.
              </h2>
              <p className="mt-5 max-w-md text-lg leading-relaxed text-slate">
                A nautilus adds one chamber at a time along the golden spiral. Your store can grow
                the same way.
              </p>
              <Nautilus
                fillOnScroll
                className="mx-auto mt-10 hidden md:block md:w-[min(24rem,48vh)]"
              />
            </div>
            <div>
              {/* Below md the column layout has no sticky side, so a small shell follows the steps instead. */}
              <div className="pointer-events-none sticky top-24 z-10 flex h-0 justify-end pr-4 md:hidden">
                <Nautilus fillOnScroll className="h-24 w-24" />
              </div>
              <ol className="m-0 list-none space-y-5 p-0 md:pt-[26vh]">
              {steps.map((step) => (
                <li
                  key={step.word}
                  className="reveal flex min-h-[46vh] flex-col justify-end rounded-[2rem] bg-white p-8 md:p-10"
                >
                  <p className="font-display text-[clamp(2.4rem,5vw,4.5rem)] font-bold tracking-[-0.03em] text-royal">
                    {step.word}
                  </p>
                  <p className="mt-3 max-w-md text-lg leading-relaxed text-slate">{step.text}</p>
                </li>
              ))}
              </ol>
            </div>
          </div>
        </section>

        {/* Case study */}
        <CaseStudy />

        {/* Free listing review */}
        <section id="review" className="on-dark mx-auto mt-28 max-w-7xl md:mt-44 px-4 sm:px-6">
          <div className="grid gap-12 rounded-[2rem] bg-graphite px-8 py-14 text-offwhite md:grid-cols-2 md:gap-16 md:px-16 md:py-24">
            <div>
              <h2 className="font-display text-[clamp(2rem,4.4vw,4rem)] font-bold leading-[1.05] tracking-[-0.03em]">
                Get a free listing review.
              </h2>
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

        {/* Contact */}
        <section id="contact" className="on-dark mx-auto mt-5 max-w-7xl px-4 sm:px-6">
          <div className="grid gap-12 rounded-[2rem] bg-royal px-8 py-14 text-offwhite md:grid-cols-2 md:gap-16 md:px-16 md:py-24">
            <div>
              <h2 className="font-display text-[clamp(2rem,4.4vw,4rem)] font-bold leading-[1.05] tracking-[-0.03em]">
                Prefer to talk? Tell us about your store.
              </h2>
              <p className="mt-5 max-w-md text-lg leading-relaxed text-offwhite/80">
                Say what you sell and what you want to improve. We reply by email.
              </p>
              <p className="mt-8 text-offwhite/80">
                Prefer your own inbox? Write to{" "}
                <a
                  href="mailto:nautilostd@gmail.com"
                  className="text-cyan underline underline-offset-4"
                >
                  nautilostd@gmail.com
                </a>
              </p>
            </div>
            <ContactForm />
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
