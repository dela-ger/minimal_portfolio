import { ArrowUpRight } from 'lucide-react';
import { currentProject, completedProjects, type Project } from '../data/projects';
import { useScrollReveal } from '../hooks/useScrollReveal';

function ProjectCard({ project, index, isReversed }: { project: Project; index: number; isReversed: boolean }) {
  const { ref, isVisible } = useScrollReveal(0.15);

  return (
    <article
      ref={ref}
      className={`group grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center py-12 lg:py-16 border-t border-border transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
    >
      {/* Image */}
      <div className={`order-1 ${isReversed ? 'lg:order-2' : ''}`}>
        <div className="relative overflow-hidden rounded-sm bg-[#e5e5e5] aspect-[4/3]">
          <img
            src={project.image}
            alt={`${project.title} project preview`}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          />
          <div className="absolute inset-0 border border-black/5 rounded-sm pointer-events-none"></div>
        </div>
      </div>

      {/* Content */}
      <div className={`order-2 ${isReversed ? 'lg:order-1' : ''} flex flex-col`}>
        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs font-mono text-[#6b6b6b]">
            {String(index).padStart(2, '0')}
          </span>
          <span className="w-8 h-px bg-[#e0e0e0]"></span>
          <span className="text-xs uppercase tracking-[0.15em] text-[#6b6b6b]">
            {project.category}
          </span>
        </div>

        <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-2 group-hover:translate-x-0.5 transition-transform duration-300">
          {project.title}
        </h3>

        {project.client && project.client !== project.title && (
          <p className="text-sm text-[#6b6b6b] mb-4">{project.client}</p>
        )}

        <p className="text-base text-[#1a1a1a]/70 leading-relaxed mb-6 max-w-md">
          {project.description}
        </p>

        {project.technologies.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="text-xs px-2.5 py-1 rounded-full border border-[#e0e0e0] text-[#6b6b6b]"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        {project.url ? (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#1a1a1a] hover:gap-3 transition-all duration-300"
          >
            View Live Project
            <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        ) : (
          <span className="inline-flex items-center gap-2 text-sm text-[#6b6b6b]">
            Coming Soon
          </span>
        )}
      </div>
    </article>
  );
}

function CurrentProjectCard({ project }: { project: Project }) {
  const { ref, isVisible } = useScrollReveal(0.15);

  return (
    <article
      ref={ref}
      className={`group grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center py-12 lg:py-16 border-t border-border transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
    >
      {/* Image */}
      <div className="order-1">
        <div className="relative overflow-hidden rounded-sm bg-[#e5e5e5] aspect-[4/3]">
          <img
            src={project.image}
            alt={`${project.title} project preview`}
            loading="lazy"
            className="w-full h-full object-cover opacity-80 transition-transform duration-500 group-hover:scale-[1.02]"
          />
          <div className="absolute inset-0 bg-[#fafafa]/10 pointer-events-none"></div>
          <div className="absolute inset-0 border border-black/5 rounded-sm pointer-events-none"></div>
        </div>
      </div>

      {/* Content */}
      <div className="order-2 flex flex-col">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs font-mono text-[#6b6b6b]">00</span>
          <span className="w-8 h-px bg-[#e0e0e0]"></span>
          <span className="text-xs uppercase tracking-[0.15em] text-[#6b6b6b]">
            {project.category}
          </span>
        </div>

        <div className="flex items-center gap-3 mb-3">
          <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight">
            {project.title}
          </h3>
        </div>

        <div className="flex items-center gap-2 mb-4">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse-dot"></span>
          <span className="text-xs uppercase tracking-[0.15em] text-emerald-700 font-medium">
            In Development
          </span>
        </div>

        {project.client && (
          <p className="text-sm text-[#6b6b6b] mb-4">{project.client}</p>
        )}

        <p className="text-base text-[#1a1a1a]/70 leading-relaxed mb-6 max-w-md">
          {project.description}
        </p>

        <span className="inline-flex items-center gap-2 text-sm text-[#6b6b6b]">
          Project in progress
        </span>
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section id="work" className="px-6 pb-24 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 pt-8">
          <p className="text-xs uppercase tracking-[0.2em] text-[#6b6b6b] mb-4 font-medium">
            Selected Work
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-4">
            Projects
          </h2>
          <p className="text-base text-[#6b6b6b] max-w-lg leading-relaxed">
            A selection of websites, applications and digital products I've built or am currently developing.
          </p>
        </div>

        {/* Currently Building */}
        <div className="mb-4">
          <p className="text-xs uppercase tracking-[0.2em] text-[#6b6b6b] font-medium">
            Currently Building
          </p>
        </div>
        <CurrentProjectCard project={currentProject} />

        {/* Completed Projects */}
        <div className="mt-16 mb-4">
          <p className="text-xs uppercase tracking-[0.2em] text-[#6b6b6b] font-medium">
            Completed Projects
          </p>
        </div>
        {completedProjects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index + 1}
            isReversed={index % 2 !== 0}
          />
        ))}
      </div>
    </section>
  );
}
