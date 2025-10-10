# Kedar Krishnan — Portfolio & Skill Constellation

A personal site that showcases **Projects**, **Experiences**, a **Photo Atlas**, and an interactive **Skill Constellation** built with D3.  
The constellation reads from site data, merges/normalizes _skills_ (blue badges), and deep-links back to related work.

---

## ✨ Highlights

- **Interactive Skill Constellation** (`constellation.html`)
  - Click any skill to open a themed modal with related Projects/Experiences.
  - Deep link support: `constellation.html?skill=<slug>`.
- **Single Source of Truth** for content: `assets/data/site-data.json`.
- **Auto “Related Work” Index** generated at build: `assets/data/skills.generated.json`.
- **Human-curated Taxonomy** of skills & groupings: `assets/data/skill-taxonomy.json`.
- **Paper Kit 2** base styling with custom tweaks (modals, navbar, nodes).

---

## 📁 Structure

root/
├─ index.html # Landing
├─ projects.html # Projects (cards)
├─ experience.html # Experiences (cards)
├─ atlas.html # Photo Atlas
├─ constellation.html # Skill map (D3)
├─ assets/
│ ├─ css/ # Bootstrap + Paper Kit CSS
│ ├─ media/ # Images, thumbs, PDFs
│ ├─ data/
│ │ ├─ site-data.json # EDIT ME: projects & experiences (skills/topics, links, media)
│ │ ├─ skill-taxonomy.json # EDIT ME: where skills live in the constellation
│ │ └─ skills.generated.json# BUILT: skill → related items index
│ └─ js/
│ └─ build-skills.js # Build script to canonicalize & generate skills index
└─ README.md

---

## 🚀 Quick Start (Local Preview)

Use any static server you like:

**Node**

```bash
npm i -g http-server
http-server -p 8080
# visit http://localhost:8080

# Python 3
python -m http.server 8080
# visit http://localhost:8080

```

node scripts/build-skills.js

node scripts/spotify-tracks.mjs
