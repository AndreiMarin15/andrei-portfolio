"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { skills } from "@/lib/data";

const SKILL_ICON_BASE = "https://skillicons.dev/icons?i=";

const categories = [
  { key: "languages", label: "Languages", description: "Core programming languages I work with" },
  { key: "frameworks", label: "Frameworks & Runtime", description: "Tools I use to build and ship products" },
  { key: "design", label: "Design & API", description: "Design tools and API development" },
  { key: "databases", label: "Databases", description: "Data persistence and management" },
  { key: "devTools", label: "Dev Tools", description: "Daily workflow and infrastructure" },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.02 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 12, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
  },
};

function SkillIcon({ name }) {
  return (
    <motion.div variants={itemVariants} className="group/icon">
      <div className="flex flex-col items-center gap-2">
        <div className="rounded-xl bg-card border border-border/60 p-2.5 group-hover/icon:border-teal-500/40 group-hover/icon:bg-teal-500/5 group-hover/icon:shadow-md group-hover/icon:shadow-teal-500/5 group-hover/icon:-translate-y-0.5 transition-all duration-200">
          <Image
            src={`${SKILL_ICON_BASE}${name.toLowerCase()}`}
            alt={name}
            width={40}
            height={40}
            className="h-10 w-10"
          />
        </div>
        <span className="text-[11px] font-medium text-muted-foreground group-hover/icon:text-teal-600 dark:group-hover/icon:text-teal-400 transition-colors capitalize">
          {name}
        </span>
      </div>
    </motion.div>
  );
}

export function SkillsSection() {
  return (
    <div className="max-w-3xl mx-auto space-y-12">
      {categories.map((category, catIndex) => (
        <motion.div
          key={category.key}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: catIndex * 0.1 }}
        >
          <div className="mb-5">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-teal-600 dark:text-teal-400">
              {category.label}
            </h3>
            <p className="text-xs text-muted-foreground mt-0.5">
              {category.description}
            </p>
          </div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap gap-4"
          >
            {skills[category.key].map((skill) => (
              <SkillIcon key={skill} name={skill} />
            ))}
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}
