import PlantCard from "./PlantCard";

export default function PlantLibrary({ plants, planIds, onAdd, onRemove }) {
  if (plants.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-stone-400">
        <svg className="w-10 h-10 mb-3 opacity-40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
            d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
        </svg>
        <p className="text-sm font-medium">No plants match your filters</p>
        <p className="text-xs mt-1">Try adjusting or clearing the filters</p>
      </div>
    );
  }

  return (
    <div>
      <p className="text-xs text-stone-500 mb-3">
        {plants.length} plant{plants.length !== 1 ? "s" : ""} found
      </p>
      <div className="space-y-2.5">
        {plants.map((plant) => (
          <PlantCard
            key={plant.id}
            plant={plant}
            isInPlan={planIds.has(plant.id)}
            onAdd={onAdd}
            onRemove={onRemove}
          />
        ))}
      </div>
    </div>
  );
}
