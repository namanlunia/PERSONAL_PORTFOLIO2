'use client';

import React from 'react';
import { useScrollProgress } from '@/hooks/useScrollProgress';

export function XpBar() {
  const progress = useScrollProgress();
  const totalSegments = 20;
  const activeCount = Math.round(progress * totalSegments);

  return (
    <>
      {/* Desktop / Tablet: 20 flat amber segments, 6px high, centered in top mat strip */}
      <div
        className="hidden md:flex items-center gap-[3px]"
        aria-label={`Scroll progress: ${Math.round(progress * 100)}%`}
      >
        {Array.from({ length: totalSegments }).map((_, idx) => (
          <span
            key={idx}
            className={`w-2.5 lg:w-3 h-1.5 border rounded-none transition-none ${
              idx < activeCount
                ? 'bg-accent border-accent'
                : 'bg-transparent border-line'
            }`}
          />
        ))}
      </div>

      {/* Mobile (<768px): 4px bar at the very top of the viewport */}
      <div
        className="md:hidden fixed top-0 left-0 right-0 h-1 bg-surface z-[70] overflow-hidden"
        aria-label={`Scroll progress: ${Math.round(progress * 100)}%`}
      >
        <div
          className="h-full bg-accent transition-none"
          style={{ width: `${Math.round(progress * 100)}%` }}
        />
      </div>
    </>
  );
}
