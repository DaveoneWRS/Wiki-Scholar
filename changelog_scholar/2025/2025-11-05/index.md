---
slug: "2025-11-05"
title: "v0.0.81 (-016, -015, -014, -013, -012, -011)"
authors: [david]
tags: [scholar]
---

<!-- truncate -->

### 0.0.81-016

#### Neu

- Active School Year Caching: 5-Minuten Cache für getActiveSchoolYear() reduziert DB-Queries erheblich
- Performance Index: subject-Spalte in grade_weightings für schnellere Abfragen indiziert

#### Bugfixes

- Informatik Migration: BINARY Comparison für case-sensitive WHERE-Clause hinzugefügt

### 0.0.81-015

### 0.0.81-014

### 0.0.81-013

#### Bugfixes

- AG-Verwaltung: Suchfilter bleiben nach AG-Löschen, Erstellen oder Bearbeiten erhalten
- AgController: store(), update() und destroy() nutzen jetzt gespeicherte Filter-URL aus Session

### 0.0.81-012

#### Bugfixes

- Zwischennoten: Informatik-Fach wird jetzt korrekt angezeigt - Case-Sensitivity Bug im FL-Format Mapping behoben ('FL-if' → 'FL-If')
- grade_weightings: 2 Einträge mit falschem Subject-Format korrigiert (Migration)

### 0.0.81-011

#### Neu

- Config: Neue config/radius.php für zentrale RADIUS-Konfiguration
- Config: Admin-Benachrichtigungen in config/monitoring.php integriert
- Git Hook: Pre-Commit Hook verhindert env() Aufrufe außerhalb von Config-Files

#### Bugfixes

- RADIUS Service: Kritischer Config-Cache Fehler behoben - env() durch config() ersetzt
- WLAN-Aktivierung: Service funktioniert jetzt korrekt nach config:cache
- AdminNotificationService: env() durch config() ersetzt für Config-Cache Kompatibilität
