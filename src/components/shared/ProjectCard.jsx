import { motion } from "framer-motion"

import { ProjectCover } from "@/components/shared/ProjectCover"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { cn } from "@/lib/utils"

export function ProjectCard({ project, index = 0, footer, className }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.5,
        delay: index * 0.06,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={cn("h-full", className)}
    >
      <Card className="group flex h-full flex-col overflow-hidden border-white/[0.07] bg-tellz-bg/40 py-0 transition-all duration-300 hover:-translate-y-1 hover:border-white/15 hover:shadow-2xl light:border-slate-200 light:bg-white light:hover:border-slate-300 light:hover:shadow-slate-300/40">
        <ProjectCover key={project.coverSrc || project.title} src={project.coverSrc} alt={project.coverAlt}>
          <span className="inline-flex w-fit rounded-full border border-white/25 bg-black/15 px-3 py-1 text-xs font-medium backdrop-blur-sm">
            {project.industry}
          </span>
          <div className="rounded-2xl border border-white/20 bg-black/20 p-3 text-xs text-white/95 backdrop-blur-sm">
            <div className="flex items-center justify-between">
              <span>Throughput</span>
              <span className="font-semibold">+38%</span>
            </div>
            <div className="mt-2 h-1.5 rounded-full bg-white/10">
              <div className="h-full w-[68%] rounded-full bg-white" />
            </div>
          </div>
        </ProjectCover>
        <CardContent className="flex flex-1 flex-col gap-3 p-6">
          <h3 className="text-xl font-semibold text-tellz-text light:text-slate-900">
            {project.title}
          </h3>
          <p className="text-sm leading-relaxed text-tellz-muted light:text-slate-600">
            {project.description}
          </p>
          <div className="mt-auto flex flex-wrap gap-2 pt-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="rounded-lg border border-white/10 bg-white/[0.03] px-2 py-1 text-[11px] font-medium text-tellz-muted light:border-slate-200 light:bg-slate-50 light:text-slate-600"
              >
                {t}
              </span>
            ))}
          </div>
        </CardContent>
        {footer ? (
          <CardFooter className="border-t border-white/10 bg-transparent p-0 text-foreground hover:bg-white/[0.05] light:border-slate-200 light:hover:bg-slate-50">
            {footer}
          </CardFooter>
        ) : null}
      </Card>
    </motion.div>
  )
}
