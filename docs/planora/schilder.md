---
sidebar_position: 9
---

# Schilder

Die Schilder-Funktion ermöglicht das Erstellen digitaler Statusschilder – etwa für ein Türschild-Display vor dem Büro. Sie finden sie über **Türschild** in der Seitenleiste.

## Einsatzbereiche

- **Türschild** – zeigt auf einem Display den aktuellen Status einer Person oder eines Raums an (z. B. „Im Gespräch", „Nicht stören")
- **Unterschriftenpad** – ein Schild kann zusätzlich dort erscheinen

## Schild erstellen

1. **Türschild** in der Seitenleiste öffnen
2. Auf **+ Neues Schild** klicken
3. Details ausfüllen
4. Speichern – direkt aktiv oder als Vorlage

### Eigenschaften eines Schildes

| Eigenschaft | Beschreibung |
|---|---|
| Überschrift | Kurze Statusbezeichnung (z. B. „Besprechung"); mit Enter setzen Sie einen Zeilenumbruch, der genau so auf dem Schild erscheint |
| Text | Optionaler, mehrzeiliger Zusatztext mit **fett**, *kursiv* und unterstrichen; zu langer Text läuft auf dem Display langsam durch |
| Farbe | 🟢 Grün / 🟡 Gelb / 🔴 Rot als Statussignal |
| Anzeigen auf | Die Türschild-Displays, auf denen das Schild erscheint, sowie optional das Unterschriftenpad |
| Anzeigen ab / Ausblenden nach | Optionaler Zeitraum für automatisches Ein- und Ausblenden |
| Vorlage | Schild nicht direkt anzeigen, sondern für die Schnellauswahl speichern |

## Übersicht

Die Seite gliedert die Schilder in vier Bereiche:

| Bereich | Inhalt |
|---|---|
| 📡 Aktive Schilder | Was gerade an der Tür hängt; **Alle deaktivieren** nimmt sie ab |
| 🕒 Geplant | Schilder, die zu einem späteren Zeitpunkt erscheinen – mit Zeitraum, Ziel und zugehöriger Aufgabe |
| 📋 Vorlagen (Schnellauswahl) | Gespeicherte Vorlagen zum Aktivieren mit einem Klick |
| 💤 Zuletzt verwendet | Abgeschaltete oder abgelaufene Schilder zum erneuten Aktivieren |

## Vorlagen

Häufig verwendete Schilder können als **Vorlagen** gespeichert werden. So lassen sich Standardsituationen schnell aktivieren:

- **▶ Aktivieren** – das Schild hängt sofort
- **🕒 Zeitgesteuert** – Startzeitpunkt und optionales Ende festlegen; das Schild erscheint zum Startzeitpunkt von selbst

Beim zeitgesteuerten Aktivieren ist die Option **Laufende Schilder zum Startzeitpunkt beenden** voreingestellt – der Wechsel passiert dann punktgenau.

:::note
**Aktivieren** und **Alle deaktivieren** betreffen nur Schilder, die bereits hängen. Geplante Schilder bleiben davon unberührt und lassen sich über ihre eigene Liste verwerfen.
:::

## Schilder an Aufgaben

Eine [Aufgabe](./aufgaben#felder-einer-aufgabe) kann im Feld **🚪 Türschild** eine Vorlage tragen. Daraus entsteht automatisch ein geplantes Schild für den Zeitraum der Aufgabe:

- Das Schild erscheint um die eingestellte **Vorlaufzeit** vor dem Termin
- Es wird abgenommen, sobald die Aufgabe erledigt, abgebrochen oder gelöscht ist
- Verschieben der Aufgabe verschiebt das Schild mit
- Auf dem Display steht die Uhrzeit des Termins, nicht die des Vorlaufs
- Ganztägige Aufgaben belegen den ganzen Tag, Aufgaben ohne Uhrzeit bekommen kein Schild

Die Vorlaufzeit stellen Sie unter **Einstellungen → Türschilder** ein (0 = punktgenau, Schnellwahl 5 bis 60 Minuten). Dort steht auch, welche Schilder gerade an Aufgaben hängen. Schilder aus Aufgaben werden an der Aufgabe selbst abgewählt, nicht in der Schilderliste.

## Türschild-Displays

Unter **Türschild-Displays** legen Sie mit **+ Neues Display** beliebig viele Anzeigen an – etwa eine je Bürotür. Der Editor hat die Reiter **Allgemein**, **Darstellung**, **Ohne Schild** und **Zugriff** und zeigt eine Live-Vorschau im echten Seitenverhältnis.

| Einstellung | Beschreibung |
|---|---|
| Displaygröße | Vorgaben für 7"- und 10"-Tablets oder 24"-Monitore, quer oder hoch, oder eine eigene Größe |
| Darstellung | Schriftgröße, Hell/Dunkel, Uhr oben oder unten, pulsierendes Schild, weißer Rahmen, Anzeigedauer je Schild und Auto-Reload-Prüfung |
| Ohne Schild | Überschrift, Unterzeile und Info-Karten, die das Display zeigt, solange kein Schild aktiv ist |
| 🔗 Geheimer Link | Adresse des Displays; **Link neu erzeugen** macht den alten Link sofort ungültig |
| 🔒 IP-Sperre | Optional nur bestimmte Adressen oder Netze zulassen (eine je Zeile) |

Den Link öffnen Sie auf dem Tablet oder Display im Kioskmodus des Browsers. Alternativ steht ein **Einbettungs-Code (iframe)** bereit.

:::info
Die Anzeige aktualisiert sich automatisch, sobald sich etwas ändert, und benötigt keine Anmeldung. Schutz bietet allein der geheime Link – geben Sie ihn nicht weiter und erneuern Sie ihn bei Bedarf.
:::

:::note Umstellung
Die frühere gemeinsame Anzeige unter `/door-view/start` gibt es nicht mehr. Ihre Einstellungen wurden bei der Umstellung in ein Display übernommen; Displays benötigen den neuen Link.
:::
