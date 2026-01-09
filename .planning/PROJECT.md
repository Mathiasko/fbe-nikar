# FBE Portfolio Website

## What This Is

A presentational portfolio website showcasing creative work through high-quality images, with pricing information that can be easily updated by the client via Google Sheets. Built for traditional hosting with zero JavaScript requirement.

## Core Value

Professional impression — clean, polished design that builds trust and showcases work beautifully.

## Requirements

### Validated

(None yet — ship to validate)

### Active

- [ ] Image gallery/portfolio presentation with optimized loading
- [ ] Pricing section pulling data from Google Sheets
- [ ] Responsive design that works across devices
- [ ] Zero-JS functionality (progressive enhancement only)
- [ ] Static output compatible with traditional FTP hosting
- [ ] Client-friendly content update workflow via spreadsheet

### Out of Scope

- Contact forms — just email/phone links, no form submissions
- Blog/news section — purely presentational, no articles
- E-commerce — display pricing only, no online purchasing
- CMS admin interface — client edits spreadsheet directly

## Context

This is a rebuild of an existing website. The client needs to update pricing approximately 1-2 times per year. The previous site's update workflow was problematic — the new approach uses Google Sheets as a simple data source that non-technical users can edit.

Portfolio/gallery images are the primary content. Image presentation quality and loading performance are critical to the professional impression.

## Constraints

- **No-JS requirement**: Site must be fully functional without JavaScript enabled — accessibility and broad compatibility
- **Traditional hosting**: Must output static files for FTP upload to shared hosting (no serverless, no Vercel/Netlify)
- **Client-editable content**: Pricing data must be manageable by non-technical client via spreadsheet

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| Astro framework | Zero-JS default, excellent image optimization, static output, component-based maintainability | — Pending |
| Google Sheets for pricing | Client-friendly interface, no learning curve, familiar tool | — Pending |
| Static site generation | Compatible with traditional hosting, fast loading, no server dependencies | — Pending |

---
*Last updated: 2026-01-09 after initialization*
