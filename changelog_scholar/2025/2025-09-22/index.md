---
slug: "2025-09-22"
title: "v0.0.76-003"
authors: [david]
tags: [scholar]
---

<!-- truncate -->

#### Neu

- Grafana Statistics API: Neue API-Endpunkt für Monitoring ohne Authentifizierung mit IP-Beschränkung
- Fach-Management Switches: Toggle-Switches in Listen- und Kachelansicht für intuitive Fach-Sperrung/Freigabe
- Doppeltes Scannen: Sicherheitsfunktion für Fach-Freigabe per Barcode-Scanner mit 10-Sekunden-Zeitfenster
- Auto-Submit Barcode: Automatische Formularübertragung nach vollständigem Barcode-Scan (≥8 Zeichen)

#### Bugfixes

- Maintenance Statistics: Korrektur der wartungsfälligen Geräte-Zählung von Status-basiert zu Datum-basiert
- Controller Import: Fehlerbehebung für missing Controller base class in GrafanaStatisticsController
- SelfServiceEvent Model: Anpassung von nicht-existierendem SelfServiceOrder zu korrektem SelfServiceEvent
