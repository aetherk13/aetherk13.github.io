#!/usr/bin/env node
/**
 * Fetch title, artist(s), album, and cover for a list of Spotify track URLs/IDs
 * using Client Credentials (no redirect URI). No npm deps required.
 *
 * Usage:
 *   node scripts/spotify-tracks.mjs
 */

import { readFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import { existsSync } from "node:fs";

// ---- Configure your tracks here (mix of full URLs or raw IDs)
const TRACKS = [
  "https://open.spotify.com/track/6RKGBcDtgzXx21zUjpeu6F",
  "https://open.spotify.com/track/3GVNp2UgIp2TN3ra67cxdg",
  "https://open.spotify.com/track/6ho0GyrWZN3mhi9zVRW7xi",
];

const OUT = resolve("assets/data/spotify-tracks.json");
const ENV_PATH = resolve(".env");

// --- tiny .env loader (no deps)
async function loadEnvFile(file = ENV_PATH) {
  if (!existsSync(file)) return;
  const txt = await readFile(file, "utf8");
  for (const raw of txt.split(/\r?\n/)) {
    const line = raw.trim();
    if (!line || line.startsWith("#")) continue;
    const idx = line.indexOf("=");
    if (idx === -1) continue;
    const key = line.slice(0, idx).trim();
    let val = line.slice(idx + 1).trim();
    // Remove surrounding quotes if present
    if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
      val = val.slice(1, -1);
    }
    if (!(key in process.env)) process.env[key] = val;
  }
}

// --- helpers
const getSpotifyId = (s) => {
  const str = String(s).trim();
  const match = str.match(/(track|album|playlist)\/([A-Za-z0-9]{22})/);
  if (match) return { type: match[1], id: match[2] };
  return { type: "track", id: str }; // fallback
};

async function getToken() {
  const id = process.env.SPOTIFY_CLIENT_ID;
  const secret = process.env.SPOTIFY_CLIENT_SECRET;
  if (!id || !secret) {
    throw new Error("Missing SPOTIFY_CLIENT_ID or SPOTIFY_CLIENT_SECRET (set in .env or shell)");
  }
  const body = new URLSearchParams({ grant_type: "client_credentials" });
  const res = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      Authorization: "Basic " + Buffer.from(`${id}:${secret}`).toString("base64"),
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body,
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Token error ${res.status}: ${text}`);
  }
  const json = await res.json();
  return json.access_token;
}

async function getSpotifyMeta(accessToken, type, id) {
  const res = await fetch(`https://api.spotify.com/v1/${type}s/${id}`, {
    headers: { Authorization: `Bearer ${accessToken}` },
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`${type} ${id} error ${res.status}: ${text}`);
  }
  const d = await res.json();

  if (type === "track") {
    return {
      id: d.id,
      url: `https://open.spotify.com/track/${d.id}`,
      title: d.name,
      artist: d.artists.map(a => a.name).join(", "),
      album: d.album?.name || "",
      cover: d.album?.images?.[0]?.url || "",
    };
  } else if (type === "album") {
    return {
      id: d.id,
      url: `https://open.spotify.com/album/${d.id}`,
      title: d.name,
      artist: d.artists.map(a => a.name).join(", "),
      album: d.name,
      cover: d.images?.[0]?.url || "",
      total_tracks: d.total_tracks,
    };
  } else if (type === "playlist") {
    return {
      id: d.id,
      url: `https://open.spotify.com/playlist/${d.id}`,
      title: d.name,
      owner: d.owner?.display_name || "",
      cover: d.images?.[0]?.url || "",
      total_tracks: d.tracks?.total || 0,
    };
  }
  return {};
}


async function main() {
  await loadEnvFile();
  const token = await getToken();
  const results = [];
  const failures = [];

  for (const entry of TRACKS) {
    const { type, id } = getSpotifyId(entry);
    try {
      const meta = await getSpotifyMeta(token, type, id);
      results.push(meta);
    } catch (err) {
      failures.push({ id, error: err.message });
    }
  }

  await writeFile(OUT, JSON.stringify({ generatedAt: new Date().toISOString(), tracks: results }, null, 2));
  console.log(`Fetched ${results.length} items → ${OUT}`);
  if (failures.length) console.warn("Failed:", failures);
}

main().catch(e => { console.error(e); process.exit(1); });