---
slug: "2025-09-16"
title: "v0.0.75 (-000, -002)"
authors: [david]
tags: [scholar]
---

<!-- truncate -->

### 0.0.75-000

#### Neu

- Notfallzettel für Schüler: Neuer druckoptimierter Notfallzettel mit allen wichtigen Kontaktdaten der Eltern und medizinischen Informationen
- Notfallzettel-Button: Schneller Zugriff über neuen 'Notfallzettel drucken' Button im Schüler-Menü
- A4-Druckoptimierung: Perfekte Anpassung für A4-Format - alle Informationen passen garantiert auf eine Seite
- AG-Leitung Freie Texteingabe: Möglichkeit zur freien Eingabe von AG-Leitungen zusätzlich zur Benutzerauswahl - für externe oder nicht im System erfasste Personen

#### Bugfixes

- Medizinische Hinweise: Korrekte Anzeige von medizinischen Informationen aus der Schülerdokumentation
- Datenbank-Zugriff: Verbesserte Abfrage der Schüler- und Elterndaten für zuverlässige Anzeige
- Drucklayout: Optimierte Schriftgrößen und Abstände für professionelle A4-Ausdrucke
- Elterndaten: Korrekte Anzeige aller Eltern-Kontaktinformationen ohne Fehlermeldungen
- Klassenbewerbungen: Erneute Bewerbung für abgelehnte Klassen jetzt möglich - nur noch aktive Bewerbungen (pending/approved) blockieren weitere Bewerbungen
- AG-Leitung Duplikate: Entfernung doppelter Benutzer-Einträge durch Filterung inaktiver und gelöschter Accounts
- AG-Namen Formatierung: Korrektur der doppelten Namensanzeige durch Verwendung korrekter Datenbank-Felder

### 0.0.74-002

#### Neu

- IP-Whitelist Open Mode: Vollständige Implementierung des Open Mode Systems - alle IPs werden automatisch zugelassen und als 'wartend' hinzugefügt für nachträgliche Freigabe
- IP-Whitelist Status-System: Dreistufiges Status-System (pending, approved, rejected) mit visueller Kennzeichnung und automatischer Logging-Funktionalität
- IP-Whitelist Bulk-Actions: Massenbearbeitung für wartende IPs - mehrere IPs gleichzeitig freigeben oder ablehnen mit Checkbox-Auswahl
- IP-Whitelist Open Mode Toggle: Admin-Toggle zum Aktivieren/Deaktivieren des Open Mode mit visueller Warnung bei aktivem Status
- AG-Leadership Assignment: Vollständige AG-Leitungs-Zuordnung mit durchsuchbaren Benutzer-Dropdowns und (initials) NACHNAME, VORNAME Format

#### Bugfixes

- AG-Typ Optionen Konsistenz: AG-Typ Auswahloptionen in edit.blade.php auf create.blade.php Optionen angepasst für einheitliche Benutzerführung
- AG-Typ Optionen vereinheitlicht: Optionen jetzt identisch zwischen Create und Edit Views - Lernangebot, Arbeitsgemeinschaft, Bläserklasse, Ehrenamtliches Engagement
- AG-Typ Placeholder Text: 'Bitte wählen...' zu 'Bitte auswählen' geändert für Konsistenz zwischen allen AG-Views
- AG-Teilnehmer Permission-Konflikt: Route-Middleware 'can:ags_member' entfernt und durch Controller-Permission-Checks ersetzt - AG-Leiter haben jetzt korrekten Zugriff auf ihre AG-Teilnehmerlisten
- IP-Status Middleware: Abgelehnte IPs (status: rejected) werden jetzt korrekt blockiert mit spezifischer Fehlermeldung
- Open Mode Logging: Comprehensive Logging für alle automatisch hinzugefügten IPs mit strukturierten Metadaten und Fehlerbehandlung
- Zwischennoten Overview: 'Undefined array key FS' Fehler behoben - sichere Zugriffe auf FL-Grade Felder mit isset() Prüfungen und Fallback-Werte für categoryWeights
- FL-Grades Robustheit: Sichere Datenbankfeld-Zugriffe in StudentInterimGradesController - verhindert Crashes bei nicht-existierenden Spalten
