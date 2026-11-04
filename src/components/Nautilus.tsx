import { NAUTILUS_CHAMBERS, NAUTILUS_OUTLINE, NAUTILUS_VIEW_BOX } from "./nautilus-paths";

type Props = {
  className?: string;
  /** Light the chambers one by one, from the centre to the end, as the --steps timeline scrolls. */
  fillOnScroll?: boolean;
};

const total = NAUTILUS_CHAMBERS.length;
// Keeps a little scroll after the last chamber lights up, so the full shell is seen before it leaves.
const RANGE = 92;

export default function Nautilus({ className, fillOnScroll = false }: Props) {
  return (
    <svg viewBox={NAUTILUS_VIEW_BOX} className={className} aria-hidden focusable="false">
      <path d={NAUTILUS_OUTLINE} fill="var(--color-graphite)" fillRule="evenodd" />
      {fillOnScroll &&
        NAUTILUS_CHAMBERS.map((chamber) => (
          <path key={chamber.d} d={chamber.d} fill="var(--color-sand)" fillRule="evenodd" />
        ))}
      {NAUTILUS_CHAMBERS.map((chamber, index) => (
        <path
          key={chamber.d}
          d={chamber.d}
          fill={chamber.color}
          fillRule="evenodd"
          className={fillOnScroll ? "chamber-fill" : undefined}
          style={
            fillOnScroll
              ? {
                  animationRange: `contain ${((index * RANGE) / total).toFixed(2)}% contain ${(((index + 0.7) * RANGE) / total).toFixed(2)}%`,
                }
              : undefined
          }
        />
      ))}
    </svg>
  );
}
