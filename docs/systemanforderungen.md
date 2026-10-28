---
sidebar_position: 2
---

# Systemanforderungen

Diese Seite fasst zusammen, was für den Betrieb von **Scholar** (einschließlich Elternportal) und **Planora** benötigt wird – am Arbeitsplatz, auf dem Server und bei der eingesetzten Peripherie.

## Arbeitsplatz

Beide Anwendungen laufen vollständig im Browser. Eine Installation auf dem Endgerät ist nicht erforderlich.

| Anforderung | Empfehlung |
|---|---|
| Browser | Aktuelle Version von Chrome, Edge, Firefox oder Safari – für Scholar und das Elternportal mindestens Chrome/Edge 111, Firefox 128 bzw. Safari 16.4 (auch auf iPhone/iPad) |
| JavaScript | Muss aktiviert sein |
| Cookies | Müssen für die Anwendungsdomain zugelassen sein |
| Bildschirmauflösung | Mindestens 1280 × 800; für Listen- und Zeugnisansichten empfohlen 1920 × 1080 |
| Netzwerk | Stabile Verbindung zum Schulnetz bzw. zum Server |

:::note Ältere Browser
Internet Explorer sowie länger nicht aktualisierte Browserversionen werden nicht unterstützt. Fehlende Schaltflächen oder leere Ansichten sind fast immer auf einen veralteten Browser zurückzuführen.
:::

### Mobile Nutzung

Die Oberflächen sind responsiv und lassen sich auf Tablets und Smartphones bedienen. Für längere Erfassungsarbeiten – Noteneingabe, Lernmittelausgabe, Zeugnisdruck – ist ein Arbeitsplatzrechner deutlich praktikabler.

Für die [Lernmittelausgabe](/docs/scholar/ausgabe) gibt es zusätzlich eine Android-App, die per QR-Code mit Scholar gekoppelt wird.

