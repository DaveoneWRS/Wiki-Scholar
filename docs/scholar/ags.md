---
sidebar_position: 8
---

# Arbeitsgemeinschaften (AGs)

Das AG-Modul verwaltet alle schulischen Arbeitsgemeinschaften und die Zuweisung von Schülerinnen und Schülern. Sie erreichen es über das Menü **AG Modul** mit den Punkten **Übersicht**, **Zuweisung / Entfernen** und **Statistik**.

## AG-Übersicht

Die Übersicht listet alle aktiven AGs mit Teilnehmerzahl und Leitungsperson auf. Statistiken können nach Jahrgangsstufe gefiltert werden. Von hier aus erreichen Sie auch den Sammelexport der Teilnehmerlisten (siehe [Druckfunktionen](#druckfunktionen)).

## AG erstellen und bearbeiten

1. Navigieren Sie zu **AGs**
2. Klicken Sie auf **Neue AG**
3. Tragen Sie Name, Beschreibung, Wochentag, Beginn und Ende, Raum, Klassenbereich und maximale Teilnehmerzahl ein
4. Wählen Sie die **AG-Leitung** aus der Benutzerliste – oder tragen Sie sie als **Freitext** ein, etwa bei externen Kursleitungen
5. Speichern Sie die AG

**Weitere Aktionen:**
- AG bearbeiten
- AG löschen
- Audit-Protokoll der AG anzeigen

:::note Unterrichtszeiten
Die Zeitangaben richten sich nach den hinterlegten Unterrichtszeiten. Das Stundenraster reicht bis zur **10. Stunde** (15:55–16:40 Uhr), sodass auch Nachmittags-AGs genau abgebildet werden.
:::

## AGs importieren

Viele AGs lassen sich auf einmal aus einer Datei anlegen:

1. Datei hochladen (max. 5 MB, Kodierung UTF-8 oder Windows-1252)
2. In der **Vorschau** prüfen: gelesene Zeilen, vorbereitete AGs, Einträge mit Hinweisen und bereits vorhandene AGs
3. Auswahl treffen (**Alle**, **Keine** oder **Nur ohne Hinweise**) und einzelne Angaben wie Leitung, Wochentag, Zeiten, Raum oder Klassenbereich direkt korrigieren
4. Import bestätigen

Die Vorschau bleibt samt Korrekturen erhalten – auch nach einem Neuladen oder wenn der Import wegen fehlender Angaben abgebrochen wurde –, bis der Import durchläuft oder eine andere Datei gewählt wird. Leere Zeilen und Zeilen ohne AG-Namen werden übersprungen.

## Schüler zuweisen

Schülerinnen und Schüler können einzeln oder als Gruppe einer AG zugewiesen werden:

- Einzelzuweisung über das Schülerprofil oder die AG-Ansicht
- Massenzuweisung für mehrere Schüler gleichzeitig
- Zuweisung entfernen

## Vorläufige Zuweisungen

Vor der endgültigen Zuweisung können Zuweisungen als **vorläufig** markiert werden:

| Aktion | Beschreibung |
|---|---|
| Vorläufig zuweisen | Zuweisung noch nicht bestätigt |
| Bestätigen | Vorläufige in feste Zuweisung umwandeln |
| Ablehnen | Vorläufige Zuweisung verwerfen |
| AG-Wahlen abrufen | AG-Wünsche aus dem Elternportal übernehmen |

## Bewerbungen

Schülerbewerbungen für AGs können verwaltet werden:

- Offene Bewerbungen je AG anzeigen
- Alle Bewerbungen auf einmal bestätigen
- Bestätigte Zuweisungen wieder auf vorläufig zurücksetzen
- Bewerber- und Teilnehmerliste drucken

:::note Berechtigungen
Die Seiten **Vorläufige Zuweisungen** und die Bewerbungsübersicht hängen an der Berechtigung **AG-Zuweisungen verwalten**. Für die Rolle Lehrer ist sie ab Werk gesperrt und kann in der Rollenverwaltung freigeschaltet werden. **Massenzuweisung** und der **Abruf der AG-Wahlen aus dem Elternportal** bleiben der Leitungsebene vorbehalten.

Die **AG-Leitung** sieht und druckt die Bewerbungen der eigenen AG auch ohne dieses Recht, kann sie aber nicht ändern.
:::

## Halbjahreswechsel

Beim Wechsel ins neue Halbjahr können AG-Teilnehmer automatisch **übernommen** werden, um manuelle Neuzuweisungen zu vermeiden:

- Übernommen werden nur **bestätigte** Teilnehmer, keine vorläufigen
- Bereits vorhandene Einträge im aktiven Halbjahr werden übersprungen
- Die Einstellung **Auf Zeugnis sichtbar** bleibt erhalten

## Klassenleitung – AG-Ansicht

Klassenleitungen können die AGs ihrer eigenen Klasse einsehen und Teilnehmerlisten drucken.

## Druckfunktionen

- Teilnehmerliste einer AG drucken
- Klassenbezogene AG-Liste drucken
- **Jahrgangslisten** – alle bestätigten AG-Zuweisungen eines Jahrgangs im aktuellen Schuljahr, nach Klassen gruppiert, als PDF oder Excel
- **AG-Teilnehmer (CSV)** – alle Teilnehmenden aller AGs eines Schuljahres in einer Datei: eine Zeile je Teilnehmer mit AG, Leitung, Termin, Raum, Klasse und Status
- **AG-Teilnehmerlisten (PDF)** – Sammel-PDF mit Deckblatt und einer Seite je AG, zum Verteilen an die AG-Leitungen

Für CSV und Sammel-PDF wählen Sie, ob **alle**, nur **bestätigte** oder nur **vorläufige** Zuweisungen ausgegeben werden. AGs ohne passende Teilnehmer erscheinen trotzdem (Vermerk „keine Teilnehmer" bzw. eigenes Blatt). Beide Exporte finden Sie in der AG-Übersicht und im Menü **Listen**.

## Statistiken

Die AG-Statistik gibt einen Überblick über:
- Teilnahmequoten pro Jahrgang
- Auslastung einzelner AGs
- Schüler ohne AG-Zuweisung

## Übertragung ins Elternportal

Die AGs werden an das Elternportal übertragen, damit Eltern dort ihre Wünsche abgeben können. Vor dem Senden prüft Scholar die Daten mit denselben Regeln wie das Elternportal. Fehlerhafte AGs werden mit Nummer, Name, Leitung, Zeiten, Raum und einem Link zum Bearbeiten gemeldet – alle auf einmal. Übertragen wird immer alles oder nichts; gelöschte AGs werden nicht mehr übermittelt.
