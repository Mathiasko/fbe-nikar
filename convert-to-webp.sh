#!/bin/bash

# Convert images to WebP format using ImageMagick
# Usage: ./convert-to-webp.sh [directory] [--delete-originals] [--quality N]

set -e

# Default values
SEARCH_DIR="${1:-./public}"
DELETE_ORIGINALS=false
QUALITY=80

# Parse arguments
shift 2>/dev/null || true
while [[ $# -gt 0 ]]; do
    case $1 in
        --delete-originals)
            DELETE_ORIGINALS=true
            shift
            ;;
        --quality)
            QUALITY="$2"
            shift 2
            ;;
        *)
            shift
            ;;
    esac
done

# Check if ImageMagick is installed
if ! command -v magick &> /dev/null && ! command -v convert &> /dev/null; then
    echo "Error: ImageMagick is not installed."
    echo "Install with: brew install imagemagick"
    exit 1
fi

# Determine which command to use (magick for v7+, convert for older)
if command -v magick &> /dev/null; then
    CONVERT_CMD="magick"
else
    CONVERT_CMD="convert"
fi

echo "Converting images to WebP format..."
echo "Directory: $SEARCH_DIR"
echo "Quality: $QUALITY"
echo "Delete originals: $DELETE_ORIGINALS"
echo "----------------------------------------"

# Find all image files
IMAGES=$(find "$SEARCH_DIR" -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" -o -iname "*.gif" \) 2>/dev/null)

if [ -z "$IMAGES" ]; then
    echo "No images found in $SEARCH_DIR"
    exit 0
fi

# Count total images
TOTAL=$(echo "$IMAGES" | wc -l | tr -d ' ')
CONVERTED=0
SKIPPED=0
FAILED=0

echo "Found $TOTAL images to convert"
echo ""

# Convert each image
echo "$IMAGES" | while read -r img; do
    # Get the output filename (replace extension with .webp)
    webp_file="${img%.*}.webp"

    # Skip if webp already exists
    if [ -f "$webp_file" ]; then
        echo "[SKIP] $img (webp exists)"
        ((SKIPPED++)) || true
        continue
    fi

    # Convert the image
    if $CONVERT_CMD "$img" -quality "$QUALITY" "$webp_file" 2>/dev/null; then
        # Get file sizes for comparison
        orig_size=$(stat -f%z "$img" 2>/dev/null || stat -c%s "$img" 2>/dev/null)
        webp_size=$(stat -f%z "$webp_file" 2>/dev/null || stat -c%s "$webp_file" 2>/dev/null)

        # Calculate savings percentage
        if [ "$orig_size" -gt 0 ]; then
            savings=$(( (orig_size - webp_size) * 100 / orig_size ))
        else
            savings=0
        fi

        echo "[OK] $img -> $webp_file (${savings}% smaller)"

        # Delete original if requested
        if [ "$DELETE_ORIGINALS" = true ]; then
            rm "$img"
            echo "     Deleted original: $img"
        fi

        ((CONVERTED++)) || true
    else
        echo "[FAIL] $img"
        ((FAILED++)) || true
    fi
done

echo ""
echo "----------------------------------------"
echo "Conversion complete!"
echo "Run with --delete-originals to remove original files after conversion"
