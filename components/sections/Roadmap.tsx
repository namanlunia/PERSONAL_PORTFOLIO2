'use client';

import React, { useState } from 'react';
import { roadmapData, RoadmapNode } from '@/content/roadmap';
import { SectionTitle } from '@/components/hud/SectionTitle';

export function Roadmap() {
  const defaultSelected =
    roadmapData.find((node) => node.statusType === 'progress') || roadmapData[4];
  const [selectedNode, setSelectedNode] = useState<RoadmapNode>(defaultSelected);

  return (
    <section
      id="roadmap"
      aria-label="02 / Roadmap"
      className="py-[clamp(64px,8vw,112px)] px-[clamp(32px,6vw,96px)] max-w-[1120px] mx-auto w-full"
    >
      {/* Section numeral in amber with hairline divider extending right */}
      <SectionTitle number="02" />

      {/* Main Track & Detail Panel matching Figma Image 3 */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left / Center: Connected Horizontal Track */}
        <div className="lg:col-span-8 flex flex-col md:flex-row items-stretch md:items-center gap-4 py-4 overflow-x-auto">
          {roadmapData.slice(4, 7).map((node, index, arr) => {
            const isSelected = selectedNode.id === node.id;
            const statusLabel =
              node.statusType === 'progress'
                ? 'NOW'
                : node.statusType === 'next'
                ? index === 1
                  ? 'NEXT'
                  : 'LATER'
                : 'UNLOCKED';

            return (
              <React.Fragment key={node.id}>
                {/* Node Box */}
                <button
                  type="button"
                  onClick={() => setSelectedNode(node)}
                  className={`text-left p-5 border rounded-none min-w-[200px] flex-1 cursor-pointer transition-none focus-visible:outline-2 focus-visible:outline-accent ${
                    isSelected
                      ? 'border-line bg-surface/60'
                      : 'border-line/60 bg-surface/20 hover:border-line'
                  }`}
                >
                  {/* Square icon */}
                  <div className="mb-6">
                    {isSelected ? (
                      <span className="w-3.5 h-3.5 bg-accent inline-block" aria-hidden="true" />
                    ) : (
                      <span className="w-3.5 h-3.5 border border-line inline-block" aria-hidden="true" />
                    )}
                  </div>

                  {/* Status label in amber */}
                  <div className="font-heading text-xs font-semibold text-accent uppercase tracking-wider mb-2">
                    {statusLabel}
                  </div>

                  {/* Title */}
                  <div className="font-heading text-base font-semibold text-text uppercase tracking-wide">
                    {node.label}
                  </div>
                </button>

                {/* Connecting hairline divider between nodes */}
                {index < arr.length - 1 && (
                  <div className="hidden md:block w-8 h-[1px] bg-line shrink-0" aria-hidden="true" />
                )}
              </React.Fragment>
            );
          })}
        </div>

        {/* Right: Selected Node Detail Card matching Figma Image 3 */}
        <div className="lg:col-span-4">
          <div className="border border-line bg-surface/40 p-6 md:p-8">
            <div className="self-start mb-6">
              <span className="px-2.5 py-1 border border-line bg-surface font-heading text-[11px] font-semibold text-accent uppercase tracking-wider">
                {selectedNode.status}
              </span>
            </div>

            <h3 className="font-heading text-xl md:text-2xl font-semibold text-text uppercase tracking-wide mb-4">
              {selectedNode.label}
            </h3>

            <p className="font-body text-sm md:text-base text-muted leading-relaxed">
              {selectedNode.note}
            </p>
          </div>
        </div>
      </div>

      {/* Full Skill Tree History toggle */}
      <details className="mt-8 border-t border-line/60 pt-4">
        <summary className="font-heading text-xs font-semibold uppercase tracking-wider text-muted hover:text-accent cursor-pointer select-none py-1 focus-visible:outline-2 focus-visible:outline-accent list-none inline-flex items-center gap-2">
          <span className="text-accent" aria-hidden="true">[+]</span>
          <span>VIEW FULL SKILL TREE ARCHIVE ({roadmapData.length} NODES)</span>
        </summary>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 mt-4">
          {roadmapData.map((node) => (
            <button
              key={node.id}
              type="button"
              onClick={() => setSelectedNode(node)}
              className={`text-left p-3 border rounded-none text-xs font-heading cursor-pointer transition-none ${
                selectedNode.id === node.id
                  ? 'border-accent bg-surface-2 text-text'
                  : 'border-line bg-surface text-muted hover:text-text'
              }`}
            >
              <div className="text-[10px] text-accent mb-1 uppercase font-semibold">
                {node.status}
              </div>
              <div className="font-semibold uppercase">{node.label}</div>
            </button>
          ))}
        </div>
      </details>
    </section>
  );
}
