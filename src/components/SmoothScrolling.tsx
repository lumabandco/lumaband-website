'use client';
import { ReactNode, useEffect } from 'react';
import { ReactLenis, useLenis } from 'lenis/react';
import { usePathname } from 'next/navigation';

function ScrollReset() {
  const pathname = usePathname();
  const lenis = useLenis();

  useEffect(() => {
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    }
  }, [pathname, lenis]);

  return null;
}

export default function SmoothScrolling({ children }: { children: ReactNode }) {
  return (
    <ReactLenis root options={{ lerp: 0.08, duration: 0.6, smoothWheel: true }}>
      <ScrollReset />
      {children}
    </ReactLenis>
  );
}
