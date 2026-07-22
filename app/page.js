import NagiSVG from "../components/NagiSVG";
import AboutSection from "../components/AboutSection";

export default function Home() {
  return (
    <>
      {/* Background element — Nagi SVG centered in viewport */}
      <div className="fixed inset-0 z-0 flex items-center justify-center pointer-events-none">
        <NagiSVG />
      </div>

      {/* HUD side labels */}
      <div className="hud-label pointer-events-none fixed left-6 top-1/2 z-40 hidden -translate-y-1/2 text-muted md:left-10 md:block">
        ~/portfolio
      </div>
      <div className="hud-label pointer-events-none fixed right-4 top-1/2 z-40 hidden -translate-y-1/2 text-right text-muted md:right-10 md:block">
        <span className="block">/bin/sh</span>
      </div>

      {/* Social links fixed bottom right */}
      <div className="fixed bottom-5 right-4 z-40 md:right-10">
        <div className="flex items-center gap-5">
          <a href="https://github.com/AdNarayan" target="_blank" rel="noreferrer" aria-label="GitHub" className="text-muted transition-colors hover:text-primary">
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-[18px] w-[18px]" aria-hidden="true">
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
            </svg>
          </a>
          <a href="https://x.com/stupiddoomlol" target="_blank" rel="noreferrer" aria-label="X" className="text-muted transition-colors hover:text-primary">
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-[18px] w-[18px]" aria-hidden="true">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
          <a href="https://instagram.com/stupiddoom" target="_blank" rel="noreferrer" aria-label="Instagram" className="text-muted transition-colors hover:text-primary">
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-[18px] w-[18px]" aria-hidden="true">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
          </a>
        </div>
      </div>

      {/* Header */}
      <header className="fixed inset-x-0 top-0 z-50">
        <nav className="flex items-center justify-between gap-3 px-4 py-4 md:px-10 md:py-5">
          <div className="flex items-center gap-4 md:gap-8">
            <a aria-label="Home" className="hud-label text-foreground transition-colors hover:text-primary" href="/">
              Aditya
            </a>
          </div>
        </nav>
      </header>

      {/* Main content */}
      <main className="relative z-10">
        {/* Hero section — full viewport with scroll nav at bottom */}
        <div className="relative flex h-dvh items-end justify-center pb-16 md:pb-10">
          <h1 className="sr-only">Aditya — portfolio</h1>
          <nav aria-label="Primary" className="hud-label flex items-center gap-3">
            <span className="flex items-center gap-3">
              <a className="text-foreground/50 transition-colors hover:text-primary" href="#about">
                ABOUT
              </a>
            </span>
            <span className="flex items-center gap-3">
              <span aria-hidden="true" className="text-foreground/35">·</span>
              <a className="text-foreground/50 transition-colors hover:text-primary" href="https://github.com/AdNarayan" target="_blank" rel="noreferrer">
                GITHUB
              </a>
            </span>
            <span className="flex items-center gap-3">
              <span aria-hidden="true" className="text-foreground/35">·</span>
              <a className="text-foreground/50 transition-colors hover:text-primary" href="mailto:stupiddoom00@gmail.com">
                CONTACT
              </a>
            </span>
          </nav>
        </div>

        {/* About section below the fold */}
        <AboutSection />
      </main>
    </>
  );
}
