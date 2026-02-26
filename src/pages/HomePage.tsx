import { useNavigate } from 'react-router-dom';

interface NavCard {
    icon: string;
    title: string;
    description: string;
    path: string;
    accentColor: string;
    available: boolean;
}

const navCards: NavCard[] = [
    {
        icon: '📊',
        title: 'Turnusplan',
        description: 'Berufsschul-Turnus mit LK-Übersicht für den aktuellen Block',
        path: '/turnusplan',
        accentColor: '52, 211, 110',
        available: true,
    },
    {
        icon: '📚',
        title: 'Lernmaterial',
        description: 'Sammlung von Unterlagen, Zusammenfassungen & Lernzetteln',
        path: '/lernmaterial',
        accentColor: '99, 145, 255',
        available: false,
    },
    {
        icon: '📝',
        title: 'Quiz',
        description: 'Interaktive Quizze zum Lernen & Wiederholen',
        path: '/quiz',
        accentColor: '255, 165, 80',
        available: false,
    },
    {
        icon: '📅',
        title: 'Stundenplan',
        description: 'Der aktuelle Stundenplan der Klasse',
        path: '/stundenplan',
        accentColor: '180, 120, 255',
        available: true,
    },
    {
        icon: '📢',
        title: 'Infos',
        description: 'Allgemeine Klassen-Infos & Ankündigungen',
        path: '/infos',
        accentColor: '255, 100, 130',
        available: false,
    },
];

export default function HomePage() {
    const navigate = useNavigate();

    return (
        <div className="home-page">
            <header className="home-header">
                <div className="header-eyebrow">
                    <span className="badge-dot" />
                    Fachinformatiker 2025
                </div>
                <h1>FI251A</h1>
                <p className="home-subtitle">
                    Dein Klassenportal — alles an einem Ort
                </p>
            </header>

            <div className="nav-cards-grid">
                {navCards.map((card, index) => (
                    <button
                        key={card.path}
                        className={`nav-card ${!card.available ? 'nav-card--coming-soon' : ''}`}
                        onClick={() => navigate(card.path)}
                        style={{
                            '--card-accent': card.accentColor,
                            animationDelay: `${0.08 * (index + 1)}s`,
                        } as React.CSSProperties}
                        id={`nav-${card.title.toLowerCase()}`}
                    >
                        <div className="nav-card__glow" />
                        <div className="nav-card__icon">{card.icon}</div>
                        <div className="nav-card__content">
                            <h3 className="nav-card__title">{card.title}</h3>
                            <p className="nav-card__desc">{card.description}</p>
                        </div>
                        {!card.available && (
                            <span className="nav-card__badge">Kommt bald</span>
                        )}
                        <div className="nav-card__arrow">→</div>
                    </button>
                ))}
            </div>
        </div>
    );
}
