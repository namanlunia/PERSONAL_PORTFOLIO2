'use client';

import React from 'react';
import { XpBar } from './XpBar';
import { CornerReadouts } from './CornerReadouts';
import { useActiveSection } from '@/hooks/useActiveSection';

export function HudFrame() {
  const activeSection = useActiveSection([
    'hero',
    'about',
    'roadmap',
    'projects',
    'achievements',
    'contact',
  ]);

  return (
    <div
      className="fixed inset-[6px] sm:inset-3 border border-line pointer-events-none z-[900]"
      aria-hidden="true"
    >
      {/* 4 Corner Brackets */}
      <span className="absolute -top-[1px] -left-[1px] w-1.5 h-1.5 border-t border-l border-muted pointer-events-none" />
      <span className="absolute -top-[1px] -right-[1px] w-1.5 h-1.5 border-t border-r border-muted pointer-events-none" />
      <span className="absolute -bottom-[1px] -left-[1px] w-1.5 h-1.5 border-b border-l border-muted pointer-events-none" />
      <span className="absolute -bottom-[1px] -right-[1px] w-1.5 h-1.5 border-b border-r border-muted pointer-events-none" />

      {/* Top Left & Right Readouts */}
      <CornerReadouts activeSection={activeSection} />

      {/* Top Center Segmented XP Progress Bar */}
      <div className="absolute top-2 left-1/2 -translate-x-1/2 pointer-events-none">
        <XpBar />
      </div>
    </div>
  );
}
