/**
 * Google Sheets CSV Fetching Utility
 *
 * Fetches data from a public Google Sheet at build time.
 * The sheet must have "Anyone with link can view" permission.
 */

export interface RoomPricing {
  name: string;
  link?: string;
  size: string;
  capacity: string;
  price: string;
}

/**
 * Extracts name and optional link from a cell value.
 * Format: "Room Name [https://example.com]" or just "Room Name"
 */
function extractNameAndLink(value: string): { name: string; link?: string } {
  const linkMatch = value.match(/^(.+?)\s*\[([^\]]+)\]\s*$/);
  if (linkMatch) {
    return { name: linkMatch[1].trim(), link: linkMatch[2].trim() };
  }
  return { name: value.trim() };
}

export interface CateringItem {
  item: string;
  price: string;
  unit: string;
}

export interface PricingData {
  rooms: RoomPricing[];
  catering: CateringItem[];
}

/**
 * Parses a CSV string into a 2D array.
 * Handles quoted fields and commas within values.
 */
function parseCSV(csv: string): string[][] {
  const rows: string[][] = [];
  const lines = csv.split('\n');

  for (const line of lines) {
    if (!line.trim()) continue;

    const row: string[] = [];
    let current = '';
    let inQuotes = false;

    for (let i = 0; i < line.length; i++) {
      const char = line[i];

      if (char === '"') {
        if (inQuotes && line[i + 1] === '"') {
          // Escaped quote
          current += '"';
          i++;
        } else {
          // Toggle quote mode
          inQuotes = !inQuotes;
        }
      } else if (char === ',' && !inQuotes) {
        row.push(current.trim());
        current = '';
      } else {
        current += char;
      }
    }

    // Add last field
    row.push(current.trim());
    rows.push(row);
  }

  return rows;
}

/**
 * Fetches a Google Sheet as CSV and parses it into a 2D array.
 *
 * @param sheetId - The Google Sheet ID (from the URL)
 * @param gid - Optional tab ID (default is first tab, gid=0)
 * @returns Parsed CSV data as 2D array, or empty array on failure
 */
export async function fetchSheetAsCSV(
  sheetId: string,
  gid: string = '0'
): Promise<string[][]> {
  const url = `https://docs.google.com/spreadsheets/d/${sheetId}/export?format=csv&gid=${gid}`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      console.warn(`Failed to fetch sheet: ${response.status} ${response.statusText}`);
      return [];
    }

    const csv = await response.text();
    return parseCSV(csv);
  } catch (error) {
    console.warn('Failed to fetch Google Sheet:', error);
    return [];
  }
}

/**
 * Parses raw CSV data into structured pricing data.
 * Expects the sheet to have a specific format:
 * - First section: Room rentals (Name, Half Day, Full Day, Notes)
 * - Second section: Catering (Item, Price, Unit)
 * Sections are separated by an empty row or a section header.
 */
export function parsePricingData(data: string[][]): PricingData {
  const rooms: RoomPricing[] = [];
  const catering: CateringItem[] = [];

  let currentSection: 'rooms' | 'catering' | null = null;

  for (const row of data) {
    // Skip empty rows
    if (row.length === 0 || row.every(cell => !cell.trim())) {
      continue;
    }

    const firstCell = row[0]?.toLowerCase().trim() || '';

    // Detect section headers (be specific to avoid matching data rows like "Coaching Room")
    if (firstCell.includes('rooms') || firstCell.includes('miestnosti') || firstCell.includes('prenájom') || firstCell.includes('školiaca')) {
      currentSection = 'rooms';
      continue;
    }

    if (firstCell.includes('catering') || firstCell.includes('občerstvenie') || firstCell.includes('jedlo') || firstCell.includes('doplnk')) {
      currentSection = 'catering';
      continue;
    }

    // Skip header rows (detect by common header terms)
    if (firstCell === 'name' || firstCell === 'názov' || firstCell === 'item' || firstCell === 'položka' || firstCell.includes('m2') || firstCell === 'm²') {
      continue;
    }

    // Parse data based on current section
    if (currentSection === 'rooms' && row.length >= 3) {
      const { name, link } = extractNameAndLink(row[0] || '');
      rooms.push({
        name,
        link,
        size: row[1] || '',
        capacity: row[2] || '',
        price: row[3] || ''
      });
    } else if (currentSection === 'catering' && row.length >= 2) {
      catering.push({
        item: row[0] || '',
        price: row[1] || '',
        unit: row[2] || ''
      });
    }
  }

  return { rooms, catering };
}

/**
 * Parses catering data from a separate sheet.
 * Format: Item | Price (with optional header row and notes)
 */
export function parseCateringData(data: string[][]): CateringItem[] {
  const catering: CateringItem[] = [];

  for (const row of data) {
    // Skip empty rows
    if (row.length === 0 || row.every(cell => !cell.trim())) {
      continue;
    }

    const firstCell = row[0]?.toLowerCase().trim() || '';

    // Skip header rows
    if (firstCell.includes('cenník') || firstCell.includes('cena') || firstCell === 'položka' || firstCell === 'item') {
      continue;
    }

    // Skip note rows (starting with *)
    if (firstCell.startsWith('*')) {
      continue;
    }

    // Parse data row
    if (row[0] && row[1]) {
      catering.push({
        item: row[0].trim(),
        price: row[1].trim(),
        unit: row[2]?.trim() || ''
      });
    }
  }

  return catering;
}
