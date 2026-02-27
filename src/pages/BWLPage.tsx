import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

type TabKey = 'lektion1' | 'lektion2' | 'pruefung';

const tabs: { key: TabKey; label: string; icon: string }[] = [
    { key: 'lektion1', label: 'Lektion 1', icon: '📖' },
    { key: 'lektion2', label: 'Lektion 2', icon: '📘' },
    { key: 'pruefung', label: 'Prüfungszusammenfassung', icon: '🎯' },
];

/* ────────────────────────────────────────────
   Lektion 1 – Vision & Mission
   ──────────────────────────────────────────── */
function Lektion1() {
    return (
        <div className="gs-content">
            <section className="gs-section">
                <h2 className="gs-section__title">
                    <span className="gs-section__num">1.1</span>
                    BWL – Grundlagen
                </h2>
                <p className="gs-section__intro">
                    Unternehmen haben grundsätzlich das <strong>oberste Ziel, Profit zu generieren</strong>. Darüber hinaus muss sich jedoch jedes Unternehmen darüber bewusst sein, <strong>wie, womit und auf welche Weise</strong> das geschehen soll.
                </p>
                <p className="gs-section__intro">
                    Dabei werden die Begriffe <strong>Mission</strong> und <strong>Vision</strong> häufig miteinander in Verbindung gebracht, aber schwerlich voneinander abgegrenzt.
                </p>
            </section>

            <section className="gs-section">
                <h2 className="gs-section__title">
                    <span className="gs-section__num">1.2</span>
                    Vision & Mission
                </h2>

                <div className="gs-two-col">
                    <div>
                        <h4 className="gs-col-heading">🔭 Unternehmensvision</h4>
                        <ul className="gs-list gs-list--compact">
                            <li>Beschreibt ein <strong>Zukunftsbild</strong> – wo will das Unternehmen langfristig hin?</li>
                            <li>Ist ein <strong>angestrebter Idealzustand</strong> in der Zukunft</li>
                            <li>Gibt die <strong>Richtung</strong> vor</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="gs-col-heading">🧭 Unternehmensmission</h4>
                        <ul className="gs-list gs-list--compact">
                            <li>Beschreibt den <strong>Weg zur Realisierung der Vision</strong></li>
                            <li>Beantwortet: <strong>Was tun wir? Für wen? Und wie?</strong></li>
                            <li>Ist <strong>gegenwartsbezogen</strong> und beschreibt den konkreten Auftrag des Unternehmens</li>
                        </ul>
                    </div>
                </div>

                <div className="gs-infobox">
                    <div className="gs-infobox__header">🔗 Zusammenhang Vision & Mission</div>
                    <ul className="gs-list gs-list--compact">
                        <li><strong>Gegenwart → Mission → Zukunft</strong></li>
                        <li>Die <strong>Mission</strong> ist der Weg, der in der Gegenwart beginnt und zur <strong>Vision</strong> (dem Zukunftsbild) führt</li>
                        <li>Die Mission = <strong>Realisierung der Vision</strong></li>
                    </ul>
                </div>

                <h3 className="gs-subsection__title">Beispiele für Vision Statements</h3>
                <div className="gs-table-wrapper">
                    <table className="gs-table">
                        <thead>
                            <tr><th>Unternehmen</th><th>Vision Statement</th></tr>
                        </thead>
                        <tbody>
                            <tr><td><strong>Apple</strong></td><td><em>"To make the best products on earth and to leave the world better than we found it."</em></td></tr>
                            <tr><td><strong>Google</strong></td><td><em>"To organize the world's information and make it universally accessible and useful."</em></td></tr>
                            <tr><td><strong>Amazon</strong></td><td><em>"To be earth's most customer-centric company."</em></td></tr>
                            <tr><td><strong>Tesla</strong></td><td><em>"To accelerate the world's transition to sustainable energy."</em></td></tr>
                        </tbody>
                    </table>
                </div>

                <div className="gs-highlight">
                    Die <strong>Vision</strong> zeigt das Ziel, die <strong>Mission</strong> beschreibt den Weg dorthin. Beides zusammen bildet die strategische Ausrichtung eines Unternehmens.
                </div>
            </section>
        </div>
    );
}

/* ────────────────────────────────────────────
   Lektion 2 – Ziele & Unternehmensphilosophie
   ──────────────────────────────────────────── */
