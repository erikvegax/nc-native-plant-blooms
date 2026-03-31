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

  // ─── ADDITIONAL TREES ───────────────────────────────────────────────────────
  "sassafras": {
    fallColors: ["scarlet", "fall-orange", "golden-yellow"],
    fallColorMonths: [10, 11],
  },
  "sweetgum": {
    fallColors: ["scarlet", "crimson", "burgundy", "fall-orange"],
    fallColorMonths: [10, 11],
  },
  "painted-buckeye": {
    fallColors: ["golden-yellow"],
    fallColorMonths: [10],
  },

  // ─── ADDITIONAL SHRUBS ──────────────────────────────────────────────────────
  "summersweet": {
    fallColors: ["golden-yellow"],
    fallColorMonths: [10],
  },
  "arrowwood-viburnum": {
    fallColors: ["burgundy", "scarlet"],
    fallColorMonths: [10, 11],
  },
  "highbush-blueberry": {
    fallColors: ["scarlet", "crimson"],
    fallColorMonths: [10, 11],
  },
  "dwarf-fothergilla": {
    fallColors: ["scarlet", "fall-orange", "golden-yellow"],
    fallColorMonths: [10, 11],
  },

  // ─── ADDITIONAL GRASSES ─────────────────────────────────────────────────────
  "big-bluestem": {
    fallColors: ["copper", "fall-orange"],
    fallColorMonths: [10, 11],
  },
  "indian-grass": {
    fallColors: ["golden-yellow", "copper"],
    fallColorMonths: [10, 11],
  },

  // ─── ADDITIONAL PLANTS ──────────────────────────────────────────────────────
  "white-oak": {
    fallColors: ["crimson","burgundy"],
    fallColorMonths: [10,11],
  },
  "southern-red-oak": {
    fallColors: ["fall-orange","copper"],
    fallColorMonths: [10,11],
  },
  "willow-oak": {
    fallColors: ["golden-yellow","fall-orange"],
    fallColorMonths: [10,11],
  },
  "chestnut-oak": {
    fallColors: ["golden-yellow","fall-orange"],
    fallColorMonths: [10,11],
  },
  "scarlet-oak": {
    fallColors: ["scarlet","crimson"],
    fallColorMonths: [10,11],
  },
  "american-beech": {
    fallColors: ["golden-yellow","copper"],
    fallColorMonths: [10,11],
  },
  "shagbark-hickory": {
    fallColors: ["golden-yellow"],
    fallColorMonths: [10],
  },
  "mockernut-hickory": {
    fallColors: ["golden-yellow"],
    fallColorMonths: [10],
  },
  "pignut-hickory": {
    fallColors: ["golden-yellow"],
    fallColorMonths: [10],
  },
  "bitternut-hickory": {
    fallColors: ["golden-yellow"],
    fallColorMonths: [10],
  },
  "red-maple": {
    fallColors: ["scarlet","fall-orange"],
    fallColorMonths: [10,11],
  },
  "sugar-maple": {
    fallColors: ["scarlet","fall-orange","golden-yellow"],
    fallColorMonths: [10],
  },
  "american-hornbeam": {
    fallColors: ["fall-orange","scarlet"],
    fallColorMonths: [10,11],
  },
  "hophornbeam": {
    fallColors: ["golden-yellow"],
    fallColorMonths: [10],
  },
  "white-ash": {
    fallColors: ["burgundy","crimson"],
    fallColorMonths: [10,11],
  },
  "green-ash": {
    fallColors: ["golden-yellow"],
    fallColorMonths: [10],
  },
  "bald-cypress": {
    fallColors: ["copper","fall-orange"],
    fallColorMonths: [10,11],
  },
  "water-tupelo": {
    fallColors: ["scarlet","crimson"],
    fallColorMonths: [10],
  },
  "pond-cypress": {
    fallColors: ["copper","fall-orange"],
    fallColorMonths: [10,11],
  },

  // ─── ADDITIONAL PLANTS ──────────────────────────────────────────────────────
  "black-huckleberry": {
    fallColors: ["scarlet"],
    fallColorMonths: [10],
  },
  "red-chokeberry": {
    fallColors: ["scarlet","crimson"],
    fallColorMonths: [10,11],
  },
  "black-chokeberry": {
    fallColors: ["crimson","burgundy"],
    fallColorMonths: [10],
  },
  "large-fothergilla": {
    fallColors: ["scarlet","fall-orange","golden-yellow"],
    fallColorMonths: [10,11],
  },
  "american-smoketree": {
    fallColors: ["scarlet","fall-orange","crimson"],
    fallColorMonths: [10,11],
  },
  "mapleleaf-viburnum": {
    fallColors: ["crimson","burgundy"],
    fallColorMonths: [10],
  },
  "possumhaw-viburnum": {
    fallColors: ["crimson","burgundy"],
    fallColorMonths: [10,11],
  },
  "blackhaw-viburnum": {
    fallColors: ["burgundy","crimson"],
    fallColorMonths: [10,11],
  },
  "rusty-blackhaw": {
    fallColors: ["scarlet","burgundy"],
    fallColorMonths: [10,11],
  },
  "vernal-witch-hazel": {
    fallColors: ["golden-yellow"],
    fallColorMonths: [10],
  },
  "gray-dogwood": {
    fallColors: ["burgundy"],
    fallColorMonths: [10],
  },
  "sweetbells": {
    fallColors: ["scarlet","fall-orange"],
    fallColorMonths: [10],
  },

  // ─── ADDITIONAL PLANTS ──────────────────────────────────────────────────────
  "virginia-creeper": {
    fallColors: ["scarlet","crimson"],
    fallColorMonths: [10,11],
  },
  "bowmans-root": {
    fallColors: ["crimson","fall-orange"],
    fallColorMonths: [10,11],
  },

  // ─── ADDITIONAL PLANTS ──────────────────────────────────────────────────────
  "broomsedge-bluestem": {
    fallColors: ["copper","fall-orange"],
    fallColorMonths: [10,11],
  },
  "bushy-bluestem": {
    fallColors: ["fall-orange","copper"],
    fallColorMonths: [10,11],
  },
  "prairie-dropseed": {
    fallColors: ["golden-yellow","fall-orange"],
    fallColorMonths: [10,11],
  },
};
