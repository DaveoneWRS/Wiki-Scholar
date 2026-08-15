---
sidebar_position: 13
---

# Administration

Administratorinnen und Administratoren verwalten in Planora die Benutzerkonten, schalten Module frei und pflegen Lizenz sowie Updates. Die Bereiche erreichen Sie über **Einstellungen**; einzelne Punkte erscheinen nur mit Administratorrechten.

## Benutzerverwaltung

Die Benutzerliste zeigt Name, E-Mail, Rolle und Erstellungsdatum.

| Funktion | Beschreibung |
|---|---|
| Benutzer anlegen | Konto mit Name, E-Mail, Passwort und Rolle erstellen |
| Bearbeiten | Stammdaten und Rolle ändern |
| Löschen | Konto entfernen – Daten bleiben zunächst wiederherstellbar |
| Endgültig löschen | Konto und zugehörige Daten unwiderruflich entfernen |

Es gibt die Rollen **Benutzer** und **Admin**. Jedes Konto sieht ausschließlich seine eigenen Aufgaben, Projekte, Notizen und Zeiten.

## Module freischalten

Planora ist modular aufgebaut. Nicht freigeschaltete Module verschwinden aus der Navigation.

| Modul | Inhalt |
|---|---|
| Projektverwaltung | Aufgaben, Projekte, Labels |
| Kalender | Termine, Freigaben, Buchungen |
| Notizen | Notizzettel und Telefonnotizen |
| Zeiterfassung | Arbeitszeiten, Urlaub, Überstunden |
| Schilder | Digitale Türschilder und Raumanzeigen |
| Statistiken | Auswertungen (Admin) |
| Server | Serverinventar und Logbuch (Admin) |
| Benutzer | Benutzerverwaltung (Admin) |
| Open Claude | OpenClaw-Skills und Claude-Integration |

Module lassen sich pro Benutzerkonto zuweisen.

## Push-Benachrichtigungen

Fällige Aufgaben, Notiz-ToDos, Termine und Server-Prüfungen können als Push aufs Handy gehen. Zustellweg ist **ntfy**, wahlweise selbst gehostet.

1. Administration: **Adresse** des ntfy-Servers und **Zugangs-Token** hinterlegen – der Token wird verschlüsselt gespeichert und danach nicht mehr angezeigt
2. Jede Person legt ihr eigenes **Topic** fest (ein Zufallsvorschlag ist per Klick erzeugbar) und abonniert dasselbe Topic in der ntfy-App
3. **Vorlaufzeit** in Minuten und die Auswahl, wofür Meldungen kommen, individuell einstellen
4. Mit **Verbindung prüfen** und **Test-Meldung senden** die Einrichtung kontrollieren

:::note
Der Versand hängt am Scheduler des Servers. Läuft dieser nicht, kommen keine Benachrichtigungen an.
:::

## Daten exportieren und importieren

Über den Datenbereich sichern Sie die eigenen Aufgaben, Unteraufgaben, Projekte, Labels und Termine als Datei und spielen sie wieder ein. Nach einem Import meldet Planora, wie viele Aufgaben, Unteraufgaben und Termine übernommen und wie viele übersprungen wurden; aufgetretene Fehler werden einzeln aufgeführt.

## Lizenz & Updates

| Angabe | Beschreibung |
|---|---|
| Lizenzschlüssel | Schlüssel dieser Installation |
| Domain | Domain, auf die die Lizenz ausgestellt ist |
| Aktuelle Version | Installierter Stand |
| Neueste Version | Verfügbarer Stand |
| Update-Kanal | Kanal, aus dem Updates bezogen werden |
| Zuletzt geprüft | Zeitpunkt der letzten Prüfung |

Im Demo-Modus sind Lizenz- und Update-Funktionen deaktiviert. Die Versionshistorie finden Sie im [Planora-Changelog](/changelogplanora).

## Wartung

Administratoren können aus der Anwendung heraus **Migrationen ausführen** und **Assets neu bauen** – etwa nach einem Update. Beides ist für den laufenden Betrieb gedacht und sollte außerhalb der Hauptarbeitszeiten erfolgen.
