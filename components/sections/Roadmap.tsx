'use client';

import React, { useState } from 'react';
import { roadmapData, RoadmapNode } from '@/content/roadmap';
import { SectionTitle } from '@/components/hud/SectionTitle';
import { Panel } from '@/components/ui/Panel';
import { Divider } from '@/components/ui/Divider';

export function Roadmap() {
  const defaultSelected =
    roadmapData.find((node) => node.statusType === 'progress') || roadmapData[0];
  const [selectedNode, setSelectedNode] = useState<RoadmapNode>(defaultSelected);

  return (
    <section
      id="roadmap"
      aria-label="02 / Roadmap"
      className="py-16 md:py-24 px-4 md:px-6 max-w-[1120px] mx-auto w-full"
    >
      <SectionTitle number="02" title="Roadmap" />

      <p className="font-body text-base text-muted max-w-2xl mb-8 leading-relaxed">
        Progression skill tree mapping foundational competencies, active targets, and long-term milestones. Select a node to inspect telemetry.
      </p>

      {/* Skill Tree Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {roadmapData.map((node, index) => {
          const isSelected = selectedNode.id === node.id;
          const isProgress = node.statusType === 'progress';
          const isUnlocked = node.statusType === 'unlocked';

          return (
            <button
              key={node.id}
              type="button"
              onClick={() => setSelectedNode(node)}
              className={`text-left p-4 border rounded-none min-h-[96px] flex flex-col justify-between cursor-pointer transition-none focus-visible:outline-2 focus-visible:outline-accent ${
                isSelected
                  ? 'border-accent bg-surface-2'
                  : isProgress
                  ? 'border-accent bg-surface'
                  : 'border-line bg-surface hover:border-muted'
              }`}
            >
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="font-heading text-xs text-muted uppercase font-semibold">
                  0{index + 1} {'//'}
                </span>
                <span
                  className={`font-heading text-[11px] font-semibold tracking-wider uppercase px-2 py-0.5 border rounded-none ${
                    isProgress
                      ? 'border-accent text-accent bg-bg'
                      : isUnlocked
                      ? 'border-muted text-text bg-bg'
                      : 'border-line text-muted bg-bg'
                  }`}
                >
                  {node.status}
                </span>
              </div>

              <div
                className={`font-heading text-sm font-semibold tracking-wide uppercase leading-tight ${
                  isSelected ? 'text-accent' : 'text-text'
                }`}
              >
                {node.label}
              </div>
            </button>
          );
        })}
      </div>

      {/* Selected Node Details Box */}
      <Panel variant="surface" className="mb-12">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-line pb-3 mb-4">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 bg-accent inline-block" aria-hidden="true" />
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-text">
              NODE INSPECTOR: {selectedNode.label}
            </h3>
          </div>
          <span className="font-heading text-xs font-semibold uppercase tracking-wider text-accent">
            STATUS: {selectedNode.status}
          </span>
        </div>

        <p className="font-body text-base text-text leading-relaxed">
          {selectedNode.note}
        </p>
      </Panel>

      <Divider />
    </section>
  );
}
