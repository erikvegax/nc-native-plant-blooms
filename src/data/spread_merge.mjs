// Merge spread data into plants.js
// Usage: node src/data/spread_merge.mjs
// Reads spread_*.js files and patches plants.js with spreadMin/spreadMax/spreading

import { readFileSync, writeFileSync, existsSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const spreadFiles = [
  "spread_trees.js",
  "spread_shrubs.js",
  "spread_perennials.js",
  "spread_grasses_ferns.js",
  "spread_groundcovers_vines.js",
];

async function merge() {
  const plants = (await import("./plants.js")).default;

  // Collect all spread data
  let allSpread = {};
  for (const file of spreadFiles) {
    const path = join(__dirname, file);
    if (!existsSync(path)) {
      console.log(`Skipping ${file} (not found)`);
      continue;
    }
    const mod = await import(`./${file}`);
    const data = mod.spreadData ?? {};
    const count = Object.keys(data).length;
    Object.assign(allSpread, data);
    console.log(`Loaded ${file}: ${count} entries`);
  }

  if (Object.keys(allSpread).length === 0) {
    console.log("\nNo spread data to merge.");
    return;
  }

  // Read plants.js as text and patch each plant
  const plantsPath = join(__dirname, "plants.js");
  let content = readFileSync(plantsPath, "utf-8");
  let patched = 0;
  let skipped = 0;

  for (const [id, spread] of Object.entries(allSpread)) {
    const plant = plants.find((p) => p.id === id);
    if (!plant) {
      console.log(`  Warning: plant "${id}" not found, skipping`);
      continue;
    }
    if (plant.spreadMin != null) {
      skipped++;
      continue;
    }

    // Find the plant's closing fields and insert spread data before specialFeatures
    // Handle both quoted ("id":) and unquoted (id:) key formats
    const idPattern = new RegExp(
      `("?id"?:\\s*"${id}"[\\s\\S]*?)(\\n\\s*"?specialFeatures"?)`,
    );
    const match = content.match(idPattern);
    if (match) {
      // Detect whether this plant uses quoted or unquoted keys
      const usesQuotedKeys = match[2].trim().startsWith('"');
      const q = usesQuotedKeys ? '"' : '';
      const spreadFields =
        `\n    ${q}spreadMin${q}: ${spread.spreadMin},` +
        `\n    ${q}spreadMax${q}: ${spread.spreadMax},` +
        `\n    ${q}spreading${q}: ${spread.spreading},`;
      content = content.replace(
        idPattern,
        `$1${spreadFields}$2`,
      );
      patched++;
    } else {
      console.log(`  Warning: could not locate insertion point for "${id}"`);
    }
  }

  writeFileSync(plantsPath, content);
  console.log(
    `\nPatched ${patched} plants, skipped ${skipped} (already have spread data)`,
  );
}

merge().catch(console.error);
