// Merge temp plant data files into the main data files
// Usage: node src/data/merge_temp.mjs

import { readFileSync, writeFileSync, existsSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const tempFiles = [
  "tmp_trees.js",
  "tmp_shrubs.js",
  "tmp_perennials1.js",
  "tmp_perennials2.js",
  "tmp_rest.js",
];

async function merge() {
  // Load existing plant IDs to avoid duplicates
  const existingPlants = (await import("./plants.js")).default;
  const existingIds = new Set(existingPlants.map((p) => p.id));

  let allPlants = [];
  let allFallColors = {};
  let allPollinators = {};

  for (const file of tempFiles) {
    const path = join(__dirname, file);
    if (!existsSync(path)) {
      console.log(`Skipping ${file} (not found)`);
      continue;
    }
    const mod = await import(`./${file}`);
    const newPlants = (mod.plants ?? []).filter((p) => !existingIds.has(p.id));
    const skipped = (mod.plants?.length ?? 0) - newPlants.length;
    allPlants.push(...newPlants);
    newPlants.forEach((p) => existingIds.add(p.id));
    // Only include fall/pollinator data for plants we're actually adding
    const newIds = new Set(newPlants.map((p) => p.id));
    if (mod.fallColors) {
      for (const [id, data] of Object.entries(mod.fallColors)) {
        if (newIds.has(id)) allFallColors[id] = data;
      }
    }
    if (mod.pollinators) {
      for (const [id, data] of Object.entries(mod.pollinators)) {
        if (newIds.has(id)) allPollinators[id] = data;
      }
    }
    console.log(`Loaded ${file}: ${newPlants.length} new plants${skipped ? ` (${skipped} already exist)` : ""}`);
  }

  if (allPlants.length === 0) {
    console.log("\nNo new plants to merge.");
    return;
  }

  console.log(`\nTotal new plants: ${allPlants.length}`);
  console.log(`Total new fall colors: ${Object.keys(allFallColors).length}`);
  console.log(`Total new pollinators: ${Object.keys(allPollinators).length}`);

  // Append plants to plants.js
  const plantsPath = join(__dirname, "plants.js");
  let plantsContent = readFileSync(plantsPath, "utf-8");

  // Build the new entries string
  const indent = "  ";
  const plantEntries = allPlants
    .map((p) => indent + JSON.stringify(p, null, 2).split("\n").join("\n" + indent))
    .join(",\n");

  // Insert before the closing ];
  plantsContent = plantsContent.replace(
    /,?\n\];\s*\nexport default plants;/,
    `,\n\n  // ─── ADDITIONAL PLANTS (batch-merged) ─────────────────────────────────────\n${plantEntries},\n];\n\nexport default plants;`
  );
  writeFileSync(plantsPath, plantsContent);
  console.log("Updated plants.js");

  // Append fall colors to fallColorData.js
  const fallPath = join(__dirname, "fallColorData.js");
  let fallContent = readFileSync(fallPath, "utf-8");
  const fallEntries = Object.entries(allFallColors)
    .map(
      ([id, data]) =>
        `  "${id}": {\n    fallColors: ${JSON.stringify(data.fallColors)},\n    fallColorMonths: ${JSON.stringify(data.fallColorMonths)},\n  }`
    )
    .join(",\n");
  fallContent = fallContent.replace(
    /,?\n\};\s*$/,
    `,\n\n  // ─── ADDITIONAL PLANTS ──────────────────────────────────────────────────────\n${fallEntries},\n};\n`
  );
  writeFileSync(fallPath, fallContent);
  console.log("Updated fallColorData.js");

  // Append pollinators to pollinatorData.js
  const pollPath = join(__dirname, "pollinatorData.js");
  let pollContent = readFileSync(pollPath, "utf-8");
  const pollEntries = Object.entries(allPollinators)
    .map(([id, data]) => `  "${id}": ${JSON.stringify(data)}`)
    .join(",\n");
  pollContent = pollContent.replace(
    /,?\n\};\s*$/,
    `,\n\n  // ─── ADDITIONAL PLANTS ──────────────────────────────────────────────────────\n${pollEntries},\n};\n`
  );
  writeFileSync(pollPath, pollContent);
  console.log("Updated pollinatorData.js");
}

merge().catch(console.error);
