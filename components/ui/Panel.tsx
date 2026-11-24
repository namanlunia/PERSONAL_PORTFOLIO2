import React from 'react';

interface PanelProps {
  children: React.ReactNode;
  variant?: 'surface' | 'surface-2';
  className?: string;
  as?: React.ElementType;
  id?: string;
}

export function Panel({
  children,
  variant = 'surface',
  className = '',
  as: Component = 'div',
  id,
}: PanelProps) {
  const bgStyle = variant === 'surface-2' ? 'bg-surface-2' : 'bg-surface';

  return (
    <Component
      id={id}
      className={`relative border border-line p-4 md:p-6 rounded-none ${bgStyle} ${className}`}
    >
      {/* 4 Corner brackets */}
      <span
        aria-hidden="true"
        className="absolute -top-[1px] -left-[1px] w-1.5 h-1.5 border-t border-l border-muted pointer-events-none"
      />
      <span
        aria-hidden="true"
        className="absolute -top-[1px] -right-[1px] w-1.5 h-1.5 border-t border-r border-muted pointer-events-none"
      />
      <span
        aria-hidden="true"
        className="absolute -bottom-[1px] -left-[1px] w-1.5 h-1.5 border-b border-l border-muted pointer-events-none"
      />
      <span
        aria-hidden="true"
        className="absolute -bottom-[1px] -right-[1px] w-1.5 h-1.5 border-b border-r border-muted pointer-events-none"
      />
      {children}
    </Component>
  );
}
