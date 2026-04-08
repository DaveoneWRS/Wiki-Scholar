---
slug: "2026-04-08"
title: "v2026.04.08 – Pre-built Assets & SSL-Fix"
authors: [david]
tags: [scholar]
---

<!-- truncate -->

#### Neu

- Update-Command überspringt `npm install`/`npm build` wenn vorgebaute Assets im ZIP enthalten sind (Fallback auf npm für ältere ZIPs) – kein Node.js mehr auf Kundenservern nötig

#### Bugfixes

- SSL-Verifizierung im LicenseService für lokale Dev-Umgebung deaktiviert