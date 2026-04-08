---
slug: "2026-04-06"
title: "v2026.04.06 – Wiki-Migration & Dev-Setup"
authors: [david]
tags: [scholar]
---

<!-- truncate -->

#### Neu

- Footer: Wiki-Link zeigt auf wiki.scholar.schule, Störungen-Link zeigt auf Blog
- Changelog-Versionsnummer verlinkt direkt auf wiki.scholar.schule/changelogscholar
- `docker-compose.yml` für lokale MariaDB-Entwicklungsumgebung hinzugefügt
- Help-Link-Icon 2px höher gesetzt

#### Entfernt

- Internes Changelog-System entfernt (ChangelogManager-Command, ChangelogController, Routen und `public/docs/admin/`) – Dokumentation ist jetzt extern auf wiki.scholar.schule
- Admin-Link aus Footer entfernt