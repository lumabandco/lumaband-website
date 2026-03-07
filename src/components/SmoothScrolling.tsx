'use client';
import { ReactNode } from 'react';
import { ReactLenis } from 'lenis/react';

export default function SmoothScrolling({ children }: { children: ReactNode }) {
  return (
    <ReactLenis root options={{ lerp: 0.08, duration: 0.6, smoothWheel: true }}>
      {children}
    </ReactLenis>
  );
}
