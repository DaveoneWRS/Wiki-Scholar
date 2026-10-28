---
sidebar_position: 2
---

# Dashboard

Das Dashboard ist die Startseite nach der Anmeldung. Es bietet eine schnelle Übersicht über den aktuellen Arbeitstag, offene Aufgaben und anstehende Termine.

## Schnellstatistiken

Oben auf dem Dashboard werden folgende Kennzahlen angezeigt:

| Kennzahl | Beschreibung |
|---|---|
| Offene Aufgaben | Gesamtanzahl aller noch nicht abgeschlossenen Aufgaben |
| Heute erledigt | Aufgaben, die heute als fertig markiert wurden |
| Überfällig | Aufgaben mit überschrittenem Fälligkeitsdatum |
| Projekte | Anzahl aktiver Projekte |

## Kacheln

Unter den Kennzahlen stehen die Kacheln des Dashboards:

| Kachel | Inhalt |
|---|---|
| ☀️ Heute fällig | Alle Aufgaben mit Fälligkeit heute |
| 📅 Heutige Termine | Kalendertermine des Tages mit Uhrzeit, Ort und Kalenderfarbe |
| 📥 Buchungsanfragen | Offene Anfragen aus der [Terminbuchung](./terminbuchung) – direkt annehmen oder ablehnen |
| 🛠️ Wartung & Ablauf | Fällige Wartungen sowie ablaufende Zertifikate, Verträge, Lizenzen und Zugänge aus der [IT-Dokumentation](/docs/planora/it/uebersicht) |
| 📝 Notizen mit Termin | Fällige [Notiz-ToDos](./notizen#todo-notizen) zum Abhaken |
| 🔮 Morgen fällig | Aufgaben von morgen – erscheint ab einer einstellbaren Uhrzeit |
| 📆 Tagesvorschau | Offene Aufgaben eines frei gewählten Tages ab morgen |
| 🔴 Überfällig | Aufgaben, deren Frist bereits abgelaufen ist |
| 📁 Projekte | Offene Aufgaben je Projekt |
| 📝 Letzte Aufgaben | Kürzlich erstellte oder geänderte Aufgaben |

Serienaufgaben sind in den Listen mit 🔁 gekennzeichnet. Ein Klick auf einen Wartungseintrag führt direkt zum passenden Wartungsplan.

### Tagesvorschau

Die Tagesvorschau zeigt die offenen Aufgaben eines beliebigen künftigen Tages. Den Tag wählen Sie über das Datumsfeld oder blättern mit den Pfeilen tageweise weiter. Künftige Termine von Serienaufgaben erscheinen dort als Vorschau – abgehakt wird eine Serie immer an ihrem aktuellen Termin.

### Kacheln anordnen

Mit **⚙️ Anpassen** lassen sich die Kacheln wie auf einer Pinnwand ordnen:

- Kacheln per Drag-and-drop innerhalb einer Spalte oder in eine andere Spalte ziehen
- Kacheln **ausblenden** und später wieder einblenden
- Kacheln **einklappen**, damit nur die Überschrift stehen bleibt
- Auf breiten Bildschirmen zwischen **zwei und drei Spalten** wählen

Lange Listen scrollen innerhalb der Kachel. Die Anordnung wird pro Benutzerkonto gespeichert. Mit **✓ Fertig** verlassen Sie den Bearbeitungsmodus.

## Schnellaufgabe

Über die Zeile **Schnellaufgabe** legen Sie eine Aufgabe an, ohne die Seite zu wechseln. Weitere Felder – Projekt, Priorität, Fälligkeit, Uhrzeit, Zeitbedarf und Wiederholung – liegen in einem Fenster, das beim Überfahren mit der Maus oder über den Zahnrad-Knopf **⚙️** aufklappt; **Escape** schließt es. Im zugeklappten Zustand zeigt die Zeile die aktuell gewählten Werte als Chips.

| Funktion | Beschreibung |
|---|---|
| Heute / Morgen | Setzt die Fälligkeit mit einem Klick; ein zweiter Klick entfernt das Datum wieder |
| Uhrzeit-Raster | Stunde und Viertelstunde mit zwei Klicks wählen, dazu **Jetzt** und **Löschen** |
| 📝 Details… | Legt die Aufgabe an und öffnet sie sofort im Bearbeiten-Fenster – für Beschreibung, Unteraufgaben, Anhänge und Freigabe |
| 📥 Zwischenspeichern | Parkt den angefangenen Entwurf (bis zu zehn) zum späteren Weiterbearbeiten |
| 🧹 Zurücksetzen | Leert alle Felder |

Die Eingaben bleiben erhalten, auch wenn Sie das Fenster schließen, die Seite wechseln oder neu laden. Zur Auswahl stehen eigene Projekte sowie fremde Projekte, in denen Sie Aufträge anlegen dürfen – siehe [Projekt freigeben](./projekte#projekt-freigeben).

## Aufgabe bearbeiten

Ein Klick auf eine Aufgabe öffnet das Bearbeiten-Fenster mit allen Feldern, einschließlich Wiederholung, Türschild-Vorlage, Anhängen und öffentlicher Freigabe. Die Felder sind unter [Aufgaben](./aufgaben#felder-einer-aufgabe) beschrieben.

## Filter: Beruflich / Privat / Alles

Mit dem Umschalter oben links wechseln Sie zwischen **💼 Beruflich**, **🏠 Privat** und **📋 Alles**. Kennzahlen, Kacheln und die Projektauswahl der Schnellaufgabe folgen der gewählten Ansicht.

:::note
Das Dashboard aktualisiert sich automatisch alle 30 Sekunden, solange der Browser-Tab sichtbar ist.
:::
