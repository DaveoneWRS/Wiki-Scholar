---
slug: "2026-02-10"
title: "v2026.02.10 (-001, -000)"
authors: [david]
tags: [scholar]
---

<!-- truncate -->

### 2026.02.10-001

#### Bugfixes

- Kiosk: Planora-Schilder werden jetzt in der Change Detection berücksichtigt — Hinzufügen/Entfernen von Schildern wird innerhalb von ~3 Sekunden erkannt statt erst nach 2 Minuten
- Planora: Default-URL von veralteter interner IP (10.50.30.48:8090) auf https://planora.wr-schule.de aktualisiert (config, Kiosk-Controller, DoorView-Controller)

### 2026.02.10-000

#### Neu

- Planora-Integration: Kiosk-Schilder werden aus Planora geladen und mit DB- und Todoist-Nachrichten zusammengeführt
- Planora-Integration: DoorView-Status wird primär aus Planora bezogen, Todoist dient als Fallback
- Konfiguration: Planora-URL über Umgebungsvariable PLANORA_URL konfigurierbar