function Lektion2() {
    return (
        <div className="gs-content">
            <section className="gs-section">
                <h2 className="gs-section__title">
                    <span className="gs-section__num">2.1</span>
                    Ziele von Unternehmen
                </h2>
                <p className="gs-section__intro">
                    Jedes Unternehmen setzt sich <strong>Ziele</strong>. Diese Unternehmensziele geben dem Handeln eine <strong>Richtung</strong> und lenken die <strong>Entscheidungen und Strategien</strong> der Verantwortlichen.
                </p>
                <ul className="gs-list">
                    <li>Das <strong>primäre Ziel</strong> ist die <strong>Erwirtschaftung von Gewinn</strong> – er ist die Existenzgrundlage eines jeden Unternehmens</li>
                    <li>Daneben sind Unternehmen auch <strong>soziale Gebilde</strong>, die in der Gesellschaft verankert sind</li>
                    <li>Unternehmen sehen in der Übernahme von <strong>sozialer und ökologischer Verantwortung</strong> weitere wichtige Zielsetzungen</li>
                    <li>Unterschiedliche <strong>Interessengruppen</strong> beeinflussen die Ziele und Entscheidungen</li>
                    <li>Häufig stehen verschiedene Ziele auch <strong>im Konflikt</strong> miteinander und sind nicht vereinbar</li>
                </ul>
            </section>

            <section className="gs-section">
                <h2 className="gs-section__title">
                    <span className="gs-section__num">2.2</span>
                    Unternehmensphilosophie
                </h2>
                <p className="gs-section__intro">
                    Die Unternehmensphilosophie kann als <strong>„Charakter eines Unternehmens"</strong> verstanden werden. Sie ist der <strong>grundlegende Pfeiler der Corporate Identity</strong>.
                </p>

                <div className="gs-infobox">
                    <div className="gs-infobox__header">🏛️ Corporate Identity</div>
                    <ul className="gs-list gs-list--compact">
                        <li>Aus der Unternehmensphilosophie wird das <strong>Unternehmensleitbild</strong> abgeleitet</li>
                        <li><strong>Unternehmensleitbild + Unternehmensphilosophie = Corporate Identity</strong></li>
                    </ul>
                </div>

                <div className="gs-two-col">
                    <div>
                        <h4 className="gs-col-heading">🔀 Wirkung nach Innen</h4>
                        <ul className="gs-list gs-list--compact">
                            <li><strong>Basis für einen einheitlichen Umgang</strong> miteinander</li>
                            <li>Fördert das <strong>Gemeinschaftsgefühl</strong> und die <strong>Identifikation</strong> mit dem Unternehmen</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="gs-col-heading">🌍 Wirkung nach Außen</h4>
                        <ul className="gs-list gs-list--compact">
                            <li>Verstärkt ein <strong>positives Bild des Unternehmens</strong></li>
                            <li>Positive Wahrnehmung bei <strong>Kunden, Lieferanten, Investoren</strong> → wirtschaftlicher Erfolg</li>
                            <li>Zieht <strong>potenzielle neue Mitarbeiter</strong> durch positives Image an</li>
                        </ul>
                    </div>
                </div>

                <h3 className="gs-subsection__title">Moderne Unternehmen</h3>
                <ul className="gs-list">
                    <li>Verfügen über eine <strong>niedergeschriebene</strong> Unternehmensphilosophie</li>
                    <li>Für alle Partner <strong>einsehbar / offen kommuniziert</strong></li>
                    <li>Soll das <strong>Handeln aller Mitarbeiter und Führungskräfte</strong> prägen und <strong>von ihnen gelebt werden</strong></li>
                </ul>
            </section>

            <section className="gs-section">
                <h2 className="gs-section__title">
                    <span className="gs-section__num">2.3</span>
                    Die 3 wichtigsten Punkte der Unternehmensphilosophie
                </h2>

                <div className="gs-cards-row">
                    <div className="gs-mini-card">
                        <div className="gs-mini-card__badge">1</div>
                        <h4>Gemeinsame Werte & Normen</h4>
                        <p>Festgehaltene Werte, die von <strong>allen Mitarbeitern mitgetragen</strong> werden sollen. Mitarbeiter sollten in die <strong>Erarbeitung eingebunden</strong> werden.</p>
                    </div>
                    <div className="gs-mini-card">
                        <div className="gs-mini-card__badge">2</div>
                        <h4>Alleinstellungsmerkmale (USP)</h4>
                        <p>Unternehmen sollen sich <strong>klar von der Konkurrenz abgrenzen</strong>. Unique Selling Propositions definieren den Wettbewerbsvorteil.</p>
                    </div>
                    <div className="gs-mini-card">
                        <div className="gs-mini-card__badge">3</div>
                        <h4>Nutzen</h4>
                        <p>Stärkt die <strong>Identifikation der Mitarbeiter</strong>, kann im <strong>Marketing</strong> eingesetzt werden. Bedarf interner UND externer Kommunikation.</p>
                    </div>
                </div>

                <div className="gs-infobox">
                    <div className="gs-infobox__header">💡 Zentrale Fragen bei Werten & Normen</div>
                    <ul className="gs-list gs-list--compact">
                        <li>Wie soll der Umgang der Mitarbeiter <strong>untereinander</strong> aussehen?</li>
                        <li>Wie soll der Umgang mit <strong>Kunden und Partnern</strong> aussehen?</li>
                        <li>Wie soll das Unternehmen <strong>von außen wahrgenommen</strong> werden?</li>
                    </ul>
                </div>

                <h3 className="gs-subsection__title">Beispiele für USPs</h3>
                <div className="gs-table-wrapper">
                    <table className="gs-table">
                        <thead>
                            <tr><th>Unternehmen</th><th>USP</th></tr>
                        </thead>
                        <tbody>
                            <tr><td><strong>Amazon</strong></td><td>Der Kunde steht im Mittelpunkt; durch Amazon soll sein Leben vereinfacht werden</td></tr>
                            <tr><td><strong>Google</strong></td><td>Google verbindet den Suchenden und den Content besser als jede andere Suchmaschine</td></tr>
                        </tbody>
                    </table>
                </div>
            </section>

            <section className="gs-section">
                <h2 className="gs-section__title">
                    <span className="gs-section__num">2.4</span>
                    Beispiel einer Unternehmensphilosophie
                </h2>
                <div className="gs-cards-row gs-cards-row--vertical">
                    <div className="gs-phase-card">
                        <div className="gs-phase-card__num">1. Werte & Normen</div>
                        <p>Gegenseitiger respektvoller Umgang ohne Unterschiede bei Religion, Rasse oder Sexualität miteinander ist Grundlage für das gemeinsame Arbeiten.</p>
                    </div>
                    <div className="gs-phase-card">
                        <div className="gs-phase-card__num">2. Alleinstellungsmerkmal</div>
                        <p>Das Unternehmen entwickelt die modernsten Produkte in einem zukunftsweisenden Design.</p>
                    </div>
                    <div className="gs-phase-card">
                        <div className="gs-phase-card__num">3. Nutzen</div>
                        <p>Kunden erhalten die besten Produkte, Mitarbeiter werden fair behandelt und leistungsgerecht entlohnt. Zusätzlich werden fünf Prozent des Gewinns an soziale Projekte gespendet.</p>
                    </div>
                </div>
                <div className="gs-highlight">
                    ⚠️ Dieses Beispiel ist sehr kurz gehalten – eine realistische Unternehmensphilosophie ist wesentlich umfangreicher.
                </div>
            </section>
        </div>
    );
}

