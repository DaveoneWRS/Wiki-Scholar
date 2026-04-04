---
slug: "2025-12-10"
title: "v0.0.82 (-007, -006)"
authors: [david]
tags: [scholar]
---

<!-- truncate -->

### 0.0.82-007

#### Neu

- Klassen-Phrasen: Automatische Zuweisung - Phrasen die einer Klasse zugeordnet sind, erscheinen automatisch auf allen Zeugnissen der Schüler dieser Klasse
- Klassen-Phrasen: Cascade Delete - Beim Löschen einer Klassen-Zuordnung wird die Phrase auch von allen betroffenen Zeugnissen entfernt

#### Bugfixes

- Zeugnis PDF: UTF-8 Encoding für Freitext-Bemerkung und Phrasen korrigiert (Umlaute werden nun korrekt dargestellt)
- Zeugnis PDF: Freitext-Bemerkung wird nun auch ohne zugewiesene Phrasen angezeigt
- Phrase-Individualisierung: Bearbeiten von Sammelzuweisungen auf Zeugniskonferenz-Seite überschreibt nicht mehr die globale Phrase
- Phrasenverwaltung: /phrases Index zeigt jetzt nur globale Sammelzuweisungen (keine individualisierten Kopien)

### 0.0.82-006

#### Neu

- Phrasenverwaltung: Nachträgliche Farbänderung für vorhandene Phrasen - Jede Phrase hat nun ein Dropdown zur Farbauswahl mit Speichern-Button
- Phrasenverwaltung: Farbiges Label zeigt die aktuelle Farbe unter dem Dropdown an

#### Bugfixes

- Phrasenverwaltung: Validierungsfehler werden nun angezeigt und Formularwerte bleiben bei Fehlern erhalten
