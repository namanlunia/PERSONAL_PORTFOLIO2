import React from 'react';

interface SectionTitleProps {
  number: string;
  title: string;
  className?: string;
  numClassName?: string;
}

export function SectionTitle({
  number,
  title,
  className = '',
  numClassName = '',
}: SectionTitleProps) {
  return (
    <div className={`flex items-baseline gap-4 md:gap-6 mb-6 md:mb-8 select-none ${className}`}>
      {/* Oversized outlined numeral */}
      <span
        aria-hidden="true"
        className={`font-heading text-[clamp(4.5rem,12vw,9rem)] font-semibold leading-[0.8] text-transparent shrink-0 [-webkit-text-stroke:1px_var(--line)] ${numClassName}`}
      >
        {number}
      </span>

      {/* Masked section title sliding up on scroll reveal */}
      <div className="overflow-hidden block">
        <h2 className="section-title-revealer font-heading text-[clamp(2rem,5vw,4rem)] font-semibold uppercase tracking-wider text-text leading-[1.05]">
          {title}
        </h2>
      </div>
    </div>
  );
}
