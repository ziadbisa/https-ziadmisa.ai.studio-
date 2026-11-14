import {
  ArrowUpRight,
  Film,
  Image as ImageIcon,
  LayoutGrid,
  Play,
  RotateCcw,
  Rows3,
  Upload,
  X,
} from 'lucide-react';
import { ChangeEvent, useEffect, useState } from 'react';
import {
  COMPETENCIES,
  EXPERIENCE_TIMELINE,
  PROFILE_DATA,
} from '../data/portfolioData';
import {
  ActiveSection,
  KaryaCategory,
  KegiatanCategory,
  PhotoSlot,
  VideoSlot,
} from '../types/portfolio';

interface DetailModalProps {
  activeSection: ActiveSection;
  onClose: () => void;
  videoSlots: VideoSlot[];
  photoSlots: PhotoSlot[];
  onUpdateVideoSlot: (slotId: string, videoUrl?: string) => void;
  onUpdatePhotoSlot: (slotId: string, imageUrl?: string) => void;
}

const SECTION_META: Record<
  Exclude<ActiveSection, null>,
  { title: string; subtitle: string; bg: string }
> = {
  biografi: {
    title: 'Biografi',
    subtitle: 'Profil Profesional · 7 Tahun Pengalaman',
    bg: '#A88BFA',
  },
  kegiatan: {
    title: 'Kegiatan',
    subtitle: 'Galeri Video · Placeholder Siap Diisi (16:9)',
    bg: '#FF5A36',
  },
  karya: {
    title: 'Karya',
    subtitle: 'Galeri Foto · Placeholder Siap Diisi',
    bg: '#FACC15',
  },
};

const KEGIATAN_FILTERS: KegiatanCategory[] = [
  'Semua',
  'Operasional',
  'Dokumentasi',
  'Presentasi',
];

const KARYA_FILTERS: KaryaCategory[] = [
  'Semua',
  'Arsip Proyek',
  'Visual',
  'Catatan Kerja',
];

