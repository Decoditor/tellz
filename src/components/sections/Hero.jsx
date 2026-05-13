import { motion } from "framer-motion"
import {
  Activity,
  ArrowRight,
  BarChart3,
  Bot,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Link } from "react-router-dom"

const trust = [
  { label: "Scalable Architecture", icon: ShieldCheck },
  { label: "Modern UI/UX", icon: Sparkles },
  { label: "Secure Systems", icon: Zap },
  { label: "Fast Delivery", icon: Activity },
]

const float = {
  animate: {
    y: [0, -10, 0],
    rotate: [0, 0.5, 0],
  },
  transition: {
    duration: 6,
    repeat: Infinity,
    ease: "easeInOut",
  },
}

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden border-b border-white/10 pb-20 pt-12 sm:pt-16 md:pb-28 md:pt-20 light:border-slate-200 light:bg-slate-50"
    >
      <div className="pointer-events-none absolute inset-0 mesh-gradient opacity-[0.35] light:hidden" />
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-[0.2] light:hidden" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
          <div className="max-w-xl lg:max-w-none">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-medium text-tellz-muted backdrop-blur-md light:border-slate-200 light:bg-white light:text-slate-600"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-tellz-cyan/60 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-tellz-cyan" />
              </span>
              Product, platform, and AI engineering
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 text-balance text-4xl font-semibold tracking-tight text-tellz-text sm:text-5xl md:text-6xl light:text-slate-900"
            >
              Building Digital Solutions That Move Industries Forward
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 text-pretty text-lg leading-relaxed text-tellz-muted md:text-xl light:text-slate-600"
            >
              We design and develop modern websites, scalable platforms, and powerful
              software solutions that solve real-world problems across every sector.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
              className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <Button asChild size="lg" className="rounded-2xl px-8 shadow-lg shadow-tellz-accent/15 light:shadow-md light:shadow-slate-300/40">
                <Link to="/contact" className="gap-2">
                  Start a Project
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="secondary" className="rounded-2xl px-8">
                <Link to="/projects">View Our Work</Link>
              </Button>
            </motion.div>

            <motion.ul
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.26, ease: [0.22, 1, 0.36, 1] }}
              className="mt-12 grid gap-3 sm:grid-cols-2"
            >
              {trust.map(({ label, icon: Icon }) => (
                <li
                  key={label}
                  className="flex items-center gap-3 rounded-2xl border border-white/[0.07] bg-white/[0.03] px-4 py-3 text-sm text-tellz-muted backdrop-blur-sm light:border-slate-200 light:bg-white light:text-slate-600"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-tellz-accent/15 text-tellz-cyan light:bg-blue-100 light:text-blue-700">
                    <Icon className="h-4 w-4" aria-hidden />
                  </span>
                  {label}
                </li>
              ))}
            </motion.ul>
          </div>

          <div className="relative z-0 mx-auto w-full max-w-lg lg:max-w-none">
            <motion.div
              {...float}
              className="absolute z-20 -left-18 -top-18 hidden h-fit w-48 rounded-2xl border border-white/10 bg-tellz-surface/95 p-4 shadow-xl shadow-black/30 backdrop-blur-md md:block light:border-slate-200 light:bg-white light:shadow-lg light:shadow-slate-300/50"
            >
              <div className="flex items-center justify-between text-xs text-tellz-muted light:text-slate-500">
                <span>Live throughput</span>
                <BarChart3 className="h-4 w-4 text-tellz-cyan" />
              </div>
              <div className="mt-3 h-2 rounded-full bg-white/5 light:bg-slate-200">
                <div className="h-full w-[72%] rounded-full bg-tellz-accent light:bg-blue-600" />
              </div>
              <p className="mt-3 text-2xl font-semibold tracking-tight text-tellz-text light:text-slate-900">
                99.2%
              </p>
              <p className="text-xs text-tellz-muted light:text-slate-500">
                SLO adherence · last 30d
              </p>
            </motion.div>

            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              className="absolute z-20 -right-18 -bottom-18 hidden h-fit w-48 rounded-2xl border border-white/10 bg-tellz-surface/95 p-4 shadow-xl shadow-black/30 backdrop-blur-md lg:block light:border-slate-200 light:bg-slate-100 light:shadow-lg light:shadow-slate-300/50"
            >
              <div className="flex items-center gap-2 text-xs font-medium text-tellz-text light:text-slate-900">
                <Bot className="h-4 w-4 text-tellz-cyan" />
                Copilot console
              </div>
              <div className="mt-3 space-y-2">
                {/* <div className="h-2 w-full rounded bg-white/10 light:bg-slate-200" />
                <div className="h-2 w-4/5 rounded bg-white/10 light:bg-slate-200" />
                <div className="h-2 w-2/3 rounded bg-white/10 light:bg-slate-200" /> */}
              </div>
              <p className="mt-3 text-[11px] leading-relaxed text-tellz-muted light:text-slate-600">
                Grounded on your APIs · human approvals · full audit log
              </p>
            </motion.div>

            <div className="relative z-10 overflow-hidden rounded-[2rem] border border-white/10 bg-tellz-surface/70 p-1 shadow-xl shadow-black/20 backdrop-blur-md light:border-slate-200 light:bg-white light:shadow-lg light:shadow-slate-300/45">
              <div className="rounded-[1.75rem] bg-tellz-bg/30 p-6 light:bg-slate-50">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-tellz-muted light:text-slate-500">
                      Mission control
                    </p>
                    <p className="mt-1 text-lg font-semibold text-tellz-text light:text-slate-900">
                      Launch readiness
                    </p>
                  </div>
                  <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-medium text-tellz-cyan light:border-slate-200 light:bg-slate-100 light:text-blue-600">
                    Stable
                  </span>
                </div>

                <div className="mt-6 grid gap-3 sm:grid-cols-3">
                  {[
                    { k: "Latency", v: "112ms", d: "p95 edge" },
                    { k: "Deployments", v: "48", d: "last sprint" },
                    { k: "Coverage", v: "94%", d: "critical paths" },
                  ].map((stat) => (
                    <div
                      key={stat.k}
                      className="rounded-2xl border border-white/[0.06] bg-tellz-bg/40 p-4 light:border-slate-100 light:bg-slate-50"
                    >
                      <p className="text-xs text-tellz-muted light:text-slate-500">{stat.k}</p>
                      <p className="mt-2 text-2xl font-semibold text-tellz-text light:text-slate-900">
                        {stat.v}
                      </p>
                      <p className="text-[11px] text-tellz-muted light:text-slate-500">{stat.d}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-2xl border border-white/[0.08] bg-white/[0.04] p-4 light:border-slate-200 light:bg-white">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm font-medium text-tellz-text light:text-slate-900">
                        AI-assisted release notes
                      </p>
                      <p className="mt-1 text-xs text-tellz-muted light:text-slate-600">
                        Summaries generated from commits, verified by your team.
                      </p>
                    </div>
                    <Sparkles className="h-5 w-5 shrink-0 text-tellz-glow" />
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {["API", "Web", "Mobile", "Data"].map((tag) => (
                      <span
                        key={tag}
                        className={cn(
                          "rounded-lg border border-white/10 bg-white/[0.03] px-2 py-1 text-[11px] font-medium text-tellz-muted light:border-slate-200 light:bg-white light:text-slate-600",
                        )}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
