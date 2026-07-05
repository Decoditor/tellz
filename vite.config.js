import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig, loadEnv } from "vite";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** Keep in sync with `slug` values in `src/data/industries.js`. */
const WORKFLOW_SLUGS = [
  "fintech",
  "agriculture",
  "real-estate",
  "telecom",
  "healthcare",
  "logistics",
  "education",
  "e-commerce",
];

function escapeXml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function writeSeoFiles(distDir, baseUrl) {
  const base = baseUrl.replace(/\/$/, "");
  const rows = [
    ["/", "weekly", "1"],
    ["/contact", "monthly", "0.9"],
    ["/projects", "weekly", "0.9"],
    ["/leadership", "monthly", "0.8"],
    ["/about", "monthly", "0.6"],
    ["/services", "monthly", "0.6"],
  ];
  for (const slug of WORKFLOW_SLUGS) {
    rows.push([`/solutions/${slug}/workflow`, "monthly", "0.7"]);
  }

  const urlEntries = rows
    .map(([pathname, changefreq, priority]) => {
      const loc = `${base}${pathname === "/" ? "" : pathname}`;
      return `  <url><loc>${escapeXml(loc)}</loc><changefreq>${changefreq}</changefreq><priority>${priority}</priority></url>`;
    })
    .join("\n");

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>`;

  fs.writeFileSync(path.join(distDir, "sitemap.xml"), sitemap, "utf8");
  fs.writeFileSync(
    path.join(distDir, "robots.txt"),
    `User-agent: *\nAllow: /\n\nSitemap: ${base}/sitemap.xml\n`,
    "utf8",
  );
}

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  /** Prefer `VITE_SITE_URL`; `VITE_SITEMAP` supported as legacy typo for the same value. */
  const siteUrl =
    env.VITE_SITE_URL?.trim() ||
    env.VITE_SITEMAP?.trim() ||
    "http://localhost:5173";

  return {
    plugins: [
      react(),
      tailwindcss(),
      {
        name: "tellz-seo-files",
        closeBundle() {
          const distDir = path.resolve(__dirname, "dist");
          if (!fs.existsSync(distDir)) return;
          if (
            !env.VITE_SITE_URL?.trim() &&
            !env.VITE_SITEMAP?.trim() &&
            mode === "production"
          ) {
            console.warn(
              "[tellz-seo-files] VITE_SITE_URL is not set. sitemap.xml and robots.txt use localhost. Add VITE_SITE_URL on Vercel (e.g. https://tellz.vercel.app or https://tellz.ng).",
            );
          }
          writeSeoFiles(distDir, siteUrl);
        },
      },
    ],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});
