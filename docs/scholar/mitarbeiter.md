---
sidebar_position: 20
---

# Mitarbeitende & On-/Offboarding

Neben Schülerinnen und Schülern verwaltet Scholar auch die Konten der Mitarbeitenden. Der Onboarding-Bereich bündelt alle Zugangsdaten, die beim Dienstantritt vergeben werden, und dokumentiert deren Ausgabe.

:::note Berechtigungen
Der Onboarding-Bereich ist Administratorinnen und Administratoren vorbehalten. Die Mitarbeiterliste im Sekretariat ist an eigene Berechtigungen gebunden.
:::

## Mitarbeiterliste

Das Sekretariat findet unter **Sekretariat → Mitarbeiter** eine Übersicht aller Beschäftigten mit Kontaktdaten, Kürzel und Status. Über **Mitarbeiter On-/Offboarding** sehen Sie zusätzlich die hinterlegten Ein- und Austrittstermine.

| Funktion | Beschreibung |
|---|---|
| Onboardingdatum setzen | Termin des Dienstantritts festlegen |
| Offboardingdatum setzen | Termin des Ausscheidens festlegen |
| Status aktualisieren | Bearbeitungsstand des On- bzw. Offboardings pflegen |
| Fächer zuordnen | Unterrichtsfächer einer Lehrkraft pflegen |
| Klassenzuweisung | Klassenleitungen und Zuständigkeiten setzen |

Die Listen erreichen Sie auch über **Sekretariat → On/Off-Boarding → Mitarbeiter**. Onboarding- und Offboarding-Liste führen jeweils einen eigenen Bearbeitungsstand, sodass eine Person nicht gleichzeitig in beiden Listen offen steht. Sobald ein Vorgang auf **Erledigt** steht, wird die zugehörige Aufgabe in Planora automatisch abgehakt.

Lehrerdaten werden über den [Magellan-Import](./administration#magellan-import-vorschau) übernommen; die Vorschau zeigt vor dem Speichern genau, welche Angaben neu hinzukommen, überschrieben oder geleert würden.

## Onboarding durchführen

**Mitarbeiter OnBoarding** öffnen und die betreffende Person auswählen. Auf der Detailseite werden alle Zugänge zusammengeführt:

| Zugang | Beschreibung |
|---|---|
| Master-Passwort | Zentrales Startpasswort; kann neu erzeugt werden |
| IServ-Benutzername | Schulkonto; Scholar schlägt einen Namen nach Schulschema vor |
| Office-Account | Microsoft-365-Konto |
| Untis-Account | Zugang zum Stundenplansystem |
| VPN-Zugang | Benutzername und Passwort für den Fernzugriff |
| Kopiercode | Code für die Kopierer und Drucker (siehe [Kopiercodes](./administration#kopiercodes)) |
| WLAN-Zugang | RADIUS-Zugang, direkt aus dem Onboarding anlegbar; ein neues Master-Passwort setzt das WLAN-Kennwort mit |
| Bildungslogin | Zugangsdaten für digitale Lernmittel (siehe unten) |

Ergänzend lassen sich **zusätzliche Notizen** hinterlegen, etwa zu Ausgabeterminen oder Sonderabsprachen. Wiederkehrende Hinweise werden als **Textvorlagen** einmal hinterlegt und per Haken angehängt; gepflegt werden sie über **Vorlagen bearbeiten** direkt am Notizfeld.

Passwort-Zurücksetzungen (IServ, Office 365, WLAN, Master-Passwort) laufen im Hintergrund; Fortschritt, Ergebnis und das neue Passwort erscheinen in einer Anzeige unten rechts, die auf jeder Seite mitläuft.

### Bildungslogin für Lehrkräfte

Für digitale Lernmittel werden die aktiven Lehrkräfte als CSV exportiert. Die Rückmeldedatei mit Benutzername und Passwort wird wieder eingelesen und verschlüsselt am Onboarding-Datensatz gespeichert; die Zugangsdaten lassen sich anschließend per E-Mail versenden.

### Zugangsdatenblatt

Über **PDF erzeugen** wird ein Blatt mit allen Zugangsdaten der Person erstellt. Es dient als Übergabedokument beim Dienstantritt.

:::warning
Das Zugangsdatenblatt enthält Passwörter im Klartext. Geben Sie es ausschließlich persönlich aus und bewahren Sie keine Kopien auf.
:::

## Offboarding

Beim Ausscheiden wird das Offboardingdatum gesetzt. Scholar führt die Person danach in der Offboarding-Liste, bis alle Zugänge deaktiviert sind. Prüfen Sie dabei insbesondere:

- WLAN- und VPN-Zugang deaktivieren (siehe [WLAN-Verwaltung](./wlan))
- Ausgeliehene [Geräte](./geraete) und [Bibliotheksmedien](./bibliothek) zurückfordern
- Rollen und Berechtigungen entziehen (siehe [Administration](./administration))
- Schließfach- und Schlüsselrückgabe erfassen

## Benutzerkonten

Das Anlegen und Bearbeiten der Scholar-Benutzerkonten selbst – inklusive Rollen, Berechtigungen und Berechtigungsübersicht – ist unter [Administration](./administration#benutzerverwaltung) beschrieben.
