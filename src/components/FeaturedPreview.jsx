"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/lib/data";

export function FeaturedPreview() {
  const featured = projects.filter((p) => p.featured).slice(0, 3);

  return (
    <section className="relative px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="flex items-end justify-between mb-8"
        >
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-teal-600 dark:text-teal-400 mb-2">
              Recent Work
            </h2>
            <p className="text-2xl font-bold text-foreground sm:text-3xl">
              Featured projects
            </p>
          </div>
          <Link
            href="/experience"
            className="hidden sm:inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-teal-500 transition-colors group"
          >
            View all
            <svg
              className="h-4 w-4 group-hover:translate-x-0.5 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {featured.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group rounded-2xl border border-border/50 bg-card/40 backdrop-blur-sm overflow-hidden hover:border-teal-500/30 hover:shadow-lg hover:shadow-teal-500/5 transition-all duration-300"
            >
              {project.image && (
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={`Screenshot of ${project.title}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent opacity-60" />
                </div>
              )}
              <div className="p-4">
                <div className="flex items-center justify-between gap-2 mb-2">
                  <h3 className="text-sm font-semibold text-foreground group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors truncate">
                    {project.title}
                  </h3>
                  <span className="shrink-0 text-[10px] text-muted-foreground font-mono">
                    {project.year}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2 mb-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="text-[10px] px-1.5 py-0 bg-teal-500/8 text-teal-700 dark:text-teal-300 border border-teal-500/15"
                    >
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="text-[10px] text-muted-foreground">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile "View all" link */}
        <div className="mt-6 text-center sm:hidden">
          <Link
            href="/experience"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-teal-600 dark:text-teal-400"
          >
            View all projects
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
