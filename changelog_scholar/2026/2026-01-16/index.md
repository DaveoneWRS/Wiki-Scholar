---
slug: "2026-01-16"
title: "v0.0.90 (-000, -016, -015, -014, -013, -012)"
authors: [david]
tags: [scholar]
---

<!-- truncate -->

### 0.0.90-000

#### Neu

- Graceful Update System: Neues Update-System mit Benutzer-Warnungen vor System-Updates
- Graceful Update System: Rotes Vollbild-Modal mit Countdown-Timer bei geplantem Update
- Graceful Update System: Benutzer können Update-Warnung bestätigen ('Gelesen - Ich habe meine Arbeit gespeichert')
- Graceful Update System: Automatische Formular-Speicherung in localStorage vor Update
- Graceful Update System: Formular-Wiederherstellung nach Update mit Toast-Benachrichtigung
- Graceful Update System: JavaScript-basiertes Polling alle 10 Sekunden - Warnung erscheint ohne Seiten-Reload
- Graceful Update System: Admin-Interface unter Admin-Tools → System-Update Tab
- Graceful Update System: CLI-Befehl 'php artisan app:graceful-update' mit Live-Countdown im Terminal
- Graceful Update System: Bestätigungs-Tracking zeigt welche Benutzer bestätigt haben
- Graceful Update System: Update-Historie mit Status, Version und Exit-Code

### 0.0.87-016

#### Neu

- PDF-Export Klassenübersicht: 4 fehlende Fächer ergänzt (PW, Re, Sn, SpT) - Web und PDF zeigen jetzt identische 19 Fächer
- Neues Artisan-Kommando grades:fix-mismatched-certifications zur Korrektur von falschen Schuljahr-Zuordnungen in Zeugniseinträgen

### 0.0.87-015

#### Neu

- Admin-Tools: Komplette Neustrukturierung mit linkem Seitenmenü und Tab-Navigation
- Admin-Tools: Neues Menü mit Bereichen: Home, Sicherheit, System, Systemabgleich, Tools, Support
- Admin-Tools: Einstellungen-Bereich mit Schuljahr, Module, Hilfe-Links
- Admin-Tools: Daten-Bereich mit Export und Import Funktionen
- Admin-Tools: URL-Parameter Navigation (?menu=system&tab=wifi) für direkte Verlinkung
- Admin-Tools: Home zeigt SelfService und Scanner als Quick-Access Kacheln
- Admin-Tools: System-Bereich mit Tabs für IP-Freigaben, Benutzerverwaltung, SSL-Zertifikate, WiFi, Geräte, Lagerplätze, Barcodes
- Admin-Tools: Sicherheit-Bereich mit Tabs für Übersicht und Sicherheits-Dashboard

### 0.0.87-014

#### Neu

- Zeugnisansicht: Notendurchschnitt wird berechnet und farbig angezeigt (grün ≤2.5, gelb ≤3.5, rot &gt;3.5)
- Zeugnisansicht: Klassen-Phrasen werden mit blauem Rahmen und '🏫 Klassen-Phrase' Badge markiert
- Zeugnisansicht: Klassen-Phrasen können nicht einzeln entfernt werden (Lock-Icon mit Link zu Klassen-Phrasen)

#### Bugfixes

- Rollen-Berechtigungen: Toggle synchronisiert jetzt korrekt mit Spatie Permission System
- Klassen-Phrasen: Nur globale Phrasen werden im Auswahl-Menü angezeigt (keine individualisierten)
- Zeugniskonferenzen: Notenabfrage filtert jetzt auch nach Klasse für korrekte Zuordnung
- PDF-Export: Schülername wird mit UTF-8 zu Windows-1252 Konvertierung korrekt dargestellt
- PDF-Export: Unentschuldigte Fehltage Position passt sich dynamisch an Stellenanzahl an
- Zeugnisansicht: Individualisierte Phrasen zeigen beim Bearbeiten den Originaltext
- Schüler-Dokumente: Nicht-Admins sehen angepasste Meldung bei fehlenden Dokumenten

### 0.0.87-013

#### Neu

- Klassenlehrer-Übersicht: Dokument-Icon zeigt an, wenn Dokumente für Schüler hochgeladen wurden (klickbar zum Dokumente-Tab)

#### Bugfixes

- Onboarding-PDF: Schulverwaltung mit Asterisk (*) für 'Nur intern erreichbar' Kennzeichnung
- Onboarding-PDF: 'Hier Passwort ändern' bei WLAN entfernt

### 0.0.87-012
