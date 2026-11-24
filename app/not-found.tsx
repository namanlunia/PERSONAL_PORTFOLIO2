import React from 'react';
import { Panel } from '@/components/ui/Panel';
import { Button } from '@/components/ui/Button';

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 md:px-6">
      <Panel variant="surface" className="max-w-md w-full text-center p-6 md:p-8">
        <div className="font-heading text-xs font-semibold uppercase tracking-wider text-accent mb-2">
          ERROR {'//'} CODE 0x404
        </div>

        <h1 className="font-heading text-3xl md:text-4xl font-semibold uppercase tracking-wide text-text mb-4">
          LEVEL NOT FOUND
        </h1>

        <p className="font-body text-sm text-muted mb-8 leading-relaxed">
          The requested coordinate or quest file does not exist in this sector. Verify the route or return to the spawn point.
        </p>

        <div className="flex justify-center">
          <Button href="/" variant="primary">
            [RETURN TO SPAWN]
          </Button>
        </div>
      </Panel>
    </div>
  );
}
