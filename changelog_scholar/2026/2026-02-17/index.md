---
slug: "2026-02-17"
title: "v2026.02.17 (-002, -001, -000)"
authors: [david]
tags: [scholar]
---

<!-- truncate -->

### 2026.02.17-002

#### Neu

- Docker: Supervisor-basierter Queue-Worker startet automatisch mit dem Container (default + covers Queue)

#### Bugfixes

- Password Reset: Queue-Worker eingerichtet — O365/IServ/WLAN-Passwort-Resets liefen in Zeitüberschreitung weil kein Worker lief

### 2026.02.17-001

#### Neu

- iServ Löschanalyse: Manuelle Zuordnung von nicht erkannten Personen zu Schülern oder Benutzern
- iServ Löschanalyse: Live-Suche (AJAX) zum Finden von Schülern und Benutzern im Zuordnungs-Modal
- iServ Löschanalyse: Nach Zuordnung wird student_iserv_mail (Schüler) oder iserv_mail (Benutzer) automatisch gesetzt
- iServ Löschanalyse: Neue Datenbankspalte iserv_mail in der users-Tabelle für separate iServ-E-Mail bei Benutzern
- Microsoft 365 Benutzer-Validierung: Manuelle Zuordnung von Benutzern ohne oder mit falscher O365-E-Mail
- Microsoft 365 Benutzer-Validierung: Korrigieren-Funktion für ungültige Office 365 E-Mail-Adressen

#### Bugfixes

- iServ Löschanalyse: Tab-Wechsel-Bug behoben (zwei getrennte Alpine.js x-data-Scopes wurden zusammengeführt)
- iServ Löschanalyse: Statistikkarten und Tab-Zähler aktualisieren sich reaktiv nach manuellen Zuordnungen

### 2026.02.17-000