Für Planora gibt es eine Android-App, die über die API mit einem [API-Token](/docs/planora/einstellungen#api-token) angebunden wird und Aufgaben, Termine, Notizen, Zeiten und Türschilder auch offline abgleicht.

## Server – Scholar

| Komponente | Anforderung |
|---|---|
| PHP | Version 8.4 oder neuer |
| PHP-Erweiterungen | `intl`, `iconv`, `zip` sowie die Laravel-Standarderweiterungen |
| Framework | Laravel 13 mit Livewire 4 |
| Datenbank | MySQL 8 oder MariaDB 10.6 und neuer |
| Webserver | Apache oder nginx mit HTTPS |
| Composer | Für Installation und Updates |
| Node.js | Nur zum Bauen der Frontend-Assets erforderlich |
| Cronjob | Laravel-Scheduler im Minutentakt |
| Queue-Worker | Dauerhaft laufender Prozess für Hintergrundaufgaben (E-Mails, Importe, PDFs) |
| Speicherplatz | Abhängig von Dokumenten, Zeugnis-PDFs und Backups – mindestens 20 GB einplanen |

Optional: **Redis** für Cache und Sessions bei größeren Installationen.

Für den Versand von E-Mails (Zahlungsaufforderungen, Benachrichtigungen, Fehlermeldungen geplanter Aufgaben) wird ein **SMTP-Zugang** benötigt.

:::note Firewall- und Webserverregeln
Seit dem Wechsel auf Livewire 4 liefert Scholar die Skripte der interaktiven Masken unter einem Pfad der Form `/livewire-<Kennung>/` statt unter `/livewire/` aus. Bestehende Freigabe- oder Sperrregeln für `/livewire/` müssen entsprechend angepasst werden.
:::

## Server – Elternportal

| Komponente | Anforderung |
|---|---|
| PHP | Version 8.4 oder neuer |
| Framework | Laravel 13 mit Livewire 4 |
| Datenbank | MySQL bzw. MariaDB |
| Webserver | Apache oder nginx mit HTTPS, aus dem Internet erreichbar |
| Node.js | Nur zum Bauen der Frontend-Assets erforderlich |
| SMTP-Server | Für Bestätigungs- und Benachrichtigungsmails |

Das Elternportal tauscht über eine geschützte Schnittstelle Daten mit Scholar aus (Schülerdaten, AGs, Lernmittel, Zahlungsstatus). Beide Server müssen sich daher gegenseitig erreichen können.

## Server – Planora

| Komponente | Anforderung |
|---|---|
| PHP | Version 8.2 oder neuer (empfohlen 8.4) |
| Framework | Laravel 12 mit Livewire 4 |
| Datenbank | SQLite (Standard), alternativ MySQL/MariaDB oder PostgreSQL – das [Datenbank-Backup](/docs/planora/administration#datenbank-backup) aus der Oberfläche setzt SQLite voraus |
| Webserver | Apache oder nginx mit HTTPS |
| Cronjob | Laravel-Scheduler im Minutentakt – Voraussetzung für Erinnerungen, Push-Benachrichtigungen, ICS-Abonnements, Wartungsaufgaben und die automatischen Löschfristen |
| Push-Dienst | Optional ein **ntfy**-Server, selbst gehostet oder öffentlich |
| E-Mail | Optional ein **SMTP-Zugang** für Buchungsbestätigungen – einzurichten in der Oberfläche |
| Reverse-Proxy | Bei IP-Sperre für Türschild-Displays nur den eigenen Proxy als vertrauenswürdig eintragen (`TRUSTED_PROXIES`) |

Details zur Einrichtung der Benachrichtigungen finden Sie unter [Administration](/docs/planora/administration#push-benachrichtigungen).

## Peripherie

| Gerät | Einsatz | Hinweis |
|---|---|---|
| Barcode-Scanner | Schülerausweise, Bücher, Geräte, Bibliothek | Handelsübliche USB-Scanner im Tastaturmodus; die Eingabe landet direkt im fokussierten Feld |
| Etikettendrucker | Barcode-Etiketten für Bücher und Inventar | Netzwerkfähiger ZPL-Drucker (im Einsatz: Zebra ZT220), erreichbar über IP bzw. Druckerwarteschlange |
| Standarddrucker | Listen, Zeugnisse, Protokolle | A4-Drucker mit PDF-Ausgabe |
| Touch-Display oder Tablet | [Kiosk-Interface](/docs/scholar/fallmanagement#kiosk-interface), [Türschilder](/docs/planora/schilder) | Dauerbetrieb im Kioskmodus des Browsers; der Scholar-Kiosk ist nur von freigegebenen IP-Adressen erreichbar |
| Android-Gerät | Mobile Lernmittelausgabe | Kopplung per QR-Code |
| Lautsprecher | Sprachausgabe an Ausgabe-, Geräte- und Lagerscannern | Optional; Ansagen über ElevenLabs, ersatzweise über die Browserstimme |

## Netzwerk und Schnittstellen

Je nach genutzten Modulen müssen folgende Systeme vom Server aus erreichbar sein:

| Dienst | Zweck |
|---|---|
| RADIUS-Server | WLAN-Zugänge für Schüler und Mitarbeitende |
| OpnSense-Firewall | Abgleich der Benutzer- und Zugriffsregeln |
| Microsoft Graph / Office 365 | E-Mail- und Kontenabgleich |
| IServ | Konten und Passwort-Zurücksetzungen |
| moin.schule | Abgleich der Anmeldenamen |
| WebUntis | Stundenplan-, Raum- und Vertretungsdaten |
| Magellan | Import der Schüler- und Klassendaten (Dateiimport) |
| Elternportal | Austausch von Schüler-, AG- und Lernmitteldaten mit Scholar |
| PaperPrintScan | Übertragung von Benutzern und Kopiercodes an die Druck- und Kopierverwaltung |
| Planora | Aufgaben aus On-/Offboarding und Self-Service |
| Ferien-API (ferien-api.de) | Import der Schulferien |
| isbn.de | Buchcover, Preise und Verlagsvorschläge für Lernmittel und Bibliothek |
| ElevenLabs | Sprachausgabe der Scanner (optional) |
| SMTP-Server | E-Mail-Versand |
| ntfy | Push-Benachrichtigungen in Planora |

In Scholar zeigt die Kachel **API-Status** in der [Administration](/docs/scholar/administration#api-status) per Ampel, ob die eingerichteten Schnittstellen erreichbar sind.

## Betrieb und Sicherheit

- **HTTPS** ist verpflichtend – beide Anwendungen verarbeiten personenbezogene Daten
- **Backups** der Datenbank und des Dateispeichers täglich, Wiederherstellung regelmäßig testen
- **Updates** von PHP, Datenbank und Anwendung zeitnah einspielen
- **Zugriff** möglichst auf das Schulnetz bzw. VPN beschränken; öffentlich erreichbar müssen nur das Elternportal sowie die Türschild- und Buchungsseiten von Planora sein; der Scholar-Kiosk ist auf freigegebene IP-Adressen beschränkt

:::tip Fragen zur Installation
Diese Seite beschreibt die Anforderungen aus Sicht der Anwenderinnen und Anwender. Für Installation, Migration und Betrieb wenden Sie sich an die Schul-IT bzw. an den Support.
:::
