import { writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const ICAL_URL = process.env.ICAL_URL;
if (!ICAL_URL) {
  console.error('ICAL_URL environment variable is not set — skipping availability update');
  process.exit(0);
}

function toISO(raw) {
  const d = raw.replace(/[^0-9]/g, '');
  return `${d.slice(0, 4)}-${d.slice(4, 6)}-${d.slice(6, 8)}`;
}

const res = await fetch(ICAL_URL);
if (!res.ok) throw new Error(`Failed to fetch iCal: ${res.status} ${res.statusText}`);
const text = await res.text();

const booked = [];

for (const block of text.split('BEGIN:VEVENT').slice(1)) {
  const start = block.match(/DTSTART(?:;[^:]+)?:(\d{8})/)?.[1];
  const end   = block.match(/DTEND(?:;[^:]+)?:(\d{8})/)?.[1];
  if (start && end) {
    booked.push({ start: toISO(start), end: toISO(end) });
  }
}

booked.sort((a, b) => a.start.localeCompare(b.start));

const data = {
  generated: new Date().toISOString(),
  booked,
};

const out = join(__dirname, '..', 'data', 'availability.json');
writeFileSync(out, JSON.stringify(data, null, 2) + '\n');
console.log(`availability.json updated — ${booked.length} bookings`);
