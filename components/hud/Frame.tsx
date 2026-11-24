'use client';

import React from 'react';
import { useScrollProgress } from '@/hooks/useScrollProgress';
import { useActiveSection } from '@/hooks/useActiveSection';
import { XpBar } from './XpBar';

const sectionLabels: Record<string, string> = {
  hero: 'SEC // HERO',
  about: 'SEC // 01 ABOUT',
  roadmap: 'SEC // 02 ROADMAP',
  projects: 'SEC // 03 PROJECTS',
  achievements: 'SEC // 04 CERTS',
  contact: 'SEC // 05 CONTACT',
};

export function HudFrame() {
  const progress = useScrollProgress();
  const scrollPct = Math.round(progress * 100);
  const activeSection = useActiveSection([
    'hero',
    'about',
    'roadmap',
    'projects',
    'achievements',
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

      {/* 2. Top Mat Strip: Horizontal readouts and Segmented XP Bar (centered vertically) */}
      <div
        className="fixed top-0 left-0 right-0 pointer-events-none z-[60] flex items-center justify-between px-6 md:px-8 lg:px-10"
        style={{ height: 'var(--frame-gap)' }}
      >
        {/* Top left: current section name (horizontal, never rotated, hidden below 768px) */}
        <span className="hidden md:block font-heading text-[11px] font-medium tracking-wider text-muted uppercase select-none">
          {currentLabel}
        </span>

        {/* Center: Segmented XP Bar */}
        <div className="flex items-center justify-center">
          <XpBar />
        </div>

        {/* Top right: scroll percentage (horizontal, never rotated, hidden below 768px) */}
        <span className="hidden md:block font-heading text-[11px] font-medium tracking-wider text-muted uppercase select-none">
          SCROLL: {scrollPct}%
        </span>
      </div>

      {/* 3. Bottom Mat Strip: Horizontal readouts (never rotated, hidden below 768px) */}
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
