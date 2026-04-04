---
slug: "2026-03-16"
title: "v2026.03.16 (-002, -001)"
authors: [david]
tags: [scholar]
---

<!-- truncate -->

### 2026.03.16-002

#### Bugfixes

- Lernmittel /learning-materials: Klassen ohne Bücher werden nicht mehr angezeigt – leere Klassenstufen-Gruppen werden jetzt immer herausgefiltert, nicht nur beim aktiven Klassenstufen-Filter
- Lernmittel /learning-materials: Jahrgänge 1–4 in allen Validierungen, Filter-Dropdowns, Create/Edit-Formularen und der fklview ergänzt – Bücher für Klassen 1–4 konnten bisher nicht korrekt angelegt oder bearbeitet werden
- Lernmittel /learning-materials: Löschen-Button entfernt nur den aktuellen Jahrgang aus dem Buch – ist ein Buch mehreren Jahrgängen zugeordnet, wird nur der angeklickte Jahrgang aus grade_levels entfernt; Soft Delete erfolgt nur noch wenn keine weiteren Jahrgänge vorhanden sind
- AdminTools Seitentitel von 'ADMIN' zu 'Administration' umbenannt

### 2026.03.16-001

#### Bugfixes

- Lernmittel bearbeiten: Berechtigungspruefung verwendet wieder die korrekten Permission-Keys lm_edit/lm_admin
