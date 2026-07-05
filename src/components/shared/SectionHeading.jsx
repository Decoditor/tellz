import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}) {
  const alignClass =
    align === "left"
      ? "items-start text-left"
      : "items-center text-center mx-auto";

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "mb-12 flex max-w-3xl flex-col gap-4 md:mb-16",
        alignClass,
        className,
      )}
    >
      {eyebrow ? (
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-tellz-cyan light:text-blue-600">
          {eyebrow}
        </span>
      ) : null}
      <h2 className="text-balance text-3xl font-semibold tracking-tight text-tellz-text sm:text-4xl md:text-5xl light:text-slate-900">
        {title}
      </h2>
      {description ? (
        <p className="max-w-2xl text-base leading-relaxed text-tellz-muted md:text-lg light:text-slate-600">
          {description}
        </p>
      ) : null}
    </motion.div>
  );
}
