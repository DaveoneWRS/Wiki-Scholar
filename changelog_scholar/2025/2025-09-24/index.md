---
slug: "2025-09-24"
title: "v0.0.77 (-001, -007, -006, -005)"
authors: [david]
tags: [scholar]
---

<!-- truncate -->

### 0.0.77-001

#### Neu

- ILE System: 24-Stunden-Bearbeitungsregel für Individual Learning Development Einträge implementiert - Anwender können ihre eigenen Einträge nur innerhalb von 24h nach Erstellung bearbeiten/löschen
- ILE System: Admin, Schulleitung und Koordinatoren mit ile_edit/ile_del Berechtigung können auch nach 24h-Frist alle Einträge bearbeiten/löschen
- WiFi Schülerübersicht: Lehrern werden jetzt alle zugewiesenen Klassen angezeigt (nicht nur Klassenleitungen) - david.schomburg@wilhelm-raabe-schule.de sieht nun sowohl 5a als auch 5b

### 0.0.76-007

#### Bugfixes

- Route System: Duplicate route name conflict für 'deviceAssignment.resetBarcodeFromKachel' behoben - redundante Route aus freeAccess.php entfernt
- Route Cache: Route-Caching funktioniert wieder ohne LogicException - clean_build.sh kann erfolgreich ausgeführt werden
- System Stability: UpdateApplication Command läuft wieder fehlerfrei nach Behebung der Route-Konflikte

### 0.0.76-006

#### Bugfixes

- AGs Create Form: Wochentags-Auswahl funktioniert wieder - JavaScript-Ereignisbehandlung korrigiert und jQuery-Abhängigkeit entfernt
- Dashboard Self-Service Widget: WiFi-Anzeige entfernt da keine Bearbeitung möglich ist - sowohl in Statistik-Leiste als auch Widget
- JavaScript Dependencies: Select2 und jQuery komplett entfernt für bessere Performance und weniger externe Abhängigkeiten

### 0.0.76-005

#### Neu

- Laden-System: Neue Funktionalität für Lagerort-Markierung als 'Laden' - Geräte die in Laden gescannt werden erhalten automatisch Status 'laden'
- Kachel-Klick Navigtion: Lagerorte können jetzt durch Mausklick aktiviert werden (zusätzlich zum Barcode-Scannen)
- Grafana Integration: Korrigierte device_status.loaned Metrik zählt nur noch Standard-Ausleihungen (ohne LK/SuS)
- Device Status Management: Neuer 'laden' Status für Geräte mit entsprechender Filterung und Statistiken
- Storage Locations Management: Toggle für Laden-Markierung in der Lagerort-Verwaltungsliste integriert

#### Bugfixes

- Duplicate Device Entries: Behoben - Geräte können nicht mehr in mehreren Listen gleichzeitig erscheinen
- Event Propagation: Toggle-Switches und Buttons in Kacheln lösen nicht mehr ungewollt Kachel-Aktivierung aus
- German Language: Korrektur von 'Ausleihungen' zu korrektem 'Ausleihen' in der Benutzeroberfläche
