"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Discover",
    description: "Understand the problem, users, and constraints. Research before writing a single line of code.",
    icon: "M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z",
  },
  {
    number: "02",
    title: "Design",
    description: "Architect the solution. Data models, APIs, wireframes — plan the system before building it.",
    icon: "M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42",
  },
  {
    number: "03",
    title: "Build",
    description: "Ship iteratively. Clean code, proper testing, CI/CD — production-ready from day one.",
    icon: "M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5",
  },
  {
    number: "04",
    title: "Iterate",
    description: "Measure, learn, improve. Monitor performance, gather feedback, and ship updates fast.",
    icon: "M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99",
  },
];

export function ProcessSection() {
  return (
    <section className="relative px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-sm font-semibold uppercase tracking-wider text-teal-600 dark:text-teal-400 mb-2">
            Process
          </h2>
          <p className="text-2xl font-bold text-foreground sm:text-3xl">
            How I work
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="relative group rounded-2xl border border-border/40 bg-card/30 backdrop-blur-sm p-5 hover:border-teal-500/30 hover:bg-card/50 transition-all duration-300"
            >
              {/* Step number */}
              <span className="text-[10px] font-bold uppercase tracking-widest text-teal-500/60 mb-3 block">
                Step {step.number}
              </span>

              {/* Icon */}
              <div className="mb-3 inline-flex rounded-lg bg-teal-500/10 p-2 text-teal-600 dark:text-teal-400 group-hover:bg-teal-500/15 transition-colors">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d={step.icon} />
                </svg>
              </div>

              {/* Content */}
              <h3 className="text-sm font-semibold text-foreground mb-1.5">
                {step.title}
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {step.description}
              </p>

              {/* Connector line (hidden on last item and mobile) */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-2 w-4 border-t border-dashed border-border/60" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
