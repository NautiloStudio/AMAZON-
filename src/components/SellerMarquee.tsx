import {
  Baby,
  Barbell,
  Coffee,
  CookingPot,
  Heartbeat,
  House,
  PawPrint,
  Plant,
  PuzzlePiece,
  Sparkle,
  Tent,
  TShirt,
} from "@phosphor-icons/react/dist/ssr";

// The kinds of US Amazon sellers we're built for. Categories, not client or partner logos.
const categories = [
  { label: "Kitchen", Icon: CookingPot },
  { label: "Home", Icon: House },
  { label: "Outdoor", Icon: Tent },
  { label: "Beauty", Icon: Sparkle },
  { label: "Pet", Icon: PawPrint },
  { label: "Baby", Icon: Baby },
  { label: "Health and wellness", Icon: Heartbeat },
  { label: "Sports", Icon: Barbell },
  { label: "Garden", Icon: Plant },
  { label: "Toys", Icon: PuzzlePiece },
  { label: "Coffee and tea", Icon: Coffee },
  { label: "Apparel", Icon: TShirt },
];

function Row({ hidden = false }: { hidden?: boolean }) {
  return (
    <ul className="m-0 flex shrink-0 list-none items-center gap-3 p-0 pr-3" aria-hidden={hidden || undefined}>
      {categories.map(({ label, Icon }) => (
        <li
          key={label}
          className="flex items-center gap-2.5 whitespace-nowrap rounded-full bg-white px-5 py-3 font-display font-semibold text-graphite ring-1 ring-sand"
        >
          <Icon size={20} weight="bold" className="text-royal" aria-hidden />
          {label}
        </li>
      ))}
    </ul>
  );
}

export default function SellerMarquee() {
  return (
    <section aria-labelledby="built-for" className="mt-20 md:mt-28">
      <p
        id="built-for"
        className="px-4 text-center font-display text-sm font-semibold uppercase tracking-[0.14em] text-slate"
      >
        Built for founder-led US sellers in
      </p>
      <div className="marquee mt-6 flex overflow-hidden">
        <div className="marquee-track flex shrink-0">
          <Row />
          <Row hidden />
        </div>
      </div>
      {/* Placeholder until we have partners: replace with their logos. */}
      <div className="mx-auto mt-6 max-w-3xl px-4 sm:px-6">
        <p className="rounded-full border-2 border-dashed border-sand px-6 py-3 text-center text-sm text-slate">
          Space for partner and tool logos, to fill in once we have them.
        </p>
      </div>
    </section>
  );
}
