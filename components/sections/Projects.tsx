import React from 'react';
import Link from 'next/link';
import { projectsData } from '@/content/projects';
import { SectionTitle } from '@/components/hud/SectionTitle';
import { ToolTag } from '@/components/ui/Tag';
import { GarmentSprite } from '@/components/pixel/Garment';
import { TrophySprite } from '@/components/pixel/Trophy';
import { PlantSprite } from '@/components/pixel/Plant';

export function Projects() {
  const renderSprite = (spriteType: 'garment' | 'trophy' | 'plant') => {
    switch (spriteType) {
      case 'garment':
        return <GarmentSprite className="w-12 h-12 md:w-14 md:h-14" />;
      case 'trophy':
        return <TrophySprite className="w-12 h-12 md:w-14 md:h-14" />;
      case 'plant':
        return <PlantSprite className="w-12 h-12 md:w-14 md:h-14" />;
    }
  };

  return (
    <section
      id="projects"
      aria-label="04 / Projects"
      className="py-16 md:py-24 px-4 md:px-6 max-w-[1120px] mx-auto w-full"
    >
      {/* Section numeral in amber with hairline divider extending right */}
      <SectionTitle number="04" />

      {/* Full-width ruled rows matching Figma Image 4 */}
      <div className="divide-y divide-line">
        {projectsData.map((project) => (
          <div
            key={project.slug}
            className="py-8 md:py-10 flex flex-col md:flex-row md:items-center justify-between gap-6"
          >
            {/* Left side: Square box with pixel sprite + Title block */}
            <div className="flex items-start gap-6">
              {/* Square container for pixel sprite matching Figma Image 4 */}
              <div
                className="w-24 h-24 sm:w-28 sm:h-28 border border-line bg-surface flex items-center justify-center shrink-0 p-3"
                aria-hidden="true"
              >
                {renderSprite(project.spriteType)}
              </div>

              {/* Text metadata */}
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <span className="font-heading text-xs font-semibold text-muted uppercase tracking-wider">
                    PROJECT / {project.index}
                  </span>
                  <span className="px-2 py-0.5 border border-line bg-surface font-heading text-[10px] font-semibold text-muted uppercase tracking-wider">
                    {project.status}
                  </span>
                </div>

                <Link
                  href={`/projects/${project.slug}`}
                  className="font-heading text-2xl sm:text-3xl font-semibold text-text uppercase tracking-wide hover:text-accent transition-none block"
                >
                  {project.title}
                </Link>

                <p className="font-body text-sm md:text-base text-muted max-w-xl leading-relaxed">
                  {project.overview}
                </p>

                {/* Collapsible Telemetry */}
                <details className="pt-1">
                  <summary className="font-heading text-xs font-semibold uppercase tracking-wider text-muted hover:text-accent cursor-pointer select-none py-1 focus-visible:outline-2 focus-visible:outline-accent list-none inline-flex items-center gap-2">
                    <span className="text-accent" aria-hidden="true">[+]</span>
                    <span>BRIEF & TELEMETRY</span>
                  </summary>
                  <div className="mt-3 p-4 bg-surface border border-line space-y-3">
                    <div>
                      <span className="font-heading text-xs font-semibold text-muted uppercase block">
                        GOAL:
                      </span>
                      <span className="font-body text-sm text-text block">
                        {project.goal}
                      </span>
                    </div>
                    <div>
                      <span className="font-heading text-xs font-semibold text-muted uppercase block mb-1">
                        TOOLS:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {project.tools.map((t) => (
                          <ToolTag key={t} name={t} />
                        ))}
                      </div>
                    </div>
                  </div>
                </details>
              </div>
            </div>

            {/* Right side: DETAILS label & OPEN PROJECT button matching Figma Image 4 */}
            <div className="flex flex-col items-start md:items-end gap-2 shrink-0 pl-32 md:pl-0">
              <span className="font-heading text-xs font-semibold tracking-wider text-muted uppercase">
                DETAILS
              </span>
              <Link
                href={`/projects/${project.slug}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-text text-bg hover:bg-accent font-heading text-xs font-semibold tracking-wider uppercase border border-text hover:border-accent min-h-[44px] transition-none focus-visible:outline-2 focus-visible:outline-accent"
              >
                <span>OPEN PROJECT</span>
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
