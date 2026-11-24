'use client';

import React from 'react';
import { profileData } from '@/content/profile';
import { Button } from '@/components/ui/Button';
import { Panel } from '@/components/ui/Panel';
import { AvatarSprite } from '@/components/pixel/Avatar';
import { RunnerGame } from '@/components/game/RunnerGame';

export function Hero() {
  return (
    <section
      id="hero"
      aria-label="Character Introduction"
      className="min-h-[calc(100vh-3.5rem)] flex flex-col justify-between pt-8 md:pt-12 pb-8 px-4 md:px-6 max-w-[1120px] mx-auto w-full"
    >
      {/* Two columns: Hero info (left) & Player card (right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-8">
        {/* Left Column: Oversized Name & Pitch */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          <div className="flex flex-col select-none">
            <span className="font-heading font-semibold text-text uppercase leading-[0.88] text-[clamp(3.5rem,11vw,9rem)]">
              {profileData.firstName}
            </span>
            <span className="font-heading font-semibold uppercase leading-[0.88] text-[clamp(3.5rem,11vw,9rem)] text-transparent [-webkit-text-stroke:1.5px_var(--text)]">
              {profileData.lastName}
            </span>
          </div>

          <p className="mt-6 font-body text-base md:text-lg text-text max-w-xl leading-relaxed">
            {profileData.headline}
          </p>

          <p className="mt-2 font-heading text-xs tracking-wider uppercase text-muted">
            {profileData.subline}
          </p>

          <div className="mt-8 flex flex-wrap gap-4 items-center">
            <Button href="#projects" variant="primary">
              [VIEW PROJECTS]
            </Button>
            <Button href="#contact" variant="secondary">
              [CONTACT]
            </Button>
          </div>
        </div>

        {/* Right Column: Player Card */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <Panel variant="surface-2" className="w-full max-w-sm">
            <div className="flex flex-col items-center justify-center p-3 border-b border-line pb-4 mb-4 bg-surface">
              <AvatarSprite className="w-28 h-28 md:w-32 md:h-32" />
            </div>

            <div className="space-y-3 font-heading text-xs md:text-sm tracking-wide">
              <div className="flex justify-between items-baseline border-b border-line/60 pb-2">
                <span className="text-muted uppercase font-semibold">CLASS:</span>
                <span className="text-text font-medium text-right">{profileData.card.classTitle}</span>
              </div>
              <div className="flex justify-between items-baseline border-b border-line/60 pb-2">
                <span className="text-muted uppercase font-semibold">GUILD:</span>
                <span className="text-text font-medium text-right">{profileData.card.guild}</span>
              </div>
              <div className="flex justify-between items-baseline border-b border-line/60 pb-2">
                <span className="text-muted uppercase font-semibold">GOAL:</span>
                <span className="text-text font-medium text-right">{profileData.card.goal}</span>
              </div>
              <div className="flex justify-between items-center pt-1">
                <span className="text-muted uppercase font-semibold">STATUS:</span>
                <span className="inline-flex items-center gap-2 text-text font-medium uppercase">
                  <span className="w-2 h-2 bg-accent inline-block" aria-hidden="true" />
                  {profileData.card.status}
                </span>
              </div>
            </div>
          </Panel>
        </div>
      </div>

      {/* Mini-game as a wide strip across the bottom */}
      <div className="w-full">
        <RunnerGame />
      </div>
    </section>
  );
}
