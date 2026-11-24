import React from 'react';

export function Footer() {
  return (
    <footer className="border-t border-line bg-bg py-8 px-4 md:px-6">
      <div className="max-w-[1120px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4 font-heading text-xs text-muted uppercase tracking-wider">
        <div>
          <span>© 2026 NAMAN LUNIA {'//'} PLAYER PROFILE</span>
        </div>

        <div className="hidden lg:block text-center text-[11px] text-muted">
          SHORTCUTS: [1] ABOUT &nbsp;|&nbsp; [2] ROADMAP &nbsp;|&nbsp; [3] PROJECTS &nbsp;|&nbsp; [4] ACHIEVEMENTS &nbsp;|&nbsp; [5] CONTACT
        </div>

        <div>
          <a
            href="#hero"
            className="hover:text-accent underline transition-none focus-visible:outline-2 focus-visible:outline-accent"
          >
            RETURN TO TOP ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
