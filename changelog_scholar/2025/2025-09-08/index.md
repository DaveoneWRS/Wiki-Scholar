---
slug: "2025-09-08"
title: "v0.0.72-002"
authors: [david]
tags: [scholar]
---

<!-- truncate -->

#### Neu

- Case Management Unterschrifts-System: Vollständige Integration von Unterschriften-Sammlung im Kiosk für reguläre Form-Templates
- Case Management Unterschrift-Konfiguration: Template-Bearbeitungsseite erweitert um Unterschrifts-Einstellungen mit Label und Beschreibung
- Case Management PDF-Generierung: Automatische PDF-Erstellung mit Formulardaten und gesammelten Unterschriften
- Case Management Dashboard-Integration: Neue Dashboard-Card zeigt Submissions-Statistiken (heute, Woche, aktive Cases, Templates)
- Touch-optimiertes Unterschriften-Pad: Canvas-basierte Unterschrifts-Eingabe mit Clear/Reset-Funktionen für Tablets und mobile Geräte
- Zeugnis-Ausgabedatum automatisch: Beim ersten Setzen eines individuellen Ausgabedatums wird es automatisch als Standard für das Schuljahr übernommen
- Zeugnis UX-Verbesserung: Platzhaltertexte werden beim Fokussieren automatisch geleert (AG-Informationen, Arbeitsverhalten, Sozialverhalten)

#### Bugfixes

- Case Management Migration: Datenbank-Migration für Unterschrifts-Felder erfolgreich ausgeführt
- Case Management Template-Update: Controller-Validierung korrigiert - Unterschrifts-Einstellungen werden jetzt korrekt gespeichert
- Case Management PDF-Routing: Neue Route und Controller-Methode für Form-PDF-Downloads mit Unterschriften
- Dashboard Case-Statistiken: Korrekte Zählung von Submissions mit Zeitraum-Filterung (heute, Woche, Monat)
- Zeugnis-Ausgabedatum Logik: Standard-Ausgabedatum wird nur gesetzt wenn noch keins für das Schuljahr vorhanden ist
- Kiosk-Formular Submit-Button: Button wird erst nach Barcode-Identifikation oder manueller Eingabe angezeigt und nur aktiviert wenn alle Pflichtfelder ausgefüllt sind
- Bibliothek Barcode-Labels: Textpositionierung für kurze Wörter (≤3 Zeichen) zentriert bei Y-Position 482 statt links bei 180 für bessere optische Balance
