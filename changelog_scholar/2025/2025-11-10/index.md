---
slug: "2025-11-10"
title: "v0.0.82-000"
authors: [david]
tags: [scholar]
---

<!-- truncate -->

#### Neu

- 3. Fremdsprache: Neues Datenbankfeld 'third_language' für Schüler mit den Optionen Spanisch (sn), Latein (la), Französisch (fr), Französisch früh (frFrüh)
- 3. Fremdsprache: Inline-Bearbeitungsfunktion auf der Schüler-Detailseite (/students/\{id\}/show) mit AJAX-Speicherung
- Noteneingabe: Schüler mit 3. Fremdsprache werden nun in der Noteneingabe für Fremdsprachenfächer berücksichtigt
- Noteneingabe: Filter für Französisch, Spanisch und Latein zeigt Schüler mit 2. ODER 3. Fremdsprache
- Case Management: Öffentliche Kiosk-URL (/kiosk) wird prominent im Header der Admin-Seite (/admin/case-management) angezeigt mit direktem Link (öffnet in neuem Tab) und Copy-to-Clipboard-Funktion

#### Bugfixes

- Gerätewartung: Sound-Benachrichtigung wird nicht mehr für Geräte mit maintenance_period_in_days = 0 abgespielt
- DeviceAssignmentController: Wartungsprüfung von &gt;= 0 auf &gt; 0 korrigiert (Zeile 153)
