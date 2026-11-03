import Image from "next/image";
import Link from "next/link";
import { Clock, MagnifyingGlass, ShoppingCart } from "@phosphor-icons/react/dist/ssr";
import ContactForm from "@/components/ContactForm";
import ListingCompare from "@/components/ListingCompare";
import TalkButton from "@/components/TalkButton";

const challenges = [
  { icon: ShoppingCart, text: "Shoppers visit your listings but leave without buying." },
  { icon: MagnifyingGlass, text: "You are unsure which improvements to prioritise." },
  { icon: Clock, text: "Updating listings and reports takes time away from running your business." },
];

const services = [
  {
    outcome: "Understand what is holding sales back",
    service: "Data analysis",
    problem: "You can see your sales and traffic, but not which listing or step needs attention first.",
    deliverables: [
      "A review of your sales, traffic and conversion data",
      "A plain summary of what we found",
      "A prioritised list of next steps",
    ],
    image: "/img/service-data.jpg",
    alt: "Cardboard parcels stacked in rising columns like a bar chart",
    tile: "bg-royal",
  },
  {
    outcome: "Help shoppers choose your product",
    service: "Listing optimisation",
    problem: "Shoppers reach your listing but may not find the information they need to decide.",
    deliverables: [
      "Rewritten titles and bullet points",
      "Proposals for A+ content",
      "Recommendations for your product images",
    ],
    image: "/img/service-listing.jpg",
    alt: "Bamboo cutting board with a blank paper tag",
    tile: "bg-apricot",
  },
  {
    outcome: "Reach more relevant shoppers",
    service: "Ads & SEO",
    problem: "Your products may be missing from the searches that matter, or your ads may reach the wrong people.",
    deliverables: [
      "Keyword research for your products",
      "Keyword recommendations for your listings",
      "A review of your Sponsored Products campaigns",
    ],
    image: "/img/service-ads.jpg",
    alt: "Magnifying glass leaning against a small parcel",
    tile: "bg-cyan",
  },
  {
    outcome: "Spend less time on repetitive work",
    service: "AI automation",
    problem: "Routine listing updates and reports take hours you could spend on your business.",
    deliverables: [
      "A review of your repetitive listing and reporting tasks",
      "AI agents set up for the tasks we agree on",
      "Human review, with your approval before listing changes go live",
    ],
    image: "/img/service-ai.jpg",
    alt: "White robotic arm placing a parcel at the end of a neat row",
    tile: "bg-graphite",
  },
];

const steps = [
  {
    title: "Discuss your store and goals",
    text: "You tell us what you sell, what is working and what you want to improve.",
  },
  {
    title: "Agree on priorities, scope and required information",
    text: "We agree what to work on first and what we need from you.",
  },
  {
    title: "Review and approve proposed changes",
    text: "You see what we propose, and you decide what goes ahead.",
  },
  {
    title: "Track progress against agreed measures",
    text: "We check the measures we agreed at the start and review what to do next.",
  },
];

const team = ["Carlo Ambrosini", "Maria Giraldo", "Veronika Matkovska", "Filippo Verace"];

