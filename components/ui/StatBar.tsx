import React from 'react';

interface StatBarProps {
  level: string;
  filled: number; // 1 to 5
  max?: number;
}

export function StatBar({ level, filled, max = 5 }: StatBarProps) {
  const segments = Array.from({ length: max }, (_, i) => i < filled);

  return (
    <div className="flex gap-[3px] shrink-0" aria-label={`Level: ${filled} of ${max} (${level})`}>
      {segments.map((isFilled, idx) => (
        <span
          key={idx}
          className={`w-3.5 h-2 border rounded-none ${
            isFilled ? 'bg-accent border-accent' : 'bg-transparent border-line'
          }`}
        />
      ))}
    </div>
  );
}
