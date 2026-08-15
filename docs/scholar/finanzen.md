---
sidebar_position: 13
---

# Finanzen & Zahlungen

Scholar bildet den Zahlungsverkehr rund um Lernmittel, Gebühren und Barkassen ab. Zahlungseingänge werden aus dem Bankkonto importiert, automatisch Schülerinnen und Schülern zugeordnet und mit deren Lernmittelkonto verrechnet.

:::note Berechtigungen
Die Finanzbereiche sind an eigene Berechtigungen gebunden (`lm_transactions`, `lm_admin`, `finance_cashbook`, `finance_receipts`). Ohne diese Rechte erscheinen die Menüpunkte nicht.
:::

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
