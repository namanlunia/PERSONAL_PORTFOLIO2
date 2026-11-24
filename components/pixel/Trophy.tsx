import React from 'react';

interface PixelProps {
  className?: string;
  size?: number;
}

export function TrophySprite({ className = 'w-24 h-24', size = 16 }: PixelProps) {
  return (
    <svg
      viewBox={`0 0 ${size} ${size}`}
      className={className}
      shapeRendering="crispEdges"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="3" y="0" width="10" height="1" fill="#E5A03A" />
      <rect x="2" y="1" width="1" height="1" fill="#8A6224" />
      <rect x="3" y="1" width="10" height="1" fill="#E5A03A" />
      <rect x="13" y="1" width="1" height="1" fill="#8A6224" />
      <rect x="1" y="2" width="1" height="1" fill="#8A6224" />
      <rect x="2" y="2" width="12" height="1" fill="#E5A03A" />
      <rect x="14" y="2" width="1" height="1" fill="#8A6224" />
      <rect x="1" y="3" width="1" height="1" fill="#8A6224" />
      <rect x="2" y="3" width="1" height="1" fill="#2B3439" />
      <rect x="5" y="3" width="6" height="1" fill="#E5A03A" />
      <rect x="13" y="3" width="1" height="1" fill="#2B3439" />
      <rect x="14" y="3" width="1" height="1" fill="#8A6224" />
      <rect x="1" y="4" width="1" height="1" fill="#8A6224" />
      <rect x="5" y="4" width="6" height="1" fill="#E8E4D8" />
      <rect x="14" y="4" width="1" height="1" fill="#8A6224" />
      <rect x="2" y="5" width="1" height="1" fill="#2B3439" />
      <rect x="5" y="5" width="6" height="1" fill="#E5A03A" />
      <rect x="13" y="5" width="1" height="1" fill="#2B3439" />
      <rect x="3" y="6" width="1" height="1" fill="#8A6224" />
      <rect x="5" y="6" width="6" height="1" fill="#E5A03A" />
      <rect x="12" y="6" width="1" height="1" fill="#8A6224" />
      <rect x="4" y="7" width="8" height="1" fill="#E5A03A" />
      <rect x="5" y="8" width="6" height="1" fill="#E5A03A" />
      <rect x="6" y="9" width="1" height="1" fill="#8A6224" />
      <rect x="7" y="9" width="2" height="1" fill="#E5A03A" />
      <rect x="9" y="9" width="1" height="1" fill="#8A6224" />
      <rect x="6" y="10" width="1" height="1" fill="#8A6224" />
      <rect x="7" y="10" width="2" height="1" fill="#E5A03A" />
      <rect x="9" y="10" width="1" height="1" fill="#8A6224" />
      <rect x="5" y="11" width="6" height="1" fill="#8A6224" />
      <rect x="4" y="12" width="8" height="1" fill="#1C2226" />
      <rect x="4" y="13" width="4" height="1" fill="#1C2226" />
      <rect x="8" y="13" width="2" height="1" fill="#E8E4D8" />
      <rect x="10" y="13" width="2" height="1" fill="#1C2226" />
      <rect x="4" y="14" width="8" height="1" fill="#1C2226" />
      <rect x="3" y="15" width="10" height="1" fill="#2B3439" />
    </svg>
  );
}
