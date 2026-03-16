import logo from "../../assets/logo.png";

export default function Header({ planCount, onExport, onAbout }) {
  return (
    <header className="no-print bg-white border-b border-stone-200 px-6 py-3 flex items-center justify-between sticky top-0 z-20 shadow-sm shrink-0">
      <div className="flex items-center gap-2.5">
        <img src={logo} alt="" className="w-14 h-14 shrink-0" />
        <h1 className="text-xl font-semibold text-stone-800 leading-tight">
          NC Native Plant Bloom Planner
        </h1>
      </div>
      <div className="flex items-center gap-3">
        {planCount > 0 && (
          <span className="hidden sm:inline text-sm text-stone-600">
            <span className="font-semibold text-green-700">{planCount}</span>{" "}
            {planCount === 1 ? "plant" : "plants"} in plan
          </span>
        )}
        <button
          onClick={onAbout}
          className="px-3 py-1.5 text-sm font-medium rounded-md text-stone-600 hover:text-stone-800 hover:bg-stone-100 transition-colors"
        >
          About
        </button>
        <button
          onClick={onExport}
          disabled={planCount === 0}
          className="hidden sm:block px-4 py-1.5 text-sm font-medium rounded-md bg-green-700 text-white hover:bg-green-800 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
        >
          Export PDF
        </button>
      </div>
    </header>
  );
}
