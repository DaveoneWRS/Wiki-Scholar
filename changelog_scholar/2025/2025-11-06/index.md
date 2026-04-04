---
slug: "2025-11-06"
title: "v0.0.81-017"
authors: [david]
tags: [scholar]
---

<!-- truncate -->

#### Neu

- Gerätewartung: Filter-Funktionalität für Modell, Marke und Gerätetyp auf /maintenance/devices Seite

#### Bugfixes

- AG-Bearbeitung: Nested Forms Problem behoben 
- SyncParentToElternportal Job: Leere Parent-ID Fehler behoben - Validation im Constructor und graceful Handling für gelöschte Parents
- Update-System: Sudo-Passwort-Abfrage behoben - prüft nun ob sudo ohne Passwort verfügbar ist, überspringt Permissions falls nicht
