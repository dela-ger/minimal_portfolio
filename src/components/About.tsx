export default function About() {
  return (
    <section id="about" className="px-6 py-24 border-t border-border scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          {/* Left */}
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-muted mb-4 font-medium">
              About
            </p>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-8">
              Germain Kobby<br />Djameh
            </h2>
          </div>

          {/* Right */}
          <div className="flex flex-col gap-6">
            <p className="text-base text-charcoal/80 leading-relaxed">
              I'm a web developer and full-stack engineer focused on building useful digital products, web applications and modern websites.
            </p>
            <p className="text-base text-charcoal/80 leading-relaxed">
              My work spans from building complete web applications to developing professional websites for businesses and organizations. I focus on clean code, modern design, and delivering functional digital solutions.
            </p>

            {/* Education */}
            <div className="mt-6 pt-6 border-t border-border">
              <p className="text-xs uppercase tracking-[0.15em] text-muted mb-3 font-medium">
                Education
              </p>
              <p className="text-base font-medium">MSc. IT for Business</p>
              <p className="text-sm text-muted">University of Ghana</p>
              <p className="text-xs text-muted mt-1">Currently pursuing</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
