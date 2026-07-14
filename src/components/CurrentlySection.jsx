"use client";

import { motion } from "framer-motion";

const currently = [
  {
    emoji: "🏢",
    label: "Working at",
    value: "Starpay Corp",
    detail: "Software Engineer II",
  },
  {
    emoji: "🛠️",
    label: "Building",
    value: "Internal tools & fintech apps",
    detail: "Next.js + Go + PostgreSQL",
  },
  {
    emoji: "📚",
    label: "Learning",
    value: "System Design, Go & AI Integration",
    detail: "Scaling for production & AI in daily workflows",
  },
  {
    emoji: "🎯",
    label: "Open to",
    value: "Freelance & collaboration",
    detail: "Web & mobile projects",
  },
];

export function CurrentlySection() {
  return (
    <section className="relative px-6 py-16 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h2 className="text-sm font-semibold uppercase tracking-wider text-teal-600 dark:text-teal-400 mb-2">
            Right Now
          </h2>
          <p className="text-2xl font-bold text-foreground sm:text-3xl">
            What I&apos;m up to
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {currently.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group flex items-start gap-3 rounded-xl border border-border/40 bg-card/30 backdrop-blur-sm p-4 hover:border-teal-500/30 hover:bg-card/50 transition-all duration-200"
            >
              <span className="text-lg shrink-0 mt-0.5">{item.emoji}</span>
              <div className="min-w-0">
                <p className="text-[11px] uppercase tracking-wider text-muted-foreground font-medium">
                  {item.label}
                </p>
                <p className="text-sm font-semibold text-foreground mt-0.5 truncate">
                  {item.value}
                </p>
                <p className="text-xs text-muted-foreground mt-0.5">
                  {item.detail}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
