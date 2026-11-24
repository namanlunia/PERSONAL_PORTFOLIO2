import React from 'react';
import { certificatesData, certificatesLead } from '@/content/certificates';
import { SectionTitle } from '@/components/hud/SectionTitle';
import { MedalSprite } from '@/components/pixel/Medal';
import { Divider } from '@/components/ui/Divider';

export function Achievements() {
  const totalCount = certificatesData.length;

  return (
    <section
      id="achievements"
      aria-label="04 / Achievements"
      className="py-16 md:py-24 px-4 md:px-6 max-w-[1120px] mx-auto w-full"
    >
      <SectionTitle number="04" title="Achievements" />

      {/* Header counter readout */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4 pb-3 border-b border-line">
        <div className="font-heading text-xs font-semibold uppercase tracking-wider text-accent flex items-center gap-2">
          <span className="w-2 h-2 bg-accent inline-block" aria-hidden="true" />
          <span>CREDENTIAL LOG {'//'} {totalCount} OF {totalCount} UNLOCKED</span>
        </div>
        <span className="font-heading text-xs uppercase tracking-wider text-muted">
          ISSUER {'//'} IBM SKILLSBUILD
        </span>
      </div>

      <p className="font-body text-base text-muted max-w-3xl mb-8 leading-relaxed">
        {certificatesLead}
      </p>

      {/* Full-width ruled rows for certificates */}
      <div className="border-t border-line divide-y divide-line mb-12">
        {certificatesData.map((cert) => (
          <div
            key={cert.id}
            className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-surface/30 transition-none"
          >
            <div className="flex items-center gap-4">
              <div className="shrink-0 p-1.5 bg-surface-2 border border-line" aria-hidden="true">
                <MedalSprite className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-heading text-sm md:text-base font-semibold text-text uppercase tracking-wide">
                  {cert.title}
                </h4>
                <div className="font-heading text-xs text-muted uppercase tracking-wider mt-0.5">
                  {cert.issuer}
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between sm:justify-end gap-6 pl-12 sm:pl-0">
              <time
                dateTime={cert.dateIso}
                className="font-heading text-xs text-muted uppercase tracking-wider"
              >
                {cert.date}
              </time>
              <a
                href={cert.verifyUrl}
                aria-label={`Verify credential for ${cert.title}`}
                className="font-heading text-xs font-semibold text-muted hover:text-accent underline tracking-wider uppercase min-h-[44px] inline-flex items-center focus-visible:outline-2 focus-visible:outline-accent"
              >
                [VERIFY CREDENTIAL]
              </a>
            </div>
          </div>
        ))}
      </div>

      <Divider />
    </section>
  );
}
