---
sidebar_position: 7
---

# Lernmittelausgabe (Schülerhilfe)

Die **Schülerhilfe** ist die Arbeitsoberfläche für die Buchausgabe. Sie bündelt alles, was an der Ausgabetheke gebraucht wird: Schülersuche, die passende Bücherliste, den Kontostand und die Rückmeldung, welche Lernmittel noch fehlen.

## Schüler aufrufen

Suchen Sie über **Name, Geburtsdatum oder Barcode**. Am schnellsten geht es mit dem Barcode auf dem Schülerausweis: Nach dem Scan öffnet sich das passende Profil direkt.

Nach dem Aufruf zeigt die Seite die Klasse, den Kontostand und die Registerkarten für die Ausgabe. Über **Zuletzt** und den [Quicksearch-Verlauf](./schueler#quicksearch-verlauf) neben dem Suchfeld öffnen Sie zuletzt aufgerufene Schülerinnen und Schüler erneut.

## Registerkarten

| Registerkarte | Inhalt |
|---|---|
| Übersicht | Zusammenfassung mit Kontostand, offenen Positionen und Anmerkungen |
| Lernmittelliste | Bücher, gefiltert nach Sprach- und Religionswahl der Schülerin / des Schülers |
| Alle Lernmittel | Alle Bücher eines Jahrgangs ohne Filterung – auch für das nächste Schuljahr wählbar |
| Fehlende Lernmittel | Fehlmeldungen der aufgerufenen Schülerin / des aufgerufenen Schülers |
| Fehlende LM – Übersicht | Alle fehlenden Lernmittel schulweit, nach Buch gruppiert |
| Anmerkungen | Alle Anmerkungen zur Lernmittelausgabe im Überblick |
| Bestellung | Bestellte Arbeitshefte und digitale Lernmittel |

:::tip Filterung
Die **Lernmittelliste** berücksichtigt die zweite und dritte Fremdsprache sowie die Religionswahl. Fehlt ein Buch, prüfen Sie über **Alle Lernmittel**, ob die Wahl im [Schülerprofil](./schueler) korrekt hinterlegt ist.
:::

## Bücher ausgeben

1. Buch in der Liste auswählen
2. **Buch-Exemplar-Code scannen** – gescannt wird der Exemplarcode, nicht die ISBN
3. Das Exemplar wird der Schülerin / dem Schüler zugebucht und wechselt in den Status **Ausgegeben**

Angeforderte, aber noch nicht ausgegebene Medien tragen den Status **Angefordert**. Digitale Lernmittel werden als **Digital** gekennzeichnet und ohne Exemplarcode freigeschaltet.

Ist das gescannte Exemplar noch bei einer anderen Person ausgeliehen, wird diese Ausleihe automatisch zurückgebucht – das Buch liegt ja physisch vor. Die Rückmeldung nennt den Vorbesitzer, der Vorgang wird protokolliert.

### Bücher picken

Mit **Bücher picken** führt die Station Buch für Buch durch die Lernmittelliste. Mehrbändige Lehrwerke erscheinen als gemeinsame Station mit dem Hinweis **Bitte Auswahl treffen**: Gescannt wird einer der Bände, die übrigen bleiben sichtbar und lassen sich mit **Überspringen** auslassen.

## Fehlende Lernmittel

Bücher, die nicht ausgegeben werden konnten, werden als **fehlend** vermerkt (Status **fehlt**, **bestellt** oder **erhalten**):

- Buch aus der Liste als fehlend markieren
- Status des Vermerks pflegen und bei Erledigung entfernen

Die Registerkarte **Fehlende LM – Übersicht** führt die bei der Ausgabe erfassten Fehlmeldungen mit den noch offenen Anforderungen aus dem [Selbstservice](./selbstservice#fehlende-bücher-melden) in einer Liste zusammen, gruppiert nach Buch. Dieselbe Liste erscheint in der Self-Service-Übersicht; beide Seiten sind gegenseitig verlinkt.

| Eintrag | Entfernen |
|---|---|
| Erfasste Fehlmeldung | Papierkorb löscht die Fehlmeldung |
| Offene Self-Service-Anforderung („SB Buch") | Papierkorb pickt das Buch – derselbe Vorgang wie in der Pick-Übersicht |

**Alle entfernen** räumt eine Buchgruppe entsprechend gemischt ab. Die Übersicht listet nur physische Bücher; digitale Anforderungen werden ausschließlich in den Self-Service-Ereignissen bearbeitet.

## Anmerkungen

Zu jeder Ausgabe kann eine **Anmerkung zur Lernmittelausgabe** hinterlegt werden – etwa zum Zustand eines Buches oder zu Absprachen. Anmerkungen sind in der Übersicht gesammelt einsehbar.

## Konto-Status

Die Ausgabestation zeigt den aktuellen Kontostand:

| Anzeige | Bedeutung |
|---|---|
| Konto ausgeglichen | Keine offenen Forderungen |
| Guthaben vorhanden | Überzahlung auf dem Konto |
| Offener Betrag | Lernmittel sind noch nicht bezahlt |

Angezeigt werden zusätzlich die letzten Buchungen mit Datum, Betrag und Verwendungszweck. Details siehe [Finanzen & Zahlungen](./finanzen).

## Barcode drucken

Fehlt der Schülerausweis oder ist der Barcode unlesbar, drucken Sie ihn direkt aus der Schülerhilfe neu.

## Android-App koppeln

Für die Ausgabe mit einem mobilen Scanner lässt sich die Android-App koppeln:

1. **Android-App koppeln** wählen – Scholar zeigt einen QR-Code
2. In der App **QR-Code scannen** auswählen und den Code erfassen
3. Das Gerät erscheint anschließend unter **Gekoppelte Geräte**

Gekoppelte Geräte lassen sich jederzeit **entkoppeln**; der QR-Code kann bei Bedarf neu erzeugt werden. Die App übernimmt die Scans der Ausgabestation und folgt der aktuell geöffneten Auswahl.

In der App stehen unter anderem zur Verfügung:

- **Schülersuche** über Geburtsdatum oder Ausweis-Scan – der Browser springt automatisch auf dieselbe Schülerin bzw. denselben Schüler
- **Barcode** – erkennt selbst, was gescannt wurde: Ein Schülerausweis öffnet die Schülerin bzw. den Schüler, eine Lernmittel-Inventarnummer oder ein Geräte-Barcode zeigt den Leihverlauf
- **Zuletzt** – die zuletzt aufgerufenen Schülerinnen und Schüler
- **Fernsteuerung des Bücher-Pickens** – starten, Fach wechseln, überspringen, beenden
- **FF** – liest Geburtsdatum, Anschrift und Vornamen der verknüpften Eltern vor
- Zahlungsstatus als Symbol, Anmerkungen zur Lernmittelausleihe erfassen und Bestellungen als geliefert markieren

## Sprachansage

Mit aktivierter **Sprachansage** liest die Station den nächsten Ausgabeschritt vor – hilfreich, wenn beide Hände beim Sortieren gebraucht werden. Die Ansage nennt auch den tatsächlichen Bestellstatus („bezahlt und bestellt", „abholbereit", „bereits geliefert"); bei abholbereiten Bestellungen wird die Bestellnummer zusammen mit der Klasse gesprochen. Ein- und Ausschalten erfolgt im Benutzermenü unter **Sprachausgabe**; als Stimme dient die in der Konfiguration hinterlegte ElevenLabs-Stimme, ersatzweise die Browserstimme.

## Verwandte Bereiche

- [Lernmittel](./lernmittel) – Katalog, Preise und Bestellungen
- [Selbstservice](./selbstservice) – Anforderungen der Schülerinnen und Schüler
- [Bibliothek](./bibliothek) – Ausleihe außerhalb der Lernmittel
