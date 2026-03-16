const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export default function MonthHeader() {
  return (
    <div className="month-header grid grid-cols-bloom-chart border-b border-stone-200 bg-stone-50">
      <div className="px-5 py-3 text-sm font-semibold text-stone-500 uppercase tracking-wide border-r border-stone-200">
        Plant
      </div>
      {MONTHS.map((month, i) => (
        <div
          key={month}
          className={`py-3 text-center text-sm font-semibold text-stone-500 ${
            i < 11 ? "border-r border-stone-100" : ""
          }`}
        >
          {month}
        </div>
      ))}
    </div>
  );
}
