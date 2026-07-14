"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "@/components/ThemeToggle";

const navigation = [
  { name: "About", href: "/" },
  { name: "Work", href: "/experience" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileOpen(false);
  }, [pathname]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-5xl px-3 sm:px-6 pt-3 sm:pt-4 lg:px-8">
        <nav
          className="flex items-center justify-between rounded-2xl border border-border/60 bg-background/70 backdrop-blur-xl px-3 sm:px-5 py-2 sm:py-2.5 shadow-sm min-w-0"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <Link href="/" className="group flex items-center gap-2 shrink-0">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-teal-500/10 text-xs font-bold text-teal-500 ring-1 ring-teal-500/20 group-hover:bg-teal-500/20 group-hover:ring-teal-500/40 transition-all">
              A
            </span>
            <span className="hidden sm:block text-sm font-semibold text-foreground">
              Andrei Marin
            </span>
          </Link>

          {/* Desktop nav */}
          <ul className="hidden sm:flex items-center gap-x-1">
            {navigation.map((item) => {
              const isActive = pathname === item.href;

              return (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className={cn(
                      "relative px-3.5 py-1.5 text-sm font-medium rounded-full transition-colors duration-200",
                      isActive
                        ? "text-teal-600 dark:text-teal-400"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 rounded-full bg-teal-500/10 ring-1 ring-teal-500/20"
                        transition={{ type: "spring", stiffness: 400, damping: 28 }}
                      />
                    )}
                    <span className="relative">{item.name}</span>
                  </Link>
                </li>
              );
            })}
            <li className="ml-2 pl-2 border-l border-border/60">
              <ThemeToggle />
            </li>
          </ul>

          {/* Mobile: theme toggle + hamburger */}
          <div className="flex sm:hidden items-center gap-1.5 shrink-0">
            <ThemeToggle />
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="flex h-8 w-8 items-center justify-center rounded-full text-muted-foreground hover:text-foreground hover:bg-secondary/80 transition-colors"
              aria-label="Toggle menu"
              aria-expanded={isMobileOpen}
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                {isMobileOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
                )}
              </svg>
            </button>
          </div>
        </nav>

        {/* Mobile dropdown */}
        <AnimatePresence>
          {isMobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.95 }}
              transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="mt-2 rounded-2xl border border-border/60 bg-background/90 backdrop-blur-xl p-3 shadow-lg sm:hidden"
            >
              <ul className="space-y-1">
                {navigation.map((item) => {
                  const isActive = pathname === item.href;

                  return (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        onClick={() => setIsMobileOpen(false)}
                        className={cn(
                          "block rounded-xl px-4 py-2.5 text-sm font-medium transition-colors",
                          isActive
                            ? "bg-teal-500/10 text-teal-600 dark:text-teal-400"
                            : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                        )}
                      >
                        {item.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}

export default Navbar;
