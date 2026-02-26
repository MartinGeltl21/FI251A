# IT-Grundschutz – Prüfungsrelevante Zusammenfassung

---

## Lektion 1 – Einstieg

### 1.1 Warum IT-Grundschutz

Herausforderungen für Unternehmen im digitalen Zeitalter:

- **Komplexe Gefährdungslage:** Risiken durch Hackerangriffe, Fahrlässigkeit, technische Mängel, Naturkatastrophen
- **Ganzheitliche Sicherheitskonzepte:** Schutzmaßnahmen müssen IT-Systeme, Organisation, Personal, Infrastruktur und betriebliche Abläufe umfassen
- **Zusammenwirken der Maßnahmen:** Sicherheitsvorkehrungen müssen zur Institution passen, abgestimmt sein und von allen Beteiligten unterstützt werden
- **Angemessenheit und Wirtschaftlichkeit:** Maßnahmen sollen effektiv, aber nicht übermäßig kostenintensiv oder einschränkend sein
- **Erfüllung externer Anforderungen:** Sicherheitsmaßnahmen müssen nachweisbar an Standards ausgerichtet werden
- **Nachhaltigkeit:** Sicherheit ist ein fortlaufender Prozess, der regelmäßig überprüft und weiterentwickelt werden muss

---

### 1.2 IT-Grundschutz – Bestandteile

Der IT-Grundschutz des **BSI (Bundesamt für Sicherheit in der Informationstechnik)** besteht aus mehreren Komponenten.

#### 1. BSI-Standards zum IT-Grundschutz

Die BSI-Standards liefern methodische und organisatorische Empfehlungen:

| Standard | Inhalt |
|---|---|
| **BSI-Standard 200-1** | Managementsysteme für Informationssicherheit (ISMS) – Anforderungen basierend auf ISO 27001 |
| **BSI-Standard 200-2** | IT-Grundschutz-Methodik – Vorgehensweisen zur schrittweisen Einführung eines ISMS |
| **BSI-Standard 200-3** | Risikoanalyse auf Basis von IT-Grundschutz – Vereinfachte Risikoanalyse für Komponenten mit unsicherem Schutzbedarf |

#### 2. IT-Grundschutz-Kompendium

- **Modular aufgebautes Arbeitsinstrument** mit IT-Grundschutz-Bausteinen in zehn thematischen Schichten
- Jeder Baustein beschreibt **Zielsetzung, Gefährdungslage und Sicherheitsanforderungen**
- Standardisierte Sicherheitsanforderungen ermöglichen den **Verzicht auf aufwendige Risikoanalysen**
- Umsetzungshinweise unterstützen bei der Implementierung

**Aufbau eines Bausteins:**
- **Beschreibung:** Kurze Einleitung, worum es im Baustein geht (z.B. "B 1.5 Virenschutz")
- **Gefährdungskatalog:** Auflistung typischer Bedrohungen (z.B. "Infektion mit Schadsoftware")
- **Anforderungen (Maßnahmen):** Konkrete Sicherheitsanforderungen in drei Stufen:
  - **Basis-Anforderungen:** Das absolute Minimum, das jede Organisation umsetzen sollte
  - **Standard-Anforderungen:** Maßnahmen für einen normalen Schutzbedarf
  - **Anforderungen für erhöhten Schutzbedarf:** Zusätzliche Maßnahmen für besonders kritische Systeme oder Daten

**Die 10 Bausteinschichten:**

| Kürzel | Bezeichnung |
|---|---|
| ISMS | Sicherheitsmanagement |
| ORP | Organisation und Personal |
| CON | Konzeption und Vorgehensweise |
| OPS | Betrieb |
| DER | Detektion und Reaktion |
| INF | Infrastruktur |
| SYS | IT-Systeme |
| NET | Netze und Kommunikation |
| APP | Anwendungen |
| IND | Industrielle IT |

#### 3. Weitere Veröffentlichungen und Hilfsmittel

- **IT-Grundschutz-Profile:** Mustervorlagen für spezifische Anwendungsbereiche
- **ISO 27001-Zertifizierung auf Basis von IT-Grundschutz:** Nachweis eines anerkannten Sicherheitsniveaus
- **Software-Tools** unterstützen bei der IT-Grundschutz-Methodik

