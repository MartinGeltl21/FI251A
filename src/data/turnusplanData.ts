export interface LkEntry {
  date: string; // YYYY-MM-DD format
  subject: string;
}

export const lkData: LkEntry[] = [
  { date: '2026-02-25', subject: 'WL' },
  { date: '2026-02-26', subject: 'LF3' },
  { date: '2026-03-03', subject: 'Löffler' },
  { date: '2026-03-04', subject: 'DE' },
  { date: '2026-03-05', subject: 'LF4' },
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
