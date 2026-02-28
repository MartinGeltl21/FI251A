import { Repeat, Calendar, Clock } from 'lucide-react';

export default function InfosPage() {
    return (
        <div className="infos-page">
            <header className="stundenplan-header">
                <div className="header-eyebrow">
                    <span className="badge-dot" />
                    Aktuelle Informationen
                </div>
                <h1>Infos & News</h1>
                <p>Wichtige Ankündigungen, Termine & Updates für die Klasse</p>
            </header>

            <div className="infos-grid">
                {/* Info Card 1 */}
                <div className="info-card">
                    <div className="info-card__glow" />
                    <div className="info-card__header">
                        <div className="info-card__icon"><Repeat size={24} /></div>
                        <span className="info-card__tag info-card__tag--lf5">LF 5</span>
                    </div>
                    <div className="info-card__content">
                        <h3 className="info-card__title">Thema der nächsten LK</h3>
                        <p className="info-card__desc">
                            Die nächste Leistungskontrolle in Lernfeld 5 wird sich ausführlich mit dem Thema <strong>Schleifen</strong> befassen.
                        </p>
                    </div>
                    <div className="info-card__footer">
                        <Clock size={16} /> Aktualisiert: Heute
                    </div>
                </div>

                {/* Info Card 2 */}
                <div className="info-card">
                    <div className="info-card__glow" />
                    <div className="info-card__header">
                        <div className="info-card__icon"><Calendar size={24} /></div>
                        <span className="info-card__tag info-card__tag--wichtig">Wichtig</span>
                    </div>
                    <div className="info-card__content">
                        <h3 className="info-card__title">Stahl LK – Termin offen</h3>
                        <p className="info-card__desc">
                            In der nächsten Woche wird bei Herrn Stahl eine LK geschrieben. Es steht jedoch noch kein fester Tag fest. Bitte vorbereitet sein!
                        </p>
                    </div>
                    <div className="info-card__footer">
                        <Clock size={16} /> Aktualisiert: Vor 2 Stunden
                    </div>
                </div>
            </div>
        </div>
    );
}
