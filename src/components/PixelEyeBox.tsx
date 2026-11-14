import { useEffect, useRef, useState } from 'react';
import { CursorBadgeState } from '../types/portfolio';

interface PixelEyeBoxProps {
  onHoverChange?: (badge: CursorBadgeState) => void;
}

export function PixelEyeBox({ onHoverChange }: PixelEyeBoxProps) {
  const containerRef = useRef<HTMLButtonElement | null>(null);
  const targetOffsetRef = useRef({ x: 0, y: 0 });
  const currentOffsetRef = useRef({ x: 0, y: 0 });
  const [pupilOffset, setPupilOffset] = useState({ x: 0, y: 0 });
  const [isBlinking, setIsBlinking] = useState(false);

  // Cursor tracking with requestAnimationFrame for 60fps smooth spring-like motion
  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      return;
    }

    let rafId = 0;

    const handleMouseMove = (event: MouseEvent) => {
      const el = containerRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const dx = event.clientX - centerX;
      const dy = event.clientY - centerY;
      const distance = Math.hypot(dx, dy) || 1;
      const maxPull = 450;
      const normalized = Math.min(distance / maxPull, 1);

      const maxTravelX = 9;
      const maxTravelY = 7;

      targetOffsetRef.current = {
        x: (dx / distance) * normalized * maxTravelX,
        y: (dy / distance) * normalized * maxTravelY,
      };
    };

    const tick = () => {
      const cur = currentOffsetRef.current;
      const tgt = targetOffsetRef.current;

      const nextX = cur.x + (tgt.x - cur.x) * 0.18;
      const nextY = cur.y + (tgt.y - cur.y) * 0.18;

      if (Math.abs(nextX - cur.x) > 0.02 || Math.abs(nextY - cur.y) > 0.02) {
        currentOffsetRef.current = { x: nextX, y: nextY };
        setPupilOffset({ x: nextX, y: nextY });
      }

      rafId = window.requestAnimationFrame(tick);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    rafId = window.requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.cancelAnimationFrame(rafId);
    };
  }, []);

  // Periodic natural blink every 4.5 seconds
  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) return;

    let timeoutId: number;
    const intervalId = window.setInterval(() => {
      setIsBlinking(true);
      timeoutId = window.setTimeout(() => {
        setIsBlinking(false);
      }, 150);
    }, 4500);

    return () => {
      window.clearInterval(intervalId);
      window.clearTimeout(timeoutId);
    };
  }, []);

  const triggerBlink = () => {
    setIsBlinking(true);
    window.setTimeout(() => setIsBlinking(false), 160);
  };

  return (
    <button
      ref={containerRef}
      type="button"
      onClick={triggerBlink}
      onMouseEnter={() =>
        onHoverChange?.({
          visible: true,
          label: 'Klik untuk berkedip',
          bgColor: '#FACC15',
          textColor: '#111111',
        })
      }
      onMouseLeave={() =>
        onHoverChange?.({
          visible: false,
          label: '',
          bgColor: '#111111',
        })
      }
      aria-label="Ilustrasi mata pixel-art interaktif, klik untuk berkedip"
      className="group relative flex h-full min-h-[210px] w-full flex-col items-center justify-center overflow-hidden rounded-[16px] border-2 border-[#111111] bg-[#3B82F6] pixel-grid-bg p-6 shadow-[4px_4px_0px_#111111] transition-transform duration-150 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#111111]/30 cursor-pointer"
    >
      {/* Corner pixel ticks */}
      <span className="pointer-events-none absolute top-3 left-3 h-2 w-2 bg-[#111111]" />
      <span className="pointer-events-none absolute top-3 right-3 h-2 w-2 bg-[#111111]" />
      <span className="pointer-events-none absolute bottom-3 left-3 h-2 w-2 bg-[#111111]" />
      <span className="pointer-events-none absolute bottom-3 right-3 h-2 w-2 bg-[#111111]" />

      {/* Pair of stepped Pixel-Art Eyes */}
      <div className="relative z-10 flex items-center justify-center gap-4">
        {[0, 1].map((eyeIndex) => (
          <svg
            key={eyeIndex}
            viewBox="0 0 64 64"
            className="h-20 w-20 sm:h-24 sm:w-24 drop-shadow-[3px_3px_0px_#111111]"
            aria-hidden="true"
          >
            {/* Pixel-stepped black outer outline */}
            <path
              d="M16 4 H48 V8 H56 V16 H60 V48 H56 V56 H48 V60 H16 V56 H8 V48 H4 V16 H8 V8 H16 Z"
              fill="#111111"
            />
            {/* Pixel-stepped white sclera */}
            <path
              d="M18 10 H46 V14 H52 V20 H54 V44 H52 V50 H46 V54 H18 V50 H12 V44 H10 V20 H12 V14 H18 Z"
              fill="#FFFFFF"
            />

            {/* Pupil group or closed eyelid */}
            {isBlinking ? (
              <g>
                <rect x="10" y="10" width="44" height="44" fill="#3B82F6" />
                <rect x="10" y="30" width="44" height="6" fill="#111111" />
              </g>
            ) : (
              <g
                style={{
                  transform: `translate(${pupilOffset.x}px, ${pupilOffset.y}px)`,
                }}
              >
                {/* Stepped pixel iris/pupil */}
                <rect x="22" y="20" width="20" height="24" fill="#111111" />
                <rect x="20" y="24" width="24" height="16" fill="#111111" />
                {/* Crisp white pixel reflection */}
                <rect x="24" y="24" width="6" height="6" fill="#FFFFFF" />
                <rect x="34" y="36" width="4" height="4" fill="#3B82F6" />
              </g>
            )}
          </svg>
        ))}
      </div>

      {/* Subtle caption at bottom */}
      <span className="mt-4 font-mono text-[11px] font-semibold tracking-wider uppercase text-white/95 bg-[#111111] px-2.5 py-0.5 rounded-[6px]">
        Eye Tracker
      </span>
    </button>
  );
}
