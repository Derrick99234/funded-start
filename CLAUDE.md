# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

FundedStart is a Next.js landing page for a platform connecting African startup founders with individual investors. The project uses a custom Material Design 3-based design system with brand-specific colors (navy and emerald).

## Tech Stack

- **Framework**: Next.js 16.3.0 with App Router
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4 with @tailwindcss/postcss
- **UI Framework**: React 19
- **Linting**: ESLint 9 with Next.js and TypeScript configs
- **Fonts**: Inter (body text), Manrope (headings), Material Symbols Outlined (icons)

## Directory Structure

```
src/
├── app/
│   ├── layout.tsx        # Root layout with metadata and font setup
│   ├── page.tsx          # Landing page (main content)
│   └── globals.css       # Design system tokens and Tailwind config
└── components/
    └── mobile-nav.tsx    # Mobile navigation menu (client component)
```

## Design System

Colors and spacing are defined as CSS custom properties in `src/app/globals.css` using Tailwind's `@theme inline` directive.

### Color Palette
- **Brand Colors**: `--color-brand-navy`, `--color-brand-emerald`, `--color-brand-gold`
- **Material Design 3**: Primary, secondary, tertiary, surface, outline colors
- **Backgrounds**: Layered surface containers (lowest, low, high, highest)

### Typography
- **Heading fonts**: Manrope (display-lg, headline-lg, headline-md)
- **Body fonts**: Inter (body-lg, body-md, label-md, caption)
- All font sizes, line-heights, and weights defined as CSS custom properties

### Spacing Scale
Scale from xs (8px) to xl (64px): xs, sm, md, lg, xl; plus gutter (24px) and margins (16px mobile, 48px desktop)

## Common Commands

```bash
# Development
npm run dev           # Start dev server at http://localhost:3000

# Production
npm run build         # Create production build
npm start             # Run production server

# Quality
npm run lint          # Run ESLint (use --fix to auto-fix issues)
npm run lint -- --fix # Fix linting issues automatically
```

## Key Architecture Notes

### Responsive Design
- Mobile-first approach: base styles are mobile, media queries add desktop features
- Mobile breakpoint handled with `md:` Tailwind prefix (768px+)
- Navigation component (`MobileNav`) only renders on mobile, desktop nav in header

### Page Structure
The landing page (`src/app/page.tsx`) is organized into multiple hero/content sections, each in its own `<section>`:
1. **Navigation**: Sticky header with logo and links
2. **Hero**: Main headline and CTA buttons with hero image
3. **Problem**: Two-column card section explaining the problem
4. **How It Works**: Three-step process with connecting line (desktop only)
5. **Why**: Four-card benefits section with icons
6. **Stats**: Three statistics highlighting the funding gap
7. **Evidence**: Four-card evidence section with external sources
8. **Validation**: Two-column survey section (for founders and investors)
9. **CTA**: Final call-to-action section
10. **Footer**: Copyright and footer links

### Component Approach
- **Server Components**: Most of the page is server-rendered by default
- **Client Components**: Only `MobileNav` uses `"use client"` for state management
- **Data Inline**: All content (cards, links, stats) is hardcoded in the component — no external data fetching
- **Reusable Patterns**: Card sections map over data arrays; consistent use of Tailwind classes

### Image Handling
- Images use Next.js `Image` component for optimization
- Images stored in `public/` directory
- All images have descriptive alt text

## Design Tokens

When making UI changes, use the CSS custom properties from globals.css:
- Text styles: `font-display-lg`, `font-headline-lg`, `font-body-md`, etc.
- Colors: Use `text-brand-navy`, `bg-brand-emerald`, etc. (mapped to CSS vars via Tailwind)
- Spacing: `gap-gutter`, `p-lg`, `px-margin-mobile`, etc.
- Never hardcode pixel values for colors or spacing

## ESLint Configuration

The project uses ESLint flat config (`eslint.config.mjs`):
- Base configs: `eslint-config-next/core-web-vitals` and `eslint-config-next/typescript`
- Global ignores: `.next/`, `out/`, `build/`, `next-env.d.ts`
- No additional custom rules beyond Next.js defaults

## Tailwind + Next.js Gotchas

- Tailwind 4 uses `@theme inline` in CSS instead of separate `tailwind.config.js`
- Material Symbols Outlined icons require the Google Fonts stylesheet in the layout (already included)
- `@next/next/no-page-custom-font` ESLint rule is disabled for custom font stylesheet

## Git & Commits

- Recent work includes logo updates and landing page design from Stitch design system
- Prefer concise, descriptive commit messages
- Branch strategy: work on feature branches, PR to main

## Working with Claude Code

**Key Principle**: Implement exactly what is asked, no more, no less.

- **Be direct**: Focus only on the requested task. Don't add extra features or "improvements" beyond scope.
- **Ask for clarity**: If instructions are unclear, ask for clarification before proceeding.
- **Suggest alternatives**: If you see a better approach, present it as a suggestion—don't implement it without approval.
- **No scope creep**: Avoid adding related features, refactoring unrelated code, or "while I'm at it" changes.
- **Terse responses**: Explain what changed and why, keep it brief. No unnecessary summaries or narration.
