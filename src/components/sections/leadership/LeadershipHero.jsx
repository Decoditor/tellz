import { motion } from "framer-motion"

const particles = [
  { x: "8%", y: "18%", s: 6, d: 0 },
  { x: "22%", y: "72%", s: 4, d: 0.4 },
  { x: "78%", y: "28%", s: 5, d: 0.2 },
  { x: "88%", y: "65%", s: 3, d: 0.6 },
  { x: "45%", y: "12%", s: 4, d: 0.3 },
  { x: "62%", y: "80%", s: 5, d: 0.5 },
  { x: "15%", y: "45%", s: 3, d: 0.7 },
  { x: "92%", y: "40%", s: 4, d: 0.15 },
]

export function LeadershipHero() {
  return (
    <section className="relative overflow-hidden border-b border-white/10 pb-20 pt-12 sm:pt-16 md:pb-28 md:pt-20 light:border-slate-200 light:bg-slate-50">
      <div className="pointer-events-none absolute inset-0 mesh-gradient opacity-[0.35] light:hidden" />
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-[0.18] light:hidden" />

      <div className="pointer-events-none absolute -left-24 top-1/4 h-72 w-72 rounded-full bg-tellz-accent/15 blur-3xl light:bg-blue-400/20" />
      <div className="pointer-events-none absolute -right-20 bottom-1/4 h-64 w-64 rounded-full bg-tellz-glow/12 blur-3xl light:bg-violet-300/25" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-tellz-cyan/8 blur-3xl light:bg-cyan-200/20" />

      {particles.map((p, i) => (
        <motion.span
          key={i}
          className="pointer-events-none absolute rounded-full bg-tellz-cyan/35 blur-[1px] light:bg-blue-400/40"
          style={{
            left: p.x,
            top: p.y,
            width: p.s,
            height: p.s,
          }}
          initial={{ opacity: 0.2 }}
          animate={{
            opacity: [0.2, 0.85, 0.35],
            y: [0, -12, 0],
          }}
          transition={{
            duration: 5 + (i % 3),
            delay: p.d,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          aria-hidden
        />
      ))}

      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="text-xs font-semibold uppercase tracking-[0.22em] text-tellz-cyan light:text-blue-600"
        >
          Leadership
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
          className="mt-5 text-balance text-4xl font-semibold tracking-tight text-tellz-text sm:text-5xl md:text-6xl light:text-slate-900"
        >
          Meet the Leadership Behind Tellz
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-tellz-muted md:text-xl light:text-slate-600"
        >
          A passionate team building scalable digital solutions and solving real-world problems
          through technology.
        </motion.p>
      </div>
    </section>
  )
}
