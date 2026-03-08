'use client';
import { ReactNode, useEffect } from 'react';
import { ReactLenis, useLenis } from 'lenis/react';
import { usePathname } from 'next/navigation';

function ScrollReset() {
  const pathname = usePathname();
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) return;

    // Check if there's a hash in the URL
    const hash = window.location.hash;
    
    if (hash) {
      // If there's a hash, scroll to that element
      lenis.scrollTo(hash, { immediate: true });
    } else {
      // If no hash, scroll to the top
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
