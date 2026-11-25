import React from 'react';
import { educationData, achievementsData } from '@/content/education';
import { SectionTitle } from '@/components/hud/SectionTitle';

export function Education() {
  return (
    <section
      id="education"
      aria-label="05 Education and achievements"
      className="py-[clamp(64px,8vw,112px)] px-[clamp(32px,6vw,96px)] max-w-[1120px] mx-auto w-full"
    >
      <SectionTitle number="05" title="Education and achievements" />

      {/* Part A: Education */}
      <div className="border border-line bg-surface p-6 md:p-8 mb-10">
        <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-line mb-4">
          <span className="font-heading text-xs font-semibold text-accent uppercase tracking-wider">
            ACADEMIC QUALIFICATION
          </span>
          <span className="font-heading text-xs font-semibold text-muted uppercase tracking-wider">
            EXPECTED GRADUATION: {educationData.expectedGraduation}
          </span>
        </div>
        <h3 className="font-heading text-xl md:text-2xl font-semibold text-text mb-2">
          {educationData.degree}
        </h3>
        <p className="font-heading text-sm text-accent uppercase tracking-wide mb-3">
          {educationData.institution}
        </p>
        <p className="font-body text-sm text-muted m-0 leading-relaxed">
          {educationData.summary}
        </p>
      </div>

      {/* Part B: Achievements (11 Credly badges) */}
      <div className="border border-line bg-surface">
        <div className="flex flex-wrap items-center justify-between gap-4 p-6 border-b border-line">
          <span className="font-heading text-xs font-semibold text-accent uppercase tracking-wider">
            IBM SKILLSBUILD BADGES
          </span>
          <span className="font-heading text-xs font-semibold text-muted uppercase tracking-wider">
            {achievementsData.headerCounter}
          </span>
        </div>

        <div className="divide-y divide-line">
          {achievementsData.badges.map((badge, idx) => (
            <div
              key={badge.id}
              className="p-5 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-surface-2 transition-none"
            >
              <div className="flex items-start md:items-center gap-4">
                <span className="font-heading text-xs text-muted shrink-0 w-6">
                  {String(idx + 1).padStart(2, '0')}
                </span>
                <div>
                  <h4 className="font-heading text-sm md:text-base font-semibold text-text m-0">
                    {badge.title}
                  </h4>
                  <div className="flex flex-wrap items-center gap-3 mt-1 font-body text-xs text-muted">
                    <span>Issuer: {badge.issuer}</span>
                    <span>•</span>
                    <span>Issued on {badge.issuedDate}</span>
                  </div>
                </div>
              </div>

              <div className="self-end md:self-auto shrink-0">
                <a
                  href={badge.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-heading text-xs font-semibold text-accent hover:underline inline-flex items-center gap-1 focus-visible:outline-2 focus-visible:outline-accent"
                >
                  Verify on Credly ↗
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
