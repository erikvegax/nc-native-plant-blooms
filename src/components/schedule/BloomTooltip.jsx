import { useEffect, useRef } from "react";

export default function BloomTooltip({ pollinators, anchorRect, onClose }) {
  const ref = useRef(null);

  useEffect(() => {
    const handleScroll = () => onClose();
    window.addEventListener("scroll", handleScroll, true);
    return () => window.removeEventListener("scroll", handleScroll, true);
  }, [onClose]);

  if (!anchorRect) return null;

  const GAP = 6;
  const top = anchorRect.top - GAP;
  // Position centered above anchor, then flip to below if needed
  const left = anchorRect.left + anchorRect.width / 2;

  return (
    <div
      ref={ref}
      className="fixed z-50 pointer-events-none"
      style={{
        left,
        top,
        transform: "translate(-50%, -100%)",
      }}
    >
      <div className="bg-stone-800 text-white text-sm rounded-lg px-3 py-2.5 shadow-xl max-w-[240px] whitespace-normal">
        <p className="font-semibold text-stone-300 mb-1.5 uppercase tracking-wide text-xs">
          Pollinators
        </p>
        <ul className="space-y-1">
          {pollinators.map((p) => (
            <li key={p} className="flex items-center gap-1.5">
              <span className="text-green-400 text-xs">▸</span>
              {p}
            </li>
          ))}
        </ul>
        {/* Arrow pointing down */}
        <div
          className="absolute left-1/2 -translate-x-1/2 top-full w-0 h-0"
          style={{
            borderLeft: "5px solid transparent",
            borderRight: "5px solid transparent",
            borderTop: "5px solid #1c1917",
          }}
        />
      </div>
    </div>
  );
}
