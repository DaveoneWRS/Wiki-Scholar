---
slug: "2025-09-10"
title: "v0.0.74 (-000, -003)"
authors: [david]
tags: [scholar]
---

<!-- truncate -->

### 0.0.74-000

#### Neu

- Tutor-Verwaltung: Vollständige Tutor-Zuordnung zu Schülern im Schüler-Detailbereich mit Bearbeitung und Anzeige
- Magellan Tutor-Import: Neuer CSV-Import für Tutor-Zuordnungen über /magellanimport mit Vorschau- und Import-Funktionalität
- WLAN-Zugangsdaten Card: Professionelle Anzeige der WLAN-Credentials nach Benutzer-Erstellung mit Copy-to-Clipboard Funktionalität

#### Bugfixes

- Tutor Update Redirect: Controller-Methode redirected nach Update korrekt zurück zur Schüler-Detail-Seite
- Permission System: Tutor-Bearbeitung verwendet korrekte 'editUser'-Berechtigung statt Laravel Policy
- UTF-8 Encoding: Tutor-Import mit korrekter Zeichensatz-Behandlung für deutsche Umlaute (Windows-1252 zu UTF-8)
- Alpine.js Integration: Korrekte Zustandsverwaltung für Tutor-Bearbeitung ohne Seitenneuladung

### 0.0.73-003

#### Neu

- Bücher-Formular: Direktes Anlegen neuer Personen über 'Neue Person anlegen' Button im Bereich 'Beteiligte Personen'
- Person Creation Modal: Popup-Dialog zur schnellen Person-Erstellung ohne Verlassen der Bucherfassungsseite
- Bibliothek Scanner: Bücher mit Status 'NEU' können jetzt ausgeliehen werden - erweitert verfügbare Status für Ausleihe
- Bibliothek Exemplar-Bearbeitung: Status-Dropdown zeigt alle in der Datenbank verfügbaren Status statt nur limitierter Auswahl
- ILE Duplicate Cleanup Command: Neuer Artisan-Befehl 'ile:cleanup-duplicates' zur automatischen Bereinigung doppelter ILE-Einträge

#### Bugfixes

- Bibliothek Scanner: Fehlermeldung 'Exemplar ist nicht verfügbar (Status: NEU)' behoben - NEU-Status jetzt erlaubt
- Exemplar Status-Bearbeitung: Entfernung der Einschränkung auf editierbare Status - alle Status können geändert werden
- Person-Dropdown Synchronisation: Korrekte Aktualisierung aller Personen-Auswahlfelder nach Modal-Erstellung
- ILE Import: Vollständiger Datenimport - alle CSV-Felder (fachliche_leistung, arbeitsverhalten, sozialverhalten, support_measure, Bemerkungen) werden jetzt korrekt in ILE-Records übertragen
- ILE Import: Mehrfach-Einträge pro Fach - erstellt separate ILE-Records für wiederholte Fächer statt nur den ersten zu aktualisieren
- ILE Fach-Darstellung: 'Kl' wird einheitlich als 'Klassenleitung' in allen ILE-Formularen und Import-Logs angezeigt
