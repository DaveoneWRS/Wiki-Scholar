---
sidebar_position: 5
---

# Wartung & Logbuch

Die **Wartung** hält fest, was turnusmäßig anfällt – Restore-Test, USV-Akkutausch, Firewall-Review, DGUV-V3-Prüfung, Inventur oder die Versionsprüfung eines Servers. Das **Logbuch** dokumentiert, was tatsächlich an einem System gemacht wurde.

## Wartungspläne

Unter **Wartung** stehen alle Wartungspläne mit Objekt, nächstem Termin und Zustand. Filter gibt es nach Rubrik und Zustand; die Suche trifft Titel, Beschreibung, Rechtsgrundlage, Rubrik, Zuständige sowie das Objekt am Plan (bei Geräten auch den Hostnamen). Vor dem Titel stehen Objektart und Objektname, damit gleichnamige Wartungen unterscheidbar bleiben.

### Plan anlegen

Mit **+ Wartungsplan** legen Sie einen Plan an:

| Feld | Beschreibung |
|---|---|
| Titel, Beschreibung | Was zu tun ist |
| Bezug | Gerät, Dienst, Verbund, Standort, Raum, Vertrag, Zertifikat, Domain oder Lizenz – oder **ohne Bezug**, etwa für das Notfallhandbuch |
| Rubrik | Themenfeld der Wartung (gepflegt unter **Wartungsrubriken** auf der Startseite der IT-Dokumentation) |
| Rhythmus | Anzahl und Einheit, z. B. alle 6 Monate; **Starr – ab Plantermin** oder **Gleitend – ab Erledigung** |
| Nächster Termin | Erster Fälligkeitstermin |
| Vorwarnzeit | Wie früh vorher die Wartung ansteht |
| Zuständig | Eine Person oder alle Administratoren |
| Kritikalität | Niedrig, Normal, Hoch oder Kritisch |
| Geschätzter Aufwand / Kosten | Minuten bzw. Euro je Durchführung |
| Prüfpunkte | Checkliste, die bei jeder Durchführung abgehakt wird |

:::tip Starr oder gleitend?
**Starr** hält den Stichtag – eine jährliche Pflichtprüfung wandert so nicht über die Jahre in den Sommer, auch wenn sie einmal später erledigt wurde. **Gleitend** zählt ab dem Tag der tatsächlichen Wartung.
:::

### Vorlagen

Über **📚 Aus Vorlage** wählen Sie aus einem Katalog vorgedachter Wartungen einer Schul-IT. Pflichtprüfungen sind mit **⚖️ Pflicht** und ihrer Rechtsgrundlage gekennzeichnet. Vorlagen sind keine Pläne: aktiviert wird jede einzeln mit **Übernehmen →**.

### Durchführung eintragen

Mit **Durchführung eintragen** dokumentieren Sie eine erledigte Wartung: Datum, Ergebnis (**In Ordnung**, **Mit Befund** oder **Nicht durchführbar**), abgehakte Prüfpunkte, Notiz und Anhänge. Damit geschieht in einem Zug:

- der Nachweis wird gespeichert, samt Text der Checkliste zum Zeitpunkt der Durchführung
- am Objekt entsteht ein Logbucheintrag
- der nächste Termin rückt weiter

**Nicht durchführbar** zählt nicht als Erledigung – der Termin bleibt stehen.

### Erinnerung

Sobald die Vorwarnzeit eines Plans erreicht ist, legt Planora automatisch eine [Aufgabe](/docs/planora/aufgaben) für die Zuständigen an. Fällige Wartungen erscheinen zudem in der Dashboard-Kachel **🛠️ Wartung & Ablauf** – ein Klick führt direkt zum Plan – und in der täglichen Push-Übersicht. Heute fällige Pläne tragen das Etikett **Heute fällig**.

### Wartungsampel

In den Listen der Geräte und Dienste zeigt ein Schraubenschlüssel neben dem Status, wie es um die Wartung steht:

| Farbe | Bedeutung |
|---|---|
| Grün | Eine wiederkehrende Wartung ist hinterlegt |
| Orange, blinkend | Mindestens ein laufender Plan hat seinen Termin verpasst |
| Rot | Es ist gar keine Wartung hinterlegt |

Der Tooltip nennt den Termin. Rot beschreibt also eine Lücke in der Dokumentation, nicht den Zustand des Geräts.

### Wartung am Objekt

Die Masken **Gerät bearbeiten**, **Dienst bearbeiten** und **Netzwerkgerät bearbeiten** sowie die Detailseiten zeigen die Wartungspläne des Objekts mit Ampel, **+ Wartungsplan**, Vorlagen und dem Eintragen einer Durchführung. Ein Plan wird dort sofort gespeichert, nicht erst mit **Speichern** des Formulars. Beim Anlegen eines neuen Objekts sind Wartungspläne erst nach dem ersten Speichern möglich.

Wird ein Objekt gelöscht, wandern seine Wartungspläne mit in den Papierkorb und kommen beim Wiederherstellen zurück.

## Logbuch

Das **Logbuch** in der Seitenleiste zeigt alle Einträge chronologisch. Einträge hängen an beliebigen Objekten und haben eine Art:

| Art | Verwendung |
|---|---|
| 🔧 Wartung | Durchgeführte Arbeiten – auch automatisch aus Wartungsplänen |
| 🚨 Störung | Ausfälle und Fehler; optional als **Datenschutzverletzung** gekennzeichnet |
| ✏️ Änderung | Konfigurationsänderungen, Updates |
| 📝 Notiz | Sonstige Vermerke |

Ein Eintrag kann einen **nachtragbaren Ereigniszeitpunkt** (auch nur als Datum) und **Anhänge** tragen. Die Sichtbarkeit lässt sich auf **Team** oder **Nur Administratoren** setzen. Filter gibt es nach Art, Objektart, Objekt und Raum sowie eine Suche.

Zur Kennzeichnung von Datenpannen siehe [Datenschutz](/docs/planora/it/datenschutz#datenschutzverletzungen).