const h2 = "font-display text-[clamp(1.75rem,3.2vw,2.75rem)] font-bold leading-[1.12] tracking-[-0.025em]";

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
            <a href="#about" className="hidden py-3 transition-colors hover:text-cyan md:inline">
              Who we are
            </a>
            <TalkButton tone="cyan" size="sm" />
          </div>
        </nav>
      </header>

      <main id="main" className="flex-1 overflow-x-clip">
        {/* Hero */}
        <section className="mx-auto grid max-w-6xl items-center gap-8 px-4 pt-28 sm:px-6 md:grid-cols-[1.5fr_1fr] md:pt-36">
          <div>
            <h1
              className="rise font-display text-[clamp(2.4rem,5vw,4.25rem)] font-bold leading-[1.05] tracking-[-0.035em]"
              style={{ "--i": 0 } as React.CSSProperties}
            >
              More Amazon sales from the traffic you already have.
            </h1>
            <p
              className="rise mt-6 max-w-xl text-lg leading-relaxed text-slate sm:text-xl"
              style={{ "--i": 1 } as React.CSSProperties}
            >
              We help founder-led Amazon sellers understand their performance, improve their product
              listings and reduce repetitive work.
            </p>
            <div
              className="rise mt-8 flex flex-wrap items-center gap-x-7 gap-y-3"
              style={{ "--i": 2 } as React.CSSProperties}
            >
              <TalkButton />
              <a
                href="#services"
                className="py-3 font-display font-semibold text-graphite underline decoration-sand decoration-2 underline-offset-8 transition-colors hover:decoration-royal"
              >
                Explore our services
              </a>
            </div>
            <p className="rise mt-5 max-w-xl text-slate" style={{ "--i": 3 } as React.CSSProperties}>
              Not sure which service you need? Just describe your challenge.
            </p>
            <p className="rise mt-2 max-w-xl text-sm text-slate" style={{ "--i": 3 } as React.CSSProperties}>
              Nautilo Studio is a student project at TBS Education Barcelona.{" "}
              <a href="#about" className="underline underline-offset-4 hover:text-royal">
                Who we are
              </a>
            </p>
          </div>
          <Image
            src="/img/nautilus.webp"
            alt=""
            width={1024}
            height={1024}
            priority
            sizes="(min-width: 768px) 340px, 160px"
            className="rise pointer-events-none mx-auto hidden w-full max-w-[20rem] md:block"
            style={{ "--i": 2 } as React.CSSProperties}
          />
        </section>

        {/* Challenges */}
        <section aria-labelledby="challenges-title" className="mx-auto mt-20 max-w-6xl px-4 sm:px-6 md:mt-28">
          <h2 id="challenges-title" className={`max-w-3xl ${h2}`}>
            Running your Amazon business takes enough time. Improving your listings shouldn&rsquo;t
            mean doing everything yourself.
          </h2>
          <ul className="m-0 mt-10 grid list-none gap-6 p-0 md:grid-cols-3 md:gap-10">
            {challenges.map(({ icon: Icon, text }) => (
              <li key={text} className="border-t-2 border-sand pt-5">
                <Icon size={28} weight="duotone" className="text-royal" aria-hidden />
                <p className="mt-3 text-lg leading-relaxed">{text}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* Services */}
        <section id="services" className="mx-auto mt-20 max-w-6xl px-4 sm:px-6 md:mt-28">
          <h2 className={`max-w-3xl ${h2}`}>What we can help you with</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {services.map((item) => (
              <article key={item.service} className="reveal overflow-hidden rounded-[1.75rem] bg-white">
                <div className={`relative h-44 ${item.tile}`}>
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-6 md:p-7">
                  <p className="text-sm font-semibold text-royal">{item.service}</p>
                  <h3 className="mt-1 font-display text-xl font-semibold leading-snug md:text-2xl">
                    {item.outcome}
                  </h3>
                  <p className="mt-3 leading-relaxed text-slate">{item.problem}</p>
                  <h4 className="mt-5 text-sm font-semibold">What you typically receive</h4>
                  <ul className="mt-2 list-disc space-y-1.5 pl-5 leading-relaxed text-slate">
                    {item.deliverables.map((deliverable) => (
                      <li key={deliverable}>{deliverable}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Listing example */}
        <section id="example" className="mx-auto mt-20 max-w-6xl px-4 sm:px-6 md:mt-28">
          <h2 className={`max-w-3xl ${h2}`}>What a listing improvement can look like</h2>
          <div className="mt-10">
            <ListingCompare />
          </div>
        </section>

        {/* How we work */}
        <section id="how" className="mx-auto mt-20 max-w-6xl px-4 sm:px-6 md:mt-28">
          <h2 className={`max-w-3xl ${h2}`}>How working together works</h2>
          <ol className="m-0 mt-10 grid list-none gap-8 p-0 md:grid-cols-2 md:gap-x-12">
            {steps.map((step, index) => (
              <li key={step.title} className="flex gap-4">
                <span
                  aria-hidden
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-royal font-display font-semibold text-offwhite"
                >
                  {index + 1}
                </span>
                <div>
                  <h3 className="font-display text-lg font-semibold leading-snug">{step.title}</h3>
                  <p className="mt-1.5 leading-relaxed text-slate">{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
          <div className="mt-10 flex items-center gap-4 rounded-[1.75rem] bg-apricot/40 p-6">
            <Image src="/img/nautilus.webp" alt="" width={1024} height={1024} sizes="56px" className="h-14 w-14 shrink-0" />
            <p className="leading-relaxed">
              Scope, timing and pricing are agreed before work begins. Like a nautilus, we grow
              chamber by chamber: one agreed priority, then the next.
            </p>
          </div>
        </section>

        {/* Who we are */}
        <section id="about" className="mx-auto mt-20 max-w-6xl px-4 sm:px-6 md:mt-28">
          <div className="grid gap-10 rounded-[1.75rem] bg-white p-7 md:grid-cols-2 md:p-12">
            <div>
              <h2 className={h2}>Who you would be working with</h2>
              <p className="mt-4 leading-relaxed text-slate">
                Nautilo Studio is a student project by four students at TBS Education Barcelona,
                created for the Digital Marketing Strategy course.
              </p>
              <ul className="m-0 mt-5 grid list-none gap-2 p-0 font-semibold sm:grid-cols-2">
                {team.map((name) => (
                  <li key={name}>{name}</li>
                ))}
              </ul>
            </div>
            <div className="space-y-4 leading-relaxed text-slate">
              <h3 className="font-display text-xl font-semibold text-graphite">
                Our first client: BRACAI
              </h3>
              <p>
                BRACAI is an AI tool for Amazon sellers. It is a separate product from Nautilo
                Studio: the services on this page, including AI automation, are our own.
              </p>
              <h3 className="pt-2 font-display text-xl font-semibold text-graphite">
                What being a student project means
              </h3>
              <p>
                Because this is a course project, we cannot promise that we can take on every
                request. Tell us what you need and we will tell you by email whether we can help.
              </p>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="on-dark mx-auto mt-5 max-w-6xl px-4 sm:px-6">
          <div className="grid gap-10 rounded-[1.75rem] bg-graphite px-7 py-12 text-offwhite md:grid-cols-2 md:gap-14 md:p-12">
            <div>
              <h2 className={h2}>Tell us about your store</h2>
              <p className="mt-4 max-w-md text-lg leading-relaxed text-offwhite/85">
                Share what you sell and what is getting in the way. You don&rsquo;t need to know which
                service you need.
              </p>
              <p className="mt-4 max-w-md text-lg leading-relaxed text-offwhite/85">
                After you send your message, we reply by email.
              </p>
              <p className="mt-6 text-offwhite/85">
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

      <footer className="mx-auto mt-10 flex w-full max-w-6xl flex-col gap-2 px-4 pb-10 text-sm text-slate sm:flex-row sm:items-center sm:justify-between sm:px-6">
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
