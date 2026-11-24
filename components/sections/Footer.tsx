import React from 'react';

export function Footer() {
  return (
    <footer className="border-t border-line bg-bg py-8 px-4 md:px-6">
      <div className="max-w-[1120px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 font-heading text-xs text-muted uppercase tracking-wider">
        {/* Left: Copyright matching Figma Image 6 */}
        <div>
          <span>© 2026 Naman Lunia</span>
        </div>

        {/* Center: Handoff specs matching Figma Image 6 */}
        <div>
          <span className="text-muted">Handoff specs</span>
        </div>

        {/* Right: Back to top link matching Figma Image 6 */}
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
