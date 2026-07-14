"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const services = [
  {
    title: "Web Development",
    description: "Full-stack web apps with Next.js, React, and modern backends.",
    icon: "M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418",
    className: "md:col-span-2",
  },
  {
    title: "Mobile Apps",
    description: "Native iOS & Android with Swift, Kotlin, and Flutter.",
    icon: "M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3",
    className: "",
  },
  {
    title: "API Design",
    description: "RESTful services, real-time WebSockets, and integrations.",
    icon: "M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5",
    className: "",
  },
  {
    title: "UI/UX",
    description: "Design systems, responsive layouts, and micro-interactions.",
    icon: "M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42",
    className: "md:col-span-2",
  },
];

export function BentoGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 max-w-2xl mx-auto">
      {services.map((service, i) => (
        <motion.div
          key={service.title}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
          className={cn(
            "group rounded-2xl border border-border/50 bg-card/40 backdrop-blur-sm p-5 hover:border-teal-500/30 hover:bg-card/60 transition-all duration-300",
            service.className
          )}
        >
          <div className="flex items-start gap-3">
            <div className="shrink-0 rounded-lg bg-teal-500/10 p-2 text-teal-600 dark:text-teal-400 group-hover:bg-teal-500/15 transition-colors">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d={service.icon} />
              </svg>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-foreground">
                {service.title}
              </h3>
              <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
