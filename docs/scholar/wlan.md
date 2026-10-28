---
sidebar_position: 12
---

# WLAN-Verwaltung

Das WLAN-Modul verwaltet den Internetzugang für Schülerinnen, Schüler und Mitarbeitende über das RADIUS-System.

## WLAN-Zugänge

### Schülerzugang verwalten

Der WLAN-Zugang eines Schülers kann direkt im Schülerprofil oder in der WLAN-Verwaltung gesteuert werden:

| Aktion | Beschreibung |
|---|---|
| Aktivieren / Deaktivieren | Sofortige Umschaltung |
| Zeitgesteuerte Aktivierung | WLAN zu einem bestimmten Zeitpunkt freischalten |
| Schulgelände-Zugang | Separaten Außenbereich-Zugang steuern |

### Klassen-WLAN

Für ganze Klassen kann der WLAN-Zugang auf einmal aktiviert oder deaktiviert werden. Lehrkräfte finden dazu im Menü **Meine Klassen** die Schnellaktionen **45 Minuten** und **90 Minuten** sowie die Übersicht **Schüler im WLAN** mit Filtern nach Klasse, WLAN-Status und Online-Status.

### WLAN-Passwort

Das WLAN-Kennwort lässt sich einzeln neu setzen – bei Schülerinnen und Schülern direkt im Profil –, ohne den Scholar-Login zu verändern. Ein neues Master-Passwort im [Mitarbeiter-OnBoarding](./mitarbeiter#onboarding-durchführen) setzt den WLAN-Zugang automatisch mit.

## WLAN-Voucher

Temporäre Voucher ermöglichen Gästen oder Veranstaltungsteilnehmern befristeten Internetzugang:

- Voucher anzeigen
- Neue Codes generieren
- Abgelaufene Voucher löschen

## Dauerzugang

Für bestimmte Personen oder Geräte kann ein dauerhafter WLAN-Zugang eingerichtet werden (**Scholar-WiFi → Permanent**):

| Feld | Beschreibung |
|---|---|
| Benutzername | Wird mit dem eingestellten Präfix (Standard `pw-`) angelegt; das Präfix steht sichtbar vor dem Eingabefeld |
| Grund | **Pflichtfeld** – warum der Zugang angelegt wird, z. B. Referendariat, Handwerksfirma bis Projektende, Gastdozent |
| E-Mail-Adresse | Optional; ist sie angegeben, gehen die Zugangsdaten automatisch per Mail raus |
| Ablaufdatum | Optional; nach Ablauf wird der Zugang automatisch entfernt |
| Passwort | Optional; leer lassen, um automatisch ein Passwort zu erzeugen |

Die Übersicht der angelegten Zugänge ist eine Tabelle mit Benutzername, E-Mail, Grund, Anlagedatum mit Uhrzeit und Gültigkeit; die neuesten Einträge stehen oben. Unbefristete Zugänge sind gekennzeichnet, abgelaufene werden bis zum nächsten Abgleich mit dem RADIUS-Server rot markiert. Die Suche filtert über Benutzername, E-Mail und Grund. Ältere Einträge ohne Grund bleiben nutzbar und erscheinen als „Kein Grund hinterlegt".

## IP-Zugangsverwaltung

Der Zugang zu Scholar selbst kann auf bestimmte IP-Adressen eingeschränkt werden:

| Aktion | Beschreibung |
|---|---|
| IP hinzufügen | Neue erlaubte IP-Adresse eintragen |
| IP bearbeiten | Adresse oder Kommentar ändern |
| IP löschen | Adresse aus der Whitelist entfernen |
| Kommentar hinzufügen | Zweck der IP-Adresse dokumentieren |
| Anfragen genehmigen | IP-Anfragen von Nutzern prüfen |
| Offener Modus | IP-Beschränkung temporär aufheben |
| Sammelaktionen | Mehrere IPs gleichzeitig verwalten |

Die Liste lässt sich nach Status, IP, Kommentar und **zuletzt gesehen** sortieren; standardmäßig stehen die zuletzt genutzten Adressen oben, nie genutzte am Ende. Die IP-Freigaben steuern auch, von welchen Geräten Kiosk, Scanner und Selbstservice-Stationen erreichbar sind.

:::info
Mitarbeitende können über das Selbstservice-Portal eine neue IP-Adresse für den Scholar-Zugang beantragen. Administratoren genehmigen oder lehnen diese Anfragen hier ab.
:::
