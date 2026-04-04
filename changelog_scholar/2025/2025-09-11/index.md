---
slug: "2025-09-11"
title: "v0.0.74-001"
authors: [david]
tags: [scholar]
---

<!-- truncate -->

#### Neu

- Split-Screen ILE Navigation: Vollständige Split-Screen-Oberfläche für ILE-Verwaltung mit Navigation links und Details rechts ohne Seitenwechsel
- AJAX ILE-Details: Dynamische Anzeige von ILE-Einträgen über AJAX mit Loading-Indikatoren und Fehlerbehandlung
- Verbesserte ILE-Benutzerführung: Intuitive Navigation zwischen ILE-Einträgen mit visueller Hervorhebung des aktiven Eintrags
- Inline ILE-Aktionen: Bearbeiten, Löschen und Vollansicht direkt in der Split-View ohne Verlassen der Seite

#### Bugfixes

- Schülernamen-Anzeige: Korrigierte Feldnamen von first_name/last_name zu name/surname in Student-Report-Views
- StudentReportController: Sortierung nach korrekten Datenbankfeldern (name, surname) statt nicht-existierenden Feldern
- ILE Detail-Navigation: Konsistente Weiterleitung zur ILE-Liste nach Löschvorgängen unabhängig vom Zugangsweg
- Visual Feedback: Aktive ILE-Einträge werden mit Indigo-Hintergrund hervorgehoben für bessere Orientierung
- Schuljahr-Anzeige in Student Liste: /students/laList zeigt jetzt das korrekte aktuelle Schuljahr 2025/2026 statt der verschiedenen gespeicherten Schuljahre aus der Datenbank
