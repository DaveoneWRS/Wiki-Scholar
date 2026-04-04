---
slug: "2025-10-28"
title: "v0.0.80-000"
authors: [david]
tags: [scholar]
---

<!-- truncate -->

#### Neu

- Automatisches Cover-Nachladen für Bibliotheksbücher beim Seitenaufruf
- Intelligentes Fehler-Tracking für fehlgeschlagene Cover-Downloads
- Klassifikationen sind nun auf der Buchbearbeitungsseite editierbar
- Live-Search mit Dropdown für Klassifikations-Auswahl
- Text-basierte Suche für alle Filterfelder auf /books/search
- Barcode- und Exemplarnummer-Suche in der Hauptsuche
- Checkbox für exklusive Exemplarnummer-Suche

#### Bugfixes

- Behoben: Endlosschleife bei fehlgeschlagenem Cover-Download
- Behoben: Falsche Relationship-Schlüssel im Book Model (buchungsnummer → id)
- Behoben: Bug im store() Method - Falsche Feldnamen für Klassifikations-Zuweisungen (book_id/classification_id → titel/systematik)
- Behoben: Klassifikationen wurden nicht auf Buchdetailseite angezeigt
- Behoben: Falsche Relationship-Schlüssel im Book Model (buchungsnummer zu id)
- Behoben: Bug im store() Method - Falsche Feldnamen für Klassifikations-Zuweisungen
