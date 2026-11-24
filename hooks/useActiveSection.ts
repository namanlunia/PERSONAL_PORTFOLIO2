'use client';

import { useState, useEffect } from 'react';

export function useActiveSection(sectionIds: string[]): string {
  const [activeSection, setActiveSection] = useState<string>('hero');

  useEffect(() => {
    function updateActiveSection() {
      const scrollY = window.scrollY;
      const triggerPoint = scrollY + window.innerHeight * 0.35;

      let current = sectionIds[0] || 'hero';
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= triggerPoint) {
          current = id;
        }
      }
      setActiveSection(current);
    }

    window.addEventListener('scroll', updateActiveSection, { passive: true });
    updateActiveSection();

    return () => window.removeEventListener('scroll', updateActiveSection);
  }, [sectionIds]);

  return activeSection;
}
