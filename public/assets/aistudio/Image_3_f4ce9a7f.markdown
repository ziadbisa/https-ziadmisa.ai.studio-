---
name: Neo-Brutalist Bento Portfolio
colors:
  surface: '#fef9ef'
  surface-dim: '#ded9d1'
  surface-bright: '#fef9ef'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f8f3ea'
  surface-container: '#f2ede4'
  surface-container-high: '#ede8df'
  surface-container-highest: '#e7e2d9'
  on-surface: '#1d1c16'
  on-surface-variant: '#444748'
  inverse-surface: '#32302a'
  inverse-on-surface: '#f5f0e7'
  outline: '#747878'
  outline-variant: '#c4c7c7'
  surface-tint: '#5f5e5e'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#1c1b1b'
  on-primary-container: '#858383'
  inverse-primary: '#c8c6c5'
  secondary: '#0058be'
  on-secondary: '#ffffff'
  secondary-container: '#2170e4'
  on-secondary-container: '#fefcff'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#3d0600'
  on-tertiary-container: '#eb4c29'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e5e2e1'
  primary-fixed-dim: '#c8c6c5'
  on-primary-fixed: '#1c1b1b'
  on-primary-fixed-variant: '#474646'
  secondary-fixed: '#d8e2ff'
  secondary-fixed-dim: '#adc6ff'
  on-secondary-fixed: '#001a42'
  on-secondary-fixed-variant: '#004395'
  tertiary-fixed: '#ffdad2'
  tertiary-fixed-dim: '#ffb4a3'
  on-tertiary-fixed: '#3d0600'
  on-tertiary-fixed-variant: '#8c1900'
  background: '#fef9ef'
  on-background: '#1d1c16'
  surface-variant: '#e7e2d9'
  canvas-cream: '#EAE5DC'
  charcoal-ink: '#111111'
  pixel-blue: '#3B82F6'
  biografi-lavender: '#A88BFA'
  kegiatan-coral: '#FF5A36'
  karya-mustard: '#FACC15'
  talk-mint: '#22C55E'
  accent-teal: '#14B8A6'
  accent-lilac: '#C084FC'
  pure-white: '#FFFFFF'
typography:
  hero-title:
    fontFamily: Plus Jakarta Sans
    fontSize: 112px
    fontWeight: '800'
    lineHeight: 100px
    letterSpacing: -0.04em
  hero-title-tablet:
    fontFamily: Plus Jakarta Sans
    fontSize: 72px
    fontWeight: '800'
    lineHeight: 72px
    letterSpacing: -0.035em
  hero-title-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 52px
    fontWeight: '800'
    lineHeight: 52px
    letterSpacing: -0.03em
  card-title:
    fontFamily: Plus Jakarta Sans
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  card-title-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 26px
    fontWeight: '700'
    lineHeight: 30px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
    letterSpacing: -0.015em
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '700'
    lineHeight: 28px
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '500'
    lineHeight: 26px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '500'
    lineHeight: 24px
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  badge-label:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.04em
  caption:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 14px
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1rem
  gutter-desktop: 1.25rem
  margin: 1rem
  margin-tablet: 1.5rem
  margin-desktop: 2.5rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2rem
  space-2xl: 3rem
---

## Brand & Style

This design system shapes the personal digital presence of an established Administrator with 7 years of operational mastery. The brand identity fuses systematic administrative clarity with creative technical edge. It breaks away from clinical, sterile corporate portfolios through a tactile Neo-Brutalist aesthetic married to structured Japanese Bento architecture.

The core visual posture is deliberate, playful, and assertive:
- **Neo-Brutalism:** Pure geometric divisions, heavy 2px pitch-black borders, tactile hard drop-shadows with zero blur, oversized structural typography, and bold saturation shifts against an organic cream paper canvas.
- **Bento Hierarchy:** Spatial compartmentalization where content blocks act as physical, modular tiles. Each primary card owns an expressive single chromatic identity while preserving strict alignment.
- **Interactive Tactility:** Surfaces behave like spring-loaded physical panels. Micro-interactionsâ€”including cursor-reactive pixel art and pill badgesâ€”inject levity into an otherwise structured, operational record.

