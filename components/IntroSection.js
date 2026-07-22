export default function IntroSection() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <div className="max-w-lg">
        <p className="mb-2 text-xs text-accent select-none">{">"} cat intro.txt</p>
        <h2 className="mb-6 text-xl font-bold tracking-wider md:text-2xl">ABOUT_ME</h2>
        <p className="text-sm leading-relaxed text-foreground/80 md:text-base">
          Hey, I&apos;m Aditya. I build things, break things, and explore tech.
          <span className="block mt-3 text-muted">
            Type-safe, terminal-driven, and always curious.
          </span>
        </p>
        <div className="mt-8 border border-accent/20 bg-accent/5 p-4 text-left text-xs text-muted">
          <p>
            <span className="text-accent">$</span> ./aditya --version
            <br />
            <span className="text-foreground/60">&gt; v1.0.0 — work in progress</span>
          </p>
        </div>
      </div>
    </section>
  );
}
