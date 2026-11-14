# Product Requirements Document (PRD)
## Website Portfolio: Ziad M Isa

**Versi Dokumen:** 1.0  
**Tanggal:** 15 November 2026  
**Disusun oleh:** Senior UI/UX Designer & Web Developer  
**Klien / Pemilik Produk:** Ziad M Isa  

---

## 1. Ringkasan Eksekutif (Executive Summary)
Dokumen ini merinci spesifikasi desain UI/UX, arsitektur informasi, dan kebutuhan teknis pengembangan website portofolio pribadi untuk **Ziad M Isa**, seorang profesional dengan pengalaman 7 tahun sebagai **Administrator**. 

Website ini mengadopsi pendekatan desain *Neo-Brutalist Bento Grid* yang berani, modern, dan interaktif—terinspirasi langsung dari referensi visual terlampir. Tata letak berbasis kartu (*card-based grid*) dengan batas (*border*) tegas, tipografi *oversized sans-serif*, palet warna kontras tinggi yang *playful*, serta elemen mikro-interaksi (seperti ilustrasi mata *pixel-art* yang mengikuti kursor dan berkedip).

---

## 2. Tujuan Produk (Product Goals)
1. **Personal Branding:** Menampilkan identitas Ziad M Isa sebagai Administrator berpengalaman 7 tahun secara profesional namun berkarakter modern.
2. **Navigasi Intuitif & Interaktif:** Menyediakan 4 pilar menu utama (**Biografi**, **Kegiatan**, **Karya**, dan **Let's talk**) yang seluruhnya dapat diklik baik melalui *top navigation bar* maupun *bento cards* utama.
3. **Skalabilitas Konten (Placeholder Ready):** Menyediakan kerangka (*wireframe/frame*) kosong untuk galeri video pada halaman/modal **Kegiatan** dan galeri foto pada **Karya**, sehingga mudah diisi di masa mendatang tanpa merombak struktur kode.
4. **Konversi Komunikasi Langsung:** Mengarahkan pengunjung yang ingin berdiskusi atau berkolaborasi langsung ke akun Instagram melalui tombol/kartu **Let's talk**.

---

## 3. Referensi Desain & Sistem Visual (Design System)

### 3.1. Gaya Visual (Visual Style)
* **Konsep Utama:** Modern Neo-Brutalism / Bento Grid Layout.
* **Struktur Kontainer:** Bingkai utama (*outer frame*) membulat (`border-radius: 20px`) dengan garis tepi solid hitam (`2px solid #111111`) di atas latar belakang krem hangat.
* **Mikro-Interaksi:** 
  * Kartu bergeser/terangkat ringan (*hover state*) atau merespons klik dengan transisi *spring* yang halus.
  * Elemen interaktif di pojok kanan atas hero section berupa kotak biru dengan grid halus dan **ilustrasi mata pixel-art** yang pupilnya mengikuti pergerakan kursor (*cursor tracking*) dan berkedip secara berkala.
  * *Custom cursor badge* (pil kecil berwarna melayang di dekat kursor saat diarahkan ke area interaktif).

### 3.2. Palet Warna (Color Palette)
| Elemen / Komponen | Nama Warna | Kode HEX | Keterangan Penggunaan |
| :--- | :--- | :--- | :--- |
| **Background Canvas** | Warm Cream / Off-White | `#EAE5DC` | Latar belakang utama halaman & area Hero |
| **Primary Text & Border** | Charcoal Black | `#111111` | Teks utama, tipografi besar, dan garis batas (`2px`) |
| **Hero Pixel Eye Box** | Electric Blue | `#3B82F6` | Latar kotak mata interaktif (kanan atas) |
| **Card 1: Biografi** | Soft Lavender / Purple | `#A88BFA` | Kartu pertama (menggantikan kartu *About*) |
| **Card 2: Kegiatan** | Vibrant Coral / Red-Orange | `#FF5A36` | Kartu kedua (menggantikan *Kite*) |
| **Card 3: Karya** | Mustard Yellow | `#FACC15` | Kartu ketiga (menggantikan *Atlas*) |
| **Card 4: Let's talk** | Emerald Mint Green | `#22C55E` | Kartu keempat (CTA komunikasi) |
| **Aksen Geometris** | White, Teal, Lilac | `#FFFFFF`, `#14B8A6`, `#C084FC` | Bentuk abstrak dekoratif di dalam kartu |

### 3.3. Tipografi (Typography)
* **Font Utama:** `Plus Jakarta Sans` atau `Inter` (Geometric Sans-Serif).
* **Hero Display Name ("Ziad M Isa"):** Ukuran sangat besar (`clamp(3.5rem, 8.5vw, 7.5rem)`), ketebalan `800 (ExtraBold)`, *letter-spacing* rapat (`-0.04em`).
* **Card Titles:** Ukuran `clamp(1.75rem, 3vw, 2.5rem)`, ketebalan `700 (Bold)`, posisi di kiri bawah kartu.
* **Micro Labels / Pill Badges:** Ukuran `0.75rem (12px)`, ketebalan `600 (SemiBold)`, dalam kapsul berbingkai hitam (`border-radius: 9999px`).

---

## 4. Arsitektur Informasi & Spesifikasi Fitur

### 4.1. Header / Top Navigation Bar
* **Kiri:** Indikator status/nama `Ziad M Isa` dengan titik hijau aktif (`#22C55E`).
* **Kanan:** 4 tombol kapsul (*pill buttons*) berbingkai hitam yang dapat diklik:
  1. `Biografi`
  2. `Kegiatan`
  3. `Karya`
  4. `Let's talk` (Tombol solid hitam dengan teks putih, mengarah ke `https://www.instagram.com`).

### 4.2. Hero Section (Atas)
* **Kolom Kiri (75% lebar):**
  * Sub-label atas kiri: `Administrator • 7 Tahun Pengalaman`
  * Badge status kanan atas area teks: `7+ YRS EXP`
  * Judul Utama (H1): **Ziad M Isa**
* **Kolom Kanan (25% lebar):**
  * Kotak interaktif biru (`#3B82F6`) dengan pola grid tipis (`1px`).
  * Animasi mata *pixel-art* yang mengikuti gerakan mouse dan memiliki animasi kedipan (*blink*) otomatis setiap 4–5 detik.

### 4.3. Bento Grid Cards (Bawah — 4 Kolom Sejajar)
Seluruh kartu memiliki tinggi seragam, sudut membulat (`16px`), border hitam `2px`, dan **dapat diklik sepenuhnya**:

1. **Kartu 1: Biografi (`#A88BFA` - Ungu)**
   * **Label Atas:** `Profil` + ikon panah diagonal (`↗`).
   * **Konten Pratinjau:** *"Seorang Administrator dengan pengalaman selama 7 tahun."*
   * **Aksi Klik:** Membuka tampilan detail/modal **Biografi** yang menampilkan informasi sementara: **"Seorang Administrator"** (disertai keterangan pengalaman 7 tahun).

2. **Kartu 2: Kegiatan (`#FF5A36` - Oranye Merah)** *(Menggantikan "Kite")*
   * **Label Atas:** `Dokumentasi Video`
   * **Ilustrasi Geometris:** Bentuk kapsul hitam horizontal dan lingkaran putih/kuning di sisi kanan.
   * **Judul Bawah:** **Kegiatan**
   * **Aksi Klik:** Membuka halaman/modal **Kegiatan** yang berisi **bingkai-bingkai video kosong (Video Placeholders)** dengan rasio aspek 16:9, ikon *play* redup, dan label slot video yang siap diisi di kemudian hari.

3. **Kartu 3: Karya (`#FACC15` - Kuning)** *(Menggantikan "Atlas")*
   * **Label Atas:** `Galeri Foto`
   * **Ilustrasi Geometris:** Persegi membulat hitam miring, cincin ungu (`#C084FC`), dan aksen hijau toska di bawah.
   * **Judul Bawah:** **Karya**
   * **Aksi Klik:** Membuka halaman/modal **Karya** yang berisi **bingkai-bingkai foto kosong (Photo Placeholders)** dalam tata letak *grid* responsif, lengkap dengan ikon galeri dan label slot foto yang siap diisi.

4. **Kartu 4: Let's talk (`#22C55E` - Hijau)**
   * **Label Atas:** `• Terhubung di Instagram`
   * **Judul Bawah:** **Let's talk** + ikon panah lingkaran hitam (`→`).
   * **Aksi Klik:** Membuka tautan eksternal langsung menuju **`https://www.instagram.com`** di tab baru (`target="_blank"`).

---

## 5. Spesifikasi Teknis & Responsivitas (Web Development Specs)

### 5.1. Tech Stack yang Direkomendasikan
* **Struktur & Markup:** HTML5 Semantik (`<header>`, `<main>`, `<section>`, `<nav>`, `<dialog>`).
* **Styling:** CSS3 Modern (CSS Grid, Flexbox, CSS Custom Properties/Variables, `clamp()` untuk tipografi fluida).
* **Interaktivitas:** Vanilla JavaScript (ES6+) tanpa ketergantungan *framework* berat agar waktu muat (*load time*) instan (< 0.5 detik).

### 5.2. Perilaku Responsif (Responsive Breakpoints)
* **Desktop (`> 1024px`):** Tata letak persis seperti referensi video — Hero terbagi 2 kolom (Nama & Mata Pixel), diikuti 4 kartu sejajar horizontal (`grid-template-columns: repeat(4, 1fr)`).
* **Tablet (`768px – 1024px`):** Hero tetap 2 kolom proporsional; 4 kartu berubah menjadi grid 2x2 (`grid-template-columns: repeat(2, 1fr)`).
* **Mobile (`< 768px`):** Header navigasi rapi (dapat di-*scroll* horizontal atau ringkas), kotak mata pixel berada di atas/bawah nama, dan 4 kartu tersusun vertikal 1 kolom (`1fr`).

### 5.3. Aksesibilitas & Performa
* Semua kartu dan tombol memiliki atribut `role="button"`, `tabindex="0"`, dan fokus keyboard yang jelas.
* Tautan eksternal ke `instagram.com` dilengkapi `rel="noopener noreferrer"` untuk keamanan.
* Animasi kedipan mata menggunakan CSS `@keyframes` dan pergerakan pupil menggunakan `requestAnimationFrame` agar performa tetap 60fps.
