import React from 'react';
import { skillsData } from '@/content/skills';
import { SectionTitle } from '@/components/hud/SectionTitle';

export function Skills() {
  return (
    <section
      id="skills"
      aria-label="02 Skills"
      className="py-[clamp(64px,8vw,112px)] px-[clamp(32px,6vw,96px)] max-w-[1120px] mx-auto w-full"
    >
      <SectionTitle number="02" title="Skills" />

      <div className="space-y-8">
        {skillsData.map((category) => (
          <div key={category.category} className="border border-line bg-surface p-6">
            <h3 className="font-heading text-xs font-semibold uppercase tracking-wider text-accent mb-4">
              {category.category}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {category.skills.map((skill) => (
                <a
                  key={skill.name}
                  href={skill.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col justify-between p-3 border border-line bg-surface-2 hover:border-accent group no-underline transition-none focus-visible:outline-2 focus-visible:outline-accent"
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-heading text-sm font-semibold text-text group-hover:text-accent">
                      {skill.name}
                    </span>
                    <span className="font-heading text-xs text-muted group-hover:text-accent shrink-0">
                      ↗
                    </span>
                  </div>
                  <span className="mt-2 font-body text-xs text-muted leading-snug">
                    {skill.evidence}
                  </span>
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
