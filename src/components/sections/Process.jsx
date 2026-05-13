import { motion } from "framer-motion"

import { SectionHeading } from "@/components/shared/SectionHeading"
import { processSteps } from "@/data/process"
import { cn } from "@/lib/utils"

export function Process() {
  return (
    <section
      id="process"
      className="border-b border-white/10 py-20 md:py-28 light:border-slate-200 light:bg-white"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Process"
          title="A focused pipeline from ambiguity to shipped product"
          description="Predictable rituals, transparent communication, and engineering quality that holds up after launch day."
        />

        <div className="relative mt-4">
          <div
            className="absolute left-[1.25rem] top-3 bottom-3 hidden w-px bg-white/15 md:block lg:left-1/2 lg:-translate-x-px light:bg-slate-300"
            aria-hidden
          />
          <div className="grid gap-10 md:gap-12">
            {processSteps.map((step, index) => {
              const isRight = index % 2 === 1
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.06,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className={cn(
                    "relative grid items-center gap-6 md:grid-cols-2",
                    isRight && "md:[&>div:first-child]:order-2",
                  )}
                >
                  <div
                    className={cn(
                      "flex gap-4 md:gap-4",
                      isRight ? "md:justify-start lg:pl-16" : "md:justify-end lg:pr-16",
                    )}
                  >
                    <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/15 bg-tellz-bg text-sm font-semibold text-tellz-cyan shadow-md shadow-black/40 light:border-slate-300 light:bg-slate-100 light:text-blue-700 light:shadow-sm light:shadow-slate-300/80">
                      {index + 1}
                    </span>
                    <div
                      className={cn(
                        "max-w-md rounded-2xl border border-white/[0.07] bg-white/[0.03] p-6 backdrop-blur-md light:border-slate-200 light:bg-white",
                        isRight ? "md:text-left" : "md:text-right",
                      )}
                    >
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-tellz-muted light:text-slate-500">
                        Step {step.step}
                      </p>
                      <h3 className="mt-2 text-xl font-semibold text-tellz-text light:text-slate-900">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-tellz-muted light:text-slate-600">
                        {step.description}
                      </p>
                    </div>
                  </div>
                  <div className="hidden md:block" aria-hidden />
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
