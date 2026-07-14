import Link from "next/link";

export default function NotFound() {
  return (
    <section className="relative isolate min-h-screen flex items-center justify-center px-6 pt-20 lg:px-8">
      <div className="text-center max-w-md">
        <p className="text-7xl sm:text-9xl font-bold bg-gradient-to-r from-teal-500 to-cyan-500 bg-clip-text text-transparent">
          404
        </p>
        <h1 className="mt-4 text-2xl font-bold text-foreground sm:text-3xl">
          Page not found
        </h1>
        <p className="mt-3 text-muted-foreground">
          Looks like this route doesn&apos;t exist. Maybe it was moved, or maybe
          you just typed something creative into the URL bar.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full bg-teal-500 px-5 py-2.5 text-sm font-medium text-white shadow-md shadow-teal-500/20 hover:bg-teal-600 transition-all"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            Back home
          </Link>
          <Link
            href="/experience"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-5 py-2.5 text-sm font-medium text-foreground hover:bg-secondary transition-all"
          >
            View my work
          </Link>
        </div>
      </div>
    </section>
  );
}
