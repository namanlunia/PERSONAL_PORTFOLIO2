'use client';

import React from 'react';
import { profileData } from '@/content/profile';
import { Button } from '@/components/ui/Button';
import { AvatarSprite } from '@/components/pixel/Avatar';
import { RunnerGame } from '@/components/game/RunnerGame';

export function Hero() {
  return (
    <section
      id="hero"
      aria-label="01 Home // Character Profile"
      className="min-h-[calc(100vh-3.5rem)] flex flex-col justify-between pt-8 md:pt-12 pb-8 px-4 md:px-6 max-w-[1120px] mx-auto w-full"
    >
      {/* Two columns matching Figma Image 1 */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-8">
        {/* Left Column: Player Status & Statement */}
        <div className="lg:col-span-7 flex flex-col justify-center pt-2">
          {/* Top Badge: PLAYER 01 / READY */}
          <div className="self-start">
            <span className="px-3 py-1 border border-line bg-surface font-heading text-[11px] font-semibold tracking-wider text-muted uppercase">
              PLAYER 01 / READY
            </span>
          </div>

          {/* Subline in amber: DESIGNER + DEVELOPER */}
          <h2 className="mt-5 font-heading text-xs sm:text-sm font-semibold tracking-widest uppercase text-accent">
            DESIGNER + DEVELOPER
          </h2>

          {/* Main Statement matching Figma Image 1 */}
          <h1 className="mt-8 font-heading text-3xl sm:text-4xl lg:text-5xl font-normal leading-[1.18] text-text max-w-xl">
            I build clear digital experiences with a focus on systems, interaction, and thoughtful implementation.
          </h1>

          {/* Naman's specific credential context */}
          <p className="mt-6 font-body text-base text-muted max-w-lg leading-relaxed">
            {profileData.headline}
          </p>

          <p className="mt-2 font-heading text-xs tracking-wider uppercase text-muted">
            {profileData.subline}
          </p>

          {/* Hero Action Buttons matching Figma Image 1 */}
          <div className="mt-8 flex flex-wrap gap-4 items-center">
            <Button href="#projects" variant="primary">
              VIEW PROJECTS
            </Button>
            <Button href="#contact" variant="secondary">
              START A CONVERSATION
            </Button>
          </div>
        </div>

        {/* Right Column: Player Card matching Figma Image 1 */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <div className="w-full max-w-sm border border-line bg-surface/50 p-5 md:p-6">
            {/* Header: PLAYER CARD ... #0001 */}
            <div className="flex justify-between items-center pb-3 border-b border-line font-heading text-xs font-semibold tracking-wider text-muted uppercase">
              <span>PLAYER CARD</span>
              <span>#0001</span>
            </div>

            {/* Avatar inside centered bordered square box */}
            <div className="w-full aspect-square max-w-[200px] mx-auto my-6 border border-line bg-surface flex items-center justify-center p-3">
              <AvatarSprite className="w-28 h-28 md:w-32 md:h-32" />
            </div>

            {/* Divider */}
            <div className="h-[1px] bg-line w-full mb-4" />

            {/* Attribute Rows */}
            <div className="space-y-2.5 font-heading text-xs tracking-wide">
              <div className="flex justify-between items-baseline">
                <span className="text-muted uppercase font-semibold">ROLE</span>
                <span className="text-text font-medium text-right">Designer and developer</span>
              </div>
              <div className="flex justify-between items-baseline">
                <span className="text-muted uppercase font-semibold">BASE</span>
                <span className="text-text font-medium text-right">Newton School of Technology</span>
              </div>
              <div className="flex justify-between items-baseline">
                <span className="text-muted uppercase font-semibold">MODE</span>
                <span className="text-text font-medium text-right">Open to selected projects</span>
              </div>
            </div>

            {/* Divider */}
            <div className="h-[1px] bg-line w-full my-4" />

            {/* Progress Gauges */}
            <div className="space-y-3 font-heading text-xs">
              <div>
                <div className="flex justify-between items-center text-[11px] font-medium tracking-wide mb-1.5">
                  <span className="text-muted uppercase">DESIGN</span>
                  <span className="text-muted">86%</span>
                </div>
                <div className="w-full h-1 bg-surface-2 border border-line overflow-hidden">
                  <div className="h-full bg-accent" style={{ width: '86%' }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center text-[11px] font-medium tracking-wide mb-1.5">
                  <span className="text-muted uppercase">CODE</span>
                  <span className="text-muted">78%</span>
                </div>
                <div className="w-full h-1 bg-surface-2 border border-line overflow-hidden">
                  <div className="h-full bg-accent" style={{ width: '78%' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mini-game as a wide strip across the bottom */}
      <div className="w-full mt-4">
        <RunnerGame />
      </div>
    </section>
  );
}
