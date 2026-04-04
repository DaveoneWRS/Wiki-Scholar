---
slug: "2026-01-30"
title: "v0.0.93 (-003, -002, -001, -000, -004, -003, -002)"
authors: [david]
tags: [scholar]
---

<!-- truncate -->

### 0.0.93-003

#### Bugfixes

- Error-Mail-Endlosschleife bei autoSyncPermissions verhindert — catch-Block loggt nicht mehr, um Kaskade bei Log-Permission-Denied zu vermeiden
- Auto-Sync wird in Console/Artisan übersprungen (Migration reicht dort)

### 0.0.93-002

#### Neu

- Auto-Sync: Permissions und Rollen aus config/roles_permissions.php werden automatisch in die DB synchronisiert (hash-basierter Cache im AppServiceProvider)

#### Bugfixes

- Permissions-Sync: 500-Fehler bei 'Berechtigungen bereinigen' und 'remove-all-permissions' behoben — fehlende Permissions (Locker etc.) wurden nicht in DB synchronisiert

### 0.0.93-001

#### Bugfixes

- Error-Benachrichtigung: Mail::queue() durch Mail::send() ersetzt, damit Server-Error-Notifications auch ohne Queue-Worker versendet werden

### 0.0.93-000

#### Neu

- IServ-Service: Neuer IServService für Passwort-Reset über IServ Web-Oberfläche
- Artisan-Befehle: iserv:reset-password und office365:reset-password als CLI-Kommandos
- Self-Service: Automatische IServ Passwort-Reset-Verarbeitung in SelfServiceEventController
- Kiosk: Erweiterte Nachrichtentypen (rot, gelb, grün, geheim) mit Benutzername und verschlüsseltem Passwort
- Kiosk: Geheime Nachrichten mit Passwort-Anzeige und Auto-Löschung nach Lesen
- Case Management: Erweiterte Kiosk-Verwaltung mit Farbnachrichten und Geheim-Nachrichten
- API: LearningMaterialsApiController für Lernmittel-Datenabfrage
- Todoist: Kiosk-Projekt-Integration (TODOIST_KIOSK_PROJECT)

### 0.0.92-004

#### Neu

- Schülerdetails: WLAN Passwort-Reset-Button auf der Schüler-Show-Seite im WLAN-Bereich
- Schülerdetails: Anzeige des WLAN-Benutzernamens (aus O365-Mail abgeleitet)
- Schülerdetails: Kiosk-Checkbox beim WLAN-Passwort-Reset zum Senden einer geheimen Kiosk-Nachricht

### 0.0.92-003

### 0.0.92-002

#### Neu

- Schülerdetails: IServ Passwort-Reset-Button auf der Schüler-Show-Seite für Admins
- Schülerdetails: Kiosk-Checkbox bei O365- und IServ-Passwort-Reset zum Senden einer geheimen Kiosk-Nachricht
