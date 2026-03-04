import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { HelpCircle, AlertTriangle } from 'lucide-react';
import type { ElementType } from 'react';

type TabKey = 'exakte_fragen';

const tabs: { key: TabKey; label: string; icon: ElementType }[] = [
    { key: 'exakte_fragen', label: 'Exakte Prüfungsfragen', icon: HelpCircle },
];

/* ────────────────────────────────────────────
   Exakte Prüfungsfragen
   ──────────────────────────────────────────── */
const exakteFragenData = [
    { q: "4 Arbeitspapiere, die der AG dem AN auszuhändigen hat?", a: "Arbeitszeugnis, Arbeitsbescheinigung, Urlaubsbescheinigung, Lohnbescheinigung" },
    { q: "Wozu dient ein Arbeitszeugnis?", a: "Um im Alter in Erinnerungen zu schwelgen, Nachweis für den nächsten Arbeitgeber" },
    { q: "Welche Formvorschrift gilt für Arbeitszeugnisse?", a: "Schriftlich" },
    { q: "Worin besteht der Unterschied zwischen dem qualifizierenden und dem einfachen Arbeitszeugnis?", a: "Im Qualifizierenden ist eine Beschreibung und eine Beurteilung (Leistung & Verhalten) enthalten." },
    { q: "Erhält man als Arbeitnehmer automatisch ein Arbeitszeugnis?", a: "Nein. Als Azubi erhält man automatisch das einfache Zeugnis, für das Qualifizierte muss man aktiv nachfragen." },
    { q: "Welche Informationen darf ein qualifiziertes Arbeitszeugnis nicht enthalten, es sei denn der AN wünscht es?", a: "Gewerkschaftsmitgliedschaft, Krankheiten, einmaliger negativer Vorfall, Parteizugehörigkeit" },
    { q: "Warum hat sich dieser “Geheimcode” in Arbeitszeugnissen etabliert?", a: "Wegen der Fürsorgepflicht des Arbeitgebers (Zeugnis muss wohlwollend formuliert sein) und der Pflicht zur Wahrheit (Leistung muss wahrheitsgemäß dargestellt werden)." },
    { q: "Was ist nicht zugelassen im Arbeitszeugnis?", a: "Bewusstes Weglassen wichtiger Beurteilungen, Fokus auf Unwichtiges, Namen falsch schreiben" },
    { q: "Gründe für die Ausstellung eines Zwischenzeugnisses?", a: "Mutterschaftsurlaub, Abteilungschef/Vorgesetzter wechselt, eigener Wechsel" },
    { q: "Was kann man machen, wenn man mit dem Inhalt des Arbeitszeugnis nicht zufrieden ist?", a: "Gespräch suchen, Frist setzen (am besten eigene Formulierung evtl. parat haben), wenn es eskaliert, dann beim Arbeitsgericht klagen" },
    { q: "Wann verfällt der Anspruch auf ein qualifiziertes Arbeitszeugnis?", a: "Nach 3 Jahren verfällt der Anspruch auf ein qualifiziertes Arbeitszeugnis, weil der Inhalt nicht mehr verifiziert werden kann, oder das Unternehmen ist insolvent/pleite." }
];

function ExakteFragen() {
    return (
        <div className="gs-content">
            <div className="gs-exam-notice" style={{ background: 'rgba(255,165,80,0.12)', borderColor: 'rgba(255,165,80,0.3)', marginBottom: '2.5rem' }}>
                <span className="gs-exam-notice__icon"><AlertTriangle size={24} color="#ffa550" /></span>
                <div>
                    <strong style={{ color: '#ffa550' }}>1:1 Prüfungsfragen zur Leistungskontrolle</strong>
                    <p style={{ color: 'rgba(255,255,255,0.85)', marginTop: '0.25rem' }}>Diese Fragen kommen exakt so in der LK in Wirtschaftslehre vor. Unbedingt auswendig lernen!</p>
                </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {exakteFragenData.map((item, index) => (
                    <div key={index} style={{
                        background: 'var(--glass-bg)',
                        padding: '1.5rem',
                        borderRadius: '16px',
                        border: '1px solid var(--glass-border)',
                        boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
                    }}>
                        <h3 style={{ fontSize: '1.05rem', marginBottom: '0.85rem', color: 'var(--text-primary)', lineHeight: '1.4' }}>
                            <span style={{ color: '#ffa550', marginRight: '8px', fontWeight: 'bold' }}>Q:</span>
                            {item.q}
                        </h3>
                        <p style={{ color: 'var(--text-muted)', lineHeight: '1.5', fontSize: '0.95rem' }}>
                            <span style={{ color: 'var(--lk-green)', marginRight: '8px', fontWeight: 'bold' }}>A:</span>
                            {item.a}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}

/* ────────────────────────────────────────────
   Main Page Component
   ──────────────────────────────────────────── */
export default function WLPage() {
    const [activeTab, setActiveTab] = useState<TabKey>('exakte_fragen');
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (location.hash === '#exakte-fragen') {
            setActiveTab('exakte_fragen');
            // Timeout allows the page to finish rendering
            setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 50);
        }
    }, [location]);

    return (
        <div className="gs-page">
            <header className="stundenplan-header">
                <div className="header-eyebrow">
                    <span className="badge-dot" />
                    Wirtschaftslehre (WL)
                </div>
                <h1>Wirtschaftslehre</h1>
                <p>Prüfungsfragen und Lernmaterial für die Leistungskontrolle</p>
            </header>

            {/* Tab Navigation */}
            <nav className="gs-tabs">
                {tabs.map((tab) => (
                    <button
                        key={tab.key}
                        className={`gs-tab ${activeTab === tab.key ? 'gs-tab--active' : ''}`}
                        onClick={() => setActiveTab(tab.key)}
                        id={`wl-tab-${tab.key}`}
                    >
                        <span className="gs-tab__icon"><tab.icon size={18} /></span>
                        <span className="gs-tab__label">{tab.label}</span>
                    </button>
                ))}
            </nav>

            {/* Tab Content */}
            <div className="gs-tab-content">
                {activeTab === 'exakte_fragen' && <ExakteFragen />}
            </div>

            <button
                className="gs-back-link"
                onClick={() => navigate('/lernmaterial')}
                id="wl-back-link"
            >
                ← Zurück zum Lernmaterial
            </button>
        </div>
    );
}
