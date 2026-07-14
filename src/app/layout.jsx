import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "./navbar";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import { SpotlightCursor } from "@/components/SpotlightCursor";
import { Footer } from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata = {
  title: {
    default: "Andrei Marin — Fullstack Engineer",
    template: "%s | Andrei Marin",
  },
  description:
    "Fullstack Engineer specializing in Web and Mobile Development. Building impactful digital experiences with modern technologies.",
  metadataBase: new URL("https://andreimar.in"),
  openGraph: {
    title: "Andrei Marin — Fullstack Engineer",
    description:
      "Fullstack Engineer specializing in Web and Mobile Development.",
    url: "https://andreimar.in",
    siteName: "Andrei Marin",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className="overflow-x-hidden">
      <head>
        <link
          rel="preconnect"
          href="https://skillicons.dev"
          crossOrigin="anonymous"
        />
        <link rel="dns-prefetch" href="https://skillicons.dev" />
      </head>
      <body className={`${inter.variable} font-sans`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <SpotlightCursor />
          <BackToTop />
          <div className="relative min-h-screen flex flex-col overflow-x-hidden">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <Toaster />
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
