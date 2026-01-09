# Phase 7: Room Detail Pages - Context

**Gathered:** 2026-01-09
**Status:** Ready for planning

<vision>
## How This Should Work

Room names in the room overview comparison table become clickable links. When a visitor clicks on "Brown 101" or any other room name, they go to a dedicated page for that room.

On the room detail page, visitors see:
- The room's feature column from the comparison table (what this specific room has)
- A gallery of room photos with CSS-only lightbox (click to enlarge)

This gives visitors a focused view of one room at a time, with the ability to see the photos larger without leaving the page.

</vision>

<essential>
## What Must Be Nailed

- **Room feature clarity** - Easy to see exactly what this specific room offers at a glance
- **CSS-only lightbox** - Click any image to see it full-size in an overlay, no JavaScript
- **Consistent navigation** - Easy to get back to room overview or check other rooms

</essential>

<boundaries>
## What's Out of Scope

- Booking/reservation forms - just information display
- 360° virtual tours - static images only, no panorama viewers
- Interactive elements requiring JavaScript

</boundaries>

<specifics>
## Specific Ideas

- Room name links from the comparison table headers
- Show room's column data as a feature list (checkmarks for what it has)
- 2-4 curated photos per room with lightbox enlargement
- Color-coded header matching the room (brown, green, yellow, blue)

</specifics>

<notes>
## Additional Context

Room numbers indicate floor: 101/102 = 1st floor, 201/202 = 2nd floor.

This follows the same pattern as album detail pages - cards link to detail pages. The lightbox approach differs from albums (which open in new tabs) to provide a smoother in-page experience.

</notes>

---

*Phase: 07-room-detail-pages*
*Context gathered: 2026-01-09*
