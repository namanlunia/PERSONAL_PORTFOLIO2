import React from 'react';
import { contactData } from '@/content/links';
import { SectionTitle } from '@/components/hud/SectionTitle';

export function Contact() {
  return (
    <section
      id="contact"
      aria-label="06 Contact"
      className="py-[clamp(64px,8vw,112px)] px-[clamp(32px,6vw,96px)] max-w-[1120px] mx-auto w-full"
    >
      <SectionTitle number="06" title="Contact" />

      {/* Inverted Colours Panel */}
      <div className="bg-text text-bg border border-text p-8 md:p-12 select-none">
        <h3 className="font-heading text-2xl md:text-3xl font-semibold uppercase tracking-wider mb-4 text-bg">
          {contactData.heading}
        </h3>
        <p className="font-body text-base md:text-lg mb-8 leading-relaxed max-w-2xl text-bg/90">
          {contactData.invitation}
        </p>

        {/* 3 Contact Links */}
        <div className="divide-y divide-bg/20 border-t border-b border-bg/20">
          {contactData.links.map((link) => (
            <div
              key={link.type}
              className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
            >
              <div>
                <span className="font-heading text-xs font-semibold uppercase tracking-wider text-bg/70 block">
                  {link.type}
                </span>
                <span className="font-heading text-sm md:text-base font-semibold text-bg">
                  {link.label}
                </span>
                {link.note && (
                  <span className="block font-body text-xs text-bg/80 mt-0.5">
                    ({link.note})
                  </span>
                )}
              </div>
              <a
                href={link.url}
                target={link.url.startsWith('mailto:') ? undefined : '_blank'}
                rel={link.url.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                className="font-heading text-xs font-bold tracking-wider text-bg underline hover:opacity-80 self-start sm:self-auto focus-visible:outline-2 focus-visible:outline-bg"
              >
                {link.action}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
