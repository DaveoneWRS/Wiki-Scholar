---
slug: "2025-10-09"
title: "v0.0.79-002"
authors: [david]
tags: [scholar]
---

<!-- truncate -->

#### Neu

- ILE-Klassenübersicht: Neue Funktion '📊 Alle ILE-Einträge anzeigen' - Zeigt alle ILE-Einträge eines Schülers in jahresbasierter Tab-Organisation mit vollständiger Übersicht aller Bewertungen, Fördermaßnahmen und Beurteilungen

#### Bugfixes

- ILE-Routing: Route-Konflikt behoben - Spezifische Route students/\{student\}/ile/all/ajax wird nun vor parametrisierten Routen abgearbeitet
- ILE-JavaScript: Tab-Funktionalität für AJAX-geladene Inhalte korrigiert - showYear() Funktion im Hauptseiten-Scope verfügbar
- Klassen-ID Synchronisation: Automatische Synchronisation alle 5 Stunden zwischen altem (class_number/class_letter) und neuem (class_id) Klassensystem - Behebt Zugriffsprobleme auf Schülerakten
