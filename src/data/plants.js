export const BLOOM_COLOR_MAP = {
  white: "#f0ede6",
  cream: "#f5f0d8",
  pink: "#e8a0b0",
  "deep-pink": "#d4607a",
  red: "#c0392b",
  "brick-red": "#8b3a2a",
  magenta: "#c2185b",
  purple: "#7b5ea7",
  "blue-purple": "#6a5acd",
  violet: "#9575cd",
  blue: "#5b8dd9",
  "sky-blue": "#87ceeb",
  yellow: "#e8c84a",
  "golden-yellow": "#d4a017",
  orange: "#e07b39",
  lavender: "#b39ddb",
  "pale-lavender": "#c5b8e0",
  bronze: "#8b6914",
  maroon: "#6b2737",
  "red-orange": "#d95f2b",
  "pale-yellow": "#f0e68c",
  "blue-violet": "#7b52ab",
  // Fall foliage colors
  scarlet: "#c94040",
  crimson: "#8b1a1a",
  burgundy: "#6b2d3e",
  copper: "#b5651d",
  "fall-orange": "#cc6600",
};

export const BERRY_COLOR_MAP = {
  red: "#d94040",
  "red-orange": "#e06830",
  orange: "#e8892a",
  purple: "#8b3fa0",
  "purple-black": "#4a1f6e",
  "blue-black": "#2a2847",
  black: "#3a3a3a",
  "yellow-green": "#8fa832",
};

// For plants with no showy bloom (ferns, grasses), bloomMonths = []
// activeMonths = months when foliage/form is visually interesting
// dormantMonths = months with no significant above-ground interest

