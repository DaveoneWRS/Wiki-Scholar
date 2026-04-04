---
slug: "2026-02-06"
title: "v2026.02.06 (-001, -000)"
authors: [david]
tags: [scholar]
---

<!-- truncate -->

### 2026.02.06-001

#### Neu

- Gastschüler: PDF-Schulbescheinigungen in Deutsch, Englisch und kombiniert (DE+EN) mit Schulstempel und Logo
- Admin: Neue Schulstammdaten-Verwaltung — Schulname, Adresse, Telefon, E-Mail, Schulleiter konfigurierbar

### 2026.02.06-000

#### Bugfixes

- Layout: Undefined variable $lastImportDate in app.blade.php behoben — isset() Prüfung hinzugefügt
- Schüler: Validierung für parent_id in attachParent Methode — verhindert 'Parent ID cannot be empty' Fehler
- GeoIP: Cache-Tags deaktiviert — File-Cache-Driver unterstützt keine Tags
