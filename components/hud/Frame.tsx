'use client';

import React, { useState } from 'react';

export function HudFrame() {
  const [showHelp, setShowHelp] = useState(false);

  return (
    <>
      {/* Fixed 1px Viewport Frame */}
      <div
        className="fixed inset-[6px] sm:inset-3 border border-line pointer-events-none z-[900]"
        aria-hidden="true"
      >
        {/* 4 Amber Corner Brackets matching Figma */}
        <span className="absolute -top-[1px] -left-[1px] w-3 h-3 border-t-2 border-l-2 border-accent pointer-events-none" />
        <span className="absolute -top-[1px] -right-[1px] w-3 h-3 border-t-2 border-r-2 border-accent pointer-events-none" />
        <span className="absolute -bottom-[1px] -left-[1px] w-3 h-3 border-b-2 border-l-2 border-accent pointer-events-none" />
        <span className="absolute -bottom-[1px] -right-[1px] w-3 h-3 border-b-2 border-r-2 border-accent pointer-events-none" />

        {/* Left vertical edge text: PORTFOLIO / V1.0 */}
        <div className="hidden lg:block absolute left-2 bottom-12 origin-bottom-left -rotate-90 font-heading text-[10px] font-medium tracking-[0.2em] text-muted uppercase pointer-events-none">
          PORTFOLIO / V1.0
        </div>

        {/* Right vertical edge text: STATUS / AVAILABLE */}
        <div className="hidden lg:block absolute right-2 bottom-12 origin-bottom-right rotate-90 font-heading text-[10px] font-medium tracking-[0.2em] text-muted uppercase pointer-events-none">
          STATUS / AVAILABLE
        </div>
      </div>

      {/* Floating help ? button at bottom right (matches Figma Image 1 & 6) */}
      <div className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-[950]">
        <button
          type="button"
          onClick={() => setShowHelp(!showHelp)}
          aria-label="Toggle keyboard shortcuts help"
          className="w-8 h-8 rounded-full border border-line bg-surface text-muted hover:text-accent hover:border-accent flex items-center justify-center font-heading text-xs font-semibold select-none cursor-pointer focus-visible:outline-2 focus-visible:outline-accent"
        >
          ?
        </button>

        {showHelp && (
          <div className="absolute bottom-10 right-0 w-64 p-3 bg-surface border border-line font-heading text-xs tracking-wider text-text uppercase space-y-2">
            <div className="text-accent font-semibold pb-1 border-b border-line flex justify-between items-center">
              <span>KEYBOARD SHORTCUTS</span>
              <button
                type="button"
                onClick={() => setShowHelp(false)}
                className="text-muted hover:text-text cursor-pointer"
              >
                [X]
              </button>
            </div>
            <div className="space-y-1 text-[11px] text-muted">
              <div><span className="text-accent">[1]</span> 01 HOME</div>
              <div><span className="text-accent">[2]</span> 02 ABOUT</div>
              <div><span className="text-accent">[3]</span> 03 ROADMAP</div>
              <div><span className="text-accent">[4]</span> 04 PROJECTS</div>
              <div><span className="text-accent">[5]</span> 05 CONTACT</div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
