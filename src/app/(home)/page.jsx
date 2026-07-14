"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { SocialIcon } from "react-social-icons";

import { GradientBackground } from "@/components/GradientBackground";
import { TechMarquee } from "@/components/TechMarquee";
import { BentoGrid } from "@/components/BentoGrid";
import { FeaturedPreview } from "@/components/FeaturedPreview";
import { personalInfo } from "@/lib/data";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
  }),
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.8 } },
};

const socialPop = {
  hidden: { opacity: 0, scale: 0 },
  visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 300, damping: 20 } },
};

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative isolate min-h-screen flex items-center justify-center px-6 pt-24 pb-16 lg:px-8 overflow-hidden">
        <GradientBackground />

        {/* Grain texture overlay */}
        <div
          className="pointer-events-none fixed inset-0 z-[1] opacity-[0.015] dark:opacity-[0.03]"
          aria-hidden="true"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />

        <div className="relative z-[2] mx-auto max-w-2xl w-full">
          <div className="flex flex-col items-center text-center">
            {/* Animated gradient border avatar */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="relative mb-8 group"
            >
              {/* Rotating gradient ring */}
              <div className="absolute -inset-1 rounded-full bg-[conic-gradient(from_0deg,theme(colors.teal.400),theme(colors.cyan.400),theme(colors.teal.600),theme(colors.teal.400))] opacity-40 group-hover:opacity-70 blur-sm transition-opacity duration-500 animate-[spin_6s_linear_infinite]" />
              <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden ring-2 ring-background">
                <Image
                  src={personalInfo.image}
                  width={300}
                  height={300}
                  className="object-cover w-full h-full"
                  alt="Andrei Marin — Fullstack Engineer"
                  priority
                />
              </div>
              {/* Status badge */}
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.6, type: "spring", stiffness: 400 }}
                className="absolute -bottom-1 right-0 flex items-center gap-1 rounded-full bg-background border border-border px-2.5 py-1 text-[10px] font-medium text-teal-600 dark:text-teal-400 shadow-sm"
              >
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-teal-500" />
                </span>
                Available for work
              </motion.span>
            </motion.div>

            {/* Name */}
            <motion.h1
              custom={0.25}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance"
            >
              Hey, I&apos;m{" "}
              <span className="bg-gradient-to-r from-teal-500 via-cyan-500 to-teal-400 bg-clip-text text-transparent">
                Andrei
              </span>
            </motion.h1>

            {/* Animated subtitle */}
            <motion.p
              custom={0.4}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="mt-3 text-lg sm:text-xl font-medium text-teal-600/80 dark:text-teal-400/80"
            >
              Building for web & mobile
            </motion.p>

            {/* Bio */}
            <motion.p
              custom={0.55}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg"
            >
              I craft performant, user-focused applications from concept to deployment.
              Currently a Software Engineer II at{" "}
              <a
                href="https://starpay.com.ph"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-foreground hover:text-teal-500 transition-colors underline decoration-teal-500/30 underline-offset-2 hover:decoration-teal-500/60"
              >
                Starpay Corp
              </a>
              .
            </motion.p>

            <motion.p
              custom={0.65}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="mt-3 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg"
            >
              BS Information Systems, De La Salle University.
              Passionate about shipping products that people actually use.
            </motion.p>

            {/* Social Icons */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger}
              className="mt-8 flex items-center gap-3"
            >
              {personalInfo.socials.map((social) => (
                <motion.div key={social.label} variants={socialPop}>
                  <SocialIcon
                    url={social.url}
                    aria-label={social.label}
                    target="_blank"
                    style={{ height: 36, width: 36 }}
                    bgColor="transparent"
                    fgColor="currentColor"
                    className="text-muted-foreground hover:text-teal-500 dark:hover:text-teal-400 transition-colors duration-200"
                  />
                </motion.div>
              ))}
              <motion.div variants={socialPop}>
                <SocialIcon
                  url={`mailto:${personalInfo.email}`}
                  aria-label="Email"
                  network="email"
                  style={{ height: 36, width: 36 }}
                  bgColor="transparent"
                  fgColor="currentColor"
                  className="text-muted-foreground hover:text-teal-500 dark:hover:text-teal-400 transition-colors duration-200"
                />
              </motion.div>
            </motion.div>

            {/* CTAs */}
            <motion.div
              custom={0.9}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="mt-8 flex flex-wrap items-center justify-center gap-3"
            >
              <Link
                href="/experience"
                className="group/btn inline-flex items-center gap-2 rounded-full bg-teal-500 px-6 py-2.5 text-sm font-medium text-white shadow-lg shadow-teal-500/25 hover:bg-teal-600 hover:shadow-xl hover:shadow-teal-500/30 hover:-translate-y-0.5 transition-all duration-200"
              >
                View My Work
                <svg className="h-4 w-4 group-hover/btn:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
              <a
                href="/assets/files/Andrei_Marin_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 backdrop-blur-sm px-6 py-2.5 text-sm font-medium text-foreground hover:bg-secondary hover:border-teal-500/30 hover:-translate-y-0.5 transition-all duration-200"
              >
                Resume
                <svg className="h-3.5 w-3.5 text-muted-foreground" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                </svg>
              </a>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-[2]"
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            className="flex flex-col items-center gap-1 text-muted-foreground/40"
          >
            <span className="text-[10px] uppercase tracking-[0.2em]">Scroll</span>
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
          </motion.div>
        </motion.div>
      </section>

      {/* Tech Marquee Divider */}
      <TechMarquee />

      {/* What I Do Section */}
      <section className="relative px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10"
          >
            <h2 className="text-sm font-semibold uppercase tracking-wider text-teal-600 dark:text-teal-400 mb-2">
              What I Do
            </h2>
            <p className="text-2xl font-bold text-foreground sm:text-3xl">
              End-to-end product development
            </p>
          </motion.div>

          <BentoGrid />
        </div>
      </section>

      {/* Featured Projects Preview */}
      <FeaturedPreview />
    </>
  );
}
