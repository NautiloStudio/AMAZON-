"use client";

import { useEffect, useRef, useState } from "react";
import NautilusLoader from "./NautilusLoader";

// How far the finger has to travel, after resistance, before letting go reloads the page.
const THRESHOLD = 72;
const MAX_PULL = 120;
const RESISTANCE = 0.45;

// Touch screens only: pulling down at the top of the page slides the page content down,
// fills the nautilus chamber by chamber and reloads once it is full. The top bar never moves.
export default function PullToRefresh() {
  const [pull, setPull] = useState(0);
  const [refreshing, setRefreshing] = useState(false);
  const start = useRef<number | null>(null);
  const pullRef = useRef(0);

  useEffect(() => {
    const content = () => document.querySelectorAll<HTMLElement>("#main, body > footer, main + footer");

    const move = (value: number, animate: boolean) => {
      pullRef.current = value;
      setPull(value);
      content().forEach((el) => {
        el.style.transition = animate ? "transform 300ms cubic-bezier(0.23, 1, 0.32, 1)" : "none";
        el.style.transform = value ? `translateY(${value}px)` : "";
      });
    };

    const onStart = (event: TouchEvent) => {
      if (window.scrollY > 0 || event.touches.length !== 1) return;
      start.current = event.touches[0].clientY;
    };

    const onMove = (event: TouchEvent) => {
      if (start.current === null) return;
      const distance = event.touches[0].clientY - start.current;
      if (distance <= 0 || window.scrollY > 0) {
        if (pullRef.current) move(0, false);
        return;
      }
      move(Math.min(MAX_PULL, distance * RESISTANCE), false);
    };

    const onEnd = () => {
      if (start.current === null) return;
      start.current = null;
      if (pullRef.current >= THRESHOLD) {
        setRefreshing(true);
        move(THRESHOLD, true);
        window.setTimeout(() => window.location.reload(), 600);
      } else {
        move(0, true);
      }
    };

    window.addEventListener("touchstart", onStart, { passive: true });
    window.addEventListener("touchmove", onMove, { passive: true });
    window.addEventListener("touchend", onEnd);
    window.addEventListener("touchcancel", onEnd);
    return () => {
      window.removeEventListener("touchstart", onStart);
      window.removeEventListener("touchmove", onMove);
      window.removeEventListener("touchend", onEnd);
      window.removeEventListener("touchcancel", onEnd);
    };
  }, []);

  if (!pull && !refreshing) return null;

  return (
    <div
      className="pointer-events-none fixed inset-x-0 top-24 z-10 flex justify-center"
      style={{ opacity: Math.min(1, pull / 40) }}
      role="status"
      aria-live="polite"
    >
      <NautilusLoader
        spinning={refreshing}
        progress={pull / THRESHOLD}
        label={refreshing ? "Reloading the page" : undefined}
        className="h-12 w-12"
      />
    </div>
  );
}
