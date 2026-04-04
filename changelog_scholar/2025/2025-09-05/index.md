---
slug: "2025-09-05"
title: "v0.0.71 (-000, -001)"
authors: [david]
tags: [scholar]
---

<!-- truncate -->

### 0.0.71-000

#### Neu

- Neue Freigabe 'Darf das Schulgelände verlassen': Administratoren können jetzt für jeden Schüler festlegen, ob er das Schulgelände verlassen darf - sichtbar im Freigaben-Bereich der Schülerakte
- Erweiterte Event-Dokumentation: Neue Datums- und Zeitfelder für Events - genauere Terminverfolgung bei Nachteilsausgleichen und besonderen Ereignissen
- Epochale Einstellungen System: Vollständige Epochal-Verwaltung über /grades/epochal mit klassenweiser Fach-Semester-Zuordnung - ermöglicht * und ** Markierungen in Zeugniskonferenzen und PDF
- Epochale Markierungen PDF: Automatische Epochal-Sterne (* für 1. Semester, ** für 2. Semester) in PDF-Zeugnissen mit konfigurierbaren X/Y-Koordinaten pro Fach
- AG-Backup System: Automatisches Backup der aktuellen AG-Zuordnungen beim Aufrufen der Zeugniskonferenzen - synchronisiert aktuelle AGs mit Zeugnis-Dokumentation
- AG Zeugnis-Sichtbarkeit: Certificate_visible Toggle für AGs - nur AGs mit aktivierter Zeugnis-Sichtbarkeit werden automatisch in Zeugnisse übernommen
- Druckdatum Abweichungs-Warnung: Intelligentes Warnsystem zeigt Abweichungen zwischen individuellem und Standard-Druckdatum mit Reset-Button-Funktionalität
- Automatische Druckdatum-Befüllung: Leere printDatum-Felder werden automatisch mit Standard-Datum aus school_year_settings befüllt
- AG-Klassenliste umstrukturiert: /ags/my-class-ags zeigt jetzt Schüler mit ihren AG-Zuordnungen statt AGs mit Teilnehmern - deutlich übersichtlichere Darstellung für Klassenleitungen
- AG-Klassenliste Druckansicht: Neue druckoptimierte Ansicht mit Statistiken, Zusammenfassung und PDF-freundlichem Layout für Klassenleitungen
- Gewichtungssystem Prozent-UI: Vollständige Umstellung der Gewichtungs-Benutzeroberfläche von Dezimalwerten auf Prozente - Eingabe erfolgt jetzt intuitiv in % (100% = Faktor 1.0)
- Fachspezifische Kategorie-Aktivierung: Neue Funktion zur automatischen Aktivierung von Notenkategorien in ausgewählten Fächern - Kategorien können gezielt für bestimmte Fächer konfiguriert werden
- Gewichtungs-Validierung erweitert: Erweiterte Validierung für Prozent-Eingaben (0-1000%) mit automatischer Dezimal-Konvertierung für Backend-Verarbeitung
- 24h Notenlöschung: Lehrer können ihre eigenen Zwischennoten innerhalb von 24 Stunden nach Erstellung löschen - X-Button erscheint bei Hover über selbst erstellte Noten in /interim-grades/overview
- Case Management System (Phase 1): Datenbank-Grundstruktur für Touch-Terminal Case Management - Templates, Cases, Submissions und Felder-System implementiert

#### Bugfixes

- 24h-Notenlöschung basiert jetzt auf Email-Adresse statt Benutzername - verhindert dass Benutzer mit gleichem Namen fremde Noten löschen können
- Berechtigungsfehler behoben: 'Zur Freischaltung' Button im Dashboard wird nur noch angezeigt, wenn Benutzer entsprechende Rechte haben
- Drucken-Button Berechtigung: 'Drucken' Button in Schülerakten nur noch für berechtigte Benutzer sichtbar - keine 403-Fehler mehr
- Nachteilsausgleich-Berechtigung korrigiert: 'Nachteilsausgleich hinzufügen' Button nur noch für Benutzer mit student_comment_add Berechtigung sichtbar
- AG-Backup Spaltenname: 'ag_id' zu 'ags_id' korrigiert in StudentGradesCertificationAg Updates - behebt 'Unknown column ag_id' Datenbankfehler
- PDF Geburtsdatum Doppelpunkt: 'geboren am: ' Text mit Doppelpunkt in PDF-Ausgabe hinzugefügt für korrekte Formatierung
- PDF Koordinaten Alignment: Versäumte Unterrichtstage auf gleiche X-Koordinate wie andere linksbündige Elemente (X=15) ausgerichtet
- SQL Ambiguous Column Fix: school_class_user.id-Konflikt in WiFi-Students-Overview behoben durch Präfixierung mit 'school_classes.id'
- SQL Pivot Query Fix: school_year_id-Ambiguität in AG-Relations behoben durch 'student_ag.school_year_id' Präfix - löst SQLSTATE[23000] Fehler
- Zeugniskonferenzen Schülerliste: Format 'NACHNAME, VORNAME' implementiert für bessere Lesbarkeit der Schülerliste
- AV/SV Layout: Arbeits-/Sozialverhalten-Noten werden jetzt nebeneinander (AV | SV) statt untereinander angezeigt für kompaktere Darstellung
- Gewichtungsbeispiel Klarstellung: Berechnungsbeispiel in Zwischennoten-Übersicht zeigt jetzt 'Faktor 2,5 (250%)' statt nur '250%' - macht deutlich, dass mit Dezimalwerten multipliziert wird
- 24h Notenlöschung Live-Update: Nach Löschen einer Note werden Fachdurchschnitt, Gesamtdurchschnitt und Notenzähler automatisch ohne Seitenneuladung aktualisiert
- Schönes Löschbestätigungs-Modal: Ersetzt das Standard-Bestätigungsdialog durch ein elegantes Modal mit Warnsymbol, Noteninformationen und styled Buttons

### 0.0.70-001

#### Bugfixes

- Update Command Duplicate Entry Fehler: RolePermissionSeeder behoben - verwendet jetzt updateOrCreate() statt truncate() + create() um Unique-Constraint-Verletzungen zu vermeiden
- RolePermissionSeeder Robustheit: Fehlerbehandlung für bestehende ok verbessert - Update-Prozess wird nicht mehr durch doppelte Einträge unterbrochen
- Bibliothek Scanner Null-Pointer Fehler: Fehler beim Zugriff auf loan-&gt;copy-&gt;exemplarnummer behoben - verwendet jetzt null-safe Operatoren (?-&gt;) um Crashes bei fehlenden Copy-Beziehungen zu verhindern
