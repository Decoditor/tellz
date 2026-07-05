import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";

import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section id="contact" className="relative py-20 md:py-28 light:bg-slate-50">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-[2rem] border border-white/10 bg-tellz-surface/70 p-10 shadow-xl shadow-black/20 backdrop-blur-md md:p-14 light:border-slate-200 light:bg-white light:shadow-lg light:shadow-slate-300/50"
        >
          <div className="relative mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-tellz-cyan light:text-blue-600">
              Let&apos;s build
            </p>
            <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-tellz-text sm:text-4xl md:text-5xl light:text-slate-900">
              Ready to Build Something Powerful?
            </h2>
            <p className="mt-5 text-pretty text-lg text-tellz-muted md:text-xl light:text-slate-600">
              Let&apos;s transform your vision into a scalable digital product.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="w-full rounded-2xl px-8 shadow-lg shadow-tellz-accent/20 light:shadow-md light:shadow-slate-300/50 sm:w-auto"
              >
                <Link to="/contact" className="gap-2">
                  Start Your Project
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
                  <Calendar className="h-4 w-4" />
                  Schedule a Call
                </Link>
              </Button>
            </div>

            <p className="mt-8 text-sm text-tellz-muted light:text-slate-500">
              Typical response within one business day · NDA-friendly
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
