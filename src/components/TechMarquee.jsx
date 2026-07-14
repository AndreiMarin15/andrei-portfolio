"use client";

import { Marquee } from "@/components/Marquee";

const techStack = [
  "Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js",
  "Swift", "Kotlin", "PostgreSQL", "Supabase", "Go",
  "Docker", "Vercel", "Firebase", "MongoDB", "Flutter",
  "Framer Motion", "shadcn/ui", "Prisma", "Redis", "AWS",
];

export function TechMarquee() {
  return (
    <div className="relative w-full overflow-hidden py-6 border-y border-border/40">
      {/* Fade edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />

      <Marquee className="[--duration:50s]">
        {techStack.map((tech) => (
          <span
            key={tech}
            className="mx-4 text-sm font-medium text-muted-foreground/60 hover:text-teal-500 transition-colors whitespace-nowrap select-none"
          >
            {tech}
          </span>
        ))}
      </Marquee>
    </div>
  );
}
