'use client';

import React from 'react';
import { useScrollProgress } from '@/hooks/useScrollProgress';

export function XpBar() {
  const progress = useScrollProgress();
  const totalSegments = 20;
  const activeCount = Math.round(progress * totalSegments);

  return (
    <div className="flex gap-[3px] items-center" aria-label={`Scroll progress: ${Math.round(progress * 100)}%`}>
      {Array.from({ length: totalSegments }).map((_, idx) => (
        <span
          key={idx}
          className={`w-[7px] h-1 border rounded-none ${
            idx < activeCount
              ? 'bg-accent border-accent'
              : 'bg-transparent border-line'
          }`}
        />
      ))}
    </div>
  );
}
