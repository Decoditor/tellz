import { motion } from "framer-motion";

import { SectionHeading } from "@/components/shared/SectionHeading";
import { Card, CardContent } from "@/components/ui/card";
import { services } from "@/data/services";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.05, delayChildren: 0.04 },
  },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
};

export function Services() {
  return (
    <section
      id="services"
      className="relative border-b border-white/10 py-20 md:py-28 light:border-slate-200 light:bg-white"
    >
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Services"
          title="End-to-end product execution, from narrative to production"
          description="Strategy, design, engineering, and AI—woven into one accountable team. We ship in tight loops so momentum never evaporates."
        />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid gap-4 md:grid-cols-2 xl:grid-cols-4"
        >
          {services.map(({ title, description, icon: Icon }) => (
            <motion.div key={title} variants={item}>
              <Card className="group h-full border-white/[0.07] bg-white/[0.03] transition-all duration-300 hover:scale-[1.01] hover:border-tellz-accent/25 hover:shadow-lg hover:shadow-black/15 light:border-slate-200 light:bg-slate-50 light:hover:border-slate-300 light:hover:shadow-slate-200/90">
                <CardContent className="flex h-full flex-col gap-4 p-6">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-tellz-text transition-colors group-hover:border-tellz-accent/40 group-hover:text-tellz-cyan light:border-slate-200 light:bg-white light:text-slate-900 light:group-hover:border-blue-300">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                  </div>
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
  );
}
