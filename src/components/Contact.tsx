import { ArrowUpRight } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="px-6 py-24 border-t border-border scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-xl">
          <p className="text-xs uppercase tracking-[0.2em] text-muted mb-4 font-medium">
            Contact
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-4">
            Let's work together.
          </h2>
          <p className="text-base text-muted leading-relaxed mb-10">
            Have a project, idea, or opportunity? Get in touch.
          </p>

          <div className="flex flex-col gap-4">
            <a
              href="mailto:hello@germaindjameh.com"
              className="inline-flex items-center gap-3 text-base text-charcoal hover:opacity-70 transition-opacity group"
            >
              <span className="w-8 h-px bg-border"></span>
              <span>djamehg@gmail.com</span>
              <span>+233-555-493-479</span>
              <ArrowUpRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
