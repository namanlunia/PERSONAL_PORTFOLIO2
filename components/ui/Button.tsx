import React from 'react';
import Link from 'next/link';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  'aria-label'?: string;
}

export function Button({
  children,
  variant = 'primary',
  href,
  onClick,
  className = '',
  type = 'button',
  'aria-label': ariaLabel,
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center font-heading text-sm font-semibold tracking-wider uppercase px-5 py-2.5 min-h-[44px] rounded-none border border-line cursor-pointer select-none no-underline transition-none focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2';

  const variantStyles =
    variant === 'primary'
      ? 'bg-text text-bg border-text hover:bg-accent hover:border-accent hover:text-bg'
      : 'bg-surface text-text border-line hover:border-accent hover:text-accent';

  const combinedStyles = `${baseStyles} ${variantStyles} ${className}`;

  if (href) {
    if (href.startsWith('#')) {
      return (
        <a href={href} className={combinedStyles} aria-label={ariaLabel}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedStyles} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={combinedStyles}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}
