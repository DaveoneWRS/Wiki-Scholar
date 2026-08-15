---
sidebar_position: 12
---

# Serververwaltung

Das Server-Modul ist ein Inventar der betriebenen Systeme und Dienste. Es hält fest, was wo läuft, welche Version installiert ist und wann die nächste Prüfung ansteht – und protokolliert, was daran gemacht wurde.

:::note Modul
Die Serververwaltung ist Administratorinnen und Administratoren vorbehalten und muss als Modul freigeschaltet sein – siehe [Einstellungen](./einstellungen#module).
:::

## Übersicht

Die Liste zeigt alle erfassten Server und Dienste mit Version, nächster fälliger Prüfung und Status. Die Kennzahlen oben unterscheiden **Gesamt**, **Bald fällig** und **Überfällig**; über **Alle anzeigen** blenden Sie die vollständige Liste ein. Eine Suche und Filter nach Tags helfen bei größeren Beständen.

## Eintrag anlegen

1. **Server → Neuer Eintrag**
2. Angaben ausfüllen
3. Speichern

| Feld | Beschreibung |
|---|---|
| Name | Bezeichnung, z. B. Scholar oder Proxmox |
| Host-System | Physischer Server, VM, Container oder Cloud-Dienst |
| Standort | Ort bzw. Umgebung des Systems |
| Aktuelle Version | Installierter Stand, z. B. `v2.1.0` |
| Installierte Pakete | Komma-getrennte Liste oder JSON-Array |
| Dokumentation | Link zur weiterführenden Dokumentation |
| Beschreibung / Notizen | Freitext zu Besonderheiten |
| Tags | Schlagwörter zur Gruppierung |
| Prüfintervall | Täglich, wöchentlich, monatlich, quartalsweise oder jährlich |

Aus dem Prüfintervall berechnet Planora automatisch die **nächste Prüfung**. Überfällige Einträge werden hervorgehoben; ist die Push-Benachrichtigung eingerichtet, kommt zusätzlich eine Tagesübersicht aufs Handy.

## Versionsprüfung

Über **Version prüfen** gleicht Planora die hinterlegte Version mit dem verfügbaren Stand ab und aktualisiert den Prüfzeitpunkt. Der Eintrag gilt damit als geprüft, die nächste Fälligkeit rückt entsprechend weiter.

## Logbuch

Zu jedem Server lassen sich Log-Einträge mit Titel und Inhalt erfassen – etwa durchgeführte Updates, Störungen oder Konfigurationsänderungen. Die Einträge sind chronologisch sortiert und bilden die Wartungshistorie des Systems.
