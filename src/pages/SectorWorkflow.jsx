import { motion } from "framer-motion"
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react"
import { Link, Navigate, useParams } from "react-router-dom"

import { Button } from "@/components/ui/button"
import { getIndustryBySlug } from "@/data/industries"
import { getSectorWorkflow } from "@/data/sectorWorkflows"

export default function SectorWorkflow() {
  const { slug } = useParams()
  const industry = slug ? getIndustryBySlug(slug) : null
  const workflow = slug ? getSectorWorkflow(slug) : null

  if (!industry || !workflow) {
    return <Navigate to="/" replace />
  }

  const Icon = industry.icon

  return (
    <>
      <section className="relative overflow-hidden border-b border-white/10 pb-16 pt-12 sm:pt-16 md:pb-20 md:pt-20 light:border-slate-200 light:bg-slate-50">
        <div className="pointer-events-none absolute inset-0 mesh-gradient opacity-[0.35] light:hidden" />
        <div className="pointer-events-none absolute inset-0 grid-bg opacity-[0.18] light:hidden" />
        <div className="pointer-events-none absolute -left-24 top-1/4 h-72 w-72 rounded-full bg-tellz-accent/15 blur-3xl light:bg-blue-400/20" />
        <div className="pointer-events-none absolute -right-20 bottom-1/4 h-64 w-64 rounded-full bg-tellz-glow/12 blur-3xl light:bg-violet-300/25" />

        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Button
            asChild
            variant="ghost"
            size="sm"
            className="-ml-2 mb-8 rounded-lg text-tellz-muted hover:text-tellz-text light:text-slate-600 light:hover:text-slate-900"
          >
            <Link to="/#solutions" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Solution sectors
            </Link>
          </Button>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center text-center sm:flex-row sm:items-start sm:gap-6 sm:text-left"
          >
            <span className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-tellz-accent/15 text-tellz-cyan light:bg-blue-100 light:text-blue-700">
              <Icon className="h-7 w-7" aria-hidden />
            </span>
            <div className="min-w-0 flex-1">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-tellz-cyan light:text-blue-600">
                Workflow · {industry.title}
              </p>
              <h1 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-tellz-text sm:text-4xl md:text-5xl light:text-slate-900">
                How we partner in {industry.title.toLowerCase()}
              </h1>
              <p className="mx-auto mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-tellz-muted sm:mx-0 md:text-xl light:text-slate-600">
                {workflow.intro}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="border-b border-white/10 py-16 md:py-24 light:border-slate-200 light:bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-tellz-muted light:text-slate-500">
            Phased delivery
          </h2>
          <ol className="mt-10 space-y-0">
            {workflow.phases.map((phase, i) => (
              <motion.li
                key={phase.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.45,
                  delay: i * 0.05,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative border-l border-white/15 pl-8 pb-12 last:border-l-transparent last:pb-0 light:border-slate-200"
              >
                <span
                  className="absolute -left-[9px] top-0 flex h-[18px] w-[18px] items-center justify-center rounded-full border-2 border-tellz-cyan bg-tellz-bg text-[10px] font-bold text-tellz-cyan light:border-blue-600 light:bg-white light:text-blue-600"
                  aria-hidden
                >
                  {i + 1}
                </span>
                <h3 className="text-lg font-semibold text-tellz-text light:text-slate-900">
                  {phase.name}
                </h3>
                <p className="mt-2 text-base leading-relaxed text-tellz-muted light:text-slate-600">
                  {phase.summary}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-tellz-muted/90 light:text-slate-500">
                  {phase.detail}
                </p>
              </motion.li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-b border-white/10 bg-tellz-surface/35 py-16 md:py-24 light:border-slate-200 light:bg-slate-100">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-tellz-muted light:text-slate-500">
            What you get
          </h2>
          <ul className="mt-8 space-y-4">
            {workflow.outcomes.map((line) => (
              <li
                key={line}
                className="flex gap-3 text-base leading-relaxed text-tellz-text light:text-slate-900"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-tellz-cyan light:text-blue-600" />
                {line}
              </li>
            ))}
          </ul>

          <div className="mt-12 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button asChild size="lg" className="rounded-2xl shadow-lg shadow-tellz-accent/20 light:shadow-md light:shadow-slate-300/50">
              <Link to="/contact" className="gap-2">
                Discuss this sector
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="secondary" className="rounded-2xl">
              <Link to="/projects">See related work</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
