export default function AboutSection() {
  return (
    <section id="about" className="relative min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <div className="max-w-lg">
        <p className="mb-2 text-xs text-muted hud-label">&gt; cat about.md</p>
        <h2 className="mb-6 text-xl font-bold tracking-wider font-syne md:text-2xl">ABOUT</h2>
        <p className="text-sm leading-relaxed text-foreground/80 md:text-base">
          Hey, I&apos;m Aditya. I build things, break things, and explore tech.
          <span className="block mt-3 text-muted text-xs">
            Type-safe, terminal-driven, and always curious.
          </span>
        </p>
        <div className="mt-8 inline-block border border-primary/20 bg-primary/5 px-5 py-3 text-left text-xs text-muted">
          <p>
            <span className="text-primary">$</span> ./aditya --version
            <br />
            <span className="text-foreground/60">&gt; v1.0.0 — work in progress</span>
          </p>
        </div>
      </div>
    </section>
  );
}
