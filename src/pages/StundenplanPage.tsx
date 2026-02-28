import { lessonTimes, schedule, DAYS, getSubjectColor } from '../data/stundenplanData';
import { Coffee } from 'lucide-react';

export default function StundenplanPage() {
    const now = new Date();
    const currentDayIndex = now.getDay() - 1; // 0=Mon, 4=Fri, -1=Sun, 5=Sat
    const currentHour = now.getHours();
    const currentMinute = now.getMinutes();

    const getCurrentPeriod = (): string | null => {
        if (currentDayIndex < 0 || currentDayIndex > 4) return null;
        const timeRanges: Record<string, [number, number, number, number]> = {
            '1': [7, 45, 8, 30],
            '2': [8, 30, 9, 15],
            '3': [9, 35, 10, 20],
            '4': [10, 20, 11, 5],
            '5': [11, 15, 12, 0],
            '6': [12, 0, 12, 45],
            '7': [13, 15, 14, 0],
            '8': [14, 5, 14, 50],
        };
        const nowMins = currentHour * 60 + currentMinute;
        for (const [period, [sh, sm, eh, em]] of Object.entries(timeRanges)) {
            if (nowMins >= sh * 60 + sm && nowMins < eh * 60 + em) return period;
        }
        return null;
    };

    const activePeriod = getCurrentPeriod();

    return (
        <div className="stundenplan-page">
            <header className="stundenplan-header">
                <div className="header-eyebrow">
                    <span className="badge-dot" />
                    Klassenplan FI251A
                </div>
                <h1>Stundenplan</h1>
                <p>Wöchentlicher Unterrichtsplan mit Räumen & Lehrern</p>
            </header>

            {/* ─── Desktop: Tabellen-Ansicht ─── */}
            <div className="sp-table-wrapper">
                <table className="sp-table">
                    <thead>
                        <tr>
                            <th className="sp-th sp-th--time">Std.</th>
                            <th className="sp-th sp-th--time">Zeit</th>
                            {DAYS.map((day, i) => (
                                <th
                                    key={day}
                                    className={`sp-th ${currentDayIndex === i ? 'sp-th--today' : ''}`}
                                >
                                    {day}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {lessonTimes.map((lt) => {
                            if (lt.isBreak) {
                                return (
                                    <tr key={lt.time} className="sp-break-row">
                                        <td colSpan={7} className="sp-break-cell">
                                            <div className="sp-break-line">
                                                <span className="sp-break-label"><Coffee size={16} style={{ display: 'inline-block', marginBottom: '-2px' }} /> {lt.time}</span>
                                            </div>
                                        </td>
                                    </tr>
                                );
                            }

                            const periodSchedule = schedule[lt.period];
                            const isActivePeriod = activePeriod === lt.period;

                            return (
                                <tr key={lt.period} className={`sp-row ${isActivePeriod ? 'sp-row--active' : ''}`}>
                                    <td className="sp-cell sp-cell--period">{lt.period}</td>
                                    <td className="sp-cell sp-cell--time">{lt.time}</td>
                                    {DAYS.map((day, dayIdx) => {
                                        const entry = periodSchedule?.[dayIdx];
                                        const isToday = currentDayIndex === dayIdx;
                                        const isNow = isActivePeriod && isToday;

                                        if (!entry) {
                                            return (
                                                <td
                                                    key={day}
                                                    className={`sp-cell sp-cell--free ${isToday ? 'sp-cell--today-col' : ''}`}
                                                >
                                                    <span className="sp-free">—</span>
                                                </td>
                                            );
                                        }

                                        const color = getSubjectColor(entry.subject);
                                        return (
                                            <td
                                                key={day}
                                                className={`sp-cell sp-cell--lesson ${isToday ? 'sp-cell--today-col' : ''} ${isNow ? 'sp-cell--now' : ''}`}
                                                style={{ '--subject-color': color } as React.CSSProperties}
                                            >
                                                {isNow && <div className="sp-now-indicator" />}
                                                <div className="sp-subject">{entry.subject}</div>
                                                <div className="sp-meta">
                                                    <span className="sp-teacher">{entry.teacher}</span>
                                                    <span className="sp-room">R {entry.room}</span>
                                                </div>
                                            </td>
                                        );
                                    })}
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>

            {/* ─── Mobile: Card-Ansicht pro Tag ─── */}
            <div className="sp-mobile">
                {DAYS.map((day, dayIdx) => {
                    const isToday = currentDayIndex === dayIdx;
                    return (
                        <div key={day} className={`sp-day-block ${isToday ? 'sp-day-block--today' : ''}`}>
                            <div className="sp-day-header">
                                <span className="sp-day-name">{day}</span>
                                {isToday && <span className="sp-today-tag">Heute</span>}
                            </div>
                            <div className="sp-day-lessons">
                                {lessonTimes.filter(lt => !lt.isBreak).map(lt => {
                                    const entry = schedule[lt.period]?.[dayIdx];
                                    const isNow = activePeriod === lt.period && isToday;

                                    if (!entry) return null;

                                    const color = getSubjectColor(entry.subject);
                                    return (
                                        <div
                                            key={lt.period}
                                            className={`sp-mobile-card ${isNow ? 'sp-mobile-card--now' : ''}`}
                                            style={{ '--subject-color': color } as React.CSSProperties}
                                        >
                                            <div className="sp-mobile-card__period">{lt.period}.</div>
                                            <div className="sp-mobile-card__content">
                                                <div className="sp-mobile-card__subject">{entry.subject}</div>
                                                <div className="sp-mobile-card__meta">
                                                    {entry.teacher} · R {entry.room} · {lt.time}
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
