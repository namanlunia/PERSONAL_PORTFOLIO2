import React from 'react';

interface SectionTitleProps {
  number: string;
  title: string;
  className?: string;
}

export function SectionTitle({
  number,
  title,
  className = '',
}: SectionTitleProps) {
  return (
    <div className={`flex items-center gap-4 md:gap-6 mb-8 md:mb-12 select-none ${className}`}>
      {/* Section numeral in amber */}
      <span className="font-heading text-base md:text-xl font-semibold text-accent tracking-wider shrink-0">
        {number}
      </span>

      {/* Exact rubric heading */}
      <h2 className="font-heading text-lg md:text-2xl font-semibold text-text uppercase tracking-wider shrink-0 m-0">
        {title}
      </h2>

      {/* Hairline horizontal rule running across the section */}
      <div className="h-[1px] bg-line w-full" aria-hidden="true" />
    </div>
  );
}
