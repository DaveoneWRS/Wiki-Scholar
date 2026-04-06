---
slug: v1-1-6
title: "v1.1.6 – Door-View, Installer-Verbesserungen"
date: 2026-04-01T21:00:00
authors: [david]
tags: [planora]
---

Version 1.1.6 bringt die neue Door-View-Funktion für Türschilder, Verbesserungen am Installer sowie einen Layout-Fix für die Seitenleiste.

<!-- truncate -->

## Neu

- **Door-View** – Neue öffentliche Anzeigeseite unter `/door-view/start` (ohne Authentifizierung, iframe-einbettbar für Kiosk-Displays). Zeigt aktive Schilder inkl. konfigurierbarem Fallback-Screen.
- **Door-View-Einstellungen** – Neue Konfigurationssektion auf der `/signs`-Seite zur Verwaltung der Door-View-Optionen (Livewire-Komponente `DoorViewSettings`).
- **`AllowIframe`-Middleware** – Entfernt `X-Frame-Options`-Header für eingebettete Kiosk-Verwendung.

## Verbesserungen

- **Sicherheitshinweis in `install.php`** – Nach der Installation wird ein deutlicher Hinweis angezeigt, die Datei zu löschen.
- **Installer: npm-Build** – Der Installer führt jetzt automatisch einen npm-Build durch (`node_modules/.bin/vite`).

## Fixes

- **Sidebar-Layout** – Der Inhaltsbereich passt sich beim Einklappen der Seitenleiste nun korrekt an (Alpine.js-Event-Dispatch).
