'use client';

import React from 'react';
import { useScrollProgress } from '@/hooks/useScrollProgress';

export function XpBar() {
  const progress = useScrollProgress();
  const totalSegments = 20;
  const activeCount = Math.round(progress * totalSegments);

  return (
    <>
      {/* Desktop / Tablet: 20 flat amber segments, 6px high, filling from left to right */}
      <div
        className="hidden md:grid w-full h-1.5 gap-[3px] items-center"
        style={{ gridTemplateColumns: 'repeat(20, minmax(0, 1fr))' }}
        aria-label={`Scroll progress: ${Math.round(progress * 100)}%`}
      >
        {Array.from({ length: totalSegments }).map((_, idx) => (
          <span
            key={idx}
            className={`h-1.5 border rounded-none transition-none ${
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
