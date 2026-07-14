"use client";

import { useEffect } from "react";

export function SpotlightCursor() {
  useEffect(() => {
    const handleMouseMove = (e) => {
      document.documentElement.style.setProperty("--mouse-x", `${e.clientX}px`);
      document.documentElement.style.setProperty("--mouse-y", `${e.clientY}px`);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      className="spotlight pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
      aria-hidden="true"
    />
  );
}
