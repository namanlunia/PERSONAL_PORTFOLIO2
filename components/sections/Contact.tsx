import React from 'react';
import { contactData } from '@/content/links';
import { SectionTitle } from '@/components/hud/SectionTitle';

export function Contact() {
  return (
    <section
      id="contact"
      aria-label="05 / Contact"
      className="py-[clamp(64px,8vw,112px)] px-[clamp(32px,6vw,96px)] max-w-[1120px] mx-auto w-full"
    >
      {/* Section numeral 05 in amber matching Figma Image 6 */}
      <SectionTitle number="05" />

      {/* Two columns matching Figma Image 6 */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
        {/* Left Column: Heading & Context */}
        <div className="lg:col-span-6 space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-normal leading-[1.15] text-text">
            {contactData.heading}
          </h2>
          <p className="font-body text-base md:text-lg text-muted leading-relaxed">
            {contactData.lead}
          </p>
        </div>

        {/* Right Column: Ruled list of contacts matching Figma Image 6 */}
        <div className="lg:col-span-6 divide-y divide-line">
          {contactData.links.map((link) => (
            <div
              key={link.type}
              className="py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
            >
              <div className="flex items-baseline gap-6">
                <span className="font-heading text-xs font-semibold text-muted uppercase tracking-wider w-20 shrink-0">
                  {link.type}
                </span>
                <span className="font-body text-sm sm:text-base text-text break-all">
                  {link.label}
                </span>
              </div>

              <div className="shrink-0 pl-26 sm:pl-0">
                <a
                  href={link.url}
                  className="px-3 py-1.5 border border-line bg-surface text-text font-heading text-xs font-semibold uppercase tracking-wider hover:border-accent hover:text-accent transition-none inline-flex items-center min-h-[44px] focus-visible:outline-2 focus-visible:outline-accent"
                  {...(link.type === 'Email' ? {} : { target: '_blank', rel: 'noopener noreferrer' })}
                >
                  {link.action}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
