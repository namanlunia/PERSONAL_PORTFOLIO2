import React from 'react';

export function Footer() {
  return (
    <footer className="w-full border-t border-line py-8 mt-12 bg-surface">
      <div className="max-w-[1120px] mx-auto px-[clamp(32px,6vw,96px)] flex flex-col sm:flex-row items-center justify-between gap-4 font-heading text-xs text-muted uppercase tracking-wider">
        <div>
          <span>Naman Lunia © 2026</span>
        </div>

        <div className="text-center">
          <span>Press 1 to 6 to jump between sections</span>
        </div>

        <div>
          <a
            href="#hero"
            className="text-muted hover:text-accent no-underline focus-visible:outline-2 focus-visible:outline-accent"
          >
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
