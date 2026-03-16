import FilterPanel from "./FilterPanel";

export default function FilterModal({ filters, onChange, onReset, onClose }) {
  const activeCount = Object.values(filters).reduce((sum, arr) => sum + arr.length, 0);

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/40"
      onMouseDown={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="bg-white w-full sm:max-w-sm sm:mx-4 rounded-t-2xl sm:rounded-xl shadow-2xl flex flex-col max-h-[80vh]">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-stone-200 shrink-0">
          <h2 className="text-base font-semibold text-stone-800">Filter Plants</h2>
          <div className="flex items-center gap-3">
            {activeCount > 0 && (
              <button
                onClick={onReset}
                className="text-sm text-green-700 hover:text-green-900 font-medium"
              >
                Clear all
              </button>
            )}
            <button
              onClick={onClose}
              className="w-7 h-7 rounded flex items-center justify-center text-stone-400 hover:text-stone-600 hover:bg-stone-100 transition-colors text-xl leading-none"
            >
              ×
            </button>
          </div>
        </div>

        {/* Filter groups */}
        <div className="overflow-y-auto">
          <FilterPanel
            filters={filters}
            onChange={onChange}
            onReset={onReset}
            showHeader={false}
          />
        </div>

        {/* Footer — apply / close */}
        <div className="px-5 py-3 border-t border-stone-100 shrink-0">
          <button
            onClick={onClose}
            className="w-full py-2 rounded-lg bg-green-700 text-white text-sm font-medium hover:bg-green-800 transition-colors"
          >
            {activeCount > 0 ? `Show results · ${activeCount} filter${activeCount !== 1 ? "s" : ""} active` : "Done"}
          </button>
        </div>
      </div>
    </div>
  );
}
