export type ActiveSection = 'biografi' | 'kegiatan' | 'karya' | null;

export type KegiatanCategory = 'Semua' | 'Operasional' | 'Dokumentasi' | 'Presentasi';
export type KaryaCategory = 'Semua' | 'Arsip Proyek' | 'Visual' | 'Catatan Kerja';

export interface ExperienceItem {
  period: string;
  title: string;
  scope: string;
  summary: string;
}

export interface VideoSlot {
  id: string;
  code: string;
  title: string;
  category: Exclude<KegiatanCategory, 'Semua'>;
  durationHint: string;
  videoUrl?: string;
}

export interface PhotoSlot {
  id: string;
  code: string;
  title: string;
  category: Exclude<KaryaCategory, 'Semua'>;
  aspectHint: '4:3' | '16:9' | '1:1';
  imageUrl?: string;
}

export interface CursorBadgeState {
  visible: boolean;
  label: string;
  bgColor: string;
  textColor?: string;
}
