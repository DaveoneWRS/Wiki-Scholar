---
slug: v1-1-8
title: "v1.1.8 – API-Token-Verwaltung & Signs-API"
date: 2026-04-01T23:00:00
authors: [david]
tags: [planora]
---

Version 1.1.8 führt die API-Token-Verwaltung und eine vollständige REST-API für Schilder ein.

<!-- truncate -->

## Neu

- **API-Token-Verwaltung** – Neue Sektion unter `/settings` zum Generieren, Anzeigen und Widerrufen von API-Tokens (Livewire-Komponente `ApiTokenSettings`).
- **Signs-API (v1)** – Vollständige CRUD-API unter `/api/v1/signs` inkl. Aktivierungs-/Deaktivierungsendpunkte (`POST /api/v1/signs/{id}/activate` und `deactivate`). Der Zugriff ist per API-Token geschützt.

## Fixes

- **Hardcodierte Asset-URLs** – Asset-Pfade im Frontend wurden durch `@vite`-Direktiven ersetzt, sodass sie in allen Umgebungen korrekt aufgelöst werden.