/* ────────────────────────────────────────────
   Prüfungszusammenfassung
   ──────────────────────────────────────────── */
function Pruefungszusammenfassung() {
    return (
        <div className="gs-content">
            <div className="gs-exam-notice">
                <span className="gs-exam-notice__icon">⚠️</span>
                <div>
                    <strong>Prüfungsrelevante Kernthemen</strong>
                    <p>Die folgenden Punkte fassen die wichtigsten Inhalte zusammen, die du für die LK beherrschen musst.</p>
                </div>
            </div>

            <section className="gs-section">
                <h2 className="gs-section__title">
                    <span className="gs-section__num">🔑</span>
                    Vision & Mission
                </h2>
                <ul className="gs-list gs-list--check">
                    <li><strong>Vision:</strong> Zukunftsbild / angestrebter Idealzustand – gibt die Richtung vor</li>
                    <li><strong>Mission:</strong> Konkreter Auftrag / Weg zur Realisierung der Vision – gegenwartsbezogen</li>
                    <li><strong>Zusammenhang:</strong> Gegenwart → Mission → Vision (Zukunft)</li>
                    <li>Mission = <strong>Realisierung der Vision</strong></li>
                </ul>
            </section>

            <section className="gs-section">
                <h2 className="gs-section__title">
                    <span className="gs-section__num">🔑</span>
                    Unternehmensziele
                </h2>
                <ul className="gs-list gs-list--check">
                    <li><strong>Primäres Ziel:</strong> Erwirtschaftung von Gewinn (Existenzgrundlage)</li>
                    <li>Unternehmen sind <strong>soziale Gebilde</strong> in der Gesellschaft</li>
                    <li><strong>Soziale und ökologische Verantwortung</strong> als weitere Ziele</li>
                    <li>Verschiedene <strong>Interessengruppen</strong> beeinflussen die Ziele</li>
                    <li>Ziele können <strong>im Konflikt</strong> zueinander stehen</li>
                </ul>
            </section>

            <section className="gs-section">
                <h2 className="gs-section__title">
                    <span className="gs-section__num">🔑</span>
                    Unternehmensphilosophie
                </h2>
                <ul className="gs-list gs-list--check">
                    <li><strong>Definition:</strong> „Charakter des Unternehmens" – grundlegender Pfeiler der Corporate Identity</li>
                    <li><strong>Corporate Identity</strong> = Unternehmensphilosophie + Unternehmensleitbild</li>
                    <li><strong>Wirkung innen:</strong> Einheitlicher Umgang, Gemeinschaftsgefühl, Identifikation</li>
                    <li><strong>Wirkung außen:</strong> Positives Image bei Kunden, Lieferanten, Investoren → wirtschaftlicher Erfolg</li>
                    <li>Muss <strong>niedergeschrieben</strong>, offen kommuniziert und <strong>gelebt</strong> werden</li>
                </ul>
            </section>

            <section className="gs-section">
                <h2 className="gs-section__title">
                    <span className="gs-section__num">🔑</span>
                    3 wichtigste Punkte merken
                </h2>
                <div className="gs-cards-row">
                    <div className="gs-mini-card gs-mini-card--exam">
                        <div className="gs-mini-card__badge">1</div>
                        <h4>Werte & Normen</h4>
                        <p>Von allen Mitarbeitern mitgetragen, gemeinsam erarbeitet</p>
                    </div>
                    <div className="gs-mini-card gs-mini-card--exam">
                        <div className="gs-mini-card__badge">2</div>
                        <h4>USP</h4>
                        <p>Klare Abgrenzung von der Konkurrenz</p>
                    </div>
                    <div className="gs-mini-card gs-mini-card--exam">
                        <div className="gs-mini-card__badge">3</div>
                        <h4>Nutzen</h4>
                        <p>Für Kunden, Mitarbeiter & Gesellschaft</p>
                    </div>
                </div>
            </section>

            <section className="gs-section">
                <h2 className="gs-section__title">
                    <span className="gs-section__num">🔑</span>
                    Zusammenfassung auf einen Blick
                </h2>
                <div className="gs-table-wrapper">
                    <table className="gs-table">
                        <thead>
                            <tr><th>Begriff</th><th>Beschreibung</th><th>Zeitbezug</th></tr>
                        </thead>
                        <tbody>
                            <tr><td><strong>Vision</strong></td><td>Zukunftsbild / Idealzustand</td><td>Zukunft</td></tr>
                            <tr><td><strong>Mission</strong></td><td>Konkreter Auftrag / Weg zur Vision</td><td>Gegenwart</td></tr>
                            <tr><td><strong>Unternehmensphilosophie</strong></td><td>„Charakter" des Unternehmens, Pfeiler der Corporate Identity</td><td>Dauerhaft</td></tr>
                        </tbody>
                    </table>
                </div>
            </section>
        </div>
    );
}

