import React from 'react';
import { contributionsHeader, contributionsData } from '@/content/contributions';
import { SectionTitle } from '@/components/hud/SectionTitle';

export function Contributions() {
  return (
    <section
      id="contributions"
      aria-label="03 S&AI open-source contributions"
      className="py-[clamp(64px,8vw,112px)] px-[clamp(32px,6vw,96px)] max-w-[1120px] mx-auto w-full"
    >
      <SectionTitle number="03" title="S&AI open-source contributions" />

      {/* Heading Block */}
      <div className="border border-line bg-surface p-6 mb-8">
        <div className="font-heading text-sm font-semibold text-text">
          Repository:{' '}
          <a
            href={contributionsHeader.repositoryUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent underline hover:text-text focus-visible:outline-2 focus-visible:outline-accent"
          >
            {contributionsHeader.repositoryName}
          </a>
          <span className="text-muted ml-2">({contributionsHeader.forkNotice})</span>
        </div>
        <p className="mt-2 font-body text-xs md:text-sm text-muted mb-0">
          {contributionsHeader.summary}
        </p>
      </div>

      {/* Ruled list of 10 PRs (newest first) */}
      <div className="divide-y divide-line border border-line bg-surface">
        {contributionsData.map((pr) => (
          <article key={pr.taskId} className="p-6">
            {/* Header: Task ID, PR Link, File, Status */}
            <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
              <div className="flex items-center gap-3">
                <span className="px-2.5 py-1 border border-line bg-surface-2 font-heading text-xs font-semibold text-accent tracking-wider">
                  {pr.taskId}
                </span>
                <span className="font-heading text-xs text-muted tracking-wider">
                  FILE: <span className="text-text font-medium">{pr.fileModule}</span>
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="px-2 py-0.5 border border-line bg-surface-2 font-heading text-[11px] font-semibold text-accent uppercase tracking-wider">
                  STATUS: {pr.status}
                </span>
                <a
                  href={pr.prUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-heading text-xs font-semibold text-accent hover:underline inline-flex items-center gap-1 focus-visible:outline-2 focus-visible:outline-accent"
                >
                  PR #{pr.prNumber} ↗
                </a>
              </div>
            </div>

            {/* PR Title */}
            <h3 className="font-heading text-base md:text-lg font-semibold text-text mb-4">
              <a
                href={pr.prUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text hover:text-accent no-underline transition-none focus-visible:outline-2 focus-visible:outline-accent"
              >
                {pr.prTitle}
              </a>
            </h3>

            {/* Content Details: What changed & Technical rationale */}
            <div className="space-y-3 font-body text-sm leading-relaxed text-muted">
              <div>
                <span className="font-heading text-xs font-semibold uppercase tracking-wider text-text block mb-1">
                  What changed
                </span>
                <p className="text-text/90 m-0">{pr.whatChanged}</p>
              </div>

              <div>
                <span className="font-heading text-xs font-semibold uppercase tracking-wider text-text block mb-1">
                  Technical rationale
                </span>
                <p className="m-0">{pr.technicalRationale}</p>
              </div>

              <div>
                <span className="font-heading text-xs font-semibold uppercase tracking-wider text-text block mb-1">
                  How to verify
                </span>
                <code className="inline-block px-3 py-1 bg-surface-2 border border-line font-mono text-xs text-text select-all">
                  {pr.howToVerify}
                </code>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
