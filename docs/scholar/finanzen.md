---
sidebar_position: 13
---

# Finanzen & Zahlungen

Scholar bildet den Zahlungsverkehr rund um Lernmittel, Gebühren und Barkassen ab. Zahlungseingänge werden aus dem Bankkonto importiert, automatisch Schülerinnen und Schülern zugeordnet und mit deren Lernmittelkonto verrechnet.

:::note Berechtigungen
Die Finanzbereiche sind an eigene Berechtigungen gebunden (`lm_transactions`, `lm_admin`, `finance_cashbook`, `finance_receipts`). Ohne diese Rechte erscheinen die Menüpunkte nicht.
:::

Die Lernmittelzahlungen erreichen Sie über **Module → Schulbuch (LM) → Konto / LM Zahlungen**, das Kassenbuch über die Kachel **Finanzen** in der [Administration](./administration).

## Zahlungsübersicht (Lernmittel)

Die Seite **LM - Zahlungen** zeigt je Schülerin bzw. Schüler Kontostand, Zahlungsstatus für analoges und digitales Paket, Zustimmung und Paketwahl sowie Ermäßigungen.

| Filter | Werte |
|---|---|
| Zahlungsstatus | Bezahlt, Unbezahlt |
| Akzeptanz | Akzeptiert, Nicht akzeptiert |
| Befreiung | SGB, Kein SGB |
| Geschwister | Geschwisterrabatt ja / nein |
| Digitalpaket | Digital unbezahlt, Digital bezahlt, Digitalpaket gewählt, Kein Digitalpaket |
| Klassenstufe | Einschränkung auf einen Jahrgang |

Die Filter wirken sofort bei der Auswahl. Kacheln oben zeigen Gesamtanzahl, **Bezahlt (analog)**, **Bezahlt (digital)** und **Digital offen**; ein Klick auf **Digital offen** setzt den passenden Filter.

:::note Analog- und Digitalpaket
Beide Pakete werden getrennt abgebucht. Bei einem Digitalschüler kann „bezahlt" für das analoge Paket schon gesetzt sein, während die Digital-Differenz noch offen ist – solche Fälle findet der Filter **Digitalpaket → Digital unbezahlt**.
:::

### Zustimmung und Paket

Die Spalte **Zustimmung | Paket** zeigt, ob im Lernmittel-Assistenten des Elternportals zugestimmt wurde (**Akzeptiert** / **Nicht akzeptiert**) und welches Paket gewählt ist (**Analog** / **Digital**). Solange im Elternportal nichts gewählt wurde, steht dort **Keine Wahl**.

- Das Paket lässt sich nur umschalten, wenn die Zustimmung gesetzt ist. Von Hand vergebene Pakete werden mit Zeitpunkt und Benutzer vermerkt und vom Abgleich mit dem Elternportal nicht überschrieben.
- Ein Digitalpaket ohne Zustimmung wird zur Prüfung mit einem Rahmen markiert.
- **Mit Elternportal abgleichen** (nur mit Lernmittel-Adminrecht) holt Zustimmungen und Paketwahl sofort ab und meldet den Zahlungsstatus zurück, statt auf den nächtlichen Lauf zu warten.

### Digitalpaket buchen

Ist für die Schülerin bzw. den Schüler kein Klassenpreis hinterlegt, fragt Scholar den Betrag beim Buchen von Hand ab; der Dialog nennt im Titel, ob analog oder digital gebucht wird. Ein bereits bezahltes Paket wird nicht ein zweites Mal abgebucht. Bei SGB-befreiten Schülerinnen und Schülern mit einem Digitalanteil von 0 € wird auch der digitale Status auf „bezahlt" gesetzt.

## Zahlungseingänge importieren

Kontoumsätze werden als Datei aus dem Online-Banking eingelesen:

1. **Transaktionen → Import** öffnen
2. Umsatzdatei auswählen und hochladen
3. Vorschau prüfen und Import bestätigen

