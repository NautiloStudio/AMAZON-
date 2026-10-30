import Image from "next/image";
import ContactForm from "@/components/ContactForm";

const services = [
  {
    title: "Data analysis",
    text: "Sales, traffic and conversion data turned into clear next steps.",
  },
  {
    title: "Listing optimisation",
    text: "Titles, bullets, A+ content and images that convert.",
  },
  {
    title: "Ads & SEO",
    text: "Keyword ranking and Sponsored Products campaigns.",
  },
  {
    title: "AI automation",
    text: "AI agents that handle repetitive listing and reporting tasks.",
  },
];

const steps = [
  { word: "Analyse.", text: "We read your sales, traffic and conversion data." },
  { word: "Optimise.", text: "We fix the listings and ads that hold you back." },
  { word: "Automate.", text: "AI agents take the repetitive work off your plate." },
];

function Eyebrow({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <p
      className={`font-display text-sm font-semibold uppercase tracking-[0.2em] ${
        dark ? "text-cyan" : "text-royal"
      }`}
    >
      {children}
    </p>
  );
}

export default function Home() {
  return (
    <>
      <header className="sticky top-0 z-20 border-b border-white/10 bg-graphite/90 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
          <a href="#top" aria-label="Nautilo Studio, home">
            <Image
              src="/nautilo-wordmark-light.png"
              alt="Nautilo Studio"
              width={668}
              height={270}
              priority
              className="h-10 w-auto"
            />
          </a>
          <div className="flex items-center gap-6 text-sm text-offwhite/80">
            <a href="#services" className="hidden hover:text-cyan sm:inline">
              Services
            </a>
            <a href="#why" className="hidden hover:text-cyan sm:inline">
              Why us
            </a>
            <a
              href="#contact"
              className="rounded-full bg-cyan px-4 py-2 font-display font-semibold text-graphite transition hover:bg-apricot"
            >
              Contact us
            </a>
          </div>
        </nav>
      </header>

      <main id="top" className="flex-1">
        {/* Hero */}
        <section className="bg-graphite text-offwhite">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 sm:px-6 md:grid-cols-[1.3fr_1fr] md:py-28">
            <div>
              <Eyebrow dark>Grow chamber by chamber.</Eyebrow>
              <h1 className="mt-5 font-display text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
                We help Amazon sellers turn more{" "}
                <span className="text-cyan">visitors into buyers</span>, using data and AI.
              </h1>
              <p className="mt-6 max-w-xl text-lg text-offwhite/70">
                For founder-led Amazon sellers with a good product and traffic, but no
                marketing or data team.
              </p>
              <div className="mt-9 flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="rounded-full bg-cyan px-7 py-3.5 font-display font-semibold text-graphite transition hover:bg-apricot"
                >
                  Talk to us
                </a>
                <a
                  href="#services"
                  className="rounded-full border border-offwhite/25 px-7 py-3.5 font-display font-semibold transition hover:border-cyan hover:text-cyan"
                >
                  See our services
                </a>
              </div>
            </div>
            <div className="relative mx-auto w-56 sm:w-72 md:w-full md:max-w-sm">
              <div className="absolute inset-0 rounded-full bg-royal/30 blur-3xl" aria-hidden />
              <Image
                src="/nautilo-shell.png"
                alt=""
                width={1200}
                height={1200}
                priority
                className="relative h-auto w-full"
              />
            </div>
          </div>
        </section>

        {/* Niche */}
        <section id="why" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-24">
          <Eyebrow>Who we work with</Eyebrow>
          <div className="mt-5 grid gap-10 md:grid-cols-2">
            <h2 className="font-display text-3xl font-bold leading-tight sm:text-4xl">
              Too small for the big agencies. Too busy to analyse every listing alone.
            </h2>
            <div className="space-y-5 text-lg text-slate">
              <p>
                You already sell on Amazon with a good product. Your listings, ads and daily
                tasks could convert better, and new customers can be reached through ads.
              </p>
              <p className="rounded-2xl border-l-4 border-royal bg-white px-5 py-4 font-display font-semibold text-graphite">
                Agencies do it for you. Tools leave sellers on their own. We sit in between.
              </p>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="bg-white">
          <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-24">
            <Eyebrow>Our services</Eyebrow>
            <h2 className="mt-5 max-w-2xl font-display text-3xl font-bold leading-tight sm:text-4xl">
              Four ways we help you convert more
            </h2>
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {services.map((service, i) => (
                <article
                  key={service.title}
                  className="rounded-2xl border border-sand bg-offwhite p-6 transition hover:-translate-y-1 hover:border-royal"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-royal font-display font-semibold text-offwhite">
                    {i + 1}
                  </span>
                  <h3 className="mt-5 font-display text-lg font-semibold">{service.title}</h3>
                  <p className="mt-2 text-slate">{service.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Approach */}
        <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-24">
          <Eyebrow>How we work</Eyebrow>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {steps.map((step) => (
              <div key={step.word}>
                <p className="font-display text-3xl font-bold text-royal">{step.word}</p>
                <p className="mt-3 text-lg text-slate">{step.text}</p>
              </div>
            ))}
          </div>
          <p className="mt-14 rounded-2xl bg-apricot/50 px-6 py-5 text-graphite">
            <span className="font-display font-semibold">First client:</span> BRACAI, an AI tool
            for Amazon sellers.
          </p>
        </section>

        {/* Contact */}
        <section id="contact" className="bg-graphite text-offwhite">
          <div className="mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 md:grid-cols-2 md:py-24">
            <div>
              <Eyebrow dark>Contact us</Eyebrow>
              <h2 className="mt-5 font-display text-3xl font-bold leading-tight sm:text-4xl">
                Ready to grow chamber by chamber?
              </h2>
              <p className="mt-5 text-lg text-offwhite/70">
                Tell us about your store. We will reply with the first steps to turn more of
                your visitors into buyers.
              </p>
              <p className="mt-8 text-offwhite/70">
                Or write to{" "}
                <a href="mailto:nautilostd@gmail.com" className="text-cyan underline-offset-4 hover:underline">
                  nautilostd@gmail.com
                </a>
              </p>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>

      <footer className="bg-graphite text-offwhite/60">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 border-t border-white/10 px-4 py-8 text-sm sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>© 2026 Nautilo Studio · Analyse. Optimise. Automate.</p>
          <p>A student project at TBS Education Barcelona</p>
        </div>
      </footer>
    </>
  );
}
