---
slug: "2025-11-03"
title: "v0.0.81 (-008, -007, -006, -005)"
authors: [david]
tags: [scholar]
---

<!-- truncate -->

### 0.0.81-008

#### Bugfixes

- SyncStudentClassIds: Kritischer Fix - Command prüft jetzt class_number UND class_letter (vorher nur class_number)
- Schüler class_id Synchronisation: 610 Inkonsistenzen zwischen class_id und class_number/class_letter behoben
- StudentPolicy: Lehrer können jetzt korrekt auf ihre zugeordneten Klassen zugreifen

### 0.0.81-007

#### Neu

- Admin Dashboard: Neue Kachel 'Datenbank & Speicher' für Performance-Analyse hinzugefügt
- DatabaseStorageService: Service zur Analyse von Datenbank- und Speichergrößen mit Cache-Mechanismus (5-15 Min)
- Storage Locations: Wartungszähler auf Button 'Zur Wartungsübersicht' für besseren Überblick

### 0.0.81-006

#### Bugfixes

- UpdateApplication: recursiveCopy überspringt .env Dateien mit Warnung im Log

### 0.0.81-005

#### Bugfixes

- RadiusService: Graceful Handling bei fehlender RADIUS_SERVER Konfiguration
- RadiusService: Keine Exception mehr bei fehlenden ENV-Variablen, sondern JSON-Response mit Fehlermeldung
