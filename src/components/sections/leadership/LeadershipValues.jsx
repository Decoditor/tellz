import { motion } from "framer-motion"

import { SectionHeading } from "@/components/shared/SectionHeading"
import { Card, CardContent } from "@/components/ui/card"
import { leadershipValues } from "@/data/leadership"

const list = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.05 },
  },
}

const item = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
}

export function LeadershipValues() {
  return (
    <section className="border-b border-white/10 bg-tellz-surface/30 py-20 md:py-28 light:border-slate-200 light:bg-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Philosophy"
          title="How we lead"
          description="Principles that shape our decisions, our craft, and how we show up for partners—from discovery to years after launch."
        />

        <motion.div
          variants={list}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {leadershipValues.map(({ title, description, icon: Icon }) => (
            <motion.div key={title} variants={item}>
              <Card className="group h-full border-white/[0.07] bg-white/[0.03] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-tellz-cyan/25 hover:shadow-lg hover:shadow-tellz-accent/10 light:border-slate-200 light:bg-white light:hover:border-cyan-200 light:hover:shadow-slate-300/60">
                <CardContent className="flex flex-col gap-4 p-6">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-tellz-accent/10 text-tellz-cyan transition-transform duration-300 group-hover:scale-105 light:border-slate-200 light:bg-blue-50 light:text-blue-700">
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
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
