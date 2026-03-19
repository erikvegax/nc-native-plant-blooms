export function filterAndSearch(plants, filters, query) {
  return plants.filter((plant) => {
    if (query) {
      const q = query.toLowerCase();
      if (
        !plant.name.toLowerCase().includes(q) &&
        !plant.scientificName.toLowerCase().includes(q)
      ) {
        return false;
      }
    }

    if (filters.sun.length && !filters.sun.some((v) => plant.sun.includes(v)))
      return false;
    if (
      filters.moisture.length &&
      !filters.moisture.some((v) => plant.moisture.includes(v))
    )
      return false;
    if (
      filters.soil.length &&
      !filters.soil.some((v) => plant.soil.includes(v))
    )
      return false;
    if (
      filters.size.length &&
      !filters.size.includes(plant.sizeCategory)
    )
      return false;
    if (filters.type.length && !filters.type.includes(plant.type))
      return false;
    if (
      filters.bloomMonth.length &&
      !filters.bloomMonth.some((m) => plant.bloomMonths.includes(Number(m)))
    )
      return false;
    if (
      filters.bloomColor.length &&
      !filters.bloomColor.some((c) => {
        const specific = BLOOM_COLOR_GROUPS[c] ?? [c];
        return specific.some((s) => plant.bloomColors.includes(s));
      })
    )
      return false;
    if (
      filters.berryInterest.length &&
      filters.berryInterest.includes("has-berries") &&
      (!plant.berryMonths || plant.berryMonths.length === 0)
    )
      return false;

    if (filters.spreading.length) {
      const wantsSpreading = filters.spreading.includes("spreading");
      const wantsNonSpreading = filters.spreading.includes("non-spreading");
      if (wantsSpreading && !wantsNonSpreading && !plant.spreading) return false;
      if (wantsNonSpreading && !wantsSpreading && plant.spreading) return false;
    }

    return true;
  });
}

const BLOOM_COLOR_GROUPS = {
  white:  ["white", "cream"],
  pink:   ["pink", "deep-pink", "magenta"],
  red:    ["red", "red-orange", "brick-red", "maroon"],
  orange: ["orange", "red-orange"],
  yellow: ["yellow", "golden-yellow", "pale-yellow"],
  purple: ["purple", "blue-purple", "blue-violet", "violet", "lavender", "pale-lavender"],
  blue:   ["blue", "sky-blue"],
  bronze: ["bronze"],
};

export const FILTER_OPTIONS = {
  sun: [
    { value: "full-sun", label: "Full Sun" },
    { value: "part-shade", label: "Part Shade" },
    { value: "full-shade", label: "Full Shade" },
  ],
  moisture: [
    { value: "dry", label: "Dry" },
    { value: "medium", label: "Medium" },
    { value: "moist", label: "Moist" },
    { value: "wet", label: "Wet" },
  ],
  soil: [
    { value: "well-drained", label: "Well Drained" },
    { value: "loamy", label: "Loamy" },
    { value: "clay", label: "Clay" },
    { value: "sandy", label: "Sandy" },
    { value: "rich", label: "Rich / Organic" },
    { value: "rocky", label: "Rocky" },
  ],
  size: [
    { value: "small", label: 'Small (under 3\')', },
    { value: "medium", label: "Medium (3–8′)" },
    { value: "large", label: "Large (over 8′)" },
  ],
  type: [
    { value: "tree", label: "Tree" },
    { value: "shrub", label: "Shrub" },
    { value: "perennial", label: "Perennial" },
    { value: "grass", label: "Grass / Sedge" },
    { value: "fern", label: "Fern" },
    { value: "groundcover", label: "Groundcover" },
    { value: "vine", label: "Vine" },
  ],
  bloomMonth: [
    { value: "1", label: "January" },
    { value: "2", label: "February" },
    { value: "3", label: "March" },
    { value: "4", label: "April" },
    { value: "5", label: "May" },
    { value: "6", label: "June" },
    { value: "7", label: "July" },
    { value: "8", label: "August" },
    { value: "9", label: "September" },
    { value: "10", label: "October" },
    { value: "11", label: "November" },
    { value: "12", label: "December" },
  ],
  bloomColor: [
    { value: "white",  label: "White / Cream" },
    { value: "pink",   label: "Pink / Magenta" },
    { value: "red",    label: "Red" },
    { value: "orange", label: "Orange" },
    { value: "yellow", label: "Yellow" },
    { value: "purple", label: "Purple / Lavender" },
    { value: "blue",   label: "Blue" },
    { value: "bronze", label: "Bronze" },
  ],
  spreading: [
    { value: "spreading", label: "Spreads / Colonizes" },
    { value: "non-spreading", label: "Clumping / Non-spreading" },
  ],
  berryInterest: [
    { value: "has-berries", label: "Has Berry / Fruit Interest" },
  ],
};
