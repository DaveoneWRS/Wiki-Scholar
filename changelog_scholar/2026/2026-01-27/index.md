---
slug: "2026-01-27"
title: "v0.0.92 (-000, -028)"
authors: [david]
tags: [scholar]
---

<!-- truncate -->

### 0.0.92-000

#### Neu

- Schließfachverwaltung: Neues Modul für komplette Schließfachverwaltung
- Schließfachverwaltung: Standorte anlegen und verwalten
- Schließfachverwaltung: Schließfächer mit automatischer Barcode-Generierung
- Schließfachverwaltung: Zahlenschlösser mit verschlüsselter PIN-Speicherung
- Schließfachverwaltung: Zuweisungen an Schüler, Mitarbeiter und Gastschüler (polymorphe Beziehung)
- Schließfachverwaltung: Zahlungsverfolgung für Pfand und Miete
- Schließfachverwaltung: Ersatzschlüssel-Tracking
- Schließfachverwaltung: Vollständige Historie aller Aktionen
- Schließfachverwaltung: Schloss-Fach-Historie (wann welches Schloss an welchem Fach)
- Schließfachverwaltung: Konfigurierbare Gebühren (Miete, Pfand, Ersatzschlüssel)
- Schließfachverwaltung: Statistik-Dashboard mit Übersicht
- Schließfachverwaltung: Schnellsuche für Schließfächer
- Navigation: Schließfachverwaltung im Sekretariats-Menü unter Gastschüler

#### Bugfixes

- StudentController: Schüler-Reaktivierung - leerer String statt null für status-Spalte (NOT NULL Constraint)

### 0.0.91-028

#### Neu

- DoorView: Todoist-Integration - Tasks aus Projekt 'WRS DoorView' werden nach Farb-Sections (Rot/Gelb/Grün) angezeigt
- DoorView: Auto-Rotation durch alle aktiven Tasks alle 10 Sekunden
- Zeugniskonferenzen: Live-Aktualisierung des Notendurchschnitts nach Notenänderung

#### Bugfixes

- Zeugnis-PDF: Fehltage werden auf 0 gesetzt wenn leer oder '-'
- Zeugnis-PDF: %NAME% Platzhalter wird jetzt getrimmt für saubere Ausgabe
