import { BLOOM_COLOR_MAP } from "../../data/plants";
import { FALL_COLOR_DATA } from "../../data/fallColorData";

export default function ScheduleLegend({ plants = [], plantColors = {} }) {
  const bloomColors = [
    ...new Map(
      plants
        .filter((p) => p.bloomColors.length > 0)
        .map((p) => {
          const colorKey = plantColors[p.id] ?? p.bloomColors[0];
          const hex = BLOOM_COLOR_MAP[colorKey] ?? colorKey;
          return [hex, { hex, label: colorKey, name: p.name }];
        })
    ).values(),
  ];

  const fallColors = [
    ...new Map(
      plants
        .filter((p) => FALL_COLOR_DATA[p.id]?.fallColors?.length > 0)
        .map((p) => {
          const colorKey = FALL_COLOR_DATA[p.id].fallColors[0];
          const hex = BLOOM_COLOR_MAP[colorKey] ?? colorKey;
          return [hex, { hex, label: colorKey, name: p.name }];
        })
    ).values(),
  ];

  return (
    <div className="schedule-legend flex items-center gap-x-4 gap-y-1.5 lg:gap-6 px-3 lg:px-4 py-2 lg:py-3 bg-stone-50 border-t border-stone-200 text-xs lg:text-sm text-stone-500 flex-wrap">
      <span className="font-semibold text-stone-600">Legend:</span>

      <span className="flex items-center gap-2 flex-wrap">
        {bloomColors.length > 0 ? (
          <span className="flex gap-1 items-center">
            {bloomColors.map(({ hex, label, name }) => (
              <span
                key={hex}
                title={`${name} — ${label}`}
                className="w-4 h-4 rounded border"
                style={{ backgroundColor: hex, borderColor: darken(hex, 0.15) }}
              />
            ))}
          </span>
        ) : (
          <span className="w-8 h-4 rounded bg-stone-200" />
        )}
        <span>Bloom Period</span>
      </span>

      <span className="flex items-center gap-2 flex-wrap">
        {fallColors.length > 0 ? (
          <span className="flex gap-1 items-center">
            {fallColors.map(({ hex, label, name }) => (
              <span
                key={hex}
                title={`${name} — ${label}`}
                className="w-4 h-4 rounded border"
                style={{ backgroundColor: hex, borderColor: darken(hex, 0.15) }}
              />
            ))}
          </span>
        ) : (
          <span className="w-8 h-4 rounded bg-stone-200" />
        )}
        <span>Fall Color</span>
      </span>

      <span className="flex items-center gap-2">
        <span className="w-8 h-4 rounded" style={{ backgroundColor: "#8aab78" }} />
        Active / Foliage
      </span>
      <span className="flex items-center gap-2">
        <span className="w-8 h-4 rounded bg-stone-100 border border-stone-300" />
        Dormant
      </span>
      <span className="flex items-center gap-2">
        <span className="relative w-8 h-4 rounded bg-stone-100 border border-stone-300 overflow-hidden">
          <span className="absolute bottom-0 left-0 right-0 h-1.5 rounded" style={{ backgroundColor: "#d94040" }} />
        </span>
        Berry / Fruit
      </span>
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
