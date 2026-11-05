import Image from "next/image";
import Link from "next/link";
import TalkButton from "@/components/TalkButton";

// The same top bar on every page. On the homepage the links jump within the page;
// elsewhere they lead back to the matching homepage section.
export default function SiteHeader({ onHome = false }: { onHome?: boolean }) {
  const base = onHome ? "" : "/";
  const link = "hidden py-3 transition-colors hover:text-cyan sm:inline";

  return (
    <header className="on-dark fixed inset-x-0 top-4 z-20 flex justify-center px-4">
      <nav
        aria-label="Main"
        className="flex w-full max-w-3xl items-center justify-between rounded-full bg-graphite/95 py-2 pl-5 pr-2 shadow-[0_12px_40px_-12px_rgba(22,25,31,0.5)] ring-1 ring-white/10 backdrop-blur-md"
      >
        <Link
          href={onHome ? "#main" : "/"}
          aria-label={onHome ? "Nautilo Studio, back to top" : "Nautilo Studio homepage"}
        >
          <Image
            src="/nautilo-wordmark-light.png"
            alt="Nautilo Studio"
            width={668}
            height={270}
            priority
            className="h-9 w-auto"
          />
        </Link>
        <div className="flex items-center gap-6 text-sm text-offwhite/85">
          <Link href={`${base}#services`} className={link}>
            Services
          </Link>
          <Link href={`${base}#how`} className={link}>
            How we work
          </Link>
          {/* Every page that uses this header has its own free review form with id="review". */}
          <TalkButton href="#review" label="Free listing review" tone="cyan" size="sm" />
        </div>
      </nav>
    </header>
  );
}
