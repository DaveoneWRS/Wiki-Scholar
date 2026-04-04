---
slug: "2026-03-09"
title: "v2026.03.09-001"
authors: [david]
tags: [scholar]
---

<!-- truncate -->

#### Bugfixes

- Schulanmeldungen /student_registrations/\{id\}/edit: Einwilligungs-Checkboxen speichern und laden wieder korrekt mit den String-Werten 'einverstanden' / 'nicht einverstanden' statt als boolesche Werte
- Schulanmeldungen /student_registrations/\{id\}/edit: Validierung fuer 'first_choice_profile' akzeptiert das Feld wieder als String und verlangt es nur noch bei gewuenschter Profilklasse
- Schulanmeldungen /student_registrations/\{id\}/edit + PDF: Bezeichnung fuer 'parent1_sole_custody' auf 'Allein erziehungsberechtigt' korrigiert, PDF-Label 'EP::' auf 'EP:' bereinigt
- Schulanmeldungen /student_registrations/\{id\}/edit: Bereich 'Einwilligungen' mit erklaerenden Beschreibungen fuer unklare Punkte wie Austauschprogramme, Nutzungsrechte und Pressefreigaben erweitert
- Geraetewartung /maintenance/devices: Schnelles mehrfaches Scannen loest keine konkurrierenden Mehrfach-Submits mit Browser-Umleitungsfehler mehr aus
