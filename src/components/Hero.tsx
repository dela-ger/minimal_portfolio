export default function Hero() {
  return (
    <section className="min-h-[85vh] flex flex-col justify-center px-6 pt-24 pb-16">
      <div className="max-w-6xl mx-auto w-full">
        <div className="animate-fade-in-up opacity-0" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
          <p className="text-xs uppercase tracking-[0.2em] text-muted mb-6 font-medium">
            Portfolio
          </p>
        </div>

        <div className="animate-fade-in-up opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.1] mb-6">
            Germain Kobby<br />Djameh
          </h1>
        </div>

        <div className="animate-fade-in-up opacity-0" style={{ animationDelay: '0.35s', animationFillMode: 'forwards' }}>
          <p className="text-lg sm:text-xl text-muted font-light mb-8 max-w-xl">
            Web Developer & Full-Stack Engineer
          </p>
        </div>

        <div className="animate-fade-in-up opacity-0" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
          <p className="text-base sm:text-lg text-charcoal/80 max-w-lg leading-relaxed mb-4">
            I design and build modern web applications, websites and digital experiences.
          </p>
          <p className="text-sm text-muted max-w-lg">
            Currently pursuing an MSc. in IT for Business at the University of Ghana.
          </p>
        </div>

        <div className="animate-fade-in-up opacity-0 mt-16" style={{ animationDelay: '0.7s', animationFillMode: 'forwards' }}>
          <a
            href="#work"
            className="inline-flex items-center gap-2 text-sm text-muted hover:text-charcoal transition-colors group"
          >
            <span className="uppercase tracking-[0.15em] text-xs font-medium">Selected Work</span>
            <span className="group-hover:translate-y-0.5 transition-transform">↓</span>
          </a>
        </div>
      </div>
    </section>
  );
}
