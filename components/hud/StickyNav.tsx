'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navItems } from '@/content/links';
import { useActiveSection } from '@/hooks/useActiveSection';
import { XpBar } from './XpBar';

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
    <header className="sticky top-0 z-[100] bg-bg/95 backdrop-blur-none border-b border-line">
      {/* Main Nav Bar */}
      <div className="max-w-[1120px] mx-auto px-4 md:px-6 h-14 flex items-center justify-between">
        {/* Left: Logo matching Figma P/01 */}
        <Link
          href="/"
          className="font-heading font-bold text-lg tracking-wider text-text hover:text-accent no-underline focus-visible:outline-2 focus-visible:outline-accent"
        >
          P/01
        </Link>

        {/* Center: Desktop Nav Items matching Figma (01 Home, 02 About, 03 Roadmap, 04 Projects, 05 Contact) */}
        <nav className="hidden md:flex items-center" aria-label="Main Navigation">
          <ul className="flex items-center gap-8 list-none m-0 p-0">
            {navItems.map((item) => {
              const isActive = isHome && activeSection === item.id;
              const href = isHome ? item.href : `/${item.href}`;

              return (
                <li key={item.id}>
                  <a
                    href={href}
                    className={`font-heading text-xs font-semibold tracking-wider uppercase no-underline transition-none focus-visible:outline-2 focus-visible:outline-accent pb-1 ${
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

        {/* Right: MENU button in 1px border box matching Figma */}
        <div>
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

      {/* Sub-header rule with XP Progress bar (Matches Figma) */}
      <div className="border-t border-line/60 bg-bg">
        <div className="max-w-[1120px] mx-auto px-4 md:px-6 py-1.5 flex items-center justify-between">
          <XpBar />
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      {isOpen && (
        <div
          id="mobile-nav-drawer"
          ref={menuRef}
          role="dialog"
          aria-modal="true"
          aria-label="Navigation Menu"
          className="fixed inset-0 top-14 bg-bg z-[200] flex flex-col justify-between p-6 overflow-y-auto"
        >
          <div className="flex justify-between items-center pb-4 border-b border-line">
            <span className="font-heading text-xs font-semibold tracking-wider text-muted uppercase">
              INDEX // NAVIGATION
            </span>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="font-heading text-xs font-semibold uppercase tracking-wider text-muted hover:text-text px-2 py-1 border border-line"
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
                      className={`block font-heading text-2xl font-semibold tracking-wider uppercase no-underline transition-none min-h-[44px] flex items-center ${
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
            <span>KEYBOARD SHORTCUTS: 1 TO 5</span>
          </div>
        </div>
      )}
    </header>
  );
}
