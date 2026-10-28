---
sidebar_position: 18
---

# Fallmanagement & Kiosk

Das Fallmanagement-Modul ermöglicht die digitale Abwicklung von Formularen und Vorgängen – sowohl durch Mitarbeitende als auch über einen Kiosk-Touchscreen und über Freigabe-Links, die Eltern per E-Mail erhalten. Sie erreichen die **Fallverwaltung** über das Menü **Org** oder die Kachel **Case Management** in der Administration.

## Fälle verwalten

Die Fallverwaltung zeigt aktive Fälle, die Einreichungen des Tages und die vorhandenen Vorlagen. Administratoren, Schulleitung und Verwaltung können Fälle erstellen und verwalten:

- **Fall erstellen** – Titel, Beschreibung, Vorlage, Status, optionaler Start- und Endzeitpunkt, Sortierreihenfolge und die Kiosk-Displays, auf denen der Fall erscheint
- **Fall bearbeiten** – Informationen aktualisieren
- **Fall löschen** – Vorgang entfernen
- **Status** – Aktiv, Pausiert, Abgeschlossen oder Archiviert

### Vorlage wählen

Beim Anlegen eines Falls gibt es eine gemeinsame Vorlagen-Auswahl:

| Gruppe | Beschreibung |
|---|---|
| PDF-Unterschriften-Vorlagen | PDF, das am Kiosk oder über einen Freigabe-Link unterschrieben wird |
| PDF-Layout-Vorlagen | PDF mit vorpositionierten Feldern; PDF und Felder werden in den Fall kopiert und als PDF-Unterschrift verwendet |
| Formular-Vorlagen | Formular mit dynamischen Eingabefeldern |
| Eigenes PDF hochladen | Fall mit eigenem PDF, ganz ohne Vorlage |

Nach dem Anlegen eines Falls mit eigenem PDF öffnet sich direkt der **Feld-Editor**: Unterschrifts- und Datumsfelder werden aus der Liste auf die PDF-Vorschau gezogen, ein Doppelklick löscht ein Feld. Mit **Neue Felder aus Vorlage übernehmen** lassen sich spätere Änderungen einer Vorlage in den Fall holen.

## Vorlagen

| Typ | Beschreibung |
|---|---|
| Erweiterte Vorlage | Formular mit individuell definierten Feldern |
| Einfache Vorlage | Schnell erstellte Vorlage mit vordefinierten Feldern |
| PDF-Vorlage | Formular auf Basis einer PDF-Datei, die unterschrieben wird |
| PDF-Layout-Vorlage | PDF (max. 10 MB) mit vorpositionierten Feldern; Felder werden nach dem ersten Speichern positioniert |

### Formularfelder

Für jedes Feld werden Name, Typ, Platzhalter- und Hilfstext sowie die Kennzeichen **Pflichtfeld** und **Identifikationsfeld** festgelegt. Verfügbare Feldtypen: Text, E-Mail, Telefon, Zahl, Auswahlfeld, Mehrzeiliger Text, Checkbox, Barcode Scanner und Sterne-Bewertung (1–5).

Die **Benutzer-Identifikation** legt fest, wie sich Personen ausweisen: nur über Barcode/QR-Code, über die Identifikationsfelder der Vorlage oder wahlweise über beides.

### E-Mail-Einstellungen von PDF-Vorlagen

| Einstellung | Wirkung |
|---|---|
| E-Mail-Adresse im Kiosk abfragen | Der Kiosk fragt nur dann nach einer E-Mail-Adresse, wenn diese Option gesetzt ist |
| Unterschriebenes PDF per E-Mail senden | Das unterschriebene PDF geht automatisch an die angegebene Adresse; Betreff und Text sind einstellbar |

Beide Einstellungen lassen sich jederzeit im Vorlagen-Editor ändern. Wird die Adresse abgefragt, aber nichts verschickt, sagt die Kiosk-Seite das auch.

**Aktionen:**
- Vorlage erstellen, bearbeiten und löschen
- Vorlage herunterladen

