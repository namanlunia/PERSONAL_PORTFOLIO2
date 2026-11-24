import React from 'react';

interface StatusTagProps {
  status: 'IN PROGRESS' | 'COMPLETED' | 'PLANNED';
  variant?: 'progress' | 'completed' | 'planned';
  className?: string;
}

export function StatusTag({ status, variant, className = '' }: StatusTagProps) {
  const resolvedVariant =
    variant ||
    (status === 'IN PROGRESS'
      ? 'progress'
      : status === 'COMPLETED'
      ? 'completed'
      : 'planned');

  const variantStyles = {
    progress: 'border-accent text-accent',
    completed: 'border-muted text-text',
    planned: 'border-line text-muted',
  }[resolvedVariant];

  return (
    <span
      className={`inline-block font-heading text-[11px] font-semibold tracking-wider uppercase px-2 py-0.5 border rounded-none bg-bg ${variantStyles} ${className}`}
    >
      {status}
    </span>
  );
}

export function ToolTag({ name, className = '' }: { name: string; className?: string }) {
  return (
    <span
      className={`inline-block font-heading text-xs font-medium tracking-wide px-2 py-1 border border-line bg-surface-2 text-text rounded-none ${className}`}
    >
      {name}
    </span>
  );
}
