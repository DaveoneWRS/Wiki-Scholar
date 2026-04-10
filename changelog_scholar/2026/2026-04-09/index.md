---
slug: "2026-04-09"
title: "v2026.04.09 – Klassenliste, Datenverifizierung & Update-System"
authors: [david]
tags: [scholar]
---

<!-- truncate -->

#### Neu

- **Klassenliste als PDF** – Neue Druckansicht (`/druckansicht`) mit konfigurierbaren Spalten (Klasse, Geburtsdatum, Adresse, Telefon der Erziehungsberechtigten), HTML-Vorschau und PDF-Download; doppelte Festnetznummern werden automatisch dedupliziert
- **Eltern-Datenverifizierung** – Neuer Verifizierungsprozess für Elterndaten mit Ansichten für ausstehende und geänderte Datensätze
- **Footer-Links konfigurierbar** – Datenschutz-, Hilfe- und Nutzungsbedingungen-Link können im Admin-Menü ein-/ausgeblendet und mit eigenem Text versehen werden
- **Lizenzschlüssel maskiert** – Schlüssel wird nur teilweise angezeigt; neuer „Jetzt prüfen"-Button für manuellen Update-Check
- **Stündlicher Auto-Update-Check** – Oranges Banner auf `/adminTools` bei verfügbarem Update; gecachte Prüfung verhindert wiederholte HTTP-Requests pro Seitenaufruf
- **Update als Hintergrundprozess** – Update-Prozess startet per `nohup` im Hintergrund; kein 504 Gateway Timeout mehr
- **Schuljahreswechsel-Reset** – Lernmittel-Felder aller aktiven Schüler per Knopfdruck zurücksetzen; synchronisiert das Elternportal automatisch via API
- **Workbook-Jahresfilter** – Standardmäßig nur Bestellungen des aktuellen Jahres; Checkbox „Alte Bestellungen anzeigen" mit Session-Persistenz
- **Security-Alert-Empfänger per `.env`** – `SECURITY_ALERT_RECIPIENTS` ersetzt hartcodierte Admin-E-Mail-Adressen

#### Bugfixes

- PHP-FPM als PHP-Binary beim Update behoben – CLI-Binary wird nun korrekt erkannt (FPM kann keine Skripte ausführen)
- `livewire:publish` aus Update-Kommandos entfernt (existiert in Livewire 3 nicht; Assets sind vorgebaut im ZIP enthalten)
- Bootstrap-Cache wird vor Update geleert – verhindert PDO-Deprecation-Fehler auf PHP 8.5
- `FetchAndStoreParentModels`: API-Pfad auf `/api/get-users` korrigiert
- Fehlende View für Reihen-Detailseite erstellt (behebt 500-Fehler in Produktion)
- Update-Overlay mit Auto-Reload nach Maintenance Mode
- Auto-Cleanup steckengebliebener Updates nach 30 Minuten