## Colors

The palette establishes high chromatic tension by planting saturated primaries and warm pastels against a warm, unbleached parchment canvas (`#EAE5DC`). 

- **Primary (`#111111` Charcoal Ink):** Dictates structural outlines, primary type, high-contrast badges, and brutalist physical shadows.
- **Neutral (`#EAE5DC` Warm Cream):** Serves as the bedrock page canvas and container frame fill, giving the interface an editorial, tactile, paper-like warmth.
- **Functional Bento Primaries:**
  - `pixel-blue` (`#3B82F6`): Dedicated to interactive canvas elements, cursor-reactive modules, and pixel-art containers.
  - `biografi-lavender` (`#A88BFA`): Anchors personal narrative and biographical credentials.
  - `kegiatan-coral` (`#FF5A36`): Drives active documentation, energy, and media timelines.
  - `karya-mustard` (`#FACC15`): Signals portfolio output, projects, and creative administrative work.
  - `talk-mint` (`#22C55E`): Reserved exclusively for availability states, live status pings, and communication CTAs.

### Surface and Contrast Rules
Never use subtle gray borders. All element separators and structural perimeters require solid `#111111`. Text placed over chromatic cards (`#A88BFA`, `#FF5A36`, `#FACC15`, `#22C55E`) defaults to `#111111` to maintain robust AA/AAA contrast ratios.

## Typography

The type system balances expressive display scaling with systematic legibility. 

- **Display & Headlines (Plus Jakarta Sans):** Selected for its geometric structure and tight apertures. The main hero identity scales down smoothly across devices with negative tracking to create an architectural, locked-up impression.
- **Labels & Micro-copy (Inter):** Deployed across navigation tags, pill chips, and metadata. Inter provides utilitarian clarity at micro scales (11pxâ€“12px) with increased tracking for instant legibility against high-saturation backdrops.

## Layout & Spacing

The layout is anchored by a self-contained, framed Bento box system centered on the page canvas.

