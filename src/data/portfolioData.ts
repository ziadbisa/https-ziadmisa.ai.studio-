import { ExperienceItem, PhotoSlot, VideoSlot } from '../types/portfolio';

export const PROFILE_DATA = {
  name: 'Ziad M Isa',
  role: 'Administrator',
  experienceYears: '7 Tahun Pengalaman',
  experienceBadge: '7+ YRS EXP',
  heroSummary:
    'Mengelola sistem operasional, tata kelola arsip, dan koordinasi lintas tim secara terstruktur selama lebih dari tujuh tahun.',
  biographyHeadline: 'Seorang Administrator',
  biographyLead:
    'Seorang Administrator dengan pengalaman selama 7 tahun dalam menjaga ketertiban alur kerja, dokumentasi organisasi, serta dukungan operasional harian yang konsisten dan terukur.',
  instagramUrl: 'https://www.instagram.com',
  instagramHandle: '@ziadmisa',
};

export const COMPETENCIES: string[] = [
  'Tata Kelola Arsip & Dokumen',
  'Koordinasi Operasional Harian',
  'Penyusunan Laporan Berkala',
  'Administrasi Lintas Divisi',
  'Pengelolaan Jadwal & Agenda',
  'Standardisasi Prosedur Kerja',
];

export const EXPERIENCE_TIMELINE: ExperienceItem[] = [
  {
    period: 'Tahun 5 — 7',
    title: 'Senior Administrator & Tata Kelola Sistem',
    scope: 'Operasional Inti',
    summary:
      'Memimpin perapihan standar dokumentasi, pengawasan alur administrasi lintas unit, dan penyusunan laporan evaluasi periodik.',
  },
  {
    period: 'Tahun 3 — 4',
    title: 'Administrator Operasional & Koordinasi',
    scope: 'Koordinasi Tim',
    summary:
      'Menyelaraskan jadwal kerja, distribusi berkas penting, serta memastikan kepatuhan pencatatan administrasi harian.',
  },
  {
    period: 'Tahun 1 — 2',
    title: 'Administrator & Pengarsipan Terstruktur',
    scope: 'Fondasi Administrasi',
    summary:
      'Membangun sistem klasifikasi dokumen fisik maupun digital agar seluruh catatan operasional mudah ditelusuri.',
  },
];

export const INITIAL_VIDEO_SLOTS: VideoSlot[] = [
  {
    id: 'vid-01',
    code: 'VID-01',
    title: 'Slot Video 01 — Dokumentasi Alur Kerja',
    category: 'Operasional',
    durationHint: '16:9 · Siap Diisi',
  },
  {
    id: 'vid-02',
    code: 'VID-02',
    title: 'Slot Video 02 — Rekap Kegiatan Tahunan',
    category: 'Dokumentasi',
    durationHint: '16:9 · Siap Diisi',
  },
  {
    id: 'vid-03',
    code: 'VID-03',
    title: 'Slot Video 03 — Briefing & Koordinasi Tim',
    category: 'Presentasi',
    durationHint: '16:9 · Siap Diisi',
  },
  {
    id: 'vid-04',
    code: 'VID-04',
    title: 'Slot Video 04 — Pengelolaan Arsip Digital',
    category: 'Operasional',
    durationHint: '16:9 · Siap Diisi',
  },
  {
    id: 'vid-05',
    code: 'VID-05',
    title: 'Slot Video 05 — Cuplikan Agenda Lapangan',
    category: 'Dokumentasi',
    durationHint: '16:9 · Siap Diisi',
  },
  {
    id: 'vid-06',
    code: 'VID-06',
    title: 'Slot Video 06 — Paparan Evaluasi Sistem',
    category: 'Presentasi',
    durationHint: '16:9 · Siap Diisi',
  },
];

export const INITIAL_PHOTO_SLOTS: PhotoSlot[] = [
  {
    id: 'pic-01',
    code: 'FOTO-01',
    title: 'Slot Foto 01 — Dokumentasi Arsip Utama',
    category: 'Arsip Proyek',
    aspectHint: '4:3',
  },
  {
    id: 'pic-02',
    code: 'FOTO-02',
    title: 'Slot Foto 02 — Ruang Kerja & Sistem',
    category: 'Visual',
    aspectHint: '4:3',
  },
  {
    id: 'pic-03',
    code: 'FOTO-03',
    title: 'Slot Foto 03 — Catatan Rapat Terstruktur',
    category: 'Catatan Kerja',
    aspectHint: '4:3',
  },
  {
    id: 'pic-04',
    code: 'FOTO-04',
    title: 'Slot Foto 04 — Implementasi Tata Kelola',
    category: 'Arsip Proyek',
    aspectHint: '4:3',
  },
  {
    id: 'pic-05',
    code: 'FOTO-05',
    title: 'Slot Foto 05 — Perspektif Aktivitas Harian',
    category: 'Visual',
    aspectHint: '4:3',
  },
  {
    id: 'pic-06',
    code: 'FOTO-06',
    title: 'Slot Foto 06 — Indeks Berkas & Klasifikasi',
    category: 'Catatan Kerja',
    aspectHint: '4:3',
  },
];
