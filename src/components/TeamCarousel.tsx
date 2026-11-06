"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight, LinkedinLogo } from "@phosphor-icons/react/dist/ssr";
import NautilusLoader from "@/components/NautilusLoader";
import { team, type TeamMember } from "@/lib/team";

const CHARGE_MS = 1100;
const darkTiles = ["bg-royal", "bg-graphite"];

const initials = (name: string) =>
  name
    .split(" ")
    .map((part) => part[0])
    .join("");

// A photo, or the person's initials on their service colour until a photo is added.
function Portrait({ member, sizes, className = "" }: { member: TeamMember; sizes: string; className?: string }) {
  if (member.photo) {
    return (
      <Image src={member.photo} alt={member.name} fill sizes={sizes} className={`object-cover ${className}`} />
    );
  }
  const light = darkTiles.includes(member.tile);
  return (
    <span
      role="img"
      aria-label={member.name}
      className={`flex h-full w-full items-center justify-center font-display font-bold tracking-[-0.04em] ${
        light ? "text-offwhite" : "text-graphite"
      } ${className}`}
    >
      {initials(member.name)}
    </span>
  );
}

export default function TeamCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const slideRefs = useRef<(HTMLElement | null)[]>([]);
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);
  const [charge, setCharge] = useState(0);
  // The card the row has come to rest on: colour only charges once scrolling stops.
  const [settled, setSettled] = useState(0);
  const settleTimer = useRef<number | undefined>(undefined);
  const total = team.length;

  // Which card is in front, and how far through the team the row has scrolled.
  const onScroll = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const max = track.scrollWidth - track.clientWidth;
    const ratio = max > 0 ? track.scrollLeft / max : 0;
    setProgress(ratio);
    window.clearTimeout(settleTimer.current);
    if (ratio > 0.98) {
      setActive(total - 1);
      settleTimer.current = window.setTimeout(() => setSettled(total - 1), 140);
      return;
    }
    let nearest = 0;
    slideRefs.current.forEach((slide, index) => {
      const current = slideRefs.current[nearest];
      if (!slide || !current) return;
      if (Math.abs(slide.offsetLeft - track.scrollLeft) < Math.abs(current.offsetLeft - track.scrollLeft)) {
        nearest = index;
      }
    });
    setActive(nearest);
    settleTimer.current = window.setTimeout(() => setSettled(nearest), 140);
  }, [total]);

  // Each time a new person comes to the front, their photo charges with colour like the shell.
  useEffect(() => {
    const duration = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : CHARGE_MS;
    let frame = 0;
    let start: number | null = null;
    const tick = (now: number) => {
      start ??= now;
      const t = duration === 0 ? 1 : Math.min(1, (now - start) / duration);
      setCharge(1 - Math.pow(1 - t, 3));
      if (t < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [settled]);

  const goTo = (index: number) => {
    const track = trackRef.current;
    const slide = slideRefs.current[index];
    if (!track || !slide) return;
    const smooth = !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    track.scrollTo({ left: slide.offsetLeft, behavior: smooth ? "smooth" : "auto" });
  };

  // The big shell: a quarter lit on the first person, full on the last.
  const gauge = (progress * (total - 1) + 1) / total;

  return (
    <div aria-roledescription="carousel" aria-label="The Nautilo Studio team">
      {/* Everyone at a glance: pick a person to jump to their card */}
      <div className="flex flex-wrap items-end justify-between gap-6">
        <ul className="m-0 grid w-full list-none grid-cols-2 gap-3 p-0 sm:grid-cols-4 lg:w-auto lg:flex-1">
          {team.map((member, index) => (
            <li key={member.name}>
              <button
                type="button"
                onClick={() => goTo(index)}
                aria-current={index === active ? "true" : undefined}
                className={`flex w-full items-center gap-3 rounded-full bg-white py-2 pl-2 pr-4 text-left transition-shadow duration-200 ${
                  index === active ? "ring-2 ring-royal" : "ring-1 ring-sand hover:ring-royal/50"
                }`}
              >
                <span
                  className={`relative h-11 w-11 shrink-0 overflow-hidden rounded-full text-sm ${member.tile}`}
                >
                  <Portrait member={member} sizes="44px" />
                </span>
                <span className="min-w-0">
                  <span className="block truncate font-display text-sm font-semibold">
                    <span className="sm:hidden">{member.name.split(" ")[0]}</span>
                    <span className="hidden sm:inline">{member.name}</span>
                  </span>
                  <span className="block truncate text-xs text-slate">{member.role}</span>
                </span>
              </button>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <NautilusLoader progress={gauge} className="h-14 w-14" />
          <p className="m-0 w-20 font-display text-sm font-semibold text-slate" aria-live="polite">
            {active + 1} of {total}
          </p>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => goTo(Math.max(0, active - 1))}
              disabled={active === 0}
              aria-label="Previous person"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white ring-1 ring-sand transition-opacity hover:ring-royal disabled:opacity-40"
            >
              <ArrowLeft size={18} weight="bold" aria-hidden />
            </button>
            <button
              type="button"
              onClick={() => goTo(Math.min(total - 1, active + 1))}
              disabled={active === total - 1}
              aria-label="Next person"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-royal text-offwhite transition-opacity disabled:opacity-40"
            >
              <ArrowRight size={18} weight="bold" aria-hidden />
            </button>
          </div>
        </div>
      </div>

      {/* One card per person; swipe, scroll or use the arrows */}
      <div
        ref={trackRef}
        onScroll={onScroll}
        tabIndex={0}
        aria-label="Team members, scroll sideways"
        className="relative mt-8 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-2 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-royal [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {team.map((member, index) => {
          const isActive = index === active;
          const colour = index === settled ? charge : 0;
          return (
            <article
              key={member.name}
              ref={(node) => {
                slideRefs.current[index] = node;
              }}
              aria-roledescription="slide"
              aria-label={`${index + 1} of ${total}: ${member.name}`}
              className="grid w-[88%] shrink-0 snap-start items-center gap-6 rounded-[2rem] bg-white p-4 sm:w-[80%] sm:p-5 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] md:gap-10 lg:w-[74%]"
            >
              <div
                className={`relative aspect-square overflow-hidden rounded-[1.5rem] text-[clamp(4rem,10vw,7rem)] md:aspect-[4/5] ${member.tile}`}
                style={{
                  filter: `grayscale(${1 - colour})`,
                  opacity: 0.55 + colour * 0.45,
                  transition: index === settled ? undefined : "filter 400ms ease, opacity 400ms ease",
                }}
              >
                <Portrait member={member} sizes="(min-width: 768px) 30vw, 85vw" />
                <span className="absolute bottom-3 right-3 flex h-12 w-12 items-center justify-center rounded-full bg-offwhite/90 shadow-sm">
                  <NautilusLoader progress={colour} className="h-8 w-8" />
                </span>
              </div>

              <div className="pb-2 md:pb-0 md:pr-6">
                <p className="font-display text-sm font-semibold uppercase tracking-[0.14em] text-royal">
                  {member.role}
                </p>
                <h3 className="mt-2 font-display text-[clamp(1.75rem,3.2vw,2.75rem)] font-bold leading-[1.1] tracking-[-0.025em]">
                  {member.name}
                </h3>
                <p className="mt-4 text-lg leading-relaxed text-slate">{member.summary}</p>
                <ul className="m-0 mt-5 flex list-none flex-wrap gap-2 p-0">
                  {member.focus.map((item) => (
                    <li key={item} className="rounded-full bg-offwhite px-3 py-1.5 text-sm font-medium">
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
                  <Link
                    href={member.guide.href}
                    tabIndex={isActive ? undefined : -1}
                    className="group inline-flex items-center gap-2 font-display font-semibold text-royal"
                  >
                    {member.guide.label}
                    <ArrowUpRight
                      size={16}
                      weight="bold"
                      aria-hidden
                      className="transition-transform duration-300 group-hover:-translate-y-px group-hover:translate-x-0.5"
                    />
                  </Link>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    tabIndex={isActive ? undefined : -1}
                    className="inline-flex items-center gap-2 font-display font-semibold text-graphite underline decoration-sand decoration-2 underline-offset-8 transition-colors hover:decoration-royal"
                  >
                    <LinkedinLogo size={18} weight="fill" aria-hidden className="text-royal" />
                    LinkedIn
                  </a>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
