import React from 'react';

export function Footer() {
  return (
    <footer className="border-t border-line bg-bg py-8 px-[clamp(32px,6vw,96px)] max-w-[1120px] mx-auto w-full">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 font-heading text-xs text-muted uppercase tracking-wider">
        <div>
          <span>© 2026 Naman Lunia</span>
        </div>

        <div>
          <span className="text-muted">Handoff specs</span>
        </div>

        <div>
          <a
            href="#hero"
            className="hover:text-accent underline transition-none focus-visible:outline-2 focus-visible:outline-accent"
          >
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