> Der IT-Grundschutz des BSI bietet eine systematische Grundlage zur **Analyse, Planung und Umsetzung** von Sicherheitsmaßnahmen.

---

### 1.3 Über diesen Kurs – Vorgehensweisen (BSI-Standard 200-2)

#### 1. Basis-Absicherung
- Einfacher Einstieg ins Sicherheitsmanagement, **ohne** detaillierte Schutzbedarfsanalysen oder Risikoanalysen
- Erfüllung essenzieller Basis-Anforderungen
- Besonders geeignet für **KMU und Behörden**

#### 2. Standard-Absicherung
- Systematische Erfassung aller sicherheitsrelevanten Komponenten
- Bewertung des Schutzbedarfs mit dem IT-Grundschutz-Kompendium
- Falls erforderlich, Ergänzung durch **Risikoanalysen**
- Ziel: **umfassende Absicherung** nach IT-Grundschutz

#### 3. Kern-Absicherung
- Enthält alle Schritte der Standard-Absicherung
- Fokus auf **besonders wichtige Bereiche ("Kronjuwelen")** der Institution

#### Kursgliederung (Ablauf Standard-Absicherung)

1. Lektion 2: Sicherheitsmanagement
2. Lektion 3: Strukturanalyse
3. Lektion 4: Schutzbedarfsfeststellung
4. Lektion 5: Modellierung gemäß IT-Grundschutz
5. Lektion 6: IT-Grundschutz-Check
6. Lektion 7: Risikoanalyse
7. Lektion 8: Umsetzungsplanung
8. Lektion 9: Aufrechterhaltung und Verbesserung + ISO 27001-Zertifizierung

---

## Lektion 2 – Sicherheitsmanagement

### 2.1 Der Sicherheitsprozess

- Informationssicherheit ist ein **fortlaufender Prozess**, der stetige Anpassungen erfordert
- Folgt dem **PDCA-Zyklus** (Plan-Do-Check-Act) nach William Edwards Deming:

| Phase | Bedeutung |
|---|---|
| **Plan** | Planung von Sicherheitsmaßnahmen |
| **Do** | Umsetzung der Maßnahmen |
| **Check** | Erfolgskontrolle und Überwachung der Zielerreichung |
| **Act** | Beseitigung von Defiziten und kontinuierliche Verbesserung |

- Bewährtes Prinzip auch in Qualitäts- und Umweltmanagement

**Dokumentation:**
- Dient der Nachvollziehbarkeit und Vermeidung von Missverständnissen
- Kann elektronisch vorliegen → leichter aktualisierbar
- **Zugriffsrechte** müssen sorgfältig geregelt werden

**Informationsklassifizierung:**
- Dokumente werden nach **Vertraulichkeit** eingestuft
- Regeln für den Umgang werden festgelegt
- **Klassifizierungsvermerke** erleichtern den richtigen Umgang

---

### 2.2 Die Phasen des Sicherheitsprozesses

**Initiierung durch die Leitungsebene** → legt Ziele, Rahmenbedingungen, Organisationsstruktur fest und stellt Ressourcen bereit.

#### Phase 1: Initiierung + Sicherheitsleitlinie + Sicherheitsorganisation
- Relevante Rahmenbedingungen identifizieren (Kundenanforderungen, behördliche Auflagen, bestehende Maßnahmen)
- Sicherheitsziele aus Institutionszielen ableiten → in **Leitlinie zur Informationssicherheit** festhalten
- Sicherheitsorganisation und klare Verantwortlichkeiten aufbauen
- Ressourcen einplanen (Budget, Räumlichkeiten, Zeit)
- **Alle Mitarbeiter** sind innerhalb ihres Verantwortungsbereichs beteiligt

#### Phase 2: Erstellung eines Sicherheitskonzepts
Technische und organisatorische Maßnahmen:
- Physische Sicherung von Gebäuden und Räumlichkeiten
- Netzwerksicherheit (Absicherung von Schnittstellen)
- Regelungen für klassifizierte Informationen
- Identitäts- und Berechtigungsmanagement
- Kryptografische Verfahren
- Datensicherungskonzepte
- Erkennung und Abwehr von Schadsoftware

