---
slug: "2025-11-01"
title: "v0.0.80 (-002, -001)"
authors: [david]
tags: [scholar]
---

<!-- truncate -->

### 0.0.80-002

#### Neu

- Schullaufbahn: Dedizierte Timeline-Seite mit chronologischer Übersicht
- Schullaufbahn: Visuelle Timeline-Darstellung aller Schuljahre
- Schullaufbahn: Modal-basierte Bearbeitung von Einträgen inkl. Versetzungsstatus
- Schullaufbahn: Soft-Delete mit Wiederherstellungsfunktion für Admins
- Schullaufbahn: Integration in Aktenausdruck mit vollständiger Übersicht
- Schullaufbahn: Direkter Link zu verknüpften Zeugnissen
- Schullaufbahn: Anzeige von Ersteller und Erstellungsdatum

#### Bugfixes


### 0.0.80-001

#### Neu

- Schullaufbahn-Feature: Neue Funktion zur Verwaltung der Schullaufbahn auf der Schülerdetailseite
- Schullaufbahn wird automatisch aus vorhandenen Zeugnissen generiert
- Manuelle Einträge können hinzugefügt, bearbeitet und gelöscht werden
- Anzeige von Schuljahr, Klasse, Versetzungsstatus und Notizen
- Link zum jeweiligen Zeugnis wenn vorhanden

#### Bugfixes

- SchoolCareerController: Korrigierter Import für Laravel 11 Routing Controller
- Migration: student_magellan_id Datentyp von string zu unsignedBigInteger korrigiert für Foreign Key Kompatibilität
- Schullaufbahn Menü-Button: toggleSchoolCareer() Funktion zum Main Alpine.js Component hinzugefügt für korrektes Scrolling und Accordion-Öffnen
