import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

type TabKey = 'lektion1' | 'lektion2' | 'pruefung';

const tabs: { key: TabKey; label: string; icon: string }[] = [
    { key: 'lektion1', label: 'Lektion 1', icon: '📖' },
    { key: 'lektion2', label: 'Lektion 2', icon: '📘' },
    { key: 'pruefung', label: 'Prüfungszusammenfassung', icon: '🎯' },
];

/* ────────────────────────────────────────────
   Lektion 1 – Einstieg
   ──────────────────────────────────────────── */
function Lektion1() {
    return (
        <div className="gs-content">
            <section className="gs-section">
                <h2 className="gs-section__title">
                    <span className="gs-section__num">1.1</span>
                    Warum IT-Grundschutz?
                </h2>
                <p className="gs-section__intro">Herausforderungen für Unternehmen im digitalen Zeitalter:</p>
                <ul className="gs-list">
                    <li><strong>Komplexe Gefährdungslage:</strong> Risiken durch Hackerangriffe, Fahrlässigkeit, technische Mängel, Naturkatastrophen</li>
                    <li><strong>Ganzheitliche Sicherheitskonzepte:</strong> Schutzmaßnahmen müssen IT-Systeme, Organisation, Personal, Infrastruktur und betriebliche Abläufe umfassen</li>
                    <li><strong>Zusammenwirken der Maßnahmen:</strong> Sicherheitsvorkehrungen müssen zur Institution passen, abgestimmt sein und von allen Beteiligten unterstützt werden</li>
                    <li><strong>Angemessenheit und Wirtschaftlichkeit:</strong> Maßnahmen sollen effektiv, aber nicht übermäßig kostenintensiv oder einschränkend sein</li>
                    <li><strong>Erfüllung externer Anforderungen:</strong> Sicherheitsmaßnahmen müssen nachweisbar an Standards ausgerichtet werden</li>
                    <li><strong>Nachhaltigkeit:</strong> Sicherheit ist ein fortlaufender Prozess, der regelmäßig überprüft und weiterentwickelt werden muss</li>
                </ul>
            </section>

            <section className="gs-section">
                <h2 className="gs-section__title">
                    <span className="gs-section__num">1.2</span>
                    IT-Grundschutz – Bestandteile
                </h2>
                <p className="gs-section__intro">
                    Der IT-Grundschutz des <strong>BSI (Bundesamt für Sicherheit in der Informationstechnik)</strong> besteht aus:
                </p>

                <h3 className="gs-subsection__title">1. BSI-Standards zum IT-Grundschutz</h3>
                <div className="gs-table-wrapper">
                    <table className="gs-table">
                        <thead>
                            <tr><th>Standard</th><th>Inhalt</th></tr>
                        </thead>
                        <tbody>
                            <tr><td><strong>BSI-Standard 200-1</strong></td><td>Managementsysteme für Informationssicherheit (ISMS) – Anforderungen basierend auf ISO 27001</td></tr>
                            <tr><td><strong>BSI-Standard 200-2</strong></td><td>IT-Grundschutz-Methodik – Vorgehensweisen zur schrittweisen Einführung eines ISMS</td></tr>
                            <tr><td><strong>BSI-Standard 200-3</strong></td><td>Risikoanalyse auf Basis von IT-Grundschutz – Vereinfachte Risikoanalyse für Komponenten mit unsicherem Schutzbedarf</td></tr>
                        </tbody>
                    </table>
                </div>

                <h3 className="gs-subsection__title">2. IT-Grundschutz-Kompendium</h3>
                <ul className="gs-list">
                    <li><strong>Modular aufgebautes Arbeitsinstrument</strong> mit IT-Grundschutz-Bausteinen in zehn thematischen Schichten</li>
                    <li>Jeder Baustein beschreibt <strong>Zielsetzung, Gefährdungslage und Sicherheitsanforderungen</strong></li>
                    <li>Standardisierte Sicherheitsanforderungen ermöglichen den <strong>Verzicht auf aufwendige Risikoanalysen</strong></li>
                </ul>

                <div className="gs-infobox">
                    <div className="gs-infobox__header">📦 Aufbau eines Bausteins</div>
                    <ul className="gs-list gs-list--compact">
                        <li><strong>Beschreibung:</strong> Kurze Einleitung, worum es geht (z.B. „B 1.5 Virenschutz")</li>
                        <li><strong>Gefährdungskatalog:</strong> Auflistung typischer Bedrohungen</li>
                        <li><strong>Anforderungen in 3 Stufen:</strong>
                            <ul>
                                <li><em>Basis-Anforderungen</em> – absolutes Minimum</li>
                                <li><em>Standard-Anforderungen</em> – normaler Schutzbedarf</li>
                                <li><em>Erhöhter Schutzbedarf</em> – besonders kritische Systeme/Daten</li>
                            </ul>
                        </li>
                    </ul>
                </div>

                <h3 className="gs-subsection__title">Die 10 Bausteinschichten</h3>
                <div className="gs-table-wrapper">
                    <table className="gs-table gs-table--compact">
                        <thead><tr><th>Kürzel</th><th>Bezeichnung</th></tr></thead>
                        <tbody>
                            <tr><td>ISMS</td><td>Sicherheitsmanagement</td></tr>
                            <tr><td>ORP</td><td>Organisation und Personal</td></tr>
                            <tr><td>CON</td><td>Konzeption und Vorgehensweise</td></tr>
                            <tr><td>OPS</td><td>Betrieb</td></tr>
                            <tr><td>DER</td><td>Detektion und Reaktion</td></tr>
                            <tr><td>INF</td><td>Infrastruktur</td></tr>
                            <tr><td>SYS</td><td>IT-Systeme</td></tr>
                            <tr><td>NET</td><td>Netze und Kommunikation</td></tr>
                            <tr><td>APP</td><td>Anwendungen</td></tr>
                            <tr><td>IND</td><td>Industrielle IT</td></tr>
                        </tbody>
                    </table>
                </div>

                <h3 className="gs-subsection__title">3. Weitere Veröffentlichungen und Hilfsmittel</h3>
                <ul className="gs-list">
                    <li><strong>IT-Grundschutz-Profile:</strong> Mustervorlagen für spezifische Anwendungsbereiche</li>
                    <li><strong>ISO 27001-Zertifizierung</strong> auf Basis von IT-Grundschutz</li>
                    <li><strong>Software-Tools</strong> unterstützen bei der IT-Grundschutz-Methodik</li>
                </ul>

                <div className="gs-highlight">
                    Der IT-Grundschutz des BSI bietet eine systematische Grundlage zur <strong>Analyse, Planung und Umsetzung</strong> von Sicherheitsmaßnahmen.
                </div>
            </section>

            <section className="gs-section">
                <h2 className="gs-section__title">
                    <span className="gs-section__num">1.3</span>
                    Vorgehensweisen (BSI-Standard 200-2)
                </h2>

                <div className="gs-cards-row">
                    <div className="gs-mini-card">
                        <div className="gs-mini-card__badge">1</div>
                        <h4>Basis-Absicherung</h4>
                        <p>Einfacher Einstieg <strong>ohne</strong> detaillierte Schutzbedarfs- oder Risikoanalysen. Besonders geeignet für <strong>KMU und Behörden</strong>.</p>
                    </div>
                    <div className="gs-mini-card">
                        <div className="gs-mini-card__badge">2</div>
                        <h4>Standard-Absicherung</h4>
                        <p>Systematische Erfassung aller Komponenten, Bewertung des Schutzbedarfs, ggf. ergänzt durch <strong>Risikoanalysen</strong>. Ziel: umfassende Absicherung.</p>
                    </div>
                    <div className="gs-mini-card">
                        <div className="gs-mini-card__badge">3</div>
                        <h4>Kern-Absicherung</h4>
                        <p>Enthält alle Schritte der Standard-Absicherung. Fokus auf besonders wichtige Bereiche (<strong>„Kronjuwelen"</strong>) der Institution.</p>
                    </div>
                </div>

                <div className="gs-infobox">
                    <div className="gs-infobox__header">📋 Kursgliederung (Standard-Absicherung)</div>
                    <ol className="gs-list gs-list--ordered">
                        <li>Lektion 2: Sicherheitsmanagement</li>
                        <li>Lektion 3: Strukturanalyse</li>
                        <li>Lektion 4: Schutzbedarfsfeststellung</li>
                        <li>Lektion 5: Modellierung gemäß IT-Grundschutz</li>
                        <li>Lektion 6: IT-Grundschutz-Check</li>
                        <li>Lektion 7: Risikoanalyse</li>
                        <li>Lektion 8: Umsetzungsplanung</li>
                        <li>Lektion 9: Aufrechterhaltung und Verbesserung + ISO 27001-Zertifizierung</li>
                    </ol>
                </div>
            </section>
        </div>
    );
}

/* ────────────────────────────────────────────
   Lektion 2 – Sicherheitsmanagement
   ──────────────────────────────────────────── */
function Lektion2() {
    return (
        <div className="gs-content">
            <section className="gs-section">
                <h2 className="gs-section__title">
                    <span className="gs-section__num">2.1</span>
                    Der Sicherheitsprozess
                </h2>
                <p className="gs-section__intro">Informationssicherheit ist ein <strong>fortlaufender Prozess</strong>, der stetige Anpassungen erfordert – basierend auf dem <strong>PDCA-Zyklus</strong>:</p>

                <div className="gs-table-wrapper">
                    <table className="gs-table">
                        <thead><tr><th>Phase</th><th>Bedeutung</th></tr></thead>
                        <tbody>
                            <tr><td><strong>Plan</strong></td><td>Planung von Sicherheitsmaßnahmen</td></tr>
                            <tr><td><strong>Do</strong></td><td>Umsetzung der Maßnahmen</td></tr>
                            <tr><td><strong>Check</strong></td><td>Erfolgskontrolle und Überwachung der Zielerreichung</td></tr>
                            <tr><td><strong>Act</strong></td><td>Beseitigung von Defiziten und kontinuierliche Verbesserung</td></tr>
                        </tbody>
                    </table>
                </div>

                <ul className="gs-list">
                    <li><strong>Dokumentation:</strong> Dient der Nachvollziehbarkeit – kann elektronisch vorliegen, Zugriffsrechte müssen sorgfältig geregelt werden</li>
                    <li><strong>Informationsklassifizierung:</strong> Dokumente werden nach Vertraulichkeit eingestuft, Klassifizierungsvermerke erleichtern den richtigen Umgang</li>
                </ul>
            </section>

            <section className="gs-section">
                <h2 className="gs-section__title">
                    <span className="gs-section__num">2.2</span>
                    Phasen des Sicherheitsprozesses
                </h2>
                <p className="gs-section__intro"><strong>Initiierung durch die Leitungsebene</strong> → legt Ziele, Rahmenbedingungen, Organisationsstruktur fest und stellt Ressourcen bereit.</p>

                <div className="gs-cards-row gs-cards-row--vertical">
                    <div className="gs-phase-card">
                        <div className="gs-phase-card__num">Phase 1</div>
                        <h4>Initiierung + Sicherheitsleitlinie + Sicherheitsorganisation</h4>
                        <ul className="gs-list gs-list--compact">
                            <li>Relevante Rahmenbedingungen identifizieren</li>
                            <li>Sicherheitsziele aus Institutionszielen ableiten → <strong>Leitlinie zur Informationssicherheit</strong></li>
                            <li>Sicherheitsorganisation und klare Verantwortlichkeiten aufbauen</li>
                            <li>Ressourcen einplanen (Budget, Räumlichkeiten, Zeit)</li>
                            <li><strong>Alle Mitarbeiter</strong> sind beteiligt</li>
                        </ul>
                    </div>
                    <div className="gs-phase-card">
                        <div className="gs-phase-card__num">Phase 2</div>
                        <h4>Erstellung eines Sicherheitskonzepts</h4>
                        <ul className="gs-list gs-list--compact">
                            <li>Physische Sicherung von Gebäuden</li>
                            <li>Netzwerksicherheit (Absicherung von Schnittstellen)</li>
                            <li>Identitäts- und Berechtigungsmanagement</li>
                            <li>Kryptografische Verfahren</li>
                            <li>Datensicherungskonzepte</li>
                            <li>Erkennung und Abwehr von Schadsoftware</li>
                        </ul>
                    </div>
                    <div className="gs-phase-card">
                        <div className="gs-phase-card__num">Phase 3</div>
                        <h4>Umsetzung des Sicherheitskonzepts</h4>
                        <ul className="gs-list gs-list--compact">
                            <li>Maßnahmen konkret umsetzen und überprüfen</li>
                            <li>Umsetzung wird von der <strong>Leitungsebene bewertet und kontrolliert</strong></li>
                        </ul>
                    </div>
                    <div className="gs-phase-card">
                        <div className="gs-phase-card__num">Phase 4</div>
                        <h4>Aufrechterhaltung und kontinuierliche Verbesserung</h4>
                        <ul className="gs-list gs-list--compact">
                            <li>Fortlaufender Prozess an veränderte Anforderungen angepasst</li>
                            <li>Einsatz von <strong>Kennzahlen, internen und externen Audits</strong></li>
                            <li>Abweichungen identifizieren und beheben</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="gs-section">
                <h2 className="gs-section__title">
                    <span className="gs-section__num">2.3</span>
                    Verantwortung und Aufgaben der Leitung
                </h2>
                <ul className="gs-list">
                    <li><strong>Erkennen und Bewerten</strong> von Risiken der Informationssicherheit</li>
                    <li><strong>Initiieren, Steuern und Kontrollieren</strong> des Sicherheitsprozesses</li>
                    <li><strong>Integration</strong> der Sicherheitsmaßnahmen in alle Abläufe</li>
                    <li><strong>Bereitstellung von Ressourcen</strong> (Personal, Budget, Zeit)</li>
                    <li><strong>Vorbildfunktion</strong> durch sicherheitsbewusstes Verhalten</li>
                    <li>Die Leitung trägt die <strong>Gesamtverantwortung</strong>, auch wenn operative Aufgaben delegiert werden</li>
                </ul>
            </section>

            <section className="gs-section">
                <h2 className="gs-section__title">
                    <span className="gs-section__num">2.4</span>
                    Der Informationssicherheitsbeauftragte (ISB)
                </h2>
                <div className="gs-two-col">
                    <div>
                        <h4 className="gs-col-heading">Aufgaben</h4>
                        <ul className="gs-list gs-list--compact">
                            <li>Steuerung und Koordination des Sicherheitsprozesses</li>
                            <li>Unterstützung bei Erstellung der Sicherheitsleitlinie</li>
                            <li>Koordination des Sicherheitskonzepts</li>
                            <li>Erstellung und Überwachung von Realisierungsplänen</li>
                            <li>Berichterstattung an die Leitung</li>
                            <li>Untersuchung sicherheitsrelevanter Vorfälle</li>
                            <li>Initiierung von Schulungsmaßnahmen</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="gs-col-heading">Anforderungen</h4>
                        <ul className="gs-list gs-list--compact">
                            <li>Umfassende Kenntnisse in Informationssicherheit und IT</li>
                            <li>Verständnis der Geschäftsprozesse</li>
                            <li><strong>Direkt der obersten Leitung unterstellt</strong> (nicht in IT-Abteilung)</li>
                            <li>Ausreichende Ressourcen und Fortbildungszeit</li>
                            <li>Direkter Berichtsweg zur Leitungsebene</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="gs-section">
                <h2 className="gs-section__title">
                    <span className="gs-section__num">2.5</span>
                    Der ICS-Informationssicherheitsbeauftragte (ICS-ISB)
                </h2>
                <p className="gs-section__intro">Für <strong>industrielle Steuerungen (ICS)</strong> in produzierenden Unternehmen. Arbeitet eng mit dem ISB zusammen.</p>
                <ul className="gs-list">
                    <li>Abstimmung gemeinsamer Ziele zwischen ICS und ISMS</li>
                    <li>Durchführung von <strong>Risikoanalysen für industrielle Steuerungen</strong></li>
                    <li>Festlegung geeigneter Sicherheitsmaßnahmen unter Berücksichtigung der <strong>Funktionssicherheit („Safety")</strong></li>
                    <li>Schulung der Mitarbeiter</li>
                    <li>Bearbeitung von Sicherheitsvorfällen in Zusammenarbeit mit dem ISB</li>
                </ul>
            </section>

            <section className="gs-section">
                <h2 className="gs-section__title">
                    <span className="gs-section__num">2.6</span>
                    Das IS-Management-Team
                </h2>
                <p className="gs-section__intro">In <strong>größeren Institutionen</strong> zur Unterstützung des ISB – zuständig für übergreifende Regelung, Koordination, Beratung und Kontrolle.</p>
                <div className="gs-two-col">
                    <div>
                        <h4 className="gs-col-heading">Zusammensetzung</h4>
                        <ul className="gs-list gs-list--compact">
                            <li>ISB (Informationssicherheitsbeauftragter)</li>
                            <li>ICS-ISB (falls vorhanden)</li>
                            <li>IT-Verantwortliche</li>
                            <li>Datenschutzbeauftragte</li>
                            <li>Vertreter der Geschäftsprozesse</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="gs-col-heading">Aufgaben</h4>
                        <ol className="gs-list gs-list--compact gs-list--ordered">
                            <li>Sicherheitsziele & Leitlinie entwickeln</li>
                            <li>Umsetzung der Leitlinie überprüfen</li>
                            <li>Sicherheitsprozess steuern & kontrollieren</li>
                            <li>Sicherheitskonzept mitentwickeln</li>
                            <li>Maßnahmen evaluieren</li>
                            <li>Schulungsprogramme erstellen</li>
                            <li>Beratung der Fachverantwortlichen und Leitung</li>
                        </ol>
                    </div>
                </div>
            </section>

            <section className="gs-section">
                <h2 className="gs-section__title">
                    <span className="gs-section__num">2.7</span>
                    Die Sicherheitsleitlinie
                </h2>
                <p className="gs-section__intro"><strong>Grundlegendes Dokument</strong> – wenige Seiten, verständliche Sprache, muss allen Mitarbeitern bekannt und regelmäßig aktualisiert werden.</p>
                <div className="gs-table-wrapper">
                    <table className="gs-table">
                        <thead><tr><th>Nr.</th><th>Inhalt</th></tr></thead>
                        <tbody>
                            <tr><td>1</td><td><strong>Geltungsbereich</strong> – für welche Bereiche und Mitarbeiter gilt sie</td></tr>
                            <tr><td>2</td><td><strong>Bedeutung der Informationssicherheit</strong> – essenziell für den Fortbestand</td></tr>
                            <tr><td>3</td><td><strong>Verantwortung der Leitung</strong> – Verpflichtung zur Initiierung, Umsetzung und Verbesserung</td></tr>
                            <tr><td>4</td><td><strong>Gesetzliche und regulatorische Vorgaben</strong></td></tr>
                            <tr><td>5</td><td><strong>Kritische Geschäftsprozesse</strong> – z.B. Produktion, Forschung, Personalwesen</td></tr>
                            <tr><td>6</td><td><strong>Organisationsstruktur und Verantwortlichkeiten</strong></td></tr>
                            <tr><td>7</td><td><strong>Sensibilisierung und Schulung</strong></td></tr>
                        </tbody>
                    </table>
                </div>
            </section>

            <section className="gs-section">
                <h2 className="gs-section__title">
                    <span className="gs-section__num">2.8</span>
                    Das Sicherheitskonzept
                </h2>
                <p className="gs-section__intro">Beschreibt, mit welchen <strong>konkreten Maßnahmen</strong> die Ziele der Sicherheitsleitlinie umgesetzt werden – gilt für den <strong>Informationsverbund</strong>.</p>

                <div className="gs-infobox">
                    <div className="gs-infobox__header">🔗 Informationsverbund</div>
                    <ul className="gs-list gs-list--compact">
                        <li>Sinnvolle Mindestgröße → idealerweise die gesamte Institution</li>
                        <li>In größeren Institutionen: Teilbereiche möglich (organisatorisch oder anwendungsbezogen abgrenzbar)</li>
                        <li><strong>Nicht geeignet:</strong> einzelne Clients, Server oder Netzverbindungen</li>
                        <li>Schnittstellen müssen genau beschrieben werden</li>
                    </ul>
                </div>

                <h3 className="gs-subsection__title">Erstaufnahme – zu erfassende Informationen:</h3>
                <ul className="gs-list">
                    <li><strong>Geschäftsprozesse</strong> (Name, Beschreibung, Fachverantwortliche)</li>
                    <li><strong>Anwendungen</strong> (Name, Beschreibung)</li>
                    <li><strong>IT-Systeme und ICS-Komponenten</strong> (Name, Plattform, Standort)</li>
                    <li><strong>Wichtige Räume</strong> (Rechenzentrum, Serverräume – Art, Raumnummer)</li>
                    <li><strong>Virtuelle Systeme</strong> (kennzeichnend benannt)</li>
                    <li><strong>Grafischer Netzplan</strong> als sinnvolle Ergänzung</li>
                </ul>
            </section>

            <section className="gs-section">
                <h2 className="gs-section__title">
                    <span className="gs-section__num">2.9</span>
                    Wahl der Vorgehensweise
                </h2>
                <div className="gs-table-wrapper">
                    <table className="gs-table">
                        <thead><tr><th>Variante</th><th>Beschreibung</th></tr></thead>
                        <tbody>
                            <tr><td><strong>1. Basis-Absicherung</strong></td><td>Schneller Einstieg mit grundlegenden Schutzmaßnahmen für alle relevanten Geschäftsprozesse</td></tr>
                            <tr><td><strong>2. Kern-Absicherung</strong></td><td>Fokus auf besonders kritische Geschäftsprozesse und Assets („Kronjuwelen") – vertiefte Absicherung</td></tr>
                            <tr><td><strong>3. Standard-Absicherung</strong></td><td>Empfohlene Vorgehensweise – umfassender Schutz für alle Prozesse und Bereiche</td></tr>
                        </tbody>
                    </table>
                </div>
                <div className="gs-highlight">
                    Basis- und Kern-Absicherung dienen als <strong>Einstieg</strong>, die Standard-Absicherung ist die <strong>empfohlene Vorgehensweise</strong>.
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
                    <p>Die folgenden Punkte fassen die wichtigsten Inhalte zusammen, die du für die Prüfung beherrschen musst.</p>
                </div>
            </div>

            <section className="gs-section">
                <h2 className="gs-section__title">
                    <span className="gs-section__num">🔑</span>
                    BSI-Standards & Kompendium
                </h2>
                <ul className="gs-list gs-list--check">
                    <li><strong>BSI-Standard 200-1:</strong> ISMS-Anforderungen (basierend auf ISO 27001)</li>
                    <li><strong>BSI-Standard 200-2:</strong> IT-Grundschutz-Methodik – 3 Vorgehensweisen (Basis-, Standard-, Kern-Absicherung)</li>
                    <li><strong>BSI-Standard 200-3:</strong> Vereinfachte Risikoanalyse</li>
                    <li><strong>Kompendium:</strong> 10 Bausteinschichten (ISMS, ORP, CON, OPS, DER, INF, SYS, NET, APP, IND)</li>
                    <li><strong>Bausteinaufbau:</strong> Beschreibung → Gefährdungen → Anforderungen (Basis / Standard / Erhöht)</li>
                </ul>
            </section>

            <section className="gs-section">
                <h2 className="gs-section__title">
                    <span className="gs-section__num">🔑</span>
                    PDCA-Zyklus
                </h2>
                <ul className="gs-list gs-list--check">
                    <li><strong>Plan – Do – Check – Act</strong> nach William Edwards Deming</li>
                    <li>Sicherheit ist ein <strong>fortlaufender Prozess</strong>, keine einmalige Maßnahme</li>
                    <li>Gilt universell: auch in Qualitäts- und Umweltmanagement bewährt</li>
                </ul>
            </section>

            <section className="gs-section">
                <h2 className="gs-section__title">
                    <span className="gs-section__num">🔑</span>
                    4 Phasen des Sicherheitsprozesses
                </h2>
                <ol className="gs-list gs-list--ordered gs-list--check">
                    <li><strong>Initiierung:</strong> Rahmenbedingungen, Sicherheitsleitlinie, Organisation</li>
                    <li><strong>Sicherheitskonzept erstellen:</strong> Technische und organisatorische Maßnahmen</li>
                    <li><strong>Umsetzung:</strong> Konkrete Implementierung, Kontrolle durch Leitung</li>
                    <li><strong>Aufrechterhaltung:</strong> Audits, Kennzahlen, kontinuierliche Verbesserung</li>
                </ol>
            </section>

            <section className="gs-section">
                <h2 className="gs-section__title">
                    <span className="gs-section__num">🔑</span>
                    Rollen & Verantwortlichkeiten
                </h2>
                <ul className="gs-list gs-list--check">
                    <li><strong>Oberste Leitung:</strong> Gesamtverantwortung, initiiert und steuert, Vorbildfunktion</li>
                    <li><strong>ISB:</strong> Koordiniert den Sicherheitsprozess, berichtet direkt an die Leitung, <em>nicht in IT-Abteilung integriert</em></li>
                    <li><strong>ICS-ISB:</strong> Speziell für industrielle Steuerungen, enge Zusammenarbeit mit ISB</li>
                    <li><strong>IS-Management-Team:</strong> In großen Institutionen – ISB, IT-Verantwortliche, Datenschutz, Fachabteilungen</li>
                </ul>
            </section>

            <section className="gs-section">
                <h2 className="gs-section__title">
                    <span className="gs-section__num">🔑</span>
                    Sicherheitsleitlinie – 7 Inhalte
                </h2>
                <ol className="gs-list gs-list--ordered gs-list--check">
                    <li>Geltungsbereich</li>
                    <li>Bedeutung der Informationssicherheit</li>
                    <li>Verantwortung der Leitung</li>
                    <li>Gesetzliche/regulatorische Vorgaben</li>
                    <li>Kritische Geschäftsprozesse</li>
                    <li>Organisationsstruktur & Verantwortlichkeiten</li>
                    <li>Sensibilisierung & Schulung</li>
                </ol>
            </section>

            <section className="gs-section">
                <h2 className="gs-section__title">
                    <span className="gs-section__num">🔑</span>
                    Sicherheitskonzept & Informationsverbund
                </h2>
                <ul className="gs-list gs-list--check">
                    <li><strong>Informationsverbund:</strong> Geltungsbereich des Sicherheitskonzepts – idealerweise gesamte Institution</li>
                    <li><strong>Zu erfassen:</strong> Geschäftsprozesse, Anwendungen, IT-Systeme, Räume, virtuelle Systeme, Netzplan</li>
                    <li>Schnittstellen müssen genau beschrieben werden</li>
                    <li><strong>Nicht geeignet</strong> als Informationsverbund: einzelne Clients, Server oder Netzverbindungen</li>
                </ul>
            </section>

            <section className="gs-section">
                <h2 className="gs-section__title">
                    <span className="gs-section__num">🔑</span>
                    3 Vorgehensweisen merken
                </h2>
                <div className="gs-cards-row">
                    <div className="gs-mini-card gs-mini-card--exam">
                        <div className="gs-mini-card__badge">1</div>
                        <h4>Basis</h4>
                        <p>Schnelleinstieg, grundlegende Maßnahmen</p>
                    </div>
                    <div className="gs-mini-card gs-mini-card--exam">
                        <div className="gs-mini-card__badge">2</div>
                        <h4>Kern</h4>
                        <p>Fokus auf „Kronjuwelen"</p>
                    </div>
                    <div className="gs-mini-card gs-mini-card--exam">
                        <div className="gs-mini-card__badge">3</div>
                        <h4>Standard</h4>
                        <p>Empfohlen – umfassend</p>
                    </div>
                </div>
            </section>
        </div>
    );
}

/* ────────────────────────────────────────────
   Main Page Component
   ──────────────────────────────────────────── */
export default function ITGrundschutzPage() {
    const [activeTab, setActiveTab] = useState<TabKey>('lektion1');
    const navigate = useNavigate();

    return (
        <div className="gs-page">
            <header className="stundenplan-header">
                <div className="header-eyebrow">
                    <span className="badge-dot" />
                    Lernfeld 4 – IT-Grundschutz
                </div>
                <h1>Schutzbedarfsanalyse</h1>
                <p>IT-Grundschutz nach BSI – prüfungsrelevante Zusammenfassung</p>
            </header>

            {/* Tab Navigation */}
            <nav className="gs-tabs">
                {tabs.map((tab) => (
                    <button
                        key={tab.key}
                        className={`gs-tab ${activeTab === tab.key ? 'gs-tab--active' : ''}`}
                        onClick={() => setActiveTab(tab.key)}
                        id={`gs-tab-${tab.key}`}
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
                id="gs-back-link"
            >
                ← Zurück zum Lernmaterial
            </button>
        </div>
    );
}
