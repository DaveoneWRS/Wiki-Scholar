---
slug: "2025-11-04"
title: "v0.0.81 (-010, -009)"
authors: [david]
tags: [scholar]
---

<!-- truncate -->

### 0.0.81-010

#### Bugfixes

- Update-System: NPM Build Permission-Fehler behoben - Build-Verzeichnis wird vor Build bereinigt
- Update-System: Automatische Permission-Korrektur für public/ Verzeichnis vor und nach NPM Build
- Update-System: Fallback-Mechanismus für Build-Verzeichnis Bereinigung (sudo/normal)

### 0.0.81-009

#### Neu

- AG-Verwaltung: Löschfunktion für AGs hinzugefügt (Soft-Delete, Schüler-Zuweisungen bleiben erhalten)
- AG-Übersicht: Löschen-Button in Desktop- und Mobile-Ansicht mit Permission-Check (ags_destroy)
- AG-Detailansicht: Löschen-Button im Aktionsbereich hinzugefügt
- AG-Bearbeitung: Löschen-Button als sekundäre Aktion im Formular integriert