### Layout Rhythm
- **Outer Shell:** The entire app content sits inside a constrained, border-enclosed canvas frame (`max-width: 1400px`) flanked by consistent outer viewport margins.
- **Bento Division (Desktop L
NŠŠ‚ˆH
Š•\\ˆ›İÈ
\›ÊNŠŠˆÜ][È[ˆ\Ş[[Y]šXÈÎŒH^[İ]
ÍIHÚY\›ÈÛÜKİ]H[Ù[KIHÚY[\˜Xİ]™H^[^YH›Ş
K‚ˆH
Š“İÙ\ˆ›İÈ
™[ÈÜšY
NŠŠˆİšXİXÛÛ[[ˆ˜[[˜ÙYÜšY
ÜšY][\]KXÛÛ[[œÎˆ™\X]
YœŠX
HÚ]Ş[˜Ú›Ûš^™YØ\™ZYÚË‚‹H
Š•X›]™Y›İÈ
Í8 $ÈL
NŠŠ‚ˆH\\ˆ›İÈ™]Z[œÈ‹XÛÛ[[ˆ\İšX][Û‹‚ˆHİÙ\ˆ›İÈœ™XZÜÈ[È[ˆ\]X[ˆÜšY
ÜšY][\]KXÛÛ[[œÎˆ™\X]
‹YœŠX
K‚‹H
Š“[Øš[H™Y›İÈ
Í
NŠŠ‚ˆHÜšYÛÛ\Ù\È[ÈHÚ[™ÛKXÛÛ[[ˆÙ\]Y[˜ÙH
Yœ˜
K‚ˆHH\›È^[›Ş[˜ÚÜœÈZ]\ˆ\™XİHX›İ™HÜˆ™[İÈHš[X\H\Ü^H›ØÚÈÚ]HÜ]X\™H\ÜXİ˜][Ë‚‚ˆÈÈ[]˜][Ûˆ	ˆ\‚•\ÈŞ\İ[H]›ÚYÈØ]\ÜÚX[ˆ›\œËÛÙ™X]\š[™ËÜˆY™\ÙY[]˜][Û‹ˆ\\ÈİšXİH\ÚXØ[YXÚ[šXØ[[™™[ËXœ][\İ‚‚‹H
Š’\™Ù™œÙ]ÚYİÜÎŠŠˆİ\™˜XÙ\ÈXÚY]™H[]˜][ÛˆšXHÛÛY\™Xİ[Û˜[›ÜÚYİÜÈÚ]›\ˆ˜Y]\Î‚ˆH
Š‘Y˜][[]˜][ÛŠŠˆ›Ş\ÚYİÎˆÌLLLLLNØˆH
ŠØ\™˜\ÙNŠŠˆ›Ş\ÚYİÎˆœœÌLLLLLNØˆH
Š’[\˜Xİ]™Hİ™\ŠŠˆ[[Y[È˜[œÛ]H\Ø\™È[™YØ\™ÈÚ[HHÙ™œÙ]ÚYİÈ^[™È
˜[œÙ›Ü›Nˆ˜[œÛ]JLœLœ
NÈ›Ş\ÚYİÎˆÌLLLLLNØ
K‚ˆH
ŠXİ]™HÈ™\ÜÙYİ]NŠŠˆ[[Y[ÈÛÛ\™\ÜÈ›\ÚÚ]Z\ˆ›Ûİš[
˜[œÙ›Ü›Nˆ˜[œÛ]J
NÈ›Ş\ÚYİÎˆÌLLLLLNØ
K‚‹H
Š”İ\™˜XÙHœ˜[Z[™ÎŠŠˆ]™\H[]˜]Yİ\™˜XÙH™X]\™\ÈH[šY›Ü›HœÛÛYÌLLLLLXİ][™K[œİ\š[™Èš\İX[[™\[™[˜ÙHœ›ÛH˜XÚÙÜ›İ[™ÛÛÜœË‚‚ˆÈÈÚ\\Â‚•H\ÚYÛˆ˜[[˜Ù\È™[ËXœ][\İšYÚY]HÚ]œšY[™K[Ù\›ˆÛÛœİ[Y\ˆÙ[ÛY]K‚‚‹H
ŠÛÛZ[™\ˆ˜Y]\ÎŠŠˆš[X\HØ\™Ë\›Èœ˜[Y\Ë[™[Ù[›ÙY\È][^™HHMœ8 $ÌŒÛÜ›™\ˆ˜Y]\È
›İ[™Y[ØÈ›İ[™Y^
K‚‹H
Š’[›™\ˆXØÙ[ÎŠŠˆ[\›˜[Ø\™È[™Ù[ÛY]šXÈXÛÜ˜][ÛœÈ[œÚYH™[ÈÙ[È][^™HLœ8 $ÌMœ˜YZK‚‹H
Š‘[[È
›İ[™YY[ÈNNN\
NŠŠˆ\ÙY[š]™\œØ[H›ÜˆÜ˜]šYØ][Ûˆ[šÜËİ]\È[™XØ]ÜœËY]K]YÜË[™[\˜Xİ]™HÚ\]ÛœË‚‚ˆÈÈÛÛ\Û™[Â‚ˆÈÈÈ]ÛœÈ	ˆ˜]šYØ][Ûˆ[Â‹H
Š•Ü˜]šYØ][Ûˆ][\ÎŠŠˆ[\Ú\YØ\İ[\È
›Ü™\‹\˜Y]\ÎˆNNN\
HÚ]HœÛÛYÌLLLLLX›Ü™\‹İ[™\™Y[™È
\™[HKŒ\™[X
K[™›ÙK\ÛH›Ûİ[[™Ëˆ˜[œÜ\™[˜XÚÙÜ›İ[™\›œÈÌLLLLLXÚ]Ú]H^Ûˆİ™\‹‚‹H
ŠÕH]Ûˆ
“]	ÜÈ[ÈŠNŠŠˆÛÛYÌLLLLLX˜XÚÙÜ›İ[™Ñ‘‘‘‘‘˜^\™Ù™œÙ]ÚYİÈ[ˆÌŒÍMQXÜˆÌLLLLLXXØÛÛ\[šYYH[ˆ[›[™HÚ\˜İ[\ˆ\œ›İÈ˜YÙK‚‚ˆÈÈÈ™[ÈÜšYØ\™Â‹H
Š”İXİ\™NŠŠˆÛÛYœÛÛYÌLLLLLX\š[Y]\‹Mœ›Ü™\‹\˜Y]\ËY[™ÎˆK\™[X\Ü^Z[™ÈYÚ›^ÙÜšY^[İ]Y\Xš[]K‚‹H
Š•Ü˜\ŠŠˆİ\Ù\ÈØ]YÛÜKÜİ]\È[
˜YÙK[X™[
H[™[ˆXÛÛˆšYÙÙ\ˆ
İXÚ\ÈHÜ\šYÚXYÛÛ˜[\œ›İÈ8¡¥Ø
K‚‹H
Š“ZYHİYÙNŠŠˆYXØ]YXÛÜ˜]]™HØ[˜\È™X]\š[™ÈXœİ˜Xİ™[ËXœ][\İ™XİÜˆÛÛ\ÜÚ][ÛœÈ
K™Ë‹[Y›İ[™YÜ]X\™\Ëİ™\›\[™È[XÈš[™ÜËÙ[ÛY]šXÈ[Ø\İ[\ÊK‚‹H
Š˜\ÙNŠŠˆİ\Ù\ÈH›ÛØ\™]H[ˆ˜ZØ\H›Û
Û[\
KÍ\™[KİË‹\™[JX
K‚‚ˆÈÈÈ[\˜Xİ]™H^[^YH›Ş‹H
ŠØ[˜\ÎŠŠˆØ]\˜]Y[XİšXÈ›YH
ÌĞ‘˜
HÚ][ˆİ™\›ZYİXH\[™HÜšY‚‹H
Š”^[^YNŠŠˆ™\ÜÛœÚ]™H™]›Ë\İ[H^YHÙ[\™Y[ˆHÛÛZ[™\‹\[›İ[™ÈÚ[\ˆ[İ™[Y[ÛÛÜ™[˜]\ÈšXHØÜš\XØÛÛ\[šYYH]]ÛX]Y\ÙXÛÛ™Õ‘ËØØ[˜\È›[šÈÙ^Yœ˜[Y\Ë‚‚ˆÈÈÈ[\Hİ]HYYXHXÙZÛ\œÈ
ÙYÚX][ˆ	ˆØ\XJB‹H
Š•šY[ÈÛİŠŠˆMH\ÜXİ˜][ÈÛÛZ[™\‹Ü™X[H˜XÚÙÜ›İ[™œ\ÚYÌLLLLLXÜˆÛÛY›Ü™\‹Ù[\™Yœ][\İ^HXÛÛˆ˜YÙKXØÛÛ\[šYYHÛX\ˆÛİX™[[™Ë‚‹H
Š”İÈÛİŠŠˆ[Ù[\ˆŒÈÜˆNŒH[XYÙH›Ş\ÈÚ]XÚÈ›Ü™\œËÛÜ›™\ˆœ˜XÚÙ]Ë[™Ù[\™YÛ\È™XYH›Üˆ[[YYX]H\ÜÙ]Ü[][Û‹‚‚ˆÈÈÈÚ\È	ˆİ]\È˜YÙ\Â‹H
Š”İ]\È[™XØ]ÜŠŠˆ]™H]˜Z[Xš[]H˜YÙH[˜ÛÜœÜ˜][™ÈH[Ø][™ÈÜ™Y[ˆİ
ÌŒÍMQX
H[œÚYHHÜ™X[H[Ø\İ[HÚ]HœÛÛYÌLLLLLX›Ü™\‹‚‹H
Š‘^\šY[˜ÙHÚ\ŠŠˆYÚXÛÛ˜\İ[™\Y˜YÙH
ÌLLLLLXš[Ñ‘‘‘‘‘˜^[\ˆ›ÛLœ
K