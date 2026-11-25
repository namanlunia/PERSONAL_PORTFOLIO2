'use client';

import React from 'react';
import { useScrollProgress } from '@/hooks/useScrollProgress';
import { useActiveSection } from '@/hooks/useActiveSection';
import { XpBar } from './XpBar';

const sectionLabels: Record<string, string> = {
  hero: 'SEC // HERO',
  about: 'SEC // 01 ABOUT',
  skills: 'SEC // 02 SKILLS',
  contributions: 'SEC // 03 S&AI PRs',
  projects: 'SEC // 04 PROJECTS',
  education: 'SEC // 05 EDUCATION',
  contact: 'SEC // 06 CONTACT',
};

export function HudFrame() {
  const progress = useScrollProgress();
  const scrollPct = Math.round(progress * 100);
  const activeSection = useActiveSection([
    'hero',
    'about',
    'skills',
    'contributions',
    'projects',
    'education',
    'contact',
  ]);
  const currentLabel = sectionLabels[activeSection] || 'SEC // HERO';

  return (
    <>
      {/* 1. Mat Frame Layer: Solid border in var(--bg), with inner 1px --line border */}
      <div
        className="fixed inset-0 pointer-events-none z-[55]"
        style={{
          borderStyle: 'solid',
          borderColor: 'var(--bg)',
          borderWidth: 'var(--frame-gap)',
        }}
        aria-hidden="true"
      >
        {/* Inner element: 1px --line frame on the inner edge of the border */}
        <div className="relative w-full h-full border border-line">
          {/* 20px amber corner brackets on the 4 inner corners (12px on mobile) */}
          <span className="absolute -top-[1px] -left-[1px] w-3 h-3 md:w-5 md:h-5 border-t-2 border-l-2 border-accent" />
          <span className="absolute -top-[1px] -right-[1px] w-3 h-3 md:w-5 md:h-5 border-t-2 border-r-2 border-accent" />
          <span className="absolute -bottom-[1px] -left-[1px] w-3 h-3 md:w-5 md:h-5 border-b-2 border-l-2 border-accent" />
          <span className="absolute -bottom-[1px] -right-[1px] w-3 h-3 md:w-5 md:h-5 border-b-2 border-r-2 border-accent" />
        </div>
      </div>

      {/* 2. Top Mat Strip: Corner readouts and Centered XP Bar */}
      <div
        className="fixed top-0 left-0 right-0 pointer-events-none z-[60] flex items-center justify-between px-6 md:px-8 lg:px-10"
        style={{ height: 'var(--frame-gap)' }}
      >
        {/* Top left: current section name at frame corner */}
        <div className="hidden md:flex items-center min-w-[140px]">
          <span className="font-heading text-[11px] font-medium tracking-wider text-muted uppercase select-none">
            {currentLabel}
          </span>
        </div>

        {/* Center: XP Bar (width min(480px, 60vw), margin-inline auto, scroll % to its right) */}
        <div className="flex-1 flex items-center justify-center px-4">
          <div
            className="hidden md:flex items-center justify-center gap-3 w-full"
            style={{ maxWidth: 'min(480px, 60vw)', marginInline: 'auto' }}
          >
            <div className="flex-1">
              <XpBar />
            </div>
            <span className="font-heading text-[11px] font-medium tracking-wider text-muted uppercase select-none whitespace-nowrap min-w-[36px] text-right">
              {scrollPct}%
            </span>
          </div>
          {/* Mobile XP Bar */}
          <div className="md:hidden">
            <XpBar />
          </div>
        </div>

        {/* Top right: scroll percentage at frame corner */}
        <div className="hidden md:flex items-center justify-end min-w-[140px]">
          <span className="font-heading text-[11px] font-medium tracking-wider text-muted uppercase select-none">
            SCROLL: {scrollPct}%
          </span>
        </div>
      </div>

      {/* 3. Bottom Mat Strip: Horizontal readouts at frame corners */}
      <div
        className="fixed bottom-0 left-0 right-0 pointer-events-none z-[60] flex items-center justify-between px-6 md:px-8 lg:px-10"
        style={{ height: 'var(--frame-gap)' }}
      >
        {/* Bottom left: PORTFOLIO / V1.0 */}
        <span className="hidden md:block font-heading text-[11px] font-medium tracking-wider text-muted uppercase select-none">
          PORTFOLIO / V1.0
        </span>

        {/* Bottom right: STATUS / AVAILABLE */}
        <span className="hidden md:block font-heading text-[11px] font-medium tracking-wider text-muted uppercase select-none">
          STATUS / AVAILABLE
        </span>
      </div>
    </>
  );
}
