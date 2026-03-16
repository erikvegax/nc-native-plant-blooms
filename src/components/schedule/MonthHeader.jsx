const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const MONTHS_SHORT = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];

export default function MonthHeader() {
  return (
    <div className="month-header grid grid-cols-bloom-chart-mobile lg:grid-cols-bloom-chart border-b border-stone-200 bg-stone-50">
      <div className="px-3 py-2 text-xs font-semibold text-stone-500 uppercase tracking-wide border-r border-stone-200">
        Plant
      </div>
      {MONTHS.map((month, i) => (
        <div
          key={month}
          className={`py-2 text-center text-xs font-semibold text-stone-500 ${
            i < 11 ? "border-r border-stone-100" : ""
          }`}
        >
          <span className="lg:hidden">{MONTHS_SHORT[i]}</span>
          <span className="hidden lg:inline">{month}</span>
        </div>
      ))}
    </div>
  );
}
