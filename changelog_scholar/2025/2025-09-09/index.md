---
slug: "2025-09-09"
title: "v0.0.73 (-002, -001, -000)"
authors: [david]
tags: [scholar]
---

<!-- truncate -->

### 0.0.73-002

#### Neu

- Administratoren können jetzt E-Mail-Adressen und Untis-Benutzernamen direkt im Benutzer-Profil bearbeiten
- Mitarbeiter-Onboarding enthält jetzt den WebUntis-Link und zeigt nur noch relevante Informationen für neue Kollegen
- Onboarding-Checklisten zeigen nur noch erledigte Aufgaben an - leere Listen werden automatisch ausgeblendet
- Alle Bearbeitungen sind sicher geschützt und prüfen automatisch auf doppelte Einträge
- Neue Übersicht 'Digital-Zahlungen ohne Online-Bestellungen' zeigt Schüler mit digitalen Lernmitteln die gezahlt, aber keine Online-Bestellung haben
- Modal-System zum direkten Hinzufügen von Schülern zu Online-Bestellungen mit automatischer Vorausfüllung aus dem Schülerprofil

#### Bugfixes

- WLAN-Hinweise für Schüler aus Mitarbeiter-Onboarding entfernt - nur noch relevante Informationen für neue Kollegen
- Leere Checklisten werden nicht mehr angezeigt - Onboarding-PDFs sind jetzt sauberer und übersichtlicher
- Bearbeitung von Benutzerdaten funktioniert jetzt korrekt ohne Fehlermeldungen
- Duplikate bei E-Mail-Adressen werden verhindert - System warnt vor bereits verwendeten Adressen
- Alle Bearbeitungsfunktionen sind sicher vor unbefugten Zugriffen geschützt
- Einheitliches Verhalten bei der Bearbeitung von E-Mail und Untis-Username - gleiche Bedienung für beide Felder
- JSON Parse Error bei Modal-Submission behoben - korrekte String-Konvertierung für student_magellan_id Feld
- 422 Validierungsfehler für digital-payment Modal beseitigt - alle Controller-Validierungen entsprechen jetzt dem Frontend

### 0.0.73-001

#### Neu

- Jahrgangs-PDF-Export: Komplettes System für Massen-Export aller Zeugnisse eines Jahrgangs in einer zusammengefassten PDF-Datei - perfekt für Zeugniskonferenzen
- Originale PDF-Template-Integration: Verwendet identische Templates wie Einzelzeugnisse (/students/\{id\}/grades-certification/\{gradeId\}/print) für authentische Zeugnis-Ausgabe
- Grade Settings Export-Interface: Neue Kachel in /grade/settings mit benutzerfreundlicher Jahrgangs-Auswahl und Vorschau-Funktionen
- Automatisches Epochal- und AG-Backup: Sichert aktuelle Epochal-Einstellungen und AG-Zuordnungen vor PDF-Generierung wie bei Einzelzeugnissen
- Intelligente PDF-Zusammenführung: Saubere Kombination aller Zeugnis-PDFs ohne Header-Annotationen für professionelle Ausgabe

#### Bugfixes

- AG-Backup-System: Korrekte Verwendung von eindeutigen imported_ind basierend auf Grade-ID und AG-ID für Constraint-Kompatibilität
- Dateinamen-Bereinigung: Entfernung problematischer Zeichen (/, \, :, *, ?, ", &lt;, &gt;, |) aus Schuljahr-Strings für Download-Kompatibilität
- PDF-Header entfernt: Saubere Template-Zusammenführung ohne zusätzliche Schülernamens-Annotationen oben links
- Template-Pfad-Integration: Korrekte Verwendung von storage_path('app/contracts/grade_temp_2025_2.pdf') wie im Original-System
- Epochal-Daten-Handling: Vollständige Deserialisierung und Fallback-Logik für epochalBackup Felder
- Error-Handling: Comprehensive Exception-Behandlung mit automatischem Cleanup temporärer PDF-Dateien

### 0.0.73-000

#### Neu

- Erweiterte Benutzersuchfunktionen: Umfassende Filter- und Suchoptionen für die Benutzerverwaltung (/secretary/usersmalist) - Status, Fächer, Altersgruppen, interne Notizen
- Interne Notizen System: Neue internal_note Funktionalität für Benutzer - sichere Speicherung sensibler Informationen mit visuellen Indikatoren
- Notiz-Indikatoren: Amber-farbene Benachrichtigungssymbole in Benutzerlisten zeigen an, wenn interne Notizen vorhanden sind
- Altersbasierte Filterung: 5 Altersgruppen-Filter (unter 30, 30-40, 40-50, 50-65, über 65 Jahre) für bessere Benutzersegmentierung
- Rentennähe-Kennzeichnung: Automatische Markierung von Benutzern in Rentennähe (63-67 Jahre) und Rentenalter (67+ Jahre)
- Fachspezifische Benutzerfilterung: Filter nach unterrichteten Fächern für Lehrer und Fachkräfte
- Erweiterte Suchmöglichkeiten: Suche über Namen, E-Mail, Adresse, Stadt, Telefonnummern für präzise Benutzerfindung
- Aktive Filter-Anzeige: Visuelle Übersicht über angewendete Filter mit direkter Entfernungsmöglichkeit per Klick
- Flexible Sortieroptionen: Sortierung nach Namen, E-Mail, Alter, Erstellungsdatum mit Aufsteigend/Absteigend-Umschaltung

#### Bugfixes

- Datenbankfehler behoben: SQLSTATE[42S22] Unknown column 'internal_note' durch Migration resolved
- Migration ausgeführt: add_internal_note_to_users_table erfolgreich implementiert
- Template-Synchronisation: wire:model von selectedUser.notes auf selectedUser.internal_note korrigiert
- Speicherfunktionalität: saveUser() Methode erweitert um internal_note Feld-Handling
- Filter-Logik: Korrekte Boolean-Verarbeitung für Active/Inactive Status-Filter
- Null-Safe Operatoren: Sichere Behandlung leerer internal_note Werte in allen Abfragen
- Subject Relationship: WhereHas-Query für Subject-Filter korrekt implementiert
- Age Calculation: Präzise Altersberechnung mit DATEDIFF und 365.25 Tage-Jahr-Faktor
