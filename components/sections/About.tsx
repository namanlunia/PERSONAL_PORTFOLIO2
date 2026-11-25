import React from 'react';
import { profileData } from '@/content/profile';
import { SectionTitle } from '@/components/hud/SectionTitle';

export function About() {
  return (
    <section
      id="about"
      aria-label="01 About me"
      className="py-[clamp(64px,8vw,112px)] px-[clamp(32px,6vw,96px)] max-w-[1120px] mx-auto w-full"
    >
      <SectionTitle number="01" title="About me" />

      <div className="border border-line bg-surface p-6 md:p-8">
        <p className="font-body text-base md:text-lg text-text leading-relaxed">
          {profileData.about.paragraph}
        </p>
      </div>
    </section>
  );
}
