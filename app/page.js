"use client";

import NagiSVG from "../components/NagiSVG";
import IntroSection from "../components/IntroSection";
import SocialLinks from "../components/SocialLinks";
import { useEffect, useState } from "react";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const opacity = Math.max(0, 1 - scrollY / 500);
  const scale = 1 - scrollY * 0.0004;

  return (
    <main className="relative z-10 min-h-screen">
      {/* HUD side labels */}
      <div className="pointer-events-none fixed left-6 top-1/2 z-40 hidden -translate-y-1/2 text-xs text-muted md:left-10 md:block select-none">
        ~/portfolio
      </div>
      <div className="pointer-events-none fixed right-4 top-1/2 z-40 hidden -translate-y-1/2 text-right text-xs text-muted md:right-10 md:block select-none">
        /bin/sh
      </div>

      {/* Hero section */}
      <section
        className="relative flex min-h-screen flex-col items-center justify-center"
        style={{ opacity, transform: `scale(${scale})` }}
      >
        {/* Name */}
        <h1 className="text-3xl font-bold tracking-widest text-accent md:text-5xl select-none">
          ADITYA
        </h1>
        <p className="mt-2 text-xs text-muted md:text-sm select-none">
          {">"} system.identity — whoami
        </p>

        {/* Nagi SVG */}
        <div className="mt-8">
          <NagiSVG />
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <svg
            className="h-6 w-6 text-muted"
            style={{ animation: "bounce-down 2s infinite" }}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Intro section */}
      <IntroSection />

      {/* Social links */}
      <SocialLinks />
    </main>
  );
}
