# Diya Budhia — Portfolio

A cinematic personal portfolio built with React, TypeScript, and Three.js. Deep near-black backdrop, aurora (purple → pink → orange) hero with a WebGL lightning shader, sunset gradient accents, glassmorphic surfaces, film grain, and a 3D MacBook centerpiece.

## Stack

- **React 18 + Vite + TypeScript**
- **Tailwind CSS** — all design tokens live in `tailwind.config.ts`
- **Framer Motion** — entrance choreography, scroll reveals, scroll-drawn timeline
- **React Three Fiber + Drei** — 3D MacBook hero with typewriter code screen (lazy-loaded)
- **Lucide React + Devicons CDN** — iconography
- **Fonts** — Clash Display (Fontshare), Inter & Fira Code (Google Fonts)

## Getting Started

```bash
npm install
npm run dev      # local dev server
npm run build    # type-check + production build to dist/
npm run preview  # serve the production build locally
```

## Placeholders to Fill In

| Slot | Location |
|------|----------|
| Profile photo | Replace the `DB` monogram in `src/sections/About.tsx` with an `<img>` pointing at `public/img/portrait.webp` |
| CV file | Drop your PDF at `public/cv/Diya-Budhia-CV.pdf` (linked from Hero + Contact) |
| Social URLs | Verify LinkedIn/GitHub handles in `src/sections/Hero.tsx` and `src/sections/Contact.tsx` |

## Structure

```
src/
├── App.tsx                  # section composition (native scrolling)
├── components/
│   ├── Cursor.tsx           # custom spring-lag cursor (fine pointers only)
│   ├── Grain.tsx            # film grain overlay (inline SVG noise)
│   ├── Laptop3D.tsx         # R3F MacBook with animated code screen
│   ├── Nav.tsx              # floating glass pill with scroll-spy
│   ├── SectionHeading.tsx
│   └── Typewriter.tsx
└── sections/
    ├── Hero.tsx
    ├── About.tsx
    ├── Interests.tsx
    ├── TechStack.tsx
    ├── Experience.tsx
    ├── Achievements.tsx
    └── Contact.tsx
```

## Accessibility & Motion

- `prefers-reduced-motion` disables the custom cursor and all animation
- Custom cursor only mounts on fine-pointer devices; touch devices keep native behavior
- Semantic landmarks, keyboard-reachable interactive elements, labelled icon links
