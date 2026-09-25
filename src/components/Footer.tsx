export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="px-6 py-12 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          {/* Left */}
          <div>
            <p className="text-sm font-medium mb-1">Germain Kobby Djameh</p>
            <p className="text-xs text-muted">Web Developer & Full-Stack Engineer</p>
          </div>

          {/* Right - Links */}
          <div className="flex flex-wrap gap-6">
            <a href="#work" className="text-xs text-muted hover:text-charcoal transition-colors">
              Work
            </a>
            <a href="#about" className="text-xs text-muted hover:text-charcoal transition-colors">
              About
            </a>
            <a href="#contact" className="text-xs text-muted hover:text-charcoal transition-colors">
              Contact
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-6 border-t border-border">
          <p className="text-xs text-muted">
            © {currentYear} Germain Kobby Djameh
          </p>
        </div>
      </div>
    </footer>
  );
}
