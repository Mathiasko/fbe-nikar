#!/usr/bin/env python3
"""
Website Image Crawler
Crawls a website and downloads all images found.
"""

import os
import re
import sys
import argparse
import hashlib
from urllib.parse import urljoin, urlparse
from collections import deque

import requests
from bs4 import BeautifulSoup
import urllib3

# Suppress SSL warnings when verification is disabled
urllib3.disable_warnings(urllib3.exceptions.InsecureRequestWarning)


def get_image_extension(url, content_type=None):
    """Determine image extension from URL or content type."""
    # Try to get from URL first
    path = urlparse(url).path.lower()
    for ext in ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg', '.bmp', '.ico']:
        if path.endswith(ext):
            return ext

    # Try from content type
    if content_type:
        type_map = {
            'image/jpeg': '.jpg',
            'image/png': '.png',
            'image/gif': '.gif',
            'image/webp': '.webp',
            'image/svg+xml': '.svg',
            'image/bmp': '.bmp',
            'image/x-icon': '.ico',
        }
        for mime, ext in type_map.items():
            if mime in content_type:
                return ext

    return '.jpg'  # Default


def sanitize_filename(url):
    """Create a safe filename from URL."""
    # Use hash of URL to ensure uniqueness
    url_hash = hashlib.md5(url.encode()).hexdigest()[:8]
    # Try to preserve original filename
    path = urlparse(url).path
    filename = os.path.basename(path)
    # Remove query strings and clean up
    filename = re.sub(r'[^\w\-_.]', '_', filename)
    if not filename or filename == '_':
        filename = url_hash
    else:
        # Prepend hash to avoid collisions
        name, ext = os.path.splitext(filename)
        filename = f"{name}_{url_hash}{ext}"
    return filename


def download_image(url, output_dir, session, verify_ssl=False):
    """Download a single image."""
    try:
        response = session.get(url, timeout=30, stream=True, verify=verify_ssl)
        response.raise_for_status()

        content_type = response.headers.get('content-type', '')
        if 'image' not in content_type and not any(
            url.lower().endswith(ext) for ext in ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg']
        ):
            return None

        filename = sanitize_filename(url)
        # Ensure correct extension
        if not any(filename.lower().endswith(ext) for ext in ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg', '.bmp', '.ico']):
            filename += get_image_extension(url, content_type)

        filepath = os.path.join(output_dir, filename)

        with open(filepath, 'wb') as f:
            for chunk in response.iter_content(chunk_size=8192):
                f.write(chunk)

        return filepath
    except Exception as e:
        print(f"  Error downloading {url}: {e}")
        return None


def extract_images(soup, base_url):
    """Extract all image URLs from a page."""
    images = set()

    # <img> tags
    for img in soup.find_all('img'):
        src = img.get('src') or img.get('data-src') or img.get('data-lazy-src')
        if src:
            images.add(urljoin(base_url, src))
        # srcset attribute
        srcset = img.get('srcset')
        if srcset:
            for item in srcset.split(','):
                parts = item.strip().split()
                if parts:
                    images.add(urljoin(base_url, parts[0]))

    # Background images in style attributes
    for elem in soup.find_all(style=True):
        style = elem['style']
        urls = re.findall(r'url\(["\']?([^"\'()]+)["\']?\)', style)
        for url in urls:
            if any(ext in url.lower() for ext in ['.jpg', '.jpeg', '.png', '.gif', '.webp']):
                images.add(urljoin(base_url, url))

    # <picture> and <source> tags
    for source in soup.find_all('source'):
        srcset = source.get('srcset')
        if srcset:
            for item in srcset.split(','):
                parts = item.strip().split()
                if parts:
                    images.add(urljoin(base_url, parts[0]))

    # Open Graph and meta images
    for meta in soup.find_all('meta'):
        if meta.get('property') in ['og:image', 'twitter:image']:
            content = meta.get('content')
            if content:
                images.add(urljoin(base_url, content))

    return images


def extract_links(soup, base_url, same_domain_only=True):
    """Extract all links from a page."""
    links = set()
    base_domain = urlparse(base_url).netloc

    for a in soup.find_all('a', href=True):
        href = a['href']
        full_url = urljoin(base_url, href)
        parsed = urlparse(full_url)

        # Skip non-http links
        if parsed.scheme not in ('http', 'https'):
            continue

        # Skip anchors and common non-page extensions
        if any(full_url.lower().endswith(ext) for ext in ['.pdf', '.zip', '.tar', '.gz', '.mp4', '.mp3']):
            continue

        if same_domain_only and parsed.netloc != base_domain:
            continue

        # Remove fragment
        full_url = full_url.split('#')[0]
        links.add(full_url)

    return links


def crawl(start_url, output_dir, max_depth=2, same_domain_only=True):
    """Crawl website and download images."""
    os.makedirs(output_dir, exist_ok=True)

    session = requests.Session()
    session.headers.update({
        'User-Agent': 'Mozilla/5.0 (compatible; ImageCrawler/1.0)'
    })

    visited = set()
    downloaded = set()
    queue = deque([(start_url, 0)])

    print(f"Starting crawl from: {start_url}")
    print(f"Max depth: {max_depth}")
    print(f"Output directory: {output_dir}")
    print("-" * 50)

    while queue:
        url, depth = queue.popleft()

        if url in visited:
            continue
        visited.add(url)

        print(f"\n[Depth {depth}] Crawling: {url}")

        try:
            response = session.get(url, timeout=30, verify=False)
            response.raise_for_status()

            # Only parse HTML
            content_type = response.headers.get('content-type', '')
            if 'text/html' not in content_type:
                continue

            soup = BeautifulSoup(response.text, 'html.parser')

            # Extract and download images
            images = extract_images(soup, url)
            print(f"  Found {len(images)} images")

            for img_url in images:
                if img_url not in downloaded:
                    downloaded.add(img_url)
                    result = download_image(img_url, output_dir, session)
                    if result:
                        print(f"  Downloaded: {os.path.basename(result)}")

            # Add links to queue if not at max depth
            if depth < max_depth:
                links = extract_links(soup, url, same_domain_only)
                for link in links:
                    if link not in visited:
                        queue.append((link, depth + 1))

        except Exception as e:
            print(f"  Error crawling {url}: {e}")

    print("\n" + "=" * 50)
    print(f"Crawl complete!")
    print(f"Pages visited: {len(visited)}")
    print(f"Images downloaded: {len([f for f in os.listdir(output_dir) if os.path.isfile(os.path.join(output_dir, f))])}")


def main():
    parser = argparse.ArgumentParser(
        description='Crawl a website and download all images.',
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog="""
Examples:
  %(prog)s https://example.com
  %(prog)s https://example.com -o ./images -d 3
  %(prog)s https://example.com --all-domains
        """
    )
    parser.add_argument('url', help='Starting URL to crawl')
    parser.add_argument('-o', '--output', default='./downloaded_images',
                        help='Output directory (default: ./downloaded_images)')
    parser.add_argument('-d', '--depth', type=int, default=2,
                        help='Maximum crawl depth (default: 2)')
    parser.add_argument('--all-domains', action='store_true',
                        help='Follow links to other domains (default: same domain only)')

    args = parser.parse_args()

    # Validate URL
    parsed = urlparse(args.url)
    if not parsed.scheme:
        args.url = 'https://' + args.url

    crawl(
        start_url=args.url,
        output_dir=args.output,
        max_depth=args.depth,
        same_domain_only=not args.all_domains
    )


if __name__ == '__main__':
    main()
