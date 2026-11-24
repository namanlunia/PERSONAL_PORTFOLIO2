'use client';

import React from 'react';
import { useScrollProgress } from '@/hooks/useScrollProgress';

interface CornerReadoutsProps {
  activeSection: string;
}

export function CornerReadouts({ activeSection }: CornerReadoutsProps) {
  const progress = useScrollProgress();
  const pct = Math.round(progress * 100);

  const sectionLabels: Record<string, string> = {
    hero: 'SEC // HERO',
    about: 'SEC // 01 ABOUT',
    roadmap: 'SEC // 02 ROADMAP',
    projects: 'SEC // 03 PROJECTS',
    achievements: 'SEC // 04 CERTS',
    contact: 'SEC // 05 CONTACT',
  };

  const currentLabel = sectionLabels[activeSection] || 'SEC // HERO';

  return (
    <>
      <div className="hidden sm:block absolute top-2 left-3 font-heading text-[11px] font-semibold tracking-wider text-muted uppercase leading-none select-none">
        {currentLabel}
      </div>
      <div className="hidden sm:block absolute top-2 right-3 font-heading text-[11px] font-semibold tracking-wider text-muted uppercase leading-none select-none">
        SCROLL: {pct}%
      </div>
    </>
  );
}
