---
slug: "2026-03-04"
title: "v2026.03.04 (-003, -002, -001)"
authors: [david]
tags: [scholar]
---

<!-- truncate -->

### 2026.03.04-003

#### Neu

- Lernmittel /learning-materials: Titel inline bearbeitbar - Klick auf Stift-Icon öffnet Eingabefeld mit Speichern/Abbrechen-Buttons, Enter speichert
- Lernmittel /learning-materials: Kopieren-Funktion bleibt erhalten - Klick auf Titel kopiert den Buchtitel mit visuellem Feedback (grün + ✓ Kopiert!)

### 2026.03.04-002

#### Neu

- Lernmittel /learning-materials: Inline-Toggle für 'Im Elternportal' (showEP) - Admin kann per Klick auf das Badge den Status ändern

#### Bugfixes

- Lernmittel /learning-materials: 'Sp' (Sport) im Fach-Select hinzugefügt
- Lernmittel /learning-materials: PDF-Sortierung und Preisübersicht - 'Sp' (Sport) in Fachreihenfolge integriert

### 2026.03.04-001

#### Neu

- Schulanmeldungen /student_registrations: Live-Suche mit JavaScript (filtert client-seitig nach Name/Stadt, 3+ Zeichen, 300ms Debounce)
- Schulanmeldungen /student_registrations: Inline Status-Änderung per AJAX (Dropdown: Offen, In Bearbeitung, Abgeschlossen, Abgelehnt)
- Schulanmeldungen /student_registrations: Inline Ein-/Ausblenden-Button per AJAX
- Schulanmeldungen /student_registrations: Profilklassen-Übersetzung (Französischklasse statt 'French', Bläserklasse, Theaterklasse)
- AG-Auswahl: Null-Check für classNumber verhindert Fehler wenn kein Schüler ausgewählt ist

#### Bugfixes

- Schülerprofil /students/\{id\}/show: AG-Dopplung behoben - zugeordnete AGs werden jetzt nach aktuellem Schuljahr gefiltert (vorher wurden alle AG-Zuweisungen ohne Schuljahr-Filter angezeigt)
