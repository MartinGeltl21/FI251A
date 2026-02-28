import { useLocation } from 'react-router-dom';
import { BookOpen, PenSquare, CalendarDays, Megaphone, Wrench } from 'lucide-react';
import type { ElementType } from 'react';

const pageInfo: Record<string, { icon: ElementType; title: string; accent: string }> = {
    '/lernmaterial': { icon: BookOpen, title: 'Lernmaterial', accent: '99, 145, 255' },
    '/quiz': { icon: PenSquare, title: 'Quiz', accent: '255, 165, 80' },
    '/stundenplan': { icon: CalendarDays, title: 'Stundenplan', accent: '180, 120, 255' },
    '/infos': { icon: Megaphone, title: 'Infos', accent: '255, 100, 130' },
};

export default function PlaceholderPage() {
    const location = useLocation();
    const info = pageInfo[location.pathname] || { icon: Wrench, title: 'Seite', accent: '150,150,150' };

    return (
        <div className="placeholder-page">
            <div
                className="placeholder-card"
                style={{ '--card-accent': info.accent } as React.CSSProperties}
            >
                <div className="placeholder-card__glow" />
                <div className="placeholder-icon"><info.icon /></div>
                <h1 className="placeholder-title">{info.title}</h1>
                <div className="placeholder-divider" />
                <p className="placeholder-text">
                    Diese Seite wird gerade vorbereitet und ist bald verfügbar.
                </p>
                <div className="placeholder-dots">
                    <span className="dot dot--1" />
                    <span className="dot dot--2" />
                    <span className="dot dot--3" />
                </div>
            </div>
        </div>
    );
}
