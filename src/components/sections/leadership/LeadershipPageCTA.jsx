import { motion } from "framer-motion"
import { ArrowRight, Mail } from "lucide-react"
import { Link } from "react-router-dom"

import { Button } from "@/components/ui/button"

export function LeadershipPageCTA() {
  return (
    <section
      id="leadership-cta"
      className="relative py-20 md:py-28 light:bg-slate-50"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/10 light:bg-slate-200" />
      <div className="pointer-events-none absolute -left-20 bottom-0 h-56 w-56 rounded-full bg-tellz-cyan/10 blur-3xl light:bg-cyan-200/25" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-tellz-surface/70 p-10 shadow-xl shadow-black/20 backdrop-blur-md md:p-14 light:border-slate-200 light:bg-white light:shadow-lg light:shadow-slate-300/50"
        >
          <div className="pointer-events-none absolute -right-16 top-0 h-48 w-48 rounded-full bg-tellz-accent/15 blur-3xl light:bg-blue-200/40" />

          <div className="relative mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-tellz-cyan light:text-blue-600">
              Next step
            </p>
            <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-tellz-text sm:text-4xl md:text-5xl light:text-slate-900">
              Let&apos;s Build the Future Together
            </h2>
            <p className="mt-5 text-pretty text-lg text-tellz-muted md:text-xl light:text-slate-600">
              Partner with Tellz to create scalable digital products and innovative solutions.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="w-full rounded-2xl px-8 shadow-lg shadow-tellz-accent/20 light:shadow-md light:shadow-slate-300/50 sm:w-auto"
              >
                <Link to="/contact" className="gap-2">
                  Start a Project
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="w-full rounded-2xl px-8 sm:w-auto"
              >
                <Link to="/contact" className="gap-2">
                  <Mail className="h-4 w-4" />
                  Contact Leadership
                </Link>
              </Button>
            </div>

            <p className="mt-8 text-sm text-tellz-muted light:text-slate-500">
              Prefer a full overview first?{" "}
              <Link
                to="/"
                className="font-medium text-tellz-cyan underline-offset-4 hover:underline light:text-blue-600"
              >
                Return to home
              </Link>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