export function DetailModal({
  activeSection,
  onClose,
  videoSlots,
  photoSlots,
  onUpdateVideoSlot,
  onUpdatePhotoSlot,
}: DetailModalProps) {
  const [videoFilter, setVideoFilter] = useState<KegiatanCategory>('Semua');
  const [photoFilter, setPhotoFilter] = useState<KaryaCategory>('Semua');
  const [photoLayout, setPhotoLayout] = useState<'grid' | 'bento'>('grid');

  // Close on Escape key
  useEffect(() => {
    if (!activeSection) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeSection, onClose]);

  if (!activeSection) return null;

  const meta = SECTION_META[activeSection];

  const handleVideoFileChange = (slotId: string, event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    const objectUrl = URL.createObjectURL(file);
    onUpdateVideoSlot(slotId, objectUrl);
  };

  const handleResetVideoSlot = (slotId: string) => {
    const existing = videoSlots.find((s) => s.id === slotId);
    if (existing?.videoUrl) URL.revokeObjectURL(existing.videoUrl);
    onUpdateVideoSlot(slotId, undefined);
  };

  const handlePhotoFileChange = (slotId: string, event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    const objectUrl = URL.createObjectURL(file);
    onUpdatePhotoSlot(slotId, objectUrl);
  };

  const handleResetPhotoSlot = (slotId: string) => {
    const existing = photoSlots.find((s) => s.id === slotId);
    if (existing?.imageUrl) URL.revokeObjectURL(existing.imageUrl);
    onUpdatePhotoSlot(slotId, undefined);
  };

  const filteredVideos =
    videoFilter === 'Semua'
      ? videoSlots
      : videoSlots.filter((item) => item.category === videoFilter);

  const filteredPhotos =
    photoFilter === 'Semua'
      ? photoSlots
      : photoSlots.filter((item) => item.category === photoFilter);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#111111]/70 p-3 sm:p-6 backdrop-blur-[2px]"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-section-title"
      onClick={onClose}
    >
      <div
        className="relative flex max-h-[90vh] w-full max-w-5xl flex-col overflow-hidden rounded-[20px] border-2 border-[#111111] bg-[#EAE5DC] shadow-[8px_8px_0px_#111111]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Colored Modal Header Bar */}
        <div
          className="flex items-center justify-between gap-4 border-b-2 border-[#111111] px-5 py-4 sm:px-8 sm:py-5"
          style={{ backgroundColor: meta.bg }}
        >
          <div className="min-w-0">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#111111]/80">
              {meta.subtitle}
            </p>
            <h2
              id="modal-section-title"
              className="font-display text-2xl font-extrabold tracking-tight text-[#111111] sm:text-3xl"
            >
              {meta.title}
            </h2>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Tutup panel"
            className="flex h-10 shrink-0 items-center gap-1.5 rounded-full border-2 border-[#111111] bg-white px-4 text-xs font-bold text-[#111111] shadow-[2px_2px_0px_#111111] transition-transform duration-150 hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#111111]/30 cursor-pointer"
          >
            <span>Tutup</span>
            <X className="h-4 w-4" strokeWidth={2.5} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="overflow-y-auto p-5 sm:p-8">
          {activeSection === 'biografi' && (
            <div className="space-y-8">
              {/* Primary Identity Block */}
              <div className="grid grid-cols-1 gap-6 rounded-[16px] border-2 border-[#111111] bg-white p-6 shadow-[4px_4px_0px_#111111] md:grid-cols-3">
                <div className="md:col-span-2 space-y-3">
                  <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-[#111111]/70">
                    <span>{PROFILE_DATA.name}</span>
                    <span aria-hidden="true">·</span>
                    <span>{PROFILE_DATA.experienceYears}</span>
                  </div>
                  <h3 className="font-display text-3xl font-extrabold tracking-tight text-[#111111] sm:text-4xl">
                    {PROFILE_DATA.biographyHeadline}
                  </h3>
                  <p className="max-w-2xl text-base leading-relaxed text-[#111111]/85">
                    {PROFILE_DATA.biographyLead}
                  </p>
                </div>

                <div className="flex flex-col justify-between rounded-[12px] border-2 border-[#111111] bg-[#F8F3EA] p-5">
                  <div>
                    <p className="font-mono text-xs font-semibold uppercase tracking-wider text-[#111111]/65">
                      Masa Pengalaman
                    </p>
                    <p className="mt-1 font-display text-4xl font-extrabold tabular-nums text-[#111111]">
                      7 Tahun
                    </p>
                  </div>
                  <a
                    href={PROFILE_DATA.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center justify-center gap-2 rounded-[10px] border-2 border-[#111111] bg-[#22C55E] px-4 py-2.5 text-xs font-bold text-[#111111] shadow-[2px_2px_0px_#111111] transition-transform duration-150 hover:-translate-y-0.5 whitespace-nowrap"
                  >
                    <span>Hubungi via Instagram</span>
                    <ArrowUpRight className="h-4 w-4" strokeWidth={2.5} />
                  </a>
                </div>
              </div>

              {/* Competencies & Timeline */}
              <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
                <div className="lg:col-span-5 space-y-4">
                  <h4 className="font-display text-lg font-bold text-[#111111]">
                    Kompetensi Inti
                  </h4>
                  <ul className="divide-y-2 divide-[#111111]/15 rounded-[16px] border-2 border-[#111111] bg-white">
                    {COMPETENCIES.map((skill, idx) => (
                      <li
                        key={skill}
                        className="flex items-center justify-between gap-3 px-4 py-3 text-sm font-medium text-[#111111]"
                      >
                        <span>{skill}</span>
                        <span className="font-mono text-xs font-semibold text-[#111111]/55 tabular-nums">
                          0{idx + 1}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="lg:col-span-7 space-y-4">
                  <h4 className="font-display text-lg font-bold text-[#111111]">
                    Ringkasan Pengalaman
                  </h4>
                  <div className="space-y-4">
                    {EXPERIENCE_TIMELINE.map((item) => (
                      <div
                        key={item.period}
                        className="rounded-[16px] border-2 border-[#111111] bg-white p-5"
                      >
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <span className="font-mono text-xs font-bold text-[#111111] tabular-nums">
                            {item.period}
                          </span>
                          <span className="text-xs font-medium text-[#111111]/65">
                            {item.scope}
                          </span>
                        </div>
                        <h5 className="mt-1.5 font-display text-lg font-bold text-[#111111]">
                          {item.title}
                        </h5>
                        <p className="mt-1 text-sm leading-relaxed text-[#111111]/80">
                          {item.summary}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeSection === 'kegiatan' && (
            <div className="space-y-6">
              {/* Filter Bar */}
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap items-center gap-2">
                  {KEGIATAN_FILTERS.map((cat) => {
                    const active = videoFilter === cat;
                    return (
                      <button
                        key={cat}
                        type="button"
                        onClick={() => setVideoFilter(cat)}
                        className={`rounded-full border-2 border-[#111111] px-4 py-1.5 text-xs font-bold whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
                          active
                            ? 'bg-[#111111] text-white'
                            : 'bg-white text-[#111111] hover:bg-[#F8F3EA]'
                        }`}
                      >
                        {cat}
                      </button>
                    );
                  })}
                </div>
                <p className="font-mono text-xs font-medium text-[#111111]/70 tabular-nums">
                  {filteredVideos.length} slot video · rasio 16:9
                </p>
              </div>

              {/* Video Placeholder Grid */}
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                {filteredVideos.map((slot) => (
                  <article
                    key={slot.id}
                    className="flex flex-col overflow-hidden rounded-[16px] border-2 border-[#111111] bg-white shadow-[4px_4px_0px_#111111]"
                  >
                    {/* 16:9 Empty Placeholder or Loaded Video */}
                    <div className="relative aspect-video w-full border-b-2 border-[#111111] bg-[#F2EDE4] placeholder-grid-bg">
                      {slot.videoUrl ? (
                        <video
                          src={slot.videoUrl}
                          controls
                          className="h-full w-full bg-black object-cover"
                        />
                      ) : (
                        <div className="flex h-full w-full flex-col items-center justify-center p-4 text-center">
                          <div className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-dashed border-[#111111]/55 bg-white/85 text-[#111111]/60">
                            <Play className="ml-0.5 h-6 w-6" />
                          </div>
                          <span className="mt-3 font-mono text-xs font-bold uppercase tracking-wider text-[#111111]/70">
                            {slot.code} · Bingkai Video Kosong
                          </span>
                          <span className="mt-1 text-xs text-[#111111]/55">
                            Siap diisi dokumentasi video 16:9
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Slot Footer Metadata + Optional Test Upload */}
                    <div className="flex items-center justify-between gap-3 p-4">
                      <div className="min-w-0">
                        <div className="flex items-center gap-2 text-xs font-medium text-[#111111]/65">
                          <span>{slot.category}</span>
                          <span aria-hidden="true">·</span>
                          <span className="font-mono tabular-nums">{slot.durationHint}</span>
                        </div>
                        <h3 className="mt-0.5 truncate font-display text-sm font-bold text-[#111111]">
                          {slot.title}
                        </h3>
                      </div>

                      <div className="flex shrink-0 items-center gap-2">
                        {slot.videoUrl ? (
                          <button
                            type="button"
                            onClick={() => handleResetVideoSlot(slot.id)}
                            title="Kembalikan ke bingkai kosong"
                            className="inline-flex items-center gap-1 rounded-[8px] border-2 border-[#111111] bg-[#EAE5DC] px-2.5 py-1.5 text-xs font-bold text-[#111111] hover:bg-[#FF5A36] hover:text-white transition-colors cursor-pointer"
                          >
                            <RotateCcw className="h-3.5 w-3.5" />
                            <span>Reset</span>
                          </button>
                        ) : (
                          <label className="inline-flex items-center gap-1.5 rounded-[8px] border-2 border-[#111111] bg-[#F8F3EA] px-3 py-1.5 text-xs font-bold text-[#111111] hover:bg-[#FF5A36] hover:text-white transition-colors cursor-pointer whitespace-nowrap">
                            <Film className="h-3.5 w-3.5" />
                            <span>Uji Video</span>
                            <input
                              type="file"
                              accept="video/*"
                              className="sr-only"
                              onChange={(e) => handleVideoFileChange(slot.id, e)}
                            />
                          </label>
                        )}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          )}

          {activeSection === 'karya' && (
            <div className="space-y-6">
              {/* Filter & Layout Toggle Bar */}
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap items-center gap-2">
                  {KARYA_FILTERS.map((cat) => {
                    const active = photoFilter === cat;
                    return (
                      <button
                        key={cat}
                        type="button"
                        onClick={() => setPhotoFilter(cat)}
                        className={`rounded-full border-2 border-[#111111] px-4 py-1.5 text-xs font-bold whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
                          active
                            ? 'bg-[#111111] text-white'
                            : 'bg-white text-[#111111] hover:bg-[#F8F3EA]'
                        }`}
                      >
                        {cat}
                      </button>
                    );
                  })}
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setPhotoLayout('grid')}
                    className={`inline-flex items-center gap-1.5 rounded-[8px] border-2 border-[#111111] px-3 py-1.5 text-xs font-bold cursor-pointer ${
                      photoLayout === 'grid'
                        ? 'bg-[#111111] text-white'
                        : 'bg-white text-[#111111]'
                    }`}
                  >
                    <LayoutGrid className="h-3.5 w-3.5" />
                    <span>Grid</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setPhotoLayout('bento')}
                    className={`inline-flex items-center gap-1.5 rounded-[8px] border-2 border-[#111111] px-3 py-1.5 text-xs font-bold cursor-pointer ${
                      photoLayout === 'bento'
                        ? 'bg-[#111111] text-white'
                        : 'bg-white text-[#111111]'
                    }`}
                  >
                    <Rows3 className="h-3.5 w-3.5" />
                    <span>Bento</span>
                  </button>
                </div>
              </div>

              {/* Photo Placeholder Grid */}
              <div
                className={
                  photoLayout === 'grid'
                    ? 'grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3'
                    : 'grid grid-cols-1 gap-5 md:grid-cols-3'
                }
              >
                {filteredPhotos.map((slot, index) => {
                  const isWideBento = photoLayout === 'bento' && index % 4 === 0;
                  return (
                    <article
                      key={slot.id}
                      className={`flex flex-col overflow-hidden rounded-[16px] border-2 border-[#111111] bg-white shadow-[4px_4px_0px_#111111] ${
                        isWideBento ? 'md:col-span-2' : ''
                      }`}
                    >
                      <div
                        className={`relative w-full border-b-2 border-[#111111] bg-[#F2EDE4] placeholder-grid-bg ${
                          isWideBento ? 'aspect-[16/9]' : 'aspect-[4/3]'
                        }`}
                      >
                        {slot.imageUrl ? (
                          <img
                            src={slot.imageUrl}
                            alt={slot.title}
                            referrerPolicy="no-referrer"
                            className="h-full w-full object-cover"
                          />
                        ) : (
                          <div className="flex h-full w-full flex-col items-center justify-center p-4 text-center">
                            <div className="flex h-12 w-12 items-center justify-center rounded-[12px] border-2 border-dashed border-[#111111]/55 bg-white/85 text-[#111111]/60">
                              <ImageIcon className="h-5 w-5" />
                            </div>
                            <span className="mt-3 font-mono text-xs font-bold uppercase tracking-wider text-[#111111]/70">
                              {slot.code} · Bingkai Foto Kosong
                            </span>
                            <span className="mt-1 text-xs text-[#111111]/55">
                              Rasio {slot.aspectHint} · Siap diisi
                            </span>
                          </div>
                        )}
                      </div>

                      <div className="flex items-center justify-between gap-3 p-4">
                        <div className="min-w-0">
                          <div className="flex items-center gap-2 text-xs font-medium text-[#111111]/65">
                            <span>{slot.category}</span>
                            <span aria-hidden="true">·</span>
                            <span className="font-mono tabular-nums">{slot.aspectHint}</span>
                          </div>
                          <h3 className="mt-0.5 truncate font-display text-sm font-bold text-[#111111]">
                            {slot.title}
                          </h3>
                        </div>

                        <div className="flex shrink-0 items-center gap-2">
                          {slot.imageUrl ? (
                            <button
                              type="button"
                              onClick={() => handleResetPhotoSlot(slot.id)}
                              title="Kembalikan ke bingkai kosong"
                              className="inline-flex items-center gap-1 rounded-[8px] border-2 border-[#111111] bg-[#EAE5DC] px-2.5 py-1.5 text-xs font-bold text-[#111111] hover:bg-[#FACC15] transition-colors cursor-pointer"
                            >
                              <RotateCcw className="h-3.5 w-3.5" />
                              <span>Reset</span>
                            </button>
                          ) : (
                            <label className="inline-flex items-center gap-1.5 rounded-[8px] border-2 border-[#111111] bg-[#F8F3EA] px-3 py-1.5 text-xs font-bold text-[#111111] hover:bg-[#FACC15] transition-colors cursor-pointer whitespace-nowrap">
                              <Upload className="h-3.5 w-3.5" />
                              <span>Uji Foto</span>
                              <input
                                type="file"
                                accept="image/*"
                                className="sr-only"
                                onChange={(e) => handlePhotoFileChange(slot.id, e)}
                              />
                            </label>
                          )}
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
