import React from 'react';

interface SectionTitleProps {
  number: string;
  title?: string;
  className?: string;
}

export function SectionTitle({
  number,
  className = '',
}: SectionTitleProps) {
  return (
    <div className={`flex items-center gap-6 mb-8 md:mb-12 select-none ${className}`}>
      {/* Section numeral in amber matching Figma frames */}
      <span className="font-heading text-base md:text-lg font-semibold text-accent tracking-wider shrink-0">
        {number}
      </span>

      {/* Hairline horizontal rule running across the section */}
      <div className="h-[1px] bg-line w-full" aria-hidden="true" />
    </div>
  );
}
