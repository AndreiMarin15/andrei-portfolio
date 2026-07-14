"use client";

import { cn } from "@/lib/utils";

export function Marquee({ children, className, reverse = false, pauseOnHover = true }) {
  return (
    <div
      className={cn(
        "group flex overflow-hidden [--duration:40s] [--gap:2rem]",
        className
      )}
    >
      <div
        className={cn(
          "flex shrink-0 items-center justify-around gap-[--gap] animate-marquee",
          reverse && "[animation-direction:reverse]",
          pauseOnHover && "group-hover:[animation-play-state:paused]"
        )}
      >
        {children}
      </div>
      <div
        className={cn(
          "flex shrink-0 items-center justify-around gap-[--gap] animate-marquee",
          reverse && "[animation-direction:reverse]",
          pauseOnHover && "group-hover:[animation-play-state:paused]"
        )}
        aria-hidden="true"
      >
        {children}
      </div>
    </div>
  );
}
