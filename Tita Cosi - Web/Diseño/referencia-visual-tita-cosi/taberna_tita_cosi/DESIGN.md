---
name: Taberna Tita Cosi
colors:
  surface: '#faf9f7'
  surface-dim: '#dadad8'
  surface-bright: '#faf9f7'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f4f3f1'
  surface-container: '#efeeec'
  surface-container-high: '#e9e8e6'
  surface-container-highest: '#e3e2e0'
  on-surface: '#1a1c1b'
  on-surface-variant: '#444748'
  inverse-surface: '#2f3130'
  inverse-on-surface: '#f1f1ef'
  outline: '#747878'
  outline-variant: '#c4c7c7'
  surface-tint: '#5f5e5e'
  primary: '#151616'
  on-primary: '#ffffff'
  primary-container: '#2a2a2a'
  on-primary-container: '#929191'
  inverse-primary: '#c8c6c5'
  secondary: '#615e56'
  on-secondary: '#ffffff'
  secondary-container: '#e7e2d8'
  on-secondary-container: '#67645c'
  tertiary: '#360004'
  on-tertiary: '#ffffff'
  tertiary-container: '#541114'
  on-tertiary-container: '#d77574'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e4e2e1'
  primary-fixed-dim: '#c8c6c5'
  on-primary-fixed: '#1b1c1c'
  on-primary-fixed-variant: '#474746'
  secondary-fixed: '#e7e2d8'
  secondary-fixed-dim: '#cbc6bc'
  on-secondary-fixed: '#1d1c16'
  on-secondary-fixed-variant: '#49473f'
  tertiary-fixed: '#ffdad8'
  tertiary-fixed-dim: '#ffb3b0'
  on-tertiary-fixed: '#3f0207'
  on-tertiary-fixed-variant: '#7a2d2e'
  background: '#faf9f7'
  on-background: '#1a1c1b'
  surface-variant: '#e3e2e0'
typography:
  headline-xl:
    fontFamily: Newsreader
    fontSize: 48px
    fontWeight: '600'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Newsreader
    fontSize: 36px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Newsreader
    fontSize: 28px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Newsreader
    fontSize: 24px
    fontWeight: '500'
    lineHeight: '1.3'
  body-lg:
    fontFamily: DM Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: DM Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-md:
    fontFamily: DM Sans
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.2'
    letterSpacing: 0.05em
  label-sm:
    fontFamily: DM Sans
    fontSize: 12px
    fontWeight: '700'
    lineHeight: '1.2'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
  container-max: 1280px
---

## Brand & Style

The design system is built to reflect the "Malagueño" spirit—a blend of historical depth, sun-drenched hospitality, and contemporary gastronomic precision. It avoids common Mediterranean clichés in favor of a sophisticated **Minimalist** aesthetic with **Corporate/Modern** structural discipline.

The visual narrative evokes the feeling of a modern tavern: the tactile quality of a thick paper menu, the coolness of a stone countertop, and the warmth of a red wine reduction. It aims to feel established and trustworthy while maintaining an approachable, welcoming atmosphere. High-contrast typography and generous whitespace are used to signify quality and attention to detail.

## Colors

The palette is grounded in earthy, organic tones that provide a "warm-neutral" foundation.

- **Base (#F9F8F6):** A light cream used for the primary canvas to reduce eye strain and provide a softer alternative to pure white.
- **Surface (#E8E3D9):** A secondary "Greige" used for cards, secondary navigation, and subtle section dividers.
- **Primary (#2A2A2A):** A soft charcoal used for all core typography and iconography to ensure high legibility and a sense of permanence.
- **Accent (#8C3B3B):** A "Rioja Red" utilized sparingly for Call-to-Action elements, hover states, and critical notifications, providing a sophisticated pop of color that aligns with the tavern theme.

## Typography

This design system employs a pairing of **Newsreader** and **DM Sans** to balance tradition and utility.

**Newsreader** is reserved for headlines. Its editorial, authoritative character lends an air of history and culinary expertise. Use tighter letter spacing for large display text to maintain a modern edge.

**DM Sans** is the workhorse for body text, UI labels, and inputs. Its geometric clarity ensures that detailed menu descriptions and reservation forms remain legible even on small mobile devices. Use the uppercase label styles for categories and "Overlines" to create a structured hierarchy.

## Layout & Spacing

The layout follows a **Fixed Grid** model on desktop and a **Fluid Grid** on mobile, utilizing an 8px rhythmic scale.

- **Desktop:** 12-column grid with 24px gutters. Content is centered with a maximum width of 1280px to maintain readability and focus.
- **Mobile:** 4-column grid with 16px side margins. 
- **Rhythm:** Vertical spacing between sections should favor large gaps (64px+) to reflect the "Minimalist" brand value, allowing the high-quality photography and typography to breathe. Use smaller increments (8px, 16px, 24px) for internal component spacing.

## Elevation & Depth

Visual hierarchy is established through **Tonal Layers** and **Ambient Shadows**.

The background uses the light cream base, while interactive elements like cards sit on the slightly darker Greige surface. Shadows are used strictly to indicate interactivity or floating modals. They should be soft, diffused, and slightly tinted with the accent color (e.g., a dark red-tinted shadow at 5-10% opacity) to feel more integrated with the brand's warmth than a neutral grey shadow.

- **Low Elevation:** Used for menu item cards. Subtle 1px border (#E8E3D9) with no shadow.
- **Mid Elevation:** Used for hover states on cards. Soft 8px blur shadow with 4px offset.
- **High Elevation:** Used for reservation modals and navigation bars. 16px blur shadow with 8px offset.

## Shapes

The shape language is defined as **Rounded**, utilizing a base 0.5rem (8px) radius. This choice softens the formal typography and makes the UI feel more approachable and "welcoming."

Large containers like hero images or menu categories should use `rounded-xl` (1.5rem / 24px) to create a soft, modern framing effect. Input fields and buttons should strictly adhere to the base 0.5rem radius to maintain a professional, structured appearance.

## Components

### Buttons
- **Primary:** Background #8C3B3B, text #F9F8F6, 8px roundedness. On hover, darken the background slightly.
- **Secondary:** Transparent background, 1px border #2A2A2A, text #2A2A2A. 
- **Text:** All-caps DM Sans, bold, with a 2px underline appearing on hover.

### Cards (Menu & Reviews)
- Use #E8E3D9 for the card background.
- Include a 1px solid border in a slightly darker shade of the surface color to define the edge.
- Price points in menu cards should be styled in **Newsreader** to emphasize the value.

### Input Fields
- Background should be white (#FFFFFF) to provide contrast against the cream base.
- Border: 1px #E8E3D9. On focus, the border changes to #8C3B3B.
- Label text should use `label-sm` (uppercase DM Sans).

### Chips
- Used for dietary tags (e.g., "Gluten-Free," "Local").
- Small, pill-shaped, with a #E8E3D9 background and #2A2A2A text.

### Navigation
- A sticky top bar with a backdrop blur effect.
- Use the primary #2A2A2A for the logo and main navigation links.