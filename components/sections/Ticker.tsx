import React from 'react';
import { tickerItems } from '@/content/links';

export function Ticker() {
  // Repeat items for seamless horizontal scroll
  const repeated = [...tickerItems, ...tickerItems, ...tickerItems];

  return (
    <div
      role="region"
      aria-label="Status Highlights Ticker"
      className="w-full border-y border-line bg-surface-2 overflow-hidden py-2.5 select-none"
    >
      <div className="ticker-track flex whitespace-nowrap items-center font-heading text-xs font-semibold tracking-wider text-text uppercase">
        {repeated.map((item, index) => (
          <React.Fragment key={index}>
            <span className="inline-block px-3">{item}</span>
            <span
              className="w-1.5 h-1.5 bg-accent shrink-0 inline-block"
              aria-hidden="true"
            />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
