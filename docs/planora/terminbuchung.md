---
sidebar_position: 6
---

# Kalenderfreigabe & Terminbuchung

Kalender in Planora lassen sich nach außen öffnen: als reine Leseansicht, als Buchungsseite für freie Zeitslots oder als Formular für Terminvorschläge. Externe Personen benötigen dafür kein Planora-Konto – der Zugriff läuft ausschließlich über einen Link.

Alle Einstellungen finden Sie im Kalender unter **Kalender verwalten**. Die Seite ist in die Reiter **Eingang**, **Kalender**, **Freigabe & iCal**, **Buchung** und **Vorschläge** gegliedert.

## Meine Kalender

Legen Sie zunächst einen Kalender an und vergeben Sie Name, Beschreibung und Farbe. Solange kein Kalender existiert, stehen Freigabe und Buchung nicht zur Verfügung.

Zusätzlich steuern Sie je Kalender:

| Einstellung | Beschreibung |
|---|---|
| Aufgaben mit Fälligkeitsdatum einblenden | Aufgaben erscheinen im Kalender |
| Notiz-ToDos mit Fälligkeit einblenden | [Notiz-ToDos](./notizen#todo-notizen) erscheinen im Kalender |
| Termine sperren Zeit im Planungsraster | Abgeschaltet bleiben die Termine sichtbar, belegen im [Planungsraster](./aufgaben#planungsraster) aber keine Zeit – sinnvoll für abonnierte Feeds oder Geburtstage |
| ICS-Abonnement URL | Optional: fremden Kalender per Adresse abonnieren; die Termine werden stündlich abgerufen |

## Öffentlicher Kalender

Mit **Öffentlich einsehbar** erzeugt Planora einen **öffentlichen Kalender-Link** samt optionaler Kurz-URL. Über die **Sichtbarkeit der Details** legen Sie fest, wie viel Besucherinnen und Besucher sehen: **Nur „Besetzt" anzeigen**, **Nur Terminname** oder **Vollständig (Titel, Beschreibung, Ort)**.

:::warning
Wer den Link kennt, sieht den Kalender. Geben Sie ihn nur bewusst weiter und deaktivieren Sie die Freigabe, wenn sie nicht mehr benötigt wird.
:::

## Terminbuchung

Mit **Buchungsfunktion aktivieren** wird aus dem Kalender eine Buchungsseite: Externe Personen wählen dort einen freien Zeitslot und tragen ihre Kontaktdaten ein.

### Konfiguration

| Einstellung | Beschreibung |
|---|---|
| Buchungs-Link | Adresse der öffentlichen Buchungsseite; über **Erneuern** sofort ungültig machen |
| Zeitslots | Wochentage und Zeitfenster, in denen gebucht werden kann (Schnellauswahl Mo–Fr, Sa+So, Alle) |
| Slot-Länge (Min.) | Dauer eines Termins |
| Max. Buchungen | Obergrenze je Slot bzw. Zeitraum |
| Mindestvorlaufzeit | Wie kurzfristig gebucht werden darf (0 = sofort buchbar) |
| Buchungshorizont | Wie weit in die Zukunft buchbar |
| Buchungsslots blockieren durch | Weitere Kalender, deren Termine Slots belegen |
| Buchungen müssen bestätigt werden | Anfragen erst nach Ihrer Freigabe verbindlich |

Belegte Zeit wird automatisch aus den Slots herausgenommen. Dazu zählen neben Terminen auch fällige Aufgaben mit **Zeitbedarf** und die künftigen Termine von Serienaufgaben.

:::note Link erneuern
**Erneuern** macht nur den Buchungs-Link ungültig – iCal-Abos, der öffentliche Kalender-Link und die Verwaltungslinks bereits gebuchter Gäste bleiben bestehen. Ist eine Kurz-URL (`/book/…`) gesetzt, bleibt sie erreichbar; ändern oder entfernen Sie sie bei Bedarf unter **Kalender bearbeiten**.
:::

### Buchungsfelder

Neben Name und E-Mail lassen sich **benutzerdefinierte Buchungsfelder** ergänzen. Je Feld legen Sie Bezeichnung, Feldtyp (z. B. Text einzeilig oder mehrzeilig, Auswahl), Optionen (eine je Zeile) und fest, ob es ein **Pflichtfeld** ist. Die Reihenfolge ändern Sie per Drag-and-drop am Griff **⠿**; sie gilt sofort für das öffentliche Formular.

### Ablauf einer Buchung

1. Die externe Person öffnet den Buchungs-Link und wählt **Tag** und **Uhrzeit**
2. Kontaktdaten und weitere Angaben ausfüllen
3. **Termin buchen** – es erscheint eine Bestätigung
4. Ist die Bestätigungspflicht aktiv, landet die Anfrage bei Ihnen im Reiter **Eingang** und in der Dashboard-Kachel **Buchungsanfragen** und wird dort **angenommen** oder **abgelehnt**

### E-Mails und Verwaltung durch Gäste

Ist der [E-Mail-Versand](./administration#e-mail-versand) eingerichtet, verschickt Planora bei Anlage, Bestätigung, Verschiebung und Absage eine Mail an den Gast und an Sie – jeweils mit Kalenderdatei (`.ics`) im Anhang. Die Mails an Gäste sind in der Sie-Form gehalten.

Über den Link in der Mail kann der Gast seinen Termin ohne Konto selbst **verschieben** oder **absagen**. Die Buchung erscheint danach entsprechend geändert bzw. storniert.

## Terminvorschläge

Der Vorschlags-Link geht den umgekehrten Weg: Externe reichen einen Wunschtermin ein, statt einen vorgegebenen Slot zu wählen. Eingereichte Vorschläge sammeln sich im Reiter **Eingang** und werden dort **angenommen** oder **abgelehnt**. Angenommene Vorschläge werden als Termin in den Kalender übernommen.

## Abonnement und Import

| Funktion | Beschreibung |
|---|---|
| ICS-Abonnement | Abo-Adresse (`.ics`), mit der Planora-Termine in Outlook, Apple Kalender oder Thunderbird erscheinen (Lesezugriff) |
| CalDAV | Server-URL, Benutzername und Passwort (CalDAV-Token) für die Zwei-Wege-Anbindung |
| Importieren | Bestehende Termine aus einer ICS-Datei übernehmen |

:::note
Das CalDAV-Passwort ist ein eigener Token und nicht Ihr Anmeldepasswort. Behandeln Sie ihn wie ein Passwort – siehe auch [API-Token](./einstellungen#api-token).
:::

## Öffentliche Aufgaben-Statusseite

Zu einer Aufgabe kann ein Statuslink erzeugt werden (**🌐 Öffentlich für Kunden sichtbar** im Bearbeiten-Fenster). Externe sehen darüber ausschließlich Titel, Fälligkeit, den aktuellen Bearbeitungsstand und den Fortschritt der Unteraufgaben – die Beschreibung nur, wenn **Beschreibung öffentlich anzeigen** gesetzt ist. Interne Notizen und weitere Daten bleiben verborgen, eine Anmeldung ist nicht nötig.
