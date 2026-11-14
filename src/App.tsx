import { ArrowUpRight } from 'lucide-react';
import { useState } from 'react';
import { BentoCards } from './components/BentoCards';
import { CursorBadge } from './components/CursorBadge';
import { DetailModal } from './components/DetailModal';
import { PixelEyeBox } from './components/PixelEyeBox';
import {
  INITIAL_PHOTO_SLOTS,
  INITIAL_VIDEO_SLOTS,
  PROFILE_DATA,
} from './data/portfolioData';
import {
  ActiveSection,
  CursorBadgeState,
  PhotoSlot,
  VideoSlot,
} from './types/portfolio';

export default function App() {
  const [activeSection, setActiveSection] = useState<ActiveSection>(null);
  const [videoSlots, setVideoSlots] = useState<VideoSlot[]>(INITIAL_VIDEO_SLOTS);
  const [photoSlots, setPhotoSlots] = useState<PhotoSlot[]>(INITIAL_PHOTO_SLOTS);
  const [cursorBadge, setCursorBadge] = useState<CursorBadgeState>({
    visible: false,
    label: '',
    bgColor: '#111111',
  });

  const handleUpdateVideoSlot = (slotId: string, videoUrl?: string) => {
    setVideoSlots((prev) =>
      prev.map((slot) => (slot.id === slotId ? { ...slot, videoUrl } : slot))
    );
  };

  const handleUpdatePhotoSlot = (slotId: string, imageUrl?: string) => {
    setPhotoSlots((prev) =>
      prev.map((slot) => (slot.id === slotId ? { ...slot, imageUrl } : slot))
    );
  };

  return (
    <div className="min-h-screen bg-[#EAE5DC] px-3 py-4 sm:px-6 sm:py-6 lg:px-10 lg:py-8">
      <CursorBadge badge={cursorBadge} />

      {/* Outer Neo-Brutalist Framed Canvas */}
      <div className="mx-auto flex w-full max-w-[1400px] flex-col rounded-[20px] border-2 border-[#111111] bg-[#EAE5DC] shadow-[6px_6px_0px_#111111]">
        {/* Top Navigation Bar (Strict 3-Zone Contract) */}
        <header className="flex flex-wrap items-center justify-between gap-4 sm:gap-8 border-b-2 border-[#111111] px-5 py-4 sm:px-8">
          {/* Zone 1: Single-line Brand Wordmark */}
          <button
            type="button"
            onClick={() => setActiveSection(null)}
            className="font-display text-lg font-extrabold tracking-tight text-[#111111] whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:underline"
          >
            {PROFILE_DATA.name}
          </button>

          {/* Zone 2: Clean Single-Line Navigation Links */}
          <nav
            aria-label="Navigasi portofolio"
            className="flex items-center gap-2 sm:gap-3 overflow-x-auto"
          >
            <button
              type="button"
              onClick={() => setActiveSection('biografi')}
              className={`rounded-full border-2 border-[#111111] px-4 py-1.5 text-xs font-bold whitespace-nowrap shrink-0 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#111111] ${
                activeSection === 'biografi'
                  ? 'bg-[#A88BFA] text-[#111111]'
                  : 'bg-white text-[#111111] hover:bg-[#A88BFA]'
              }`}
            >
              Biografi
            </button>
            <button
              type="button"
              onClick={() => setActiveSection('kegiatan')}
              className={`rounded-full border-2 border-[#111111] px-4 py-1.5 text-xs font-bold whitespace-nowrap shrink-0 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#111111] ${
                activeSection === 'kegiatan'
                  ? 'bg-[#FF5A36] text-[#111111]'
                  : 'bg-white text-[#111111] hover:bg-[#FF5A36]'
              }`}
            >
              Kegiatan
            </button>
            <button
              type="button"
              onClick={() => setActiveSection('karya')}
              className={`rounded-full border-2 border-[#111111] px-4 py-1.5 text-xs font-bold whitespace-nowrap shrink-0 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#111111] ${
                activeSection === 'karya'
                  ? 'bg-[#FACC15] text-[#111111]'
                  : 'bg-white text-[#111111] hover:bg-[#FACC15]'
              }`}
            >
              Karya
            </button>
          </nav>

          {/* Zone 3: Single Primary Action */}
          <div className="shrink-0">
            <a
              href={PROFILE_DATA.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border-2 border-[#111111] bg-[#111111] px-4 py-1.5 text-xs font-bold text-white shadow-[2px_2px_0px_#22C55E] transition-transform duration-150 hover:-translate-y-0.5 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#111111]"
            >
              <span>Let&apos;s talk</span>
              <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2.5} />
            </a>
          </div>
        </header>

        {/* Main Portfolio Bento Canvas */}
        <main className="flex flex-col gap-5 p-5 sm:p-8">
          {/* Hero Split: 75% Typographic Identity / 25% Interactive Pixel Eye Box */}
          <section
            aria-label="Profil utama"
            className="grid grid-cols-1 items-stretch gap-5 lg:grid-cols-12"
          >
            {/* Left Column (9 cols = 75%) */}
            <div className="flex flex-col justify-between rounded-[16px] border-2 border-[#111111] bg-[#FEF9EF] p-6 sm:p-8 lg:col-span-9">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <p className="text-sm font-semibold text-[#111111]/80">
                  {PROFILE_DATA.role}
                  <span className="mx-2" aria-hidden="true">
                    ·
                  </span>
                  {PROFILE_DATA.experienceYears}
                </p>

                <span className="rounded-[8px] border-2 border-[#111111] bg-[#FACC15] px-3 py-1 font-mono text-xs font-bold tracking-wider text-[#111111] tabular-nums whitespace-nowrap shrink-0">
                  {PROFILE_DATA.experienceBadge}
                </span>
              </div>

              <div className="my-6 sm:my-8">
                <h1 className="font-display text-[clamp(3.25rem,8.5vw,7rem)] font-extrabold leading-[0.94] tracking-[-0.04em] text-[#111111] text-balance">
                  {PROFILE_DATA.name}
                </h1>
              </div>

              <div className="flex flex-wrap items-end justify-between gap-4 border-t-2 border-[#111111]/15 pt-4">
                <p className="max-w-2xl text-base font-medium leading-relaxed text-[#111111]/80">
                  {PROFILE_DATA.heroSummary}
                </p>
                <button
                  type="button"
                  onClick={() => setActiveSection('biografi')}
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-[#111111] underline decoration-2 underline-offset-4 hover:text-[#0058BE] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                >
                  <span>Lihat ringkasan biografi</span>
                  <ArrowUpRight className="h-4 w-4" strokeWidth={2.5} />
                </button>
              </div>
            </div>

            {/* Right Column (3 cols = 25%) */}
            <div className="lg:col-span-3">
              <PixelEyeBox onHoverChange={setCursorBadge} />
            </div>
          </section>

          {/* Bottom Bento Grid: 4 Equal-Height Cards */}
          <BentoCards
            onSelectSection={(section) => setActiveSection(section)}
            onHoverChange={setCursorBadge}
          />
        </main>

        {/* Quiet Editorial Footer */}
        <footer className="flex flex-wrap items-center justify-between gap-3 border-t-2 border-[#111111] px-5 py-4 text-xs font-medium text-[#111111]/70 sm:px-8">
          <span>
            © 2026 {PROFILE_DATA.name} · {PROFILE_DATA.role}
          </span>
          <a
            href={PROFILE_DATA.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-[#111111] hover:underline"
          >
            Instagram ({PROFILE_DATA.instagramHandle})
          </a>
        </footer>
      </div>

      {/* Interactive Modal for Biografi, Kegiatan (Video Placeholders), and Karya (Photo Placeholders) */}
      <DetailModal
        activeSection={activeSection}
        onClose={() => setActiveSection(null)}
        videoSlots={videoSlots}
        photoSlots={photoSlots}
        onUpdateVideoSlot={handleUpdateVideoSlot}
        onUpdatePhotoSlot={handleUpdatePhotoSlot}
      />
    </div>
  );
}
