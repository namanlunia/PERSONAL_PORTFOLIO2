import React from 'react';
import { certificatesData } from '@/content/certificates';
import { SectionTitle } from '@/components/hud/SectionTitle';
import { MedalSprite } from '@/components/pixel/Medal';

export function Achievements() {
  return (
    <section
      id="achievements"
      aria-label="04 / Achievements"
      className="py-[clamp(64px,8vw,112px)] px-[clamp(32px,6vw,96px)] max-w-[1120px] mx-auto w-full"
    >
      {/* Section numeral 04 in amber matching nav order */}
      <SectionTitle number="04" />

      {/* Ruled rows matching Figma Image 5 */}
      <div className="divide-y divide-line">
        {certificatesData.map((cert) => (
          <div
            key={cert.id}
            className="py-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
          >
            {/* Left: Medal sprite + Title */}
            <div className="flex items-center gap-4">
              <div className="shrink-0 p-1" aria-hidden="true">
                <MedalSprite className="w-6 h-6" />
              </div>
              <h3 className="font-heading text-base sm:text-lg font-semibold text-text uppercase tracking-wide">
                {cert.title}
              </h3>
            </div>

            {/* Middle & Right: Issuer & Verify link */}
            <div className="flex items-center justify-between sm:justify-end gap-8 pl-10 sm:pl-0 font-heading text-xs uppercase tracking-wider">
              <span className="text-muted">{cert.issuer}</span>
              <a
                href={cert.verifyUrl}
                className="text-muted hover:text-accent underline transition-none min-h-[44px] inline-flex items-center focus-visible:outline-2 focus-visible:outline-accent"
                aria-label={`Verify credential for ${cert.title}`}
              >
                {cert.isPlaceholder ? 'VERIFY' : cert.date}
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
