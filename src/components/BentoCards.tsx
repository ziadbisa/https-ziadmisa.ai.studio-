import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { PROFILE_DATA } from '../data/portfolioData';
import { ActiveSection, CursorBadgeState } from '../types/portfolio';
import { KaryaGeometricArt, KegiatanGeometricArt } from './GeometricArt';

interface BentoCardsProps {
  onSelectSection: (section: Exclude<ActiveSection, null>) => void;
  onHoverChange: (badge: CursorBadgeState) => void;
}

export function BentoCards({ onSelectSection, onHoverChange }: BentoCardsProps) {
  const clearHover = () =>
    onHoverChange({ visible: false, label: '', bgColor: '#111111' });

  return (
    <section
      aria-label="Menu utama portofolio"
      className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4"
    >
      {/* Card 1: Biografi (#A88BFA) */}
      <button
        type="button"
        onClick={() => onSelectSection('biografi')}
        onMouseEnter={() =>
          onHoverChange({
            visible: true,
            label: 'Buka Biografi ↗',
            bgColor: '#FFFFFF',
            textColor: '#111111',
          })
        }
        onMouseLeave={clearHover}
        className="brutalist-card group flex min-h-[290px] w-full flex-col justify-between rounded-[16px] border-2 border-[#111111] bg-[#A88BFA] p-6 text-left shadow-[4px_4px_0px_#111111] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#111111]/30 cursor-pointer"
      >
        <div className="flex w-full items-center justify-between gap-3">
          <span className="text-xs font-bold uppercase tracking-wider text-[#111111]">
            Profil
          </span>
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-[#111111] bg-white text-[#111111] transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
            <ArrowUpRight className="h-4 w-4" strokeWidth={2.5} />
          </span>
        </div>

        <p className="my-4 text-base font-medium leading-relaxed text-[#111111]/90">
          “Seorang Administrator dengan pengalaman selama 7 tahun.”
        </p>

        <div className="flex items-end justify-between gap-2">
          <h2 className="font-display text-[clamp(1.75rem,2.8vw,2.25rem)] font-bold leading-none tracking-[-0.02em] text-[#111111]">
            Biografi
          </h2>
          <span className="font-mono text-xs font-semibold text-[#111111]/75 tabular-nums">
            01
          </span>
        </div>
      </button>

      {/* Card 2: Kegiatan (#FF5A36) */}
      <button
        type="button"
        onClick={() => onSelectSection('kegiatan')}
        onMouseEnter={() =>
          onHoverChange({
            visible: true,
            label: 'Lihat Video ↗',
            bgColor: '#FFFFFF',
            textColor: '#111111',
          })
        }
        onMouseLeave={clearHover}
        className="brutalist-card group flex min-h-[290px] w-full flex-col justify-between rounded-[16px] border-2 border-[#111111] bg-[#FF5A36] p-6 text-left shadow-[4px_4px_0px_#111111] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#111111]/30 cursor-pointer"
      >
        <div className="flex w-full items-center justify-between gap-3">
          <span className="text-xs font-bold uppercase tracking-wider text-[#111111]">
            Dokumentasi Video
          </span>
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-[#111111] bg-white text-[#111111] transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
            <ArrowUpRight className="h-4 w-4" strokeWidth={2.5} />
          </span>
        </div>

        <div className="my-2 flex items-center justify-center">
          <KegiatanGeometricArt />
        </div>

        <div className="flex items-end justify-between gap-2">
          <h2 className="font-display text-[clamp(1.75rem,2.8vw,2.25rem)] font-bold leading-none tracking-[-0.02em] text-[#111111]">
            Kegiatan
          </h2>
          <span className="font-mono text-xs font-semibold text-[#111111]/75 tabular-nums">
            02
          </span>
        </div>
      </button>

      {/* Card 3: Karya (#FACC15) */}
      <button
        type="button"
        onClick={() => onSelectSection('karya')}
        onMouseEnter={() =>
          onHoverChange({
            visible: true,
            label: 'Galeri Foto ↗',
            bgColor: '#FFFFFF',
            textColor: '#111111',
          })
        }
        onMouseLeave={clearHover}
        className="brutalist-card group flex min-h-[290px] w-full flex-col justify-between rounded-[16px] border-2 border-[#111111] bg-[#FACC15] p-6 text-left shadow-[4px_4px_0px_#111111] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#111111]/30 cursor-pointer"
      >
        <div className="flex w-full items-center justify-between gap-3">
          <span className="text-xs font-bold uppercase tracking-wider text-[#111111]">
            Galeri Foto
          </span>
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-[#111111] bg-white text-[#111111] transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
            <ArrowUpRight className="h-4 w-4" strokeWidth={2.5} />
          </span>
        </div>

        <div className="my-2 flex items-center justify-center">
          <KaryaGeometricArt />
        </div>

        <div className="flex items-end justify-between gap-2">
          <h2 className="font-display text-[clamp(1.75rem,2.8vw,2.25rem)] font-bold leading-none tracking-[-0.02em] text-[#111111]">
            Karya
          </h2>
          <span className="font-mono text-xs font-semibold text-[#111111]/75 tabular-nums">
            03
          </span>
        </div>
      </button>

      {/* Card 4: Let's talk (#22C55E) */}
      <a
        href={PROFILE_DATA.instagramUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() =>
          onHoverChange({
            visible: true,
            label: 'Instagram ↗',
            bgColor: '#111111',
            textColor: '#FFFFFF',
          })
        }
        onMouseLeave={clearHover}
        className="brutalist-card group flex min-h-[290px] w-full flex-col justify-between rounded-[16px] border-2 border-[#111111] bg-[#22C55E] p-6 text-left shadow-[4px_4px_0px_#111111] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#111111]/30"
      >
        <div className="flex w-full items-center justify-between gap-3">
          <span className="text-xs font-bold uppercase tracking-wider text-[#111111]">
            Terhubung di Instagram
          </span>
          <span className="font-mono text-xs font-semibold text-[#111111]/80">
            IG
          </span>
        </div>

        <div className="my-4 space-y-1.5">
          <p className="font-mono text-sm font-semibold text-[#111111]">
            {PROFILE_DATA.instagramHandle}
          </p>
          <p className="text-sm font-medium leading-snug text-[#111111]/85">
            Diskusi kolaborasi, tata kelola administrasi, atau pertanyaan langsung via DM.
          </p>
        </div>

        <div className="flex items-center justify-between gap-3">
          <h2 className="font-display text-[clamp(1.75rem,2.8vw,2.25rem)] font-bold leading-none tracking-[-0.02em] text-[#111111]">
            Let&apos;s talk
          </h2>
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#111111] text-white transition-transform duration-150 group-hover:translate-x-1">
            <ArrowRight className="h-5 w-5" strokeWidth={2.5} />
          </span>
        </div>
      </a>
    </section>
  );
}
