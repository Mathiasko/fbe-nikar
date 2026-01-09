# Phase 5: Album Pages - Context

## User Vision

**Album detail pages should feel like an immersive photo experience.**

### Layout Style: Masonry/Pinterest
- Photos displayed at their natural aspect ratios
- Staggered layout that flows organically
- No forced cropping or uniform sizing
- CSS-only implementation (columns or grid)

### Vibe: Dense & Immersive
- Photos close together with minimal gaps
- Layout fills the screen
- Focus is entirely on the images
- No excessive whitespace or padding

### Priority: Easy Navigation
- Getting in, out, and between albums should be effortless
- Clear back link to gallery index
- Obvious clickability for full-size view
- Simple, intuitive interface

## Technical Approach

### CSS-Only Masonry
Since zero-JS is required, use CSS columns for masonry effect:
```css
.album-masonry {
  column-count: 3;
  column-gap: 0.5rem;
}

.album-masonry img {
  width: 100%;
  margin-bottom: 0.5rem;
  break-inside: avoid;
}

@media (max-width: 768px) {
  .album-masonry { column-count: 2; }
}

@media (max-width: 480px) {
  .album-masonry { column-count: 1; }
}
```

### Dense Styling
- Small gaps (0.5rem or less)
- No borders or decorative elements on images
- Subtle hover effect only (slight scale or opacity)
- Full-width container

### Navigation Elements
- Sticky or prominent back link
- Album title visible but not dominating
- Click any image → opens full-size in new tab

## Constraints

- Zero JavaScript
- Static output for FTP
- Bilingual (SK/EN)
- Reuse existing sample images for initial implementation