const plants = [
  // ─── TREES ──────────────────────────────────────────────────────────────────
  {
    id: "serviceberry",
    name: "Serviceberry",
    scientificName: "Amelanchier arborea",
    type: "tree",
    heightMin: 15,
    heightMax: 25,
    spreadMin: 15,
    spreadMax: 25,
    spreading: false,
    berryMonths: [6, 7],
    berryColor: "blue-black",
    sizeCategory: "large",
    sun: ["full-sun", "part-shade"],
    moisture: ["dry", "medium", "moist"],
    soil: ["well-drained", "loamy", "sandy"],
    bloomMonths: [3, 4],
    bloomColors: ["white"],
    activeMonths: [3, 4, 5, 6, 7, 8, 9, 10, 11],
    dormantMonths: [12, 1, 2],
    evergreen: false,
    description:
      "One of the earliest bloomers, serviceberry produces masses of white flowers before the leaves emerge. Edible berries ripen in June, beloved by birds. Stunning red-orange fall color. Excellent multi-season interest.",
    wildlifeValue: "Berries for birds; early nectar for pollinators",
    specialFeatures: ["fall-color", "early-bloom", "wildlife", "edible-berries"],
  },
  {
    id: "eastern-redbud",
    name: "Eastern Redbud",
    scientificName: "Cercis canadensis",
    type: "tree",
    heightMin: 15,
    heightMax: 30,
    spreadMin: 15,
    spreadMax: 35,
    spreading: false,
    berryMonths: [],
    berryColor: null,
    sizeCategory: "large",
    sun: ["full-sun", "part-shade"],
    moisture: ["dry", "medium"],
    soil: ["well-drained", "loamy", "clay"],
    bloomMonths: [3, 4],
    bloomColors: ["pink", "purple"],
    activeMonths: [3, 4, 5, 6, 7, 8, 9, 10],
    dormantMonths: [11, 12, 1, 2],
    evergreen: false,
    description:
      "A NC native beloved for its vivid magenta-pink flowers that line every branch before leaves emerge. Heart-shaped foliage turns yellow in fall. One of the showiest early spring trees in the eastern US.",
    wildlifeValue: "Nectar for early bees; seeds eaten by birds",
    specialFeatures: ["early-bloom", "fall-color", "four-season-interest"],
  },
  {
    id: "flowering-dogwood",
    name: "Flowering Dogwood",
    scientificName: "Cornus florida",
    type: "tree",
    heightMin: 15,
    heightMax: 30,
    spreadMin: 15,
    spreadMax: 25,
    spreading: false,
    berryMonths: [9, 10, 11],
    berryColor: "red",
    sizeCategory: "large",
    sun: ["part-shade", "full-sun"],
    moisture: ["medium", "moist"],
    soil: ["well-drained", "loamy", "rich"],
    bloomMonths: [4, 5],
    bloomColors: ["white", "pink"],
    activeMonths: [4, 5, 6, 7, 8, 9, 10, 11],
    dormantMonths: [12, 1, 2, 3],
    evergreen: false,
    description:
      "NC's state flower. Showy white bracts in spring, horizontal layered branching through summer, brilliant red berries and scarlet foliage in fall. Outstanding four-season interest. Performs best in partial shade with well-drained soil.",
    wildlifeValue: "Berries critical for migrating birds; host plant for spring azure butterfly",
    specialFeatures: ["fall-color", "winter-interest", "four-season-interest", "wildlife"],
  },
  {
    id: "carolina-silverbell",
    name: "Carolina Silverbell",
    scientificName: "Halesia carolina",
    type: "tree",
    heightMin: 20,
    heightMax: 40,
    spreadMin: 15,
    spreadMax: 30,
    spreading: false,
    berryMonths: [],
    berryColor: null,
    sizeCategory: "large",
    sun: ["part-shade", "full-shade"],
    moisture: ["medium", "moist"],
    soil: ["well-drained", "loamy", "rich", "sandy"],
    bloomMonths: [4, 5],
    bloomColors: ["white"],
    activeMonths: [4, 5, 6, 7, 8, 9, 10],
    dormantMonths: [11, 12, 1, 2, 3],
    evergreen: false,
    description:
      "Elegant small to medium tree with pendulous white bell-shaped flowers in spring. Best in woodland garden settings with moist, rich, acidic soil. Native to the Piedmont and Mountains of NC.",
    wildlifeValue: "Nectar source for early bumblebees",
    specialFeatures: ["shade-tolerant", "woodland-garden"],
  },
  {
    id: "fringe-tree",
    name: "American Fringetree",
    scientificName: "Chionanthus virginicus",
    type: "tree",
    heightMin: 12,
    heightMax: 20,
    spreadMin: 12,
    spreadMax: 20,
    spreading: false,
    berryMonths: [9, 10],
    berryColor: "blue-black",
    sizeCategory: "large",
    sun: ["full-sun", "part-shade"],
    moisture: ["medium", "moist"],
    soil: ["well-drained", "loamy", "clay"],
    bloomMonths: [5],
    bloomColors: ["white", "cream"],
    activeMonths: [5, 6, 7, 8, 9, 10],
    dormantMonths: [11, 12, 1, 2, 3, 4],
    evergreen: false,
    description:
      "Spectacular late spring bloomer with clouds of fragrant white fringe-like flowers. Female plants produce blue-black berries in fall. Adaptable to clay soils. Late to leaf out in spring.",
    wildlifeValue: "Berries eaten by birds; fragrant flowers attract pollinators",
    specialFeatures: ["fragrant", "clay-tolerant", "wildlife"],
  },
  {
    id: "blackgum",
    name: "Black Gum",
    scientificName: "Nyssa sylvatica",
    type: "tree",
    heightMin: 30,
    heightMax: 50,
    spreadMin: 20,
    spreadMax: 30,
    spreading: false,
    berryMonths: [9, 10],
    berryColor: "blue-black",
    sizeCategory: "large",
    sun: ["full-sun", "part-shade"],
    moisture: ["medium", "moist", "wet"],
    soil: ["well-drained", "loamy", "clay", "sandy"],
    bloomMonths: [],
    bloomColors: [],
    activeMonths: [4, 5, 6, 7, 8, 9, 10, 11],
    dormantMonths: [12, 1, 2, 3],
    evergreen: false,
    description:
      "Among the finest native trees for brilliant fall color—leaves turn deep scarlet, orange, and yellow. Adaptable to a wide range of moisture conditions. Small blue-black berries feed wildlife. Excellent long-lived specimen tree.",
    wildlifeValue: "Berries for birds and mammals; hollow cavities used for nesting",
    specialFeatures: ["fall-color", "four-season-interest", "wildlife"],
  },
  {
    id: "american-holly",
    name: "American Holly",
    scientificName: "Ilex opaca",
    type: "tree",
    heightMin: 15,
    heightMax: 50,
    spreadMin: 10,
    spreadMax: 20,
    spreading: false,
    berryMonths: [10, 11, 12, 1, 2, 3],
    berryColor: "red",
    sizeCategory: "large",
    sun: ["full-sun", "part-shade"],
    moisture: ["medium", "moist"],
    soil: ["well-drained", "loamy", "sandy", "clay"],
    bloomMonths: [5, 6],
    bloomColors: ["white"],
    activeMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    dormantMonths: [],
    evergreen: true,
    description:
      "Stately evergreen tree with glossy spiny leaves and brilliant red berries that persist through winter. A landscape anchor providing year-round structure. Requires male and female plants for berry production.",
    wildlifeValue: "Winter berries essential for cedar waxwings, mockingbirds, and other birds",
    specialFeatures: ["evergreen", "winter-interest", "wildlife", "four-season-interest"],
  },

  // ─── SHRUBS ─────────────────────────────────────────────────────────────────
  {
    id: "piedmont-azalea",
    name: "Piedmont Azalea",
    scientificName: "Rhododendron canescens",
    type: "shrub",
    heightMin: 6,
    heightMax: 15,
    spreadMin: 6,
    spreadMax: 10,
    spreading: false,
    berryMonths: [],
    berryColor: null,
    sizeCategory: "large",
    sun: ["part-shade", "full-shade"],
    moisture: ["medium", "moist"],
    soil: ["well-drained", "loamy", "sandy", "rich"],
    bloomMonths: [3, 4],
    bloomColors: ["pink", "white"],
    activeMonths: [3, 4, 5, 6, 7, 8, 9, 10],
    dormantMonths: [11, 12, 1, 2],
    evergreen: false,
    description:
      "A fragrant, elegant native azalea that blooms before or with the leaves in early spring. Delicate pink to white tubular flowers. Thrives in woodland edges and moist, acidic soils. Highly deer resistant.",
    wildlifeValue: "Nectar for hummingbirds and butterflies",
    specialFeatures: ["fragrant", "early-bloom", "deer-resistant", "woodland-garden"],
  },
  {
    id: "fothergilla",
    name: "Fothergilla",
    scientificName: "Fothergilla gardenii",
    type: "shrub",
    heightMin: 2,
    heightMax: 5,
    spreadMin: 2,
    spreadMax: 5,
    spreading: false,
    berryMonths: [],
    berryColor: null,
    sizeCategory: "medium",
    sun: ["full-sun", "part-shade"],
    moisture: ["medium", "moist"],
    soil: ["well-drained", "loamy", "sandy", "rich"],
    bloomMonths: [4, 5],
    bloomColors: ["white", "cream"],
    activeMonths: [4, 5, 6, 7, 8, 9, 10, 11],
    dormantMonths: [12, 1, 2, 3],
    evergreen: false,
    description:
      "Bottlebrush-like white flowers with a honey fragrance in spring. Exceptional multi-season interest: spring flowers, clean summer foliage, then spectacular fall color in yellow, orange, and scarlet. Compact form for mixed borders.",
    wildlifeValue: "Pollen source for native bees",
    specialFeatures: ["fall-color", "fragrant", "four-season-interest"],
  },
  {
    id: "sweetshrub",
    name: "Sweetshrub",
    scientificName: "Calycanthus floridus",
    type: "shrub",
    heightMin: 5,
    heightMax: 9,
    spreadMin: 6,
    spreadMax: 12,
    spreading: true,
    berryMonths: [],
    berryColor: null,
    sizeCategory: "medium",
    sun: ["full-sun", "part-shade", "full-shade"],
    moisture: ["medium", "moist"],
    soil: ["well-drained", "loamy", "rich", "clay"],
    bloomMonths: [4, 5, 6],
    bloomColors: ["brick-red", "bronze"],
    activeMonths: [4, 5, 6, 7, 8, 9, 10],
    dormantMonths: [11, 12, 1, 2, 3],
    evergreen: false,
    description:
      "An old-fashioned native shrub beloved for its uniquely fragrant burgundy-red flowers in spring and early summer. Glossy dark green foliage through summer. Very adaptable—tolerates shade and clay. Fragrance intensifies on warm days.",
    wildlifeValue: "Flowers trap and release beetles as pollinators",
    specialFeatures: ["fragrant", "shade-tolerant", "clay-tolerant"],
  },
  {
    id: "mountain-laurel",
    name: "Mountain Laurel",
    scientificName: "Kalmia latifolia",
    type: "shrub",
    heightMin: 5,
    heightMax: 15,
    spreadMin: 5,
    spreadMax: 15,
    spreading: false,
    berryMonths: [],
    berryColor: null,
    sizeCategory: "large",
    sun: ["part-shade", "full-shade"],
    moisture: ["medium", "moist"],
    soil: ["well-drained", "loamy", "sandy", "rich"],
    bloomMonths: [5, 6],
    bloomColors: ["pink", "white"],
    activeMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    dormantMonths: [],
    evergreen: true,
    description:
      "NC's state wildflower. Spectacular clusters of intricately patterned pink and white flowers in late spring. Leathery evergreen foliage provides year-round structure. Native to mountain and piedmont woodlands. Deer resistant.",
    wildlifeValue: "Nectar for bumblebees with specialized flower mechanics",
    specialFeatures: ["evergreen", "deer-resistant", "woodland-garden", "four-season-interest"],
  },
  {
    id: "virginia-sweetspire",
    name: "Virginia Sweetspire",
    scientificName: "Itea virginica",
    type: "shrub",
    heightMin: 3,
    heightMax: 6,
    spreadMin: 3,
    spreadMax: 5,
    spreading: true,
    berryMonths: [],
    berryColor: null,
    sizeCategory: "medium",
    sun: ["full-sun", "part-shade", "full-shade"],
    moisture: ["medium", "moist", "wet"],
    soil: ["well-drained", "loamy", "clay", "rich"],
    bloomMonths: [6, 7],
    bloomColors: ["white"],
    activeMonths: [5, 6, 7, 8, 9, 10, 11],
    dormantMonths: [12, 1, 2, 3, 4],
    evergreen: false,
    description:
      "A workhorse native shrub with fragrant white flower spikes in summer, followed by brilliant crimson-purple fall color that persists late into the season. Spreads slowly to form colonies. Excellent for wet areas and rain gardens.",
    wildlifeValue: "Nectar for bees and butterflies",
    specialFeatures: ["fall-color", "fragrant", "shade-tolerant", "wet-tolerant", "rain-garden"],
  },
  {
    id: "oakleaf-hydrangea",
    name: "Oakleaf Hydrangea",
    scientificName: "Hydrangea quercifolia",
    type: "shrub",
    heightMin: 4,
    heightMax: 8,
    spreadMin: 4,
    spreadMax: 6,
    spreading: false,
    berryMonths: [],
    berryColor: null,
    sizeCategory: "medium",
    sun: ["part-shade", "full-shade", "full-sun"],
    moisture: ["medium", "moist"],
    soil: ["well-drained", "loamy", "rich"],
    bloomMonths: [6, 7],
    bloomColors: ["white", "cream"],
    activeMonths: [5, 6, 7, 8, 9, 10, 11, 12],
    dormantMonths: [1, 2, 3, 4],
    evergreen: false,
    description:
      "Outstanding four-season shrub: large white flower panicles age to parchment in late summer, distinctive oak-shaped leaves turn burgundy in fall, exfoliating cinnamon-colored bark provides winter interest.",
    wildlifeValue: "Nesting cover; seeds eaten by birds",
    specialFeatures: ["fall-color", "winter-interest", "four-season-interest", "shade-tolerant"],
  },
  {
    id: "buttonbush",
    name: "Buttonbush",
    scientificName: "Cephalanthus occidentalis",
    type: "shrub",
    heightMin: 5,
    heightMax: 12,
    spreadMin: 5,
    spreadMax: 8,
    spreading: false,
    berryMonths: [],
    berryColor: null,
    sizeCategory: "large",
    sun: ["full-sun", "part-shade"],
    moisture: ["moist", "wet"],
    soil: ["loamy", "clay"],
    bloomMonths: [7, 8],
    bloomColors: ["white"],
    activeMonths: [5, 6, 7, 8, 9, 10],
    dormantMonths: [11, 12, 1, 2, 3, 4],
    evergreen: false,
    description:
      "Unique spherical white flower heads bloom in midsummer, providing nectar when few other shrubs are flowering. Essential for moist and wet sites, rain gardens, and pond edges. Highly attractive to bees, butterflies, and hummingbirds.",
    wildlifeValue: "Top nectar source for butterflies; seeds eaten by waterfowl",
    specialFeatures: ["wet-tolerant", "rain-garden", "wildlife", "midsummer-bloom"],
  },
  {
    id: "beautyberry",
    name: "American Beautyberry",
    scientificName: "Callicarpa americana",
    type: "shrub",
    heightMin: 4,
    heightMax: 8,
    spreadMin: 4,
    spreadMax: 8,
    spreading: false,
    berryMonths: [9, 10, 11],
    berryColor: "purple",
    sizeCategory: "medium",
    sun: ["full-sun", "part-shade"],
    moisture: ["dry", "medium"],
    soil: ["well-drained", "loamy", "sandy"],
    bloomMonths: [6, 7],
    bloomColors: ["pink", "pale-lavender"],
    activeMonths: [5, 6, 7, 8, 9, 10, 11],
    dormantMonths: [12, 1, 2, 3, 4],
    evergreen: false,
    description:
      "Grown primarily for its extraordinary clusters of metallic purple berries that line the arching stems in fall—a stunning focal point unlike any other shrub. Small pinkish-lavender flowers are pretty but modest. Berries persist into winter.",
    wildlifeValue: "Berries eaten by more than 40 bird species; whitetail deer browse foliage",
    specialFeatures: ["fall-color", "winter-interest", "wildlife", "deer-resistant"],
  },
  {
    id: "inkberry",
    name: "Inkberry",
    scientificName: "Ilex glabra",
    type: "shrub",
    heightMin: 4,
    heightMax: 8,
    spreadMin: 6,
    spreadMax: 10,
    spreading: true,
    berryMonths: [9, 10, 11, 12, 1, 2],
    berryColor: "black",
    sizeCategory: "medium",
    sun: ["full-sun", "part-shade"],
    moisture: ["medium", "moist", "wet"],
    soil: ["loamy", "clay", "sandy"],
    bloomMonths: [5, 6],
    bloomColors: ["white"],
    activeMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    dormantMonths: [],
    evergreen: true,
    description:
      "Tough, adaptable evergreen shrub native to coastal plains and piedmont wetlands. Small white flowers in spring; glossy black berries persist through winter. Excellent for difficult wet sites, hedges, and foundation plantings.",
    wildlifeValue: "Winter berries for birds; larval host for Henry's elfin butterfly",
    specialFeatures: ["evergreen", "winter-interest", "wet-tolerant", "wildlife"],
  },
  {
    id: "possumhaw",
    name: "Possumhaw Holly",
    scientificName: "Ilex decidua",
    type: "shrub",
    heightMin: 7,
    heightMax: 15,
    spreadMin: 7,
    spreadMax: 12,
    spreading: false,
    berryMonths: [11, 12, 1, 2, 3],
    berryColor: "red",
    sizeCategory: "large",
    sun: ["full-sun", "part-shade"],
    moisture: ["medium", "moist"],
    soil: ["well-drained", "loamy", "clay"],
    bloomMonths: [4, 5],
    bloomColors: ["white"],
    activeMonths: [4, 5, 6, 7, 8, 9, 10, 11, 12, 1],
    dormantMonths: [2, 3],
    evergreen: false,
    description:
      "Deciduous holly with inconspicuous white spring flowers, but spectacular bright red-orange berries that coat the bare branches all winter. Outstanding winter interest plant. Female plants require a male pollinator nearby.",
    wildlifeValue: "Winter berries for bluebirds, cedar waxwings, and other birds",
    specialFeatures: ["winter-interest", "wildlife", "four-season-interest"],
  },
  {
    id: "witch-hazel",
    name: "Common Witch Hazel",
    scientificName: "Hamamelis virginiana",
    type: "shrub",
    heightMin: 10,
    heightMax: 20,
    spreadMin: 10,
    spreadMax: 20,
    spreading: false,
    berryMonths: [],
    berryColor: null,
    sizeCategory: "large",
    sun: ["part-shade", "full-shade", "full-sun"],
    moisture: ["medium", "moist"],
    soil: ["well-drained", "loamy", "rich"],
    bloomMonths: [10, 11, 12],
    bloomColors: ["yellow", "golden-yellow"],
    activeMonths: [4, 5, 6, 7, 8, 9, 10, 11, 12],
    dormantMonths: [1, 2, 3],
    evergreen: false,
    description:
      "Unique among native shrubs for its spidery yellow flowers that bloom in late fall and early winter—often while leaves are still present or just after they fall. Fragrant. A true conversation piece in the winter garden. Excellent fall color.",
    wildlifeValue: "Late-season nectar for flies and native bees",
    specialFeatures: ["winter-bloom", "fragrant", "fall-color", "shade-tolerant", "four-season-interest"],
  },

  // ─── PERENNIALS ─────────────────────────────────────────────────────────────
  {
    id: "columbine",
    name: "Wild Columbine",
    scientificName: "Aquilegia canadensis",
    type: "perennial",
    heightMin: 1,
    heightMax: 3,
    spreadMin: 0.75,
    spreadMax: 1.5,
    spreading: true,
    berryMonths: [],
    berryColor: null,
    sizeCategory: "small",
    sun: ["part-shade", "full-shade", "full-sun"],
    moisture: ["dry", "medium"],
    soil: ["well-drained", "loamy", "rocky"],
    bloomMonths: [4, 5],
    bloomColors: ["red", "orange"],
    activeMonths: [3, 4, 5, 6],
    dormantMonths: [7, 8, 9, 10, 11, 12, 1, 2],
    evergreen: false,
    description:
      "Nodding red and yellow spurred flowers are irresistible to hummingbirds in spring. Ferny blue-green foliage. Goes dormant by midsummer. Self-seeds freely to naturalize. Excellent under deciduous trees.",
    wildlifeValue: "Primary early hummingbird nectar source; larval host for columbine duskywing skipper",
    specialFeatures: ["hummingbird", "early-bloom", "shade-tolerant", "self-seeds"],
  },
  {
    id: "fire-pink",
    name: "Fire Pink",
    scientificName: "Silene virginica",
    type: "perennial",
    heightMin: 1,
    heightMax: 2,
    spreadMin: 0.5,
    spreadMax: 1,
    spreading: true,
    berryMonths: [],
    berryColor: null,
    sizeCategory: "small",
    sun: ["part-shade", "full-sun"],
    moisture: ["dry", "medium"],
    soil: ["well-drained", "loamy", "rocky", "sandy"],
    bloomMonths: [4, 5, 6],
    bloomColors: ["red"],
    activeMonths: [3, 4, 5, 6, 7],
    dormantMonths: [8, 9, 10, 11, 12, 1, 2],
    evergreen: false,
    description:
      "Brilliant scarlet five-petaled flowers on sticky stems attract hummingbirds in spring. Short-lived but self-seeds readily. Best in rocky woodland edges. A jewel of the native garden.",
    wildlifeValue: "Nectar for hummingbirds and butterflies",
    specialFeatures: ["hummingbird", "early-bloom", "self-seeds"],
  },
  {
    id: "spiderwort",
    name: "Virginia Spiderwort",
    scientificName: "Tradescantia virginiana",
    type: "perennial",
    heightMin: 1,
    heightMax: 2,
    spreadMin: 1,
    spreadMax: 2,
    spreading: true,
    berryMonths: [],
    berryColor: null,
    sizeCategory: "small",
    sun: ["full-sun", "part-shade"],
    moisture: ["medium", "moist"],
    soil: ["well-drained", "loamy", "clay", "sandy"],
    bloomMonths: [4, 5, 6],
    bloomColors: ["blue-purple", "violet"],
    activeMonths: [3, 4, 5, 6, 7],
    dormantMonths: [8, 9, 10, 11, 12, 1, 2],
    evergreen: false,
    description:
      "Cheerful three-petaled blue-purple flowers bloom for weeks in spring. Each flower lasts only one morning but new buds open continuously. Goes dormant in summer heat—good for layering with summer bloomers.",
    wildlifeValue: "Pollen for native bumblebees",
    specialFeatures: ["early-bloom", "clay-tolerant"],
  },
  {
    id: "wild-blue-indigo",
    name: "Wild Blue Indigo",
    scientificName: "Baptisia australis",
    type: "perennial",
    heightMin: 2,
    heightMax: 4,
    spreadMin: 2,
    spreadMax: 4,
    spreading: false,
    berryMonths: [],
    berryColor: null,
    sizeCategory: "medium",
    sun: ["full-sun", "part-shade"],
    moisture: ["dry", "medium"],
    soil: ["well-drained", "loamy", "sandy", "clay"],
    bloomMonths: [4, 5, 6],
    bloomColors: ["blue-purple", "blue"],
    activeMonths: [4, 5, 6, 7, 8, 9, 10],
    dormantMonths: [11, 12, 1, 2, 3],
    evergreen: false,
    description:
      "Magnificent lupine-like spikes of deep blue-indigo flowers rise above bold blue-green foliage. Inflated seedpods rattle in fall wind. Extremely long-lived and drought-tolerant once established. Slow to establish but spectacular thereafter.",
    wildlifeValue: "Host plant for wild indigo duskywing, frosted elfin, and orange sulfur butterflies",
    specialFeatures: ["drought-tolerant", "structural", "wildlife", "clay-tolerant"],
  },
  {
    id: "butterfly-weed",
    name: "Butterfly Weed",
    scientificName: "Asclepias tuberosa",
    type: "perennial",
    heightMin: 1,
    heightMax: 2,
    spreadMin: 1,
    spreadMax: 2,
    spreading: false,
    berryMonths: [],
    berryColor: null,
    sizeCategory: "small",
    sun: ["full-sun"],
    moisture: ["dry", "medium"],
    soil: ["well-drained", "sandy", "loamy"],
    bloomMonths: [6, 7, 8],
    bloomColors: ["orange", "yellow"],
    activeMonths: [5, 6, 7, 8, 9, 10],
    dormantMonths: [11, 12, 1, 2, 3, 4],
    evergreen: false,
    description:
      "Brilliant orange flower clusters are one of the finest nectar sources for butterflies in the summer garden. Essential milkweed for monarch butterfly. Drought-tolerant once established. Slow to emerge in spring—mark location to avoid disturbing.",
    wildlifeValue: "Host plant for monarch butterfly; top nectar source for swallowtails and fritillaries",
    specialFeatures: ["drought-tolerant", "wildlife", "monarch", "pollinator-magnet"],
  },
  {
    id: "swamp-milkweed",
    name: "Swamp Milkweed",
    scientificName: "Asclepias incarnata",
    type: "perennial",
    heightMin: 2,
    heightMax: 4,
    spreadMin: 1,
    spreadMax: 2,
    spreading: false,
    berryMonths: [],
    berryColor: null,
    sizeCategory: "medium",
    sun: ["full-sun"],
    moisture: ["moist", "wet"],
    soil: ["loamy", "clay"],
    bloomMonths: [6, 7, 8],
    bloomColors: ["pink", "deep-pink"],
    activeMonths: [5, 6, 7, 8, 9, 10],
    dormantMonths: [11, 12, 1, 2, 3, 4],
    evergreen: false,
    description:
      "The milkweed for moist and wet gardens. Rosy-pink flower clusters bloom for weeks in summer, filling the air with vanilla fragrance. Excellent in rain gardens and pond edges. Monarch host plant.",
    wildlifeValue: "Host plant for monarch butterfly; excellent nectar source for bees and butterflies",
    specialFeatures: ["wet-tolerant", "rain-garden", "wildlife", "monarch", "fragrant"],
  },
  {
    id: "wild-bergamot",
    name: "Wild Bergamot",
    scientificName: "Monarda fistulosa",
    type: "perennial",
    heightMin: 2,
    heightMax: 4,
    spreadMin: 2,
    spreadMax: 3,
    spreading: true,
    berryMonths: [],
    berryColor: null,
    sizeCategory: "medium",
    sun: ["full-sun", "part-shade"],
    moisture: ["dry", "medium"],
    soil: ["well-drained", "loamy", "sandy", "clay"],
    bloomMonths: [6, 7, 8],
    bloomColors: ["lavender", "pale-lavender"],
    activeMonths: [5, 6, 7, 8, 9],
    dormantMonths: [10, 11, 12, 1, 2, 3, 4],
    evergreen: false,
    description:
      "Lavender-pink flower clusters with shaggy, spidery petals. Intensely aromatic foliage. More drought-tolerant than its cousin Bee Balm, and less prone to powdery mildew. Exceptional for pollinators.",
    wildlifeValue: "Top nectar source for native bees, hummingbirds, and sphinx moths",
    specialFeatures: ["drought-tolerant", "fragrant", "pollinator-magnet"],
  },
  {
    id: "bee-balm",
    name: "Bee Balm",
    scientificName: "Monarda didyma",
    type: "perennial",
    heightMin: 2,
    heightMax: 4,
    spreadMin: 2,
    spreadMax: 4,
    spreading: true,
    berryMonths: [],
    berryColor: null,
    sizeCategory: "medium",
    sun: ["full-sun", "part-shade"],
    moisture: ["medium", "moist"],
    soil: ["loamy", "rich", "clay"],
    bloomMonths: [7, 8],
    bloomColors: ["red", "magenta"],
    activeMonths: [5, 6, 7, 8, 9],
    dormantMonths: [10, 11, 12, 1, 2, 3, 4],
    evergreen: false,
    description:
      "Bold, shaggy scarlet flower heads are magnets for hummingbirds in midsummer. Native to stream banks and moist woodland edges in the NC mountains. Spreads by runners to form colonies. Best with good air circulation.",
    wildlifeValue: "Primary hummingbird nectar source in midsummer; also attracts bumblebees",
    specialFeatures: ["hummingbird", "pollinator-magnet", "midsummer-bloom"],
  },
  {
    id: "purple-coneflower",
    name: "Purple Coneflower",
    scientificName: "Echinacea purpurea",
    type: "perennial",
    heightMin: 2,
    heightMax: 4,
    spreadMin: 1.5,
    spreadMax: 2.5,
    spreading: false,
    berryMonths: [],
    berryColor: null,
    sizeCategory: "medium",
    sun: ["full-sun"],
    moisture: ["dry", "medium"],
    soil: ["well-drained", "loamy", "clay"],
    bloomMonths: [6, 7, 8, 9],
    bloomColors: ["purple", "pink"],
    activeMonths: [5, 6, 7, 8, 9, 10, 11],
    dormantMonths: [12, 1, 2, 3, 4],
    evergreen: false,
    description:
      "The quintessential native perennial. Rosy-purple daisy-like flowers with prominent orange cones bloom prolifically for months. Drought-tolerant once established. Seed heads feed goldfinches through winter. Easy and long-lived.",
    wildlifeValue: "Top nectar source for bees and butterflies; winter seeds for goldfinches",
    specialFeatures: ["drought-tolerant", "wildlife", "winter-interest", "pollinator-magnet"],
  },
  {
    id: "black-eyed-susan",
    name: "Black-eyed Susan",
    scientificName: "Rudbeckia fulgida",
    type: "perennial",
    heightMin: 1,
    heightMax: 3,
    spreadMin: 1,
    spreadMax: 2,
    spreading: true,
    berryMonths: [],
    berryColor: null,
    sizeCategory: "small",
    sun: ["full-sun"],
    moisture: ["dry", "medium"],
    soil: ["well-drained", "loamy", "clay", "sandy"],
    bloomMonths: [7, 8, 9],
    bloomColors: ["yellow", "golden-yellow"],
    activeMonths: [5, 6, 7, 8, 9, 10, 11],
    dormantMonths: [12, 1, 2, 3, 4],
    evergreen: false,
    description:
      "Cheerful golden-yellow daisies with dark brown centers bloom for months in summer. Extremely adaptable and easy to grow. Spreads to form showy masses. Seed heads persist through winter feeding birds. A workhorse of the native garden.",
    wildlifeValue: "Nectar for bees and butterflies; winter seeds for finches",
    specialFeatures: ["drought-tolerant", "wildlife", "winter-interest"],
  },
  {
    id: "cardinal-flower",
    name: "Cardinal Flower",
    scientificName: "Lobelia cardinalis",
    type: "perennial",
    heightMin: 2,
    heightMax: 4,
    spreadMin: 1,
    spreadMax: 1.5,
    spreading: false,
    berryMonths: [],
    berryColor: null,
    sizeCategory: "medium",
    sun: ["full-sun", "part-shade"],
    moisture: ["moist", "wet"],
    soil: ["loamy", "rich", "clay"],
    bloomMonths: [7, 8, 9],
    bloomColors: ["red"],
    activeMonths: [4, 5, 6, 7, 8, 9],
    dormantMonths: [10, 11, 12, 1, 2, 3],
    evergreen: false,
    description:
      "Brilliant scarlet spires are the most effective hummingbird attractor in the native plant world. Flowers precisely as ruby-throated hummingbirds are preparing for southward migration. Native to stream banks and moist woodland edges.",
    wildlifeValue: "Critically important hummingbird nectar plant; swallowtail butterflies also visit",
    specialFeatures: ["hummingbird", "wet-tolerant", "wildlife"],
  },
  {
    id: "green-headed-coneflower",
    name: "Green-headed Coneflower",
    scientificName: "Rudbeckia laciniata",
    type: "perennial",
    heightMin: 4,
    heightMax: 8,
    spreadMin: 3,
    spreadMax: 5,
    spreading: true,
    berryMonths: [],
    berryColor: null,
    sizeCategory: "large",
    sun: ["full-sun", "part-shade"],
    moisture: ["medium", "moist"],
    soil: ["loamy", "rich", "clay"],
    bloomMonths: [7, 8, 9],
    bloomColors: ["yellow"],
    activeMonths: [5, 6, 7, 8, 9, 10],
    dormantMonths: [11, 12, 1, 2, 3, 4],
    evergreen: false,
    description:
      "Towering summer perennial with drooping yellow petals around a distinctive green cone. Makes a dramatic back-of-border specimen. Native to moist woodland edges and stream banks. Spreads to form large colonies.",
    wildlifeValue: "Nectar for bees; seeds eaten by goldfinches",
    specialFeatures: ["structural", "midsummer-bloom", "wildlife"],
  },
  {
    id: "joe-pye-weed",
    name: "Joe Pye Weed",
    scientificName: "Eutrochium purpureum",
    type: "perennial",
    heightMin: 4,
    heightMax: 7,
    spreadMin: 2,
    spreadMax: 4,
    spreading: false,
    berryMonths: [],
    berryColor: null,
    sizeCategory: "large",
    sun: ["full-sun", "part-shade"],
    moisture: ["medium", "moist"],
    soil: ["loamy", "rich", "clay"],
    bloomMonths: [7, 8, 9],
    bloomColors: ["pink", "purple"],
    activeMonths: [5, 6, 7, 8, 9, 10],
    dormantMonths: [11, 12, 1, 2, 3, 4],
    evergreen: false,
    description:
      "Towering native with massive domed clusters of mauve-pink flowers in late summer. A hub of butterfly activity when in bloom. Vanilla-scented flowers. Bold architectural presence in the back of the border.",
    wildlifeValue: "One of the top nectar plants for monarch, tiger swallowtail, and fritillary butterflies",
    specialFeatures: ["structural", "wildlife", "fragrant", "pollinator-magnet"],
  },
  {
    id: "ironweed",
    name: "New York Ironweed",
    scientificName: "Vernonia noveboracensis",
    type: "perennial",
    heightMin: 4,
    heightMax: 7,
    spreadMin: 2,
    spreadMax: 3,
    spreading: false,
    berryMonths: [],
    berryColor: null,
    sizeCategory: "large",
    sun: ["full-sun"],
    moisture: ["medium", "moist"],
    soil: ["loamy", "clay"],
    bloomMonths: [8, 9],
    bloomColors: ["purple", "magenta"],
    activeMonths: [5, 6, 7, 8, 9, 10],
    dormantMonths: [11, 12, 1, 2, 3, 4],
    evergreen: false,
    description:
      "Brilliant royal purple flower clusters in late summer create a striking contrast with the golden yellows of goldenrod. Ironweed and goldenrod planted together is a classic late-season native combination beloved by butterflies.",
    wildlifeValue: "Top late-season nectar source for monarchs and many other butterflies",
    specialFeatures: ["wildlife", "pollinator-magnet", "structural"],
  },
  {
    id: "turtlehead",
    name: "White Turtlehead",
    scientificName: "Chelone glabra",
    type: "perennial",
    heightMin: 2,
    heightMax: 3,
    spreadMin: 1.5,
    spreadMax: 2.5,
    spreading: false,
    berryMonths: [],
    berryColor: null,
    sizeCategory: "small",
    sun: ["part-shade", "full-sun"],
    moisture: ["moist", "wet"],
    soil: ["loamy", "rich", "clay"],
    bloomMonths: [8, 9],
    bloomColors: ["white", "pink"],
    activeMonths: [5, 6, 7, 8, 9, 10],
    dormantMonths: [11, 12, 1, 2, 3, 4],
    evergreen: false,
    description:
      "Snapdragon-like white (sometimes pink-tinged) flowers in late summer. Essential host plant for the Baltimore checkerspot butterfly. Thrives in consistently moist soil along stream edges and in rain gardens.",
    wildlifeValue: "Host plant for Baltimore checkerspot butterfly; bumblebees force flowers open to access nectar",
    specialFeatures: ["wet-tolerant", "rain-garden", "wildlife", "shade-tolerant"],
  },
  {
    id: "blue-lobelia",
    name: "Great Blue Lobelia",
    scientificName: "Lobelia siphilitica",
    type: "perennial",
    heightMin: 2,
    heightMax: 3,
    spreadMin: 0.5,
    spreadMax: 1.5,
    spreading: false,
    berryMonths: [],
    berryColor: null,
    sizeCategory: "small",
    sun: ["part-shade", "full-sun"],
    moisture: ["moist", "wet"],
    soil: ["loamy", "rich", "clay"],
    bloomMonths: [8, 9],
    bloomColors: ["blue", "sky-blue"],
    activeMonths: [4, 5, 6, 7, 8, 9],
    dormantMonths: [10, 11, 12, 1, 2, 3],
    evergreen: false,
    description:
      "Rich blue flower spikes in late summer. A beautiful companion to Cardinal Flower—the two often grow together in the wild along stream banks. Excellent for rain gardens and pond edges. Self-seeds in moist conditions.",
    wildlifeValue: "Nectar for hummingbirds, bumblebees, and swallowtail butterflies",
    specialFeatures: ["wet-tolerant", "rain-garden", "hummingbird", "self-seeds"],
  },
  {
    id: "goldenrod",
    name: "Tall Goldenrod",
    scientificName: "Solidago altissima",
    type: "perennial",
    heightMin: 3,
    heightMax: 6,
    spreadMin: 2,
    spreadMax: 4,
    spreading: true,
    berryMonths: [],
    berryColor: null,
    sizeCategory: "medium",
    sun: ["full-sun"],
    moisture: ["dry", "medium"],
    soil: ["well-drained", "loamy", "clay", "sandy"],
    bloomMonths: [8, 9, 10],
    bloomColors: ["yellow", "golden-yellow"],
    activeMonths: [5, 6, 7, 8, 9, 10, 11],
    dormantMonths: [12, 1, 2, 3, 4],
    evergreen: false,
    description:
      "The undeservedly maligned goldenrod—it does not cause hay fever (ragweed does). One of the most ecologically important native plants, supporting over 100 species of bees and countless butterflies in late summer. Plant it boldly.",
    wildlifeValue: "Supports 100+ bee species and countless butterflies; critical fall nectar source for monarchs",
    specialFeatures: ["drought-tolerant", "wildlife", "pollinator-magnet", "wildlife-value"],
  },
  {
    id: "new-england-aster",
    name: "New England Aster",
    scientificName: "Symphyotrichum novae-angliae",
    type: "perennial",
    heightMin: 3,
    heightMax: 6,
    spreadMin: 2,
    spreadMax: 4,
    spreading: true,
    berryMonths: [],
    berryColor: null,
    sizeCategory: "medium",
    sun: ["full-sun"],
    moisture: ["medium", "moist"],
    soil: ["loamy", "clay"],
    bloomMonths: [9, 10],
    bloomColors: ["purple", "blue-purple"],
    activeMonths: [5, 6, 7, 8, 9, 10],
    dormantMonths: [11, 12, 1, 2, 3, 4],
    evergreen: false,
    description:
      "Spectacular masses of rich purple-violet daisy flowers in fall. One of the last great nectar sources of the season, essential for monarch butterflies preparing for migration. Pairs beautifully with goldenrod.",
    wildlifeValue: "Critical fall nectar source for monarch butterflies; supports specialist native bees",
    specialFeatures: ["fall-color", "wildlife", "pollinator-magnet", "monarch"],
  },

  // ─── GRASSES ────────────────────────────────────────────────────────────────
  {
    id: "little-bluestem",
    name: "Little Bluestem",
    scientificName: "Schizachyrium scoparium",
    type: "grass",
    heightMin: 2,
    heightMax: 4,
    spreadMin: 1,
    spreadMax: 2,
    spreading: false,
    berryMonths: [],
    berryColor: null,
    sizeCategory: "medium",
    sun: ["full-sun"],
    moisture: ["dry", "medium"],
    soil: ["well-drained", "sandy", "loamy", "rocky"],
    bloomMonths: [8, 9],
    bloomColors: ["white", "cream"],
    activeMonths: [4, 5, 6, 7, 8, 9, 10, 11, 12, 1],
    dormantMonths: [2, 3],
    evergreen: false,
    description:
      "One of the finest native grasses. Blue-green stems mature to brilliant copper-red in fall, holding through winter as a warm russet presence. Silky white seed heads catch winter light. Exceptional year-round interest. Extremely drought-tolerant.",
    wildlifeValue: "Seeds for sparrows and other birds; dense clumps provide nesting cover",
    specialFeatures: ["fall-color", "winter-interest", "drought-tolerant", "four-season-interest"],
  },
  {
    id: "switchgrass",
    name: "Switchgrass",
    scientificName: "Panicum virgatum",
    type: "grass",
    heightMin: 3,
    heightMax: 6,
    spreadMin: 2,
    spreadMax: 3,
    spreading: false,
    berryMonths: [],
    berryColor: null,
    sizeCategory: "medium",
    sun: ["full-sun"],
    moisture: ["dry", "medium", "moist", "wet"],
    soil: ["well-drained", "loamy", "clay", "sandy"],
    bloomMonths: [7, 8],
    bloomColors: ["cream", "bronze"],
    activeMonths: [4, 5, 6, 7, 8, 9, 10, 11, 12],
    dormantMonths: [1, 2, 3],
    evergreen: false,
    description:
      "Airy, delicate flower panicles in summer; red to golden fall color; persistent winter form. Exceptionally adaptable—tolerates wet to dry soils. Bold architectural presence in the border. Many cultivars available, but straight species has highest wildlife value.",
    wildlifeValue: "Seeds for birds; dense clumps used for nesting by birds; larval host for several skippers",
    specialFeatures: ["fall-color", "winter-interest", "drought-tolerant", "wet-tolerant", "four-season-interest"],
  },
  {
    id: "river-oats",
    name: "River Oats",
    scientificName: "Chasmanthium latifolium",
    type: "grass",
    heightMin: 2,
    heightMax: 4,
    spreadMin: 2,
    spreadMax: 4,
    spreading: true,
    berryMonths: [],
    berryColor: null,
    sizeCategory: "medium",
    sun: ["part-shade", "full-shade", "full-sun"],
    moisture: ["medium", "moist"],
    soil: ["loamy", "rich", "clay"],
    bloomMonths: [7, 8, 9],
    bloomColors: ["bronze", "cream"],
    activeMonths: [4, 5, 6, 7, 8, 9, 10, 11, 12],
    dormantMonths: [1, 2, 3],
    evergreen: false,
    description:
      "The best native grass for shade. Flat, oat-like seed heads dangle gracefully and rustle in the breeze. Green through summer, bronze in fall, bleached tan through winter. Self-seeds freely—give it room or deadhead to control spread.",
    wildlifeValue: "Seeds eaten by birds; larval host for several skipper butterflies",
    specialFeatures: ["shade-tolerant", "fall-color", "winter-interest"],
  },

  // ─── FERNS ──────────────────────────────────────────────────────────────────
  {
    id: "christmas-fern",
    name: "Christmas Fern",
    scientificName: "Polystichum acrostichoides",
    type: "fern",
    heightMin: 1,
    heightMax: 2,
    spreadMin: 1,
    spreadMax: 2,
    spreading: false,
    berryMonths: [],
    berryColor: null,
    sizeCategory: "small",
    sun: ["part-shade", "full-shade"],
    moisture: ["dry", "medium", "moist"],
    soil: ["well-drained", "loamy", "rich", "rocky"],
    bloomMonths: [],
    bloomColors: [],
    activeMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    dormantMonths: [],
    evergreen: true,
    description:
      "The most reliable and adaptable native fern for the landscape. Glossy dark green fronds remain evergreen through winter. Anchors slopes to prevent erosion. Indispensable in the shade garden for year-round structure. Tolerates dry shade.",
    wildlifeValue: "Dense fronds provide winter cover for small mammals and ground-nesting birds",
    specialFeatures: ["evergreen", "shade-tolerant", "drought-tolerant", "erosion-control", "four-season-interest"],
  },
  {
    id: "cinnamon-fern",
    name: "Cinnamon Fern",
    scientificName: "Osmundastrum cinnamomeum",
    type: "fern",
    heightMin: 2,
    heightMax: 5,
    spreadMin: 2,
    spreadMax: 3,
    spreading: false,
    berryMonths: [],
    berryColor: null,
    sizeCategory: "medium",
    sun: ["part-shade", "full-shade"],
    moisture: ["moist", "wet"],
    soil: ["loamy", "rich"],
    bloomMonths: [],
    bloomColors: [],
    activeMonths: [4, 5, 6, 7, 8, 9, 10],
    dormantMonths: [11, 12, 1, 2, 3],
    evergreen: false,
    description:
      "Dramatic vase-shaped fern with distinctive upright cinnamon-colored fertile fronds emerging in spring. Bright green sterile fronds turn golden-yellow in fall. Essential for moist woodland gardens, stream banks, and rain gardens.",
    wildlifeValue: "Hummingbirds use the woolly stem bases for nest lining",
    specialFeatures: ["wet-tolerant", "rain-garden", "woodland-garden", "structural"],
  },

  // ─── MORE TREES ─────────────────────────────────────────────────────────────
  {
    id: "sweetbay-magnolia",
    name: "Sweetbay Magnolia",
    scientificName: "Magnolia virginiana",
    type: "tree",
    heightMin: 10,
    heightMax: 35,
    spreadMin: 10,
    spreadMax: 20,
    spreading: false,
    berryMonths: [9, 10],
    berryColor: "red",
    sizeCategory: "large",
    sun: ["full-sun", "part-shade"],
    moisture: ["moist", "wet"],
    soil: ["loamy", "rich", "clay"],
    bloomMonths: [5, 6, 7],
    bloomColors: ["white", "cream"],
    activeMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    dormantMonths: [],
    evergreen: true,
    description:
      "Fragrant creamy-white cup-shaped flowers bloom over a long season from late spring into summer. Semi-evergreen in the NC Piedmont and Coastal Plain; the glossy leaves are silver underneath. Thrives in wet, boggy sites where few trees succeed.",
    wildlifeValue: "Red berries eaten by birds; fragrant flowers attract pollinators",
    specialFeatures: ["evergreen", "fragrant", "wet-tolerant", "four-season-interest"],
  },
  {
    id: "tulip-poplar",
    name: "Tulip Poplar",
    scientificName: "Liriodendron tulipifera",
    type: "tree",
    heightMin: 60,
    heightMax: 90,
    spreadMin: 30,
    spreadMax: 50,
    spreading: false,
    berryMonths: [],
    berryColor: null,
    sizeCategory: "large",
    sun: ["full-sun"],
    moisture: ["medium", "moist"],
    soil: ["well-drained", "loamy", "rich"],
    bloomMonths: [4, 5],
    bloomColors: ["yellow", "orange"],
    activeMonths: [4, 5, 6, 7, 8, 9, 10],
    dormantMonths: [11, 12, 1, 2, 3],
    evergreen: false,
    description:
      "NC's tallest native tree, with distinctive tulip-shaped yellow-orange flowers high in the canopy in spring. Fast-growing with uniquely shaped leaves that turn clear yellow in fall. An important canopy tree for large landscapes.",
    wildlifeValue: "Top nectar source for ruby-throated hummingbirds and bees; seeds eaten by squirrels and finches",
    specialFeatures: ["fall-color", "hummingbird", "wildlife"],
  },
  {
    id: "sourwood",
    name: "Sourwood",
    scientificName: "Oxydendrum arboreum",
    type: "tree",
    heightMin: 20,
    heightMax: 35,
    spreadMin: 10,
    spreadMax: 20,
    spreading: false,
    berryMonths: [],
    berryColor: null,
    sizeCategory: "large",
    sun: ["full-sun", "part-shade"],
    moisture: ["dry", "medium"],
    soil: ["well-drained", "loamy", "sandy", "rich"],
    bloomMonths: [7, 8],
    bloomColors: ["white", "cream"],
    activeMonths: [4, 5, 6, 7, 8, 9, 10, 11],
    dormantMonths: [12, 1, 2, 3],
    evergreen: false,
    description:
      "One of the finest small native trees for four-season interest. Drooping chains of white bell-shaped flowers in midsummer (the source of prized sourwood honey), followed by the most brilliant scarlet-crimson fall color of any NC native tree.",
    wildlifeValue: "Top nectar tree for honeybees; seeds eaten by birds",
    specialFeatures: ["fall-color", "four-season-interest", "midsummer-bloom", "wildlife"],
  },
  {
    id: "pawpaw",
    name: "Pawpaw",
    scientificName: "Asimina triloba",
    type: "tree",
    heightMin: 15,
    heightMax: 25,
    spreadMin: 5,
    spreadMax: 8,
    spreading: true,
    berryMonths: [8, 9],
    berryColor: "yellow-green",
    sizeCategory: "large",
    sun: ["part-shade", "full-shade"],
    moisture: ["medium", "moist"],
    soil: ["loamy", "rich", "well-drained"],
    bloomMonths: [3, 4],
    bloomColors: ["maroon"],
    activeMonths: [4, 5, 6, 7, 8, 9, 10],
    dormantMonths: [11, 12, 1, 2, 3],
    evergreen: false,
    description:
      "North America's largest native fruit. Unusual burgundy-maroon flowers appear before the leaves in early spring. Large tropical-looking foliage turns golden-yellow in fall. Edible custard-like fruits ripen in September. Spreads to form colonies.",
    wildlifeValue: "Host plant for zebra swallowtail butterfly; fruits eaten by foxes, raccoons, and opossums",
    specialFeatures: ["early-bloom", "fall-color", "edible-fruit", "wildlife", "shade-tolerant"],
  },
  {
    id: "river-birch",
    name: "River Birch",
    scientificName: "Betula nigra",
    type: "tree",
    heightMin: 40,
    heightMax: 70,
    spreadMin: 25,
    spreadMax: 40,
    spreading: false,
    berryMonths: [],
    berryColor: null,
    sizeCategory: "large",
    sun: ["full-sun", "part-shade"],
    moisture: ["moist", "wet"],
    soil: ["loamy", "sandy", "clay"],
    bloomMonths: [3],
    bloomColors: ["cream"],
    activeMonths: [3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    dormantMonths: [1, 2],
    evergreen: false,
    description:
      "Celebrated for its exfoliating salmon-pink to cinnamon-brown bark that peels in papery curls, providing outstanding winter interest. Catkins appear in early spring. The only birch native to the NC Piedmont and Coastal Plain. Fast-growing.",
    wildlifeValue: "Seeds eaten by birds; host plant for many moth species",
    specialFeatures: ["winter-interest", "four-season-interest", "wet-tolerant", "structural"],
  },
  {
    id: "american-persimmon",
    name: "American Persimmon",
    scientificName: "Diospyros virginiana",
    type: "tree",
    heightMin: 35,
    heightMax: 60,
    spreadMin: 20,
    spreadMax: 35,
    spreading: true,
    berryMonths: [9, 10, 11, 12],
    berryColor: "orange",
    sizeCategory: "large",
    sun: ["full-sun", "part-shade"],
    moisture: ["dry", "medium"],
    soil: ["well-drained", "loamy", "sandy", "clay"],
    bloomMonths: [5, 6],
    bloomColors: ["white", "cream"],
    activeMonths: [4, 5, 6, 7, 8, 9, 10, 11, 12],
    dormantMonths: [1, 2, 3],
    evergreen: false,
    description:
      "A tough, adaptable native tree with deeply furrowed blocky bark and orange-yellow fruit that persists on bare branches into winter. Fruit is astringent until after frost, then becomes deliciously sweet. Excellent wildlife tree.",
    wildlifeValue: "Fruit eaten by deer, foxes, raccoons, opossums, and over 30 bird species",
    specialFeatures: ["drought-tolerant", "winter-interest", "wildlife", "edible-fruit"],
  },

  // ─── MORE SHRUBS ─────────────────────────────────────────────────────────────
  {
    id: "spicebush",
    name: "Northern Spicebush",
    scientificName: "Lindera benzoin",
    type: "shrub",
    heightMin: 6,
    heightMax: 12,
    spreadMin: 6,
    spreadMax: 12,
    spreading: true,
    berryMonths: [8, 9, 10],
    berryColor: "red",
    sizeCategory: "large",
    sun: ["part-shade", "full-shade"],
    moisture: ["medium", "moist"],
    soil: ["loamy", "rich", "clay"],
    bloomMonths: [3, 4],
    bloomColors: ["yellow"],
    activeMonths: [3, 4, 5, 6, 7, 8, 9, 10, 11],
    dormantMonths: [12, 1, 2],
    evergreen: false,
    description:
      "One of the earliest bloomers—tiny yellow flowers stud the bare branches before any other woodland shrub awakens. Intensely spicy-fragrant when crushed. Brilliant yellow fall color. Glossy red berries in fall. Essential woodland garden plant.",
    wildlifeValue: "Host plant for spicebush swallowtail butterfly; berries eaten by migratory birds",
    specialFeatures: ["early-bloom", "fragrant", "fall-color", "wildlife", "shade-tolerant", "four-season-interest"],
  },
  {
    id: "wild-hydrangea",
    name: "Wild Hydrangea",
    scientificName: "Hydrangea arborescens",
    type: "shrub",
    heightMin: 3,
    heightMax: 5,
    spreadMin: 3,
    spreadMax: 5,
    spreading: false,
    berryMonths: [],
    berryColor: null,
    sizeCategory: "medium",
    sun: ["part-shade", "full-shade"],
    moisture: ["medium", "moist"],
    soil: ["loamy", "rich", "well-drained"],
    bloomMonths: [6, 7, 8],
    bloomColors: ["white", "cream"],
    activeMonths: [5, 6, 7, 8, 9, 10],
    dormantMonths: [11, 12, 1, 2, 3, 4],
    evergreen: false,
    description:
      "The native species behind the popular 'Annabelle' cultivar. Large flat-topped white flower clusters bloom for weeks in summer and age to parchment, persisting into winter. Thrives in deep shade where few other flowering shrubs perform. Cut back hard in late winter.",
    wildlifeValue: "Nectar for native bees and butterflies",
    specialFeatures: ["shade-tolerant", "winter-interest", "woodland-garden"],
  },
  {
    id: "elderberry",
    name: "Elderberry",
    scientificName: "Sambucus canadensis",
    type: "shrub",
    heightMin: 5,
    heightMax: 12,
    spreadMin: 6,
    spreadMax: 10,
    spreading: true,
    berryMonths: [8, 9],
    berryColor: "purple-black",
    sizeCategory: "large",
    sun: ["full-sun", "part-shade"],
    moisture: ["medium", "moist", "wet"],
    soil: ["loamy", "rich", "clay"],
    bloomMonths: [6, 7],
    bloomColors: ["white", "cream"],
    activeMonths: [4, 5, 6, 7, 8, 9, 10],
    dormantMonths: [11, 12, 1, 2, 3],
    evergreen: false,
    description:
      "Flat-topped clusters of fragrant white flowers in early summer, followed by heavy clusters of dark purple-black berries loved by birds and used in elderberry syrup. Fast-growing and adaptable. Provides dense cover and food for wildlife.",
    wildlifeValue: "Berries eaten by over 50 bird species; flowers attract pollinators",
    specialFeatures: ["wildlife", "edible-fruit", "fragrant", "wet-tolerant"],
  },
  {
    id: "yaupon-holly",
    name: "Yaupon Holly",
    scientificName: "Ilex vomitoria",
    type: "shrub",
    heightMin: 7,
    heightMax: 15,
    spreadMin: 7,
    spreadMax: 15,
    spreading: false,
    berryMonths: [10, 11, 12, 1, 2, 3],
    berryColor: "red",
    sizeCategory: "large",
    sun: ["full-sun", "part-shade", "full-shade"],
    moisture: ["dry", "medium", "moist"],
    soil: ["well-drained", "loamy", "sandy", "clay"],
    bloomMonths: [3, 4],
    bloomColors: ["white"],
    activeMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    dormantMonths: [],
    evergreen: true,
    description:
      "The most adaptable native shrub in the Southeast—tolerates deep shade, full sun, drought, wet soils, salt spray, and heavy pruning. Evergreen with small glossy leaves and abundant red berries on female plants through winter. Invaluable as a hedge or specimen.",
    wildlifeValue: "Winter berries eaten by over 40 bird species including cedar waxwings and mockingbirds",
    specialFeatures: ["evergreen", "winter-interest", "drought-tolerant", "wildlife", "four-season-interest"],
  },
  {
    id: "flame-azalea",
    name: "Flame Azalea",
    scientificName: "Rhododendron calendulaceum",
    type: "shrub",
    heightMin: 6,
    heightMax: 10,
    spreadMin: 6,
    spreadMax: 10,
    spreading: false,
    berryMonths: [],
    berryColor: null,
    sizeCategory: "large",
    sun: ["part-shade"],
    moisture: ["medium", "moist"],
    soil: ["well-drained", "loamy", "rich", "sandy"],
    bloomMonths: [5, 6],
    bloomColors: ["orange", "red-orange", "yellow"],
    activeMonths: [5, 6, 7, 8, 9, 10],
    dormantMonths: [11, 12, 1, 2, 3, 4],
    evergreen: false,
    description:
      "William Bartram called it 'the most gay and brilliant flowering shrub yet known.' Spectacular clusters of orange, flame, and yellow flowers in late spring—one of the showiest native shrubs in eastern North America. Native to mountain woodlands of NC.",
    wildlifeValue: "Nectar for hummingbirds and large butterflies",
    specialFeatures: ["hummingbird", "woodland-garden", "showy"],
  },
  {
    id: "st-johns-wort",
    name: "Shrubby St. John's Wort",
    scientificName: "Hypericum frondosum",
    type: "shrub",
    heightMin: 2,
    heightMax: 4,
    spreadMin: 2,
    spreadMax: 4,
    spreading: false,
    berryMonths: [],
    berryColor: null,
    sizeCategory: "medium",
    sun: ["full-sun", "part-shade"],
    moisture: ["dry", "medium"],
    soil: ["well-drained", "loamy", "rocky", "sandy"],
    bloomMonths: [6, 7, 8],
    bloomColors: ["yellow", "golden-yellow"],
    activeMonths: [4, 5, 6, 7, 8, 9, 10],
    dormantMonths: [11, 12, 1, 2, 3],
    evergreen: false,
    description:
      "Bright yellow five-petaled flowers with showy golden stamens bloom over a long midsummer season. Exfoliating reddish-brown bark and blue-green foliage provide off-season interest. Compact and drought-tolerant. Excellent for dry sunny borders.",
    wildlifeValue: "Pollen source for native bees including specialist Hypericum bees",
    specialFeatures: ["drought-tolerant", "midsummer-bloom", "wildlife"],
  },
  {
    id: "pinxterbloom-azalea",
    name: "Pinxterbloom Azalea",
    scientificName: "Rhododendron periclymenoides",
    type: "shrub",
    heightMin: 4,
    heightMax: 8,
    spreadMin: 4,
    spreadMax: 8,
    spreading: false,
    berryMonths: [],
    berryColor: null,
    sizeCategory: "medium",
    sun: ["part-shade", "full-shade"],
    moisture: ["medium", "moist"],
    soil: ["well-drained", "loamy", "sandy", "rich"],
    bloomMonths: [4, 5],
    bloomColors: ["pink", "white", "pale-lavender"],
    activeMonths: [4, 5, 6, 7, 8, 9, 10],
    dormantMonths: [11, 12, 1, 2, 3],
    evergreen: false,
    description:
      "A delicate native azalea of piedmont and mountain woodlands, blooming in soft pink to white just as the leaves emerge. More shade-tolerant than Piedmont Azalea. Lovely in naturalized woodland gardens. Fragrant.",
    wildlifeValue: "Nectar for hummingbirds and butterflies",
    specialFeatures: ["fragrant", "shade-tolerant", "woodland-garden", "early-bloom"],
  },
  {
    id: "swamp-rose",
    name: "Swamp Rose",
    scientificName: "Rosa palustris",
    type: "shrub",
    heightMin: 4,
    heightMax: 7,
    spreadMin: 4,
    spreadMax: 8,
    spreading: true,
    berryMonths: [9, 10, 11],
    berryColor: "red",
    sizeCategory: "medium",
    sun: ["full-sun", "part-shade"],
    moisture: ["moist", "wet"],
    soil: ["loamy", "clay"],
    bloomMonths: [6, 7],
    bloomColors: ["pink", "deep-pink"],
    activeMonths: [4, 5, 6, 7, 8, 9, 10, 11],
    dormantMonths: [12, 1, 2, 3],
    evergreen: false,
    description:
      "The native rose for wet sites—thrives at pond edges and stream banks where no other rose will grow. Fragrant single pink flowers bloom over several weeks. Red rose hips persist through winter feeding birds. Spreads by suckering to form thickets.",
    wildlifeValue: "Hips eaten by birds; dense thickets provide nesting cover; nectar for pollinators",
    specialFeatures: ["wet-tolerant", "fragrant", "winter-interest", "wildlife"],
  },

  // ─── MORE PERENNIALS ─────────────────────────────────────────────────────────
  {
    id: "bloodroot",
    name: "Bloodroot",
    scientificName: "Sanguinaria canadensis",
    type: "perennial",
    heightMin: 0.5,
    heightMax: 1,
    spreadMin: 0.5,
    spreadMax: 1,
    spreading: true,
    berryMonths: [],
    berryColor: null,
    sizeCategory: "small",
    sun: ["part-shade", "full-shade"],
    moisture: ["medium", "moist"],
    soil: ["loamy", "rich", "well-drained"],
    bloomMonths: [3, 4],
    bloomColors: ["white"],
    activeMonths: [3, 4, 5],
    dormantMonths: [6, 7, 8, 9, 10, 11, 12, 1, 2],
    evergreen: false,
    description:
      "Among the first wildflowers of the woodland year—pure white flowers with golden stamens emerging from leaf litter in early spring before any canopy leaves unfurl. Goes dormant by early summer. Plant in drifts for a stunning spring display. Slow to establish but spreads gently.",
    wildlifeValue: "Early pollen source for native bees; seeds dispersed by ants",
    specialFeatures: ["early-bloom", "shade-tolerant", "woodland-garden", "ephemeral"],
  },
  {
    id: "trillium",
    name: "Large-flowered Trillium",
    scientificName: "Trillium grandiflorum",
    type: "perennial",
    heightMin: 1,
    heightMax: 1.5,
    spreadMin: 0.5,
    spreadMax: 1,
    spreading: false,
    berryMonths: [],
    berryColor: null,
    sizeCategory: "small",
    sun: ["part-shade", "full-shade"],
    moisture: ["medium", "moist"],
    soil: ["loamy", "rich"],
    bloomMonths: [4, 5],
    bloomColors: ["white", "pink"],
    activeMonths: [4, 5, 6],
    dormantMonths: [7, 8, 9, 10, 11, 12, 1, 2, 3],
    evergreen: false,
    description:
      "The queen of spring wildflowers. Large, pristine white three-petaled flowers age to soft pink as they mature. Requires rich, moist woodland conditions and patience—takes several years to bloom from seed. Once established, long-lived and increasingly beautiful.",
    wildlifeValue: "Seeds dispersed by ants; early pollen for native bees",
    specialFeatures: ["shade-tolerant", "woodland-garden", "ephemeral"],
  },
  {
    id: "mayapple",
    name: "Mayapple",
    scientificName: "Podophyllum peltatum",
    type: "perennial",
    heightMin: 1,
    heightMax: 1.5,
    spreadMin: 1,
    spreadMax: 3,
    spreading: true,
    berryMonths: [],
    berryColor: null,
    sizeCategory: "small",
    sun: ["part-shade", "full-shade"],
    moisture: ["medium", "moist"],
    soil: ["loamy", "rich"],
    bloomMonths: [4, 5],
    bloomColors: ["white"],
    activeMonths: [4, 5, 6],
    dormantMonths: [7, 8, 9, 10, 11, 12, 1, 2, 3],
    evergreen: false,
    description:
      "Umbrella-like leaves emerge in spring colonies, hiding a single nodding white flower beneath paired leaves. Lemon-yellow edible fruit ripens in late summer. Spreads to form dramatic groundcover colonies in woodland settings. Goes dormant in midsummer.",
    wildlifeValue: "Fruit eaten by box turtles and other wildlife; larval host for Appalachian azure butterfly",
    specialFeatures: ["shade-tolerant", "woodland-garden", "ephemeral", "edible-fruit"],
  },
  {
    id: "wild-geranium",
    name: "Wild Geranium",
    scientificName: "Geranium maculatum",
    type: "perennial",
    heightMin: 1,
    heightMax: 2,
    spreadMin: 1,
    spreadMax: 1.5,
    spreading: false,
    berryMonths: [],
    berryColor: null,
    sizeCategory: "small",
    sun: ["part-shade", "full-shade"],
    moisture: ["medium", "moist"],
    soil: ["loamy", "rich", "well-drained"],
    bloomMonths: [4, 5],
    bloomColors: ["pink", "blue-violet"],
    activeMonths: [4, 5, 6, 7],
    dormantMonths: [8, 9, 10, 11, 12, 1, 2, 3],
    evergreen: false,
    description:
      "Soft lavender-pink flowers with delicate veining bloom for weeks in mid-spring. Attractive lobed foliage turns burgundy-red in fall before going dormant. Easy, adaptable, and reliable in woodland borders and shade gardens. Self-seeds modestly.",
    wildlifeValue: "Specialist nectar plant for several native bee species; seeds eaten by songbirds",
    specialFeatures: ["shade-tolerant", "woodland-garden", "fall-color"],
  },
  {
    id: "wild-blue-phlox",
    name: "Wild Blue Phlox",
    scientificName: "Phlox divaricata",
    type: "perennial",
    heightMin: 0.5,
    heightMax: 1.5,
    spreadMin: 1,
    spreadMax: 2,
    spreading: true,
    berryMonths: [],
    berryColor: null,
    sizeCategory: "small",
    sun: ["part-shade", "full-shade"],
    moisture: ["medium", "moist"],
    soil: ["loamy", "rich", "well-drained"],
    bloomMonths: [4, 5],
    bloomColors: ["blue", "lavender", "pale-lavender"],
    activeMonths: [3, 4, 5, 6, 7, 8],
    dormantMonths: [9, 10, 11, 12, 1, 2],
    evergreen: false,
    description:
      "Soft clouds of fragrant lavender-blue flowers carpet the woodland floor in mid-spring. A spreading groundcover that mingles beautifully with Virginia bluebells, wild columbine, and bleeding heart. One of the most fragrant native woodland plants.",
    wildlifeValue: "Nectar for early butterflies and long-tongued native bees",
    specialFeatures: ["fragrant", "shade-tolerant", "woodland-garden", "groundcover"],
  },
  {
    id: "black-cohosh",
    name: "Black Cohosh",
    scientificName: "Actaea racemosa",
    type: "perennial",
    heightMin: 4,
    heightMax: 6,
    spreadMin: 2,
    spreadMax: 3,
    spreading: false,
    berryMonths: [],
    berryColor: null,
    sizeCategory: "large",
    sun: ["part-shade", "full-shade"],
    moisture: ["medium", "moist"],
    soil: ["loamy", "rich"],
    bloomMonths: [6, 7, 8],
    bloomColors: ["white"],
    activeMonths: [4, 5, 6, 7, 8, 9, 10],
    dormantMonths: [11, 12, 1, 2, 3],
    evergreen: false,
    description:
      "Towering white candle-like flower spikes rise dramatically above bold compound foliage in summer. One of the finest large perennials for the shade garden. The flowers have a distinctive, slightly musky fragrance that attracts flies as pollinators. Native to NC mountain coves.",
    wildlifeValue: "Fly-pollinated; seeds eaten by birds",
    specialFeatures: ["shade-tolerant", "structural", "woodland-garden", "fragrant"],
  },
  {
    id: "blue-mistflower",
    name: "Blue Mistflower",
    scientificName: "Conoclinium coelestinum",
    type: "perennial",
    heightMin: 1.5,
    heightMax: 3,
    spreadMin: 2,
    spreadMax: 4,
    spreading: true,
    berryMonths: [],
    berryColor: null,
    sizeCategory: "small",
    sun: ["full-sun", "part-shade"],
    moisture: ["medium", "moist"],
    soil: ["loamy", "clay", "rich"],
    bloomMonths: [8, 9, 10],
    bloomColors: ["blue", "blue-violet"],
    activeMonths: [5, 6, 7, 8, 9, 10],
    dormantMonths: [11, 12, 1, 2, 3, 4],
    evergreen: false,
    description:
      "Fuzzy powder-blue flower clusters look like a native version of ageratum and bloom late into fall when color is precious. Spreads enthusiastically to fill moist areas. A superb companion to goldenrod and ironweed for late-season pollinator gardens.",
    wildlifeValue: "Top late-season nectar source for monarchs and many butterfly species",
    specialFeatures: ["wildlife", "pollinator-magnet", "monarch", "fall-color"],
  },
  {
    id: "obedient-plant",
    name: "Obedient Plant",
    scientificName: "Physostegia virginiana",
    type: "perennial",
    heightMin: 2,
    heightMax: 4,
    spreadMin: 2,
    spreadMax: 4,
    spreading: true,
    berryMonths: [],
    berryColor: null,
    sizeCategory: "medium",
    sun: ["full-sun", "part-shade"],
    moisture: ["medium", "moist", "wet"],
    soil: ["loamy", "clay", "rich"],
    bloomMonths: [8, 9],
    bloomColors: ["pink", "lavender"],
    activeMonths: [5, 6, 7, 8, 9, 10],
    dormantMonths: [11, 12, 1, 2, 3, 4],
    evergreen: false,
    description:
      "Neat spikes of rosy-pink snapdragon-like flowers in late summer. Each flower can be repositioned on the spike and stays in place—hence the common name. Spreads vigorously by runners; best given room to naturalize in moist borders.",
    wildlifeValue: "Nectar for hummingbirds and bumblebees",
    specialFeatures: ["hummingbird", "wet-tolerant"],
  },
  {
    id: "mountain-mint",
    name: "Virginia Mountain Mint",
    scientificName: "Pycnanthemum virginianum",
    type: "perennial",
    heightMin: 2,
    heightMax: 3,
    spreadMin: 1.5,
    spreadMax: 2.5,
    spreading: true,
    berryMonths: [],
    berryColor: null,
    sizeCategory: "small",
    sun: ["full-sun"],
    moisture: ["dry", "medium"],
    soil: ["well-drained", "loamy", "clay"],
    bloomMonths: [7, 8],
    bloomColors: ["white", "pale-lavender"],
    activeMonths: [5, 6, 7, 8, 9],
    dormantMonths: [10, 11, 12, 1, 2, 3, 4],
    evergreen: false,
    description:
      "Intensely minty-fragrant small white flower clusters with silvery-white bracts create a frosted effect in midsummer. Possibly the single most visited plant by native bees—an exceptional pollinator plant that buzzes with activity when in bloom.",
    wildlifeValue: "Extraordinary pollinator magnet — visited by over 50 bee species and many butterfly species",
    specialFeatures: ["fragrant", "drought-tolerant", "pollinator-magnet", "wildlife"],
  },
  {
    id: "boneset",
    name: "Common Boneset",
    scientificName: "Eupatorium perfoliatum",
    type: "perennial",
    heightMin: 2,
    heightMax: 4,
    spreadMin: 1.5,
    spreadMax: 2.5,
    spreading: false,
    berryMonths: [],
    berryColor: null,
    sizeCategory: "medium",
    sun: ["full-sun", "part-shade"],
    moisture: ["moist", "wet"],
    soil: ["loamy", "clay", "rich"],
    bloomMonths: [7, 8, 9],
    bloomColors: ["white"],
    activeMonths: [4, 5, 6, 7, 8, 9, 10],
    dormantMonths: [11, 12, 1, 2, 3],
    evergreen: false,
    description:
      "Flat-topped clusters of white flowers bloom reliably in moist meadows and rain gardens. The unusual perfoliate leaves—appearing to be pierced by the stem—are distinctive. An important late-season nectar source for migrating monarchs.",
    wildlifeValue: "Critical nectar plant for monarchs, wasps, and native bees during migration",
    specialFeatures: ["wet-tolerant", "rain-garden", "wildlife", "monarch"],
  },
  {
    id: "lizards-tail",
    name: "Lizard's Tail",
    scientificName: "Saururus cernuus",
    type: "perennial",
    heightMin: 2,
    heightMax: 4,
    spreadMin: 2,
    spreadMax: 4,
    spreading: true,
    berryMonths: [],
    berryColor: null,
    sizeCategory: "medium",
    sun: ["part-shade", "full-shade"],
    moisture: ["moist", "wet"],
    soil: ["loamy", "rich", "clay"],
    bloomMonths: [6, 7, 8],
    bloomColors: ["white"],
    activeMonths: [4, 5, 6, 7, 8, 9, 10],
    dormantMonths: [11, 12, 1, 2, 3],
    evergreen: false,
    description:
      "Graceful arching spikes of fragrant white flowers droop elegantly over pond edges and stream banks in summer. Heart-shaped leaves and the distinctive nodding flower tail make this a beautiful water garden plant for shade. Spreads to form colonies.",
    wildlifeValue: "Provides cover for waterfowl and amphibians; nectar for pollinators",
    specialFeatures: ["fragrant", "wet-tolerant", "shade-tolerant", "rain-garden", "woodland-garden"],
  },
  {
    id: "green-and-gold",
    name: "Green-and-Gold",
    scientificName: "Chrysogonum virginianum",
    type: "groundcover",
    heightMin: 0.5,
    heightMax: 1,
    spreadMin: 0.5,
    spreadMax: 1.5,
    spreading: true,
    berryMonths: [],
    berryColor: null,
    sizeCategory: "small",
    sun: ["part-shade", "full-shade"],
    moisture: ["dry", "medium"],
    soil: ["well-drained", "loamy", "rich"],
    bloomMonths: [3, 4, 5, 6],
    bloomColors: ["yellow", "golden-yellow"],
    activeMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    dormantMonths: [],
    evergreen: true,
    description:
      "One of the best native groundcovers—cheerful golden-yellow star-shaped flowers from spring into early summer, then evergreen throughout the year. Spreads slowly to form a dense weed-suppressing mat. Excellent under deciduous trees and in woodland edges.",
    wildlifeValue: "Early nectar for native bees",
    specialFeatures: ["evergreen", "shade-tolerant", "drought-tolerant", "groundcover", "early-bloom"],
  },
  {
    id: "wild-stonecrop",
    name: "Wild Stonecrop",
    scientificName: "Sedum ternatum",
    type: "groundcover",
    heightMin: 0.25,
    heightMax: 0.5,
    spreadMin: 0.5,
    spreadMax: 1,
    spreading: true,
    berryMonths: [],
    berryColor: null,
    sizeCategory: "small",
    sun: ["part-shade", "full-shade"],
    moisture: ["dry", "medium"],
    soil: ["well-drained", "rocky", "loamy"],
    bloomMonths: [4, 5],
    bloomColors: ["white"],
    activeMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    dormantMonths: [],
    evergreen: true,
    description:
      "The only native sedum in NC, forming low mats of succulent rosettes on rocky outcrops and shaded slopes. Starry white flowers in spring. Evergreen through winter. Excellent for dry shade, rock gardens, and crevice planting where little else grows.",
    wildlifeValue: "Early nectar for bees and beetles",
    specialFeatures: ["evergreen", "shade-tolerant", "drought-tolerant", "groundcover", "rocky-sites"],
  },

  // ─── MORE GRASSES & SEDGES ───────────────────────────────────────────────────
  {
    id: "pennsylvania-sedge",
    name: "Pennsylvania Sedge",
    scientificName: "Carex pensylvanica",
    type: "grass",
    heightMin: 0.5,
    heightMax: 1,
    spreadMin: 1,
    spreadMax: 2,
    spreading: true,
    berryMonths: [],
    berryColor: null,
    sizeCategory: "small",
    sun: ["part-shade", "full-shade"],
    moisture: ["dry", "medium"],
    soil: ["well-drained", "loamy", "sandy"],
    bloomMonths: [4, 5],
    bloomColors: ["bronze", "cream"],
    activeMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    dormantMonths: [],
    evergreen: true,
    description:
      "A fine-textured evergreen sedge that forms soft, flowing tufts under dry shade—one of the most useful native groundcovers for difficult dry shade conditions. An excellent lawn alternative under trees. Spreads slowly by rhizomes to form a low, graceful carpet.",
    wildlifeValue: "Seeds for birds; larval host for several skipper butterflies",
    specialFeatures: ["evergreen", "shade-tolerant", "drought-tolerant", "groundcover", "lawn-alternative"],
  },
  {
    id: "blue-wood-sedge",
    name: "Blue Wood Sedge",
    scientificName: "Carex flaccosperma",
    type: "grass",
    heightMin: 0.5,
    heightMax: 1.5,
    spreadMin: 1,
    spreadMax: 2,
    spreading: false,
    berryMonths: [],
    berryColor: null,
    sizeCategory: "small",
    sun: ["part-shade", "full-shade"],
    moisture: ["medium", "moist"],
    soil: ["loamy", "rich", "clay"],
    bloomMonths: [3, 4, 5],
    bloomColors: ["bronze", "cream"],
    activeMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    dormantMonths: [],
    evergreen: true,
    description:
      "A handsome evergreen sedge with blue-green arching foliage forming attractive clumps in moist woodland shade. More upright than Pennsylvania sedge. Excellent groundcover under shade trees in moist sites.",
    wildlifeValue: "Seeds for birds; cover for small mammals",
    specialFeatures: ["evergreen", "shade-tolerant", "groundcover", "woodland-garden"],
  },
  {
    id: "eastern-gamagrass",
    name: "Eastern Gamagrass",
    scientificName: "Tripsacum dactyloides",
    type: "grass",
    heightMin: 4,
    heightMax: 7,
    spreadMin: 3,
    spreadMax: 5,
    spreading: false,
    berryMonths: [],
    berryColor: null,
    sizeCategory: "large",
    sun: ["full-sun"],
    moisture: ["medium", "moist", "wet"],
    soil: ["loamy", "clay"],
    bloomMonths: [6, 7],
    bloomColors: ["bronze", "cream"],
    activeMonths: [4, 5, 6, 7, 8, 9, 10, 11],
    dormantMonths: [12, 1, 2, 3],
    evergreen: false,
    description:
      "A bold, dramatic native grass forming large clumps of lush blue-green foliage. The prehistoric-looking relative of corn with distinctive seed heads. Outstanding fall color. Provides dramatic structure in rain gardens and moist meadow plantings.",
    wildlifeValue: "Seeds eaten by birds; larval host for several skipper butterflies",
    specialFeatures: ["wet-tolerant", "rain-garden", "structural", "fall-color"],
  },

  // ─── VINES ───────────────────────────────────────────────────────────────────
  {
    id: "coral-honeysuckle",
    name: "Coral Honeysuckle",
    scientificName: "Lonicera sempervirens",
    type: "vine",
    heightMin: 10,
    heightMax: 20,
    spreadMin: 3,
    spreadMax: 6,
    spreading: false,
    berryMonths: [7, 8, 9],
    berryColor: "red",
    sizeCategory: "large",
    sun: ["full-sun", "part-shade"],
    moisture: ["dry", "medium"],
    soil: ["well-drained", "loamy", "sandy"],
    bloomMonths: [3, 4, 5, 6, 7, 8, 9],
    bloomColors: ["red", "orange"],
    activeMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    dormantMonths: [],
    evergreen: true,
    description:
      "The native alternative to invasive Japanese honeysuckle. Tubular red and orange flowers bloom from spring through fall—one of the longest bloom seasons of any native plant. The #1 hummingbird vine for the Southeast. Evergreen in the NC Piedmont and Coastal Plain.",
    wildlifeValue: "Top hummingbird nectar vine; red berries eaten by birds; larval host for snowberry clearwing moth",
    specialFeatures: ["evergreen", "hummingbird", "four-season-interest", "wildlife", "drought-tolerant"],
  },
  {
    id: "crossvine",
    name: "Crossvine",
    scientificName: "Bignonia capreolata",
    type: "vine",
    heightMin: 30,
    heightMax: 50,
    spreadMin: 6,
    spreadMax: 9,
    spreading: false,
    berryMonths: [],
    berryColor: null,
    sizeCategory: "large",
    sun: ["full-sun", "part-shade"],
    moisture: ["medium", "moist"],
    soil: ["well-drained", "loamy", "rich"],
    bloomMonths: [4, 5],
    bloomColors: ["orange", "red-orange", "yellow"],
    activeMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    dormantMonths: [],
    evergreen: true,
    description:
      "A vigorous, high-climbing evergreen vine with spectacular trumpet-shaped orange and red flowers in spring—one of the showiest flowering vines native to NC. Climbs by tendrils to cover arbors, fences, and trees. The cut stem reveals a cross pattern giving the vine its name.",
    wildlifeValue: "Top early hummingbird nectar source; also visited by bumblebees",
    specialFeatures: ["evergreen", "hummingbird", "four-season-interest", "showy"],
  },
  {
    id: "virgins-bower",
    name: "Virgin's Bower",
    scientificName: "Clematis virginiana",
    type: "vine",
    heightMin: 10,
    heightMax: 20,
    spreadMin: 6,
    spreadMax: 10,
    spreading: true,
    berryMonths: [],
    berryColor: null,
    sizeCategory: "large",
    sun: ["full-sun", "part-shade"],
    moisture: ["medium", "moist"],
    soil: ["loamy", "rich", "clay"],
    bloomMonths: [8, 9],
    bloomColors: ["white"],
    activeMonths: [4, 5, 6, 7, 8, 9, 10, 11],
    dormantMonths: [12, 1, 2, 3],
    evergreen: false,
    description:
      "Masses of small white flowers smother this vigorous native vine in late summer. The fluffy silvery seed heads that follow are equally ornamental through fall and winter—giving rise to its alternative name 'old man's beard.' Excellent for naturalizing fences and woodland edges.",
    wildlifeValue: "Nectar for bees and butterflies; seed fluff used by birds for nesting",
    specialFeatures: ["winter-interest", "wildlife", "fall-color"],
  },

  // ─── ADDITIONAL TREES ───────────────────────────────────────────────────────
  {
    id: "sassafras",
    name: "Sassafras",
    scientificName: "Sassafras albidum",
    type: "tree",
    heightMin: 30,
    heightMax: 60,
    sizeCategory: "large",
    sun: ["full-sun", "part-shade"],
    moisture: ["dry", "medium"],
    soil: ["well-drained", "loamy", "sandy"],
    bloomMonths: [3, 4],
    bloomColors: ["pale-yellow"],
    activeMonths: [3, 4, 5, 6, 7, 8, 9, 10, 11],
    dormantMonths: [12, 1, 2],
    evergreen: false,
    description:
      "A wonderful medium NC native tree with aromatic bark, roots, and leaves. Clusters of tiny yellow flowers appear before the leaves in early spring. The distinctively lobed—mitten-shaped, three-fingered, and simple—leaves turn brilliant orange, red, and yellow in fall. The spicebush swallowtail butterfly depends on it as a larval host plant.",
    wildlifeValue: "Host plant for spicebush swallowtail; berries eaten by over 40 bird species",
    specialFeatures: ["fall-color", "aromatic", "wildlife", "early-bloom"],
  },
  {
    id: "sweetgum",
    name: "Sweetgum",
    scientificName: "Liquidambar styraciflua",
    type: "tree",
    heightMin: 60,
    heightMax: 80,
    sizeCategory: "large",
    sun: ["full-sun", "part-shade"],
    moisture: ["medium", "moist", "wet"],
    soil: ["loamy", "clay", "rich"],
    bloomMonths: [],
    bloomColors: [],
    activeMonths: [4, 5, 6, 7, 8, 9, 10, 11],
    dormantMonths: [12, 1, 2, 3],
    evergreen: false,
    description:
      "A stately NC native tree with glossy star-shaped leaves that deliver some of the most spectacular fall color in the Southeast—deep reds, purples, oranges, and yellows simultaneously on the same tree. Tolerates wet soils and compaction well. The persistent spiky seed balls provide winter food for finches and other birds.",
    wildlifeValue: "Seeds eaten by goldfinches, Carolina chickadees, and squirrels; cavity nesting",
    specialFeatures: ["fall-color", "wildlife", "wet-tolerance"],
  },
  {
    id: "painted-buckeye",
    name: "Painted Buckeye",
    scientificName: "Aesculus sylvatica",
    type: "tree",
    heightMin: 6,
    heightMax: 15,
    sizeCategory: "large",
    sun: ["part-shade", "full-shade"],
    moisture: ["medium", "moist"],
    soil: ["rich", "loamy", "well-drained"],
    bloomMonths: [4, 5],
    bloomColors: ["red-orange", "pale-yellow"],
    activeMonths: [4, 5, 6, 7, 8, 9, 10],
    dormantMonths: [11, 12, 1, 2, 3],
    evergreen: false,
    description:
      "A showy small understory tree unique to the Southeast, producing upright panicles of tubular red-orange and yellow flowers in spring that are irresistible to hummingbirds. Among the first trees to leaf out and one of the earliest to enter dormancy. The large glossy seeds (buckeyes) are ornamental though toxic if ingested.",
    wildlifeValue: "Critical early nectar for ruby-throated hummingbirds; bumblebees; tiger swallowtails",
    specialFeatures: ["wildlife", "early-bloom", "understory"],
  },

  // ─── ADDITIONAL SHRUBS ──────────────────────────────────────────────────────
  {
    id: "summersweet",
    name: "Summersweet",
    scientificName: "Clethra alnifolia",
    type: "shrub",
    heightMin: 3,
    heightMax: 8,
    sizeCategory: "medium",
    sun: ["full-sun", "part-shade", "full-shade"],
    moisture: ["moist", "wet", "medium"],
    soil: ["rich", "loamy", "clay"],
    bloomMonths: [7, 8],
    bloomColors: ["white"],
    activeMonths: [5, 6, 7, 8, 9, 10, 11],
    dormantMonths: [12, 1, 2, 3, 4],
    evergreen: false,
    description:
      "One of the few shrubs that blooms in midsummer and thrives in both shade and wet soils, making it invaluable for difficult spots. The upright racemes of white flowers are intensely fragrant, perfuming the garden on warm evenings. Tolerates standing water and heavy clay. Outstanding golden-yellow fall color.",
    wildlifeValue: "Exceptional nectar source for bees, butterflies, and hummingbirds in mid-summer",
    specialFeatures: ["fall-color", "fragrant", "shade-tolerant", "wet-tolerance", "wildlife"],
  },
  {
    id: "arrowwood-viburnum",
    name: "Arrowwood Viburnum",
    scientificName: "Viburnum dentatum",
    type: "shrub",
    heightMin: 6,
    heightMax: 10,
    sizeCategory: "large",
    sun: ["full-sun", "part-shade"],
    moisture: ["dry", "medium", "moist"],
    soil: ["well-drained", "loamy", "clay"],
    bloomMonths: [5, 6],
    bloomColors: ["white"],
    activeMonths: [4, 5, 6, 7, 8, 9, 10, 11],
    dormantMonths: [12, 1, 2, 3],
    evergreen: false,
    description:
      "A tough, adaptable native shrub with flat-topped clusters of white flowers in late spring, followed by blue-black berries beloved by birds in late summer. Extremely tolerant of varied conditions—dry or moist, sun or shade. Burgundy to red fall color. One of the best native shrubs for birds, supporting over 100 species.",
    wildlifeValue: "Berries eaten by over 100 bird species; host for spring azure butterfly; native bees",
    specialFeatures: ["fall-color", "wildlife", "adaptable"],
  },
  {
    id: "rosebay-rhododendron",
    name: "Rosebay Rhododendron",
    scientificName: "Rhododendron maximum",
    type: "shrub",
    heightMin: 8,
    heightMax: 15,
    sizeCategory: "large",
    sun: ["part-shade", "full-shade"],
    moisture: ["moist"],
    soil: ["well-drained", "rich", "loamy"],
    bloomMonths: [6, 7],
    bloomColors: ["pink", "white"],
    activeMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    dormantMonths: [],
    evergreen: true,
    description:
      "The largest native rhododendron in eastern North America, forming dense evergreen thickets along NC mountain streams and slopes. Large clusters of pink to white flowers bloom in early summer. Provides year-round cover and shelter for wildlife. Requires acidic, well-drained soil and consistent moisture. Spectacular in naturalistic mountain gardens.",
    wildlifeValue: "Year-round cover for birds and mammals; nectar for bumblebees and hummingbirds",
    specialFeatures: ["evergreen", "wildlife", "shade-tolerant", "wet-tolerance"],
  },
  {
    id: "highbush-blueberry",
    name: "Highbush Blueberry",
    scientificName: "Vaccinium corymbosum",
    type: "shrub",
    heightMin: 5,
    heightMax: 8,
    sizeCategory: "medium",
    sun: ["full-sun", "part-shade"],
    moisture: ["medium", "moist"],
    soil: ["well-drained", "sandy", "loamy"],
    bloomMonths: [4, 5],
    bloomColors: ["white", "cream"],
    activeMonths: [4, 5, 6, 7, 8, 9, 10, 11],
    dormantMonths: [12, 1, 2, 3],
    evergreen: false,
    description:
      "An outstanding four-season native shrub offering white bell-shaped flowers in spring, delicious edible blueberries in summer, brilliant scarlet-crimson fall color, and attractive twiggy winter form. Requires acidic soil. One of the highest wildlife value shrubs native to NC, supporting over 290 species of caterpillars alone.",
    wildlifeValue: "Berries eaten by 90+ bird species; host for 290+ Lepidoptera species; native bees",
    specialFeatures: ["fall-color", "edible-berries", "wildlife", "four-season"],
  },
  {
    id: "strawberry-bush",
    name: "Strawberry Bush",
    scientificName: "Euonymus americanus",
    type: "shrub",
    heightMin: 3,
    heightMax: 6,
    sizeCategory: "medium",
    sun: ["part-shade", "full-shade"],
    moisture: ["medium", "moist"],
    soil: ["well-drained", "loamy", "rich"],
    bloomMonths: [],
    bloomColors: [],
    activeMonths: [4, 5, 6, 7, 8, 9, 10, 11],
    dormantMonths: [12, 1, 2, 3],
    evergreen: false,
    description:
      "Also called 'hearts-a-bustin,' this native understory shrub is grown for its extraordinary fall fruit—warty pink-red capsules that split open to reveal bright orange-red seeds, creating a dazzling display. A wonderful conversation piece in shaded native gardens. The green stems provide winter interest.",
    wildlifeValue: "Fruits eaten by wild turkey, bobwhite, and songbirds; white-tailed deer browse",
    specialFeatures: ["wildlife", "shade-tolerant", "winter-interest"],
  },
  {
    id: "carolina-rose",
    name: "Carolina Rose",
    scientificName: "Rosa carolina",
    type: "shrub",
    heightMin: 1,
    heightMax: 3,
    sizeCategory: "small",
    sun: ["full-sun", "part-shade"],
    moisture: ["dry", "medium"],
    soil: ["well-drained", "loamy", "sandy"],
    bloomMonths: [5, 6, 7],
    bloomColors: ["pink"],
    activeMonths: [4, 5, 6, 7, 8, 9, 10, 11],
    dormantMonths: [12, 1, 2, 3],
    evergreen: false,
    description:
      "A delicate native rose with simple five-petaled pink flowers and fine-textured foliage on thorny stems. Much less aggressive than multiflora rose, spreading slowly by runners. The bright red rose hips persist into winter providing food for birds. Excellent for naturalizing meadows, roadsides, and woodland edges.",
    wildlifeValue: "Hips eaten by birds; nectar for native bees; host for various moth caterpillars",
    specialFeatures: ["wildlife", "winter-interest", "drought-tolerant"],
  },
  {
    id: "dwarf-fothergilla",
    name: "Dwarf Fothergilla",
    scientificName: "Fothergilla gardenii",
    type: "shrub",
    heightMin: 2,
    heightMax: 4,
    sizeCategory: "small",
    sun: ["full-sun", "part-shade"],
    moisture: ["medium", "moist"],
    soil: ["well-drained", "loamy"],
    bloomMonths: [4, 5],
    bloomColors: ["white"],
    activeMonths: [4, 5, 6, 7, 8, 9, 10, 11],
    dormantMonths: [12, 1, 2, 3],
    evergreen: false,
    description:
      "A compact front-of-border native shrub that punches far above its size in ornamental impact. Fragrant white bottlebrush flowers cover the plant before or alongside the emerging leaves in spring. Fall color is among the most brilliant of any native shrub—intense orange, red, and yellow—often all three colors on the same plant simultaneously.",
    wildlifeValue: "Early-season nectar for native bees and bumblebees",
    specialFeatures: ["fall-color", "fragrant", "early-bloom", "compact"],
  },

  // ─── ADDITIONAL PERENNIALS ──────────────────────────────────────────────────
  {
    id: "indian-pink",
    name: "Indian Pink",
    scientificName: "Spigelia marilandica",
    type: "perennial",
    heightMin: 1,
    heightMax: 2,
    sizeCategory: "small",
    sun: ["part-shade", "full-shade"],
    moisture: ["medium", "moist"],
    soil: ["rich", "loamy"],
    bloomMonths: [5, 6],
    bloomColors: ["red", "yellow"],
    activeMonths: [4, 5, 6, 7, 8, 9, 10],
    dormantMonths: [11, 12, 1, 2, 3],
    evergreen: false,
    description:
      "One of the most visually striking native wildflowers in the Southeast—upright tubular flowers are brilliant red on the outside and vivid yellow within, perfectly designed for hummingbirds. Despite its exotic appearance, it's easy to grow in part to full shade with consistent moisture. Slowly forms impressive clumps over time.",
    wildlifeValue: "Primary nectar source for ruby-throated hummingbirds; hummingbird clearwing moth",
    specialFeatures: ["wildlife", "shade-tolerant", "hummingbird"],
  },
  {
    id: "blazing-star",
    name: "Blazing Star",
    scientificName: "Liatris spicata",
    type: "perennial",
    heightMin: 2,
    heightMax: 4,
    sizeCategory: "small",
    sun: ["full-sun"],
    moisture: ["dry", "medium"],
    soil: ["well-drained", "loamy", "sandy"],
    bloomMonths: [7, 8, 9],
    bloomColors: ["purple"],
    activeMonths: [5, 6, 7, 8, 9, 10],
    dormantMonths: [11, 12, 1, 2, 3, 4],
    evergreen: false,
    description:
      "A striking native prairie and meadow plant with tall spikes of vibrant purple flowers that bloom top-to-bottom—unusual among spike-flowered plants. One of the best native plants for attracting monarchs during their fall migration. Extremely drought-tolerant once established, growing from a corm. Also called liatris or gayfeather.",
    wildlifeValue: "Top monarch butterfly nectar plant; goldfinches eat seeds; native bees; skippers",
    specialFeatures: ["wildlife", "drought-tolerant", "pollinator"],
  },
  {
    id: "threadleaf-coreopsis",
    name: "Threadleaf Coreopsis",
    scientificName: "Coreopsis verticillata",
    type: "perennial",
    heightMin: 1,
    heightMax: 2,
    sizeCategory: "small",
    sun: ["full-sun"],
    moisture: ["dry", "medium"],
    soil: ["well-drained", "sandy", "loamy"],
    bloomMonths: [6, 7, 8, 9],
    bloomColors: ["yellow"],
    activeMonths: [5, 6, 7, 8, 9, 10],
    dormantMonths: [11, 12, 1, 2, 3, 4],
    evergreen: false,
    description:
      "One of the longest-blooming and most carefree native perennials, covered in cheerful golden-yellow daisy flowers from early summer through fall. The fine, thread-like foliage creates an airy texture in the garden. Extremely drought-tolerant and adaptable. Deadheading extends the bloom season further. Spreads gently to form attractive masses.",
    wildlifeValue: "Nectar for native bees, bumblebees, and skippers; seeds for goldfinches",
    specialFeatures: ["drought-tolerant", "long-blooming", "pollinator"],
  },
  {
    id: "swamp-hibiscus",
    name: "Swamp Hibiscus",
    scientificName: "Hibiscus moscheutos",
    type: "perennial",
    heightMin: 3,
    heightMax: 7,
    sizeCategory: "medium",
    sun: ["full-sun", "part-shade"],
    moisture: ["moist", "wet"],
    soil: ["rich", "clay", "loamy"],
    bloomMonths: [7, 8, 9],
    bloomColors: ["white", "pink", "deep-pink", "red"],
    activeMonths: [5, 6, 7, 8, 9, 10],
    dormantMonths: [11, 12, 1, 2, 3, 4],
    evergreen: false,
    description:
      "Native to NC wetlands and pond edges, this herbaceous perennial produces enormous flowers—often 8–12 inches across—in shades of white, pink, and red throughout summer. One of the most dramatic native plants available. Emerges late in spring (don't dig it up!), then grows rapidly to form a bold focal point. Loved by ruby-throated hummingbirds.",
    wildlifeValue: "Ruby-throated hummingbird; specialist Ptilothrix bee; native bumblebees",
    specialFeatures: ["wildlife", "wet-tolerance", "large-flowers", "hummingbird"],
  },
  {
    id: "swamp-sunflower",
    name: "Swamp Sunflower",
    scientificName: "Helianthus angustifolius",
    type: "perennial",
    heightMin: 4,
    heightMax: 8,
    sizeCategory: "medium",
    sun: ["full-sun"],
    moisture: ["moist", "wet", "medium"],
    soil: ["clay", "loamy", "rich"],
    bloomMonths: [9, 10, 11],
    bloomColors: ["yellow"],
    activeMonths: [4, 5, 6, 7, 8, 9, 10, 11],
    dormantMonths: [12, 1, 2, 3],
    evergreen: false,
    description:
      "A stunning late-season native perennial that lights up wet meadows, ditches, and rain gardens with masses of golden-yellow flowers when most other plants are winding down. Provides critical late-season nectar for migrating monarchs and native bees stocking up before winter. Can form large colonies in moist conditions. Goldfinches flock to the seed heads.",
    wildlifeValue: "Critical late-season nectar for monarchs; seeds for goldfinches; native bees",
    specialFeatures: ["late-bloom", "wildlife", "wet-tolerance", "pollinator"],
  },
  {
    id: "golden-alexanders",
    name: "Golden Alexanders",
    scientificName: "Zizia aurea",
    type: "perennial",
    heightMin: 1,
    heightMax: 3,
    sizeCategory: "small",
    sun: ["full-sun", "part-shade"],
    moisture: ["medium", "moist"],
    soil: ["well-drained", "loamy", "rich"],
    bloomMonths: [4, 5],
    bloomColors: ["yellow"],
    activeMonths: [3, 4, 5, 6, 7, 8, 9, 10],
    dormantMonths: [11, 12, 1, 2],
    evergreen: false,
    description:
      "An elegant early-blooming native perennial with bright yellow flat-topped flower clusters (umbels) that are among the first important nectar sources of spring. A critical host plant for black swallowtail butterfly caterpillars. Glossy dark green foliage remains attractive through the growing season. Thrives in rain gardens and moist meadows.",
    wildlifeValue: "Host plant for black swallowtail butterfly; early spring nectar for native bees",
    specialFeatures: ["early-bloom", "wildlife", "host-plant", "pollinator"],
  },
  {
    id: "wild-lupine",
    name: "Wild Lupine",
    scientificName: "Lupinus perennis",
    type: "perennial",
    heightMin: 1,
    heightMax: 2,
    sizeCategory: "small",
    sun: ["full-sun", "part-shade"],
    moisture: ["dry", "medium"],
    soil: ["well-drained", "sandy"],
    bloomMonths: [4, 5, 6],
    bloomColors: ["blue-purple", "pink"],
    activeMonths: [3, 4, 5, 6, 7, 8, 9],
    dormantMonths: [10, 11, 12, 1, 2],
    evergreen: false,
    description:
      "A beautiful native wildflower of sandy, dry woodlands and open areas, bearing tall spikes of blue-purple (occasionally pink or white) pea-like flowers. The sole host plant for the federally endangered Karner blue butterfly. Fixes nitrogen in the soil. Does not tolerate clay or wet soils—sandy, well-drained sites are essential for success.",
    wildlifeValue: "Host for Karner blue butterfly; specialist Lupinus bees; bumblebees",
    specialFeatures: ["wildlife", "drought-tolerant", "host-plant", "nitrogen-fixer"],
  },
  {
    id: "blue-sage",
    name: "Blue Sage",
    scientificName: "Salvia azurea",
    type: "perennial",
    heightMin: 3,
    heightMax: 5,
    sizeCategory: "medium",
    sun: ["full-sun"],
    moisture: ["dry", "medium"],
    soil: ["well-drained", "sandy", "loamy"],
    bloomMonths: [9, 10],
    bloomColors: ["sky-blue"],
    activeMonths: [4, 5, 6, 7, 8, 9, 10, 11],
    dormantMonths: [12, 1, 2, 3],
    evergreen: false,
    description:
      "A tall, graceful native sage producing an abundance of true sky-blue flowers in fall when the color is rare in the garden. Stems may flop in rich soils—plant in full sun with lean, well-drained conditions for the best form. A magnet for migrating monarchs and swallowtails. May need staking or cutting back in midsummer to encourage bushier growth.",
    wildlifeValue: "Critical fall nectar for monarch butterflies and native bumblebees; hummingbirds",
    specialFeatures: ["late-bloom", "wildlife", "drought-tolerant", "hummingbird"],
  },
  {
    id: "virginia-bluebells",
    name: "Virginia Bluebells",
    scientificName: "Mertensia virginica",
    type: "perennial",
    heightMin: 1,
    heightMax: 2,
    sizeCategory: "small",
    sun: ["part-shade", "full-shade"],
    moisture: ["moist"],
    soil: ["rich", "loamy"],
    bloomMonths: [3, 4, 5],
    bloomColors: ["blue", "pink"],
    activeMonths: [3, 4, 5],
    dormantMonths: [6, 7, 8, 9, 10, 11, 12, 1, 2],
    evergreen: false,
    description:
      "A beloved spring ephemeral wildflower, carpeting NC floodplain forests with sky-blue trumpet flowers in early spring. Buds open pink and mature to clear blue. The entire plant—foliage and all—disappears completely by early summer, making it ideal for combining with ferns or hostas that fill in later. One of the most elegant native wildflowers.",
    wildlifeValue: "Critical early-spring nectar for bumblebee queens, hummingbirds, and native bees",
    specialFeatures: ["early-bloom", "wildlife", "spring-ephemeral", "shade-tolerant"],
  },
  {
    id: "jack-in-the-pulpit",
    name: "Jack-in-the-Pulpit",
    scientificName: "Arisaema triphyllum",
    type: "perennial",
    heightMin: 1,
    heightMax: 3,
    sizeCategory: "small",
    sun: ["part-shade", "full-shade"],
    moisture: ["moist", "wet"],
    soil: ["rich", "loamy"],
    bloomMonths: [4, 5],
    bloomColors: [],
    activeMonths: [4, 5, 6, 7, 8, 9],
    dormantMonths: [10, 11, 12, 1, 2, 3],
    evergreen: false,
    description:
      "An iconic woodland wildflower with a uniquely hooded spathe striped in green and purple enclosing the club-like spadix—the 'jack in the pulpit.' In fall, clusters of brilliant red berries ripen and are eaten by wood thrushes and other birds. Plants change sex from year to year based on available nutrients. A fascinating conversation piece for shaded gardens.",
    wildlifeValue: "Red berries eaten by wood thrush and other birds; fungus gnats pollinate flowers",
    specialFeatures: ["wildlife", "shade-tolerant", "unique-structure"],
  },

  // ─── ADDITIONAL GRASSES ─────────────────────────────────────────────────────
  {
    id: "big-bluestem",
    name: "Big Bluestem",
    scientificName: "Andropogon gerardii",
    type: "grass",
    heightMin: 4,
    heightMax: 8,
    sizeCategory: "medium",
    sun: ["full-sun"],
    moisture: ["dry", "medium"],
    soil: ["well-drained", "loamy", "clay"],
    bloomMonths: [],
    bloomColors: [],
    activeMonths: [4, 5, 6, 7, 8, 9, 10, 11],
    dormantMonths: [12, 1, 2, 3],
    evergreen: false,
    description:
      "The iconic tallgrass prairie grass of North America, growing 4–8 feet tall with distinctive turkey-foot seed heads. The steel-blue summer foliage turns striking shades of copper and bronze in fall and winter, providing dramatic year-round structure. Extremely drought-tolerant and deep-rooted. One of the highest wildlife value grasses, supporting 65+ species of Lepidoptera.",
    wildlifeValue: "Host for 65+ Lepidoptera species; seeds for birds; nesting habitat for ground birds",
    specialFeatures: ["fall-color", "drought-tolerant", "wildlife", "winter-interest"],
  },
  {
    id: "indian-grass",
    name: "Indian Grass",
    scientificName: "Sorghastrum nutans",
    type: "grass",
    heightMin: 3,
    heightMax: 5,
    sizeCategory: "medium",
    sun: ["full-sun"],
    moisture: ["dry", "medium"],
    soil: ["well-drained", "loamy", "clay", "rocky"],
    bloomMonths: [],
    bloomColors: [],
    activeMonths: [4, 5, 6, 7, 8, 9, 10, 11],
    dormantMonths: [12, 1, 2, 3],
    evergreen: false,
    description:
      "A graceful native warm-season grass with distinctive golden-bronze seed heads that shimmer beautifully in fall and winter light. The blue-green summer foliage transitions to rich copper and gold as temperatures drop. More compact and refined than big bluestem, making it well-suited for designed landscapes and rain gardens. Extremely drought-tolerant once established.",
    wildlifeValue: "Host for several skipper butterflies; seeds for birds; nesting cover",
    specialFeatures: ["fall-color", "drought-tolerant", "wildlife", "winter-interest"],
  },

  // ─── ADDITIONAL FERNS ───────────────────────────────────────────────────────
  {
    id: "royal-fern",
    name: "Royal Fern",
    scientificName: "Osmunda regalis",
    type: "fern",
    heightMin: 3,
    heightMax: 5,
    sizeCategory: "medium",
    sun: ["part-shade", "full-shade"],
    moisture: ["moist", "wet"],
    soil: ["rich", "loamy", "clay"],
    bloomMonths: [],
    bloomColors: [],
    activeMonths: [4, 5, 6, 7, 8, 9, 10],
    dormantMonths: [11, 12, 1, 2, 3],
    evergreen: false,
    description:
      "The largest and most majestic of the native NC ferns, with broad, almost shrub-like fronds that can reach 5 feet. Unlike most ferns, it tolerates standing water and actually thrives along stream banks and pond margins. The fertile fronds bearing spores resemble flower clusters, earning it the nickname 'flowering fern.' Spectacular in wet, shaded spots where little else will grow.",
    wildlifeValue: "Dense fronds provide nesting material and cover for birds and small mammals",
    specialFeatures: ["shade-tolerant", "wet-tolerance", "large-scale"],
  },
  {
    id: "maidenhair-fern",
    name: "Maidenhair Fern",
    scientificName: "Adiantum pedatum",
    type: "fern",
    heightMin: 1,
    heightMax: 2,
    sizeCategory: "small",
    sun: ["part-shade", "full-shade"],
    moisture: ["moist", "medium"],
    soil: ["rich", "loamy", "well-drained"],
    bloomMonths: [],
    bloomColors: [],
    activeMonths: [4, 5, 6, 7, 8, 9, 10],
    dormantMonths: [11, 12, 1, 2, 3],
    evergreen: false,
    description:
      "One of the most elegant native ferns, with delicate fan-shaped fronds held on distinctive glossy black stems arranged in a graceful horizontal plane. Creates a refined, airy texture in shade gardens. Unlike many ferns, it prefers moderately moist (not soggy) conditions. Slow to establish but long-lived. Unfurling fiddleheads in spring are especially ornamental.",
    wildlifeValue: "Cover and nesting material for birds; supports forest understory ecosystem",
    specialFeatures: ["shade-tolerant", "elegant-texture"],
  },

  // ─── ADDITIONAL GROUNDCOVERS ────────────────────────────────────────────────
  {
    id: "partridgeberry",
    name: "Partridgeberry",
    scientificName: "Mitchella repens",
    type: "groundcover",
    heightMin: 0,
    heightMax: 0.2,
    sizeCategory: "small",
    sun: ["part-shade", "full-shade"],
    moisture: ["moist", "medium"],
    soil: ["well-drained", "rich", "loamy"],
    bloomMonths: [5, 6, 7],
    bloomColors: ["white"],
    activeMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    dormantMonths: [],
    evergreen: true,
    description:
      "A charming native evergreen groundcover that hugs the forest floor, forming dense mats of small glossy leaves with white veining. Pairs of tiny fragrant white tubular flowers in summer are followed by bright red berries that persist through winter, providing a lovely contrast against the dark foliage. An ideal groundcover beneath acid-loving shrubs like blueberries and rhododendrons.",
    wildlifeValue: "Berries eaten by grouse, turkeys, and foxes; cover for small forest animals",
    specialFeatures: ["evergreen", "wildlife", "shade-tolerant", "winter-interest"],
  },,

  // ─── ADDITIONAL PLANTS (batch-merged) ─────────────────────────────────────
  {
    "id": "white-oak",
    "name": "White Oak",
    "scientificName": "Quercus alba",
    "type": "tree",
    "heightMin": 50,
    "heightMax": 80,
    "sizeCategory": "large",
    "sun": [
      "full-sun",
      "part-shade"
    ],
    "moisture": [
      "dry",
      "medium"
    ],
    "soil": [
      "well-drained",
      "loamy",
      "clay"
    ],
    "bloomMonths": [],
    "bloomColors": [],
    "activeMonths": [
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11
    ],
    "dormantMonths": [
      12,
      1,
      2,
      3
    ],
    "evergreen": false,
    "description": "The quintessential shade tree of NC forests, long-lived and stately with a broad rounded crown. Its acorns are the single most important food source for deer, turkey, and dozens of other wildlife species. Fall foliage ranges from deep red to wine-purple.",
    "wildlifeValue": "Acorns are top food for deer, turkey, squirrels, black bears; host to 500+ caterpillar species",
    "specialFeatures": [
      "fall-color",
      "wildlife",
      "drought-tolerant"
    ]
  },
  {
    "id": "southern-red-oak",
    "name": "Southern Red Oak",
    "scientificName": "Quercus falcata",
    "type": "tree",
    "heightMin": 60,
    "heightMax": 80,
    "sizeCategory": "large",
    "sun": [
      "full-sun"
    ],
    "moisture": [
      "dry",
      "medium"
    ],
    "soil": [
      "well-drained",
      "loamy",
      "clay",
      "sandy"
    ],
    "bloomMonths": [],
    "bloomColors": [],
    "activeMonths": [
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11
    ],
    "dormantMonths": [
      12,
      1,
      2,
      3
    ],
    "evergreen": false,
    "description": "A fast-growing Piedmont and Coastal Plain oak with distinctive three-lobed leaves. Tolerates dry, poor soils better than most oaks. Provides excellent wildlife value through its abundant acorn crops and supports hundreds of caterpillar species.",
    "wildlifeValue": "Acorns for wildlife; host for hundreds of Lepidoptera species",
    "specialFeatures": [
      "wildlife",
      "drought-tolerant"
    ]
  },
  {
    "id": "willow-oak",
    "name": "Willow Oak",
    "scientificName": "Quercus phellos",
    "type": "tree",
    "heightMin": 40,
    "heightMax": 60,
    "sizeCategory": "large",
    "sun": [
      "full-sun",
      "part-shade"
    ],
    "moisture": [
      "medium",
      "moist"
    ],
    "soil": [
      "loamy",
      "clay",
      "well-drained"
    ],
    "bloomMonths": [],
    "bloomColors": [],
    "activeMonths": [
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11
    ],
    "dormantMonths": [
      12,
      1,
      2,
      3
    ],
    "evergreen": false,
    "description": "One of the most popular street and shade trees in the NC Piedmont, with fine-textured willow-like leaves and a graceful symmetrical form. Fast-growing for an oak. Small acorns are produced in abundance and are an important food source for wood ducks and other birds.",
    "wildlifeValue": "Small acorns heavily used by wood ducks, mallards, and songbirds",
    "specialFeatures": [
      "wildlife",
      "fall-color"
    ]
  },
  {
    "id": "chestnut-oak",
    "name": "Chestnut Oak",
    "scientificName": "Quercus montana",
    "type": "tree",
    "heightMin": 50,
    "heightMax": 70,
    "sizeCategory": "large",
    "sun": [
      "full-sun",
      "part-shade"
    ],
    "moisture": [
      "dry",
      "medium"
    ],
    "soil": [
      "well-drained",
      "rocky",
      "sandy"
    ],
    "bloomMonths": [],
    "bloomColors": [],
    "activeMonths": [
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11
    ],
    "dormantMonths": [
      12,
      1,
      2,
      3
    ],
    "evergreen": false,
    "description": "The dominant oak of NC's dry rocky ridges and mountain slopes, identifiable by its deeply furrowed bark and large chestnut-like leaves. Produces the largest acorns of any NC oak, an essential food source for black bears and turkey. Extremely drought-tolerant once established.",
    "wildlifeValue": "Large acorns critical for black bears, turkey, and deer on mountain ridges",
    "specialFeatures": [
      "wildlife",
      "drought-tolerant",
      "fall-color"
    ]
  },
  {
    "id": "post-oak",
    "name": "Post Oak",
    "scientificName": "Quercus stellata",
    "type": "tree",
    "heightMin": 35,
    "heightMax": 50,
    "sizeCategory": "large",
    "sun": [
      "full-sun"
    ],
    "moisture": [
      "dry",
      "medium"
    ],
    "soil": [
      "well-drained",
      "sandy",
      "clay",
      "rocky"
    ],
    "bloomMonths": [],
    "bloomColors": [],
    "activeMonths": [
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11
    ],
    "dormantMonths": [
      12,
      1,
      2,
      3
    ],
    "evergreen": false,
    "description": "A tough, drought-tolerant oak of NC's driest sites with distinctive cross-shaped leaves. Slower-growing but extremely long-lived. Its dense, rot-resistant wood was historically used for fence posts. Important wildlife tree on sites too dry for other oaks.",
    "wildlifeValue": "Acorns for wildlife; tolerates poorest soils where other oaks cannot grow",
    "specialFeatures": [
      "wildlife",
      "drought-tolerant"
    ]
  },
  {
    "id": "scarlet-oak",
    "name": "Scarlet Oak",
    "scientificName": "Quercus coccinea",
    "type": "tree",
    "heightMin": 50,
    "heightMax": 70,
    "sizeCategory": "large",
    "sun": [
      "full-sun"
    ],
    "moisture": [
      "dry",
      "medium"
    ],
    "soil": [
      "well-drained",
      "sandy",
      "loamy"
    ],
    "bloomMonths": [],
    "bloomColors": [],
    "activeMonths": [
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11
    ],
    "dormantMonths": [
      12,
      1,
      2,
      3
    ],
    "evergreen": false,
    "description": "Named for its spectacular scarlet fall color — among the most brilliant of any NC tree. The deeply cut, glossy leaves are attractive all season. A common oak of dry upland forests in the Piedmont and mountains. Open grown trees develop a handsome rounded crown.",
    "wildlifeValue": "Acorns for wildlife; hosts hundreds of caterpillar species",
    "specialFeatures": [
      "fall-color",
      "wildlife",
      "drought-tolerant"
    ]
  },
  {
    "id": "overcup-oak",
    "name": "Overcup Oak",
    "scientificName": "Quercus lyrata",
    "type": "tree",
    "heightMin": 40,
    "heightMax": 60,
    "sizeCategory": "large",
    "sun": [
      "full-sun",
      "part-shade"
    ],
    "moisture": [
      "moist",
      "wet"
    ],
    "soil": [
      "clay",
      "loamy"
    ],
    "bloomMonths": [],
    "bloomColors": [],
    "activeMonths": [
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11
    ],
    "dormantMonths": [
      12,
      1,
      2,
      3
    ],
    "evergreen": false,
    "description": "A bottomland oak that tolerates prolonged flooding better than almost any other oak species. Named for its distinctive acorn cap that nearly covers the entire nut. An excellent choice for wet sites, rain gardens, and floodplain restoration in NC's Coastal Plain and Piedmont.",
    "wildlifeValue": "Acorns for waterfowl, deer, and squirrels; flood-tolerant habitat tree",
    "specialFeatures": [
      "wildlife",
      "wet-tolerance"
    ]
  },
  {
    "id": "live-oak",
    "name": "Live Oak",
    "scientificName": "Quercus virginiana",
    "type": "tree",
    "heightMin": 40,
    "heightMax": 60,
    "sizeCategory": "large",
    "sun": [
      "full-sun",
      "part-shade"
    ],
    "moisture": [
      "dry",
      "medium",
      "moist"
    ],
    "soil": [
      "well-drained",
      "sandy",
      "loamy",
      "clay"
    ],
    "bloomMonths": [],
    "bloomColors": [],
    "activeMonths": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "dormantMonths": [],
    "evergreen": true,
    "description": "The iconic spreading evergreen oak of NC's coast and lower Piedmont, with massive horizontal limbs draped in resurrection fern and Spanish moss. Incredibly wind-resistant and salt-tolerant. One of the most long-lived trees in eastern North America, with some specimens exceeding 500 years.",
    "wildlifeValue": "Year-round cover and acorns; supports epiphytes like resurrection fern",
    "specialFeatures": [
      "evergreen",
      "wildlife",
      "drought-tolerant",
      "salt-tolerant"
    ]
  },
  {
    "id": "water-oak",
    "name": "Water Oak",
    "scientificName": "Quercus nigra",
    "type": "tree",
    "heightMin": 50,
    "heightMax": 70,
    "sizeCategory": "large",
    "sun": [
      "full-sun",
      "part-shade"
    ],
    "moisture": [
      "medium",
      "moist",
      "wet"
    ],
    "soil": [
      "loamy",
      "clay",
      "sandy"
    ],
    "bloomMonths": [],
    "bloomColors": [],
    "activeMonths": [
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "dormantMonths": [
      1,
      2
    ],
    "evergreen": false,
    "description": "A fast-growing, semi-evergreen oak common throughout NC's Piedmont and Coastal Plain. Holds its leaves late into winter, providing extended visual interest. Tolerates wet soils and urban conditions. Produces heavy acorn crops that are highly valued by wildlife.",
    "wildlifeValue": "Abundant acorns for deer, turkey, squirrels, and ducks",
    "specialFeatures": [
      "wildlife",
      "wet-tolerance"
    ]
  },
  {
    "id": "american-beech",
    "name": "American Beech",
    "scientificName": "Fagus grandifolia",
    "type": "tree",
    "heightMin": 50,
    "heightMax": 70,
    "sizeCategory": "large",
    "sun": [
      "part-shade",
      "full-shade"
    ],
    "moisture": [
      "medium",
      "moist"
    ],
    "soil": [
      "well-drained",
      "loamy",
      "rich"
    ],
    "bloomMonths": [],
    "bloomColors": [],
    "activeMonths": [
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11
    ],
    "dormantMonths": [
      12,
      1,
      2,
      3
    ],
    "evergreen": false,
    "description": "One of the most majestic NC forest trees, with smooth silvery-gray bark and a broad dense canopy. Marcescent leaves turn golden-bronze and persist through much of winter, adding interest. Beechnuts are an important food for wildlife. Prefers rich, undisturbed forest soils.",
    "wildlifeValue": "Beechnuts eaten by bears, turkeys, and songbirds; cavity nesting",
    "specialFeatures": [
      "fall-color",
      "wildlife",
      "winter-interest",
      "shade-tolerant"
    ]
  },
  {
    "id": "shagbark-hickory",
    "name": "Shagbark Hickory",
    "scientificName": "Carya ovata",
    "type": "tree",
    "heightMin": 60,
    "heightMax": 80,
    "sizeCategory": "large",
    "sun": [
      "full-sun",
      "part-shade"
    ],
    "moisture": [
      "dry",
      "medium"
    ],
    "soil": [
      "well-drained",
      "loamy",
      "rich"
    ],
    "bloomMonths": [],
    "bloomColors": [],
    "activeMonths": [
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11
    ],
    "dormantMonths": [
      12,
      1,
      2,
      3
    ],
    "evergreen": false,
    "description": "Instantly recognizable by its shaggy peeling bark strips, this stately hickory produces the sweetest, most edible nuts of any NC hickory. The large compound leaves turn rich golden-yellow in fall. Deep taproots make it very drought-tolerant but difficult to transplant.",
    "wildlifeValue": "Nuts are critical food for squirrels, chipmunks, and black bears",
    "specialFeatures": [
      "fall-color",
      "wildlife",
      "edible",
      "winter-interest"
    ]
  },
  {
    "id": "mockernut-hickory",
    "name": "Mockernut Hickory",
    "scientificName": "Carya tomentosa",
    "type": "tree",
    "heightMin": 50,
    "heightMax": 70,
    "sizeCategory": "large",
    "sun": [
      "full-sun",
      "part-shade"
    ],
    "moisture": [
      "dry",
      "medium"
    ],
    "soil": [
      "well-drained",
      "loamy",
      "clay"
    ],
    "bloomMonths": [],
    "bloomColors": [],
    "activeMonths": [
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11
    ],
    "dormantMonths": [
      12,
      1,
      2,
      3
    ],
    "evergreen": false,
    "description": "The most common hickory in NC's Piedmont forests, named 'mockernut' because the thick shell yields little nut meat. Fragrant compound leaves turn golden-yellow in fall. Extremely tough wood was prized for tool handles. An important wildlife food tree.",
    "wildlifeValue": "Nuts for squirrels and bears; host for hickory horned devil moth",
    "specialFeatures": [
      "fall-color",
      "wildlife"
    ]
  },
  {
    "id": "pignut-hickory",
    "name": "Pignut Hickory",
    "scientificName": "Carya glabra",
    "type": "tree",
    "heightMin": 50,
    "heightMax": 70,
    "sizeCategory": "large",
    "sun": [
      "full-sun",
      "part-shade"
    ],
    "moisture": [
      "dry",
      "medium"
    ],
    "soil": [
      "well-drained",
      "loamy",
      "rocky"
    ],
    "bloomMonths": [],
    "bloomColors": [],
    "activeMonths": [
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11
    ],
    "dormantMonths": [
      12,
      1,
      2,
      3
    ],
    "evergreen": false,
    "description": "A common upland hickory of NC forests, often found on drier ridges alongside oaks. Produces pear-shaped nuts that are slightly bitter but still valued by wildlife. The smooth, tight bark distinguishes it from shagbark hickory. Golden-yellow fall color.",
    "wildlifeValue": "Nuts eaten by squirrels, chipmunks, foxes, and bears",
    "specialFeatures": [
      "fall-color",
      "wildlife",
      "drought-tolerant"
    ]
  },
  {
    "id": "bitternut-hickory",
    "name": "Bitternut Hickory",
    "scientificName": "Carya cordiformis",
    "type": "tree",
    "heightMin": 50,
    "heightMax": 70,
    "sizeCategory": "large",
    "sun": [
      "full-sun",
      "part-shade"
    ],
    "moisture": [
      "medium",
      "moist"
    ],
    "soil": [
      "loamy",
      "rich",
      "well-drained"
    ],
    "bloomMonths": [],
    "bloomColors": [],
    "activeMonths": [
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11
    ],
    "dormantMonths": [
      12,
      1,
      2,
      3
    ],
    "evergreen": false,
    "description": "Identified by its distinctive bright yellow winter buds and thin-shelled bitter nuts. The fastest-growing hickory, common in NC bottomlands and rich coves. Golden-yellow fall color. While the nuts are too bitter for humans, they are still consumed by wildlife.",
    "wildlifeValue": "Nuts eaten by squirrels and ducks; host for luna moth",
    "specialFeatures": [
      "fall-color",
      "wildlife",
      "winter-interest"
    ]
  },
  {
    "id": "american-sycamore",
    "name": "American Sycamore",
    "scientificName": "Platanus occidentalis",
    "type": "tree",
    "heightMin": 70,
    "heightMax": 100,
    "sizeCategory": "large",
    "sun": [
      "full-sun",
      "part-shade"
    ],
    "moisture": [
      "medium",
      "moist",
      "wet"
    ],
    "soil": [
      "loamy",
      "clay",
      "rich"
    ],
    "bloomMonths": [],
    "bloomColors": [],
    "activeMonths": [
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11
    ],
    "dormantMonths": [
      12,
      1,
      2,
      3
    ],
    "evergreen": false,
    "description": "The largest native tree in eastern North America, often reaching massive proportions along NC streams and bottomlands. Its striking white-and-olive patchwork bark is one of the most recognizable features of any tree. Tolerates flooding and poor drainage. Fast growing.",
    "wildlifeValue": "Seeds eaten by finches; large cavities used by wood ducks, owls, and raccoons",
    "specialFeatures": [
      "wildlife",
      "wet-tolerance",
      "winter-interest"
    ]
  },
  {
    "id": "red-maple",
    "name": "Red Maple",
    "scientificName": "Acer rubrum",
    "type": "tree",
    "heightMin": 40,
    "heightMax": 60,
    "sizeCategory": "large",
    "sun": [
      "full-sun",
      "part-shade"
    ],
    "moisture": [
      "medium",
      "moist",
      "wet"
    ],
    "soil": [
      "loamy",
      "clay",
      "sandy",
      "rich"
    ],
    "bloomMonths": [
      2,
      3
    ],
    "bloomColors": [
      "red"
    ],
    "activeMonths": [
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11
    ],
    "dormantMonths": [
      12,
      1
    ],
    "evergreen": false,
    "description": "Red in every season — tiny red flowers in late winter are among the first signs of spring, followed by red samaras, green summer foliage, and brilliant scarlet-to-orange fall color. The most adaptable native maple, growing in both swamps and dry uplands across all of NC.",
    "wildlifeValue": "Very early pollen/nectar source; seeds eaten by birds and squirrels",
    "specialFeatures": [
      "fall-color",
      "early-bloom",
      "wildlife",
      "wet-tolerance"
    ]
  },
  {
    "id": "sugar-maple",
    "name": "Sugar Maple",
    "scientificName": "Acer saccharum",
    "type": "tree",
    "heightMin": 50,
    "heightMax": 75,
    "sizeCategory": "large",
    "sun": [
      "full-sun",
      "part-shade"
    ],
    "moisture": [
      "medium",
      "moist"
    ],
    "soil": [
      "well-drained",
      "loamy",
      "rich"
    ],
    "bloomMonths": [
      3,
      4
    ],
    "bloomColors": [
      "pale-yellow"
    ],
    "activeMonths": [
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11
    ],
    "dormantMonths": [
      12,
      1,
      2
    ],
    "evergreen": false,
    "description": "The premier fall color tree, producing the most vivid orange, gold, and scarlet foliage of any NC native. In NC it's primarily a mountain species, thriving in rich coves at higher elevations. Can be tapped for maple syrup. Provides dense, cooling shade in summer.",
    "wildlifeValue": "Early spring flowers provide pollen for bees; seeds eaten by birds and squirrels",
    "specialFeatures": [
      "fall-color",
      "wildlife",
      "edible"
    ]
  },
  {
    "id": "eastern-red-cedar",
    "name": "Eastern Red Cedar",
    "scientificName": "Juniperus virginiana",
    "type": "tree",
    "heightMin": 30,
    "heightMax": 50,
    "sizeCategory": "large",
    "sun": [
      "full-sun",
      "part-shade"
    ],
    "moisture": [
      "dry",
      "medium"
    ],
    "soil": [
      "well-drained",
      "rocky",
      "clay",
      "sandy"
    ],
    "bloomMonths": [],
    "bloomColors": [],
    "activeMonths": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "dormantMonths": [],
    "evergreen": true,
    "description": "An extremely adaptable evergreen that thrives on the poorest, driest sites in NC. Its blue berry-like cones are a critical winter food for cedar waxwings and over 50 other bird species. Dense foliage provides year-round shelter for birds. Aromatic wood is naturally rot-resistant.",
    "wildlifeValue": "Berries eaten by 50+ bird species; year-round cover; host for juniper hairstreak",
    "specialFeatures": [
      "evergreen",
      "wildlife",
      "drought-tolerant",
      "winter-interest"
    ]
  },
  {
    "id": "longleaf-pine",
    "name": "Longleaf Pine",
    "scientificName": "Pinus palustris",
    "type": "tree",
    "heightMin": 60,
    "heightMax": 80,
    "sizeCategory": "large",
    "sun": [
      "full-sun"
    ],
    "moisture": [
      "dry",
      "medium"
    ],
    "soil": [
      "well-drained",
      "sandy"
    ],
    "bloomMonths": [],
    "bloomColors": [],
    "activeMonths": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "dormantMonths": [],
    "evergreen": true,
    "description": "The iconic pine of NC's Sandhills and Coastal Plain, with the longest needles of any eastern pine (up to 18 inches). Once covered 90 million acres, now one of the most endangered ecosystems in North America. Longleaf pine savannas support extraordinary biodiversity including red-cockaded woodpeckers and Venus flytraps.",
    "wildlifeValue": "Essential habitat for red-cockaded woodpecker, fox squirrel, and hundreds of savanna species",
    "specialFeatures": [
      "evergreen",
      "wildlife",
      "drought-tolerant"
    ]
  },
  {
    "id": "loblolly-pine",
    "name": "Loblolly Pine",
    "scientificName": "Pinus taeda",
    "type": "tree",
    "heightMin": 60,
    "heightMax": 90,
    "sizeCategory": "large",
    "sun": [
      "full-sun"
    ],
    "moisture": [
      "medium",
      "moist"
    ],
    "soil": [
      "loamy",
      "clay",
      "sandy"
    ],
    "bloomMonths": [],
    "bloomColors": [],
    "activeMonths": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "dormantMonths": [],
    "evergreen": true,
    "description": "The most common pine in NC and the backbone of the southeastern timber industry. Fast-growing and adaptable, it quickly colonizes abandoned fields and disturbed sites. The large seeds are an important food for many bird species. Mature trees provide nesting sites for hawks and owls.",
    "wildlifeValue": "Seeds eaten by many birds; nesting habitat for raptors; pine warbler habitat",
    "specialFeatures": [
      "evergreen",
      "wildlife"
    ]
  },
  {
    "id": "shortleaf-pine",
    "name": "Shortleaf Pine",
    "scientificName": "Pinus echinata",
    "type": "tree",
    "heightMin": 50,
    "heightMax": 70,
    "sizeCategory": "large",
    "sun": [
      "full-sun"
    ],
    "moisture": [
      "dry",
      "medium"
    ],
    "soil": [
      "well-drained",
      "sandy",
      "loamy",
      "rocky"
    ],
    "bloomMonths": [],
    "bloomColors": [],
    "activeMonths": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "dormantMonths": [],
    "evergreen": true,
    "description": "A Piedmont and mountain pine distinguished by small, prickly cones and the unique ability to resprout from the base after fire — the only eastern pine that can do this. More drought-tolerant and longer-lived than loblolly. Once much more common, it has declined as fire suppression favors hardwoods.",
    "wildlifeValue": "Seeds for birds and squirrels; important component of fire-maintained ecosystems",
    "specialFeatures": [
      "evergreen",
      "wildlife",
      "drought-tolerant"
    ]
  },
  {
    "id": "virginia-pine",
    "name": "Virginia Pine",
    "scientificName": "Pinus virginiana",
    "type": "tree",
    "heightMin": 30,
    "heightMax": 50,
    "sizeCategory": "large",
    "sun": [
      "full-sun"
    ],
    "moisture": [
      "dry",
      "medium"
    ],
    "soil": [
      "well-drained",
      "sandy",
      "clay",
      "rocky"
    ],
    "bloomMonths": [],
    "bloomColors": [],
    "activeMonths": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "dormantMonths": [],
    "evergreen": true,
    "description": "A scrappy, short-lived pioneer pine that colonizes the poorest clay and rocky soils where little else will grow. Common in the NC Piedmont on old fields and road cuts. Short twisted needles in pairs and persistent prickly cones. Provides important early-succession habitat for wildlife.",
    "wildlifeValue": "Seeds for birds; early-succession habitat; nesting cover",
    "specialFeatures": [
      "evergreen",
      "wildlife",
      "drought-tolerant"
    ]
  },
  {
    "id": "bald-cypress",
    "name": "Bald Cypress",
    "scientificName": "Taxodium distichum",
    "type": "tree",
    "heightMin": 50,
    "heightMax": 70,
    "sizeCategory": "large",
    "sun": [
      "full-sun",
      "part-shade"
    ],
    "moisture": [
      "moist",
      "wet"
    ],
    "soil": [
      "loamy",
      "clay",
      "rich"
    ],
    "bloomMonths": [],
    "bloomColors": [],
    "activeMonths": [
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11
    ],
    "dormantMonths": [
      12,
      1,
      2,
      3
    ],
    "evergreen": false,
    "description": "An ancient deciduous conifer of NC's swamps and river edges, recognizable by its fluted trunk, 'knees' that emerge from standing water, and feathery foliage that turns russet-bronze in fall. Incredibly long-lived — some NC specimens exceed 1,000 years. Tolerates permanent flooding.",
    "wildlifeValue": "Cavity nesting for wood ducks and owls; seeds eaten by waterfowl",
    "specialFeatures": [
      "fall-color",
      "wildlife",
      "wet-tolerance",
      "winter-interest"
    ]
  },
  {
    "id": "atlantic-white-cedar",
    "name": "Atlantic White Cedar",
    "scientificName": "Chamaecyparis thyoides",
    "type": "tree",
    "heightMin": 40,
    "heightMax": 60,
    "sizeCategory": "large",
    "sun": [
      "full-sun",
      "part-shade"
    ],
    "moisture": [
      "moist",
      "wet"
    ],
    "soil": [
      "sandy",
      "rich"
    ],
    "bloomMonths": [],
    "bloomColors": [],
    "activeMonths": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "dormantMonths": [],
    "evergreen": true,
    "description": "A rare, slender evergreen conifer found in pocosins and swamps of NC's Coastal Plain. Forms dense stands in acidic wetlands. The aromatic, rot-resistant wood was once heavily logged. Now an important conservation species, its swamp habitat supports unique plant and animal communities.",
    "wildlifeValue": "Seeds eaten by songbirds; year-round cover in wetlands; supports Hessel's hairstreak butterfly",
    "specialFeatures": [
      "evergreen",
      "wildlife",
      "wet-tolerance"
    ]
  },
  {
    "id": "eastern-hemlock",
    "name": "Eastern Hemlock",
    "scientificName": "Tsuga canadensis",
    "type": "tree",
    "heightMin": 40,
    "heightMax": 70,
    "sizeCategory": "large",
    "sun": [
      "part-shade",
      "full-shade"
    ],
    "moisture": [
      "moist"
    ],
    "soil": [
      "well-drained",
      "rich",
      "loamy"
    ],
    "bloomMonths": [],
    "bloomColors": [],
    "activeMonths": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "dormantMonths": [],
    "evergreen": true,
    "description": "A graceful evergreen of NC mountain gorges and north-facing slopes, with delicate feathery branches that create deep shade. Currently threatened by the hemlock woolly adelgid, an invasive pest. Cool-loving and shade-tolerant, it creates unique microhabitats along mountain streams. An irreplaceable component of NC mountain ecosystems.",
    "wildlifeValue": "Year-round thermal cover; seeds for birds; shades mountain streams for trout",
    "specialFeatures": [
      "evergreen",
      "shade-tolerant",
      "wildlife"
    ]
  },
  {
    "id": "american-hornbeam",
    "name": "American Hornbeam",
    "scientificName": "Carpinus caroliniana",
    "type": "tree",
    "heightMin": 20,
    "heightMax": 35,
    "sizeCategory": "large",
    "sun": [
      "part-shade",
      "full-shade"
    ],
    "moisture": [
      "medium",
      "moist"
    ],
    "soil": [
      "loamy",
      "rich",
      "clay"
    ],
    "bloomMonths": [],
    "bloomColors": [],
    "activeMonths": [
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11
    ],
    "dormantMonths": [
      12,
      1,
      2,
      3
    ],
    "evergreen": false,
    "description": "A small understory tree with distinctive smooth blue-gray bark and a muscular, fluted trunk — often called 'musclewood' or 'ironwood.' The wood is extremely hard. Orange-red fall color. An excellent shade-tolerant tree for smaller gardens and naturalistic plantings under tall canopy trees.",
    "wildlifeValue": "Seeds eaten by songbirds and turkeys; host for many moth species",
    "specialFeatures": [
      "fall-color",
      "shade-tolerant",
      "winter-interest"
    ]
  },
  {
    "id": "hophornbeam",
    "name": "Hophornbeam",
    "scientificName": "Ostrya virginiana",
    "type": "tree",
    "heightMin": 25,
    "heightMax": 40,
    "sizeCategory": "large",
    "sun": [
      "part-shade",
      "full-shade"
    ],
    "moisture": [
      "dry",
      "medium"
    ],
    "soil": [
      "well-drained",
      "loamy",
      "rocky"
    ],
    "bloomMonths": [],
    "bloomColors": [],
    "activeMonths": [
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11
    ],
    "dormantMonths": [
      12,
      1,
      2,
      3
    ],
    "evergreen": false,
    "description": "A graceful small tree of dry, shady woodland slopes with shreddy brown bark and hop-like fruit clusters. The hardest wood of any NC tree. Tolerates dry, rocky soils. Attractive golden-yellow fall color. An excellent understory tree that deserves wider use in native landscapes.",
    "wildlifeValue": "Seeds eaten by songbirds and grouse; buds eaten by ruffed grouse in winter",
    "specialFeatures": [
      "fall-color",
      "shade-tolerant",
      "drought-tolerant"
    ]
  },
  {
    "id": "black-walnut",
    "name": "Black Walnut",
    "scientificName": "Juglans nigra",
    "type": "tree",
    "heightMin": 50,
    "heightMax": 75,
    "sizeCategory": "large",
    "sun": [
      "full-sun"
    ],
    "moisture": [
      "medium",
      "moist"
    ],
    "soil": [
      "rich",
      "loamy",
      "well-drained"
    ],
    "bloomMonths": [],
    "bloomColors": [],
    "activeMonths": [
      5,
      6,
      7,
      8,
      9,
      10
    ],
    "dormantMonths": [
      11,
      12,
      1,
      2,
      3,
      4
    ],
    "evergreen": false,
    "description": "Produces the most prized hardwood lumber in North America and delicious edible nuts. Among the last trees to leaf out in spring and the first to drop leaves in fall. Releases juglone, a chemical that inhibits some nearby plants. Best in rich bottomland soils.",
    "wildlifeValue": "Nuts critical for squirrels; host for luna moth and regal moth",
    "specialFeatures": [
      "wildlife",
      "edible"
    ]
  },
  {
    "id": "american-elm",
    "name": "American Elm",
    "scientificName": "Ulmus americana",
    "type": "tree",
    "heightMin": 60,
    "heightMax": 80,
    "sizeCategory": "large",
    "sun": [
      "full-sun",
      "part-shade"
    ],
    "moisture": [
      "medium",
      "moist"
    ],
    "soil": [
      "loamy",
      "clay",
      "rich"
    ],
    "bloomMonths": [],
    "bloomColors": [],
    "activeMonths": [
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11
    ],
    "dormantMonths": [
      12,
      1,
      2,
      3
    ],
    "evergreen": false,
    "description": "Once the most beloved shade tree in America, with a majestic vase-shaped form. Devastated by Dutch elm disease but not extinct — survivors persist throughout NC. Disease-resistant cultivars are now available. Provides excellent wildlife value and supports over 200 caterpillar species.",
    "wildlifeValue": "Seeds eaten by birds; host for 200+ Lepidoptera species including mourning cloak",
    "specialFeatures": [
      "wildlife",
      "fall-color"
    ]
  },
  {
    "id": "winged-elm",
    "name": "Winged Elm",
    "scientificName": "Ulmus alata",
    "type": "tree",
    "heightMin": 30,
    "heightMax": 50,
    "sizeCategory": "large",
    "sun": [
      "full-sun",
      "part-shade"
    ],
    "moisture": [
      "dry",
      "medium"
    ],
    "soil": [
      "well-drained",
      "loamy",
      "clay",
      "rocky"
    ],
    "bloomMonths": [],
    "bloomColors": [],
    "activeMonths": [
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11
    ],
    "dormantMonths": [
      12,
      1,
      2
    ],
    "evergreen": false,
    "description": "Named for the distinctive corky 'wings' along its twigs, this adaptable small elm tolerates drought and poor soils better than American elm. Common in NC's Piedmont on dry slopes and fencerows. More resistant to Dutch elm disease than American elm.",
    "wildlifeValue": "Seeds eaten by birds; host for question mark butterfly and other Lepidoptera",
    "specialFeatures": [
      "wildlife",
      "drought-tolerant",
      "winter-interest"
    ]
  },
  {
    "id": "sugarberry",
    "name": "Sugarberry",
    "scientificName": "Celtis laevigata",
    "type": "tree",
    "heightMin": 40,
    "heightMax": 60,
    "sizeCategory": "large",
    "sun": [
      "full-sun",
      "part-shade"
    ],
    "moisture": [
      "medium",
      "moist"
    ],
    "soil": [
      "loamy",
      "clay",
      "rich"
    ],
    "bloomMonths": [],
    "bloomColors": [],
    "activeMonths": [
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11
    ],
    "dormantMonths": [
      12,
      1,
      2,
      3
    ],
    "evergreen": false,
    "description": "A graceful bottomland tree with smooth gray warty bark and small sweet berries relished by birds. Tolerates wet soils and urban conditions. Common in NC floodplains. The berries persist into winter, making it an excellent wildlife tree. Host plant for hackberry emperor and other butterflies.",
    "wildlifeValue": "Berries eaten by 40+ bird species; host for hackberry emperor and snout butterflies",
    "specialFeatures": [
      "wildlife",
      "wet-tolerance"
    ]
  },
  {
    "id": "common-hackberry",
    "name": "Common Hackberry",
    "scientificName": "Celtis occidentalis",
    "type": "tree",
    "heightMin": 40,
    "heightMax": 60,
    "sizeCategory": "large",
    "sun": [
      "full-sun",
      "part-shade"
    ],
    "moisture": [
      "dry",
      "medium",
      "moist"
    ],
    "soil": [
      "well-drained",
      "loamy",
      "clay",
      "rocky"
    ],
    "bloomMonths": [],
    "bloomColors": [],
    "activeMonths": [
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11
    ],
    "dormantMonths": [
      12,
      1,
      2,
      3
    ],
    "evergreen": false,
    "description": "One of the toughest native trees, thriving in wind, drought, poor soils, and urban conditions. Distinctive warty bark and sweet berries. Overlaps with Sugarberry in NC's Piedmont. Host plant for hackberry emperor, American snout, and other butterflies. A superb urban-tolerant wildlife tree.",
    "wildlifeValue": "Berries eaten by many birds and mammals; host for hackberry butterflies",
    "specialFeatures": [
      "wildlife",
      "drought-tolerant"
    ]
  },
  {
    "id": "black-cherry",
    "name": "Black Cherry",
    "scientificName": "Prunus serotina",
    "type": "tree",
    "heightMin": 50,
    "heightMax": 70,
    "sizeCategory": "large",
    "sun": [
      "full-sun",
      "part-shade"
    ],
    "moisture": [
      "dry",
      "medium"
    ],
    "soil": [
      "well-drained",
      "loamy",
      "rich"
    ],
    "bloomMonths": [
      4,
      5
    ],
    "bloomColors": [
      "white"
    ],
    "activeMonths": [
      4,
      5,
      6,
      7,
      8,
      9,
      10
    ],
    "dormantMonths": [
      11,
      12,
      1,
      2,
      3
    ],
    "evergreen": false,
    "description": "Showy drooping clusters of white flowers in spring are followed by small dark cherries that are a top wildlife food. The dark reddish-brown bark of mature trees is distinctive. Extremely high wildlife value — supports over 450 caterpillar species, more than almost any other tree genus.",
    "wildlifeValue": "Fruits eaten by 70+ bird species; host for 450+ Lepidoptera species including tiger swallowtail",
    "specialFeatures": [
      "wildlife",
      "early-bloom"
    ]
  },
  {
    "id": "american-plum",
    "name": "American Plum",
    "scientificName": "Prunus americana",
    "type": "tree",
    "heightMin": 15,
    "heightMax": 25,
    "sizeCategory": "large",
    "sun": [
      "full-sun",
      "part-shade"
    ],
    "moisture": [
      "dry",
      "medium"
    ],
    "soil": [
      "well-drained",
      "loamy",
      "clay"
    ],
    "bloomMonths": [
      3,
      4
    ],
    "bloomColors": [
      "white"
    ],
    "activeMonths": [
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10
    ],
    "dormantMonths": [
      11,
      12,
      1,
      2
    ],
    "evergreen": false,
    "description": "A small tree or large thicket-forming shrub that produces masses of fragrant white flowers in early spring before the leaves emerge. Edible yellow-red plums ripen in late summer — excellent for preserves. Creates valuable wildlife thickets. One of the showiest native spring-flowering trees.",
    "wildlifeValue": "Fruits eaten by birds and mammals; important early-spring nectar source",
    "specialFeatures": [
      "wildlife",
      "early-bloom",
      "edible",
      "fragrant"
    ]
  },
  {
    "id": "chickasaw-plum",
    "name": "Chickasaw Plum",
    "scientificName": "Prunus angustifolia",
    "type": "tree",
    "heightMin": 12,
    "heightMax": 20,
    "sizeCategory": "large",
    "sun": [
      "full-sun"
    ],
    "moisture": [
      "dry",
      "medium"
    ],
    "soil": [
      "well-drained",
      "sandy",
      "loamy"
    ],
    "bloomMonths": [
      2,
      3
    ],
    "bloomColors": [
      "white"
    ],
    "activeMonths": [
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10
    ],
    "dormantMonths": [
      11,
      12,
      1
    ],
    "evergreen": false,
    "description": "Among the earliest trees to bloom in NC, covering itself in fragrant white flowers in late winter. Smaller and more shrubby than American Plum, it spreads by root suckers to form dense thickets that are excellent wildlife habitat. Small sweet-tart plums ripen in summer.",
    "wildlifeValue": "Very early nectar for pollinators; fruits for birds and mammals; dense thicket cover",
    "specialFeatures": [
      "wildlife",
      "early-bloom",
      "edible",
      "fragrant"
    ]
  },
  {
    "id": "red-mulberry",
    "name": "Red Mulberry",
    "scientificName": "Morus rubra",
    "type": "tree",
    "heightMin": 30,
    "heightMax": 50,
    "sizeCategory": "large",
    "sun": [
      "full-sun",
      "part-shade"
    ],
    "moisture": [
      "medium",
      "moist"
    ],
    "soil": [
      "rich",
      "loamy",
      "well-drained"
    ],
    "bloomMonths": [],
    "bloomColors": [],
    "activeMonths": [
      4,
      5,
      6,
      7,
      8,
      9,
      10
    ],
    "dormantMonths": [
      11,
      12,
      1,
      2,
      3
    ],
    "evergreen": false,
    "description": "The only mulberry native to North America, bearing sweet, elongated dark-purple fruits that are eagerly consumed by birds and humans alike. Ripening fruits in June can attract dozens of bird species to a single tree. Prefers rich, moist soils in bottomlands and forest edges.",
    "wildlifeValue": "Fruits attract an extraordinary diversity of birds; host for several moth species",
    "specialFeatures": [
      "wildlife",
      "edible"
    ]
  },
  {
    "id": "cucumber-magnolia",
    "name": "Cucumber Magnolia",
    "scientificName": "Magnolia acuminata",
    "type": "tree",
    "heightMin": 50,
    "heightMax": 70,
    "sizeCategory": "large",
    "sun": [
      "full-sun",
      "part-shade"
    ],
    "moisture": [
      "medium",
      "moist"
    ],
    "soil": [
      "rich",
      "loamy",
      "well-drained"
    ],
    "bloomMonths": [
      4,
      5
    ],
    "bloomColors": [
      "pale-yellow"
    ],
    "activeMonths": [
      4,
      5,
      6,
      7,
      8,
      9,
      10
    ],
    "dormantMonths": [
      11,
      12,
      1,
      2,
      3
    ],
    "evergreen": false,
    "description": "The largest magnolia species in NC, reaching timber-tree proportions in rich mountain coves. Greenish-yellow flowers are less showy than other magnolias but still attractive. Named for its cucumber-shaped immature fruit that turns red at maturity. Handsome large leaves provide bold texture.",
    "wildlifeValue": "Red seeds eaten by birds and squirrels; beetle-pollinated flowers",
    "specialFeatures": [
      "wildlife"
    ]
  },
  {
    "id": "fraser-magnolia",
    "name": "Fraser Magnolia",
    "scientificName": "Magnolia fraseri",
    "type": "tree",
    "heightMin": 30,
    "heightMax": 50,
    "sizeCategory": "large",
    "sun": [
      "part-shade",
      "full-shade"
    ],
    "moisture": [
      "medium",
      "moist"
    ],
    "soil": [
      "rich",
      "loamy",
      "well-drained"
    ],
    "bloomMonths": [
      5,
      6
    ],
    "bloomColors": [
      "cream"
    ],
    "activeMonths": [
      4,
      5,
      6,
      7,
      8,
      9,
      10
    ],
    "dormantMonths": [
      11,
      12,
      1,
      2,
      3
    ],
    "evergreen": false,
    "description": "A mountain magnolia with enormous ear-shaped leaves (up to 2 feet long) and fragrant creamy-white flowers up to 10 inches across. Found in rich coves and along mountain streams in western NC. The large tropical-looking foliage gives gardens an exotic feel. Rose-red fruit clusters appear in fall.",
    "wildlifeValue": "Red seeds eaten by birds; beetle-pollinated; cover for wildlife",
    "specialFeatures": [
      "fragrant",
      "shade-tolerant",
      "wildlife"
    ]
  },
  {
    "id": "bigleaf-magnolia",
    "name": "Bigleaf Magnolia",
    "scientificName": "Magnolia macrophylla",
    "type": "tree",
    "heightMin": 30,
    "heightMax": 50,
    "sizeCategory": "large",
    "sun": [
      "part-shade",
      "full-shade"
    ],
    "moisture": [
      "medium",
      "moist"
    ],
    "soil": [
      "rich",
      "loamy",
      "well-drained"
    ],
    "bloomMonths": [
      5,
      6
    ],
    "bloomColors": [
      "cream"
    ],
    "activeMonths": [
      4,
      5,
      6,
      7,
      8,
      9,
      10
    ],
    "dormantMonths": [
      11,
      12,
      1,
      2,
      3
    ],
    "evergreen": false,
    "description": "Has the largest simple leaves and largest flowers of any native North American tree — leaves can reach 3 feet and fragrant cream-white flowers span 12 inches. A rare, dramatic understory tree of rich sheltered coves. Hardy but needs wind protection to prevent leaf damage.",
    "wildlifeValue": "Seeds eaten by birds; beetle-pollinated flowers",
    "specialFeatures": [
      "fragrant",
      "shade-tolerant",
      "large-flowers"
    ]
  },
  {
    "id": "carolina-hemlock",
    "name": "Carolina Hemlock",
    "scientificName": "Tsuga caroliniana",
    "type": "tree",
    "heightMin": 30,
    "heightMax": 50,
    "sizeCategory": "large",
    "sun": [
      "part-shade",
      "full-shade"
    ],
    "moisture": [
      "medium",
      "moist"
    ],
    "soil": [
      "well-drained",
      "rocky",
      "loamy"
    ],
    "bloomMonths": [],
    "bloomColors": [],
    "activeMonths": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "dormantMonths": [],
    "evergreen": true,
    "description": "A rare evergreen endemic to the southern Appalachians, found only in scattered populations from Virginia to Georgia. Distinguished from Eastern Hemlock by its radially arranged needles and larger cones. Seriously threatened by hemlock woolly adelgid. One of the rarest trees native to NC.",
    "wildlifeValue": "Year-round cover; seeds for birds; shades mountain streams",
    "specialFeatures": [
      "evergreen",
      "shade-tolerant",
      "wildlife"
    ]
  },
  {
    "id": "table-mountain-pine",
    "name": "Table Mountain Pine",
    "scientificName": "Pinus pungens",
    "type": "tree",
    "heightMin": 20,
    "heightMax": 40,
    "sizeCategory": "large",
    "sun": [
      "full-sun"
    ],
    "moisture": [
      "dry"
    ],
    "soil": [
      "rocky",
      "sandy",
      "well-drained"
    ],
    "bloomMonths": [],
    "bloomColors": [],
    "activeMonths": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "dormantMonths": [],
    "evergreen": true,
    "description": "A tough, fire-adapted pine found on dry, rocky ridgetops and outcrops in NC's mountains. Heavily armed cones with sharp prickles require fire to open and release seeds. One of the most fire-dependent trees in the Appalachians. Picturesque gnarled form on exposed sites.",
    "wildlifeValue": "Seeds for birds and squirrels; fire-dependent ecosystem",
    "specialFeatures": [
      "evergreen",
      "drought-tolerant"
    ]
  },
  {
    "id": "pond-pine",
    "name": "Pond Pine",
    "scientificName": "Pinus serotina",
    "type": "tree",
    "heightMin": 40,
    "heightMax": 60,
    "sizeCategory": "large",
    "sun": [
      "full-sun"
    ],
    "moisture": [
      "moist",
      "wet"
    ],
    "soil": [
      "sandy",
      "clay"
    ],
    "bloomMonths": [],
    "bloomColors": [],
    "activeMonths": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "dormantMonths": [],
    "evergreen": true,
    "description": "The pine of NC's pocosins and wet flatwoods, uniquely adapted to both flooding and fire. Like Table Mountain Pine, its serotinous cones open after fire. Can resprout from the trunk after burning — unusual for a pine. Often found with pond cypress in Coastal Plain wetlands.",
    "wildlifeValue": "Seeds for birds; provides structure in pocosin ecosystems",
    "specialFeatures": [
      "evergreen",
      "wet-tolerance",
      "wildlife"
    ]
  },
  {
    "id": "american-basswood",
    "name": "American Basswood",
    "scientificName": "Tilia americana",
    "type": "tree",
    "heightMin": 50,
    "heightMax": 70,
    "sizeCategory": "large",
    "sun": [
      "full-sun",
      "part-shade"
    ],
    "moisture": [
      "medium",
      "moist"
    ],
    "soil": [
      "rich",
      "loamy",
      "well-drained"
    ],
    "bloomMonths": [
      6,
      7
    ],
    "bloomColors": [
      "cream"
    ],
    "activeMonths": [
      4,
      5,
      6,
      7,
      8,
      9,
      10
    ],
    "dormantMonths": [
      11,
      12,
      1,
      2,
      3
    ],
    "evergreen": false,
    "description": "A stately shade tree of rich NC mountain coves, producing intensely fragrant cream-yellow flowers in early summer that are one of the most important nectar sources for honeybees and native bees. Heart-shaped leaves are large and bold. The lightweight, easily carved wood has many traditional uses.",
    "wildlifeValue": "Premier bee tree — flowers produce abundant nectar; seeds eaten by birds and squirrels",
    "specialFeatures": [
      "fragrant",
      "wildlife",
      "pollinator"
    ]
  },
  {
    "id": "yellow-buckeye",
    "name": "Yellow Buckeye",
    "scientificName": "Aesculus flava",
    "type": "tree",
    "heightMin": 40,
    "heightMax": 60,
    "sizeCategory": "large",
    "sun": [
      "part-shade",
      "full-shade"
    ],
    "moisture": [
      "medium",
      "moist"
    ],
    "soil": [
      "rich",
      "loamy",
      "well-drained"
    ],
    "bloomMonths": [
      4,
      5
    ],
    "bloomColors": [
      "yellow"
    ],
    "activeMonths": [
      4,
      5,
      6,
      7,
      8,
      9,
      10
    ],
    "dormantMonths": [
      11,
      12,
      1,
      2,
      3
    ],
    "evergreen": false,
    "description": "A magnificent mountain cove tree with showy upright clusters of yellow flowers in spring. Among the first trees to leaf out and among the first to drop leaves in fall. The large glossy brown seeds (buckeyes) are toxic but ornamental. The largest of the eastern buckeyes.",
    "wildlifeValue": "Flowers attract ruby-throated hummingbirds and swallowtails; early nectar source",
    "specialFeatures": [
      "wildlife",
      "early-bloom",
      "shade-tolerant"
    ]
  },
  {
    "id": "white-ash",
    "name": "White Ash",
    "scientificName": "Fraxinus americana",
    "type": "tree",
    "heightMin": 50,
    "heightMax": 70,
    "sizeCategory": "large",
    "sun": [
      "full-sun",
      "part-shade"
    ],
    "moisture": [
      "medium",
      "moist"
    ],
    "soil": [
      "rich",
      "loamy",
      "well-drained"
    ],
    "bloomMonths": [],
    "bloomColors": [],
    "activeMonths": [
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11
    ],
    "dormantMonths": [
      12,
      1,
      2,
      3
    ],
    "evergreen": false,
    "description": "A premier shade and timber tree with compound leaves that turn rich purple to burgundy in fall — among the most striking fall colors in NC. Severely threatened by the emerald ash borer. The strong, elastic wood is the traditional choice for baseball bats.",
    "wildlifeValue": "Seeds eaten by birds and small mammals; host for many moth species",
    "specialFeatures": [
      "fall-color",
      "wildlife"
    ]
  },
  {
    "id": "green-ash",
    "name": "Green Ash",
    "scientificName": "Fraxinus pennsylvanica",
    "type": "tree",
    "heightMin": 40,
    "heightMax": 60,
    "sizeCategory": "large",
    "sun": [
      "full-sun",
      "part-shade"
    ],
    "moisture": [
      "medium",
      "moist",
      "wet"
    ],
    "soil": [
      "loamy",
      "clay",
      "rich"
    ],
    "bloomMonths": [],
    "bloomColors": [],
    "activeMonths": [
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11
    ],
    "dormantMonths": [
      12,
      1,
      2,
      3
    ],
    "evergreen": false,
    "description": "The most widespread and adaptable of NC's native ashes, thriving in wet bottomlands to dry uplands. Golden-yellow fall color. Like white ash, severely threatened by emerald ash borer. An important bottomland and riparian tree throughout the state.",
    "wildlifeValue": "Seeds eaten by wood ducks and songbirds; host for many Lepidoptera species",
    "specialFeatures": [
      "fall-color",
      "wildlife",
      "wet-tolerance"
    ]
  },
  {
    "id": "black-locust",
    "name": "Black Locust",
    "scientificName": "Robinia pseudoacacia",
    "type": "tree",
    "heightMin": 30,
    "heightMax": 50,
    "sizeCategory": "large",
    "sun": [
      "full-sun"
    ],
    "moisture": [
      "dry",
      "medium"
    ],
    "soil": [
      "well-drained",
      "sandy",
      "rocky"
    ],
    "bloomMonths": [
      5,
      6
    ],
    "bloomColors": [
      "white"
    ],
    "activeMonths": [
      5,
      6,
      7,
      8,
      9,
      10
    ],
    "dormantMonths": [
      11,
      12,
      1,
      2,
      3,
      4
    ],
    "evergreen": false,
    "description": "Drooping clusters of intensely fragrant white pea-flowers in late spring are a powerful bee attractant. A nitrogen-fixing legume tree that improves soil. Native to the Appalachians but widely naturalized. The extremely hard, rot-resistant wood is prized for fence posts. Can spread aggressively by root suckers.",
    "wildlifeValue": "Flowers are a major nectar source for bees; nitrogen-fixing improves soil",
    "specialFeatures": [
      "fragrant",
      "pollinator",
      "drought-tolerant"
    ]
  },
  {
    "id": "honey-locust",
    "name": "Honey Locust",
    "scientificName": "Gleditsia triacanthos",
    "type": "tree",
    "heightMin": 50,
    "heightMax": 70,
    "sizeCategory": "large",
    "sun": [
      "full-sun"
    ],
    "moisture": [
      "dry",
      "medium",
      "moist"
    ],
    "soil": [
      "well-drained",
      "loamy",
      "clay"
    ],
    "bloomMonths": [],
    "bloomColors": [],
    "activeMonths": [
      5,
      6,
      7,
      8,
      9,
      10,
      11
    ],
    "dormantMonths": [
      12,
      1,
      2,
      3,
      4
    ],
    "evergreen": false,
    "description": "A fast-growing, elegant tree with finely divided compound leaves that cast light, dappled shade — unlike the dense shade of most large trees. Native to NC's limestone valleys and floodplains. Long twisted seed pods contain sweet pulp once eaten by now-extinct megafauna. Formidable branched thorns on the trunk.",
    "wildlifeValue": "Seed pods eaten by deer and livestock; light shade allows understory growth",
    "specialFeatures": [
      "wildlife",
      "drought-tolerant"
    ]
  },
  {
    "id": "kentucky-coffeetree",
    "name": "Kentucky Coffeetree",
    "scientificName": "Gymnocladus dioicus",
    "type": "tree",
    "heightMin": 40,
    "heightMax": 60,
    "sizeCategory": "large",
    "sun": [
      "full-sun"
    ],
    "moisture": [
      "medium",
      "moist"
    ],
    "soil": [
      "rich",
      "loamy",
      "well-drained"
    ],
    "bloomMonths": [
      5,
      6
    ],
    "bloomColors": [
      "cream"
    ],
    "activeMonths": [
      5,
      6,
      7,
      8,
      9,
      10
    ],
    "dormantMonths": [
      11,
      12,
      1,
      2,
      3,
      4
    ],
    "evergreen": false,
    "description": "An uncommon native tree with dramatically large bipinnate compound leaves and bold winter silhouette. Among the last trees to leaf out in spring and first to drop in fall. Fragrant white flower clusters on female trees are followed by thick leathery pods. The roasted seeds were historically used as a coffee substitute.",
    "wildlifeValue": "Fragrant flowers attract bees; winter pods persist for visual interest",
    "specialFeatures": [
      "winter-interest",
      "fragrant"
    ]
  },
  {
    "id": "water-tupelo",
    "name": "Water Tupelo",
    "scientificName": "Nyssa aquatica",
    "type": "tree",
    "heightMin": 50,
    "heightMax": 70,
    "sizeCategory": "large",
    "sun": [
      "full-sun",
      "part-shade"
    ],
    "moisture": [
      "wet"
    ],
    "soil": [
      "clay",
      "loamy"
    ],
    "bloomMonths": [],
    "bloomColors": [],
    "activeMonths": [
      4,
      5,
      6,
      7,
      8,
      9,
      10
    ],
    "dormantMonths": [
      11,
      12,
      1,
      2,
      3
    ],
    "evergreen": false,
    "description": "A massive swamp tree with a dramatically swollen trunk base, growing in permanently flooded blackwater swamps and river edges of NC's Coastal Plain. Closely related to Black Gum but strictly a wetland species. An important source of tupelo honey. Brilliant red fall color.",
    "wildlifeValue": "Fruits eaten by wood ducks and other waterfowl; cavity nesting; tupelo honey",
    "specialFeatures": [
      "fall-color",
      "wildlife",
      "wet-tolerance"
    ]
  },
  {
    "id": "pond-cypress",
    "name": "Pond Cypress",
    "scientificName": "Taxodium ascendens",
    "type": "tree",
    "heightMin": 40,
    "heightMax": 60,
    "sizeCategory": "large",
    "sun": [
      "full-sun"
    ],
    "moisture": [
      "moist",
      "wet"
    ],
    "soil": [
      "sandy",
      "clay"
    ],
    "bloomMonths": [],
    "bloomColors": [],
    "activeMonths": [
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11
    ],
    "dormantMonths": [
      12,
      1,
      2,
      3
    ],
    "evergreen": false,
    "description": "A deciduous conifer closely related to Bald Cypress but with ascending (rather than spreading) needle-covered branchlets. Found in still-water ponds and lake margins of NC's Coastal Plain. Develops prominent knees and a swollen base. Russet-bronze fall color. Slightly more compact than Bald Cypress.",
    "wildlifeValue": "Seeds for waterfowl; cavity nesting for wood ducks; knees provide fish habitat",
    "specialFeatures": [
      "fall-color",
      "wildlife",
      "wet-tolerance"
    ]
  },
  {
    "id": "eastern-white-pine",
    "name": "Eastern White Pine",
    "scientificName": "Pinus strobus",
    "type": "tree",
    "heightMin": 50,
    "heightMax": 80,
    "sizeCategory": "large",
    "sun": [
      "full-sun",
      "part-shade"
    ],
    "moisture": [
      "dry",
      "medium",
      "moist"
    ],
    "soil": [
      "well-drained",
      "loamy",
      "sandy"
    ],
    "bloomMonths": [],
    "bloomColors": [],
    "activeMonths": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "dormantMonths": [],
    "evergreen": true,
    "description": "The tallest native conifer in eastern North America, with soft blue-green needles in bundles of five and a graceful layered form. Common in NC's mountains and upper Piedmont. Fast-growing and adaptable. The large seed-bearing cones attract many bird species. Provides valuable year-round screening and windbreak.",
    "wildlifeValue": "Seeds eaten by many birds; nesting habitat for warblers; year-round cover",
    "specialFeatures": [
      "evergreen",
      "wildlife"
    ]
  },
  {
    "id": "spruce-pine",
    "name": "Spruce Pine",
    "scientificName": "Pinus glabra",
    "type": "tree",
    "heightMin": 40,
    "heightMax": 60,
    "sizeCategory": "large",
    "sun": [
      "part-shade",
      "full-shade"
    ],
    "moisture": [
      "medium",
      "moist"
    ],
    "soil": [
      "loamy",
      "sandy",
      "rich"
    ],
    "bloomMonths": [],
    "bloomColors": [],
    "activeMonths": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "dormantMonths": [],
    "evergreen": true,
    "description": "The most shade-tolerant of all southern pines, often found as an understory tree in hardwood forests of NC's Coastal Plain. Smooth gray bark and dark green foliage distinguish it from other pines. A unique and underappreciated pine that can thrive where other pines cannot — in the shade.",
    "wildlifeValue": "Seeds for birds and squirrels; year-round cover in Coastal Plain forests",
    "specialFeatures": [
      "evergreen",
      "shade-tolerant",
      "wildlife"
    ]
  },,

  // ─── ADDITIONAL PLANTS (batch-merged) ─────────────────────────────────────
  {
    "id": "sparkleberry",
    "name": "Sparkleberry",
    "scientificName": "Vaccinium arboreum",
    "type": "shrub",
    "heightMin": 10,
    "heightMax": 20,
    "sizeCategory": "large",
    "sun": [
      "full-sun",
      "part-shade"
    ],
    "moisture": [
      "dry",
      "medium"
    ],
    "soil": [
      "well-drained",
      "sandy",
      "loamy"
    ],
    "bloomMonths": [
      4,
      5
    ],
    "bloomColors": [
      "white"
    ],
    "activeMonths": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "dormantMonths": [],
    "evergreen": true,
    "description": "The largest native blueberry relative, sometimes tree-like. Clusters of white bell-shaped flowers in spring are followed by small, shiny black berries that persist into winter. Semi-evergreen to evergreen in NC's Coastal Plain and Piedmont. Exfoliating bark adds winter interest.",
    "wildlifeValue": "Berries eaten by many bird species; nectar for bees; host for spring azure",
    "specialFeatures": [
      "evergreen",
      "wildlife",
      "winter-interest",
      "drought-tolerant"
    ]
  },
  {
    "id": "deerberry",
    "name": "Deerberry",
    "scientificName": "Vaccinium stamineum",
    "type": "shrub",
    "heightMin": 3,
    "heightMax": 8,
    "sizeCategory": "medium",
    "sun": [
      "full-sun",
      "part-shade"
    ],
    "moisture": [
      "dry",
      "medium"
    ],
    "soil": [
      "well-drained",
      "sandy",
      "rocky"
    ],
    "bloomMonths": [
      4,
      5
    ],
    "bloomColors": [
      "white"
    ],
    "activeMonths": [
      4,
      5,
      6,
      7,
      8,
      9,
      10
    ],
    "dormantMonths": [
      11,
      12,
      1,
      2,
      3
    ],
    "evergreen": false,
    "description": "A graceful, open-branched shrub of dry woodlands with dangling white bell flowers and blue-green berries. The berries are tart but edible and consumed by deer and birds. Common on dry ridges and slopes throughout NC. Attractive blue-green foliage all season.",
    "wildlifeValue": "Berries eaten by deer, turkey, and bears; nectar for bees",
    "specialFeatures": [
      "wildlife",
      "drought-tolerant"
    ]
  },
  {
    "id": "black-huckleberry",
    "name": "Black Huckleberry",
    "scientificName": "Gaylussacia baccata",
    "type": "shrub",
    "heightMin": 1,
    "heightMax": 3,
    "sizeCategory": "small",
    "sun": [
      "full-sun",
      "part-shade"
    ],
    "moisture": [
      "dry",
      "medium"
    ],
    "soil": [
      "well-drained",
      "sandy",
      "rocky"
    ],
    "bloomMonths": [
      4,
      5
    ],
    "bloomColors": [
      "pink"
    ],
    "activeMonths": [
      4,
      5,
      6,
      7,
      8,
      9,
      10
    ],
    "dormantMonths": [
      11,
      12,
      1,
      2,
      3
    ],
    "evergreen": false,
    "description": "A low, colonial shrub of acidic woodlands producing sweet, shiny black berries prized by both wildlife and people. Small pinkish bell-shaped flowers in spring. Spreads by rhizomes to form dense patches on dry, acidic slopes. Reliable scarlet fall color.",
    "wildlifeValue": "Berries relished by grouse, turkey, bears, and songbirds",
    "specialFeatures": [
      "fall-color",
      "wildlife",
      "edible",
      "drought-tolerant"
    ]
  },
  {
    "id": "coastal-doghobble",
    "name": "Coastal Doghobble",
    "scientificName": "Leucothoe axillaris",
    "type": "shrub",
    "heightMin": 2,
    "heightMax": 4,
    "sizeCategory": "small",
    "sun": [
      "part-shade",
      "full-shade"
    ],
    "moisture": [
      "moist",
      "wet"
    ],
    "soil": [
      "rich",
      "loamy",
      "sandy"
    ],
    "bloomMonths": [
      3,
      4
    ],
    "bloomColors": [
      "white"
    ],
    "activeMonths": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "dormantMonths": [],
    "evergreen": true,
    "description": "An elegant evergreen shrub with arching stems bearing glossy, dark green leaves and drooping racemes of fragrant white bell-shaped flowers. Found along streams and in wet forests of NC's Coastal Plain. New foliage often emerges bronze-tinged. Excellent for shaded, moist sites.",
    "wildlifeValue": "Nectar for early bees; cover for wildlife in wet forests",
    "specialFeatures": [
      "evergreen",
      "shade-tolerant",
      "wet-tolerance",
      "fragrant"
    ]
  },
  {
    "id": "mountain-doghobble",
    "name": "Mountain Doghobble",
    "scientificName": "Leucothoe fontanesiana",
    "type": "shrub",
    "heightMin": 3,
    "heightMax": 6,
    "sizeCategory": "medium",
    "sun": [
      "part-shade",
      "full-shade"
    ],
    "moisture": [
      "moist"
    ],
    "soil": [
      "rich",
      "loamy",
      "well-drained"
    ],
    "bloomMonths": [
      4,
      5
    ],
    "bloomColors": [
      "white"
    ],
    "activeMonths": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "dormantMonths": [],
    "evergreen": true,
    "description": "A graceful evergreen shrub of NC mountain streambanks with long, arching stems and dangling clusters of white bell flowers. Forms dense thickets that once literally hobbled dogs trying to navigate through mountain laurel and rhododendron tangles. Foliage turns bronze-purple in winter.",
    "wildlifeValue": "Nectar for bees; dense cover for wildlife along mountain streams",
    "specialFeatures": [
      "evergreen",
      "shade-tolerant",
      "winter-interest"
    ]
  },
  {
    "id": "ninebark",
    "name": "Ninebark",
    "scientificName": "Physocarpus opulifolius",
    "type": "shrub",
    "heightMin": 5,
    "heightMax": 8,
    "sizeCategory": "medium",
    "sun": [
      "full-sun",
      "part-shade"
    ],
    "moisture": [
      "dry",
      "medium",
      "moist"
    ],
    "soil": [
      "well-drained",
      "loamy",
      "clay",
      "rocky"
    ],
    "bloomMonths": [
      5,
      6
    ],
    "bloomColors": [
      "white"
    ],
    "activeMonths": [
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11
    ],
    "dormantMonths": [
      12,
      1,
      2,
      3
    ],
    "evergreen": false,
    "description": "Named for its distinctive peeling, layered bark that reveals multiple colors. Dense clusters of white flowers in late spring attract numerous pollinators. Extremely adaptable — tolerates drought, clay, poor soils, and even occasional flooding. One of the toughest native shrubs for difficult sites.",
    "wildlifeValue": "Flowers attract diverse native bees; seeds for birds; host for spring azure",
    "specialFeatures": [
      "wildlife",
      "winter-interest",
      "drought-tolerant",
      "adaptable"
    ]
  },
  {
    "id": "new-jersey-tea",
    "name": "New Jersey Tea",
    "scientificName": "Ceanothus americanus",
    "type": "shrub",
    "heightMin": 2,
    "heightMax": 3,
    "sizeCategory": "small",
    "sun": [
      "full-sun",
      "part-shade"
    ],
    "moisture": [
      "dry",
      "medium"
    ],
    "soil": [
      "well-drained",
      "sandy",
      "rocky"
    ],
    "bloomMonths": [
      5,
      6,
      7
    ],
    "bloomColors": [
      "white"
    ],
    "activeMonths": [
      4,
      5,
      6,
      7,
      8,
      9,
      10
    ],
    "dormantMonths": [
      11,
      12,
      1,
      2,
      3
    ],
    "evergreen": false,
    "description": "A small but mighty shrub covered with frothy white flower clusters in late spring that are a magnet for native bees and butterflies. Nitrogen-fixing root nodules improve soil. Leaves were used as a tea substitute during the Revolutionary War. Thrives in dry, poor soils where larger shrubs struggle.",
    "wildlifeValue": "Exceptional pollinator plant; host for spring azure and mottled duskywing butterflies",
    "specialFeatures": [
      "pollinator",
      "drought-tolerant",
      "nitrogen-fixer",
      "wildlife"
    ]
  },
  {
    "id": "dwarf-palmetto",
    "name": "Dwarf Palmetto",
    "scientificName": "Sabal minor",
    "type": "shrub",
    "heightMin": 3,
    "heightMax": 6,
    "sizeCategory": "medium",
    "sun": [
      "part-shade",
      "full-shade",
      "full-sun"
    ],
    "moisture": [
      "medium",
      "moist",
      "wet"
    ],
    "soil": [
      "loamy",
      "sandy",
      "clay"
    ],
    "bloomMonths": [
      6,
      7
    ],
    "bloomColors": [
      "cream"
    ],
    "activeMonths": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "dormantMonths": [],
    "evergreen": true,
    "description": "The hardiest native palm, creating a tropical effect in NC gardens. Fan-shaped evergreen leaves emerge from an underground or very short trunk. Found naturally in NC's Coastal Plain swamps and bottomlands. Fragrant cream flower clusters attract bees. Small black fruits are eaten by birds.",
    "wildlifeValue": "Berries eaten by birds; year-round cover; bee nectar source",
    "specialFeatures": [
      "evergreen",
      "wildlife",
      "wet-tolerance",
      "tropical-effect"
    ]
  },
  {
    "id": "american-hazelnut",
    "name": "American Hazelnut",
    "scientificName": "Corylus americana",
    "type": "shrub",
    "heightMin": 6,
    "heightMax": 12,
    "sizeCategory": "large",
    "sun": [
      "full-sun",
      "part-shade"
    ],
    "moisture": [
      "dry",
      "medium"
    ],
    "soil": [
      "well-drained",
      "loamy",
      "sandy"
    ],
    "bloomMonths": [],
    "bloomColors": [],
    "activeMonths": [
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11
    ],
    "dormantMonths": [
      12,
      1,
      2
    ],
    "evergreen": false,
    "description": "A multi-stemmed shrub producing edible hazelnuts in attractive fringed husks. Male catkins dangle attractively in late winter before leaves emerge. Spreads by suckers to form thickets. The nuts are smaller but sweeter than commercial hazelnuts and are a critical food for wildlife.",
    "wildlifeValue": "Nuts eaten by squirrels, grouse, turkey, deer; host for many moth species",
    "specialFeatures": [
      "wildlife",
      "edible",
      "winter-interest"
    ]
  },
  {
    "id": "red-chokeberry",
    "name": "Red Chokeberry",
    "scientificName": "Aronia arbutifolia",
    "type": "shrub",
    "heightMin": 6,
    "heightMax": 10,
    "sizeCategory": "large",
    "sun": [
      "full-sun",
      "part-shade"
    ],
    "moisture": [
      "medium",
      "moist",
      "wet"
    ],
    "soil": [
      "loamy",
      "clay",
      "sandy"
    ],
    "bloomMonths": [
      4,
      5
    ],
    "bloomColors": [
      "white"
    ],
    "activeMonths": [
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11
    ],
    "dormantMonths": [
      12,
      1,
      2,
      3
    ],
    "evergreen": false,
    "description": "A four-season native shrub with white spring flowers, glossy red berries that persist well into winter, and brilliant scarlet fall foliage. Tolerates wet soils, clay, and poor drainage — excellent for rain gardens. The astringent berries are high in antioxidants and persist because birds eat them only as a last resort.",
    "wildlifeValue": "Persistent winter berries for birds; spring nectar for bees",
    "specialFeatures": [
      "fall-color",
      "wildlife",
      "winter-interest",
      "wet-tolerance"
    ]
  },
  {
    "id": "black-chokeberry",
    "name": "Black Chokeberry",
    "scientificName": "Aronia melanocarpa",
    "type": "shrub",
    "heightMin": 3,
    "heightMax": 6,
    "sizeCategory": "medium",
    "sun": [
      "full-sun",
      "part-shade"
    ],
    "moisture": [
      "dry",
      "medium",
      "moist"
    ],
    "soil": [
      "well-drained",
      "loamy",
      "sandy",
      "clay"
    ],
    "bloomMonths": [
      4,
      5
    ],
    "bloomColors": [
      "white"
    ],
    "activeMonths": [
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11
    ],
    "dormantMonths": [
      12,
      1,
      2,
      3
    ],
    "evergreen": false,
    "description": "More compact than Red Chokeberry with glossy black berries that are even higher in antioxidants — now marketed as a 'superfruit.' White spring flowers, excellent purplish-red fall color. Extremely adaptable to both dry and wet conditions. Forms colonies by suckering.",
    "wildlifeValue": "Berries for birds in late winter; spring nectar for bees",
    "specialFeatures": [
      "fall-color",
      "wildlife",
      "edible",
      "adaptable"
    ]
  },
  {
    "id": "wax-myrtle",
    "name": "Wax Myrtle",
    "scientificName": "Morella cerifera",
    "type": "shrub",
    "heightMin": 10,
    "heightMax": 15,
    "sizeCategory": "large",
    "sun": [
      "full-sun",
      "part-shade"
    ],
    "moisture": [
      "dry",
      "medium",
      "moist",
      "wet"
    ],
    "soil": [
      "sandy",
      "loamy",
      "clay"
    ],
    "bloomMonths": [],
    "bloomColors": [],
    "activeMonths": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "dormantMonths": [],
    "evergreen": true,
    "description": "A fast-growing evergreen shrub or small tree with aromatic olive-green foliage. Waxy gray berries on female plants are a vital winter food for yellow-rumped warblers (once called 'myrtle warblers'). Nitrogen-fixing and salt-tolerant. One of the most useful native screening plants for NC landscapes.",
    "wildlifeValue": "Critical winter berries for yellow-rumped warblers and tree swallows; nitrogen-fixing",
    "specialFeatures": [
      "evergreen",
      "wildlife",
      "salt-tolerant",
      "nitrogen-fixer",
      "drought-tolerant"
    ]
  },
  {
    "id": "winterberry",
    "name": "Winterberry",
    "scientificName": "Ilex verticillata",
    "type": "shrub",
    "heightMin": 6,
    "heightMax": 10,
    "sizeCategory": "large",
    "sun": [
      "full-sun",
      "part-shade"
    ],
    "moisture": [
      "medium",
      "moist",
      "wet"
    ],
    "soil": [
      "loamy",
      "clay",
      "rich"
    ],
    "bloomMonths": [
      5,
      6
    ],
    "bloomColors": [
      "white"
    ],
    "activeMonths": [
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "dormantMonths": [
      1,
      2,
      3
    ],
    "evergreen": false,
    "description": "The showiest winter-interest shrub in the NC native palette — bare branches are encrusted with brilliant red berries from fall through winter. A deciduous holly that thrives in wet soils. Both male and female plants are needed for berry production. Absolutely stunning in winter landscapes.",
    "wildlifeValue": "Red berries are critical late-winter food for cedar waxwings, robins, and bluebirds",
    "specialFeatures": [
      "winter-interest",
      "wildlife",
      "wet-tolerance"
    ]
  },
  {
    "id": "swamp-azalea",
    "name": "Swamp Azalea",
    "scientificName": "Rhododendron viscosum",
    "type": "shrub",
    "heightMin": 5,
    "heightMax": 8,
    "sizeCategory": "medium",
    "sun": [
      "full-sun",
      "part-shade"
    ],
    "moisture": [
      "moist",
      "wet"
    ],
    "soil": [
      "sandy",
      "loamy",
      "rich"
    ],
    "bloomMonths": [
      6,
      7
    ],
    "bloomColors": [
      "white"
    ],
    "activeMonths": [
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11
    ],
    "dormantMonths": [
      12,
      1,
      2,
      3
    ],
    "evergreen": false,
    "description": "A summer-blooming native azalea with intensely fragrant, sticky white flowers that perfume entire wetland areas on warm evenings. Found in swamps and streambanks of NC's Coastal Plain and lower Piedmont. The last of NC's native azaleas to bloom. Also called 'clammy azalea' for its sticky flowers.",
    "wildlifeValue": "Nectar for swallowtail butterflies and hummingbirds",
    "specialFeatures": [
      "fragrant",
      "wildlife",
      "wet-tolerance"
    ]
  },
  {
    "id": "large-fothergilla",
    "name": "Large Fothergilla",
    "scientificName": "Fothergilla major",
    "type": "shrub",
    "heightMin": 6,
    "heightMax": 10,
    "sizeCategory": "large",
    "sun": [
      "full-sun",
      "part-shade"
    ],
    "moisture": [
      "medium",
      "moist"
    ],
    "soil": [
      "well-drained",
      "loamy",
      "rich"
    ],
    "bloomMonths": [
      4,
      5
    ],
    "bloomColors": [
      "white"
    ],
    "activeMonths": [
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11
    ],
    "dormantMonths": [
      12,
      1,
      2,
      3
    ],
    "evergreen": false,
    "description": "The larger cousin of Dwarf Fothergilla, with the same spectacular fall color — brilliant orange, red, and yellow simultaneously — and fragrant white bottlebrush flowers in spring. Native to mountain woodlands. One of the best native shrubs for year-round ornamental value.",
    "wildlifeValue": "Early spring nectar for bees and bumblebees",
    "specialFeatures": [
      "fall-color",
      "fragrant",
      "wildlife"
    ]
  },
  {
    "id": "coralberry",
    "name": "Coralberry",
    "scientificName": "Symphoricarpos orbiculatus",
    "type": "shrub",
    "heightMin": 2,
    "heightMax": 5,
    "sizeCategory": "medium",
    "sun": [
      "full-sun",
      "part-shade",
      "full-shade"
    ],
    "moisture": [
      "dry",
      "medium"
    ],
    "soil": [
      "well-drained",
      "loamy",
      "clay",
      "rocky"
    ],
    "bloomMonths": [
      6,
      7
    ],
    "bloomColors": [
      "pink"
    ],
    "activeMonths": [
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "dormantMonths": [
      1,
      2,
      3
    ],
    "evergreen": false,
    "description": "A tough, arching shrub that earns its keep with dense clusters of coral-pink to purplish-red berries along the stems from fall through winter. Thrives in shade and poor, dry soils where few other shrubs survive. Spreads by suckers to form colonies — useful for erosion control on slopes.",
    "wildlifeValue": "Winter berries for birds and small mammals; nectar for hummingbirds and bees",
    "specialFeatures": [
      "winter-interest",
      "wildlife",
      "shade-tolerant",
      "drought-tolerant"
    ]
  },
  {
    "id": "red-buckeye",
    "name": "Red Buckeye",
    "scientificName": "Aesculus pavia",
    "type": "shrub",
    "heightMin": 10,
    "heightMax": 20,
    "sizeCategory": "large",
    "sun": [
      "part-shade",
      "full-shade"
    ],
    "moisture": [
      "medium",
      "moist"
    ],
    "soil": [
      "rich",
      "loamy",
      "well-drained"
    ],
    "bloomMonths": [
      3,
      4
    ],
    "bloomColors": [
      "red"
    ],
    "activeMonths": [
      3,
      4,
      5,
      6,
      7,
      8,
      9
    ],
    "dormantMonths": [
      10,
      11,
      12,
      1,
      2
    ],
    "evergreen": false,
    "description": "Bright red flower clusters in early spring make this the single most important native plant for ruby-throated hummingbirds arriving from their Gulf Coast migration. Blooms reliably before many nectar sources are available. Goes dormant by late summer. Glossy dark green palmate foliage is handsome in spring.",
    "wildlifeValue": "Critical early nectar for ruby-throated hummingbirds; swallowtail butterflies",
    "specialFeatures": [
      "wildlife",
      "early-bloom",
      "hummingbird",
      "shade-tolerant"
    ]
  },
  {
    "id": "american-smoketree",
    "name": "American Smoketree",
    "scientificName": "Cotinus obovatus",
    "type": "shrub",
    "heightMin": 15,
    "heightMax": 25,
    "sizeCategory": "large",
    "sun": [
      "full-sun"
    ],
    "moisture": [
      "dry",
      "medium"
    ],
    "soil": [
      "well-drained",
      "rocky",
      "loamy"
    ],
    "bloomMonths": [
      5,
      6
    ],
    "bloomColors": [
      "pale-yellow"
    ],
    "activeMonths": [
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11
    ],
    "dormantMonths": [
      12,
      1,
      2,
      3
    ],
    "evergreen": false,
    "description": "One of the rarest native trees in eastern North America, prized for what may be the most spectacular fall color of any NC native — electric orange, scarlet, and purple. Billowy pinkish seed plumes in summer create the 'smoke' effect. Much superior to the commonly planted Eurasian smoketree. A conservation priority.",
    "wildlifeValue": "Nectar for bees; fall berries for birds",
    "specialFeatures": [
      "fall-color",
      "wildlife",
      "drought-tolerant",
      "winter-interest"
    ]
  },
  {
    "id": "saw-palmetto",
    "name": "Saw Palmetto",
    "scientificName": "Serenoa repens",
    "type": "shrub",
    "heightMin": 3,
    "heightMax": 6,
    "sizeCategory": "medium",
    "sun": [
      "full-sun",
      "part-shade"
    ],
    "moisture": [
      "dry",
      "medium"
    ],
    "soil": [
      "sandy",
      "well-drained"
    ],
    "bloomMonths": [
      5,
      6
    ],
    "bloomColors": [
      "cream"
    ],
    "activeMonths": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "dormantMonths": [],
    "evergreen": true,
    "description": "A tough, clumping palm of NC's southeastern Coastal Plain sandhills and maritime forests. Fan-shaped fronds on saw-toothed petioles form dense colonies. Fragrant cream flowers attract many pollinators. The dark berries are an important wildlife food. Incredibly fire-adapted and long-lived.",
    "wildlifeValue": "Berries eaten by bears, raccoons, and birds; important bee nectar source; cover",
    "specialFeatures": [
      "evergreen",
      "wildlife",
      "drought-tolerant"
    ]
  },
  {
    "id": "sandhill-rosemary",
    "name": "Sandhill Rosemary",
    "scientificName": "Ceratiola ericoides",
    "type": "shrub",
    "heightMin": 3,
    "heightMax": 5,
    "sizeCategory": "medium",
    "sun": [
      "full-sun"
    ],
    "moisture": [
      "dry"
    ],
    "soil": [
      "sandy"
    ],
    "bloomMonths": [],
    "bloomColors": [],
    "activeMonths": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "dormantMonths": [],
    "evergreen": true,
    "description": "An aromatic evergreen shrub restricted to deep sand ridges of NC's Sandhills region. The fine, needle-like foliage resembles rosemary. A keystone species of one of the most endangered plant communities in the Southeast — the sandhill scrub. Extremely drought-adapted with a deep root system.",
    "wildlifeValue": "Provides cover for rare sandhill species; berries eaten by birds",
    "specialFeatures": [
      "evergreen",
      "drought-tolerant"
    ]
  },
  {
    "id": "southern-bayberry",
    "name": "Southern Bayberry",
    "scientificName": "Morella caroliniensis",
    "type": "shrub",
    "heightMin": 6,
    "heightMax": 10,
    "sizeCategory": "large",
    "sun": [
      "full-sun",
      "part-shade"
    ],
    "moisture": [
      "dry",
      "medium",
      "moist"
    ],
    "soil": [
      "sandy",
      "loamy"
    ],
    "bloomMonths": [],
    "bloomColors": [],
    "activeMonths": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "dormantMonths": [],
    "evergreen": true,
    "description": "Similar to Wax Myrtle but slightly smaller and more cold-hardy, extending into NC's mountains. Aromatic evergreen leaves and waxy gray berries on female plants. Historically used for making bayberry candles. Nitrogen-fixing roots allow it to colonize poor soils.",
    "wildlifeValue": "Waxy berries eaten by warblers and tree swallows; nitrogen-fixing",
    "specialFeatures": [
      "evergreen",
      "wildlife",
      "nitrogen-fixer",
      "aromatic"
    ]
  },
  {
    "id": "leatherwood",
    "name": "Leatherwood",
    "scientificName": "Dirca palustris",
    "type": "shrub",
    "heightMin": 3,
    "heightMax": 6,
    "sizeCategory": "medium",
    "sun": [
      "part-shade",
      "full-shade"
    ],
    "moisture": [
      "moist"
    ],
    "soil": [
      "rich",
      "loamy"
    ],
    "bloomMonths": [
      2,
      3
    ],
    "bloomColors": [
      "pale-yellow"
    ],
    "activeMonths": [
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10
    ],
    "dormantMonths": [
      11,
      12,
      1
    ],
    "evergreen": false,
    "description": "One of the earliest-blooming native shrubs, producing small pale yellow flowers in late winter before the leaves. The bark is remarkably tough and flexible — twigs can be tied in knots without breaking. A rare understory plant of rich mountain coves. Difficult to find in nurseries but worth seeking out.",
    "wildlifeValue": "Very early nectar for bees emerging in late winter",
    "specialFeatures": [
      "early-bloom",
      "shade-tolerant",
      "wildlife"
    ]
  },
  {
    "id": "sweetleaf",
    "name": "Sweetleaf",
    "scientificName": "Symplocos tinctoria",
    "type": "shrub",
    "heightMin": 10,
    "heightMax": 20,
    "sizeCategory": "large",
    "sun": [
      "full-sun",
      "part-shade"
    ],
    "moisture": [
      "medium",
      "moist"
    ],
    "soil": [
      "loamy",
      "sandy",
      "rich"
    ],
    "bloomMonths": [
      3,
      4
    ],
    "bloomColors": [
      "cream"
    ],
    "activeMonths": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "dormantMonths": [],
    "evergreen": true,
    "description": "A semi-evergreen large shrub or small tree with fragrant clusters of cream-yellow flowers in early spring. Leaves have a sweet taste (hence the name) and were historically used as a dye source. One of the first shrubs to bloom in NC. Common in Piedmont and Coastal Plain forests.",
    "wildlifeValue": "Important early nectar for native bees; berries eaten by birds",
    "specialFeatures": [
      "evergreen",
      "early-bloom",
      "fragrant",
      "wildlife"
    ]
  },
  {
    "id": "silky-dogwood",
    "name": "Silky Dogwood",
    "scientificName": "Cornus amomum",
    "type": "shrub",
    "heightMin": 6,
    "heightMax": 10,
    "sizeCategory": "large",
    "sun": [
      "full-sun",
      "part-shade"
    ],
    "moisture": [
      "moist",
      "wet"
    ],
    "soil": [
      "loamy",
      "clay",
      "rich"
    ],
    "bloomMonths": [
      5,
      6
    ],
    "bloomColors": [
      "cream"
    ],
    "activeMonths": [
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11
    ],
    "dormantMonths": [
      12,
      1,
      2,
      3
    ],
    "evergreen": false,
    "description": "A multi-stemmed shrub of wet areas with flat-topped clusters of cream-white flowers followed by blue berries on bright red stalks — a striking color combination. Red-purple winter stems add interest. Excellent for streambank stabilization and rain gardens. Tolerates standing water.",
    "wildlifeValue": "Blue berries eaten by 40+ bird species; host for spring azure butterfly",
    "specialFeatures": [
      "wildlife",
      "wet-tolerance",
      "winter-interest"
    ]
  },
  {
    "id": "gray-dogwood",
    "name": "Gray Dogwood",
    "scientificName": "Cornus racemosa",
    "type": "shrub",
    "heightMin": 6,
    "heightMax": 10,
    "sizeCategory": "large",
    "sun": [
      "full-sun",
      "part-shade"
    ],
    "moisture": [
      "dry",
      "medium",
      "moist"
    ],
    "soil": [
      "well-drained",
      "loamy",
      "clay"
    ],
    "bloomMonths": [
      5,
      6
    ],
    "bloomColors": [
      "white"
    ],
    "activeMonths": [
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11
    ],
    "dormantMonths": [
      12,
      1,
      2,
      3
    ],
    "evergreen": false,
    "description": "A highly adaptable thicket-forming shrub with white flower clusters, white berries on bright red stalks, and purplish fall color. Spreads by suckers to form dense colonies — excellent for wildlife hedgerows and naturalizing. One of the most adaptable native shrubs, tolerating a wide range of conditions.",
    "wildlifeValue": "White berries devoured by birds; dense thickets provide nesting cover",
    "specialFeatures": [
      "wildlife",
      "fall-color",
      "adaptable"
    ]
  },
  {
    "id": "stiff-dogwood",
    "name": "Stiff Dogwood",
    "scientificName": "Cornus foemina",
    "type": "shrub",
    "heightMin": 6,
    "heightMax": 12,
    "sizeCategory": "large",
    "sun": [
      "full-sun",
      "part-shade"
    ],
    "moisture": [
      "medium",
      "moist",
      "wet"
    ],
    "soil": [
      "loamy",
      "clay",
      "sandy"
    ],
    "bloomMonths": [
      5,
      6
    ],
    "bloomColors": [
      "white"
    ],
    "activeMonths": [
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11
    ],
    "dormantMonths": [
      12,
      1,
      2,
      3
    ],
    "evergreen": false,
    "description": "A large shrub or small tree common along NC stream edges and fencerows. White flower clusters in spring are followed by dark blue berries on red stalks. More upright and tree-like than other shrub dogwoods. An important component of riparian buffers throughout the Piedmont.",
    "wildlifeValue": "Berries eaten by many bird species; nesting habitat",
    "specialFeatures": [
      "wildlife",
      "wet-tolerance"
    ]
  },
  {
    "id": "american-bladdernut",
    "name": "American Bladdernut",
    "scientificName": "Staphylea trifolia",
    "type": "shrub",
    "heightMin": 8,
    "heightMax": 12,
    "sizeCategory": "large",
    "sun": [
      "part-shade",
      "full-shade"
    ],
    "moisture": [
      "medium",
      "moist"
    ],
    "soil": [
      "rich",
      "loamy"
    ],
    "bloomMonths": [
      4,
      5
    ],
    "bloomColors": [
      "white"
    ],
    "activeMonths": [
      4,
      5,
      6,
      7,
      8,
      9,
      10
    ],
    "dormantMonths": [
      11,
      12,
      1,
      2,
      3
    ],
    "evergreen": false,
    "description": "An unusual understory shrub with drooping clusters of white bell-shaped flowers in spring and distinctive inflated, papery seed capsules that rattle in the breeze through fall and winter. Found in rich woodlands and floodplains. The striped bark and bladder-like pods make it a great conversation piece.",
    "wildlifeValue": "Spring nectar for bees; seeds eaten by some birds",
    "specialFeatures": [
      "shade-tolerant",
      "winter-interest"
    ]
  },
  {
    "id": "mapleleaf-viburnum",
    "name": "Mapleleaf Viburnum",
    "scientificName": "Viburnum acerifolium",
    "type": "shrub",
    "heightMin": 3,
    "heightMax": 6,
    "sizeCategory": "medium",
    "sun": [
      "part-shade",
      "full-shade"
    ],
    "moisture": [
      "dry",
      "medium"
    ],
    "soil": [
      "well-drained",
      "loamy",
      "rocky"
    ],
    "bloomMonths": [
      5,
      6
    ],
    "bloomColors": [
      "cream"
    ],
    "activeMonths": [
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11
    ],
    "dormantMonths": [
      12,
      1,
      2,
      3
    ],
    "evergreen": false,
    "description": "The best native viburnum for dry shade — thriving where most shrubs fail. Maple-shaped leaves turn striking pink to magenta-purple in fall. Cream flower clusters followed by dark blue-black berries. Spreads slowly by suckers to form attractive groundcover colonies under trees.",
    "wildlifeValue": "Berries eaten by many bird species; host for spring azure butterfly",
    "specialFeatures": [
      "fall-color",
      "wildlife",
      "shade-tolerant",
      "drought-tolerant"
    ]
  },
  {
    "id": "possumhaw-viburnum",
    "name": "Possumhaw Viburnum",
    "scientificName": "Viburnum nudum",
    "type": "shrub",
    "heightMin": 5,
    "heightMax": 12,
    "sizeCategory": "large",
    "sun": [
      "full-sun",
      "part-shade"
    ],
    "moisture": [
      "moist",
      "wet"
    ],
    "soil": [
      "loamy",
      "clay",
      "rich"
    ],
    "bloomMonths": [
      5,
      6
    ],
    "bloomColors": [
      "white"
    ],
    "activeMonths": [
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11
    ],
    "dormantMonths": [
      12,
      1,
      2,
      3
    ],
    "evergreen": false,
    "description": "A stunning multi-season shrub with glossy dark green leaves, white flower clusters, and berries that change from green to pink to blue to dark purple — often showing multiple colors simultaneously. Thrives in wet soils. Outstanding glossy crimson-burgundy fall color.",
    "wildlifeValue": "Berries eagerly eaten by many bird species; spring nectar for bees",
    "specialFeatures": [
      "fall-color",
      "wildlife",
      "wet-tolerance",
      "four-season"
    ]
  },
  {
    "id": "blackhaw-viburnum",
    "name": "Blackhaw Viburnum",
    "scientificName": "Viburnum prunifolium",
    "type": "shrub",
    "heightMin": 10,
    "heightMax": 15,
    "sizeCategory": "large",
    "sun": [
      "full-sun",
      "part-shade",
      "full-shade"
    ],
    "moisture": [
      "dry",
      "medium",
      "moist"
    ],
    "soil": [
      "well-drained",
      "loamy",
      "clay"
    ],
    "bloomMonths": [
      4,
      5
    ],
    "bloomColors": [
      "white"
    ],
    "activeMonths": [
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11
    ],
    "dormantMonths": [
      12,
      1,
      2,
      3
    ],
    "evergreen": false,
    "description": "One of the most versatile native shrubs — tolerates sun or shade, dry or moist soils. Flat-topped white flower clusters in spring are followed by blue-black edible fruits that taste like raisins. Can be grown as a small tree. Excellent wine-red to burgundy fall color.",
    "wildlifeValue": "Edible berries for birds and mammals; host for spring azure; nectar for bees",
    "specialFeatures": [
      "fall-color",
      "wildlife",
      "edible",
      "adaptable",
      "shade-tolerant"
    ]
  },
  {
    "id": "rusty-blackhaw",
    "name": "Rusty Blackhaw",
    "scientificName": "Viburnum rufidulum",
    "type": "shrub",
    "heightMin": 10,
    "heightMax": 20,
    "sizeCategory": "large",
    "sun": [
      "full-sun",
      "part-shade"
    ],
    "moisture": [
      "dry",
      "medium"
    ],
    "soil": [
      "well-drained",
      "loamy",
      "clay",
      "rocky"
    ],
    "bloomMonths": [
      4,
      5
    ],
    "bloomColors": [
      "white"
    ],
    "activeMonths": [
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11
    ],
    "dormantMonths": [
      12,
      1,
      2,
      3
    ],
    "evergreen": false,
    "description": "Distinguished from Blackhaw by its rusty-fuzzy buds, leaf undersides, and petioles. Glossy, leathery leaves turn brilliant scarlet-burgundy in fall — some of the best fall color of any viburnum. Blue-black edible berries. More drought-tolerant than most viburnums.",
    "wildlifeValue": "Berries for birds; host for spring azure butterfly; bee nectar",
    "specialFeatures": [
      "fall-color",
      "wildlife",
      "edible",
      "drought-tolerant"
    ]
  },
  {
    "id": "smooth-alder",
    "name": "Smooth Alder",
    "scientificName": "Alnus serrulata",
    "type": "shrub",
    "heightMin": 8,
    "heightMax": 15,
    "sizeCategory": "large",
    "sun": [
      "full-sun",
      "part-shade"
    ],
    "moisture": [
      "moist",
      "wet"
    ],
    "soil": [
      "loamy",
      "clay",
      "sandy"
    ],
    "bloomMonths": [],
    "bloomColors": [],
    "activeMonths": [
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11
    ],
    "dormantMonths": [
      12,
      1,
      2
    ],
    "evergreen": false,
    "description": "A fast-growing, thicket-forming shrub of NC stream edges and wet areas. Male catkins are decorative in late winter. Nitrogen-fixing root nodules enrich the soil. One of the most important plants for stabilizing stream banks and preventing erosion. Tolerates permanent flooding.",
    "wildlifeValue": "Seeds for goldfinches and redpolls; nitrogen-fixing; streambank stabilizer",
    "specialFeatures": [
      "wet-tolerance",
      "nitrogen-fixer",
      "wildlife"
    ]
  },
  {
    "id": "vernal-witch-hazel",
    "name": "Vernal Witch Hazel",
    "scientificName": "Hamamelis vernalis",
    "type": "shrub",
    "heightMin": 6,
    "heightMax": 10,
    "sizeCategory": "large",
    "sun": [
      "full-sun",
      "part-shade"
    ],
    "moisture": [
      "medium",
      "moist"
    ],
    "soil": [
      "loamy",
      "rich",
      "clay"
    ],
    "bloomMonths": [
      1,
      2,
      3
    ],
    "bloomColors": [
      "yellow"
    ],
    "activeMonths": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11
    ],
    "dormantMonths": [
      12
    ],
    "evergreen": false,
    "description": "Blooms even earlier than Common Witch Hazel — fragrant spidery yellow-to-red flowers unfurl on bare branches in the dead of winter, from January to March. One of the very first plants to flower each year in NC. Golden-yellow fall color. An essential plant for extending the garden season into winter.",
    "wildlifeValue": "Earliest nectar source for winter-flying bees and flies",
    "specialFeatures": [
      "winter-interest",
      "early-bloom",
      "fragrant",
      "fall-color"
    ]
  },
  {
    "id": "catawba-rhododendron",
    "name": "Catawba Rhododendron",
    "scientificName": "Rhododendron catawbiense",
    "type": "shrub",
    "heightMin": 6,
    "heightMax": 10,
    "sizeCategory": "large",
    "sun": [
      "part-shade",
      "full-shade"
    ],
    "moisture": [
      "medium",
      "moist"
    ],
    "soil": [
      "well-drained",
      "rich",
      "loamy"
    ],
    "bloomMonths": [
      5,
      6
    ],
    "bloomColors": [
      "purple",
      "lavender"
    ],
    "activeMonths": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "dormantMonths": [],
    "evergreen": true,
    "description": "The iconic evergreen of the southern Appalachian balds, producing spectacular purple-lavender flower displays in late spring that draw visitors from around the world. Found at higher elevations in NC's mountains. The parent of most cold-hardy rhododendron hybrids. Curls its leaves in winter cold.",
    "wildlifeValue": "Nectar for bumblebees and swallowtails; year-round cover for wildlife",
    "specialFeatures": [
      "evergreen",
      "wildlife",
      "shade-tolerant"
    ]
  },
  {
    "id": "mountain-pieris",
    "name": "Mountain Pieris",
    "scientificName": "Pieris floribunda",
    "type": "shrub",
    "heightMin": 3,
    "heightMax": 6,
    "sizeCategory": "medium",
    "sun": [
      "part-shade",
      "full-shade"
    ],
    "moisture": [
      "medium",
      "moist"
    ],
    "soil": [
      "well-drained",
      "rich",
      "loamy"
    ],
    "bloomMonths": [
      3,
      4
    ],
    "bloomColors": [
      "white"
    ],
    "activeMonths": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "dormantMonths": [],
    "evergreen": true,
    "description": "A compact evergreen shrub of NC mountain acid soils with upright clusters of white, urn-shaped flowers in early spring. More compact and disease-resistant than the commonly planted Japanese pieris. Flower buds form in fall and are ornamental through winter. Requires acidic, well-drained soil.",
    "wildlifeValue": "Early spring nectar for bees; year-round cover",
    "specialFeatures": [
      "evergreen",
      "early-bloom",
      "shade-tolerant",
      "winter-interest"
    ]
  },
  {
    "id": "fetterbush",
    "name": "Fetterbush",
    "scientificName": "Lyonia lucida",
    "type": "shrub",
    "heightMin": 3,
    "heightMax": 6,
    "sizeCategory": "medium",
    "sun": [
      "full-sun",
      "part-shade"
    ],
    "moisture": [
      "moist",
      "wet"
    ],
    "soil": [
      "sandy",
      "loamy"
    ],
    "bloomMonths": [
      4,
      5
    ],
    "bloomColors": [
      "pink",
      "white"
    ],
    "activeMonths": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "dormantMonths": [],
    "evergreen": true,
    "description": "A glossy-leaved evergreen shrub of NC Coastal Plain pocosins and wet pine flatwoods. Clusters of pink to white urn-shaped flowers in spring. The arching stems and shiny, dark green foliage are attractive year-round. An underused evergreen native for moist, acidic garden sites.",
    "wildlifeValue": "Nectar for native bees; year-round cover in wetland habitats",
    "specialFeatures": [
      "evergreen",
      "wet-tolerance",
      "wildlife"
    ]
  },
  {
    "id": "sweetbells",
    "name": "Sweetbells",
    "scientificName": "Eubotrys racemosus",
    "type": "shrub",
    "heightMin": 3,
    "heightMax": 6,
    "sizeCategory": "medium",
    "sun": [
      "full-sun",
      "part-shade"
    ],
    "moisture": [
      "moist",
      "wet"
    ],
    "soil": [
      "sandy",
      "loamy"
    ],
    "bloomMonths": [
      5,
      6
    ],
    "bloomColors": [
      "white"
    ],
    "activeMonths": [
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11
    ],
    "dormantMonths": [
      12,
      1,
      2,
      3
    ],
    "evergreen": false,
    "description": "An arching, deciduous shrub of NC's Coastal Plain bogs and wet pine savannas. One-sided racemes of fragrant white bell-shaped flowers in late spring. Good fall color in shades of red and orange. Often found growing with fetterbush and titi in acidic wetlands.",
    "wildlifeValue": "Nectar for native bees; component of rare wetland plant communities",
    "specialFeatures": [
      "fragrant",
      "wet-tolerance",
      "fall-color"
    ]
  },
];

export default plants;
