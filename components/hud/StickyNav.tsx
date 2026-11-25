'use client';

import React, { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { navItems } from '@/content/links';
import { useActiveSection } from '@/hooks/useActiveSection';

export function StickyNav() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === '/';
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleBtnRef = useRef<HTMLButtonElement>(null);

  const activeSection = useActiveSection(navItems.map((item) => item.id));

  // Focus trap and Escape key handler for mobile menu
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (!isOpen) return;

      if (e.key === 'Escape') {
        setIsOpen(false);
        toggleBtnRef.current?.focus();
        return;
      }

      if (e.key === 'Tab' && menuRef.current) {
        const focusableElements = menuRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled])'
        );
        if (focusableElements.length === 0) return;

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey && document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        } else if (!e.shiftKey && document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    }

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      <header
        className="fixed z-[50] bg-bg border-b border-line flex items-center"
        style={{
          top: 'var(--frame-gap)',
          left: 'var(--frame-gap)',
          right: 'var(--frame-gap)',
          height: 'var(--header-height)',
        }}
      >
        <div
          className="w-full h-full grid items-center px-4 sm:px-8 md:px-[56px]"
          style={{ gridTemplateColumns: '1fr auto 1fr' }}
        >
          {/* Left Column: Wordmark NL at 28px, Chakra Petch 600 */}
          <div className="flex items-center justify-start">
            <a
              href="#hero"
              className="font-heading font-semibold text-[28px] tracking-wider text-text hover:text-accent no-underline focus-visible:outline-2 focus-visible:outline-accent leading-none"
              aria-label="Scroll to top"
            >
              NL
            </a>
          </div>

          {/* Middle Column: Nav links truly centered (15-16px, uppercase, 40px gap, amber underline on active item) */}
          <nav className="hidden lg:flex items-center justify-center" aria-label="Main Navigation">
            <ul className="flex items-center gap-[40px] list-none m-0 p-0">
              {navItems.map((item) => {
                const isActive = isHome && activeSection === item.id;
                const href = isHome ? item.href : `/${item.href}`;

                return (
                  <li key={item.id} className="flex items-center">
                    <a
                      href={href}
                      className={`font-heading text-[15px] font-semibold tracking-wider uppercase no-underline transition-none focus-visible:outline-2 focus-visible:outline-accent pb-1 whitespace-nowrap ${
                        isActive
                          ? 'text-text border-b-2 border-accent'
                          : 'text-muted hover:text-text'
                      }`}
                    >
                      {item.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Right Column: Empty on desktop; on mobile/tablet (<1024px) the MENU button sits in the right column */}
          <div className="flex items-center justify-end">
            <div className="lg:hidden">
              <button
                ref={toggleBtnRef}
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen}
                aria-controls="mobile-nav-drawer"
                className="px-3 py-1.5 border border-line bg-surface text-text font-heading text-xs font-semibold uppercase tracking-wider hover:border-accent hover:text-accent cursor-pointer focus-visible:outline-2 focus-visible:outline-accent"
              >
                MENU
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      {isOpen && (
        <div
          id="mobile-nav-drawer"
          ref={menuRef}
          role="dialog"
          aria-modal="true"
          aria-label="Navigation Menu"
          className="fixed inset-0 bg-bg z-[60] flex flex-col justify-between p-6 overflow-y-auto"
          style={{ top: 'calc(var(--frame-gap) + var(--header-height))' }}
        >
          <div className="flex justify-between items-center pb-4 border-b border-line">
            <span className="font-heading text-xs font-semibold tracking-wider text-muted uppercase">
              INDEX // NAVIGATION
            </span>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="font-heading text-xs font-semibold uppercase tracking-wider text-muted hover:text-text px-2 py-1 border border-line cursor-pointer"
            >
              [CLOSE]
            </button>
          </div>

          <nav className="my-auto py-8">
            <ul className="flex flex-col gap-6 list-none m-0 p-0">
              {navItems.map((item) => {
                const isActive = isHome && activeSection === item.id;
                const href = isHome ? item.href : `/${item.href}`;

                return (
                  <li key={item.id}>
                    <a
                      href={href}
                      onClick={handleLinkClick}
                      className={`block font-heading text-xl sm:text-2xl font-semibold tracking-wider uppercase no-underline transition-none min-h-[44px] flex items-center ${
                        isActive
                          ? 'text-accent border-l-2 border-accent pl-3'
                          : 'text-text hover:text-accent'
                      }`}
                    >
                      {item.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="pt-4 border-t border-line text-xs font-heading text-muted uppercase tracking-wider">
            <span>KEYBOARD SHORTCUTS: 1 TO 6</span>
          </div>
        </div>
      )}
    </>
  );
}
