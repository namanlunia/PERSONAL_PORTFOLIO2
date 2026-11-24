import React from 'react';

export function Divider() {
  return (
    <div className="w-full h-4 overflow-hidden leading-none select-none" aria-hidden="true">
      <svg className="w-full h-4 block" viewBox="0 0 1120 16" preserveAspectRatio="none">
        <defs>
          <pattern id="ruler-tick-pat" width="32" height="16" patternUnits="userSpaceOnUse">
            <line x1="0" y1="3" x2="0" y2="13" stroke="#2B3439" strokeWidth="1" />
            <line x1="16" y1="6" x2="16" y2="10" stroke="#2B3439" strokeWidth="1" />
          </pattern>
        </defs>
        <rect x="0" y="0" width="100%" height="16" fill="url(#ruler-tick-pat)" />
        <line x1="0" y1="8" x2="100%" y2="8" stroke="#2B3439" strokeWidth="1" />
      </svg>
    </div>
  );
}
