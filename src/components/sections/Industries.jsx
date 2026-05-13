import { motion } from "framer-motion"
import { Link } from "react-router-dom"

import { SectionHeading } from "@/components/shared/SectionHeading"
import { Card, CardContent } from "@/components/ui/card"
import { industries } from "@/data/industries"
import { cn } from "@/lib/utils"

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.05 },
  },
}

const item = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
}

export function Industries() {
  return (
    <section
      id="solutions"
      className="relative border-b border-white/10 py-20 md:py-28 light:border-slate-200 light:bg-white"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/10 light:bg-slate-200" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Industries"
          title="Depth across the sectors that power the real economy"
          description="From regulated environments to high-velocity commerce, we build with context—so your product feels native to the industry it serves."
        />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {industries.map(({ slug, title, description, icon: Icon }) => (
            <motion.div key={slug} variants={item}>
              <Link
                to={`/solutions/${slug}/workflow`}
                className="block h-full outline-none focus-visible:ring-2 focus-visible:ring-tellz-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-tellz-bg light:focus-visible:ring-blue-600 light:focus-visible:ring-offset-white"
              >
                <Card className="group h-full overflow-hidden border-white/[0.07] bg-white/[0.02] transition-all duration-300 hover:-translate-y-1 hover:border-tellz-accent/30 hover:shadow-lg hover:shadow-black/20 light:border-slate-200 light:bg-white light:hover:border-slate-300 light:hover:shadow-slate-200/80">
                  <CardContent className="flex h-full flex-col gap-4 p-6">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-tellz-accent/15 text-tellz-cyan transition-transform duration-300 group-hover:scale-105 light:bg-blue-100 light:text-blue-700">
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
                    <span
                      className={cn(
                        "mt-auto inline-flex text-xs font-semibold text-tellz-cyan transition-opacity duration-300 group-hover:opacity-100 light:text-blue-600",
                        "opacity-80 sm:opacity-0 sm:group-hover:opacity-100",
                      )}
                    >
                      Explore workflow →
                    </span>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
