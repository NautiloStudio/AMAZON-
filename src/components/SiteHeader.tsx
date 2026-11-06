"use client";

import { useEffect, useId, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, CaretDown, List, X } from "@phosphor-icons/react/dist/ssr";
import TalkButton from "@/components/TalkButton";
import { landingPages } from "@/lib/landing-pages";

type MenuItem = { href: string; label: string; current?: boolean };

// The top bar on every page.
// - Guide pages (pass `guide`): Home, the four service guides and the free review button.
// - Every other page: Services (a list of the guides), How we work and the free review button.
export default function SiteHeader({ onHome = false, guide }: { onHome?: boolean; guide?: string }) {
  const [open, setOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const panelId = useId();
  const pathname = usePathname();

  // Close the list on Escape or on a click outside the bar.
  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => event.key === "Escape" && setOpen(false);
    const onClick = (event: MouseEvent) => {
      if (!navRef.current?.contains(event.target as Node)) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, [open]);

  const guides: MenuItem[] = landingPages.map((page) => ({
    href: `/${page.slug}`,
    label: page.menu,
    current: page.slug === guide,
  }));
  const base = onHome ? "" : "/";
  const onGuide = Boolean(guide);

  // What the dropdown lists: on guide pages it is the small-screen version of the menu.
  const menuItems: MenuItem[] = onGuide
    ? [{ href: "/", label: "Home" }, ...guides]
    : [...guides, { href: `${base}#how`, label: "How we work" }];

  const textLink = "py-3 transition-colors hover:text-cyan";
  const toggle = (
    <button
      type="button"
      aria-expanded={open}
      aria-controls={panelId}
      onClick={() => setOpen((value) => !value)}
      className={`flex items-center gap-1.5 py-1 transition-colors sm:py-3 hover:text-cyan ${open ? "text-cyan" : ""}`}
    >
      <span className="hidden sm:inline">
        {onGuide ? "Menu" : "Services"}
      </span>
      <CaretDown
        size={14}
        weight="bold"
        aria-hidden
        className={`hidden transition-transform duration-200 sm:block ${open ? "rotate-180" : ""}`}
      />
      <span
        className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 sm:hidden"
        aria-hidden
      >
        {open ? <X size={18} weight="bold" /> : <List size={18} weight="bold" />}
      </span>
      <span className="sr-only sm:hidden">{open ? "Close menu" : "Open menu"}</span>
    </button>
  );

  return (
    <header className="on-dark fixed inset-x-0 top-4 z-20 flex justify-center px-4">
      <nav
        ref={navRef}
        aria-label="Main"
        className={`relative flex w-full items-center justify-between rounded-full bg-graphite/95 py-2 pl-4 pr-2 sm:pl-5 shadow-[0_12px_40px_-12px_rgba(22,25,31,0.5)] ring-1 ring-white/10 backdrop-blur-md ${
          onGuide ? "max-w-5xl" : "max-w-3xl"
        }`}
      >
        {/* Always leads to the top of the homepage, even when you are already on it. */}
        <Link
          href="/"
          aria-label={onHome ? "Nautilo Studio, back to top" : "Nautilo Studio homepage"}
          className="relative z-10 shrink-0"
          onClick={(event) => {
            setOpen(false);
            if (pathname !== "/") return;
            event.preventDefault();
            window.history.replaceState(null, "", "/");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <Image
            src="/nautilo-wordmark-light.png"
            alt="Nautilo Studio"
            width={668}
            height={270}
            priority
            className="h-8 w-auto sm:h-9"
          />
        </Link>

        <div className="flex items-center gap-3 text-sm text-offwhite/85 sm:gap-6">
          {onGuide ? (
            <>
              {/* Wide screens: every guide in the bar */}
              <Link href="/" className={`hidden lg:inline ${textLink}`}>
                Home
              </Link>
              {guides.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={item.current ? "page" : undefined}
                  className={`hidden lg:inline ${textLink} ${
                    item.current ? "text-cyan underline decoration-2 underline-offset-8" : ""
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              {/* Narrower screens: the same links in a list */}
              <div className="lg:hidden">{toggle}</div>
            </>
          ) : (
            <>
              {toggle}
              <Link href={`${base}#how`} className={`hidden sm:inline ${textLink}`}>
                How we work
              </Link>
            </>
          )}
          {/* Every page that uses this bar has its own free review form with id="review". */}
          <TalkButton href="#review" label="Free listing review" tone="cyan" size="sm" />
        </div>

        {open && (
          <div
            id={panelId}
            className={`absolute inset-x-0 top-full mt-3 rounded-[1.75rem] bg-graphite p-2 shadow-[0_24px_60px_-20px_rgba(22,25,31,0.6)] ring-1 ring-white/10 sm:left-auto sm:w-80 ${
              onGuide ? "lg:hidden" : ""
            }`}
          >
            {!onGuide && (
              <p className="px-4 pb-1 pt-3 font-display text-xs font-semibold uppercase tracking-[0.14em] text-offwhite/60">
                Our service guides
              </p>
            )}
            <ul className="m-0 list-none p-0">
              {menuItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    aria-current={item.current ? "page" : undefined}
                    className={`flex items-center justify-between gap-4 rounded-2xl px-4 py-3 font-display font-semibold transition-colors hover:bg-white/10 ${
                      item.current ? "text-cyan" : "text-offwhite"
                    } ${item.label === "How we work" ? "sm:hidden" : ""}`}
                  >
                    {item.label}
                    <ArrowUpRight size={16} weight="bold" aria-hidden className="text-cyan" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
