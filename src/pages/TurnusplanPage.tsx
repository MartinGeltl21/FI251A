import { useState } from 'react';
import { lkData, getRelevantBSBlock, getDaysForWeek, formatDateString, schoolWeeks, isSchoolWeek, getHolidayName, getISOWeekNumber } from '../data/turnusplanData';
import { CalendarDays, X, GraduationCap, ChevronLeft, ChevronRight } from 'lucide-react';

const DAY_NAMES = ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'];

const MONTH_NAMES = [
    'Januar', 'Februar', 'März', 'April', 'Mai', 'Juni',
    'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember',
];

/* ────────────────────────────────────────────
   Year-Calendar Modal
   ──────────────────────────────────────────── */
function YearCalendar({ onClose }: { onClose: () => void }) {
    const today = new Date();
    const currentKW = getISOWeekNumber(today);
    const currentYear = today.getFullYear();

    // Show Sept 2025 – Jul 2026
    const months: { year: number; month: number }[] = [
        { year: 2025, month: 8 },  // Sep
        { year: 2025, month: 9 },  // Oct
        { year: 2025, month: 10 }, // Nov
        { year: 2025, month: 11 }, // Dec
        { year: 2026, month: 0 },  // Jan
        { year: 2026, month: 1 },  // Feb
        { year: 2026, month: 2 },  // Mar
        { year: 2026, month: 3 },  // Apr
        { year: 2026, month: 4 },  // May
        { year: 2026, month: 5 },  // Jun
        { year: 2026, month: 6 },  // Jul
    ];

    const [page, setPage] = useState(() => {
        // start at page that contains the current month
        const idx = months.findIndex(m => m.year === currentYear && m.month === today.getMonth());
        if (idx >= 0) return Math.floor(idx / 4) * 4;
        return 0;
    });

    const pageMonths = months.slice(page, page + 4);

    const getWeeksForMonth = (year: number, month: number) => {
        const weeks: { kw: number; kwYear: number; days: (Date | null)[] }[] = [];
        const firstDay = new Date(year, month, 1);
        const lastDay = new Date(year, month + 1, 0);

        // Find Monday of the first week
        let start = new Date(firstDay);
        const dayOfWeek = start.getDay() || 7; // Mon=1 ... Sun=7
        start.setDate(start.getDate() - (dayOfWeek - 1));

        while (start <= lastDay || start.getDay() !== 1) {
            const weekDays: (Date | null)[] = [];
            const kw = getISOWeekNumber(start);
            const kwYear = start.getFullYear();

            for (let d = 0; d < 7; d++) {
                const current = new Date(start);
                current.setDate(start.getDate() + d);
                if (current.getMonth() === month && current.getFullYear() === year) {
                    weekDays.push(current);
                } else {
                    weekDays.push(null);
                }
            }

            if (weekDays.some(d => d !== null)) {
                weeks.push({ kw, kwYear, days: weekDays });
            }

            start.setDate(start.getDate() + 7);
            if (start > lastDay && (start.getDay() === 1 || start.getDay() === 0)) break;
        }

        return weeks;
    };

    // Count stats
    const pastSchoolWeeks = schoolWeeks.filter(w => {
        if (w.year < currentYear) return true;
        if (w.year === currentYear && w.kw < currentKW) return true;
        return false;
    }).length;
    const totalSchoolWeeks = schoolWeeks.length;
    const nextSchoolWeek = schoolWeeks.find(w => {
        if (w.year > currentYear) return true;
        if (w.year === currentYear && w.kw >= currentKW) return true;
        return false;
    });

    return (
        <div className="cal-overlay" onClick={onClose}>
            <div className="cal-modal" onClick={e => e.stopPropagation()}>
                <div className="cal-modal__header">
                    <div>
                        <h2 className="cal-modal__title">Jahreskalender</h2>
                        <p className="cal-modal__subtitle">1. Lehrjahr · Schuljahr 2025/26</p>
                    </div>
                    <button className="cal-close-btn" onClick={onClose} id="cal-close-btn">
                        <X size={20} />
                    </button>
                </div>

                {/* Stats bar */}
                <div className="cal-stats">
                    <div className="cal-stat">
                        <span className="cal-stat__value">{pastSchoolWeeks}/{totalSchoolWeeks}</span>
                        <span className="cal-stat__label">Schulwochen absolviert</span>
                    </div>
                    {nextSchoolWeek && (
                        <div className="cal-stat">
                            <span className="cal-stat__value">KW {nextSchoolWeek.kw}</span>
                            <span className="cal-stat__label">Nächste Schulwoche</span>
                        </div>
                    )}
                </div>

                {/* Legend */}
                <div className="cal-legend">
                    <div className="cal-legend__item">
                        <span className="cal-legend__dot cal-legend__dot--school" />
                        <span>Berufsschule</span>
                    </div>
                    <div className="cal-legend__item">
                        <span className="cal-legend__dot cal-legend__dot--holiday" />
                        <span>Ferien</span>
                    </div>
                    <div className="cal-legend__item">
                        <span className="cal-legend__dot cal-legend__dot--today" />
                        <span>Heute</span>
                    </div>
                </div>

                {/* Month navigation */}
                <div className="cal-nav">
                    <button
                        className="cal-nav-btn"
                        onClick={() => setPage(p => Math.max(0, p - 4))}
                        disabled={page === 0}
                    >
                        <ChevronLeft size={18} />
                    </button>
                    <span className="cal-nav__label">
                        {MONTH_NAMES[pageMonths[0].month]} {pageMonths[0].year} – {MONTH_NAMES[pageMonths[pageMonths.length - 1].month]} {pageMonths[pageMonths.length - 1].year}
                    </span>
                    <button
                        className="cal-nav-btn"
                        onClick={() => setPage(p => Math.min(months.length - 4, p + 4))}
                        disabled={page + 4 >= months.length}
                    >
                        <ChevronRight size={18} />
                    </button>
                </div>

                {/* Month grids */}
                <div className="cal-months-grid">
                    {pageMonths.map(({ year, month }) => {
                        const weeks = getWeeksForMonth(year, month);
                        return (
                            <div key={`${year}-${month}`} className="cal-month">
                                <div className="cal-month__name">{MONTH_NAMES[month]} {year}</div>
                                <div className="cal-month__header">
                                    <span className="cal-month__kw-label">KW</span>
                                    {['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So'].map(d => (
                                        <span key={d} className="cal-month__day-label">{d}</span>
                                    ))}
                                </div>
                                {weeks.map(week => {
                                    const school = isSchoolWeek(week.kwYear, week.kw);
                                    const holiday = getHolidayName(week.kwYear, week.kw);
                                    const isCurrentKW = week.kwYear === currentYear && week.kw === currentKW;
                                    const weekClass = [
                                        'cal-week-row',
                                        school ? 'cal-week-row--school' : '',
                                        holiday ? 'cal-week-row--holiday' : '',
                                        isCurrentKW ? 'cal-week-row--current' : '',
                                    ].filter(Boolean).join(' ');

                                    return (
                                        <div
                                            key={week.kw}
                                            className={weekClass}
                                            title={school ? `Berufsschule KW ${week.kw}` : holiday ? `${holiday}` : `KW ${week.kw}`}
                                        >
                                            <span className="cal-kw">{week.kw}</span>
                                            {week.days.map((day, i) => {
                                                if (!day) return <span key={i} className="cal-day cal-day--empty" />;
                                                const isToday =
                                                    day.getDate() === today.getDate() &&
                                                    day.getMonth() === today.getMonth() &&
                                                    day.getFullYear() === today.getFullYear();
                                                return (
                                                    <span
                                                        key={i}
                                                        className={`cal-day ${isToday ? 'cal-day--today' : ''}`}
                                                    >
                                                        {day.getDate()}
                                                    </span>
                                                );
                                            })}
                                        </div>
                                    );
                                })}
                            </div>
                        );
                    })}
                </div>

                {/* Upcoming blocks */}
                <div className="cal-upcoming">
                    <h3 className="cal-upcoming__title">Kommende Schulwochen</h3>
                    <div className="cal-upcoming__list">
                        {schoolWeeks
                            .filter(w => w.year > currentYear || (w.year === currentYear && w.kw >= currentKW))
                            .slice(0, 6)
                            .map(w => (
                                <div key={`${w.year}-${w.kw}`} className="cal-upcoming__item">
                                    <div className="cal-upcoming__icon"><GraduationCap size={16} /></div>
                                    <div className="cal-upcoming__info">
                                        <span className="cal-upcoming__kw">KW {w.kw}</span>
                                        {w.label && <span className="cal-upcoming__dates">{w.label}</span>}
                                    </div>
                                    {w.year === currentYear && w.kw === currentKW && (
                                        <span className="cal-upcoming__now">Jetzt</span>
                                    )}
                                </div>
                            ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

/* ────────────────────────────────────────────
   Main Turnusplan Page
   ──────────────────────────────────────────── */
export default function TurnusplanPage() {
    const [currentDate] = useState(new Date());
    const [showCalendar, setShowCalendar] = useState(false);
    const { block, currentWeekNum } = getRelevantBSBlock(currentDate);

    const [sy, sm, sd] = block.start.split('-').map(Number);
    const cycleStartDate = new Date(sy, sm - 1, sd);

    const week1Days = getDaysForWeek(cycleStartDate);
    const week2StartDate = new Date(cycleStartDate);
    week2StartDate.setDate(week2StartDate.getDate() + 7);
    const week2Days = getDaysForWeek(week2StartDate);

    const getLkForDate = (date: Date) => {
        const formatted = formatDateString(date);
        return lkData.find(lk => lk.date === formatted);
    };

    const renderDay = (date: Date) => {
        const lk = getLkForDate(date);
        const dayOfWeek = date.getDay();
        const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;
        const isToday = formatDateString(date) === formatDateString(currentDate);

        const classes = [
            'day-card',
            isWeekend ? 'weekend' : '',
            lk ? 'has-lk' : '',
            isToday ? 'today' : '',
        ].filter(Boolean).join(' ');

        return (
            <div key={date.toISOString()} className={classes}>
                {lk && <div className="lk-orb" />}
                <div className="day-name">{DAY_NAMES[dayOfWeek]}</div>
                <div className="day-date">
                    {date.toLocaleDateString('de-DE', { day: '2-digit', month: '2-digit' })}
                </div>
                {lk && (
                    <div className="lk-badge">
                        LK {lk.subject}
                    </div>
                )}
            </div>
        );
    };

    const renderWeek = (days: Date[], weekNum: 1 | 2) => {
        const isCurrentWeek = currentWeekNum === weekNum;
        return (
            <div className={`week-block ${isCurrentWeek ? 'current-week' : ''}`}>
                <div className="week-header">
                    <div className="week-number-badge">W{weekNum}</div>
                    <span className="week-title-text">Turnus Woche {weekNum}</span>
                    {isCurrentWeek && <span className="current-tag">Aktuelle Woche</span>}
                </div>
                <div className="days-grid">
                    {days.map(renderDay)}
                </div>
            </div>
        );
    };

    const formatBlockDate = (dateString: string) => {
        const [y, m, d] = dateString.split('-');
        return `${d}.${m}.${y}`;
    };

    const getWeekDateRangeStr = (weekDays: Date[]) => {
        if (!weekDays.length) return '';
        const start = weekDays[0];
        const end = weekDays[4];

        const format = (d: Date) => d.toLocaleDateString('de-DE', { day: '2-digit', month: '2-digit', year: 'numeric' });
        return `${format(start)} bis ${format(end)}`;
    };

    return (
        <div className="turnusplan-page">
            <header className="turnusplan-header">
                <div className="header-eyebrow">
                    <span className="badge-dot" />
                    Berufsschul Turnus 2026
                </div>
                <h1>Leistungskontrollen<br />auf einen Blick</h1>
                <p>
                    {currentWeekNum === 1 && `Aktuell Woche 1 — ${getWeekDateRangeStr(week1Days)}`}
                    {currentWeekNum === 2 && `Aktuell Woche 2 — ${getWeekDateRangeStr(week2Days)}`}
                    {!currentWeekNum && `Nächster Block: ${formatBlockDate(block.start)}`}
                </p>
            </header>

            {/* Calendar toggle button */}
            <div className="cal-btn-wrapper">
                <button className="cal-toggle-btn" onClick={() => setShowCalendar(true)} id="cal-toggle-btn">
                    <CalendarDays size={20} />
                    <span>Kalender</span>
                </button>
            </div>

            <div className="weeks-container">
                {renderWeek(week1Days, 1)}
                {renderWeek(week2Days, 2)}
            </div>

            {showCalendar && <YearCalendar onClose={() => setShowCalendar(false)} />}
        </div>
    );
}
