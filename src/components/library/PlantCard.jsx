import { BLOOM_COLOR_MAP } from "../../data/plants";
import { usePopover } from "../../utils/usePopover";
import PlantPopover from "../shared/PlantPopover";

const TYPE_COLORS = {
  tree: "bg-emerald-100 text-emerald-800",
  shrub: "bg-teal-100 text-teal-800",
  perennial: "bg-violet-100 text-violet-800",
  grass: "bg-amber-100 text-amber-800",
  fern: "bg-lime-100 text-lime-800",
  groundcover: "bg-cyan-100 text-cyan-800",
  vine: "bg-orange-100 text-orange-800",
};

const SUN_ORDER = ["full-sun", "part-shade", "full-shade"];

const SUN_ICONS = {
  "full-sun": { icon: "●", label: "Full Sun" },
  "part-shade": { icon: "◑", label: "Part Shade" },
  "full-shade": { icon: "○", label: "Full Shade" },
};

const MOISTURE_LABELS = {
  dry: "Dry",
  medium: "Med",
  moist: "Moist",
  wet: "Wet",
};

export default function PlantCard({ plant, isInPlan, onAdd, onRemove }) {
  const typeClass = TYPE_COLORS[plant.type] ?? "bg-stone-100 text-stone-700";
  const { popover, popoverRef, onInfoClick, onInfoMouseEnter, onInfoMouseLeave, onPopoverMouseEnter, onPopoverMouseLeave, close } = usePopover();

  return (
    <div
      className={`border rounded-lg p-3 transition-all ${
        isInPlan
          ? "border-green-400 bg-green-50"
          : "border-stone-200 bg-white hover:border-stone-300"
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <div className="flex items-center gap-2 flex-wrap mb-1.5">
            <span className={`text-xs font-semibold uppercase tracking-wide px-2 py-0.5 rounded ${typeClass}`}>
              {plant.type}
            </span>
            {plant.evergreen && (
              <span className="text-xs font-semibold uppercase tracking-wide px-2 py-0.5 rounded bg-green-100 text-green-800">
                Evergreen
              </span>
            )}
          </div>
          <div className="flex items-center gap-1.5">
            <p className="text-sm font-semibold text-stone-800 leading-snug">
              {plant.name}
            </p>
            <button
              onClick={(e) => onInfoClick(plant, e)}
              onMouseEnter={(e) => onInfoMouseEnter(plant, e)}
              onMouseLeave={() => onInfoMouseLeave()}
              className={`shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-sm font-bold transition-colors ${
                popover ? "bg-green-700 text-white" : "bg-stone-200 text-stone-500 hover:bg-stone-300 hover:text-stone-700"
              }`}
              title="Plant info"
            >
              ℹ
            </button>
          </div>
          <p className="text-xs text-stone-500 italic leading-snug mt-0.5">
            {plant.scientificName}
          </p>
        </div>
        <button
          onClick={() => (isInPlan ? onRemove(plant.id) : onAdd(plant.id))}
          className={`shrink-0 text-sm font-medium px-3 py-1.5 rounded-md transition-colors whitespace-nowrap ${
            isInPlan
              ? "bg-green-200 text-green-800 hover:bg-red-100 hover:text-red-700"
              : "bg-stone-100 text-stone-700 hover:bg-green-100 hover:text-green-800"
          }`}
        >
          {isInPlan ? "Remove" : "+ Add"}
        </button>
      </div>

      <div className="mt-2 flex items-center gap-2 text-xs text-stone-500 flex-wrap">
        <span title={SUN_ORDER.filter((s) => plant.sun.includes(s)).map((s) => SUN_ICONS[s].label).join(", ")}>
          <span className="font-medium text-stone-600">Sun</span>{" "}
          {SUN_ORDER.filter((s) => plant.sun.includes(s)).map((s) => SUN_ICONS[s].icon).join(" ")}
        </span>
        <span className="text-stone-300">|</span>
        <span>
          <span className="font-medium text-stone-600">Height</span>{" "}
          {plant.heightMin}–{plant.heightMax}′
        </span>

        {plant.bloomColors.length > 0 && (
          <>
            <span className="text-stone-300">|</span>
            <span className="flex gap-1.5 items-center">
              <span className="font-medium text-stone-600">Bloom</span>
              {plant.bloomColors.slice(0, 3).map((color) => (
                <span
                  key={color}
                  className="w-4 h-4 rounded-full border border-stone-300 inline-block"
                  style={{ backgroundColor: BLOOM_COLOR_MAP[color] ?? color }}
                  title={color}
                />
              ))}
            </span>
          </>
        )}
      </div>

      {popover && (
        <PlantPopover plant={popover.plant} anchorRect={popover.anchorRect} onClose={close} popoverRef={popoverRef} onMouseEnter={onPopoverMouseEnter} onMouseLeave={onPopoverMouseLeave} />
      )}
    </div>
  );
}
