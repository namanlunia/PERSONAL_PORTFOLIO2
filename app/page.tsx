'use client';

import React from 'react';
import { Hero } from '@/components/sections/Hero';
import { RunnerGame } from '@/components/game/RunnerGame';
import { Ticker } from '@/components/sections/Ticker';
import { About } from '@/components/sections/About';
import { Skills } from '@/components/sections/Skills';
import { Contributions } from '@/components/sections/Contributions';
import { Projects } from '@/components/sections/Projects';
import { Education } from '@/components/sections/Education';
import { Contact } from '@/components/sections/Contact';
import { Footer } from '@/components/sections/Footer';
import { useKeyboardShortcuts } from '@/hooks/useKeyboardShortcuts';

export default function HomePage() {
  useKeyboardShortcuts({
    '1': 'about',
    '2': 'skills',
    '3': 'contributions',
    '4': 'projects',
    '5': 'education',
    '6': 'contact',
  });

  return (
    <div className="relative w-full">
      {/* Hero Profile (occupies first screen) */}
      <Hero />

      {/* Runner Mini-Game strip */}
      <div className="max-w-[1120px] mx-auto px-[clamp(32px,6vw,96px)] w-full pb-16">
        <RunnerGame />
      </div>

      {/* Ticker Marquee */}
      <Ticker />

      {/* 01 About me */}
      <About />

      {/* 02 Skills */}
      <Skills />

      {/* 03 S&AI open-source contributions */}
      <Contributions />

      {/* 04 Projects */}
      <Projects />

      {/* 05 Education and achievements */}
      <Education />

      {/* 06 Contact */}
      <Contact />

      {/* Footer */}
      <Footer />
    </div>
  );
}
