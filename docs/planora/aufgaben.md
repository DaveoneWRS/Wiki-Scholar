---
sidebar_position: 3
---

# Aufgaben

Die Aufgabenverwaltung ist das zentrale Element von Planora. Hier erstellen, organisieren und verfolgen Sie alle anfallenden Tätigkeiten.

Sie erreichen die Aufgaben über **Board** in der Seitenleiste. Die Seite hat vier Reiter: **🗂️ Aufgaben**, **📁 Projekte**, **🏷️ Labels** und **📅 Kalender**.

## Ansichten

Über den Umschalter oben wechseln Sie die Darstellung der Aufgaben:

| Ansicht | Beschreibung |
|---|---|
| 🗂️ Board | Drei Spalten – **📅 Geplante Aufgaben**, **🔄 Serienaufgaben** und **📭 Ungeplante** – mit Drag-and-drop |
| 📋 Liste | Klassische Liste mit Filtern nach Termin (Heute, Morgen, Kommende, Überfällig, Ohne Datum), Priorität, Projekt und Labels; **Erledigte zeigen** blendet abgeschlossene Aufgaben ein |
| 🗓 Planungsraster | Der Tag als Viertelstunden-Raster – siehe [Planungsraster](#planungsraster) |

In jeder Spalte des Boards gibt es ein eigenes Eingabefeld für neue Aufgaben. Ist das Board auf ein Projekt gefiltert, landen neue Aufgaben direkt in diesem Projekt.

## Aufgabe erstellen

1. **Board** in der Seitenleiste öffnen
2. Titel in das Eingabefeld der passenden Spalte eintragen oder die [Schnellaufgabe](./dashboard#schnellaufgabe) auf dem Dashboard nutzen
3. Aufgabe anklicken, um weitere Felder auszufüllen
4. **Speichern**

### Felder einer Aufgabe

| Feld | Beschreibung |
|---|---|
| Titel | Kurze Bezeichnung der Aufgabe (Pflichtfeld) |
| Beschreibung | Ausführliche Beschreibung |
| 🔒 Interne Notiz | Nur intern sichtbar, wird nie veröffentlicht |
| Priorität | ⬜ Niedrig / 🔵 Mittel / 🟠 Hoch / 🔴 Dringend |
| Projekt | Zuordnung zu einem eigenen oder freigegebenen Projekt |
| Fällig am / Uhrzeit | Datum mit Schnellwahl **Heute** / **Morgen** und optionaler Uhrzeit |
| Zeitbedarf | Geschätzte Dauer – wird bei Planung und Terminbuchung als belegte Zeit berücksichtigt |
| 🔁 Wiederholung | Siehe [Wiederkehrende Aufgaben](#wiederkehrende-aufgaben) |
| 🚪 Türschild | Schild-Vorlage, die während der Aufgabe an der Tür hängt – siehe [Schilder](./schilder#schilder-an-aufgaben) |
| 📍 Ort | Ort der Aufgabe; ein Knopf daneben öffnet die Navigation |
| Labels | Farbige Labels zur Kategorisierung |
| 📎 Anhänge | Dateien zur Aufgabe hochladen |

Erledigte Aufgaben haken Sie direkt in Liste, Board oder Dashboard ab; ein erneuter Klick öffnet sie wieder.

## Unteraufgaben

Aufgaben können in **Unteraufgaben** unterteilt werden. Neue Unteraufgaben tragen Sie im Bearbeiten-Fenster ein und haken sie dort einzeln ab. Der Fortschritt erscheint als Zähler an der Aufgabe.

## Labels

Labels werden im Reiter **🏷️ Labels** verwaltet: Name, Farbe und eine **Gewichtung**. Die Gewichtung nutzt das [Planungsraster](#planungsraster) beim automatischen Verteilen. In den Aufgaben-Dialogen erscheinen gewählte Labels vollständig in ihrer Farbe.

## Wiederkehrende Aufgaben

Aufgaben können als **wiederkehrend** eingestellt werden. Verfügbare Intervalle:

- Täglich
- Wöchentlich (mit Wochentag)
- Alle 2 Wochen
- Monatlich
- Vierteljährlich
- Jährlich
- Jeden Werktag (Mo–Fr)

Nach dem Abschließen springt die Aufgabe auf ihren nächsten Termin. Mit **Einmalig** beenden Sie eine Serie. Vor dem Anlegen einer Serie prüft Planora auf Terminkollisionen und fragt gegebenenfalls nach.

Künftige Termine einer Serie erscheinen in Kalender, Tagesvorschau und Planungsraster als blasse Vorschau. Sie lassen sich dort weder verschieben noch abhaken, sperren aber ihren Zeitraum – etwa für die [Terminbuchung](./terminbuchung).

## Planungsraster

Das Planungsraster (**🗓 Planungsraster** im Ansichtsumschalter) zeigt einen Tag als Raster in Viertelstunden über Ihrer Arbeitszeit. Links stehen unter **📥 Einzuplanen** die fälligen, überfälligen und undatierten Aufgaben.

- Aufgabe ins Raster ziehen oder antippen und **＋ hier einplanen** wählen – damit erhält sie Datum und Uhrzeit
- **✨ Automatisch verteilen** füllt freie Lücken nach Label-Gewichtung und Priorität
- Kalendertermine und Serientermine liegen fest und können hier nicht verschoben werden
- Oben stehen Tagessoll, verplante Zeit und freie Zeit im Fenster
- Am heutigen Tag fallen vergangene, leere Viertelstunden weg; eine orange Marke zeigt die aktuelle Uhrzeit

Die Arbeitszeit des Rasters und den Standard-Zeitbedarf legen Sie unter [Einstellungen → Module](./einstellungen#module) fest. Kalender, die nur zur Information mitgeführt werden, lassen sich vom Raster ausnehmen – siehe [Terminbuchung](./terminbuchung#meine-kalender).

## Auf der Statusseite veröffentlichen

Eine gespeicherte Aufgabe kann als öffentliche Meldung im ITSM-Portal erscheinen. Im Bearbeiten-Fenster aktivieren Sie **📣 Auf der Statusseite veröffentlichen** und wählen:

| Feld | Beschreibung |
|---|---|
| Art der Meldung | Störung, Geplante Arbeiten oder Information |
| Betroffener Dienst | Optional, z. B. WLAN oder IServ |
| Öffentlicher Titel | Optional – leer übernimmt den Aufgabentitel |

Der Zustand der Meldung folgt automatisch dem Status der Aufgabe. Beschreibung und interne Notiz werden nie veröffentlicht.

:::note Befugnis
Veröffentlichen darf nur, wessen Rolle die Befugnis **Auf der Statusseite veröffentlichen** trägt – siehe [Administration](./administration#rollen).
:::

## Öffentlicher Statuslink

Mit **🌐 Öffentlich für Kunden sichtbar** erzeugt Planora einen Link zur Aufgabe, den Sie kopieren und weitergeben können. Details unter [Öffentliche Aufgaben-Statusseite](./terminbuchung#öffentliche-aufgaben-statusseite).

## Benachrichtigungen

Planora kann Sie über fällige Aufgaben per Desktop-Benachrichtigung oder als Push aufs Handy informieren. Die Einstellungen dafür finden Sie unter [Einstellungen → Push-Benachrichtigungen](./einstellungen#push-benachrichtigungen).
