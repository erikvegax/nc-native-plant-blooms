import { FILTER_OPTIONS } from "../../utils/filterUtils";

function FilterGroup({ title, options, selected, filterKey, onChange }) {
  const toggle = (value) => {
    const next = selected.includes(value)
      ? selected.filter((v) => v !== value)
      : [...selected, value];
    onChange(filterKey, next);
  };

  return (
    <div className="mb-5">
      <p className="text-xs font-semibold uppercase tracking-wider text-stone-500 mb-2">
        {title}
      </p>
      <div className="space-y-2">
        {options.map((opt) => {
          const checked = selected.includes(opt.value);
          return (
            <label
              key={opt.value}
              className="flex items-center gap-2 cursor-pointer group"
            >
              <input
                type="checkbox"
                checked={checked}
                onChange={() => toggle(opt.value)}
                className="w-3.5 h-3.5 rounded accent-green-700 cursor-pointer shrink-0"
              />
              <span
                className={`text-sm transition-colors ${
                  checked ? "text-stone-800 font-medium" : "text-stone-600 group-hover:text-stone-800"
                }`}
              >
                {opt.label}
              </span>
            </label>
          );
        })}
      </div>
    </div>
  );
}

export default function FilterPanel({ filters, onChange, onReset }) {
  const hasActive = Object.values(filters).some((arr) => arr.length > 0);

  return (
    <div className="p-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-sm font-semibold text-stone-700 uppercase tracking-wide">Filters</h2>
        {hasActive && (
          <button
            onClick={onReset}
            className="text-sm text-green-700 hover:text-green-900 font-medium"
          >
            Clear all
          </button>
        )}
      </div>

      <FilterGroup
        title="Sun Exposure"
        options={FILTER_OPTIONS.sun}
        selected={filters.sun}
        filterKey="sun"
        onChange={onChange}
      />
      <FilterGroup
        title="Moisture"
        options={FILTER_OPTIONS.moisture}
        selected={filters.moisture}
        filterKey="moisture"
        onChange={onChange}
      />
      <FilterGroup
        title="Soil Type"
        options={FILTER_OPTIONS.soil}
        selected={filters.soil}
        filterKey="soil"
        onChange={onChange}
      />
      <FilterGroup
        title="Plant Size"
        options={FILTER_OPTIONS.size}
        selected={filters.size}
        filterKey="size"
        onChange={onChange}
      />
      <FilterGroup
        title="Plant Type"
        options={FILTER_OPTIONS.type}
        selected={filters.type}
        filterKey="type"
        onChange={onChange}
      />
    </div>
  );
}
