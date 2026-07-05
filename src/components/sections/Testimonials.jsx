import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useEffect, useState } from "react";

import { SectionHeading } from "@/components/shared/SectionHeading";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { testimonials } from "@/data/testimonials";
import { cn } from "@/lib/utils";

export function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length);
    }, 7000);
    return () => window.clearInterval(id);
  }, []);

  const active = testimonials[index];

  const prev = () =>
    setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);
  const next = () => setIndex((i) => (i + 1) % testimonials.length);

  return (
    <section
      id="testimonials"
      className="border-b border-white/10 bg-tellz-surface/25 py-20 md:py-28 light:border-slate-200 light:bg-slate-50/80"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Testimonials"
          title="Trusted by teams who ship under pressure"
          description="Real feedback from leaders who needed velocity without sacrificing quality—across regulated and high-growth environments."
        />

        <div className="mx-auto mt-4 max-w-4xl">
          <div className="flex items-center justify-between gap-4">
            <div className="flex gap-2">
              <Button
                type="button"
                size="icon"
                variant="secondary"
                className="rounded-xl"
                onClick={prev}
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                type="button"
                size="icon"
                variant="secondary"
                className="rounded-xl"
                onClick={next}
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
            <div
              className="flex gap-1.5"
              role="tablist"
              aria-label="Testimonial slides"
            >
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  role="tab"
                  aria-selected={i === index}
                  className={cn(
                    "h-2 rounded-full transition-all",
                    i === index
                      ? "w-8 bg-tellz-accent light:bg-blue-600"
                      : "w-2 bg-white/15 light:bg-slate-300",
                  )}
                  onClick={() => setIndex(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
          </div>

          <Card className="mt-8 overflow-hidden border-white/[0.08] bg-white/[0.04] shadow-lg shadow-black/10 light:border-slate-200 light:bg-white light:shadow-slate-200/90">
            <CardContent className="p-8 md:p-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.name}
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -24 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="flex flex-wrap items-center gap-1">
                    {Array.from({ length: active.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-tellz-cyan text-tellz-cyan light:fill-amber-400 light:text-amber-400"
                        aria-hidden
                      />
                    ))}
                  </div>
                  <blockquote className="mt-6 text-pretty text-xl font-medium leading-relaxed text-tellz-text md:text-2xl light:text-slate-900">
                    “{active.quote}”
                  </blockquote>
                  <div className="mt-8 flex items-center gap-4">
                    <div
                      className="flex h-12 w-12 items-center justify-center rounded-2xl bg-tellz-accent text-sm font-semibold text-white"
                      aria-hidden
                    >
                      {active.initials}
                    </div>
                    <div>
                      <p className="font-semibold text-tellz-text light:text-slate-900">
                        {active.name}
                      </p>
                      <p className="text-sm text-tellz-muted light:text-slate-600">
                        {active.role} · {active.company}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
