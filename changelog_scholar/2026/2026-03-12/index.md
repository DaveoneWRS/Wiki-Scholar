---
slug: "2026-03-12"
title: "v2026.03.12 (-002, -001)"
authors: [david]
tags: [scholar]
---

<!-- truncate -->

### 2026.03.12-002

#### Neu

- Lernmittel Buchauswertung: Farbige Gruppen-Titel (Grundausstattung, Fremdsprachen, Religion/WN) analog zum digitalen Lernmittel-Report ergänzt
- Lernmittel Übersicht: Verlag-Spalte in der Übersichtstabelle mit Inline-Bearbeitung und Autocomplete ergänzt
- Lernmittel Bearbeiten: Verlag-Feld mit Autocomplete-Vorschlägen aus der Verlags-Datenbank hinzugefügt
- Lernmittel Fehlende Preise: Verlag-Spalte mit Inline-Bearbeitung ergänzt
- Lernmittel Buchauswertung und Digitale Lernmittel Auswertung: Druckoptimierung mit Kopfzeile, Seitenumbrüchen und druckfreundlichem Layout

#### Bugfixes

- Lernmittel Buchauswertung und Digitale Lernmittel Auswertung: Ungültige Jahrgänge werden jetzt herausgefiltert, nur Jahrgang 5-13 wird berücksichtigt

### 2026.03.12-001

#### Neu

- Lernmittel Fehlende Preise: Gesamtzähler für aktuell gelistete Bücher ohne Preis sowie neuer Button 'Nur gelistete Preise abfragen' ergänzt
- Lernmittel Übersicht und Fehlende Preise: Preisabfrage gegen isbn.de mit Pausen, Timeouts und Retry-Backoff stabilisiert

#### Bugfixes

- Gerätereservierungen: Parallele Kategorien-Reservierungen führen bei bereits belegten Slots nicht mehr zu einem kritischen SQL-Fehler, sondern geben eine saubere Fehlermeldung zurück
- Lernmittel Fehlende Preise: Button 'Alle gedruckten Preise abfragen' klar von der neuen Listen-Aktion getrennt, damit nicht versehentlich nur die sichtbare Tabelle gemeint ist
