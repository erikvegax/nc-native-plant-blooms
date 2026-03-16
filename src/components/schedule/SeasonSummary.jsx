import { BLOOM_COLOR_MAP } from "../../data/plants";
import { FALL_COLOR_DATA } from "../../data/fallColorData";

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export default function SeasonSummary({ plants, plantColors = {} }) {
  const monthData = MONTHS.map((label, i) => {
    const month = i + 1;
    const bloomingPlants = plants.filter((p) => p.bloomMonths.includes(month));
    const fallColorPlants = plants.filter(
      (p) => !p.bloomMonths.includes(month) && FALL_COLOR_DATA[p.id]?.fallColorMonths.includes(month)
    );
    const activePlants = plants.filter(
      (p) =>
        !p.bloomMonths.includes(month) &&
        !FALL_COLOR_DATA[p.id]?.fallColorMonths.includes(month) &&
        p.activeMonths.includes(month)
    );
    return { label, month, bloomingPlants, fallColorPlants, activePlants };
  });

  return (
    <div className="no-print mb-4 bg-white border border-stone-200 rounded-xl p-5 shadow-sm">
      <p className="text-sm font-semibold text-stone-500 uppercase tracking-wide mb-4">
        Garden Interest Summary
      </p>
      <div className="grid grid-cols-12 gap-1.5">
        {monthData.map(({ label, bloomingPlants, fallColorPlants, activePlants }) => {
          const total = plants.length;
          const bloomCount = bloomingPlants.length;
          const activeCount = activePlants.length;
          const fallCount = fallColorPlants.length;

          const dominantColor =
            bloomingPlants.length > 0
              ? BLOOM_COLOR_MAP[plantColors[bloomingPlants[0].id] ?? bloomingPlants[0].bloomColors[0]] ?? "#e8a0b0"
              : null;
          const dominantFallColor = fallColorPlants.length > 0
            ? BLOOM_COLOR_MAP[FALL_COLOR_DATA[fallColorPlants[0].id]?.fallColors?.[0]] ?? "#c94040"
            : null;

          return (
            <div key={label} className="text-center">
              <div className="relative h-20 bg-stone-100 rounded-md overflow-hidden flex flex-col justify-end">
                {activeCount > 0 && (
                  <div
                    className="w-full transition-all"
                    style={{ backgroundColor: "#8aab78", height: `${(activeCount / total) * 100}%` }}
                  />
                )}
                {fallCount > 0 && (
                  <div
                    className="w-full transition-all"
                    style={{ backgroundColor: dominantFallColor, height: `${(fallCount / total) * 100}%` }}
                  />
                )}
                {bloomCount > 0 && (
                  <div
                    className="w-full transition-all"
                    style={{
                      height: `${(bloomCount / total) * 100}%`,
                      backgroundColor: dominantColor ?? "#e8a0b0",
                    }}
                  />
                )}
                {bloomCount > 0 && (
                  <span className="absolute top-1.5 inset-x-0 text-center text-sm font-bold text-stone-700">
                    {bloomCount}
                  </span>
                )}
              </div>
              <p className="text-sm text-stone-500 mt-1.5 font-medium">{label}</p>
            </div>
          );
        })}
      </div>
      <p className="text-sm text-stone-400 mt-3">
        Bar height shows proportion of plan plants blooming (colored) or in active foliage (green) each month.
        Numbers indicate plants in bloom.
      </p>
    </div>
  );
}
