export interface LkEntry {
  date: string; // YYYY-MM-DD format
  subject: string;
}

export const lkData: LkEntry[] = [
  { date: '2026-02-25', subject: 'WL' },
  { date: '2026-02-26', subject: 'LF3' },
  { date: '2026-03-03', subject: 'LF2' },
  { date: '2026-03-04', subject: 'DE' },
  { date: '2026-03-05', subject: 'LF4' },
  { date: '2026-04-29', subject: 'WL' },
];

export interface BSBlock {
  start: string; // YYYY-MM-DD
  end: string;   // YYYY-MM-DD
}

export const bsBlocks: BSBlock[] = [
  { start: '2026-01-05', end: '2026-01-18' },
  { start: '2026-02-23', end: '2026-03-08' },
  { start: '2026-04-27', end: '2026-05-10' },
  { start: '2026-06-01', end: '2026-06-14' },
  { start: '2026-06-29', end: '2026-07-12' },
];

/* ────────────────────────────────────────────
   Jahreskalender – 1. Lehrjahr (Grundstufe)
   ──────────────────────────────────────────── */

/** Calendar weeks where school takes place (Berufsschulwochen) */
export const schoolWeeks: { year: number; kw: number; label?: string }[] = [
  // 2025
  { year: 2025, kw: 37, label: '08.09. – 12.09.' },
  { year: 2025, kw: 38, label: '15.09. – 19.09.' },
  { year: 2025, kw: 46, label: '10.11. – 14.11.' },
  { year: 2025, kw: 47, label: '17.11. – 21.11.' },
  // 2026
  { year: 2026, kw: 2, label: '05.01. – 09.01.' },
  { year: 2026, kw: 3, label: '12.01. – 16.01.' },
  { year: 2026, kw: 9, label: '23.02. – 27.02.' },
  { year: 2026, kw: 10, label: '02.03. – 06.03.' },
  { year: 2026, kw: 18, label: '27.04. – 01.05.' },
  { year: 2026, kw: 19, label: '04.05. – 08.05.' },
  { year: 2026, kw: 23, label: '01.06. – 05.06.' },
  { year: 2026, kw: 24, label: '08.06. – 12.06.' },
  { year: 2026, kw: 27, label: '29.06. – 03.07.' },
];

/** Holiday periods (Ferien / grüne Wochen) */
export const holidays: { name: string; weeks: { year: number; kw: number }[] }[] = [
  { name: 'Herbstferien', weeks: [{ year: 2025, kw: 41 }, { year: 2025, kw: 42 }] },
  { name: 'Weihnachtsferien', weeks: [{ year: 2025, kw: 52 }, { year: 2026, kw: 1 }] },
  { name: 'Winterferien', weeks: [{ year: 2026, kw: 8 }] },
  { name: 'Osterferien', weeks: [{ year: 2026, kw: 15 }, { year: 2026, kw: 16 }] },
  { name: 'Sommerferien', weeks: [{ year: 2026, kw: 28 }, { year: 2026, kw: 29 }, { year: 2026, kw: 30 }, { year: 2026, kw: 31 }, { year: 2026, kw: 32 }] },
];

/** Helper: get ISO week number for a date */
export function getISOWeekNumber(date: Date): number {
  const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
  d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay() || 7));
  const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
  return Math.ceil(((d.getTime() - yearStart.getTime()) / 86400000 + 1) / 7);
}

/** Check if a given year+kw is a school week */
export function isSchoolWeek(year: number, kw: number): boolean {
  return schoolWeeks.some(w => w.year === year && w.kw === kw);
}

/** Get holiday name for a year+kw, or null */
export function getHolidayName(year: number, kw: number): string | null {
  for (const h of holidays) {
    if (h.weeks.some(w => w.year === year && w.kw === kw)) return h.name;
  }
  return null;
}

export function getRelevantBSBlock(date: Date) {
  const currentStr = formatDateString(date);

  for (const block of bsBlocks) {
    if (currentStr <= block.end) {
      const isCurrent = currentStr >= block.start;
      let currentWeekNum: 1 | 2 | null = null;

      if (isCurrent) {
        const [sy, sm, sd] = block.start.split('-').map(Number);
        const startD = new Date(sy, sm - 1, sd);
        const currentD = new Date(date.getFullYear(), date.getMonth(), date.getDate());

        const dayDiff = Math.floor((currentD.getTime() - startD.getTime()) / (1000 * 60 * 60 * 24));
        currentWeekNum = dayDiff < 7 ? 1 : 2;
      }

      return { block, isCurrent, currentWeekNum };
    }
  }

  return { block: bsBlocks[bsBlocks.length - 1], isCurrent: false, currentWeekNum: null };
}

export function getDaysForWeek(baseDate: Date): Date[] {
  const days: Date[] = [];
  const startOfWeek = new Date(baseDate);
  const day = startOfWeek.getDay();
  const diff = startOfWeek.getDate() - day + (day === 0 ? -6 : 1);
  startOfWeek.setDate(diff);
  startOfWeek.setHours(0, 0, 0, 0);

  for (let i = 0; i < 7; i++) {
    const d = new Date(startOfWeek);
    d.setDate(startOfWeek.getDate() + i);
    days.push(d);
  }
  return days;
}

export function formatDateString(date: Date): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}
