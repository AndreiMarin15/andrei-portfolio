"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";

function AnimatedNumber({ value, suffix = "" }) {
  const [displayValue, setDisplayValue] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  useEffect(() => {
    if (inView) {
      const controls = animate(0, value, {
        duration: 1.5,
        ease: [0.22, 1, 0.36, 1],
        onUpdate: (v) => setDisplayValue(Math.round(v)),
      });
      return () => controls.stop();
    }
  }, [inView, value]);

  return (
    <span ref={ref} className="tabular-nums">
      {displayValue}
      {suffix}
    </span>
  );
}

const stats = [
  { label: "Years of Experience", value: 3, suffix: "+" },
  { label: "Projects Shipped", value: 13, suffix: "+" },
  { label: "Technologies", value: 20, suffix: "+" },
  { label: "Companies", value: 4, suffix: "" },
];

export function StatsCounter() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto">
      {stats.map((stat, i) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4, delay: i * 0.1 }}
          className="text-center p-4 rounded-2xl border border-border/40 bg-card/30 backdrop-blur-sm"
        >
          <p className="text-2xl sm:text-3xl font-bold text-teal-600 dark:text-teal-400">
            <AnimatedNumber value={stat.value} suffix={stat.suffix} />
          </p>
          <p className="mt-1 text-xs text-muted-foreground">
            {stat.label}
          </p>
        </motion.div>
      ))}
    </div>
  );
}
