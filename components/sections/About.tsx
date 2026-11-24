import React from 'react';
import { profileData } from '@/content/profile';
import { SectionTitle } from '@/components/hud/SectionTitle';
import { Panel } from '@/components/ui/Panel';
import { StatBar } from '@/components/ui/StatBar';
import { ToolTag } from '@/components/ui/Tag';
import { Divider } from '@/components/ui/Divider';

export function About() {
  return (
    <section
      id="about"
      aria-label="01 / About"
      className="py-16 md:py-24 px-4 md:px-6 max-w-[1120px] mx-auto w-full"
    >
      <SectionTitle number="01" title="About" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
        {/* Left Column: Bio & Character Stats */}
        <div className="lg:col-span-7 space-y-8">
          <div>
            <h3 className="font-heading text-xs font-semibold uppercase tracking-wider text-muted mb-3">
              CHARACTER BACKGROUND {'//'} ORIGIN
            </h3>
            <p className="font-body text-base md:text-lg text-text leading-relaxed">
              {profileData.about.bioParagraph}
            </p>
          </div>

          {/* 5 Character Stats */}
          <div className="border border-line bg-surface p-4 md:p-6">
            <h3 className="font-heading text-xs font-semibold uppercase tracking-wider text-muted mb-4 pb-2 border-b border-line">
              ATTRIBUTES {'//'} SKILL LEVELS
            </h3>

            <div className="space-y-4">
              {profileData.stats.map((stat, i) => (
                <div
                  key={i}
                  className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-line/60 last:border-none last:pb-0"
                >
                  <div>
                    <span className="font-heading text-sm font-semibold text-text uppercase tracking-wide block">
                      {stat.name}
                    </span>
                    <span className="font-body text-xs text-muted block">
                      {stat.level}
                    </span>
                  </div>
                  <StatBar level={stat.level} filled={stat.filledSegments} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Equipped Loadout Tools */}
        <div className="lg:col-span-5">
          <Panel variant="surface-2" className="h-full">
            <h3 className="font-heading text-xs font-semibold uppercase tracking-wider text-muted mb-3 border-b border-line pb-2">
              LOADOUT {'//'} EQUIPPED TOOLS
            </h3>

            <p className="font-body text-sm text-muted mb-6 leading-relaxed">
              Development environments, AI-assisted coding tools, and foundational web engineering technologies:
            </p>

            <div className="flex flex-wrap gap-2.5">
              {profileData.loadout.map((tool) => (
                <ToolTag key={tool} name={tool} />
              ))}
            </div>
          </Panel>
        </div>
      </div>

      <Divider />
    </section>
  );
}