#### Phase 3: Umsetzung des Sicherheitskonzepts
- Definiert, wie Maßnahmen konkret umzusetzen und zu überprüfen sind
- Umsetzung wird von der **Leitungsebene bewertet und kontrolliert**

#### Phase 4: Aufrechterhaltung und kontinuierliche Verbesserung
- Fortlaufender Prozess, der an veränderte Anforderungen angepasst werden muss
- Einsatz von **Kennzahlen, internen und externen Audits**
- Abweichungen identifizieren und beheben

---

### 2.3 Verantwortung und Aufgaben der Leitung

Hauptaufgaben der obersten Leitung:
- **Erkennen und Bewerten** von Risiken der Informationssicherheit
- **Initiieren, Steuern und Kontrollieren** des Sicherheitsprozesses
- **Integration** der Sicherheitsmaßnahmen in alle Abläufe
- **Bereitstellung von Ressourcen** (Personal, Budget, Zeit) unter Berücksichtigung von Aufwand und Nutzen
- **Vorbildfunktion** durch sicherheitsbewusstes Verhalten
- Die Leitung trägt die **Gesamtverantwortung**, auch wenn operative Aufgaben delegiert werden

---

### 2.4 Der Informationssicherheitsbeauftragte (ISB)

**Aufgaben:**
- Steuerung und Koordination des Sicherheitsprozesses
- Unterstützung der Leitung bei der Erstellung der Sicherheitsleitlinie
- Koordination der Erstellung des Sicherheitskonzepts
- Erstellung und Überwachung von Realisierungsplänen
- Berichterstattung an die Leitung über den Sicherheitsstatus
- Koordination sicherheitsrelevanter Projekte
- Untersuchung sicherheitsrelevanter Vorfälle
- Initiierung von Sensibilisierungs- und Schulungsmaßnahmen

**Anforderungen:**
- Umfassende Kenntnisse in Informationssicherheit und IT
- Verständnis der Geschäftsprozesse
- **Direkt der obersten Leitung unterstellt** (nicht in IT-Abteilung integriert → Rollenkonflikte vermeiden)
- Doppelfunktion als Datenschutzbeauftragter nur mit klar definierten Schnittstellen
- Ausreichende Ressourcen und Zeit für Fortbildungen
- Direkter Berichtsweg zur Leitungsebene
- In großen Unternehmen: mehrere ISB für unterschiedliche Bereiche möglich

---

### 2.5 Der ICS-Informationssicherheitsbeauftragte (ICS-ISB)

- Für **industrielle Steuerungen (Industrial Control Systems)** in produzierenden Unternehmen
- Sicherheitsanforderungen der Produktion unterscheiden sich erheblich von Büro-IT
- Arbeitet eng mit dem ISB zusammen

**Aufgaben:**
- Abstimmung gemeinsamer Ziele zwischen ICS und ISMS
- Umsetzung allgemeiner Sicherheitsvorgaben im ICS-Bereich
- Durchführung von **Risikoanalysen für industrielle Steuerungen**
- Festlegung und Umsetzung geeigneter Sicherheitsmaßnahmen
- Erstellung von Sicherheitsrichtlinien unter Berücksichtigung der **Funktionssicherheit ("Safety")**
- Schulung der Mitarbeiter
- Bearbeitung von Sicherheitsvorfällen in Zusammenarbeit mit dem ISB
- Dokumentation aller sicherheitsrelevanten Maßnahmen

---

### 2.6 Das IS-Management-Team

- In **größeren Institutionen** zur Unterstützung des ISB
- Zuständig für übergreifende Regelung, Koordination, Beratung und Kontrolle

**Zusammensetzung:**
- ISB (Informationssicherheitsbeauftragter)
- ICS-ISB (falls vorhanden)
- IT-Verantwortliche
- Datenschutzbeauftragte
- Vertreter der Geschäftsprozesse und Fachverfahren

**Aufgaben:**
1. Festlegung von Sicherheitszielen und -strategien + Entwicklung der Sicherheitsleitlinie
2. Überprüfung der Umsetzung der Sicherheitsleitlinie
3. Steuerung und Kontrolle des Sicherheitsprozesses
4. Mitwirkung an der Entwicklung des Sicherheitskonzepts
5. Evaluierung geplanter Sicherheitsmaßnahmen
6. Erstellung von Schulungs- und Sensibilisierungsprogrammen
7. Beratung der Fachverantwortlichen, des IT-Betriebs und der Leitungsebene

