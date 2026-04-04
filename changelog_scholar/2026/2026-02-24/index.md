---
slug: "2026-02-24"
title: "v2026.02.24 (-002, -001)"
authors: [david]
tags: [scholar]
---

<!-- truncate -->

### 2026.02.24-002

#### Neu

- AGS /ags: Teilnehmer-Übernahme ins neue Halbjahr – bestätigte AG-Teilnehmer vom vorherigen Halbjahr können per Klick ins aktive Halbjahr übernommen werden (Bestätigungsseite mit Vorschau, automatischer Warnhinweis auf Index-Seite wenn noch keine Teilnehmer vorhanden)

#### Bugfixes

- AGS /ags: Chronologische Erkennung des vorherigen Halbjahres basiert jetzt auf Schuljahr-String und Halbjahr-Nummer statt auf der DB-ID – verhindert falsche Zuordnung wenn zukünftige Schuljahre bereits angelegt sind

### 2026.02.24-001

#### Neu

- Lernmittel /learning-materials: Bücher mit showEP=false werden gelb hervorgehoben und mit Badge "Nicht im Elternportal" markiert
- Lernmittel /learning-materials: Ausstehende Änderungen (Changelog-Einträge) pro Buch als ausklappbares Panel direkt in der Übersicht – Inline-Akzeptieren ohne Seitenwechsel
- Lernmittel /learning-materials: Bestätigte Bücher für das nächste Schuljahr (book_school_year_confirmations) mit grünem Badge am Buchtitel
- Lernmittel /learning-materials: Buchhinweise (notes/Bemerkung) werden unterhalb des Titels angezeigt
- Lernmittel /learning-materials: Neuer PDF-Export "Bestätigte Lernmittel" – listet bestätigte analoge und digitale Bücher je Klassenstufe sowie Fächer ohne Bestätigung
- Lernmittel /learning-materials/ep-settings: FKL-relevante Einstellungen (Bestellsystem, Bücher-Synchronisation, FKL Lernmittel-Bearbeitung) in separater Box mit Workflow-Hinweis

#### Bugfixes

- SchoolYearSettings: setActive() deaktiviert jetzt alle anderen Schuljahre – verhindert doppelt aktive Einträge beim Schuljahrwechsel
