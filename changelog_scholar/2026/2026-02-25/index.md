---
slug: "2026-02-25"
title: "v2026.02.25 (-003, -002, -001)"
authors: [david]
tags: [scholar]
---

<!-- truncate -->

### 2026.02.25-003

#### Bugfixes

- Klassifikation bearbeiten: Fehlende Closing-Tags in edit.blade.php (&lt;/script&gt;&lt;/x-app-layout&gt;) behoben - verursachte PHP Syntax Error auf Production

### 2026.02.25-002

#### Bugfixes

- SelfService /selfservice-pickup/books/scanner: Rk-Bücher wurden nicht angezeigt – Religionsfilter in freeAccess.php (load-books Route) normalisiert RK/Re/WN jetzt case-insensitiv via strtoupper() + match(), analog zu SelfServiceBookController
- SelfService /self-service/digital-book: Gleicher Religionsfilter-Fehler in SelfServiceDigitalBookController behoben – in_array ohne Normalisierung schloss Rk-Bücher aus wenn religion_type_select als 'RK' gespeichert war

### 2026.02.25-001

#### Neu

- Fachleitung Religion Katholisch (Rk / FL-Rk) systemweit ergänzt – SubjectService, Berechtigungen, GradeSystemController, StudentInterimGradesController, RolePermissionController, UserManagement-Anzeige und Lernmittel-Berechtigungen
- Lernmittel /learning-materials: Erstellungsdatum (Erstellt am) in der Bestand-Spalte – sichtbar nur für Benutzer mit lm_admin-Berechtigung (Admin, Schulleitung)
- Lernmittel /learning-materials: Erstellungsdatum per Klick inline editierbar – Änderung wird per PATCH-Request gespeichert, nur für lm_admin
- Lernmittel /learning-materials: Datumsfilter (Monat/Jahr) in der Suche – Filteroptionen: Genau am, Ab dem, Bis zum; Firefox-kompatibel via zwei Select-Dropdowns, nur für lm_admin
