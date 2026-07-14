"use client";

import { motion } from "framer-motion";

import { GradientBackground } from "@/components/GradientBackground";
import { SectionNav } from "@/components/SectionNav";
import { ExperienceTimeline } from "@/components/templates/ExperienceTimeline";
import { ProjectGrid } from "@/components/templates/ProjectGrid";
import { SkillsSection } from "@/components/templates/SkillsSection";

export default function ExperiencePage() {
  return (
    <section className="relative isolate min-h-screen px-6 pt-28 pb-20 lg:px-8">
      <GradientBackground />

      <div className="mx-auto max-w-5xl">
        {/* Page header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-10"
        >
          <h1 className="text-3xl font-bold text-foreground sm:text-4xl">
            My Work
          </h1>
          <p className="mt-2 text-muted-foreground">
            Projects, experience, and the tools I use daily.
          </p>
        </motion.div>

        {/* Sticky section nav */}
        <SectionNav />

        {/* Projects Section */}
        <div id="projects" className="scroll-mt-40 mb-24">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <ProjectGrid />
          </motion.div>
        </div>

        {/* Experience Section */}
        <div id="experience" className="scroll-mt-40 mb-24">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-teal-600 dark:text-teal-400">
                Experience
              </h2>
              <div className="flex-1 h-px bg-gradient-to-r from-teal-500/30 to-transparent" />
            </div>
            <ExperienceTimeline />
          </motion.div>
        </div>

        {/* Skills Section */}
        <div id="skills" className="scroll-mt-40">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-teal-600 dark:text-teal-400">
                Skills & Tools
              </h2>
              <div className="flex-1 h-px bg-gradient-to-r from-teal-500/30 to-transparent" />
            </div>
            <SkillsSection />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
