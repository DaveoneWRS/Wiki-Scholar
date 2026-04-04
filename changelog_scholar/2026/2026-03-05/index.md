---
slug: "2026-03-05"
title: "v2026.03.05-001"
authors: [david]
tags: [scholar]
---

<!-- truncate -->

#### Bugfixes

- Schulanmeldungen /student_registrations: 'Ausblenden'-Button funktioniert jetzt korrekt (PATCH statt POST, JSON-Response)
- Schulanmeldungen /student_registrations: Ausblenden/Einblenden-Button nur noch für Benutzer mit 'edit_register_student' Berechtigung sichtbar
- Schulanmeldungen /student_registrations: Import/Export-Buttons nur für berechtigte Benutzer sichtbar
- Schulanmeldungen /student_registrations/edit: Feld 'Bewerbungsgrund' entfernt (existiert nicht mehr)
- Schulanmeldungen /student_registrations/edit: Validierung - 'first_choice_profile' ist Pflichtfeld wenn 'wants_profile_class' = yes
