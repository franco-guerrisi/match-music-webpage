---
name: Vibrant Pulse
colors:
  surface: '#fff8f6'
  surface-dim: '#efd4cb'
  surface-bright: '#fff8f6'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#fff1ec'
  surface-container: '#ffe9e2'
  surface-container-high: '#fee2d9'
  surface-container-highest: '#f8ddd4'
  on-surface: '#261813'
  on-surface-variant: '#5a4138'
  inverse-surface: '#3d2d27'
  inverse-on-surface: '#ffede7'
  outline: '#8e7166'
  outline-variant: '#e2bfb2'
  surface-tint: '#a73a00'
  primary: '#a33900'
  on-primary: '#ffffff'
  primary-container: '#cc4900'
  on-primary-container: '#fffbff'
  inverse-primary: '#ffb599'
  secondary: '#555f6f'
  on-secondary: '#ffffff'
  secondary-container: '#d6e0f3'
  on-secondary-container: '#596373'
  tertiary: '#5a5c5d'
  on-tertiary: '#ffffff'
  tertiary-container: '#737576'
  on-tertiary-container: '#fcfdfe'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdbce'
  primary-fixed-dim: '#ffb599'
  on-primary-fixed: '#370e00'
  on-primary-fixed-variant: '#7f2b00'
  secondary-fixed: '#d9e3f6'
  secondary-fixed-dim: '#bdc7d9'
  on-secondary-fixed: '#121c2a'
  on-secondary-fixed-variant: '#3d4756'
  tertiary-fixed: '#e1e3e4'
  tertiary-fixed-dim: '#c5c7c8'
  on-tertiary-fixed: '#191c1d'
  on-tertiary-fixed-variant: '#454748'
  background: '#fff8f6'
  on-background: '#261813'
  surface-variant: '#f8ddd4'
typography:
  display-lg:
    fontFamily: Montserrat
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Montserrat
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Montserrat
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
  headline-md:
    fontFamily: Montserrat
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.05em
  caption:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 12px
  md: 24px
  lg: 48px
  xl: 80px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
---

## Brand & Style

This design system is built to bridge the gap between the raw energy of live music and the professional precision of industry networking. The aesthetic is **High-Contrast & Modern**, utilizing bold color pops against a sophisticated neutral foundation. 

The UI should feel kinetic—evoking the anticipation of a concert through large typography and vibrant accents—while maintaining the clarity and reliability required for a professional SaaS platform. It avoids unnecessary clutter, favoring whitespace to let high-quality event photography and user profiles take center stage. The emotional response should be one of excitement, inclusivity, and technical confidence.

## Colors

The palette is led by a high-energy **Blaze Orange**, used strategically for primary actions and brand identifiers to drive conversion and focus. 

- **Primary (#EA580C):** Used for critical CTAs, active states, and progress indicators.
- **Secondary (#1F2937):** A deep charcoal used for text, navigation bars, and structural elements to provide a professional anchor.
- **Tertiary/Background (#F9FAFB):** A soft, cool white that reduces eye strain and provides a clean canvas for content.
- **Success/Error:** Use a vibrant emerald and a sharp crimson, respectively, but ensure they are secondary to the brand orange to maintain visual harmony.

## Typography

The typographic hierarchy utilizes two distinct sans-serif families to balance energy with utility.

**Headlines:** Montserrat is used for all display and heading levels. Its geometric construction and bold weights convey strength and excitement. Use tight tracking on larger display sizes to create a "poster" feel for event titles.

**Body & Interface:** Inter provides maximum legibility for networking profiles, message threads, and technical details. It remains neutral and functional, ensuring that dense information is easy to consume.

**Formatting Note:** Labels and small metadata should often use the `label-md` style with uppercase transformations to distinguish them clearly from body copy.

## Layout & Spacing

The layout follows an **8px baseline grid** to ensure mathematical consistency across all components.

- **Mobile:** Uses a 4-column fluid grid with 16px side margins. Content cards should typically span the full width of the column set.
- **Desktop:** Employs a 12-column fixed-center grid (max-width 1280px) with 24px gutters. This allows for complex dashboard layouts where networking sidebars and event feeds can coexist.
- **Rhythm:** Use generous vertical spacing (`lg` or `xl`) between major sections to prevent the "vibrant" colors from feeling overwhelming. Elements within a group (like a card's headline and body) should use `xs` or `sm` spacing.

## Elevation & Depth

This design system uses **Ambient Shadows** to create a sense of physical layering without leaning into full skeuomorphism. 

- **Level 1 (Resting Cards):** Very soft, diffused shadow with a 4px blur and 5% opacity of the secondary charcoal color.
- **Level 2 (Hover/Active):** Increased spread and a slight upward shift (Y-axis) to simulate "lift."
- **Level 3 (Modals/Overlays):** Deep, wide shadows (24px blur) with a subtle tint of the primary orange (#EA580C) at 3% opacity to give the overlay a warm, energetic glow.
- **Glass Effects:** For mobile navigation bars and top headers, use a backdrop-blur (12px) with a semi-transparent white (90% opacity) to maintain context of the content scrolling beneath.

## Shapes

The shape language is **Rounded**, reflecting a friendly and approachable community vibe while maintaining professional structure.

- **Standard Components:** Buttons, input fields, and tags use a 0.5rem (8px) radius.
- **Containers:** Large cards and surface areas use 1rem (16px) to create a soft, modern container.
- **Avatars:** User and band profiles should always be perfectly circular to contrast against the rectangular grid of event cards.

## Components

**Buttons:**
- **Primary:** Solid #EA580C with white text. High-shadow on hover.
- **Secondary:** Transparent with a 2px #1F2937 border.
- **Ghost:** No background or border, orange text, used for less critical actions.

**Cards:**
- Event cards should feature a large image header with the date and price overlayed in high-contrast tags. Use a subtle Level 1 elevation.
- Networking cards (profiles) focus on the circular avatar and "Connect" primary buttons.

**Inputs:**
- Use a 2px border for input states. Default border is a light gray; focus state border is #EA580C. 
- Labels should always be visible above the field using the `label-md` typographic style.

**Chips & Tags:**
- Use for music genres or instrument types. Rounded-pill shape with a light orange background (#FFEDD5) and dark orange text for high legibility and energy.

**Navigation:**
- Mobile navigation uses a bottom-docked bar with high-contrast icons. Active states are indicated by the primary orange color.