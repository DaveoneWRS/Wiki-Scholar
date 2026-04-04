---
slug: "2026-02-11"
title: "v2026.02.11 (-001, -000)"
authors: [david]
tags: [scholar]
---

<!-- truncate -->

### 2026.02.11-001

#### Neu

- Automatischer Mängelbericht per E-Mail: Bei Kücheninspektionen mit festgestellten Mängeln wird automatisch eine E-Mail an den Verantwortlichen der Reservierung gesendet
- Professionell formatierte E-Mail mit Reservierungsdetails, Mängelliste, Prüfer-Informationen und Anmerkungen
- E-Mail-Versand über Queue (ShouldQueue) für nicht-blockierende Verarbeitung

### 2026.02.11-000

#### Bugfixes

- Küche: Reinigungsgebühr von 50€ auf 100€ angepasst (conditions.blade.php)
- StudentSearch: count() auf Array statt Collection behoben — handleEnterKey() crashte bei Barcode-/Sucheingaben (Call to a member function count() on array)
