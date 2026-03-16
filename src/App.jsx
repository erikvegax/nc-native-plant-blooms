import { useState, useMemo } from "react";
import plants from "./data/plants";
import { filterAndSearch } from "./utils/filterUtils";
import Header from "./components/layout/Header";
import BottomNav from "./components/layout/BottomNav";
import FilterPanel from "./components/library/FilterPanel";
import SearchBar from "./components/library/SearchBar";
import PlantLibrary from "./components/library/PlantLibrary";
import BloomSchedule from "./components/schedule/BloomSchedule";
import GroupTabs from "./components/schedule/GroupTabs";
import AboutModal from "./components/shared/AboutModal";

const INITIAL_FILTERS = {
  sun: [],
  moisture: [],
  soil: [],
  size: [],
  type: [],
};

function makeGroup(name, index) {
  return { id: `group-${Date.now()}-${index}`, name, planIds: [], plantColors: {} };
}

export default function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState(INITIAL_FILTERS);
  const [showAbout, setShowAbout] = useState(false);
  const [mobileTab, setMobileTab] = useState("schedule");
  const [tabletPanel, setTabletPanel] = useState("plants");
  const [groups, setGroups] = useState(() => [makeGroup("Group 1", 0)]);
  const [activeGroupId, setActiveGroupId] = useState(() => groups[0].id);

  const activeGroup = useMemo(
    () => groups.find((g) => g.id === activeGroupId) ?? groups[0],
    [groups, activeGroupId]
  );

  const planIdsSet = useMemo(() => new Set(activeGroup.planIds), [activeGroup]);

  const filteredPlants = useMemo(
    () => filterAndSearch(plants, filters, searchQuery),
    [filters, searchQuery]
  );

  const planPlants = useMemo(
    () => activeGroup.planIds.map((id) => plants.find((p) => p.id === id)).filter(Boolean),
    [activeGroup]
  );

  const activeFilterCount = useMemo(
    () => Object.values(filters).reduce((sum, arr) => sum + arr.length, 0),
    [filters]
  );

  // ─── Group handlers ────────────────────────────────────────────────────────
  const handleAddGroup = () => {
    const newGroup = makeGroup(`Group ${groups.length + 1}`, groups.length);
    setGroups((prev) => [...prev, newGroup]);
    setActiveGroupId(newGroup.id);
  };

  const handleDeleteGroup = (id) => {
    setGroups((prev) => {
      const next = prev.filter((g) => g.id !== id);
      if (activeGroupId === id) setActiveGroupId(next[next.length - 1].id);
      return next;
    });
  };

  const handleRenameGroup = (id, name) => {
    setGroups((prev) => prev.map((g) => (g.id === id ? { ...g, name } : g)));
  };

  const handleClearGroup = () => {
    setGroups((prev) =>
      prev.map((g) => (g.id === activeGroupId ? { ...g, planIds: [], plantColors: {} } : g))
    );
  };

  // ─── Plant handlers ────────────────────────────────────────────────────────
  const handleAddPlant = (id) => {
    setGroups((prev) =>
      prev.map((g) =>
        g.id === activeGroupId && !g.planIds.includes(id)
          ? { ...g, planIds: [...g.planIds, id] }
          : g
      )
    );
  };

  const handleRemovePlant = (id) => {
    setGroups((prev) =>
      prev.map((g) =>
        g.id === activeGroupId
          ? { ...g, planIds: g.planIds.filter((pid) => pid !== id) }
          : g
      )
    );
  };

  const handleColorChange = (plantId, color) => {
    setGroups((prev) =>
      prev.map((g) =>
        g.id === activeGroupId
          ? { ...g, plantColors: { ...g.plantColors, [plantId]: color } }
          : g
      )
    );
  };

  const handleFilterChange = (key, value) =>
    setFilters((prev) => ({ ...prev, [key]: value }));

  const handleFilterReset = () => setFilters(INITIAL_FILTERS);

  const handleExport = () => window.print();

  const totalPlants = groups.reduce((sum, g) => sum + g.planIds.length, 0);

  // Shared plant library JSX (used in both mobile panel and tablet combined panel)
  const plantLibraryContent = (
    <>
      <div className="p-3 border-b border-stone-100 shrink-0">
        <SearchBar value={searchQuery} onChange={setSearchQuery} />
      </div>
      <div className="flex-1 overflow-y-auto p-3 pt-2">
        <PlantLibrary
          plants={filteredPlants}
          planIds={planIdsSet}
          onAdd={(id) => { handleAddPlant(id); setMobileTab("schedule"); }}
          onRemove={handleRemovePlant}
        />
      </div>
    </>
  );

  return (
    <div className="print-layout h-screen flex flex-col bg-stone-50 overflow-hidden">
      <Header planCount={totalPlants} onExport={handleExport} onAbout={() => setShowAbout(true)} />
      {showAbout && <AboutModal onClose={() => setShowAbout(false)} />}

      <div className="print-content flex flex-1 min-h-0 overflow-hidden">

        {/* ── FILTER SIDEBAR
              Mobile:  visible when mobileTab === 'filters', full width
              Tablet:  hidden (handled by tablet combined panel)
              Desktop: always visible, fixed width                        ── */}
        <aside className={[
          "no-print shrink-0 overflow-y-auto border-r border-stone-200 bg-stone-50",
          mobileTab === "filters" ? "flex flex-col w-full" : "hidden",
          "md:hidden",
          "lg:flex lg:flex-col lg:w-52",
        ].join(" ")}>
          <FilterPanel
            filters={filters}
            onChange={handleFilterChange}
            onReset={handleFilterReset}
          />
        </aside>

        {/* ── TABLET COMBINED PANEL (md–lg only)
              Left panel with Plants / Filters tab switcher              ── */}
        <div className="no-print hidden md:flex lg:hidden w-64 shrink-0 flex-col border-r border-stone-200 bg-white overflow-hidden">
          <div className="flex shrink-0 border-b border-stone-200">
            {["plants", "filters"].map((p) => (
              <button
                key={p}
                onClick={() => setTabletPanel(p)}
                className={`flex-1 py-2 text-xs font-semibold uppercase tracking-wide transition-colors ${
                  tabletPanel === p
                    ? "text-green-700 border-b-2 border-green-700 -mb-px bg-white"
                    : "text-stone-400 hover:text-stone-600"
                }`}
              >
                {p === "plants" ? "Plants" : "Filters"}
              </button>
            ))}
          </div>
          {tabletPanel === "plants" ? (
            plantLibraryContent
          ) : (
            <div className="flex-1 overflow-y-auto">
              <FilterPanel
                filters={filters}
                onChange={handleFilterChange}
                onReset={handleFilterReset}
              />
            </div>
          )}
        </div>

        {/* ── PLANT LIBRARY
              Mobile:  visible when mobileTab === 'plants', full width
              Tablet:  hidden (inside combined panel above)
              Desktop: always visible, fixed width                        ── */}
        <section className={[
          "no-print shrink-0 flex-col border-r border-stone-200 bg-white overflow-hidden",
          mobileTab === "plants" ? "flex w-full" : "hidden",
          "md:hidden",
          "lg:flex lg:w-72",
        ].join(" ")}>
          {plantLibraryContent}
        </section>

        {/* ── BLOOM SCHEDULE
              Mobile:  visible when mobileTab === 'schedule'
              Tablet+: always visible                                      ── */}
        <main className={[
          "print-main flex-1 min-h-0 overflow-auto p-3 md:p-4 flex-col",
          mobileTab === "schedule" ? "flex" : "hidden",
          "md:flex",
        ].join(" ")}>
          <GroupTabs
            groups={groups}
            activeGroupId={activeGroupId}
            onSelect={setActiveGroupId}
            onAdd={handleAddGroup}
            onRename={handleRenameGroup}
            onDelete={handleDeleteGroup}
          />

          {activeGroup.planIds.length > 0 && (
            <div className="no-print flex items-center justify-between mb-3">
              <span className="text-sm text-stone-500">
                {activeGroup.planIds.length} plant{activeGroup.planIds.length !== 1 ? "s" : ""}
              </span>
              <button
                onClick={handleClearGroup}
                className="text-sm text-stone-400 hover:text-red-500 transition-colors"
              >
                Clear group
              </button>
            </div>
          )}

          <BloomSchedule
            plants={planPlants}
            plantColors={activeGroup.plantColors}
            onRemove={handleRemovePlant}
            onColorChange={handleColorChange}
          />
        </main>
      </div>

      {/* Bottom nav — mobile only */}
      <BottomNav
        activeTab={mobileTab}
        onChange={setMobileTab}
        activeFilterCount={activeFilterCount}
        planCount={activeGroup.planIds.length}
      />
    </div>
  );
}
