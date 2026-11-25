'use client';

import React from 'react';
import { profileData } from '@/content/profile';
import { Button } from '@/components/ui/Button';
import { AvatarSprite } from '@/components/pixel/Avatar';

export function Hero() {
  return (
    <section
      id="hero"
      aria-label="Character Profile"
      className="flex flex-col justify-center max-w-[1120px] mx-auto px-[clamp(32px,6vw,96px)] w-full"
      style={{
        minHeight: 'calc(100svh - var(--frame-gap) * 2 - var(--header-height))',
        paddingBottom: '96px',
      }}
    >
      {/* Two columns aligned to vertical center */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full my-auto py-8">
        {/* Left Column: Name & Statement */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          {/* Top Badge: PLAYER PROFILE */}
          <div className="self-start mb-6">
            <span className="px-3 py-1 border border-line bg-surface font-heading text-[11px] font-semibold tracking-wider text-muted uppercase">
              PLAYER PROFILE
            </span>
          </div>

          {/* Oversized Name: NAMAN (solid) and LUNIA (outlined) */}
          <div className="flex flex-col select-none">
            <span className="font-heading font-semibold text-text uppercase leading-[0.88] text-[clamp(3rem,8vw,7rem)] block">
              {profileData.firstName}
            </span>
            <span className="font-heading font-semibold uppercase leading-[0.88] text-[clamp(3rem,8vw,7rem)] text-transparent [-webkit-text-stroke:1.5px_var(--text)] block">
              {profileData.lastName}
            </span>
          </div>

          {/* Exact Statement */}
          <p className="mt-6 font-body text-base md:text-lg text-text max-w-xl leading-relaxed">
            {profileData.headline}
          </p>

          {/* Sub-line */}
          <p className="mt-2 font-heading text-xs tracking-wider uppercase text-muted">
            {profileData.subline}
          </p>

          {/* Action Buttons: View projects & Get in touch */}
          <div className="mt-8 flex flex-wrap gap-4 items-center">
            <Button href="#projects" variant="primary">
              View projects
            </Button>
            <Button href="#contact" variant="secondary">
              Get in touch
            </Button>
          </div>
        </div>

        {/* Right Column: Player Card (max avatar 168px, 6 character rows, fits cleanly inside 1440x900 & 1280x720) */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <div className="w-full max-w-sm mx-auto lg:ml-auto border border-line bg-surface/50 p-5">
            {/* Header: PLAYER CARD ... #0001 */}
            <div className="flex justify-between items-center pb-2.5 border-b border-line font-heading text-xs font-semibold tracking-wider text-muted uppercase">
              <span>PLAYER CARD</span>
              <span>#0001</span>
            </div>

            {/* Avatar Panel: Exactly 168px height */}
            <div className="w-[168px] h-[168px] mx-auto my-3 border border-line bg-surface flex items-center justify-center p-2 shrink-0">
              <AvatarSprite className="w-28 h-28" />
            </div>

            {/* Divider */}
            <div className="h-[1px] bg-line w-full mb-3" />

            {/* 6 Character Sheet Rows */}
            <div className="space-y-2 font-heading text-xs tracking-wide">
              <div className="flex justify-between items-baseline border-b border-line/50 pb-1.5">
                <span className="text-muted uppercase font-semibold">CLASS</span>
                <span className="text-text font-medium text-right">{profileData.card.classTitle}</span>
              </div>
              <div className="flex justify-between items-baseline border-b border-line/50 pb-1.5">
                <span className="text-muted uppercase font-semibold">GUILD</span>
                <span className="text-text font-medium text-right">{profileData.card.guild}</span>
              </div>
              <div className="flex justify-between items-baseline border-b border-line/50 pb-1.5">
                <span className="text-muted uppercase font-semibold">GOAL</span>
                <span className="text-text font-medium text-right">{profileData.card.goal}</span>
              </div>
              <div className="flex justify-between items-baseline border-b border-line/50 pb-1.5">
                <span className="text-muted uppercase font-semibold">PULL REQUESTS</span>
                <span className="text-text font-medium text-right">{profileData.card.pullRequests}</span>
              </div>
              <div className="flex justify-between items-baseline border-b border-line/50 pb-1.5">
                <span className="text-muted uppercase font-semibold">CERTIFICATES</span>
                <span className="text-text font-medium text-right">{profileData.card.certificates}</span>
              </div>
              <div className="flex justify-between items-baseline pt-0.5">
                <span className="text-muted uppercase font-semibold">LEVEL</span>
                <span className="text-accent font-semibold text-right">{profileData.card.level}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
