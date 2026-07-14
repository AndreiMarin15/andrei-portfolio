"use client";

import { useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect } from "react";

export function Reveal({ children, width = "fit-content", className = "" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <div ref={ref} style={{ width }} className={className}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={controls}
        transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
      >
        {children}
      </motion.div>
    </div>
  );
}
