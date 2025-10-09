import fs from "node:fs/promises";
import path from "node:path";

const ROOT = path.resolve(import.meta.dirname, "..");
const SITE = path.join(ROOT, "assets/data/site-data.json");
const TAXO = path.join(ROOT, "assets/data/skill-taxonomy.json");
const OUT_SKILLS = path.join(ROOT, "assets/data/skills.generated.json");

// ---- merge/absorb rules (BLUE labels only)
const mergeRules = [
  { to: "materials characterization", from: ["sem", "scanning electron microscopy", "rheology", "viscosity testing"] },
  { to: "microscopy", from: ["confocal microscopy", "two-photon", "brightfield microscopy"] },
  { to: "foreign language writing", from: ["german writing", "japanese writing", "italian writing"] }
  // extend here…
];

const norm = (s = "") => s.toLowerCase().trim();
const mergeMap = new Map();
for (const rule of mergeRules) {
  const target = norm(rule.to);
  mergeMap.set(target, rule.to); // pretty casing for canonical
  for (const src of rule.from) mergeMap.set(norm(src), rule.to);
}

function canonicalize(label = "") {
  const key = norm(label);
  return mergeMap.get(key) || label.trim();
}

const slugify = (label = "") =>
  label
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");

// ---- 1) load site-data
const site = JSON.parse(await fs.readFile(SITE, "utf8"));

// ---- 2) canonicalize BLUE skills IN-PLACE (replace/absorb)
function canonList(list = []) {
  const set = new Set(list.map(canonicalize));
  return [...set];
}

(site.projects || []).forEach((project) => {
  project.skills = canonList(project.skills);
});

(site.experiences || []).forEach((experience) => {
  experience.skills = canonList(experience.skills);
});

// write back (so Projects/Experiences render canonical names)
await fs.writeFile(SITE, JSON.stringify(site, null, 2));

// ---- 3) build skill index from canonicalized site-data
const index = {}; // slug -> { label, items:[{title, url, kind, slug}] }

function addItem(kind, item) {
  const { title, slug, links, skills = [] } = item;
  const url = links?.card || `#${slug}`;
  skills.forEach((label) => {
    const key = slugify(label);
    if (!index[key]) index[key] = { label, items: [] };
    index[key].items.push({ title, url, kind, slug });
  });
}

(site.projects || []).forEach((project) => addItem("project", project));
(site.experiences || []).forEach((experience) => addItem("experience", experience));

await fs.writeFile(OUT_SKILLS, JSON.stringify(index, null, 2));

// ---- 4) ensure unknown skills are added to taxonomy.unsorted
const taxo = JSON.parse(await fs.readFile(TAXO, "utf8"));
const known = new Set(
  taxo.categories.flatMap((category) =>
    category.groups?.flatMap((group) => group.skills?.map((skill) => norm(skill.id)) || []) || []
  )
);

const unknown = Object.keys(index)
  .map((key) => norm(index[key].label))
  .filter((label) => !known.has(label));

if (unknown.length) {
  let unsorted = taxo.categories.find((category) => category.id === "unsorted");
  if (!unsorted) {
    unsorted = {
      id: "unsorted",
      label: "Unsorted",
      hidden: true,
      groups: [{ id: "tbd", label: "To Place", skills: [] }]
    };
    taxo.categories.push(unsorted);
  }
  const bucket = unsorted.groups[0];
  unknown.forEach((label) => {
    if (!bucket.skills.some((skill) => norm(skill.id) === label)) {
      bucket.skills.push({ id: label, label });
    }
  });
  await fs.writeFile(TAXO, JSON.stringify(taxo, null, 2));
}

console.log("✓ site-data canonicalized, skills.generated.json built, taxonomy updated");
