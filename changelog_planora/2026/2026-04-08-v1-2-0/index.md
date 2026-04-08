---
slug: v1-2-0
title: "v1.2.0 – View-Mode & Pre-built Assets"
date: 2026-04-08T12:00:00
authors: [david]
tags: [planora]
---

Version 1.2.0 bringt einen persistenten View-Mode-Toggle und vereinfacht die Serverinstallation durch vorgebaute Assets.

<!-- truncate -->

## Neu

- **View-Mode-Toggle** (beruflich/privat/alles) – bleibt über Seitenwechsel und Page-Refreshes erhalten via Session-Storage.
- **Pre-built Frontend-Assets** – CSS/JS wird direkt im Repository mitgeliefert, kein Node.js mehr auf Kundenservern nötig.
- **Composer install im Update-Prozess** – PHP-Abhängigkeiten werden beim Update automatisch aktualisiert.

## Fixes

- **Dark Mode Task-Edit-Dialog** – Input-Felder im Dashboard werden im Dark Mode korrekt gestylt.