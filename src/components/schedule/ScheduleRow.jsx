import { useState, useCallback } from "react";
import { BLOOM_COLOR_MAP } from "../../data/plants";
import { FALL_COLOR_DATA } from "../../data/fallColorData";
import { POLLINATOR_DATA } from "../../data/pollinatorData";
import BloomBar from "./BloomBar";
import BloomTooltip from "./BloomTooltip";
import { usePopover } from "../../utils/usePopover";
import PlantPopover from "../shared/PlantPopover";

export default function ScheduleRow({ plant, selectedColor, onRemove, onColorChange }) {
  const { popover, onInfoClick, close } = usePopover();
  const [tooltip, setTooltip] = useState(null);

  const pollinators = POLLINATOR_DATA[plant.id];

  const handleBloomMouseEnter = useCallback((e) => {
    if (!pollinators || pollinators.length === 0) return;
    if (window.matchMedia("(hover: hover)").matches) {
      setTooltip({ anchorRect: e.currentTarget.getBoundingClientRect() });
    }
  }, [pollinators]);

  const handleBloomMouseLeave = useCallback(() => {
    if (window.matchMedia("(hover: hover)").matches) {
      setTooltip(null);
    }
  }, []);

  const handleBloomClick = useCallback((e) => {
    if (!pollinators || pollinators.length === 0) return;
    if (!window.matchMedia("(hover: hover)").matches) {
      const rect = e.currentTarget.getBoundingClientRect();
      setTooltip((prev) => prev ? null : { anchorRect: rect });
    }
  }, [pollinators]);
  const months = Array.from({ length: 12 }, (_, i) => i + 1);

  const fallData = FALL_COLOR_DATA[plant.id];
  const fallColorMonths = fallData?.fallColorMonths ?? [];
  const fallColor = fallData?.fallColors?.[0]
    ? BLOOM_COLOR_MAP[fallData.fallColors[0]] ?? fallData.fallColors[0]
    : null;

  const cellStates = months.map((month) => ({
    month,
    state:
      plant.bloomMonths.includes(month)   ? "bloom"
      : fallColorMonths.includes(month)   ? "fall-color"
      : plant.activeMonths.includes(month) ? "active"
      : "dormant",
  }));

  const bloomColor = plant.bloomColors.length > 0
    ? BLOOM_COLOR_MAP[selectedColor] ?? selectedColor
    : null;

  return (
    <div className="schedule-row grid grid-cols-bloom-chart-mobile lg:grid-cols-bloom-chart border-b border-stone-100 group hover:bg-stone-50 transition-colors">
      {/* Plant name column */}
      <div className="schedule-row-label sm:sticky left-0 z-10 bg-white group-hover:bg-stone-50 border-r border-stone-200 px-2 py-1 sm:px-3 sm:py-2 flex items-center justify-between gap-1 sm:gap-2 transition-colors">
        <div className="min-w-0">
          <div className="flex items-center gap-1 sm:gap-1.5 min-w-0">
            <p className="text-xs sm:text-sm font-semibold text-stone-800 leading-tight truncate">
              {plant.name}
            </p>
            <button
              onClick={(e) => onInfoClick(plant, e)}
              className={`no-print shrink-0 w-4 h-4 sm:w-5 sm:h-5 rounded-full flex items-center justify-center text-[10px] sm:text-sm font-bold transition-colors ${
                popover ? "bg-green-700 text-white" : "bg-stone-200 text-stone-500 hover:bg-stone-300 hover:text-stone-700"
              }`}
              title="Plant info"
            >
              ℹ
            </button>
          </div>
          <p className="hidden sm:block text-xs text-stone-400 italic leading-tight truncate mt-0.5">
            {plant.scientificName}
          </p>

          {plant.bloomColors.length > 1 && (
            <div className="flex gap-1.5 mt-1.5 items-center">
              {plant.bloomColors.map((color) => {
                const hex = BLOOM_COLOR_MAP[color] ?? color;
                const isActive = selectedColor === color;
                return (
                  <button
                    key={color}
                    title={color}
                    onClick={() => onColorChange(plant.id, color)}
                    className="no-print rounded-full border-2 transition-all"
                    style={{
                      width: 16,
                      height: 16,
                      backgroundColor: hex,
                      borderColor: isActive ? "#44403c" : "#d6d3d1",
                      transform: isActive ? "scale(1.25)" : "scale(1)",
                    }}
                  />
                );
              })}
              <span className="text-xs text-stone-400 ml-0.5 no-print">{selectedColor}</span>
            </div>
          )}
        </div>
        <button
          onClick={() => onRemove(plant.id)}
          className="no-print hidden sm:flex shrink-0 w-6 h-6 rounded items-center justify-center text-stone-300 hover:text-red-500 hover:bg-red-50 transition-colors opacity-0 group-hover:opacity-100 text-lg"
          title="Remove from plan"
        >
          ×
        </button>
      </div>

      {/* Month cells */}
      {cellStates.map(({ month, state }, idx) => {
        const prevState = idx > 0 ? cellStates[idx - 1].state : null;
        const nextState = idx < 11 ? cellStates[idx + 1].state : null;

        const isFirst = state !== "dormant" && (prevState !== state || prevState === "dormant");
        const isLast  = state !== "dormant" && (nextState !== state || nextState === "dormant");

        const color = state === "bloom" ? bloomColor
          : state === "fall-color"      ? fallColor
          : null;

        return (
          <div
            key={month}
            className="h-8 sm:h-10 flex items-center"
            onMouseEnter={state === "bloom" ? handleBloomMouseEnter : undefined}
            onMouseLeave={state === "bloom" ? handleBloomMouseLeave : undefined}
            onClick={state === "bloom" ? handleBloomClick : undefined}
          >
            <BloomBar
              state={state}
              color={color}
              isFirst={isFirst}
              isLast={isLast}
            />
          </div>
        );
      })}

      {popover && (
        <PlantPopover plant={popover.plant} anchorRect={popover.anchorRect} onClose={close} onRemove={() => { onRemove(plant.id); close(); }} />
      )}

      {tooltip && pollinators && (
        <BloomTooltip
          pollinators={pollinators}
          anchorRect={tooltip.anchorRect}
          onClose={() => setTooltip(null)}
        />
      )}
    </div>
  );
}
