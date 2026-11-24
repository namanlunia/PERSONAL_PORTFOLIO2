import React from 'react';

interface PixelProps {
  className?: string;
  size?: number;
}

export function GarmentSprite({ className = 'w-24 h-24', size = 16 }: PixelProps) {
  return (
    <svg
      viewBox={`0 0 ${size} ${size}`}
      className={className}
      shapeRendering="crispEdges"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="7" y="0" width="2" height="1" fill="#E8E4D8" />
      <rect x="8" y="1" width="1" height="1" fill="#E8E4D8" />
      <rect x="7" y="2" width="1" height="1" fill="#E8E4D8" />
      <rect x="7" y="3" width="2" height="1" fill="#E8E4D8" />
      <rect x="4" y="4" width="8" height="1" fill="#E5A03A" />
      <rect x="3" y="5" width="1" height="1" fill="#E5A03A" />
      <rect x="4" y="5" width="2" height="1" fill="#8A6224" />
      <rect x="6" y="5" width="4" height="1" fill="#E8E4D8" />
      <rect x="10" y="5" width="1" height="1" fill="#8A6224" />
      <rect x="11" y="5" width="1" height="1" fill="#E5A03A" />
      <rect x="3" y="6" width="1" height="1" fill="#E5A03A" />
      <rect x="4" y="6" width="3" height="1" fill="#1C2226" />
      <rect x="7" y="6" width="2" height="1" fill="#E8E4D8" />
      <rect x="9" y="6" width="2" height="1" fill="#1C2226" />
      <rect x="11" y="6" width="1" height="1" fill="#E5A03A" />
      <rect x="3" y="7" width="4" height="1" fill="#1C2226" />
      <rect x="7" y="7" width="1" height="1" fill="#E5A03A" />
      <rect x="8" y="7" width="4" height="1" fill="#1C2226" />
      <rect x="2" y="8" width="5" height="1" fill="#1C2226" />
      <rect x="7" y="8" width="1" height="1" fill="#E5A03A" />
      <rect x="8" y="8" width="5" height="1" fill="#1C2226" />
      <rect x="2" y="9" width="11" height="1" fill="#1C2226" />
      <rect x="2" y="10" width="5" height="1" fill="#1C2226" />
      <rect x="7" y="10" width="1" height="1" fill="#E5A03A" />
      <rect x="8" y="10" width="5" height="1" fill="#1C2226" />
      <rect x="3" y="11" width="9" height="1" fill="#1C2226" />
      <rect x="3" y="12" width="5" height="1" fill="#1C2226" />
      <rect x="8" y="12" width="1" height="1" fill="#E5A03A" />
      <rect x="9" y="12" width="3" height="1" fill="#1C2226" />
      <rect x="3" y="13" width="9" height="1" fill="#1C2226" />
      <rect x="3" y="14" width="9" height="1" fill="#8A6224" />
      <rect x="3" y="15" width="9" height="1" fill="#2B3439" />
    </svg>
  );
}
