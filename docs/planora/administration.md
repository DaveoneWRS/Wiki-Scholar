---
sidebar_position: 19
---

# Administration

Administratorinnen und Administratoren verwalten in Planora Benutzerkonten und Rollen, richten Mailversand und Push ein, sichern die Datenbank und pflegen Lizenz sowie Updates. Die Bereiche erreichen Sie über **Einstellungen**; einzelne Punkte erscheinen nur mit Administratorrechten.

## Benutzerverwaltung

Unter **Einstellungen → 👥 Benutzer** zeigt die Liste Name, E-Mail, Rolle und Erstellungsdatum.

| Funktion | Beschreibung |
|---|---|
| + Neuer Benutzer | Konto mit Name, E-Mail, Passwort und Rolle erstellen |
| Bearbeiten | Stammdaten und Rolle ändern |
| Löschen | Konto nach Rückfrage **endgültig** entfernen – samt allen zugehörigen Daten |

Jedes Konto hat genau eine Rolle; Konten ohne Rolle sind mit **Keine Rolle** markiert. Jedes Konto sieht ausschließlich seine eigenen Aufgaben, Projekte, Notizen und Zeiten – außer, sie wurden ausdrücklich [freigegeben](./projekte#projekt-freigeben).

:::warning
Das Löschen eines Benutzers kann nicht rückgängig gemacht werden. Schattenkonten von [Gastzugängen](/docs/planora/it/zugaenge#gastzugänge) erscheinen nicht in der Liste und werden über den Gastzugang gesperrt.
:::

## Rollen

Unter **Einstellungen → 🛡️ Rollen** legen Sie Rollen an und bestimmen, was sie mitbringen:

| Einstellung | Beschreibung |
|---|---|
| Name der Rolle | Bezeichnung, z. B. „Lehrkraft" oder „Datenschutz" |
| 🛡️ Administratorrechte | Zugriff auf alle Verwaltungsbereiche |
| Freigegebene Module | Welche [Module](./einstellungen#module) die Rolle sieht |
| Besondere Befugnisse | Einzelne, folgenreiche Handlungen innerhalb eines Moduls |

Was eine Rolle nicht freigibt, sieht der Benutzer nicht – auch nicht über den persönlichen Modulschalter.

### Besondere Befugnisse

| Befugnis | Erlaubt |
|---|---|
| 📣 Auf der Statusseite veröffentlichen | Aufgaben als öffentliche Meldung im ITSM-Portal veröffentlichen – siehe [Aufgaben](./aufgaben#auf-der-statusseite-veröffentlichen) |
| 📋 Verarbeitungsverzeichnis ändern | Kopfangaben des Verzeichnisses ändern sowie Verfahren und TOM-Maßnahmen löschen – siehe [Datenschutz](/docs/planora/it/datenschutz) |

Anders als Module können Benutzer Befugnisse nicht selbst abschalten. Erteilte Befugnisse stehen als Plakette an der Rolle in der Liste.

:::tip Rolle für die Datenschutzbeauftragte
Eine Rolle, die nur das Modul **Datenschutz** freigibt, sieht das Verarbeitungsverzeichnis, aber keine Geräte, Netze oder Zugänge der IT-Dokumentation.
:::

## E-Mail-Versand

Unter **Einstellungen → ✉️ E-Mail-Versand** hinterlegen Sie ein Postfach, aus dem Planora Mails verschickt – etwa die Bestätigungen der [Terminbuchung](./terminbuchung#e-mails-und-verwaltung-durch-gäste).

| Feld | Beschreibung |
|---|---|
| Mailversand aktiv | Abgeschaltet landen Mails nur im Log, es geht nichts hinaus |
| Postausgang (SMTP) | Server, Port, Verschlüsselung, Benutzername, Passwort |
| Absender | Name und Adresse |
| Test-Mail senden | Speichert die Einstellungen und verschickt sofort eine Probe-Mail |

Das Passwort wird verschlüsselt gespeichert und danach nicht mehr angezeigt.

## Push-Benachrichtigungen

Fällige Aufgaben, Notiz-ToDos, Termine sowie Wartungen und Ablauffristen können als Push aufs Handy gehen. Zustellweg ist **ntfy**, wahlweise selbst gehostet.

1. Administration: **Adresse** des ntfy-Servers und **Zugangs-Token** hinterlegen (gilt für alle Benutzer) – der Token wird verschlüsselt gespeichert und danach nicht mehr angezeigt
2. Mit **Verbindung prüfen** die Erreichbarkeit kontrollieren
3. Jede Person richtet Topic, Vorlaufzeit und Meldungsarten selbst ein – siehe [Einstellungen](./einstellungen#push-benachrichtigungen)

:::note
Der Versand hängt am Scheduler des Servers. Läuft dieser nicht, kommen keine Benachrichtigungen an.
:::

## Daten exportieren und importieren

Unter **Einstellungen → 📦 Daten** sichern Sie alles, was zu Ihrem Konto gehört, als JSON-Datei: Aufgaben mit Unteraufgaben und Labels, Projekte, Kalender mit Terminen und Buchungen, Notizen, Zeiterfassung samt Arbeitszeitmodell und Türschilder. Mit dem Modul IT-Dokumentation kommt deren kompletter Bestand dazu.

Beim Einlesen wählen Sie die Betriebsart:

| Betriebsart | Wirkung |
|---|---|
| Ergänzen | Legt alles zusätzlich an und löscht nichts; gleichnamige Katalogeinträge (z. B. Standorte, Hersteller, Tags) werden wiederverwendet |
| Ersetzen | Stellt den Stand der Datei her und verwirft, was seitdem dazugekommen ist – Bestätigung durch Eintippen von **ERSETZEN** |

Nach dem Import meldet Planora je Tabelle, was angelegt, wiederverwendet und übersprungen wurde.

:::warning
Die Exportdatei enthält Klartext-Daten. Bewahren Sie sie so sicher auf wie Planora selbst. Dateianhänge werden nur mit ihren Angaben gesichert, nicht mit ihrem Inhalt – dafür gibt es das [Datenbank-Backup](#datenbank-backup).
:::

## Datenbank-Backup

Unter **Einstellungen → 🗄️ Datenbank-Backup** laden Administratoren die komplette Datenbank mit allen Konten verschlüsselt herunter – auf Wunsch zusammen mit allen Dateianhängen.

### Sicherung herunterladen

1. **Dateianhänge mitsichern** an- oder abwählen; Anzahl und Größe werden angezeigt
2. **Passwort für die Sicherung** vergeben (mindestens 12 Zeichen) und bestätigen
3. Herunterladen – es entsteht eine Datei `….tar.gz.enc`

:::warning
Ohne das Passwort lässt sich die Sicherung nicht mehr öffnen – es wird nirgends gespeichert. In der Datenbank verschlüsselte Werte (etwa das Mail-Passwort) brauchen zum Lesen außerdem den `APP_KEY` aus der `.env`; bewahren Sie ihn getrennt von der Sicherung auf.
:::

Jeder Download wird mit Benutzer und IP-Adresse protokolliert. Die Sicherung lässt sich auch ohne Planora mit OpenSSL und `tar` bzw. 7-Zip öffnen; die Anleitung steht im Abschnitt selbst.

### Sicherung einspielen

1. Sicherungsdatei (`.tar.gz.enc`) wählen und das **Passwort der Sicherung** eingeben
2. Festlegen, was mit **Einträgen, die es schon gibt** (gleiche ID), geschieht: **Ignorieren** oder **Überschreiben**
3. Optional **Dateianhänge zurückspielen** – nach derselben Regel
4. **Sicherung zurückspielen**

Die Sicherung wird mit dem aktuellen Stand zusammengeführt; gelöscht wird dabei nie etwas. **Überschreiben** verlangt die Bestätigung durch Eintippen von **ÜBERSCHREIBEN**. Alles läuft in einem Zug – schlägt etwas fehl, bleibt der alte Stand. Sicherungen aus neueren Planora-Versionen werden abgelehnt. Danach zeigt Planora je Tabelle, was übernommen, ausgelassen oder überschrieben wurde.

:::tip
Laden Sie vor dem Einspielen eine aktuelle Sicherung herunter.
:::

:::note
Das Datenbank-Backup unterstützt nur Installationen mit SQLite-Datenbank. Im Demo-Modus ist es gesperrt.
:::

## Lizenz & Updates

| Angabe | Beschreibung |
|---|---|
| Lizenzschlüssel | Schlüssel dieser Installation |
| Domain | Domain, auf die die Lizenz ausgestellt ist |
| Aktuelle Version | Installierter Stand |
| Neueste Version | Verfügbarer Stand |
| Update-Kanal | Kanal, aus dem Updates bezogen werden |
| Zuletzt geprüft | Zeitpunkt der letzten Prüfung |

Mit **🔍 Lizenz prüfen** und **🔄 Auf Updates prüfen** fragen Sie den aktuellen Stand ab; ein verfügbares Update lässt sich direkt installieren. Im Demo-Modus sind Lizenz- und Update-Funktionen deaktiviert. Die Versionshistorie finden Sie im [Planora-Changelog](/changelogplanora).

## Wartung

Administratoren können aus der Anwendung heraus **🗄️ Migrationen ausführen**, **Assets neu bauen** und den **♻️ Konfigurations-Cache erneuern** – etwa nach einem Update. Diese Funktionen sind für den laufenden Betrieb gedacht und sollten außerhalb der Hauptarbeitszeiten genutzt werden.
