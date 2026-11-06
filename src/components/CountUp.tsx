"use client";

import { useEffect, useRef, useState } from "react";

type Props = { to: number; from?: number; duration?: number; prefix?: string; suffix?: string };

const format = (value: number) => Math.round(value).toLocaleString("en-US");

// Counts up to its value the first time it scrolls into view. The final value reserves the
// space from the start, so nothing shifts while the digits change.
export default function CountUp({ to, from = 0, duration = 1400, prefix = "", suffix = "" }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(from);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let frame = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        if (reduced) {
          setValue(to);
          return;
        }
        const start = performance.now();
        const tick = (now: number) => {
          const t = Math.min(1, (now - start) / duration);
          setValue(from + (to - from) * (1 - Math.pow(1 - t, 3)));
          if (t < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.6 },
    );
    observer.observe(node);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [to, from, duration]);

  const final = `${prefix}${format(to)}${suffix}`;
  return (
    <span ref={ref} className="relative inline-grid tabular-nums">
      <span className="invisible col-start-1 row-start-1" aria-hidden>
        {final}
      </span>
      <span className="col-start-1 row-start-1" aria-hidden>
        {prefix}
        {format(value)}
        {suffix}
      </span>
      <span className="sr-only">{final}</span>
    </span>
  );
}
