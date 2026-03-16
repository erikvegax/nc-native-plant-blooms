export default function BloomBar({ state, color, isFirst, isLast }) {
  const radius = isFirst && isLast ? "4px"
    : isFirst ? "4px 0 0 4px"
    : isLast  ? "0 4px 4px 0"
    : "0";

  const edgePadding = { paddingLeft: isFirst ? 2 : 0, paddingRight: isLast ? 2 : 0 };

  if (state === "dormant") {
    return (
      <div className="h-full w-full flex items-center px-1">
        <div className="bloom-bar-fill w-full h-3 rounded bg-stone-100" />
      </div>
    );
  }

  if (state === "active") {
    return (
      <div className="h-full w-full flex items-center" style={edgePadding}>
        <div className="bloom-bar-fill w-full h-5" style={{ backgroundColor: "#8aab78", borderRadius: radius }} />
      </div>
    );
  }

  // bloom and fall-color share the same bar style; color is passed in from ScheduleRow
  const barColor = color ?? (state === "fall-color" ? "#c94040" : "#d4a0b0");

  return (
    <div className="h-full w-full flex items-center" style={edgePadding}>
      <div
        className="bloom-bar-fill w-full h-6 shadow-sm"
        style={{
          backgroundColor: barColor,
          borderTop:    `1px solid ${darken(barColor, 0.15)}`,
          borderBottom: `1px solid ${darken(barColor, 0.15)}`,
          borderLeft:   isFirst ? `1px solid ${darken(barColor, 0.15)}` : "none",
          borderRight:  isLast  ? `1px solid ${darken(barColor, 0.15)}` : "none",
          borderRadius: radius,
        }}
      />
    </div>
  );
}

function darken(hex, amount) {
  const num = parseInt(hex.replace("#", ""), 16);
  const r = Math.max(0, (num >> 16) - Math.round(255 * amount));
  const g = Math.max(0, ((num >> 8) & 0xff) - Math.round(255 * amount));
  const b = Math.max(0, (num & 0xff) - Math.round(255 * amount));
  return `rgb(${r},${g},${b})`;
}
