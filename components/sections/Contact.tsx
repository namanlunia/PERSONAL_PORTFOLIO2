import React from 'react';
import { contactData } from '@/content/links';

export function Contact() {
  return (
    <section
      id="contact"
      aria-label="05 / Contact"
      className="my-16 md:my-24 px-6 md:px-12 py-12 md:py-16 max-w-[1120px] mx-auto w-full bg-[#E8E4D8] text-[#0F1214] border border-[#2B3439] relative"
    >
      {/* 4 Corner brackets for inverted panel */}
      <span
        aria-hidden="true"
        className="absolute -top-[1px] -left-[1px] w-2 h-2 border-t-2 border-l-2 border-[#0F1214] pointer-events-none"
      />
      <span
        aria-hidden="true"
        className="absolute -top-[1px] -right-[1px] w-2 h-2 border-t-2 border-r-2 border-[#0F1214] pointer-events-none"
      />
      <span
        aria-hidden="true"
        className="absolute -bottom-[1px] -left-[1px] w-2 h-2 border-b-2 border-l-2 border-[#0F1214] pointer-events-none"
      />
      <span
        aria-hidden="true"
        className="absolute -bottom-[1px] -right-[1px] w-2 h-2 border-b-2 border-r-2 border-[#0F1214] pointer-events-none"
      />

      {/* Header */}
      <div className="flex items-baseline gap-4 md:gap-6 mb-6 select-none">
        <span
          aria-hidden="true"
          className="font-heading text-[clamp(4rem,10vw,8rem)] font-semibold leading-[0.8] text-transparent shrink-0 [-webkit-text-stroke:1px_#0F1214]"
        >
          05
        </span>
        <div className="flex items-center gap-3">
          {/* Single small amber square as the only accent */}
          <span className="w-3 h-3 bg-accent inline-block shrink-0" aria-hidden="true" />
          <h2 className="font-heading text-[clamp(2rem,5vw,3.5rem)] font-semibold uppercase tracking-wider text-[#0F1214] leading-[1.05]">
            Contact
          </h2>
        </div>
      </div>

      <p className="font-body text-base md:text-lg text-[#0F1214] max-w-2xl mb-8 leading-relaxed">
        {contactData.lead}
      </p>

      {/* Contact Links */}
      <div className="border-t border-[#0F1214]/20 pt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {contactData.links.map((link) => (
          <div key={link.type} className="flex flex-col">
            <span className="font-heading text-xs font-semibold uppercase tracking-wider text-[#0F1214]/60 mb-1">
              {link.type}:
            </span>
            <a
              href={link.url}
              className="font-heading text-sm md:text-base font-semibold text-[#0F1214] underline underline-offset-4 hover:text-[#0F1214] hover:bg-[#0F1214]/10 p-1 -ml-1 transition-none min-h-[44px] inline-flex items-center break-all focus-visible:outline-2 focus-visible:outline-accent"
              {...(link.type === 'Email' ? {} : { target: '_blank', rel: 'noopener noreferrer' })}
            >
              {link.label}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
