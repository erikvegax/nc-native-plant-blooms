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

    return true;
  });
}

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
};
