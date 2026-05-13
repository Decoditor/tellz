import { motion } from "framer-motion"

export function LeadershipVision() {
  return (
    <section
      id="leadership-vision"
      className="relative overflow-hidden border-b border-white/10 py-20 md:py-28 light:border-slate-200 light:bg-white"
    >
      <div className="pointer-events-none absolute inset-0 mesh-gradient opacity-30 light:hidden" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[min(90vw,42rem)] w-[min(90vw,42rem)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-tellz-accent/10 blur-3xl light:bg-blue-200/30" />
      <div className="pointer-events-none absolute right-0 top-0 h-64 w-64 rounded-full bg-tellz-glow/10 blur-3xl light:bg-violet-200/25" />

      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-[2rem] border border-white/10 bg-tellz-surface/50 p-10 shadow-xl shadow-black/20 backdrop-blur-md md:p-14 light:border-slate-200 light:bg-slate-50 light:shadow-slate-200/90"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-tellz-cyan light:text-blue-600">
            Mission
          </p>
          <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-tellz-text sm:text-4xl md:text-5xl light:text-slate-900">
            Building Technology That Solves Real Problems
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-tellz-muted md:text-xl light:text-slate-600">
            Tellz focuses on creating digital systems, platforms, and experiences that improve
            industries and empower businesses across Africa and beyond.
          </p>

          <motion.div
            className="mx-auto mt-10 grid max-w-lg grid-cols-3 gap-3 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.5 }}
          >
            {[
              { k: "Ship", v: "Fast" },
              { k: "Build", v: "Right" },
              { k: "Scale", v: "Long" },
            ].map((cell, i) => (
              <motion.div
                key={cell.k}
                className="rounded-2xl border border-white/10 bg-white/[0.04] px-3 py-4 light:border-slate-200 light:bg-white"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.08 * i, duration: 0.4 }}
              >
                <p className="text-xs font-medium uppercase tracking-wider text-tellz-muted light:text-slate-500">
                  {cell.k}
                </p>
                <p className="mt-1 text-lg font-semibold text-tellz-text light:text-slate-900">
                  {cell.v}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
