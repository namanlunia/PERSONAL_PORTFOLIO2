import React from 'react';
import { tickerItems } from '@/content/links';

export function Ticker() {
  const repeated = [...tickerItems, ...tickerItems, ...tickerItems];

  return (
    <div
      role="region"
      aria-label="Status Highlights Ticker"
      className="w-full border-y border-line bg-surface-2 overflow-hidden py-3 select-none"
    >
      <div className="ticker-track flex whitespace-nowrap items-center font-heading text-xs font-semibold tracking-wider text-text uppercase">
        {repeated.map((item, index) => (
          <React.Fragment key={index}>
            <span className="inline-block px-4">{item}</span>
            <span className="text-accent font-bold text-sm inline-block mx-2" aria-hidden="true">
              +
            </span>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
