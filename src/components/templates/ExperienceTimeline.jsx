"use client";

import { motion } from "framer-motion";
import { experiences } from "@/lib/data";

const typeConfig = {
  work: { color: "bg-teal-500", ring: "ring-teal-500/20", label: "Work" },
  education: { color: "bg-blue-500", ring: "ring-blue-500/20", label: "Education" },
  leadership: { color: "bg-violet-500", ring: "ring-violet-500/20", label: "Leadership" },
  achievement: { color: "bg-amber-500", ring: "ring-amber-500/20", label: "Achievement" },
};

export function ExperienceTimeline() {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="relative">
        {/* Animated vertical line */}
        <motion.div
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="absolute left-[7px] top-3 bottom-3 w-px bg-gradient-to-b from-teal-500/50 via-border to-border origin-top"
        />

        <ul className="space-y-0">
          {experiences.map((exp, index) => (
            <motion.li
              key={`${exp.company}-${exp.position}`}
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
              className="relative pl-9 py-4 group"
            >
              {/* Dot with ring */}
              <span
                className={`absolute left-[2px] top-[1.4rem] h-[11px] w-[11px] rounded-full ${typeConfig[exp.type].color} ${typeConfig[exp.type].ring} ring-4 ring-offset-1 ring-offset-background shadow-sm`}
              />

              <div className="rounded-lg px-4 py-3 -mx-4 hover:bg-secondary/50 transition-colors duration-200">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1">
                  <div>
                    <h3 className="text-sm font-semibold text-foreground group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                      {exp.company}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-0.5">
                      {exp.position}
                    </p>
                  </div>
                  <span className="text-xs text-muted-foreground font-mono shrink-0 mt-0.5 sm:mt-0">
                    {exp.date}
                  </span>
                </div>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>

      {/* Legend */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.4 }}
        className="mt-10 flex flex-wrap items-center justify-center gap-4 text-xs text-muted-foreground"
      >
        {Object.entries(typeConfig).map(([key, config]) => (
          <span key={key} className="flex items-center gap-1.5">
            <span className={`h-2.5 w-2.5 rounded-full ${config.color} shadow-sm`} />
            {config.label}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