## Elternportal-Freigaben

Ein Fall kann über einen **Freigabe-Link mit Passwort** zur Unterschrift außerhalb der Schule freigegeben werden – etwa an Eltern.

| Funktion | Beschreibung |
|---|---|
| Neue Elternportal-Freigabe | Bezeichnung (optional), Passwort, Ablaufdatum und Mehrfachnutzung festlegen; optional direkt per E-Mail versenden |
| Bestehende Freigaben | Link und Passwort jederzeit einsehen; Freigaben sind aktiv oder deaktiviert |
| Einladung per E-Mail | Über das Briefumschlag-Symbol Ansprache, Nachname und Adresse eingeben; Link, Zugangscode und Ablaufdatum setzt Scholar selbst ein (z. B. „Sehr geehrte Frau Müller") |
| Freigabe löschen | Der Link wird sofort ungültig, auch in bereits verschickten Mails; eine gerade laufende Unterschrift kann nicht mehr abgeschickt werden |

Bereits eingegangene Einreichungen samt unterschriebener PDFs bleiben beim Löschen einer Freigabe erhalten und werden nach sieben Tagen automatisch bereinigt. Freigaben können sich nach der Abgabe automatisch deaktivieren.

## Einreichungen

Eingereichte Formulare können eingesehen und verwaltet werden:

| Aktion | Beschreibung |
|---|---|
| Einreichungen anzeigen | Alle Einreichungen eines Falls mit Kennzahlen (gesamt, abgeschlossen, in Bearbeitung, heute) |
| Details anzeigen | Vollständige Formulardaten einsehen |
| Unterschriebenes PDF herunterladen | Ausgefülltes und signiertes Dokument |
| Formular-PDF herunterladen | Blanko-Formular herunterladen |
| Excel-Export | Einreichungen als Excel-Datei |
| Einreichung löschen | Vorgang aus dem System entfernen |

### Soll-Ist-Abgleich

Mit **Soll-Ist-Abgleich aktivieren** wird eine Zielgruppe (Schüler oder Mitarbeiter) hinterlegt. Die Ansicht zeigt dann, wer bereits **ausgefüllt** hat, wer **noch fehlt** und welche Einreichungen **nicht zugeordnet** werden konnten; diese lassen sich von Hand zuordnen.

## Kiosk-Interface

Das Kiosk-Interface ist ein **passwortfreies** Touch-Interface für Tablets oder Displays im Eingangsbereich. Es ist nur von freigegebenen IP-Adressen aus erreichbar.

### Funktionen für Nutzende
- Verfügbare Fälle anzeigen
- Formular ausfüllen und einreichen
- Identifikation per Barcode-Scan
- Erfolgsmeldung nach Einreichung
- [MagicCard selbst aktivieren](./selbstservice#magiccard-am-kiosk), wenn der Ausweis vergessen wurde

### Kiosk-Displays

Unter **Kiosk-Displays** werden benannte Monitore angelegt. Für jeden Fall wird festgelegt, auf welchen Displays er erscheint; ein **Standard-Display** wird beim Erstellen neuer Fälle vorausgewählt. Displays können inaktiv geschaltet werden.

### Kiosk-Meldungen
Administratoren können Meldungen für das Kiosk-Display erstellen:

- **Meldung erstellen** – Nachrichtentyp, Text und optional Ablaufdatum festlegen; die Meldung gilt für ein bestimmtes oder für alle Displays
- **Auto-Löschen nach Lesen** – Meldung verschwindet, sobald sie gelesen wurde
- **Meldung bearbeiten** und **löschen**

Meldungen können Benutzername und Passwort enthalten (z. B. nach einer Passwort-Zurücksetzung); das Passwort wird erst auf Knopfdruck angezeigt. Wird dabei eine Grenze erreicht, zeigt der Knopf einen Countdown.

### Technische Hinweise
- Das Kiosk-Interface aktualisiert sich automatisch
- Keine Anmeldung erforderlich
- Optimiert für Touch-Bedienung
