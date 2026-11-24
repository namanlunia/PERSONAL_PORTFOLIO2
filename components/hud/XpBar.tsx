'use client';

import React from 'react';
import { useScrollProgress } from '@/hooks/useScrollProgress';

export function XpBar() {
  const progress = useScrollProgress();
  const pct = Math.round(progress * 100);
  const formattedPct = String(pct).padStart(3, '0');

  return (
    <div
      className="flex items-center gap-3 font-heading text-xs select-none"
      aria-label={`Scroll XP progress: ${pct}%`}
    >
      <span className="font-semibold tracking-wider text-muted text-[11px]">XP</span>
      <div className="w-24 sm:w-36 h-1.5 bg-surface border border-line rounded-none overflow-hidden">
        <div
          className="h-full bg-accent transition-none"
          style={{ width: `${pct}%` }}
        />
      </div>
      <span className="text-muted tracking-widest font-mono text-[11px]">
        {formattedPct}
      </span>
    </div>
  );
}
