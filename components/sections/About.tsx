import React from 'react';
import { profileData } from '@/content/profile';
import { SectionTitle } from '@/components/hud/SectionTitle';

export function About() {
  return (
    <section
      id="about"
      aria-label="01 / About"
      className="py-[clamp(64px,8vw,112px)] px-[clamp(32px,6vw,96px)] max-w-[1120px] mx-auto w-full"
    >
      {/* Section numeral in amber with hairline divider extending right */}
      <SectionTitle number="01" />

      {/* Two columns matching Figma Image 2 */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
        {/* Left Column: Heading Statement */}
        <div className="lg:col-span-6">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-normal leading-[1.15] text-text">
            A systems-minded maker working between design decisions and production code.
          </h2>
        </div>

        {/* Right Column: Bio paragraph and tags */}
        <div className="lg:col-span-6 space-y-6">
          <p className="font-body text-base md:text-lg text-muted leading-relaxed">
            {profileData.about.bioParagraph}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2.5 pt-2">
            <span className="px-3 py-1.5 border border-line bg-surface font-heading text-xs font-semibold uppercase tracking-wider text-text">
              GAME ENGINES
            </span>
            <span className="px-3 py-1.5 border border-line bg-surface font-heading text-xs font-semibold uppercase tracking-wider text-text">
              ROBOTICS & IOT
            </span>
            <span className="px-3 py-1.5 border border-line bg-surface font-heading text-xs font-semibold uppercase tracking-wider text-text">
              AI & ML
            </span>
            <span className="px-3 py-1.5 border border-line bg-surface font-heading text-xs font-semibold uppercase tracking-wider text-text">
              PROMPT ENGINEERING
            </span>
            <span className="px-3 py-1.5 border border-line bg-surface font-heading text-xs font-semibold uppercase tracking-wider text-text">
              WEB DEV
            </span>
            {profileData.loadout.map((tool) => (
              <span
                key={tool}
                className="px-3 py-1.5 border border-line bg-surface-2 font-heading text-xs font-semibold uppercase tracking-wider text-muted"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
