---
slug: "2025-11-02"
title: "v0.0.81 (-004, -003, -002, -001, -000, -003)"
authors: [david]
tags: [scholar]
---

<!-- truncate -->

### 0.0.81-004

#### Bugfixes

- Autoloader-Konflikt: composer dump-autoload nach Kernel.php Update behoben
- Cache-Clear nach kritischen Änderungen am Scheduler durchgeführt

### 0.0.81-003

#### Bugfixes

- Console Kernel: everyFiveHours() durch cron('0 */5 * * *') ersetzt (nicht existierende Methode)
- UpdateApplication: Health Check verwendet nun direkte Route-Zählung statt route:list Command

### 0.0.81-002

#### Neu

- SSL-Zertifikat Überwachung: Verwaltung von überwachten URLs über Admin-Interface
- Grafana API Integration: SSL-Zertifikat Statistiken unter /api/grafana/statistics
- Automatische SSL-Prüfung: Zertifikate werden stündlich geprüft und gecacht
- Konfigurierbare Warnschwellen: Warning und Critical Days pro URL individuell einstellbar

#### Bugfixes

- MonitoredUrlController: Checkbox-Handling für active-Status korrigiert

### 0.0.81-001

#### Neu


#### Bugfixes

- Update-System: Permission-Denied Fehler beim Kopieren (z.B. GRAFANA_SETUP.md) brechen Update nicht mehr ab
- Update-System: recursiveCopy() wirft nur noch bei kritischen Dateien einen Fehler

### 0.0.81-000

#### Neu

- Update-System: Automatisches Status-Tracking in .update_status.json für besseres Debugging
- Update-System: Health Check nach Update prüft DB, Dateien, Config, Routes und Storage
- Update-System: Email-Benachrichtigungen an MAINTENANCE_MAIL bei Erfolg/Fehler
- Update-System: Interaktives Rollback-Prompt bei fehlgeschlagenen Updates
- Update-System: PHP-basiertes Clean Build ersetzt fehleranfälliges Bash-Skript

#### Bugfixes

- Update-System: Maintenance Mode bleibt nicht mehr aktiv bei fehlgeschlagenen Updates
- Update-System: Lock-File wird nicht mehr vergessen zu entfernen
- Update-System: Cache muss nicht mehr manuell geleert werden nach Updates
- Update-System: clean_build.sh bricht Update nicht mehr durch exit 1 ab
- Update-System: CollisionServiceProvider Fehler werden jetzt korrekt behandelt
- Update-System: Permission-Fehler beim Kopieren einzelner Dateien brechen Update nicht mehr ab

### 0.0.80-003

#### Neu


#### Bugfixes

- Schullaufbahn: TypeError bei getSchoolCareerQuery() behoben (HasMany Return-Type entfernt)
- Schullaufbahn: 404-Fehler im Edit-Modal behoben (magellan_id → id in URLs)
- Schullaufbahn: JSON-Parsing-Fehler behoben (data.data.find() statt data.find())
- Schullaufbahn: Authorization-Fehler behoben (Route-Middleware entfernt, Controller-Authorization beibehalten)
- Schullaufbahn: Permission-Check in Blade-Templates korrigiert (@can → @if mit hasRole('Admin') Fallback)
