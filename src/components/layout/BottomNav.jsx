const TABS = [
  {
    id: "filters",
    label: "Filters",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <line x1="4" y1="6" x2="20" y2="6" />
        <line x1="7" y1="12" x2="17" y2="12" />
        <line x1="10" y1="18" x2="14" y2="18" />
      </svg>
    ),
  },
  {
    id: "plants",
    label: "Plants",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22V12" />
        <path d="M12 12C12 7 17 3 21 3C21 8 17 12 12 12Z" />
        <path d="M12 12C12 7 7 3 3 3C3 8 7 12 12 12Z" />
      </svg>
    ),
  },
  {
    id: "schedule",
    label: "Schedule",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <line x1="3" y1="7" x2="10" y2="7" />
        <line x1="3" y1="12" x2="16" y2="12" />
        <line x1="3" y1="17" x2="13" y2="17" />
      </svg>
    ),
  },
];

export default function BottomNav({ activeTab, onChange, activeFilterCount, planCount }) {
  return (
    <nav
      className="no-print md:hidden flex shrink-0 border-t border-stone-200 bg-white"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      {TABS.map(({ id, label, icon }) => {
        const isActive = activeTab === id;
        const badge =
          id === "filters" ? activeFilterCount :
          id === "plants"  ? planCount : 0;

        return (
          <button
            key={id}
            onClick={() => onChange(id)}
            className={`relative flex-1 flex flex-col items-center py-2.5 gap-0.5 transition-colors ${
              isActive ? "text-green-700" : "text-stone-400"
            }`}
          >
            {icon}
            <span className="text-[10px] font-medium">{label}</span>
            {badge > 0 && (
              <span className="absolute top-1.5 right-[22%] min-w-[14px] h-3.5 px-0.5 rounded-full bg-green-600 text-white text-[9px] font-bold flex items-center justify-center">
                {badge > 9 ? "9+" : badge}
              </span>
            )}
          </button>
        );
      })}
    </nav>
  );
}
