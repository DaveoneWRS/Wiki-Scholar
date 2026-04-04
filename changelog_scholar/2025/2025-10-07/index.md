---
slug: "2025-10-07"
title: "v0.0.79-001"
authors: [david]
tags: [scholar]
---

<!-- truncate -->

#### Neu

- Server-Fehler-Benachrichtigung: Bei jedem 500-Fehler erhält der Administrator automatisch eine detaillierte E-Mail mit Stack Trace, Request-Daten, Benutzer-Info und System-Informationen

#### Bugfixes

- Schülerdetails: Rollenberechtigung für 'Darf das Schulgelände verlassen' korrigiert - 'Sekretariat' durch 'Verwaltung' ersetzt (routes/students.php und show.blade.php)
- Dashboard: Gerätereservierungen zeigen jetzt nur noch die eigenen Reservierungen an - Filter auf user_id hinzugefügt (routes/default.php)
- Schülerdetails: Doppelte Anzeige von 'Untis Benutzername' entfernt - Wird jetzt nur noch einmal angezeigt (show.blade.php)
