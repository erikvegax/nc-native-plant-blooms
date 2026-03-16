export default function AboutModal({ onClose }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
      onMouseDown={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-lg mx-4 overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-stone-200">
          <h2 className="text-lg font-semibold text-stone-800">About & Data Sources</h2>
          <button
            onClick={onClose}
            className="w-7 h-7 rounded flex items-center justify-center text-stone-400 hover:text-stone-600 hover:bg-stone-100 transition-colors text-xl leading-none"
          >
            ×
          </button>
        </div>

        {/* Body */}
        <div className="px-6 py-5 space-y-5 text-sm text-stone-600">
          <p>
            <span className="font-semibold text-stone-800">NC Native Plant Bloom Planner</span> is a
            landscape planning tool for selecting North Carolina native plants and visualizing their
            bloom, foliage, and dormancy periods throughout the year.
          </p>

          <div>
            <h3 className="font-semibold text-stone-700 mb-2 uppercase text-xs tracking-wide">Plant Data</h3>
            <p className="mb-3 text-stone-500 text-xs italic">
              Plant information was compiled from the following references. Always verify with local
              sources before making planting decisions.
            </p>
            <ul className="space-y-2">
              {[
                {
                  name: "NC Native Plant Society",
                  url: "https://ncwildflower.org",
                  desc: "Regional native plant profiles and growing conditions",
                },
                {
                  name: "USDA PLANTS Database",
                  url: "https://plants.usda.gov",
                  desc: "Species data, range, and habitat information",
                },
                {
                  name: "Lady Bird Johnson Wildflower Center",
                  url: "https://www.wildflower.org/plants",
                  desc: "Native plant characteristics and landscape use",
                },
                {
                  name: "NC State Extension",
                  url: "https://plants.ces.ncsu.edu",
                  desc: "Horticultural data and landscape recommendations",
                },
                {
                  name: "Xerces Society",
                  url: "https://xerces.org",
                  desc: "Pollinator associations and wildlife value",
                },
              ].map(({ name, url, desc }) => (
                <li key={name} className="flex gap-3">
                  <span className="text-green-600 mt-0.5">▸</span>
                  <span>
                    <a
                      href={url}
                      target="_blank"
                      rel="noreferrer"
                      className="font-medium text-stone-700 hover:text-green-700 underline underline-offset-2"
                    >
                      {name}
                    </a>
                    <span className="text-stone-400"> — {desc}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-stone-700 mb-2 uppercase text-xs tracking-wide">Plant Photos</h3>
            <ul className="space-y-2">
              <li className="flex gap-3">
                <span className="text-green-600 mt-0.5">▸</span>
                <span>
                  <a
                    href="https://www.inaturalist.org"
                    target="_blank"
                    rel="noreferrer"
                    className="font-medium text-stone-700 hover:text-green-700 underline underline-offset-2"
                  >
                    iNaturalist
                  </a>
                  <span className="text-stone-400"> — Community-contributed photos via the iNaturalist API</span>
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="px-6 py-3 bg-stone-50 border-t border-stone-200 text-xs text-stone-400">
          Plant data is provided for general reference only. Conditions may vary by site and region.
        </div>
      </div>
    </div>
  );
}
