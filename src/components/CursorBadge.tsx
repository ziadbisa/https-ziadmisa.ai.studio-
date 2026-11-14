import { useEffect, useRef, useState } from 'react';
import { CursorBadgeState } from '../types/portfolio';

interface CursorBadgeProps {
  badge: CursorBadgeState;
}

export function CursorBadge({ badge }: CursorBadgeProps) {
  const badgeRef = useRef<HTMLDivElement | null>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const isPointerFine = window.matchMedia('(pointer: fine)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!isPointerFine || prefersReducedMotion) return;

    setEnabled(true);

    let rafId = 0;
    let targetX = -200;
    let targetY = -200;
    let currentX = -200;
    let currentY = -200;

    const handleMove = (event: MouseEvent) => {
      targetX = event.clientX + 16;
      targetY = event.clientY + 16;
    };

    const loop = () => {
      currentX += (targetX - currentX) * 0.25;
      currentY += (targetY - currentY) * 0.25;

      if (badgeRef.current) {
        badgeRef.current.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;
      }
      rafId = window.requestAnimationFrame(loop);
    };

    window.addEventListener('mousemove', handleMove, { passive: true });
    rafId = window.requestAnimationFrame(loop);

    return () => {
      window.removeEventListener('mousemove', handleMove);
      window.cancelAnimationFrame(rafId);
    };
  }, []);

  if (!enabled) return null;

  return (
    <div
      ref={badgeRef}
      aria-hidden="true"
      className={`pointer-events-none fixed top-0 left-0 z-50 rounded-full border-2 border-[#111111] px-3 py-1 text-xs font-bold tracking-tight shadow-[2px_2px_0px_#111111] transition-opacity duration-150 ${
        badge.visible && badge.label ? 'opacity-100' : 'opacity-0'
      }`}
      style={{
        backgroundColor: badge.bgColor,
        color: badge.textColor ?? '#111111',
      }}
    >
      {badge.label}
    </div>
  );
}
