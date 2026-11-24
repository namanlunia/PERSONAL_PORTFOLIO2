import React from 'react';

interface PixelProps {
  className?: string;
  size?: number;
}

export function MedalSprite({ className = 'w-6 h-6', size = 8 }: PixelProps) {
  return (
    <svg
      viewBox={`0 0 ${size} ${size}`}
      className={className}
      shapeRendering="crispEdges"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="2" y="0" width="2" height="1" fill="#8A6224" />
      <rect x="6" y="0" width="2" height="1" fill="#E5A03A" />
      <rect x="2" y="1" width="2" height="1" fill="#8A6224" />
      <rect x="6" y="1" width="2" height="1" fill="#E5A03A" />
      <rect x="1" y="2" width="6" height="1" fill="#8A6224" />
      <rect x="7" y="2" width="1" height="1" fill="#E5A03A" />
      <rect x="1" y="3" width="1" height="1" fill="#8A6224" />
      <rect x="2" y="3" width="5" height="1" fill="#E8E4D8" />
      <rect x="7" y="3" width="1" height="1" fill="#E5A03A" />
      <rect x="1" y="4" width="1" height="1" fill="#8A6224" />
      <rect x="2" y="4" width="5" height="1" fill="#E8E4D8" />
      <rect x="7" y="4" width="1" height="1" fill="#E5A03A" />
      <rect x="2" y="5" width="1" height="1" fill="#8A6224" />
      <rect x="3" y="5" width="4" height="1" fill="#E5A03A" />
      <rect x="7" y="5" width="1" height="1" fill="#8A6224" />
      <rect x="3" y="6" width="1" height="1" fill="#8A6224" />
      <rect x="4" y="6" width="2" height="1" fill="#E5A03A" />
      <rect x="6" y="6" width="1" height="1" fill="#8A6224" />
      <rect x="4" y="7" width="2" height="1" fill="#8A6224" />
    </svg>
  );
}
