import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";

type Props = {
  tone?: "royal" | "cyan";
  size?: "md" | "sm";
};

const tones = {
  royal: "bg-royal text-offwhite",
  cyan: "bg-cyan text-graphite",
};

const circles = {
  royal: "bg-white/15",
  cyan: "bg-graphite/10",
};

export default function TalkButton({ tone = "royal", size = "md" }: Props) {
  const sizing =
    size === "md"
      ? "gap-3 py-2 pl-6 pr-2 text-base"
      : "gap-2 py-2 pl-4 pr-2 text-sm";

  return (
    <a
      href="#contact"
      className={`group inline-flex items-center rounded-full font-display font-semibold whitespace-nowrap transition-transform duration-150 ease-out active:scale-[0.97] ${tones[tone]} ${sizing}`}
    >
      Talk to us
      <span
        className={`flex items-center justify-center rounded-full transition-transform duration-300 ease-(--ease-out-strong) group-hover:translate-x-0.5 group-hover:-translate-y-px ${circles[tone]} ${
          size === "md" ? "h-9 w-9" : "h-7 w-7"
        }`}
      >
        <ArrowUpRight size={size === "md" ? 18 : 14} weight="bold" aria-hidden />
      </span>
    </a>
  );
}
