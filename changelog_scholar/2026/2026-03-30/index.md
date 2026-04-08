---
slug: "2026-03-30"
title: "v2026.03.30 – Web-Installationsassistent"
authors: [david]
tags: [scholar]
---

<!-- truncate -->

#### Neu

- Web-Installationsassistent (`public/install.php`) – Selbstständiger 7-Schritt-Wizard für Neuinstallationen ohne CLI-Kenntnisse: Systemprüfung, Datenbankverbindung mit Live-Test, App-Konfiguration, Admin-Benutzer anlegen, Live-Installation via Server-Sent Events und Ein-Klick-Installer-Löschung
- Lizenz-Menüeintrag in der AdminTools-Sidebar mit Livewire-Komponente `admin.license-settings`
- Telemetrie-Fehlermeldungen: HTTP-Statuscodes werden in lesbare deutsche Meldungen übersetzt (401, 403, 404, 422, 429, 5xx)

#### Bugfixes

- PHP CLI Binary wird korrekt ermittelt statt PHP_BINARY (zeigt unter php-fpm auf den FPM-Prozess)
- `storage/framework`-Verzeichnisse werden vor `composer install` angelegt (verhindert "Please provide a valid cache path")
- Composer Deprecation Notices (PHP 8.4+) aus Installer-Ausgabe gefiltert
- Konsolidierte Migration: fehlende Spalten `type` und `description` zur `configs`-Tabelle hinzugefügt
- Schema-Mismatches in konsolidierter Migration und Seeder behoben (school_year_settings, device_types, lib_configuration, modules)
- Seeder auf `insertOrIgnore` umgestellt für Idempotenz (kein Duplicate-Key-Fehler bei wiederholtem db:seed)
- Seeder `lib_*`-Tabellen auf korrekte deutsche Spaltennamen korrigiert (lib_media_types, lib_languages, lib_people_roles, lib_classifications, lib_interest_groups)
- `APP_BASE` statt `__DIR__` im Migrations-Script (temporäres Script liegt in storage/app/)
- Migrationen einzeln ausführen und "Column/Table already exists"-Fehler überspringen
- Neuere Migrationen nach konsolidierter Migration korrekt einspielen
- Livewire-Assets im Installer publizieren und Cache korrekt aufbauen
- Admin-User `email_verified_at` bei Installation automatisch setzen
- `maintenance_mode` auf 0 setzen damit Login nach Erstinstallation sichtbar ist
- Installer-Löschen-Button und IP Open Mode nach Installation automatisch aktivieren
- `tinker --execute` ohne `<?php` Tag (Parse-Fehler beim Admin anlegen)
- Alle "ScholarV2"-Bezeichnungen im Installer durch "Scholar" ersetzt
- Standardwert Anwendungsname auf "Scholar" geändert
- Wilhelm-Raabe-Schule durch DashTec Service im Installer ersetzt
- `--force` Flag von `livewire:publish` entfernt (wird nicht unterstützt)