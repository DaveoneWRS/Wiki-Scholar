---
sidebar_position: 9
---

# Geräteverwaltung

Das Gerätemodul verwaltet das gesamte Schulinventar an technischen Geräten – von der Ausleihe über Wartung und Lager bis zur Inventur. Die Funktionen verteilen sich auf das Menü **Module** (Geräte, ausgeliehene Geräte, Leihverlauf), die Navigationsgruppe **Lagerverwaltung** (Wartungsübersicht, Lagerorte, Lagerübersicht / Scanner) und das Menü **Reservierungen → Geräte**.

## Gerätetypen

Geräte werden nach Typen kategorisiert (z. B. Laptop, Tablet, Beamer):

- Gerätetypen erstellen, bearbeiten und löschen
- Typen als reservierbar markieren
- Inventar nach Typ anzeigen

## Geräteinventar

Das Inventar listet alle erfassten Geräte auf. Filter nach Status, Gerätetyp und **Reservierung** bleiben beim Bearbeiten und Löschen erhalten.

| Aktion | Beschreibung |
|---|---|
| Gerät hinzufügen | Neues Gerät erfassen |
| Gerät bearbeiten | Informationen aktualisieren |
| Gerät löschen | Gerät aus dem Inventar entfernen |
| Barcode drucken | Gerätebarcode für Inventaretiketten |
| Reservierbarkeit | Gerät für Reservierungen freigeben |

## Geräteausleihe

Geräte können an Lehrkräfte und Schülerinnen/Schüler ausgeliehen werden:

### Ausleihe durchführen
1. Gerät über Barcode oder Suche auswählen
2. Person (Lehrkraft oder Schüler) auswählen
3. Leihvertrag drucken (optional)
4. Ausleihe bestätigen

### Rückgabe
1. Gerät über Barcode oder Suche auswählen
2. Rückgabe bestätigen
3. Rückgabedokument drucken (optional)

### Übersichten
- Alle ausgeliehenen Geräte anzeigen
- Lehrkraft-Ausleihen separat anzeigen
- Schüler-Ausleihen separat anzeigen
- **Leihverlauf** eines Geräts per Barcode-Scan einsehen

