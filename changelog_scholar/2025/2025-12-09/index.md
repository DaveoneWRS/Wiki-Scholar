---
slug: "2025-12-09"
title: "v0.0.82 (-005, -004)"
authors: [david]
tags: [scholar]
---

<!-- truncate -->

### 0.0.82-005

#### Neu

- Zwischennoten: Hover-Tooltip zeigt Ersteller und Erstellungszeitpunkt jeder Note an
- Zwischennoten: Löschfunktion für Admin, Schulleitung und Koordinatoren ohne Zeitlimit

#### Bugfixes

- Zwischennoten: Gelöschte Noten werden nun sofort aus der Ansicht entfernt ohne Seiten-Reload

### 0.0.82-004

#### Bugfixes

- Fächerzuordnung: Case-Sensitivity Bug behoben - Informatik wurde als 'if' statt 'If' gespeichert und konnte daher bei Zwischennoten nicht ausgewählt werden
- Fächerzuordnung: Alle hardcodierten Fächerlisten durch zentrale SubjectService-Quelle ersetzt (UserManagment, CreateUser, UserList)
- Fächerliste: 'Klassenleitung' aus Fächerauswahl entfernt - war kein echtes Unterrichtsfach
