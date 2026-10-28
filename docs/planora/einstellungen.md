---
sidebar_position: 18
---

# Einstellungen

Unter **Einstellungen** (unten in der Seitenleiste) passen Sie Planora an Ihre persönlichen Bedürfnisse an und verwalten Zugangsdaten sowie Module. Die Abschnitte stehen links bzw. auf schmalen Bildschirmen als Leiste oben; einzelne erscheinen nur mit dem passenden Modul oder mit Administratorrechten.

| Abschnitt | Inhalt |
|---|---|
| 🧩 Module | Module ein- und ausblenden, Dashboard- und Planungsoptionen |
| 🚪 Türschilder | Vorlauf für Schilder an Aufgaben (nur mit Modul Schilder) |
| 🔔 Push-Benachrichtigungen | Push aufs Handy und Desktop-Benachrichtigungen |
| ✉️ E-Mail-Versand | Postfach für ausgehende Mails (Admin) – siehe [Administration](./administration#e-mail-versand) |
| 🔑 Lizenz & Updates | Lizenz, Version und Updates – siehe [Administration](./administration#lizenz--updates) |
| 🔌 API-Tokens | Zugriff für andere Programme |
| 📦 Daten | Eigene Daten exportieren und importieren – siehe [Administration](./administration#daten-exportieren-und-importieren) |
| 🗄️ Datenbank-Backup | Verschlüsselte Gesamtsicherung (Admin) – siehe [Administration](./administration#datenbank-backup) |
| 🔒 Passwort | Passwort ändern |
| 📊 Statistiken | Auswertungen – siehe [Statistiken](./statistiken) |
| 👥 Benutzer | Benutzerverwaltung (Admin) – siehe [Administration](./administration#benutzerverwaltung) |
| 🛡️ Rollen | Rollen, Module und Befugnisse (Admin) – siehe [Administration](./administration#rollen) |

## Persönliche Einstellungen

| Einstellung | Beschreibung |
|---|---|
| Passwort ändern | Aktuelles und neues Passwort eingeben (im Demo-Modus deaktiviert) |
| Desktop-Benachrichtigungen | Im Abschnitt **Push-Benachrichtigungen** prüfen, ob der Browser Meldungen anzeigen darf |
| Dunkelmodus | Schalter oben in der Seitenleiste neben dem Einklapp-Pfeil (Desktop-Ansicht) |

## Module

Planora ist modular aufgebaut. Jedes Modul, das Ihre Rolle freigibt, können Sie hier für sich ein- oder ausblenden. Nicht benötigte Bereiche verschwinden aus der Navigation. Ein Modul, das Ihre Rolle nicht freigibt, lässt sich hier nicht einschalten.

| Modul | Beschreibung |
|---|---|
| 📁 Projektverwaltung | Aufgaben, Projekte und Labels |
| 📝 Notizen | Post-it-Board mit Kurznotizen, ToDos und Telefonnotizen |
| ⏰ Zeiterfassung | Arbeitszeiterfassung, Urlaubsverwaltung und Stundenkonto |
| 📅 Kalender | Kalender, Terminverwaltung, iCal/CalDAV und Buchungssystem |
| 🚪 Schilder | Digitale Türschilder und Raumanzeigen |
| 🗂️ IT-Dokumentation | Geräte, Netze, Dienste, Verträge und Logbuch der IT-Infrastruktur |
| 🛡️ Datenschutz | Verarbeitungsverzeichnis, TOM und Datenpannen |
| 📊 Statistiken | Aufgaben- und Zeitauswertungen |
| 👥 Benutzer & Rollen | Benutzerkonten und Rollen verwalten (nur Administratoren) |

Zusätzlich finden Sie hier:

| Option | Beschreibung |
|---|---|
| 🔮 Morgen-Vorschau | Zeigt auf dem Dashboard ab einer bestimmten Uhrzeit die Aufgaben von morgen |
| Standard-Zeitbedarf | Vorgabe für Aufgaben ohne eigenen Zeitbedarf |
| 🗓 Arbeitszeit (Planungsfenster) | Ab Arbeitsbeginn wird der Zeitbedarf fälliger Aufgaben in den Tag eingeplant; gilt für das [Planungsraster](./aufgaben#planungsraster) und die Verfügbarkeit bei der [Terminbuchung](./terminbuchung) |

## Türschilder

Hier stellen Sie ein, wie viele Minuten vor dem Termin das Schild einer Aufgabe erscheint (0 = punktgenau). Darunter steht, welche Schilder gerade an Aufgaben hängen. Details unter [Schilder an Aufgaben](./schilder#schilder-an-aufgaben).

## Push-Benachrichtigungen

Fällige Aufgaben, Notiz-ToDos, Termine sowie Wartungen und Ablauffristen können als Push aufs Handy gehen – auch wenn Planora nicht geöffnet ist. Zustellweg ist **ntfy**.

1. Eigenes **Topic** festlegen (ein Zufallsvorschlag ist per Klick erzeugbar) und dasselbe Topic in der ntfy-App abonnieren
2. **Vorlaufzeit** in Minuten einstellen
3. Unter **Wofür Meldungen kommen** wählen: 📋 Aufgaben, 🛠️ Wartung & Ablauf (Tagesübersicht ab 7 Uhr), 📝 Notiz-ToDos, 📅 Termine
4. Mit **Test-Meldung senden** die Einrichtung kontrollieren

Adresse und Zugangs-Token des ntfy-Servers hinterlegen Administratoren für alle – siehe [Administration](./administration#push-benachrichtigungen). Mit **🔔 Test-Benachrichtigung** prüfen Sie außerdem die Desktop-Benachrichtigungen dieses Browsers.

## API-Token

Für die Nutzung der Planora-API können persönliche **API-Token** erstellt werden:

1. **Einstellungen → API-Tokens** öffnen
2. Namen vergeben und den Zugriff wählen
3. Token erstellen
4. Den generierten Token kopieren – er wird nur einmal angezeigt

| Zugriff | Erlaubt |
|---|---|
| Vollzugriff | Lesen und Schreiben aller eigenen Daten |
| IT-Dokumentation nur lesen | Nur Abrufe aus der IT-Dokumentation, z. B. für ein Monitoring |
| Nur Statusseite lesen | Nur den Meldungs-Feed der Statusseite |
| Nur Überwachungsstatus melden | Nur Ergebnisse eines Monitorings an Geräte und Dienste melden |

Die API nutzen unter anderem die Android-App (Abgleich auch offline), Scholar für das Türschild und der Antwort-Assistent (Add-on für Betterbird bzw. Firefox an Zammad), der seinen Textvorrat in Planora ablegt.

:::warning
Behandeln Sie API-Token wie Passwörter. Teilen Sie diese nicht mit anderen Personen und vergeben Sie Vollzugriff nur, wenn er wirklich gebraucht wird.
:::

## Administrationsbereich

Admins haben zusätzlich Zugriff auf E-Mail-Versand, Datenbank-Backup, Benutzer und Rollen. Details finden Sie unter [Administration](./administration).
