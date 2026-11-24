'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
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
    <header className="sticky top-0 z-[100] bg-bg border-b border-line">
      <div className="max-w-[1120px] mx-auto px-4 md:px-6 h-14 flex items-center justify-between">
        <Link
          href="/"
          className="font-heading font-semibold text-base tracking-wider uppercase text-text hover:text-accent no-underline focus-visible:outline-2 focus-visible:outline-accent"
        >
          Naman Lunia
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center" aria-label="Main Navigation">
          <ul className="flex items-center gap-6 list-none m-0 p-0">
            {navItems.map((item) => {
              const isActive = isHome && activeSection === item.id;
              const href = isHome ? item.href : `/${item.href}`;

              return (
                <li key={item.id}>
                  <a
                    href={href}
                    className={`font-heading text-xs font-semibold tracking-wider uppercase no-underline transition-none focus-visible:outline-2 focus-visible:outline-accent ${
                      isActive
                        ? 'text-accent underline underline-offset-4 decoration-accent decoration-2'
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

        {/* Mobile Menu Toggle Button */}
        <button
          ref={toggleBtnRef}
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-controls="mobile-menu-overlay"
          className="md:hidden font-heading text-xs font-semibold tracking-wider text-text border border-line px-3 py-1.5 min-h-[44px] min-w-[44px] inline-flex items-center justify-center uppercase hover:border-accent hover:text-accent cursor-pointer focus-visible:outline-2 focus-visible:outline-accent"
        >
          {isOpen ? 'CLOSE' : 'MENU'}
        </button>
      </div>

      {/* Mobile Text Menu Overlay with Focus Trapping */}
      {isOpen && (
        <div
          id="mobile-menu-overlay"
          ref={menuRef}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation Menu"
          className="md:hidden fixed inset-x-0 top-14 bottom-0 bg-bg/95 border-b border-line p-6 z-50 flex flex-col justify-start"
        >
          <nav aria-label="Mobile Navigation">
            <ul className="flex flex-col gap-4 list-none m-0 p-0">
              {navItems.map((item) => {
                const isActive = isHome && activeSection === item.id;
                const href = isHome ? item.href : `/${item.href}`;

                return (
                  <li key={item.id} className="border-b border-line pb-3">
                    <a
                      href={href}
                      onClick={handleLinkClick}
                      className={`font-heading text-base font-semibold tracking-wider uppercase block no-underline transition-none min-h-[44px] flex items-center ${
                        isActive ? 'text-accent underline underline-offset-4' : 'text-text hover:text-accent'
                      }`}
                    >
                      {item.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