- Ob ein IS-Management-Team nötig ist, hängt von der **Größe der Institution** ab
- Modelle im BSI-Standard 200-2 und Baustein ISMS.1 beschrieben

---

### 2.7 Die Sicherheitsleitlinie

- **Grundlegendes Dokument** → Bedeutung der Informationssicherheit in der Institution
- Wenige Seiten, verständliche Sprache
- Leitung muss Entwicklung **initiieren und aktiv begleiten**
- ISB erarbeitet die Leitlinie in Zusammenarbeit mit der Leitung
- Muss allen betroffenen Mitarbeitern bekannt gemacht und **regelmäßig aktualisiert** werden

**Inhalte:**

| Nr. | Inhalt |
|---|---|
| 1 | **Geltungsbereich** – für welche Bereiche und Mitarbeiter gilt sie |
| 2 | **Bedeutung der Informationssicherheit** – essenziell für den Fortbestand |
| 3 | **Verantwortung der Leitung** – Verpflichtung zur Initiierung, Umsetzung und Verbesserung |
| 4 | **Gesetzliche und regulatorische Vorgaben** – relevante Gesetze, Mitarbeiterverpflichtung |
| 5 | **Kritische Geschäftsprozesse** – z.B. Produktion, Forschung, Personalwesen |
| 6 | **Organisationsstruktur und Verantwortlichkeiten** – Sicherheitsorganisation und Zuständigkeiten |
| 7 | **Sensibilisierung und Schulung** – Schulungsmaßnahmen für Mitarbeiter |

---

### 2.8 Das Sicherheitskonzept

- Beschreibt, mit welchen **konkreten Maßnahmen** die Ziele der Sicherheitsleitlinie umgesetzt werden
- Gilt für einen festgelegten Geltungsbereich = **Informationsverbund**

**Festlegung des Informationsverbundes:**
- Sinnvolle Mindestgröße → idealerweise die gesamte Institution
- In größeren Institutionen: Teilbereiche möglich, die:
  - organisatorisch oder anwendungsbezogen klar abgrenzbar sind
  - wesentliche Aufgaben und Geschäftsprozesse umfassen
- Sinnvolle Teilbereiche: **Organisationseinheiten, Geschäftsprozesse, Fachaufgaben**
- **Nicht geeignet:** einzelne Clients, Server oder Netzverbindungen
- Schnittstellen des Informationsverbundes müssen genau beschrieben werden

**Erstaufnahme des Informationsverbundes:**
- Fokus: wichtige Geschäftsprozesse und Schutzanforderungen identifizieren (sehr hoch / hoch / normal)

Zu erfassende Informationen:
- **Geschäftsprozesse** (Name, Beschreibung, fachverantwortliche Stelle)
- **Anwendungen** (Name, Beschreibung)
- **IT-Systeme und ICS-Komponenten** (Name, Systemplattform, Standort)
- **Wichtige Räume** (z.B. Rechenzentrum, Serverräume – Art, Raumnummer, Gebäude)
- **Virtuelle Systeme** (kennzeichnend benannt)
- **Grafischer Netzplan** als sinnvolle Ergänzung zur tabellarischen Erfassung

Die erfassten Komponenten und der gesamte Informationsverbund sind **Zielobjekte des Sicherheitskonzepts**.

---

### 2.9 Wahl der Vorgehensweise

Die IT-Grundschutz-Methodik bietet drei Varianten:

| Variante | Beschreibung |
|---|---|
| **1. Basis-Absicherung** | Schneller Einstieg mit grundlegenden Schutzmaßnahmen für alle relevanten Geschäftsprozesse |
| **2. Kern-Absicherung** | Fokus auf besonders kritische Geschäftsprozesse und Assets ("Kronjuwelen") – vertiefte Absicherung |
| **3. Standard-Absicherung** | Empfohlene Vorgehensweise – umfassender Schutz für alle Prozesse und Bereiche |

Basis- und Kern-Absicherung dienen als **Einstieg**, die Standard-Absicherung ist die **empfohlene Vorgehensweise**.
