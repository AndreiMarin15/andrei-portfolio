export function GradientBackground() {
  return (
    <>
      {/* Dot grid */}
      <div className="dot-grid fixed inset-0 -z-20 overflow-hidden" aria-hidden="true" />

      {/* Top-left gradient orb */}
      <div
        className="pointer-events-none absolute -top-48 -left-24 -z-10 transform-gpu blur-[100px] max-w-full overflow-hidden"
        aria-hidden="true"
      >
        <div className="aspect-square w-[40rem] max-w-[100vw] rounded-full bg-gradient-to-br from-teal-500/20 via-cyan-400/10 to-transparent dark:from-teal-500/15 dark:via-cyan-400/5" />
      </div>

      {/* Bottom-right gradient orb */}
      <div
        className="pointer-events-none absolute -bottom-48 -right-24 -z-10 transform-gpu blur-[100px] max-w-full overflow-hidden"
        aria-hidden="true"
      >
        <div className="aspect-square w-[35rem] max-w-[100vw] rounded-full bg-gradient-to-tl from-teal-400/15 via-emerald-300/10 to-transparent dark:from-teal-500/10 dark:via-emerald-400/5" />
      </div>
    </>
  );
}
