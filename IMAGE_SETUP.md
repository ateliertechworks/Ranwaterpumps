# Image Setup Guide

## Directory Structure

```
/public/images/          ← All static images go here
├── logo.png            ← Logo (if needed in public)
├── single.png
├── monobloc-centrifugal.png
├── vertical-openwell-submersible.png
├── borewell-submersible.png
├── stainless-steel-borewell.png
├── vertical-monobloc-dewatering.png
├── threephase-centre.png
├── threephase.png
├── pressure-booster.png
├── single-phase-vertical.png
├── control-panel.png
├── single-three-phase-pump.png
├── single-mini.png
├── single-phase-master-pump.png
├── gallery-1.png
├── gallery-2.png
├── gallery-3.png
├── gallery-4.png
├── gallery-5.png
└── gallery-6.png
```

## Usage in Code

All images should be referenced using absolute paths starting from `/images/`:

```tsx
// In React components
<img src="/images/single.png" alt="Submersible Pump" />

// Or through IMAGES object in src/assets/images.ts
import { IMAGES } from '@/src/assets/images';
<img src={IMAGES.products.submersible1} alt="Pump" />
```

## Key Points

- **Do NOT include `public`** in the path - only use `/images/`
- Images in `/public/images/` are served as static assets
- Logo and hero background are bundled with the app from `/src/assets/`
- During build, files from `/public/` are automatically copied to `/dist/`

## Build & Deployment

```bash
# Development
npm run dev

# Production build
npm run build

# Preview production build
npm run preview
```

The dist folder will contain:
- `/dist/index.html` - Main HTML file
- `/dist/assets/` - Bundled CSS and JS
- `/dist/images/` - Static images (copied from /public/images/)

## Upload Images

Replace the placeholder files in `/public/images/` with your actual product images and gallery images. The paths will automatically work once the files are in place.
