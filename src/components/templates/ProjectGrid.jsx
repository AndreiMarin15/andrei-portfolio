"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useCallback, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/lib/data";

function ImageLightbox({ image, title, onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`Full view of ${title}`}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

      {/* Image container */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="relative max-w-5xl w-full max-h-[85vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={image}
          alt={`Full view of ${title}`}
          width={1200}
          height={800}
          className="w-full h-auto max-h-[85vh] object-contain rounded-lg"
        />

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 sm:top-3 sm:right-3 p-2 rounded-full bg-black/50 text-white/80 hover:text-white hover:bg-black/70 transition-colors"
          aria-label="Close image preview"
        >
          <svg
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Title */}
        <p className="absolute bottom-0 inset-x-0 p-3 text-center text-sm text-white/70 bg-gradient-to-t from-black/60 to-transparent rounded-b-lg">
          {title}
        </p>
      </motion.div>
    </motion.div>
  );
}

function ProjectCard({ project, index, onImageClick }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const isLong = project.description.length > 180;

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
      className="group relative rounded-2xl border border-border/50 bg-card/40 backdrop-blur-sm overflow-hidden hover:border-teal-500/40 hover:shadow-lg hover:shadow-teal-500/5 transition-all duration-300"
    >
      {/* Image */}
      {project.image && (
        <div
          className="relative aspect-video overflow-hidden cursor-pointer"
          onClick={() => onImageClick(project)}
        >
          <Image
            src={project.image}
            alt={`Screenshot of ${project.title}`}
            fill
            className="object-cover transition-all duration-500 group-hover:scale-[1.03] group-hover:brightness-110"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent opacity-70" />

          {/* Click-to-expand hint */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="flex items-center gap-1.5 rounded-full bg-black/60 px-3 py-1.5 text-xs text-white/90 backdrop-blur-sm ring-1 ring-white/10">
              <svg
                className="h-3.5 w-3.5"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9m11.25-5.25v4.5m0-4.5h-4.5m4.5 0L15 9m-11.25 11.25v-4.5m0 4.5h4.5m-4.5 0L9 15m11.25 5.25v-4.5m0 4.5h-4.5m4.5 0L15 15"
                />
              </svg>
              Expand
            </span>
          </div>
        </div>
      )}

      {/* Content */}
      <div className="p-5">
        <div className="flex items-start justify-between gap-3 mb-2">
          <h3 className="text-base font-semibold text-foreground group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
            {project.title}
          </h3>
          <span className="shrink-0 text-[11px] text-muted-foreground font-mono bg-secondary/50 px-2 py-0.5 rounded-full">
            {project.year}
          </span>
        </div>

        <p
          className={`text-sm text-muted-foreground leading-relaxed mb-1 ${
            !isExpanded && isLong ? "line-clamp-3" : ""
          }`}
        >
          {project.description}
        </p>
        {isLong && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-xs text-teal-500 hover:text-teal-400 font-medium transition-colors mb-3"
          >
            {isExpanded ? "← Show less" : "Read more →"}
          </button>
        )}
        {!isLong && <div className="mb-3" />}

        <p className="text-xs text-teal-600/70 dark:text-teal-400/70 font-medium mb-3">
          {project.role}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.technologies.map((tech) => (
            <Badge
              key={tech}
              variant="secondary"
              className="text-[11px] bg-teal-500/8 text-teal-700 dark:text-teal-300 border border-teal-500/15 hover:bg-teal-500/15 transition-colors"
            >
              {tech}
            </Badge>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-4 pt-3 border-t border-border/40">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
              aria-label={`View ${project.title} source code on GitHub`}
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              Source
            </a>
          )}
          {project.deployment && (
            <a
              href={project.deployment}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
              aria-label={`Visit ${project.title} live site`}
            >
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                />
              </svg>
              Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export function ProjectGrid() {
  const [lightboxProject, setLightboxProject] = useState(null);
  const featured = projects.filter((p) => p.featured);
  const other = projects.filter((p) => !p.featured);

  const handleImageClick = useCallback((project) => {
    setLightboxProject(project);
  }, []);

  const handleCloseLightbox = useCallback(() => {
    setLightboxProject(null);
  }, []);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setLightboxProject(null);
      }
    };

    if (lightboxProject) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [lightboxProject]);

  return (
    <div>
      {/* Lightbox */}
      <AnimatePresence>
        {lightboxProject && (
          <ImageLightbox
            image={lightboxProject.image}
            title={lightboxProject.title}
            onClose={handleCloseLightbox}
          />
        )}
      </AnimatePresence>

      {/* Featured Projects */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-teal-600 dark:text-teal-400">
            Featured
          </h2>
          <div className="flex-1 h-px bg-gradient-to-r from-teal-500/30 to-transparent" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {featured.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
              onImageClick={handleImageClick}
            />
          ))}
        </div>
      </div>

      {/* Other Projects */}
      <div>
        <div className="flex items-center gap-3 mb-6">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            Archive
          </h2>
          <div className="flex-1 h-px bg-border/60" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {other.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index + featured.length}
              onImageClick={handleImageClick}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
