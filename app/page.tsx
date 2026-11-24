'use client';

import React from 'react';
import { Hero } from '@/components/sections/Hero';
import { Ticker } from '@/components/sections/Ticker';
import { About } from '@/components/sections/About';
import { Roadmap } from '@/components/sections/Roadmap';
import { Projects } from '@/components/sections/Projects';
import { Achievements } from '@/components/sections/Achievements';
import { Contact } from '@/components/sections/Contact';
import { Footer } from '@/components/sections/Footer';
import { RunnerGame } from '@/components/game/RunnerGame';
import { useKeyboardShortcuts } from '@/hooks/useKeyboardShortcuts';

export default function HomePage() {
  useKeyboardShortcuts({
    '1': 'about',
    '2': 'roadmap',
    '3': 'projects',
    '4': 'achievements',
    '5': 'contact',
  });

  return (
    <div className="relative w-full">
      {/* 1. Hero Profile (occupies first screen) */}
      <Hero />

      {/* 2. Runner Mini-Game strip */}
      <div className="max-w-[1120px] mx-auto px-[clamp(32px,6vw,96px)] w-full pb-16">
        <RunnerGame />
      </div>

      {/* 3. Ticker Marquee */}
      <Ticker />

      {/* 4. 01 About */}
      <About />

      {/* 5. 02 Roadmap */}
      <Roadmap />

      {/* 6. 03 Projects */}
      <Projects />

      {/* 7. 04 Achievements */}
      <Achievements />

      {/* 8. 05 Contact */}
      <Contact />

      {/* 9. Footer */}
      <Footer />
    </div>
  );
}
