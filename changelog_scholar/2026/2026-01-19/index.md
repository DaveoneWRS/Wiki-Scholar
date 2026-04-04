---
slug: "2026-01-19"
title: "v0.0.91 (-012, -011, -010, -009, -008, -007, -006)"
authors: [david]
tags: [scholar]
---

<!-- truncate -->

### 0.0.91-012

#### Bugfixes

- Paket joserick/laravel-livewire-discover entfernt (nicht kompatibel mit PHP 8.5)
- LivewireDiscoverServiceProvider entfernt

### 0.0.91-011

### 0.0.91-010

#### Bugfixes

- UpdateChecker: Error 500 bei fehlendem Internet behoben - dd() im catch-Block entfernt und Timeouts hinzugefügt

### 0.0.91-009

#### Neu

- Support-Formular: Neues Anzahl-Feld bei Klassen-Supportfällen für Anzahl betroffener Personen

### 0.0.91-008

#### Neu

- Support-Formular: Neues Lösungsfeld mit Autocomplete-Vorschlägen aus bisherigen Einträgen

### 0.0.91-007

#### Bugfixes

- Rollen-Berechtigungen: Synchronisation zwischen Custom RolePermission und Spatie Permission System - store(), update() und destroy() synchronisieren jetzt korrekt zu Spatie
- Zeugnis-PDF: Sonderklassen (Klassenbezeichnung) werden jetzt korrekt aus SchoolClass.bezeichnung geladen
- Zeugnis-PDF: Fehltage zeigt '0' statt '-' wenn leer oder nicht gesetzt
- Zeugnis-PDF: 'davon unentschuldigt: X' wird jetzt vollständig ausgeschrieben (nicht nur die Zahl)
- Zeugnis-PDF: '---' wird angezeigt wenn keine AGs vorhanden sind

### 0.0.91-006

#### Neu

- Zeugnislisten: Neuer 'Alle Klassen als PDF' Button auf der Übersichtsseite - exportiert alle angezeigten Klassen in einem PDF
- Zeugnislisten: Neue PDF-View mit Seitenumbruch pro Klasse für Sammel-Export

#### Bugfixes

- Rollen-Berechtigungen: Permission-Cache wird jetzt beim Ändern von Rollenberechtigungen geleert - Änderungen sind sofort wirksam
- Zeugnislisten: Zurück-Button behält jetzt das ausgewählte Schuljahr bei
- Zeugnislisten PDF: Schrägstriche im Schuljahr werden im Dateinamen durch Bindestriche ersetzt
