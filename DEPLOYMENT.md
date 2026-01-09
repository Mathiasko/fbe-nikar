# Deployment Guide

This document describes how to build and deploy the NIKAR Training Center website.

## Prerequisites

- Node.js 18+ installed
- npm (comes with Node.js)

## Building the Site

1. Install dependencies (first time only):
   ```bash
   npm install
   ```

2. Build the production site:
   ```bash
   npm run build
   ```

3. The build creates a `dist/` folder containing the complete static website.

## Deploying to FTP Server

1. Connect to your web hosting via FTP (using FileZilla, WinSCP, or similar)

2. Upload the **contents** of the `dist/` folder to your web server root
   - Upload all files and folders inside `dist/`
   - Do NOT upload the `dist/` folder itself - upload its contents

3. The site structure should look like this on your server:
   ```
   /                     (web root)
   ├── index.html        (redirects to /sk/)
   ├── sk/               (Slovak pages)
   │   ├── index.html
   │   ├── cennik/
   │   ├── kontakt/
   │   └── ...
   ├── en/               (English pages)
   │   ├── index.html
   │   ├── pricing/
   │   ├── contact/
   │   └── ...
   └── _astro/           (CSS and images)
   ```

## Google Sheets Pricing Integration

The site can pull pricing data from Google Sheets at build time.

### Setup

1. Create a Google Sheet with your pricing data (see `.env.example` for format)

2. Make the sheet public: **Share > Anyone with the link > Viewer**

3. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```

4. Add your Google Sheets ID to `.env`:
   ```
   PUBLIC_SHEETS_ID=your_sheet_id_here
   ```
   Find the ID in your sheet URL: `docs.google.com/spreadsheets/d/[THIS_IS_THE_ID]/edit`

5. Rebuild and redeploy

### Updating Prices

1. Edit your Google Sheet
2. Run `npm run build` on your development machine
3. Upload the new `dist/` contents to your server

Note: Changes to the spreadsheet require a new build. The site does not fetch data at runtime.

## Development

Preview the site locally:
```bash
npm run dev
```

The site runs at `http://localhost:4321`

## Technical Notes

- **Zero JavaScript**: The site works without JavaScript enabled
- **Static HTML/CSS only**: No server-side processing required
- **No database**: All content is built into static HTML files
- **Bilingual**: Slovak (sk) and English (en) versions at separate URLs

## Troubleshooting

### Images not loading
- Ensure the `_astro/` folder is uploaded
- Check that image paths start with `/_astro/`

### Styles not applying
- Verify that CSS files in `_astro/` are uploaded
- Check browser console for 404 errors

### Pricing not updating
- Confirm the Google Sheet is public
- Verify `PUBLIC_SHEETS_ID` is correct in `.env`
- Run a fresh build: `npm run build`

## Support

For questions about this website, contact your developer.
