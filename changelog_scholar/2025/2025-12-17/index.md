---
slug: "2025-12-17"
title: "v0.0.86 (-005, -000, -000, -000)"
authors: [david]
tags: [scholar]
---

<!-- truncate -->

### 0.0.86-005

#### Neu

- Untis Fehlzeiten-Sync: Neuer Artisan-Befehl 'sync:untis-absences' zur Synchronisation von Schüler-Fehlzeiten aus WebUntis via CSV-Import
- Untis Fehlzeiten-Sync: Unterstützt manuellen CSV-Import, automatisches Scannen eines Upload-Verzeichnisses und Archivierung verarbeiteter Dateien
- Schuljahr-Einstellungen: Neues Formular zum Erstellen von Schuljahr-Einstellungen
- Schuljahr-Einstellungen: Neue Methode getNextSchoolYear() zur Abfrage des nächsten verfügbaren (nicht aktiven, nicht gesperrten) Schuljahres

#### Bugfixes

- Update-Befehl: Keine Passwort-Abfrage mehr bei sudo - Verfügbarkeit wird jetzt vorab geprüft

### 0.0.86-000

#### Neu

- Hilfe-Links: Auswahl zwischen Info-Icon (blau) und Achtung-Symbol (rot) beim Erstellen/Bearbeiten
- Hilfe-Links: Neue Links blinken automatisch 7 Tage lang mit sanfter Puls-Animation
- Hilfe-Links: Manuelles Aktivieren/Deaktivieren des Blinkens auf der Bearbeitungsseite
- Hilfe-Links Index: Direktes Umschalten von Icon-Typ und Blink-Status per Klick in der Übersicht

#### Bugfixes

- Hilfe-Links Bearbeiten: Formular konnte nicht gespeichert werden wegen verschachtelter HTML-Formulare - Hervorhebungs-Steuerung jetzt außerhalb des Hauptformulars

### 0.0.85-000

#### Neu

- Lernmittel Changelog: Filter-Buttons für Event-Typen (Alle, Neu angelegt, Bearbeitet, Gelöscht) mit Anzahl-Badges
- Lernmittel Changelog: 'Alle akzeptieren' Button zum Markieren aller gefilterten Einträge als gelesen
- Lernmittel Changelog: Buchtitel, Fach-Badge und ISBN werden jetzt prominent angezeigt für besseren Kontext
- Lernmittel Index: Button 'Neue Lernmittel' mit Badge-Anzeige wenn ungelesene neue Bücher vorhanden sind
- Lernmittel Erstellen: Verlag-Feld mit Autocomplete aus lib_publishers Tabelle

#### Bugfixes

- Lernmittel Erstellen: Fachleiter (FL-*) können jetzt Bücher speichern wenn fkl_lm_edit aktiviert ist

### 0.0.84-000

#### Neu

- Mobile Navigation: Vollständiges Navigationsmenü für mobile Geräte - alle Desktop-Menüpunkte sind jetzt auch mobil verfügbar
- Mobile Navigation: Neue Menübereiche hinzugefügt: Notensystem, ILE, Meine Klasse, FKL-Verwaltung, Klassenverwaltung, Reservierungen, Stundenplan, Bibliothekssystem, Sekretariat, Admin Tools
- Lernmittel Changelog: Neuer Button für Administratoren zum Löschen aller Einträge älter als 6 Monate

#### Bugfixes

- Schulküche Inspektion: 'Prüfung speichern' Button funktioniert jetzt korrekt - verschachtelte HTML-Formulare für Foto-Löschen durch JavaScript-Lösung ersetzt
