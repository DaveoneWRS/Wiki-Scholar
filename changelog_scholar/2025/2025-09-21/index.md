---
slug: "2025-09-21"
title: "v0.0.76 (-001, -000)"
authors: [david]
tags: [scholar]
---

<!-- truncate -->

### 0.0.76-001

#### Neu

- Wartungsdialog: Neuer Bestätigungsdialog für Wartungsaufgaben beim Scannen wartungsfälliger Geräte mit Checkbox-Validierung
- Dashboard Gerätereservierungen: Widget zeigt anstehende Reservierungen der nächsten 3 Tage oberhalb der Schulferien
- Wartungskommentar: Kommentarfeld im Wartungsdialog zur Dokumentation durchgeführter Arbeiten
- Status-Änderung bei Wartung: Dropdown zur Festlegung des Gerätestatus nach abgeschlossener Wartung

#### Bugfixes

- Wartungsvalidierung: Wartung kann nur noch nach Bestätigung aller definierten Aufgaben abgeschlossen werden
- Dashboard Performance: Optimierte Darstellung von Gerätereservierungen ohne Duplikate
- Wartungskommentar-Speicherung: Korrekte Übertragung und Validierung von Kommentaren bei Wartungsabschluss

### 0.0.76-000

#### Neu

- Gerätereservierung: Neues vollständiges System zur Reservierung von Schulgeräten mit kategoriebasierter und individueller Geräteverwaltung
- Stundenzeit-Konfiguration: Admin-Interface zur dynamischen Konfiguration der Unterrichtszeiten für alle Reservierungskalender
- Kalender-Integration: Übersichtliche Kalenderansicht mit Verfügbarkeitsanzeige und einfacher Reservierungserstellung
- Kategorie-Reservierung: Möglichkeit zur Reservierung von Gerätekategorien (z.B. iPad, Laptop) ohne spezifische Gerätezuordnung
- Individuelle Gerätereservierung: Direktreservierung spezifischer Geräte mit eindeutiger Zuordnung
- Reservierungs-Dashboard: Persönliche Übersicht aller eigenen Reservierungen mit Verwaltungsmöglichkeiten

#### Bugfixes

- Device-Status Korrektur: Verwendung korrekter deutscher Status-Werte ('verfügbar', 'ausgeliehen', 'defekt') statt englischer
- Wartungsberechnung: Präzise Berechnung wartungsfälliger Geräte basierend auf last_maintenance_date und maintenance_period_in_days
- Controller Import: Korrektur der Controller-Vererbung von Illuminate\Routing\Controller statt App\Http\Controllers\Controller
- Verfügbarkeitslogik: Korrekte Filterung verfügbarer Geräte unter Berücksichtigung von Status, Reservierungen und Wartungsstatus
