export interface QuizQuestion {
    id: number;
    question: string;
    options: string[];
    correctIndex: number;
}

export const quizQuestions: QuizQuestion[] = [
    {
        id: 1,
        question: 'Welche Aufgaben übernimmt der Hauptprozessor in einem Computer?',
        options: [
            'Er speichert dauerhaft Daten auf der Festplatte',
            'Er führt Berechnungen durch, steuert den Programmablauf, verarbeitet Ein-/Ausgaben und koordiniert alle Komponenten',
            'Er rendert ausschließlich Grafiken und Videos',
            'Er verwaltet nur den Arbeitsspeicher',
        ],
        correctIndex: 1,
    },
    {
        id: 2,
        question: 'Was bedeutet die Abkürzung CPU?',
        options: [
            'Central Processing Unit – zentrale Verarbeitungseinheit',
            'Computer Power Unit – Computer-Stromeinheit',
            'Core Performance Utility – Kern-Leistungsdienstprogramm',
            'Central Program Utility – zentrales Programm-Dienstprogramm',
        ],
        correctIndex: 0,
    },
    {
        id: 3,
        question: 'Was ist der Unterschied zwischen einer CPU und einer GPU?',
        options: [
            'Die CPU hat tausende kleine Kerne, die GPU wenige leistungsstarke Kerne',
            'Es gibt keinen Unterschied, beide Begriffe bezeichnen dasselbe',
            'Die CPU ist für allgemeine Berechnungen zuständig (wenige starke Kerne), die GPU für massiv parallele Berechnungen (tausende kleinere Kerne)',
            'Die GPU steuert den Computer, die CPU ist nur für Grafik zuständig',
        ],
        correctIndex: 2,
    },
    {
        id: 4,
        question: 'Was ist ein Prozessor und welche Rolle spielt er in einem Computer?',
        options: [
            'Ein Prozessor ist ein Speicherbaustein für langfristige Datensicherung',
            'Ein Prozessor ist die zentrale Verarbeitungseinheit (CPU) – das Herzstück für die eigentliche Datenverarbeitung',
            'Ein Prozessor ist ein Netzwerk-Chip für die Internetverbindung',
            'Ein Prozessor ist ein Kühlsystem für Computer-Komponenten',
        ],
        correctIndex: 1,
    },
    {
        id: 5,
        question: 'Welche Maßnahmen und Techniken können zur Leistungssteigerung von Prozessoren eingesetzt werden?',
        options: [
            'Ausschließlich die Erhöhung der RAM-Kapazität',
            'Nur der Einbau einer besseren Grafikkarte',
            'Steigerung der Taktfrequenz, Parallelisierung, 64-Bit-Architektur, Turbo Boost/Core, Hardware-Beschleunigung, Erhöhung der IPC',
            'Nur die Vergrößerung des Festplattenspeichers',
        ],
        correctIndex: 2,
    },
    {
        id: 6,
        question: 'Was sind die Hauptunterschiede zwischen RISC- und CISC-Architekturen?',
        options: [
            'RISC hat einen umfangreichen Befehlssatz, CISC einen reduzierten',
            'RISC hat einen reduzierten, einfachen Befehlssatz mit wenigen Taktzyklen pro Befehl und geringem Stromverbrauch; CISC hat einen umfangreichen, komplexen Befehlssatz mit 4–10 Taktzyklen',
            'Beide sind identisch, nur unterschiedlich benannt',
            'RISC verbraucht mehr Strom als CISC',
        ],
        correctIndex: 1,
    },
    {
        id: 7,
        question: 'Was ist eine zentrale Verarbeitungseinheit (CPU) in einem Computer?',
        options: [
            'Ein Bildschirm zur Ausgabe von Daten',
            'Eine Netzwerkkarte für Internet-Kommunikation',
            'Das Herzstück des Computers: übernimmt Datenverarbeitung, führt Befehle aus und steuert alle Systemkomponenten',
            'Ein reines Speichermedium für Programme',
        ],
        correctIndex: 2,
    },
    {
        id: 8,
        question: 'Was sind die Hauptbestandteile eines Prozessors?',
        options: [
            'Festplatte, RAM und Netzteil',
            'Bildschirm, Tastatur und Maus',
            'Rechenwerk (ALU), Steuerwerk (CU) und interner Speicher (Register/Akku)',
            'Grafikkarte, Soundkarte und Netzwerkkarte',
        ],
        correctIndex: 2,
    },
    {
        id: 9,
        question: 'Welche Funktion hat das Steuerwerk (Control Unit) in einem Prozessor?',
        options: [
            'Es führt arithmetische Berechnungen durch',
            'Es koordiniert alle Teile des Prozessors: liest/speichert Daten aus dem RAM, dekodiert und führt Befehle aus, verarbeitet Ein-/Ausgaben und überwacht das Gesamtsystem',
            'Es kühlt den Prozessor',
            'Es speichert dauerhaft Programme auf der Festplatte',
        ],
        correctIndex: 1,
    },
    {
        id: 10,
        question: 'Was wird in der Arithmetic Logic Unit (ALU) eines Prozessors ausgeführt?',
        options: [
            'Die Verwaltung von Dateien auf der Festplatte',
            'Die Steuerung der Bildschirmausgabe',
            'Alle arithmetischen und logischen Funktionen und Berechnungen, inkl. Akku und Flags',
            'Die Verwaltung der Netzwerkverbindungen',
        ],
        correctIndex: 2,
    },
    {
        id: 11,
        question: 'Welche Funktion hat das Steuerwerk (Control Unit)?',
        options: [
            'Es ist die Steuereinheit des Prozessors: verantwortlich für Datenverwaltung, Befehlsausführung, Peripherieverarbeitung, Interrupt-Steuerung und Systemüberwachung',
            'Es ist nur für die Kühlung zuständig',
            'Es speichert ausschließlich Daten im Cache',
            'Es dient nur zur Grafikberechnung',
        ],
        correctIndex: 0,
    },
    {
        id: 12,
        question: 'Was wird in der Arithmetic Logic Unit (ALU) durchgeführt?',
        options: [
            'Nur logische Operationen, keine arithmetischen',
            'Arithmetische Berechnungen (Addition, Subtraktion etc.) und logische Operationen (AND, OR, NOT etc.), mit Akku und Flags',
            'Nur die Speicherverwaltung',
            'Die Steuerung externer Geräte',
        ],
        correctIndex: 1,
    },
    {
        id: 13,
        question: 'Welche Funktion hat die Control Unit (CU) im Prozessor?',
        options: [
            'Sie berechnet ausschließlich Gleitkommazahlen',
            'Sie ist nur für die Tonausgabe zuständig',
            'Sie ist die Steuereinheit: verantwortlich für Datenverwaltung (RAM), Befehlsausführung, Peripherieverarbeitung, Interrupt-Steuerung und Systemüberwachung',
            'Sie steuert nur den Lüfter des Prozessors',
        ],
        correctIndex: 2,
    },
    {
        id: 14,
        question: 'In welchen Geräten werden klassischerweise RISC-Prozessoren eingesetzt?',
        options: [
            'In Großrechnern und Mainframes',
            'Hauptsächlich in Smartphones und Tablets – bekannteste Architektur: ARM',
            'Ausschließlich in Desktop-PCs',
            'Nur in Spielkonsolen',
        ],
        correctIndex: 1,
    },
    {
        id: 15,
        question: 'Warum sind RISC-Prozessoren in vielen Fällen den CISC-Prozessoren überlegen?',
        options: [
            'Weil RISC-Prozessoren mehr Transistoren haben',
            'Weil RISC-Prozessoren einen umfangreicheren Befehlssatz haben',
            'Weil 80 % aller Berechnungen mit nur 20 % der Befehle ausgeführt werden – der schlanke RISC-Befehlssatz ist dann effizienter',
            'Weil RISC-Prozessoren grundsätzlich höher getaktet werden können',
        ],
        correctIndex: 2,
    },
    {
        id: 16,
        question: 'Welche Art von Prozessoren verwendet hauptsächlich die ARM-Architektur?',
        options: [
            'CISC-Prozessoren mit umfangreichem Befehlssatz',
            'RISC-Prozessoren – mit reduziertem, einfachem Befehlssatz, geringem Stromverbrauch und hoher Energieeffizienz',
            'Quantenprozessoren',
            'Signalprozessoren (DSP)',
        ],
        correctIndex: 1,
    },
    {
        id: 17,
        question: 'Was sind die Hauptunterschiede zwischen RISC- und CISC-Prozessoren?',
        options: [
            'RISC: reduzierter Befehlssatz, wenige Taktzyklen, geringer Stromverbrauch, weniger Transistoren. CISC: umfangreicher Befehlssatz, 4–10 Taktzyklen, höherer Stromverbrauch, mehr Transistoren',
            'RISC und CISC sind identisch aufgebaut',
            'CISC hat weniger Transistoren als RISC',
            'RISC hat einen komplexeren Befehlssatz als CISC',
        ],
        correctIndex: 0,
    },
    {
        id: 18,
        question: 'In welchen Geräten werden klassische RISC-Prozessoren hauptsächlich eingesetzt?',
        options: [
            'In Server-Systemen und Rechenzentren',
            'Ausschließlich in industriellen Steuerungen',
            'Hauptsächlich in Smartphones und Tablets – Repräsentant: ARM-Architektur',
            'Nur in Supercomputern',
        ],
        correctIndex: 2,
    },
    {
        id: 19,
        question: 'Warum ist es schwierig, moderne Prozessoren klar als RISC- oder CISC-Prozessoren zu klassifizieren?',
        options: [
            'Weil es keine modernen Prozessoren mehr gibt',
            'Weil moderne Prozessoren beide Konzepte kombinieren – weder ARM noch x86 sind heute reinrassig RISC oder CISC',
            'Weil nur noch CISC-Prozessoren hergestellt werden',
            'Weil die Bezeichnungen veraltet und bedeutungslos sind',
        ],
        correctIndex: 1,
    },
    {
        id: 20,
        question: 'Warum ist ein 64-Bit-Betriebssystem für Server sinnvoller als ein 32-Bit-Betriebssystem?',
        options: [
            'Weil 64-Bit-Systeme günstiger sind',
            'Weil 32-Bit-Systeme keine Netzwerkfunktionen unterstützen',
            'Weil ein 32-Bit-System maximal 4 GByte RAM adressieren kann, Server aber deutlich mehr Speicher benötigen',
            'Weil 64-Bit-Systeme keine Software-Updates brauchen',
        ],
        correctIndex: 2,
    },
    {
        id: 21,
        question: 'Was ist der maximale physisch ansprechbare Adressraum eines 32-Bit-Systems?',
        options: [
            '1 GByte',
            '8 GByte',
            'Theoretisch 4 GByte (2³² Adressen), praktisch etwas über 3 GByte',
            '16 GByte',
        ],
        correctIndex: 2,
    },
    {
        id: 22,
        question: 'Was ist der Multiplikator und wofür wird er verwendet?',
        options: [
            'Ein Faktor, mit dem der Basistakt multipliziert wird, um die tatsächliche CPU-Taktfrequenz zu berechnen',
            'Ein zusätzlicher Prozessorkern für parallele Berechnungen',
            'Eine Taktbremse, die die CPU-Geschwindigkeit begrenzt',
            'Ein Speichercontroller für den RAM',
        ],
        correctIndex: 0,
    },
    {
        id: 23,
        question: 'Wie berechnet sich die Taktfrequenz eines Prozessors bei AMD und Intel?',
        options: [
            'Taktfrequenz = Anzahl der Kerne × Cachegröße',
            'Taktfrequenz = RAM-Geschwindigkeit ÷ Busbreite',
            'Taktfrequenz = Basistakt (BCLK) × Multiplikator (z. B. 100 MHz × 35 = 3,5 GHz)',
            'Taktfrequenz = Spannung × Stromstärke',
        ],
        correctIndex: 2,
    },
    {
        id: 24,
        question: 'Was sind Turbo Boost und Turbo Core?',
        options: [
            'Spezielle Kühlsysteme für Prozessoren',
            'Technologien zur automatischen Übertaktung einzelner CPU-Kerne (Intel: Turbo Boost, AMD: Turbo Core)',
            'Externe Zusatzprozessoren zur Leistungssteigerung',
            'Betriebssystem-Features für schnelleres Booten',
        ],
        correctIndex: 1,
    },
    {
        id: 25,
        question: 'Wie funktioniert der Turbo-Modus bei Prozessoren?',
        options: [
            'Der Nutzer muss die Frequenz manuell im BIOS erhöhen',
            'Der Prozessor erhöht automatisch seinen Multiplikator und damit die Taktfrequenz, wenn Temperatur und TDP es erlauben',
            'Der Turbo-Modus deaktiviert ungenutzte Kerne dauerhaft',
            'Der Turbo-Modus verdoppelt den Arbeitsspeicher',
        ],
        correctIndex: 1,
    },
    {
        id: 26,
        question: 'Was ist der Unterschied zwischen Turbo Boost/Turbo Core und klassischem Übertakten?',
        options: [
            'Es gibt keinen Unterschied',
            'Turbo Boost/Core ist automatisch, kontrolliert und vom Hersteller garantiert; klassisches Übertakten ist manuell, nicht garantiert und kann die Hardware schädigen',
            'Klassisches Übertakten ist sicherer als Turbo Boost',
            'Turbo Boost funktioniert nur bei AMD-Prozessoren',
        ],
        correctIndex: 1,
    },
    {
        id: 27,
        question: 'Wie funktioniert der Turbo-Modus bei Mehrkern-Prozessoren?',
        options: [
            'Alle Kerne werden gleichzeitig maximal übertaktet',
            'Einzelne aktive Kerne werden höher getaktet, während andere inaktiv sind – die eingesparte Energie wird genutzt, solange die TDP eingehalten wird',
            'Der Turbo-Modus deaktiviert alle Kerne bis auf einen',
            'Alle Kerne laufen dauerhaft auf Minimaltakt',
        ],
        correctIndex: 1,
    },
    {
        id: 28,
        question: 'Was muss bei der Anwendung von Turbo Boost und Turbo Core hinsichtlich der TDP beachtet werden?',
        options: [
            'Die TDP darf beliebig überschritten werden',
            'Die TDP spielt bei Turbo Boost keine Rolle',
            'Die TDP (Thermal Design Power) darf nicht dauerhaft überschritten werden – der Prozessor reguliert die Übertaktung automatisch im TDP-Rahmen',
            'Die TDP wird nur bei AMD-Prozessoren berücksichtigt',
        ],
        correctIndex: 2,
    },
    {
        id: 29,
        question: 'Was ist die Bedeutung von Thermal Design Power (TDP) im Zusammenhang mit Turbo Boost und Turbo Core?',
        options: [
            'TDP gibt die maximale Wärmeleistung an, die das Kühlsystem dauerhaft abführen muss – sie dient als Obergrenze für die Turbo-Übertaktung',
            'TDP ist die maximale Downloadgeschwindigkeit des Prozessors',
            'TDP beschreibt die Anzahl der Transistoren im Prozessor',
            'TDP ist ein Benchmark-Wert für die Grafikleistung',
        ],
        correctIndex: 0,
    },
];
