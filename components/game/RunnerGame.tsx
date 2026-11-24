'use client';

import React from 'react';
import { useRunner } from './useRunner';
import { Panel } from '@/components/ui/Panel';

export function RunnerGame() {
  const { canvasRef, containerRef, xp, hi } = useRunner();

  return (
    <div className="w-full mt-4" ref={containerRef}>
      <div className="flex justify-end mb-1">
        <a
          href="#about"
          className="font-heading text-xs tracking-wide text-muted hover:text-accent underline transition-none focus-visible:outline-2 focus-visible:outline-accent"
        >
          Skip game to About
        </a>
      </div>

      <Panel variant="surface" className="p-3 md:p-4">
        {/* Game HUD Bar */}
        <div className="flex items-center justify-between pb-2 mb-2 border-b border-line font-heading">
          <span className="text-xs font-semibold tracking-wider text-muted uppercase">
            PARALLAX RUNNER {'//'} AVOID OBSTACLES
          </span>
          <div className="flex items-center gap-4 text-xs font-semibold tracking-wider">
            <div>
              <span className="text-muted mr-1">XP:</span>
              <span className="text-accent">{xp}</span>
            </div>
            <div>
              <span className="text-muted mr-1">HI:</span>
              <span className="text-accent">{hi}</span>
            </div>
          </div>
        </div>

        {/* Canvas */}
        <div className="relative w-full overflow-hidden">
          <canvas
            ref={canvasRef}
            width={800}
            height={220}
            tabIndex={0}
            role="application"
            aria-label="One-button obstacle runner mini-game. Press Space, Up Arrow, or Tap to jump. Press Down Arrow or Hold to duck."
            className="block w-full h-auto max-h-[220px] aspect-[16/4.5] bg-surface cursor-pointer focus-visible:outline-2 focus-visible:outline-accent"
          />
        </div>

        {/* Instructions footer */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pt-2 mt-2 border-t border-line font-heading text-[11px] tracking-wider text-muted uppercase gap-1">
          <span>CONTROLS: SPACE / UP / CLICK TO JUMP | DOWN / HOLD TO DUCK</span>
          <span>PARALLAX: 3-TIER ACTIVE</span>
        </div>
      </Panel>
    </div>
  );
}
