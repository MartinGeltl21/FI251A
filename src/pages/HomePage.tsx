import { useNavigate } from 'react-router-dom';

interface NavCard {
    icon: string;
    title: string;
    description: string;
    path: string;
    accentColor: string;
}

const navCards: NavCard[] = [
    {
        icon: '📊',
        title: 'Turnusplan',
        description: 'Berufsschul-Turnus mit LK-Übersicht für den aktuellen Block',
        path: '/turnusplan',
        accentColor: '52, 211, 110',
    },
    {
        icon: '📚',
        title: 'Lernmaterial',
        description: 'Sammlung von Unterlagen, Zusammenfassungen & Lernzetteln',
        path: '/lernmaterial',
        accentColor: '99, 145, 255',
    },
    {
        icon: '📝',
        title: 'Quiz',
        description: 'Interaktive Quizze zum Lernen & Wiederholen',
        path: '/quiz',
        accentColor: '255, 165, 80',
    },
    {
        icon: '📅',
        title: 'Stundenplan',
        description: 'Der aktuelle Stundenplan der Klasse',
        path: '/stundenplan',
        accentColor: '180, 120, 255',
    },
    {
        icon: '📢',
        title: 'Infos',
        description: 'Allgemeine Klassen-Infos & Ankündigungen',
        path: '/infos',
        accentColor: '255, 100, 130',
    },
];

export default function HomePage() {
    const navigate = useNavigate();

    return (
        <div className="home-page">
            <header className="home-header">
                <div className="header-eyebrow">
                    <span className="badge-dot" />
                    Fachinformatiker 2026
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
                        className="nav-card"
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
                    </button>
                ))}
            </div>
        </div>
    );
}
