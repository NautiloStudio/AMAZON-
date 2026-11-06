import { NAUTILUS_CHAMBERS, NAUTILUS_OUTLINE, NAUTILUS_VIEW_BOX } from "./nautilus-paths";

type Props = {
  className?: string;
  /** 0 to 1: lights the chambers from the centre outwards, like a pull gauge. */
  progress?: number;
  /** Chambers light up in turn while the shell turns, like the dashes of a loading circle. */
  spinning?: boolean;
  label?: string;
};

const total = NAUTILUS_CHAMBERS.length;

export default function NautilusLoader({ className, progress = 1, spinning = false, label }: Props) {
  const lit = Math.round(Math.min(1, Math.max(0, progress)) * total);

  return (
    <svg
      viewBox={NAUTILUS_VIEW_BOX}
      className={`${spinning ? "nautilus-spin" : ""} ${className ?? ""}`}
      role={label ? "img" : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
      focusable="false"
    >
      <path d={NAUTILUS_OUTLINE} fill="var(--color-graphite)" fillRule="evenodd" />
      {NAUTILUS_CHAMBERS.map((chamber, index) => (
        <path
          key={chamber.d}
          d={chamber.d}
          fill={chamber.color}
          fillRule="evenodd"
          className={spinning ? "nautilus-chamber" : undefined}
          style={
            spinning
              ? { animationDelay: `${(index * 1.2) / total}s` }
              : { opacity: index < lit ? 1 : 0.18, transition: "opacity 120ms linear" }
          }
        />
      ))}
    </svg>
  );
}
