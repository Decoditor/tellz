import { motion } from "framer-motion"
import { GitBranch, Link2, Send } from "lucide-react"

import { SectionHeading } from "@/components/shared/SectionHeading"
import { Card } from "@/components/ui/card"
import { founders } from "@/data/leadership"
import { cn } from "@/lib/utils"

import { FounderPortrait } from "./FounderPortrait"

const socialConfig = [
  { key: "linkedin", label: "LinkedIn", icon: Link2 },
  { key: "twitter", label: "X", icon: Send },
  { key: "github", label: "GitHub", icon: GitBranch },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
}

const row = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
}

export function LeadershipFounders() {
  return (
    <section className="border-b border-white/10 py-20 md:py-28 light:border-slate-200 light:bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Founders"
          title="Engineering-led leadership, product-grade taste"
          description="The people setting the technical bar and cultural pace for how Tellz ships—from first commit to long-term partnership."
        />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="flex flex-col gap-16 md:gap-20"
        >
          {founders.map((founder) => (
            <motion.article key={founder.name} variants={row}>
              <Card
                className={cn(
                  "group overflow-hidden border-white/[0.08] bg-white/[0.03] shadow-xl shadow-black/15 backdrop-blur-md transition-all duration-300 hover:border-tellz-accent/25 hover:shadow-[0_0_0_1px_rgba(59,130,246,0.12),0_24px_60px_-24px_rgba(0,0,0,0.45)] light:border-slate-200 light:bg-white light:shadow-slate-200/80 light:hover:border-blue-300/60",
                  "flex flex-col gap-0 p-0 lg:flex-row lg:items-stretch lg:gap-0",
                  founder.reverse && "lg:flex-row-reverse",
                )}
              >
                <div className="relative p-6 pb-0 lg:w-[44%] lg:shrink-0 lg:p-8 lg:pb-8">
                  <div
                    className="pointer-events-none absolute inset-x-6 top-6 h-32 rounded-2xl bg-tellz-accent/10 blur-2xl opacity-60 transition-opacity duration-500 group-hover:opacity-90 lg:inset-x-8 light:bg-blue-400/15"
                    aria-hidden
                  />
                  <FounderPortrait
                    src={founder.imageSrc}
                    alt={founder.imageAlt}
                    className="ring-1 ring-white/10 light:ring-slate-200"
                  />
                </div>

                <div className="flex flex-1 flex-col justify-center gap-6 p-6 pt-8 lg:p-10 lg:pl-12 lg:pr-12">
                  <div>
                    <h3 className="text-2xl font-semibold tracking-tight text-tellz-text md:text-3xl light:text-slate-900">
                      {founder.name}
                    </h3>
                    <p className="mt-2 text-sm font-medium uppercase tracking-wider text-tellz-cyan light:text-blue-600">
                      {founder.role}
                    </p>
                  </div>
                  <p className="max-w-xl text-base leading-relaxed text-tellz-muted md:text-lg light:text-slate-600">
                    {founder.description}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {socialConfig.map(({ key, label, icon: Icon }) => {
                      const href = founder[key]
                      return (
                        <a
                          key={key}
                          href={href}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-tellz-muted transition-all duration-200 hover:border-tellz-accent/35 hover:bg-white/[0.08] hover:text-tellz-text light:border-slate-200 light:bg-slate-50 light:text-slate-600 light:hover:border-blue-300 light:hover:bg-slate-100 light:hover:text-slate-900"
                          aria-label={`${founder.name} on ${label}`}
                        >
                          <Icon className="h-4 w-4" />
                        </a>
                      )
                    })}
                  </div>
                </div>
              </Card>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
