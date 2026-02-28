import { useNavigate } from 'react-router-dom';
import { Plug, HardDrive, Monitor, ShieldCheck, Settings, Book, Globe, Briefcase, Landmark } from 'lucide-react';
import type { ElementType } from 'react';

interface LernItem {
    icon: ElementType;
    title: string;
    description: string;
    href: string;
    accent: string;
    available: boolean;
    internal?: boolean;
}

const lernItems: LernItem[] = [
    {
        icon: Plug,
        title: 'Lernfeld 1',
        description: 'Das Unternehmen und die eigene Rolle im Betrieb',
        href: '/bwl',
        accent: '255, 200, 60',
        available: true,
        internal: true,
    },
    {
        icon: HardDrive,
        title: 'Lernfeld 2',
        description: 'Arbeitsplätze nach Kundenwunsch ausstatten',
        href: '/CPU/index.html',
        accent: '255, 130, 80',
        available: true,
    },
    {
        icon: Monitor,
        title: 'Lernfeld 3',
        description: 'Clients in Netzwerke einbinden',
        href: '#',
        accent: '52, 211, 110',
        available: false,
    },
    {
        icon: ShieldCheck,
        title: 'Lernfeld 4',
        description: 'Schutzbedarfsanalyse im eigenen Arbeitsbereich',
        href: '/it-grundschutz',
        accent: '180, 120, 255',
        available: true,
        internal: true,
    },
    {
        icon: Settings,
        title: 'Lernfeld 5',
        description: 'Software zur Verwaltung von Daten anpassen',
        href: '#',
        accent: '99, 145, 255',
        available: false,
    },
    {
        icon: Book,
        title: 'Deutsch',
        description: 'DE – Sprachkompetenz & Kommunikation',
        href: '#',
        accent: '200, 160, 220',
        available: false,
    },
    {
        icon: Globe,
        title: 'Englisch',
        description: 'EN – Business English & Fachsprache IT (nicht xD)',
        href: '#',
        accent: '220, 180, 100',
        available: false,
    },
    {
        icon: Briefcase,
        title: 'Wirtschaftslehre',
        description: 'WL – Wirtschaft, Recht & betriebliche Zusammenhänge',
        href: '#',
        accent: '255, 100, 130',
        available: false,
    },
    {
        icon: Landmark,
        title: 'Sozialkunde',
        description: 'SK – Politik, Gesellschaft & soziale Kompetenz',
        href: '#',
        accent: '100, 220, 220',
        available: false,
    },
];

export default function LernmaterialPage() {
    const navigate = useNavigate();

    return (
        <div className="lern-page">
            <header className="stundenplan-header">
                <div className="header-eyebrow">
                    <span className="badge-dot" />
                    Unterlagen & Zusammenfassungen
                </div>
                <h1>Lernmaterial</h1>
                <p>Fachbezogene Lernzettel, Skripte & Zusammenfassungen</p>
            </header>

            <div className="lern-grid">
                {lernItems.map((item, index) => {
                    if (item.available && item.internal) {
                        return (
                            <div
                                key={item.title}
                                className="lern-card"
                                style={{
                                    '--lern-accent': item.accent,
                                    animationDelay: `${0.06 * (index + 1)}s`,
                                    cursor: 'pointer',
                                } as React.CSSProperties}
                                onClick={() => navigate(item.href)}
                            >
                                <div className="lern-card__glow" />
                                <div className="lern-card__icon"><item.icon /></div>
                                <div className="lern-card__content">
                                    <h3 className="lern-card__title">{item.title}</h3>
                                    <p className="lern-card__desc">{item.description}</p>
                                </div>
                                <div className="lern-card__arrow">→</div>
                            </div>
                        );
                    }
                    const Tag = item.available ? 'a' : 'div';
                    return (
                        <Tag
                            key={item.title}
                            {...(item.available ? { href: item.href, target: '_blank', rel: 'noopener noreferrer' } : {})}
                            className={`lern-card ${!item.available ? 'lern-card--disabled' : ''}`}
                            style={{
                                '--lern-accent': item.accent,
                                animationDelay: `${0.06 * (index + 1)}s`,
                            } as React.CSSProperties}
                        >
                            <div className="lern-card__glow" />
                            <div className="lern-card__icon"><item.icon /></div>
                            <div className="lern-card__content">
                                <h3 className="lern-card__title">{item.title}</h3>
                                <p className="lern-card__desc">{item.description}</p>
                            </div>
                            {item.available ? (
                                <div className="lern-card__arrow">→</div>
                            ) : (
                                <span className="nav-card__badge">Kommt bald</span>
                            )}
                        </Tag>
                    );
                })}
            </div>
        </div>
    );
}
