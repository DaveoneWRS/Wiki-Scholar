---
slug: v1-1-11
title: "v1.1.11 – Migrations-Fix"
date: 2026-04-06T20:00:00
authors: [david]
tags: [planora]
---

Version 1.1.11 behebt einen Fehler bei der Migration der `servers`-Tabelle.

<!-- truncate -->

## Fixes

- **Migration `servers`-Tabelle** – Die Migration überspringt die Tabellenerstellung, wenn die Tabelle bereits existiert, um Fehler bei Updates zu vermeiden.
