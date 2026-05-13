import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

import { ProjectCard } from "@/components/shared/ProjectCard";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/projects";

const featured = projects.slice(0, 3);

export function FeaturedProjects() {
  return (
    <section
      id="projects"
      className="border-b border-white/10 bg-tellz-surface/35 py-20 md:py-28 light:border-slate-200 light:bg-slate-100"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Selected work"
          title="Interfaces and systems built for serious operators"
          description="A glimpse into how we combine narrative, performance, and reliability without the agency template feel."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((project, i) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={i}
              footer={
                <Link
                  to="/contact"
                  className="group/btn flex h-12 w-full items-center justify-between px-6 text-sm font-semibold transition-colors"
                >
                  Start your project
                  <ArrowUpRight className="transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                </Link>
              }
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <Button asChild variant="secondary" className="rounded-xl px-6">
            <Link to="/projects">View all projects</Link>
          </Button>
          <Button
            asChild
            className="rounded-xl px-6 shadow-md shadow-tellz-accent/20 light:shadow-sm light:shadow-slate-300/50"
          >
            <Link to="/contact" className="gap-2">
              Book a call
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
