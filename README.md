# Hanoi Ad Circle Tool

Static GitHub Pages deployment for the Hanoi advertising circle zoning tool.

## Files

- `index.html`: GitHub Pages entry page for the 193 Bà Triệu blocking version.
- `targeted-block.html`: alternate entry page using three smaller targeted blocking circles.
- `河内圈_种子数据.js`: seed coordinate data.
- `河内圈_工具代码.js`: map, zoning, export, coordinate lookup, and language switching logic.
- `vendor/`: local Leaflet and SheetJS assets so Excel export does not depend on CDN loading.

## Features

- Chinese/Vietnamese UI, with automatic language detection and a manual language selector.
- Fuzzy coordinate lookup from plain coordinates, Google Ads Location strings, Google Maps URLs, lat/lng labels, Vietnamese coordinate labels, and reversed longitude/latitude order.
- Circle hover/click details include the Google Ads Location coordinate string.
- Optional extra blocking group: click outer circles to move them into an independent exclusion group, then copy or export that group separately.

## Deploy With GitHub Pages

1. Create a public GitHub repository.
2. Upload all files in this folder.
3. In the repository, go to Settings > Pages.
4. Set Source to `Deploy from a branch`, Branch to `main`, Folder to `/root`.
5. Open `https://<username>.github.io/<repo-name>/` after Pages finishes building.
