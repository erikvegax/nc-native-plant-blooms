import plants from "./plants.js";
console.log("Total plants:", plants.length);
const ids = plants.map(x => x.id);
const dupes = ids.filter((id, i) => ids.indexOf(id) !== i);
if (dupes.length) console.log("DUPES:", dupes);
else console.log("No duplicates");
