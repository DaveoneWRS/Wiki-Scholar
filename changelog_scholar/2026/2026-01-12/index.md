---
slug: "2026-01-12"
title: "v0.0.86 (-013, -012)"
authors: [david]
tags: [scholar]
---

<!-- truncate -->

### 0.0.86-013

#### Neu

- Fehltage/AV/SV: Floskeln werden jetzt aus der Datenbank geladen statt hardcoded
- Fehltage/AV/SV: Dropdown-Optionen werden dynamisch basierend auf der gewählten Kategorie (A-E) angezeigt
- Fehltage/AV/SV: Schülername wird jetzt als 'Vorname Nachname' angezeigt

### 0.0.86-012

#### Neu

- Notenübersicht: Schuljahr-Auswahl wird in der Session gespeichert und bleibt nach Seiten-Reload erhalten
- Navigation: Neuer Hauptmenüpunkt 'Lernmittel' für alle Benutzer sichtbar
- Dashboard Geburtstage: Schülernamen sind für Admin, Schulleitung und Koordinatoren klickbar und führen direkt zur Schülerakte
- Notenübersicht: Lehrkräfte mit Klassenfreischaltung können jetzt die Notenlisten ihrer Klassen einsehen (auch rückwirkend für vergangene Schuljahre)
- Druckansicht: Button 'Notenübersicht' zur schnellen Navigation zur Notenliste hinzugefügt
- Notenübersicht: Klassenlehrer-Zuordnung ist jetzt schuljahrabhängig - Lehrkräfte sehen nur Klassen, für die sie im ausgewählten Schuljahr Klassenlehrer sind

#### Bugfixes

- Notenübersicht: Zugriffslogik korrigiert - Klassenlehrer sehen nur ihre eigenen Klassen (auch Admin-Benutzer), Vollzugriff nur mit Evaluierungs-Berechtigung
- Lernmittel FKL-Ansicht: 403-Fehler beim Speichern von Hinweisen für FL-* Benutzer behoben
- Lernmittel FKL-Ansicht: 403-Fehler beim Entfernen von Klassenstufen für FL-* Benutzer behoben
- Geräteverleih Statistik: Fehlende 'Standard'-Kategorie hinzugefügt - Summe stimmt jetzt mit Gesamtzahl überein
