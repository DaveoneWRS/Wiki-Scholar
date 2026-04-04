---
slug: "2026-03-29"
title: "v2026.03.29-001"
authors: [david]
tags: [scholar]
---

<!-- truncate -->

#### Neu

- Lizenz & Update-Server: Neuer Admin-Bereich unter /admin/license zur Verwaltung des Scholar-Lizenzschlüssels und der Update-Server-URL (Standard: crm.scholar.schule)
- Lizenz & Update-Server: Verbindungstest prüft Lizenzstatus live (Edition, Ablaufdatum, Update-Gruppe, Max. Schüler) und zeigt verfügbare Versionen
- Telemetrie: Schüler-/Lehrerzahl, installierte Version und PHP-Version werden täglich automatisch an den Update-Server gesendet (06:00 Uhr, Artisan-Befehl license:send-telemetry)
- Telemetrie: Manuelle Übertragung über den Admin-Bereich möglich – Rückmeldung enthält neueste Version der zugewiesenen Update-Gruppe sowie Warnungen bei Überschreitung des Lizenzlimits
- Update-Check: Wenn ein Lizenzschlüssel hinterlegt ist, werden Updates über das CRM (crm.scholar.schule/api/v1/latest) abgefragt statt über entwurf.io
