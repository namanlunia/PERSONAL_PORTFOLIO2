import React from 'react';
import Link from 'next/link';
import { projectsData } from '@/content/projects';
import { SectionTitle } from '@/components/hud/SectionTitle';
import { StatusTag, ToolTag } from '@/components/ui/Tag';
import { Divider } from '@/components/ui/Divider';
import { GarmentSprite } from '@/components/pixel/Garment';
import { TrophySprite } from '@/components/pixel/Trophy';
import { PlantSprite } from '@/components/pixel/Plant';

export function Projects() {
  const renderSprite = (spriteType: 'garment' | 'trophy' | 'plant') => {
    switch (spriteType) {
      case 'garment':
        return <GarmentSprite className="w-10 h-10 md:w-12 md:h-12" />;
      case 'trophy':
        return <TrophySprite className="w-10 h-10 md:w-12 md:h-12" />;
      case 'plant':
        return <PlantSprite className="w-10 h-10 md:w-12 md:h-12" />;
    }
  };

  return (
    <section
      id="projects"
      aria-label="03 / Projects"
      className="py-16 md:py-24 px-4 md:px-6 max-w-[1120px] mx-auto w-full"
    >
      <SectionTitle number="03" title="Projects" />

      <p className="font-body text-base text-muted max-w-2xl mb-8 leading-relaxed">
        Active development log and hardware prototypes. Built with AI-assisted workflows, real telemetry, and rapid iterations.
      </p>

      {/* Full-width ruled rows (table-like list, never cards or bento grid) */}
      <div className="border-t border-line divide-y divide-line mb-12">
        {projectsData.map((project) => (
          <div
            key={project.slug}
            className="py-6 transition-none group hover:bg-surface/40"
          >
            {/* Header row */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-3">
              <div className="flex items-center gap-4">
                <span className="font-heading text-xs font-semibold text-muted uppercase tracking-wider w-8 shrink-0">
                  {project.index} {'//'}
                </span>
                <div className="shrink-0 p-1 bg-surface-2 border border-line" aria-hidden="true">
                  {renderSprite(project.spriteType)}
                </div>
                <div>
                  <Link
                    href={`/projects/${project.slug}`}
                    className="font-heading text-lg md:text-xl font-semibold text-text uppercase tracking-wide hover:text-accent underline underline-offset-4 transition-none focus-visible:outline-2 focus-visible:outline-accent"
                  >
                    {project.title}
                  </Link>
                </div>
              </div>

              <div className="flex items-center gap-3 pl-12 sm:pl-0">
                <StatusTag status={project.status} variant={project.statusVariant} />
              </div>
            </div>

            {/* Native details expander */}
            <details className="mt-3 pl-12">
              <summary className="font-heading text-xs font-semibold uppercase tracking-wider text-muted hover:text-accent cursor-pointer select-none py-1.5 focus-visible:outline-2 focus-visible:outline-accent list-none inline-flex items-center gap-2">
                <span className="text-accent" aria-hidden="true">[+]</span>
                <span>TELEMETRY & BRIEF</span>
              </summary>

              <div className="mt-4 p-4 md:p-6 bg-surface border border-line space-y-4">
                <div>
                  <h4 className="font-heading text-xs font-semibold uppercase tracking-wider text-muted mb-1">
                    OVERVIEW:
                  </h4>
                  <p className="font-body text-sm text-text leading-relaxed">
                    {project.overview}
                  </p>
                </div>

                <div>
                  <h4 className="font-heading text-xs font-semibold uppercase tracking-wider text-muted mb-1">
                    PRIMARY GOAL:
                  </h4>
                  <p className="font-body text-sm text-text leading-relaxed">
                    {project.goal}
                  </p>
                </div>

                <div>
                  <h4 className="font-heading text-xs font-semibold uppercase tracking-wider text-muted mb-2">
                    EQUIPPED TOOLS:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool) => (
                      <ToolTag key={tool} name={tool} />
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-heading text-xs font-semibold uppercase tracking-wider text-muted mb-1">
                    NEXT STEP:
                  </h4>
                  <p className="font-body text-sm text-text leading-relaxed">
                    {project.nextStep}
                  </p>
                </div>

                <div className="pt-2 border-t border-line flex flex-wrap gap-4 items-center">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="font-heading text-xs font-semibold uppercase tracking-wider text-accent hover:underline min-h-[44px] inline-flex items-center focus-visible:outline-2 focus-visible:outline-accent"
                  >
                    [OPEN QUEST FILE →]
                  </Link>

                  {project.links.map((link, idx) => (
                    <a
                      key={idx}
                      href={link.url}
                      className="font-heading text-xs font-semibold uppercase tracking-wider text-muted hover:text-text underline min-h-[44px] inline-flex items-center focus-visible:outline-2 focus-visible:outline-accent"
                      {...(link.isPlaceholder ? {} : { target: '_blank', rel: 'noopener noreferrer' })}
                    >
                      {link.label} {link.isPlaceholder && '(PENDING LINK)'}
                    </a>
                  ))}
                </div>
              </div>
            </details>
          </div>
        ))}
      </div>

      <Divider />
    </section>
  );
}
