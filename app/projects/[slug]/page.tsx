import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { projectsData } from '@/content/projects';
import { Panel } from '@/components/ui/Panel';
import { StatusTag, ToolTag } from '@/components/ui/Tag';
import { GarmentSprite } from '@/components/pixel/Garment';
import { TrophySprite } from '@/components/pixel/Trophy';
import { PlantSprite } from '@/components/pixel/Plant';
import { Divider } from '@/components/ui/Divider';

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: 'Project Not Found // Naman Lunia',
    };
  }

  return {
    title: `${project.title} // Project File // Naman Lunia`,
    description: project.overview,
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const currentIndex = projectsData.findIndex((p) => p.slug === slug);

  if (currentIndex === -1) {
    notFound();
  }

  const project = projectsData[currentIndex];
  const prevProject = currentIndex > 0 ? projectsData[currentIndex - 1] : null;
  const nextProject =
    currentIndex < projectsData.length - 1 ? projectsData[currentIndex + 1] : null;

  const renderSprite = (spriteType: 'garment' | 'trophy' | 'plant') => {
    switch (spriteType) {
      case 'garment':
        return <GarmentSprite className="w-16 h-16 md:w-20 md:h-20" />;
      case 'trophy':
        return <TrophySprite className="w-16 h-16 md:w-20 md:h-20" />;
      case 'plant':
        return <PlantSprite className="w-16 h-16 md:w-20 md:h-20" />;
    }
  };

  return (
    <article className="py-12 md:py-20 px-4 md:px-6 max-w-[1120px] mx-auto w-full">
      {/* Return link */}
      <div className="mb-8">
        <Link
          href="/#projects"
          className="font-heading text-xs font-semibold uppercase tracking-wider text-muted hover:text-accent underline transition-none inline-flex items-center gap-2 min-h-[44px] focus-visible:outline-2 focus-visible:outline-accent"
        >
          [← RETURN TO QUEST LOG]
        </Link>
      </div>

      {/* Project Header Banner */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-line mb-8">
        <div className="flex items-start gap-4">
          <div className="p-2 bg-surface-2 border border-line shrink-0" aria-hidden="true">
            {renderSprite(project.spriteType)}
          </div>
          <div>
            <div className="font-heading text-xs font-semibold uppercase tracking-wider text-muted mb-1">
              QUEST {project.index} {'//'} FILE ARCHIVE
            </div>
            <h1 className="font-heading text-2xl md:text-4xl font-semibold uppercase tracking-wide text-text">
              {project.title}
            </h1>
          </div>
        </div>

        <div className="shrink-0">
          <StatusTag status={project.status} variant={project.statusVariant} />
        </div>
      </div>

      {/* Detail Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
        {/* Main Content */}
        <div className="lg:col-span-8 space-y-8">
          <Panel variant="surface">
            <h2 className="font-heading text-xs font-semibold uppercase tracking-wider text-muted mb-3 pb-2 border-b border-line">
              EXECUTIVE BRIEF {'//'} OVERVIEW
            </h2>
            <p className="font-body text-base md:text-lg text-text leading-relaxed">
              {project.overview}
            </p>
          </Panel>

          <Panel variant="surface">
            <h2 className="font-heading text-xs font-semibold uppercase tracking-wider text-muted mb-3 pb-2 border-b border-line">
              PRIMARY OBJECTIVE {'//'} GOAL
            </h2>
            <p className="font-body text-base text-text leading-relaxed">
              {project.goal}
            </p>
          </Panel>

          <Panel variant="surface">
            <h2 className="font-heading text-xs font-semibold uppercase tracking-wider text-muted mb-3 pb-2 border-b border-line">
              NEXT OPERATIONAL PHASE
            </h2>
            <p className="font-body text-base text-text leading-relaxed">
              {project.nextStep}
            </p>
          </Panel>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-4 space-y-6">
          <Panel variant="surface-2">
            <h2 className="font-heading text-xs font-semibold uppercase tracking-wider text-muted mb-4 pb-2 border-b border-line">
              SYSTEM TOOLS {'//'} STACK
            </h2>
            <div className="flex flex-wrap gap-2">
              {project.tools.map((tool) => (
                <ToolTag key={tool} name={tool} />
              ))}
            </div>
          </Panel>

          <Panel variant="surface-2">
            <h2 className="font-heading text-xs font-semibold uppercase tracking-wider text-muted mb-4 pb-2 border-b border-line">
              LINK DIRECTORY
            </h2>
            <div className="space-y-3">
              {project.links.map((link, idx) => (
                <div key={idx} className="flex flex-col">
                  <span className="font-heading text-xs text-muted uppercase">
                    {link.label}:
                  </span>
                  <a
                    href={link.url}
                    className="font-heading text-sm font-semibold text-accent underline tracking-wide min-h-[44px] inline-flex items-center focus-visible:outline-2 focus-visible:outline-accent"
                    {...(link.isPlaceholder ? {} : { target: '_blank', rel: 'noopener noreferrer' })}
                  >
                    {link.label} {link.isPlaceholder && '(PENDING LINK)'}
                  </a>
                </div>
              ))}
            </div>
          </Panel>
        </div>
      </div>

      <Divider />

      {/* Prev / Next Quest Navigation */}
      <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-line font-heading text-xs uppercase tracking-wider">
        <div>
          {prevProject ? (
            <Link
              href={`/projects/${prevProject.slug}`}
              className="text-muted hover:text-accent underline transition-none inline-flex items-center gap-2 min-h-[44px] focus-visible:outline-2 focus-visible:outline-accent"
            >
              ← PREV: {prevProject.title}
            </Link>
          ) : (
            <span className="text-line">FIRST QUEST FILE</span>
          )}
        </div>

        <div>
          {nextProject ? (
            <Link
              href={`/projects/${nextProject.slug}`}
              className="text-muted hover:text-accent underline transition-none inline-flex items-center gap-2 min-h-[44px] focus-visible:outline-2 focus-visible:outline-accent"
            >
              NEXT: {nextProject.title} →
            </Link>
          ) : (
            <span className="text-line">FINAL QUEST FILE</span>
          )}
        </div>
      </div>
    </article>
  );
}
