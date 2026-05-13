import { motion } from "framer-motion"

import { SectionHeading } from "@/components/shared/SectionHeading"
import { whyTellz } from "@/data/whyTellz"
import { cn } from "@/lib/utils"

export function WhyTellz() {
  return (
    <section
      id="about"
      className="relative border-b border-white/10 py-20 md:py-28 light:border-slate-200 light:bg-slate-50"
    >
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <div className="lg:sticky lg:top-28">
            <SectionHeading
              align="left"
              eyebrow="Why Tellz"
              title="Engineering discipline with the taste of a product studio"
              description="We are not ticking deliverables—we are compounding leverage. Every engagement is designed to leave your team stronger than we found it."
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="mt-10 hidden overflow-hidden rounded-[2rem] border border-white/10 bg-tellz-surface/70 p-8 shadow-lg shadow-black/15 backdrop-blur-md lg:block light:border-slate-200 light:bg-white light:shadow-slate-200/90"
            >
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-tellz-text light:text-slate-900">
                  Operating cadence
                </p>
                <span className="rounded-full bg-tellz-accent/15 px-3 py-1 text-xs font-semibold text-tellz-cyan light:bg-blue-100 light:text-blue-700">
                  Weekly demos
                </span>
              </div>
              <div className="mt-6 space-y-4">
                {["Design systems", "API contracts", "Observability", "Docs & handoff"].map(
                  (row, idx) => (
                    <div
                      key={row}
                      className="flex items-center justify-between rounded-2xl border border-white/[0.06] bg-tellz-bg/50 px-4 py-3 light:border-slate-100 light:bg-slate-50"
                    >
                      <span className="text-sm text-tellz-muted light:text-slate-600">
                        {row}
                      </span>
                      <span className="text-xs font-semibold text-tellz-text light:text-slate-900">
                        {idx + 1}/4
                      </span>
                    </div>
                  ),
                )}
              </div>
            </motion.div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {whyTellz.map(({ title, description, icon: Icon }, i) => (
              <motion.article
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.45,
                  delay: i * 0.05,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={cn(
                  "rounded-2xl border border-white/[0.07] bg-white/[0.02] p-6 shadow-lg shadow-black/10 backdrop-blur-md transition-transform duration-300 hover:-translate-y-0.5 hover:border-tellz-accent/25 light:border-slate-200 light:bg-white light:shadow-slate-200/50",
                  i === 0 && "sm:col-span-2",
                )}
              >
                <div className="flex items-start gap-4">
                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-tellz-accent/15 text-tellz-text light:bg-slate-200 light:text-slate-800">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-tellz-text light:text-slate-900">
                      {title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-tellz-muted light:text-slate-600">
                      {description}
                    </p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