/* ────────────────────────────────────────────
   Main Page Component
   ──────────────────────────────────────────── */
export default function BWLPage() {
    const [activeTab, setActiveTab] = useState<TabKey>('lektion1');
    const navigate = useNavigate();

    return (
        <div className="gs-page">
            <header className="stundenplan-header">
                <div className="header-eyebrow">
                    <span className="badge-dot" />
                    Lernfeld 1 – BWL Grundlagen
                </div>
                <h1>Vision, Mission & Unternehmensphilosophie</h1>
                <p>BWL-Grundlagen für die Leistungskontrolle</p>
            </header>

            {/* Tab Navigation */}
            <nav className="gs-tabs">
                {tabs.map((tab) => (
                    <button
                        key={tab.key}
                        className={`gs-tab ${activeTab === tab.key ? 'gs-tab--active' : ''}`}
                        onClick={() => setActiveTab(tab.key)}
                        id={`bwl-tab-${tab.key}`}
                    >
                        <span className="gs-tab__icon">{tab.icon}</span>
                        <span className="gs-tab__label">{tab.label}</span>
                    </button>
                ))}
            </nav>

            {/* Tab Content */}
            <div className="gs-tab-content">
                {activeTab === 'lektion1' && <Lektion1 />}
                {activeTab === 'lektion2' && <Lektion2 />}
                {activeTab === 'pruefung' && <Pruefungszusammenfassung />}
            </div>

            <button
                className="gs-back-link"
                onClick={() => navigate('/lernmaterial')}
                id="bwl-back-link"
            >
                ← Zurück zum Lernmaterial
            </button>
        </div>
    );
}
