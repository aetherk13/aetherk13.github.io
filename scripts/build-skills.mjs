// scripts/build-skills.mjs
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ROOT = path.resolve(__dirname, "..");
const SITE = path.join(ROOT, "assets/data/site-data.json");
const TAXO = path.join(ROOT, "assets/data/skill-taxonomy.json");
const OUT_SKILLS = path.join(ROOT, "assets/data/skills.generated.json");


// -----------------------------
// Merge/absorb rules (BLUE labels only)
// Edit/add rules as needed
// -----------------------------
const mergeRules = [
  {
    to: "materials characterization",
    from: ["sem", "scanning electron microscopy", "rheology", "viscosity testing"],
  },
  {
    to: "microscopy",
    from: ["confocal microscopy", "two-photon", "brightfield microscopy"],
  },
  {
    to: "foreign language writing",
    from: ["german writing", "japanese writing", "italian writing"],
  },
  // extend here…
];

// -----------------------------
// Helpers
// -----------------------------
const norm = (s = "") => s.toLowerCase().trim();

const slugify = (label = "") =>
  label
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");

// Map of normalized source -> pretty canonical target
const mergeMap = new Map();
for (const rule of mergeRules) {
  const targetKey = norm(rule.to);
  // ensure canonical target has nice casing
  mergeMap.set(targetKey, rule.to);
  for (const src of rule.from) mergeMap.set(norm(src), rule.to);
}
function canonicalize(label = "") {
  const key = norm(label);
  return mergeMap.get(key) || label.trim();
}

// When comparing skills across files, use a single key format (slug).
const keyFromLabel = (label = "") => slugify(label || "");
const keyFromTaxoSkill = (skill = {}) =>
  slugify((skill.id || skill.label || "").toString());

// -----------------------------
// 1) Load site-data.json
// -----------------------------
const siteRaw = await fs.readFile(SITE, "utf8");
const site = JSON.parse(siteRaw);

// -----------------------------
// 2) Canonicalize BLUE skills IN-PLACE (replace/absorb)
//    (We DON’T touch topics/yellow fields here.)
// -----------------------------
const canonList = (list = []) => [...new Set(list.map(canonicalize))];

(site.projects || []).forEach((project) => {
  project.skills = canonList(project.skills || []);
});

(site.experiences || []).forEach((experience) => {
  experience.skills = canonList(experience.skills || []);
});

// Write back site-data.json so your pages render merged/canonical names
await fs.writeFile(SITE, JSON.stringify(site, null, 2), "utf8");

// -----------------------------
// 3) Build skills.generated.json (index)
// -----------------------------
/**
 * index: {
 *   [skillSlug]: {
 *     label: "Pretty Canonical Label",
 *     items: [{ title, url, kind, slug }]
 *   }
 * }
 */
const index = {};

function addItem(kind, item) {
  const { title, slug, links, skills = [] } = item;
  const url = links?.card || `#${slug}`;
  skills.forEach((label) => {
    const key = keyFromLabel(label);
    if (!index[key]) index[key] = { label, items: [] };
    index[key].items.push({ title, url, kind, slug });
  });
}

(site.projects || []).forEach((p) => addItem("project", p));
(site.experiences || []).forEach((e) => addItem("experience", e));

await fs.writeFile(OUT_SKILLS, JSON.stringify(index, null, 2), "utf8");

// -----------------------------
// 4) Sync taxonomy:
//     - Add unknown referenced skills to Unsorted/TBD with meta.auto: true
//     - Prune auto-added skills no longer referenced
// -----------------------------
const taxoRaw = await fs.readFile(TAXO, "utf8");
const taxo = JSON.parse(taxoRaw);

// Build a set of referenced skill keys (from index)
const referencedKeys = new Set(Object.keys(index)); // index keys are slugs

// Build a set of known taxonomy skill keys
const knownKeys = new Set(
  (taxo.categories || []).flatMap((category) =>
    (category.groups || []).flatMap((group) =>
      (group.skills || []).map((skill) => keyFromTaxoSkill(skill))
    )
  )
);

// 4a) Add unknown referenced skills to Unsorted/TBD
const unknownKeys = [...referencedKeys].filter((k) => !knownKeys.has(k));

if (unknownKeys.length) {
  let unsorted = (taxo.categories || []).find((c) => c.id === "unsorted");
  if (!unsorted) {
    unsorted = {
      id: "unsorted",
      label: "Unsorted",
      hidden: true,
      groups: [{ id: "tbd", label: "To Place", skills: [] }],
    };
    taxo.categories = taxo.categories || [];
    taxo.categories.push(unsorted);
  }
  const bucket = unsorted.groups?.[0] || (unsorted.groups = [{ id: "tbd", label: "To Place", skills: [] }])[0];

  for (const key of unknownKeys) {
    const pretty = index[key].label;
    const exists = (bucket.skills || []).some((s) => keyFromTaxoSkill(s) === key);
    if (!exists) {
      (bucket.skills = bucket.skills || []).push({
        id: key,           // keep id == slug so keys stay stable
        label: pretty,     // pretty label for display
        description: "",
        meta: { auto: true },
      });
    }
  }
  console.log(`• taxonomy updated: +${unknownKeys.length} skill(s) → unsorted/tbd.`);
}

// 4b) PRUNE: remove auto-added skills that are no longer referenced
let removed = 0;
for (const category of taxo.categories || []) {
  for (const group of category.groups || []) {
    const before = (group.skills || []).length;
    group.skills = (group.skills || []).filter((s) => {
      // Only prune if this was auto-added by the script
      if (s?.meta?.auto) {
        const k = keyFromTaxoSkill(s);
        return referencedKeys.has(k); // keep only if still referenced
      }
      return true; // keep curated/manual skills
    });
    removed += before - (group.skills || []).length;
  }
}

// Optionally keep Unsorted/TBD structure tidy
const unsorted = (taxo.categories || []).find((c) => c.id === "unsorted");
if (unsorted) {
  unsorted.groups = (unsorted.groups || []).filter((g) => (g.skills || []).length > 0);
  if (unsorted.groups.length === 0) {
    // Keep a default empty bucket to avoid churn
    unsorted.groups = [{ id: "tbd", label: "To Place", skills: [] }];
  }
}

await fs.writeFile(TAXO, JSON.stringify(taxo, null, 2), "utf8");

if (removed) {
  console.log(`• taxonomy pruned: -${removed} orphan auto-skill(s).`);
} else {
  console.log("• taxonomy prune: no orphan auto-skills to remove.");
}

console.log("✓ Done: site canonicalized, skills index generated, taxonomy synced.");