:::note Gesperrte Schülerinnen und Schüler
Im [Schülerprofil](./schueler#schüler-sperren) kann die Geräteausleihe für einzelne Schülerinnen und Schüler mit Angabe eines Grundes gesperrt werden.
:::

## Geräte-Scanner

Am Geräte-Scanner leihen sich Schülerinnen und Schüler Geräte selbst aus:

1. Schülerausweis scannen
2. Gerät scannen

Wird ein nicht ausgeliehenes Gerät ohne vorherigen Ausweis-Scan gescannt, erscheint die Vollbild-Meldung **Bitte zuerst den Ausweis scannen!**.

Liegt für die Schülerin bzw. den Schüler eine Verwarnung aus dem Lager-Scanner vor (siehe unten), erscheint sie beim nächsten Ausweis-Scan einmalig als Vollbild-Hinweis mit Sprachausgabe. Der Hinweis steht fest **5 Sekunden** und lässt sich nicht überspringen; während dieser Zeit ist das Barcode-Feld gesperrt, in dieser Zeit gescannte Codes müssen wiederholt werden.

## Gerätereservierungen

Reservierungen erlauben die Vorausbuchung von Geräten (Menü **Reservierungen → Geräte**):

- Gerätekalender einsehen
- Reservierung erstellen
- Reservierung stornieren
- Persönliche Reservierungen verwalten
- Kalender nach Gerätetyp filtern

## Lagerorte

Geräte können Lagerorten zugewiesen werden (**Lagerverwaltung → Lagerverwaltung**):

- Lagerorte erstellen und verwalten
- Ladestation markieren
- Barcodes für Lagerorte zuweisen
- Status per Barcode-Scan ändern

## Lager-Scanner

Der Lager-Scanner (**Lagerübersicht / Scanner**) ermöglicht schnelle Inventaraktionen ohne Maus:

- Gerät einem Lagerort zuweisen
- Gerät zurückbuchen
- Zuweisungen zurücksetzen
- Fächer sperren und freigeben (mit Ansage „Fach gesperrt" / „Fach freigegeben")

Zähler für Standard-Ausleihen und offene Wartungen aktualisieren sich direkt mit jedem Scan.

### Verwarnungen

Für zurückgegebene Geräte, deren **Akku nicht geprüft** bzw. die **nicht ausgeschaltet** wurden, gibt es zwei Warnmodi, die sich gegenseitig ausschließen:

1. Warnmodus wählen und Gerät scannen
2. Die Kachel-Oberfläche zeigt, wer verwarnt werden soll – mit Gerät, Klasse, letztem Ausleihzeitraum und Zahl bisheriger Verwarnungen dieser Art
3. Innerhalb von **fünf Sekunden** kann abgebrochen werden; sonst wird die Verwarnung übernommen

Nach einem Abbruch bleibt der Warnmodus aktiv. Die Verwarnung geht per E-Mail an die Schülerin bzw. den Schüler und wird zusätzlich beim nächsten Ausweis-Scan am Geräte-Scanner angezeigt – auch ohne hinterlegte Office-365-Adresse. Eine Auswertung finden Sie in der MagicCard-Statistik der [Administration](./administration#statistiken).

## Wartung

Die **Wartungsübersicht** listet alle Geräte, die zur Wartung anstehen, und lässt sich nach Modell, Marke und Gerätetyp filtern. Eine Statistik-Karte zeigt die Gesamtzahl wartungsfälliger Geräte mit klickbaren Werten je Gerätetyp.

| Aktion | Beschreibung |
|---|---|
| Wartung erfassen | Wartungsauftrag anlegen |
| Zuweisen | Wartung einer Person zuteilen |
| Barcode scannen | Gerät scannen, durchgeführte Wartungsaufgaben bestätigen, Gerätestatus nach der Wartung und optional einen Kommentar bzw. eine Beschädigung erfassen |
| Wartungsplan | Übersicht aller Wartungsaufgaben |

### Noch ausgeliehene Geräte

Wird in der Wartung ein Gerät gescannt, das noch ausgeliehen ist, erscheint ein Hinweis mit Ausleiher und Ausleihdatum. Sie entscheiden selbst:

- **Zurückbuchen und Wartung durchführen**
- **Ausleihe behalten, nur Wartung erfassen**
- **Abbrechen**

### Signaltöne

Die Wartung spielt Töne ab: Der Hinweis auf ein noch ausgeliehenes Gerät hat einen eigenen Warnton, der verstummt, sobald eine Entscheidung getroffen ist. Erfolgreiche Wartungen und Fehler (unbekannter Barcode, Netzwerkfehler) sind am Ton unterscheidbar.

## Inventur

Über den Link **Inventarisierung** in der Geräteübersicht wird der Gerätebestand geprüft:

1. **Inventur starten** – alle Geräte mit Status „verfügbar" werden als offen markiert
2. Geräte scannen – ein Gerät verschwindet aus der Liste, sobald es am Geräte-Scanner, in der Wartungsübersicht oder im Lager-Scanner gescannt wurde
3. Fortschritt verfolgen und **Inventur beenden**

Die Inventurseite zeigt den Fortschritt, die offenen Geräte nach Typ und Filter nach Gerätetyp, Lagerort und Suchbegriff. Der Status lässt sich direkt in der Zeile ändern (z. B. auf „defekt" oder „ausgemustert"); das Gerät gilt damit zugleich als inventarisiert. Wartungsübersicht und Lager-Scanner zeigen einen Zähler der noch offenen Geräte.

## Universalbarcode (Magic Card)

Der Universalbarcode ermöglicht flexibles Barcode-Scanning:

- Universalzuweisung aktivieren/deaktivieren
- Ausstehende Zuweisung anzeigen und verwalten

Schülerinnen und Schüler, die ihren Ausweis vergessen haben, können ihre MagicCard am Kiosk selbst aktivieren (siehe [Selbstservice](./selbstservice#magiccard-am-kiosk)).
