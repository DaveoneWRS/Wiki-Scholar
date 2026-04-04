---
slug: "2026-03-06"
title: "v2026.03.06 (-007, -006, -005)"
authors: [david]
tags: [scholar]
---

<!-- truncate -->

### 2026.03.06-007

#### Bugfixes

- Self-Service /self-service/moinschule: Zugangsdaten werden nicht mehr angezeigt, Hinweis auf E-Mail-Versand ergänzt

### 2026.03.06-006

#### Neu

- Magellan Import /magellanimport: Student-Import umbenannt (nur Studenten) und Dateiupload akzeptiert jetzt XLS/XLSX/CSV/TXT

#### Bugfixes

- Magellan Import /magellanimport: XLS/XLSX wird direkt eingelesen, Encoding-Probleme durch UTF-8 Normalisierung reduziert

### 2026.03.06-005

#### Neu

- Schulanmeldungen /student_registrations: Soft-Delete für Einträge (Löschen entfernt nur aus der Liste, Daten bleiben erhalten)
- Schulanmeldungen /student_registrations: Checkbox 'Gelöschte anzeigen' zum Einblenden soft-gelöschter Einträge
- Lernmittel /learning-materials: Hinweise (Notes) inline anlegen, bearbeiten und löschen mit Sofort-Feedback
- Lernmittel /learning-materials: Hinweise (Notes) werden in PDF-Listen angezeigt

#### Bugfixes

- Schulanmeldungen /student_registrations: Ausblenden/Einblenden aktualisiert die Liste ohne Reload
- Schulanmeldungen /student_registrations: Ausgeblendet-Status und Filter bleiben konsistent bei Umschalten
