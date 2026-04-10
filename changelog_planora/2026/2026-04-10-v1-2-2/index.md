---
slug: v1-2-2
title: "v1.2.2 – TimeEntry API & Asset-Tracking"
date: 2026-04-10T10:47:00
authors: [david]
tags: [planora]
---

Version 1.2.2 verbessert die TimeEntry API und stellt sicher, dass vorgebaute Assets im Repository versioniert werden.

<!-- truncate -->

## Fixes

- **TimeEntry API – Validierung** – Eingaben für `index()`-Filter werden geprüft; `project_id` wird auf Eigentümerschaft validiert.
- **Datumsformate** – `date_format:Y-m-d` und `after:start_time`-Constraints in `store`/`update` erzwungen; `date`-Cast auf `date:Y-m-d` für konsistente API-Ausgabe korrigiert.

## Sonstiges

- `public/build` wird nicht mehr aus dem Repository ausgeschlossen – vorgebaute Assets werden jetzt versioniert.
