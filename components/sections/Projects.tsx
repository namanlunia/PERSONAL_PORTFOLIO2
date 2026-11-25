import React from 'react';
import { projectsData } from '@/content/projects';
import { SectionTitle } from '@/components/hud/SectionTitle';

export function Projects() {
  return (
    <section
      id="projects"
      aria-label="04 Projects"
      className="py-[clamp(64px,8vw,112px)] px-[clamp(32px,6vw,96px)] max-w-[1120px] mx-auto w-full"
    >
      <SectionTitle number="04" title="Projects" />

      <div className="space-y-10">
        {projectsData.map((project) => (
          <article
            key={project.slug}
            className="border border-line bg-surface p-6 md:p-8"
          >
            {/* Top Bar: Index, Title, Status */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-line mb-6">
              <div className="flex items-center gap-3">
                <span className="font-heading text-xs font-semibold text-accent tracking-wider">
                  PROJECT // {project.index}
                </span>
                <span className="px-2 py-0.5 border border-line bg-surface-2 font-heading text-[11px] font-semibold text-muted tracking-wider">
                  {project.status}
                </span>
              </div>
              <div className="flex items-center gap-3">
                {project.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-heading text-xs font-semibold text-accent hover:underline inline-flex items-center gap-1 focus-visible:outline-2 focus-visible:outline-accent"
                  >
                    {link.label} ↗
                  </a>
                ))}
              </div>
            </div>

            {/* Title */}
            <h3 className="font-heading text-2xl md:text-3xl font-semibold text-text mb-6">
              {project.title}
            </h3>

            {/* Problem Statement */}
            <div className="mb-5">
              <span className="font-heading text-xs font-semibold uppercase tracking-wider text-accent block mb-1">
                Problem
              </span>
              <p className="font-body text-sm md:text-base text-text leading-relaxed m-0">
                {project.problem}
              </p>
            </div>

            {/* Solution and architecture */}
            <div className="mb-5">
              <span className="font-heading text-xs font-semibold uppercase tracking-wider text-accent block mb-1">
                Solution and architecture
              </span>
              <p className="font-body text-sm md:text-base text-muted leading-relaxed m-0">
                {project.solution}
              </p>
            </div>

            {/* Tech Stack Chips */}
            <div className="mb-5">
              <span className="font-heading text-xs font-semibold uppercase tracking-wider text-accent block mb-2">
                Tech stack
              </span>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span
                    key={item}
                    className="px-2.5 py-1 border border-line bg-surface-2 font-heading text-xs text-text font-medium"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* My Contribution */}
            <div className="mb-5">
              <span className="font-heading text-xs font-semibold uppercase tracking-wider text-accent block mb-1">
                My contribution
              </span>
              <p className="font-body text-sm md:text-base text-text leading-relaxed m-0">
                {project.contribution}
              </p>
            </div>

            {/* Note on links if present */}
            {project.links.some((l) => l.note) && (
              <div className="mt-4 pt-3 border-t border-line text-xs font-body text-muted">
                {project.links
                  .filter((l) => l.note)
                  .map((l) => (
                    <p key={l.label} className="m-0 italic">
                      {l.note}
                    </p>
                  ))}
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
