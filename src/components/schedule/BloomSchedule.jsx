import MonthHeader from "./MonthHeader";
import ScheduleRow from "./ScheduleRow";
import ScheduleLegend from "./ScheduleLegend";

export default function BloomSchedule({ plants, plantColors, onRemove, onColorChange }) {
  if (plants.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-24 text-stone-400 border border-dashed border-stone-300 rounded-xl">
        <svg className="w-12 h-12 mb-4 opacity-30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1}
            d="M12 3v1m0 16v1M4.22 4.22l.7.7m12.16 12.16.7.7M3 12h1m16 0h1M4.22 19.78l.7-.7M18.36 5.64l.7-.7" />
          <circle cx="12" cy="12" r="4" strokeWidth={1} />
        </svg>
        <p className="text-sm font-medium">This group is empty</p>
        <p className="text-xs mt-1 text-center max-w-xs leading-relaxed">
          Browse the plant library on the left and add plants to see them here.
        </p>
      </div>
    );
  }

  return (
    <div className="bloom-schedule-container overflow-x-auto rounded-xl border border-stone-200 bg-white shadow-sm">
      {/* Print-only title */}
      <div className="print-title px-4 pt-4 pb-2">
        <h1 className="text-lg font-semibold text-stone-800">NC Native Plant Bloom Schedule</h1>
        <p className="text-xs text-stone-500">
          {plants.length} plants · Generated {new Date().toLocaleDateString("en-US", { month: "long", year: "numeric" })}
        </p>
      </div>

      <MonthHeader />

      <div>
        {plants.map((plant) => (
          <ScheduleRow
            key={plant.id}
            plant={plant}
            selectedColor={plantColors[plant.id] ?? plant.bloomColors[0]}
            onRemove={onRemove}
            onColorChange={onColorChange}
          />
        ))}
      </div>

      <ScheduleLegend plants={plants} plantColors={plantColors} />
    </div>
  );
}
