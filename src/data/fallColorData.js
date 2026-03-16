// Fall foliage color data, keyed by plant ID.
// fallColorMonths should be a subset of the plant's activeMonths.
// Priority in the Gantt: bloom > fall-color > active > dormant.

export const FALL_COLOR_DATA = {
  // ─── TREES ──────────────────────────────────────────────────────────────────
  "serviceberry": {
    fallColors: ["scarlet", "fall-orange"],
    fallColorMonths: [10],
  },
  "eastern-redbud": {
    fallColors: ["golden-yellow"],
    fallColorMonths: [10],
  },
  "flowering-dogwood": {
    fallColors: ["scarlet", "red"],
    fallColorMonths: [10, 11],
  },
  "carolina-silverbell": {
    fallColors: ["golden-yellow"],
    fallColorMonths: [10],
  },
  "blackgum": {
    fallColors: ["scarlet", "fall-orange", "yellow"],
    fallColorMonths: [10, 11],
  },
  "tulip-poplar": {
    fallColors: ["golden-yellow"],
    fallColorMonths: [10],
  },
  "sourwood": {
    fallColors: ["scarlet", "crimson"],
    fallColorMonths: [10, 11],
  },
  "pawpaw": {
    fallColors: ["golden-yellow"],
    fallColorMonths: [10],
  },
  "american-persimmon": {
    fallColors: ["golden-yellow", "fall-orange"],
    fallColorMonths: [10, 11],
  },

  // ─── SHRUBS ─────────────────────────────────────────────────────────────────
  "fothergilla": {
    fallColors: ["scarlet", "fall-orange", "golden-yellow"],
    fallColorMonths: [10, 11],
  },
  "sweetshrub": {
    fallColors: ["golden-yellow"],
    fallColorMonths: [10],
  },
  "virginia-sweetspire": {
    fallColors: ["crimson", "burgundy"],
    fallColorMonths: [10, 11],
  },
  "oakleaf-hydrangea": {
    fallColors: ["burgundy", "red"],
    fallColorMonths: [10, 11],
  },
  "beautyberry": {
    fallColors: ["golden-yellow"],
    fallColorMonths: [10],
  },
  "witch-hazel": {
    fallColors: ["golden-yellow", "fall-orange"],
    fallColorMonths: [10],
  },
  "spicebush": {
    fallColors: ["golden-yellow"],
    fallColorMonths: [10],
  },
  "swamp-rose": {
    fallColors: ["golden-yellow", "fall-orange"],
    fallColorMonths: [10],
  },
  "pinxterbloom-azalea": {
    fallColors: ["golden-yellow"],
    fallColorMonths: [10],
  },

  // ─── GRASSES ────────────────────────────────────────────────────────────────
  "little-bluestem": {
    fallColors: ["copper", "red-orange"],
    fallColorMonths: [10, 11, 12, 1],
  },
  "switchgrass": {
    fallColors: ["golden-yellow", "red"],
    fallColorMonths: [10, 11],
  },
  "river-oats": {
    fallColors: ["bronze", "golden-yellow"],
    fallColorMonths: [10, 11],
  },
  "eastern-gamagrass": {
    fallColors: ["fall-orange", "copper"],
    fallColorMonths: [10, 11],
  },
};
