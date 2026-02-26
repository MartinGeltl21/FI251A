import { useState } from 'react';
import { lkData, getRelevantBSBlock, getDaysForWeek, formatDateString } from '../data/turnusplanData';

const DAY_NAMES = ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'];

export default function TurnusplanPage() {
    const [currentDate] = useState(new Date());
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

            <div className="weeks-container">
                {renderWeek(week1Days, 1)}
                {renderWeek(week2Days, 2)}
            </div>
        </div>
    );
}
