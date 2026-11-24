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
import { useKeyboardShortcuts } from '@/hooks/useKeyboardShortcuts';

export default function HomePage() {
  useKeyboardShortcuts({
    '1': 'hero',
    '2': 'about',
    '3': 'roadmap',
    '4': 'projects',
    '5': 'contact',
  });

  return (
    <div className="relative w-full">
      <Hero />
      <Ticker />
      <About />
      <Roadmap />
      <Projects />
      <Achievements />
      <Contact />
      <Footer />
    </div>
  );
}
