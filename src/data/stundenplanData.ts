export interface LessonTime {
    period: string;
    time: string;
    isBreak: boolean;
}

export const lessonTimes: LessonTime[] = [
    { period: '1', time: '07:45 – 08:30', isBreak: false },
    { period: '2', time: '08:30 – 09:15', isBreak: false },
    { period: '', time: 'Frühstückspause', isBreak: true },
    { period: '3', time: '09:35 – 10:20', isBreak: false },
    { period: '4', time: '10:20 – 11:05', isBreak: false },
    { period: '5', time: '11:15 – 12:00', isBreak: false },
    { period: '6', time: '12:00 – 12:45', isBreak: false },
    { period: '', time: 'Mittagspause', isBreak: true },
    { period: '7', time: '13:15 – 14:00', isBreak: false },
    { period: '8', time: '14:05 – 14:50', isBreak: false },
];

export interface ScheduleEntry {
    subject: string;
    teacher: string;
    room: string;
}

// null = free period, undefined should not occur
export type ScheduleCell = ScheduleEntry | null;

function parseCell(raw: string): ScheduleCell {
    const trimmed = raw.trim();
    if (trimmed === '—' || trimmed === '-' || trimmed === '') return null;
    const parts = trimmed.split('/').map(s => s.trim());
    return {
        subject: parts[0] || '',
        teacher: parts[1] || '',
        room: parts[2] || '',
    };
}

export const DAYS = ['Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag'] as const;

// schedule[period][dayIndex]  (period 1-8, dayIndex 0-4)
export const schedule: Record<string, ScheduleCell[]> = {
    '1': [
        parseCell('FI LF3 / GrM / 103'),
        parseCell('FI LF5 / GrJ / 203'),
        parseCell('WL / Schd / 115'),
        parseCell('FI LF3 / GrM / 103'),
        parseCell('FI LF1 / Sta / 115'),
    ],
    '2': [
        parseCell('FI LF3 / GrM / 103'),
        parseCell('FI LF5 / GrJ / 203'),
        parseCell('WL / Schd / 115'),
        parseCell('FI LF3 / GrM / 103'),
        parseCell('FI LF1 / Sta / 115'),
    ],
    '3': [
        parseCell('FI LF3 / GrM / 103'),
        parseCell('FI LF5 / GrJ / 203'),
        parseCell('DE / Ho.Ka / 119'),
        parseCell('FI LF3 / GrM / 103'),
        parseCell('FI LF1 / Sta / 115'),
    ],
    '4': [
        parseCell('SK / Hua / 119'),
        parseCell('FI LF2 / Lö / 205'),
        parseCell('DE / Ho.Ka / 119'),
        parseCell('SK / Hua / 119'),
        parseCell('FI LF5 / GrJ / 203'),
    ],
    '5': [
        parseCell('En / Ho.Ka / 119'),
        parseCell('FI LF2 / Lö / 205'),
        parseCell('FI LF2 / Lö / 205'),
        parseCell('SK / Hua / 119'),
        parseCell('FI LF5 / GrJ / 203'),
    ],
    '6': [
        parseCell('En / Ho.Ka / 119'),
        parseCell('—'),
        parseCell('FI LF2 / Lö / 205'),
        parseCell('FI LF4 / Li / 103'),
        parseCell('FI LF5 / GrJ / 203'),
    ],
    '7': [
        parseCell('—'),
        parseCell('—'),
        parseCell('WL / Schd / 115'),
        parseCell('FI LF4 / Li / 103'),
        parseCell('—'),
    ],
    '8': [
        parseCell('—'),
        parseCell('—'),
        parseCell('—'),
        parseCell('FI LF4 / Li / 103'),
        parseCell('—'),
    ],
};

// Color mapping for subject categories
export function getSubjectColor(subject: string): string {
    if (subject.startsWith('FI LF3')) return '52, 211, 110';     // green
    if (subject.startsWith('FI LF5')) return '99, 145, 255';     // blue
    if (subject.startsWith('FI LF1')) return '255, 200, 60';     // yellow
    if (subject.startsWith('FI LF2')) return '255, 130, 80';     // orange
    if (subject.startsWith('FI LF4')) return '180, 120, 255';    // purple
    if (subject.startsWith('WL')) return '255, 100, 130';     // rose
    if (subject.startsWith('SK')) return '100, 220, 220';     // teal
    if (subject.startsWith('En')) return '220, 180, 100';     // warm
    if (subject.startsWith('DE')) return '200, 160, 220';     // lavender
    return '150, 160, 180';                                       // default gray
}
