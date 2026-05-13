import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import { useMemo } from "react"
import { Link, useSearchParams } from "react-router-dom"

import { ProjectCard } from "@/components/shared/ProjectCard"
import { SectionHeading } from "@/components/shared/SectionHeading"
import { Button } from "@/components/ui/button"
import { getProjectIndustries, projects } from "@/data/projects"
import { cn } from "@/lib/utils"

const ALL = "All"

export default function Projects() {
  const [searchParams, setSearchParams] = useSearchParams()
  const industries = useMemo(() => getProjectIndustries(projects), [])
  const categories = useMemo(() => [ALL, ...industries], [industries])

  const param = searchParams.get("category")
  const activeCategory =
    param && industries.includes(param) ? param : ALL

  function setCategory(next) {
    if (next === ALL) {
      setSearchParams({}, { replace: true })
    } else {
      setSearchParams({ category: next }, { replace: true })
    }
  }

  const filtered =
    activeCategory === ALL
      ? projects
      : projects.filter((p) => p.industry === activeCategory)

  return (
    <>
      <section className="relative overflow-hidden border-b border-white/10 pb-16 pt-12 sm:pt-16 md:pb-20 md:pt-20 light:border-slate-200 light:bg-slate-50">
        <div className="pointer-events-none absolute inset-0 mesh-gradient opacity-[0.35] light:hidden" />
        <div className="pointer-events-none absolute inset-0 grid-bg opacity-[0.18] light:hidden" />
        <div className="pointer-events-none absolute -left-24 top-1/4 h-72 w-72 rounded-full bg-tellz-accent/15 blur-3xl light:bg-blue-400/20" />
        <div className="pointer-events-none absolute -right-20 bottom-1/4 h-64 w-64 rounded-full bg-tellz-glow/12 blur-3xl light:bg-violet-300/25" />

        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="text-xs font-semibold uppercase tracking-[0.22em] text-tellz-cyan light:text-blue-600"
          >
            Work
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="mt-5 text-balance text-4xl font-semibold tracking-tight text-tellz-text sm:text-5xl md:text-6xl light:text-slate-900"
          >
            Projects we&apos;ve shipped
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-tellz-muted md:text-xl light:text-slate-600"
          >
            Platforms, products, and interfaces across industries — filter by category to
            find work closest to yours.
          </motion.p>
        </div>
      </section>

      <section className="border-b border-white/10 bg-tellz-surface/35 py-16 md:py-24 light:border-slate-200 light:bg-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            align="left"
            className="mb-8 md:mb-10"
            eyebrow="Portfolio"
            title="Built for operators"
            description="Representative engagements — names anonymized where required."
          />

          <div
            className="mb-10 flex flex-wrap gap-2"
            role="group"
            aria-label="Filter by category"
          >
            {categories.map((cat) => {
              const isActive = activeCategory === cat
              return (
                <Button
                  key={cat}
                  type="button"
                  size="sm"
                  variant={isActive ? "default" : "secondary"}
                  className={cn(
                    "rounded-full px-4",
                    !isActive &&
                      "border-border/80 bg-transparent hover:bg-muted light:bg-white",
                  )}
                  aria-pressed={isActive}
                  onClick={() => setCategory(cat)}
                >
                  {cat}
                </Button>
              )
            })}
          </div>

          {filtered.length === 0 ? (
            <p className="text-sm text-tellz-muted light:text-slate-600">
              No projects in this category yet.
            </p>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filtered.map((project, i) => (
                <ProjectCard
                  key={project.title}
                  project={project}
                  index={i}
                  footer={
                    <Link
                      to="/contact"
                      className="group/btn flex h-12 w-full items-center justify-between px-6 text-sm font-semibold text-foreground transition-colors hover:bg-white/[0.05] light:hover:bg-slate-50"
                    >
                      Discuss this build
                      <ArrowUpRight className="transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                    </Link>
                  }
                />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  )
}
