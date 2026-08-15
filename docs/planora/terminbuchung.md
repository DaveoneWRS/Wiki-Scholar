---
sidebar_position: 6
---

# Kalenderfreigabe & Terminbuchung

Kalender in Planora lassen sich nach außen öffnen: als reine Leseansicht, als Buchungsseite für freie Zeitslots oder als Formular für Terminvorschläge. Externe Personen benötigen dafür kein Planora-Konto – der Zugriff läuft ausschließlich über einen Link.

Alle Einstellungen finden Sie unter **Kalender → Einstellungen**.

## Meine Kalender

Legen Sie zunächst einen Kalender an und vergeben Sie Name, Beschreibung und Farbe. Solange kein Kalender existiert, stehen Freigabe und Buchung nicht zur Verfügung.

Zusätzlich steuern Sie hier, was im Kalender mit angezeigt wird:

- **Aufgaben mit Fälligkeitsdatum einblenden**
- **Notiz-ToDos mit Fälligkeit einblenden**

## Öffentlicher Kalender

Mit **Öffentlich einsehbar** erzeugt Planora einen **öffentlichen Kalender-Link** samt Kurz-URL. Über die **Sichtbarkeit der Details** legen Sie fest, wie viel Besucherinnen und Besucher sehen – von **nur Terminname** bis zur vollständigen Terminbeschreibung.

:::warning
Wer den Link kennt, sieht den Kalender. Geben Sie ihn nur bewusst weiter und deaktivieren Sie die Freigabe, wenn sie nicht mehr benötigt wird.
:::

## Terminbuchung

Mit **Buchungsfunktion aktivieren** wird aus dem Kalender eine Buchungsseite: Externe Personen wählen dort einen freien Zeitslot und tragen ihre Kontaktdaten ein.

### Konfiguration

| Einstellung | Beschreibung |
|---|---|
| Buchungs-Link | Adresse der öffentlichen Buchungsseite |
| Zeitslots | Wochentage und Zeitfenster, in denen gebucht werden kann |
| Slot-Länge (Min.) | Dauer eines Termins |
| Max. Buchungen | Obergrenze je Slot bzw. Zeitraum |
| Buchungsslots blockieren durch | Weitere Kalender, deren Termine Slots belegen |
| Buchungen müssen bestätigt werden | Anfragen erst nach Ihrer Freigabe verbindlich |

### Buchungsfelder

Neben Name und E-Mail lassen sich **benutzerdefinierte Buchungsfelder** ergänzen. Je Feld legen Sie Bezeichnung, Feldtyp, Optionen (eine je Zeile) und fest, ob es ein **Pflichtfeld** ist.

### Ablauf einer Buchung

1. Die externe Person öffnet den Buchungs-Link und wählt **Tag** und **Uhrzeit**
2. Kontaktdaten und weitere Angaben ausfüllen
3. **Termin buchen** – es erscheint eine Bestätigung
4. Ist die Bestätigungspflicht aktiv, landet die Anfrage bei Ihnen unter **ausstehende Buchungsanfragen** und wird dort **angenommen** oder **abgelehnt**

Über einen Stornierungslink kann die buchende Person den Termin selbst absagen; die Buchung erscheint dann als storniert.

## Terminvorschläge

Der Vorschlags-Link geht den umgekehrten Weg: Externe reichen einen Wunschtermin ein, statt einen vorgegebenen Slot zu wählen. Eingereichte Vorschläge sammeln sich in den Kalendereinstellungen und werden dort **angenommen** oder **abgelehnt**. Angenommene Vorschläge werden als Termin in den Kalender übernommen.

## Abonnement und Import

| Funktion | Beschreibung |
|---|---|
| ICS-Abonnement | Abo-Adresse (`.ics`), mit der Planora-Termine in Outlook, Apple Kalender oder Thunderbird erscheinen |
| CalDAV | Server-URL, Benutzername und Passwort (CalDAV-Token) für die Zwei-Wege-Anbindung |
| Importieren | Bestehende Termine aus einer ICS-Datei übernehmen |

:::note
Das CalDAV-Passwort ist ein eigener Token und nicht Ihr Anmeldepasswort. Behandeln Sie ihn wie ein Passwort – siehe auch [API-Token](./einstellungen#api-token).
:::

## Öffentliche Aufgaben-Statusseite

Zu einer Aufgabe kann ein Statuslink erzeugt werden. Externe sehen darüber ausschließlich Titel, Beschreibung, Fälligkeit, Unteraufgaben und den aktuellen Bearbeitungsstand – ohne Anmeldung und ohne Zugriff auf weitere Daten.
