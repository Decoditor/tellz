import { useEffect } from "react"
import { useLocation } from "react-router-dom"

import { getIndustryBySlug } from "@/data/industries"

const SITE_NAME = "Tellz"

/**
 * Resolves the absolute site origin used for `<link rel="canonical">`, Open Graph
 * `og:url`, and Twitter meta — so search/social match your deployed hostname.
 *
 * Resolution order:
 * 1. **`VITE_SITE_URL`** from `.env` / Vercel (preferred). Trailing slashes are stripped.
 * 2. **`VITE_SITEMAP`** — legacy fallback only; same idea as `VITE_SITE_URL` if an old
 *    env name is still set. Prefer renaming to `VITE_SITE_URL`.
 * 3. **Dev:** if neither is set, use `window.location.origin` (e.g. `http://localhost:5173`)
 *    so local previews still get sensible URLs.
 * 4. **Production build** without env: fall back to `http://localhost:5173` (sitemap plugin
 *    warns on `vite build` — set `VITE_SITE_URL` on Vercel for real deployments).
 *
 * Only variables prefixed with `VITE_` are exposed to client code via `import.meta.env`.
 */
function siteBase() {
  const raw =
    import.meta.env.VITE_SITE_URL || import.meta.env.VITE_SITEMAP || ""
  const fromEnv = String(raw).replace(/\/$/, "").trim()
  if (fromEnv) return fromEnv
  if (import.meta.env.DEV && typeof window !== "undefined") {
    return window.location.origin
  }
  return "http://localhost:5173"
}

const DEFAULT_DESCRIPTION =
  "Tellz is a Lagos-based technology company building modern websites, scalable platforms, and AI-powered software for ambitious teams."

const STATIC_ROUTES = {
  "/": {
    title: `${SITE_NAME} — Digital Products That Move Industries Forward`,
    description: DEFAULT_DESCRIPTION,
  },
  "/contact": {
    title: `Contact — ${SITE_NAME}`,
    description:
      "Get in touch with Tellz about websites, platforms, and AI engineering. Typical response within one business day.",
  },
  "/projects": {
    title: `Projects — ${SITE_NAME}`,
    description:
      "Explore interfaces and systems Tellz has shipped across fintech, logistics, healthcare, and more.",
  },
  "/leadership": {
    title: `Leadership — ${SITE_NAME}`,
    description:
      "Meet the Tellz leadership team and values behind our product and platform work in Lagos and worldwide.",
  },
  "/about": {
    title: `About — ${SITE_NAME}`,
    description: DEFAULT_DESCRIPTION,
  },
  "/services": {
    title: `Services — ${SITE_NAME}`,
    description: DEFAULT_DESCRIPTION,
  },
}

function metaForPath(pathname) {
  if (STATIC_ROUTES[pathname]) {
    return STATIC_ROUTES[pathname]
  }
  const m = pathname.match(/^\/solutions\/([^/]+)\/workflow$/)
  if (m) {
    const industry = getIndustryBySlug(m[1])
    if (industry) {
      return {
        title: `${industry.title} workflow — ${SITE_NAME}`,
        description: `How Tellz delivers product and platform work in ${industry.title.toLowerCase()}: discovery through launch.`,
      }
    }
  }
  return STATIC_ROUTES["/"]
}

function upsertMeta(attr, key, value) {
  let el = document.querySelector(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement("meta")
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute("content", value)
}

function upsertLink(rel, href) {
  let el = document.querySelector(`link[rel="${rel}"]`)
  if (!el) {
    el = document.createElement("link")
    el.setAttribute("rel", rel)
    document.head.appendChild(el)
  }
  el.setAttribute("href", href)
}

export function SEOHead() {
  const { pathname } = useLocation()
  const base = siteBase()
  const { title, description } = metaForPath(pathname)
  const canonical = `${base}${pathname === "/" ? "" : pathname}`

  useEffect(() => {
    document.title = title
    upsertMeta("name", "description", description)
    upsertMeta("property", "og:title", title)
    upsertMeta("property", "og:description", description)
    upsertMeta("property", "og:url", canonical)
    upsertMeta("property", "og:type", "website")
    upsertMeta("property", "og:site_name", SITE_NAME)
    upsertMeta("name", "twitter:card", "summary_large_image")
    upsertMeta("name", "twitter:title", title)
    upsertMeta("name", "twitter:description", description)
    upsertLink("canonical", canonical)
  }, [title, description, canonical])

  useEffect(() => {
    if (pathname !== "/") return undefined

    const id = "tellz-org-jsonld"
    let script = document.getElementById(id)
    if (!script) {
      script = document.createElement("script")
      script.id = id
      script.type = "application/ld+json"
      document.head.appendChild(script)
    }
    script.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      name: SITE_NAME,
      url: base,
      description: DEFAULT_DESCRIPTION,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Lagos",
        addressCountry: "NG",
      },
      email: "absamaard@gmail.com",
    })
    return () => {
      document.getElementById(id)?.remove()
    }
  }, [pathname, base])

  return null
}
