"use client";

import { useState } from "react";
import Image from "next/image";

const versions = {
  before: {
    label: "Before",
    image: "/img/listing-before-v2.jpg",
    alt: "Everyday phone photo of a bamboo cutting board on a kitchen counter",
    title: "Bamboo Cutting Board Large Wood Chopping Board for Kitchen",
    bullets: ["Made from natural bamboo", "Large size for everyday use", "Easy to clean"],
  },
  after: {
    label: "After",
    image: "/img/listing-after.jpg",
    alt: "Sharp, evenly lit photo of a bamboo cutting board with a juice groove on a white background",
    title: "Large Bamboo Cutting Board with Juice Groove for Meat, Bread and Cheese",
    bullets: [
      "Juice groove helps keep your counter clean while you carve",
      "Large surface gives you room to prepare a full meal",
      "Wash by hand and dry upright to help it last",
    ],
  },
};

const notes = [
  {
    title: "Clearer product information",
    text: "The title says what the product is and what it is for, in words shoppers search for.",
  },
  {
    title: "Useful benefits",
    text: "Each bullet explains why a feature matters, not only what it is.",
  },
  {
    title: "Stronger photography",
    text: "A sharp image on a clean background shows the juice groove at a glance.",
  },
];

type Key = keyof typeof versions;
const keys: Key[] = ["before", "after"];

export default function ListingCompare() {
  const [active, setActive] = useState<Key>("before");

  return (
    <figure className="m-0">
      <div className="rounded-[1.75rem] bg-white p-5 md:p-8">
        {/* Both versions are side by side from md up, so the control is only needed below it. */}
        <div
          role="group"
          aria-label="Choose which version of the example listing to show"
          className="mb-5 inline-grid grid-cols-2 rounded-full bg-offwhite p-1 md:hidden"
        >
          {keys.map((key) => (
            <button
              key={key}
              type="button"
              aria-pressed={active === key}
              onClick={() => setActive(key)}
              className={`min-h-11 rounded-full px-7 font-display text-sm font-semibold transition-colors duration-200 ${
                active === key ? "bg-royal text-offwhite" : "text-slate"
              }`}
            >
              {versions[key].label}
            </button>
          ))}
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {keys.map((key) => {
            const version = versions[key];
            return (
              <div key={key} className={active === key ? "block" : "hidden md:block"}>
                <p className="font-display font-semibold text-royal">{version.label}</p>
                <div className="relative mt-3 aspect-[4/3] overflow-hidden rounded-2xl bg-offwhite">
                  <Image
                    src={version.image}
                    alt={version.alt}
                    fill
                    sizes="(min-width: 768px) 480px, 90vw"
                    className="object-cover"
                  />
                </div>
                <p className="mt-4 font-display text-lg font-semibold leading-snug">{version.title}</p>
                <ul className="mt-3 list-disc space-y-1.5 pl-5 leading-relaxed text-slate">
                  {version.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="mt-8 border-t border-sand pt-6">
          <p className="font-display font-semibold">What changed</p>
          <dl className="m-0 mt-3 grid gap-5 md:grid-cols-3">
            {notes.map((note) => (
              <div key={note.title}>
                <dt className="font-semibold">{note.title}</dt>
                <dd className="m-0 mt-1 leading-relaxed text-slate">{note.text}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
      <figcaption className="mt-4 text-sm text-slate">
        An illustrative example we wrote to show the idea, not a client result.
      </figcaption>
    </figure>
  );
}