Bereits importierte Umsätze werden erkannt und nicht doppelt angelegt.

## Transaktionsübersicht

Die Übersicht listet alle Zahlungseingänge mit Datum, Betrag, Zahler und Verwendungszweck.

| Aktion | Beschreibung |
|---|---|
| Zuordnen | Zahlung einer Schülerin / einem Schüler zuweisen |
| Ausblenden | Nicht relevante Umsätze aus der Arbeitsliste nehmen |
| Ausgeblendete anzeigen | Ausgeblendete Umsätze erneut einsehen oder einblenden |
| Löschen | Fehlerhaft importierte Umsätze entfernen |

Die Zuordnung erfolgt über den Verwendungszweck (Barcode bzw. Schülernummer). Nicht eindeutig zuordenbare Zahlungen bleiben in der Arbeitsliste stehen und können manuell über die Schülersuche zugewiesen werden.

## Guthaben

Unter **Guthaben** sehen Sie alle Konten mit Überzahlungen oder offenen Beträgen. Verfügbare Funktionen:

- Guthabenkonten ein- und ausblenden
- Lernmittelstatus zurücksetzen
- Abgleich der Lernmittel-Annahme mit den Zahlungen anstoßen

Der aktuelle Kontostand einer Schülerin / eines Schülers ist außerdem im [Schülerprofil](./schueler) und in der [Ausgabestation](./ausgabe) sichtbar.

Über **EP-Akzeptanz sync** im Menü der Zahlungsseite wird der Abgleich der Lernmittel-Zustimmungen mit dem Elternportal angestoßen.

## Schülerkonto

Die Registerkarte **Buchungen** im [Schülerprofil](./schueler) zeigt den Saldo, die **letzten Buchungen** sowie offene Klassengeld-Forderungen und Klassengeld-Buchungen. Administratorinnen und Administratoren können das Konto korrigieren:

| Funktion | Beschreibung |
|---|---|
| Kontostand korrigieren | Den Wert „aktuell verfügbar" auf einen Zielwert setzen; die Differenz entsteht als nachvollziehbare Korrekturbuchung. Eine Begründung ist Pflicht |
| Buchung löschen | Einzelne Buchung mit Pflicht-Begründung entfernen, wahlweise mit automatischer Saldo-Korrektur. Gelöschte Buchungen werden nur ausgeblendet und bleiben mit Grund und Bearbeiter erhalten |
| Änderungsprotokoll | Das Uhr-Symbol unter dem Saldo zeigt alle Kontoänderungen mit Zeitpunkt, Benutzer, Vorgang und Begründung – auch gelöschte Buchungen |

## Kassenbuch

Das Kassenbuch dokumentiert Bargeldbewegungen – z. B. Barzahlungen im Sekretariat.

| Funktion | Beschreibung |
|---|---|
| Neue Transaktion | Einnahme oder Ausgabe mit Datum, Betrag, Kategorie und Beschreibung erfassen |
| Kassensaldo | Aktueller Bestand, fortlaufend berechnet |
| Filter | Zeitraum (von/bis) und Kategorie |
| Stornieren | Fehlbuchungen werden storniert, nicht gelöscht |

## Belege (E-Quittungen)

Zu einer Bargeldbuchung kann direkt ein **E-Zahlungsbeleg** erstellt werden:

1. Transaktion auswählen → **E-Zahlungsbeleg erstellen**
2. Empfänger/Zahler, Adresse und optionale Notizen eintragen
3. Beleg speichern – er steht als PDF zum Download bereit
4. Optional: Versand an eine E-Mail-Adresse

Belege sind fortlaufend nummeriert und bleiben dauerhaft abrufbar.

## Verwandte Bereiche

- [Lernmittel](./lernmittel) – Preise, Bestellungen und offene Forderungen
- [Klassengeld](./klassengeld) – Projektabrechnung und Klassenkassen
- [Schließfächer](./schliessacher) – Mieteinstellungen und Kautionen
