import { motion } from "framer-motion"
import { Link } from "react-router-dom"

import { Button } from "@/components/ui/button"

const copy = {
  about: {
    title: "About Tellz",
    body: "We are a product-minded engineering partner for teams that need Silicon Valley polish without the theater. Our studio model blends strategy, design, and implementation so you can ship with confidence.",
  },
  services: {
    title: "Services",
    body: "From flagship marketing sites to multi-tenant SaaS, we scope engagements around outcomes—not vanity deliverables. Tell us what needs to be true in six months, and we will reverse-engineer the path.",
  },
  projects: {
    title: "Projects",
    body: "Case studies and deeper technical write-ups are on the way. Until then, browse the full portfolio on our projects page or reach out for a private walkthrough tailored to your industry.",
  },
  contact: {
    title: "Contact",
    body: "Share context, timelines, and constraints—we will respond with a clear proposal and next steps. We work with startups, enterprises, and funds that need velocity with judgment.",
  },
}

export default function PlaceholderPage({ title, slug }) {
  const content = copy[slug] ?? {
    title: title ?? "Tellz",
    body: "This page is coming soon.",
  }

  return (
    <div className="relative border-b border-white/10 light:border-slate-200 light:bg-slate-50">
      <div className="relative mx-auto max-w-3xl px-4 py-24 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-[2rem] border border-white/10 bg-tellz-surface/70 p-10 shadow-lg shadow-black/15 backdrop-blur-md light:border-slate-200 light:bg-white light:shadow-slate-200/90"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-tellz-cyan light:text-blue-600">
            Tellz
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-tellz-text light:text-slate-900">
            {content.title}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-tellz-muted light:text-slate-600">
            {content.body}
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Button asChild className="rounded-xl">
              <Link to="/">Back to home</Link>
            </Button>
            <Button asChild variant="secondary" className="rounded-xl">
              <Link to="/contact">Book a Call</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
