---
sidebar_position: 6
---

# Lernmittel

Das Lernmittelmodul verwaltet Schulbücher, Arbeitshefte, digitale Lernmittel, Materialpreise und Bestellungen für alle Schülerinnen und Schüler. Alle Funktionen liegen im Menü **Module → Schulbuch (LM)**; welche Einträge sichtbar sind, hängt von den Lernmittel-Berechtigungen ab.

| Bereich | Menüpunkte |
|---|---|
| Katalog | LM Übersicht, Fehlende Verlage, Fehlende Preise, Änderungen an Büchern, Konfiguration |
| Bestand | LM - Bestand Übersicht, LM - Bestand Scan, LM Inventur, LM - Scanner |
| Digitale Lernmittel | E-Book (Bestellungen - EP), E-Book Bedarf & Statistik, Digitale Lizenzen |
| Zahlungen | Konto / LM Zahlungen, SGB Übersicht, Geschw. Übersicht (siehe [Finanzen](./finanzen#zahlungsübersicht-lernmittel)) |
| Arbeitshefte | AH - Bestellungen anzeigen |
| Ausgabe | [Schülerhilfe](./ausgabe), SelfService Portal |
| Fachschaften | FKL - LM Verwaltung (siehe [Fachkonferenzen](./fachkonferenzen#lernmittel-der-fachschaft)) |

## Lernmittelkatalog

Der Katalog (**LM Übersicht**) listet alle verfügbaren Bücher und Materialien, gegliedert nach Jahrgangsstufe. Die Tabelle einer Klassenstufe lädt erst beim Aufklappen; der Buchtyp-Filter erlaubt mehrere Typen gleichzeitig.

**Mögliche Aktionen:**
- Material anlegen und bearbeiten (Titel, Verlag, Preise)
- Jahrgangsstufen zuordnen oder entfernen
- Materialliste als PDF exportieren

### Fehlende Verlage

Die Seite **Fehlende Verlage** listet Lernmittel ohne Verlagszuordnung, nach Fächern sortiert. Zu jedem Titel macht Scholar anhand der ISBN einen **Vorschlag** – aus dem Verlagsverzeichnis, aus bereits zugeordneten Büchern derselben Verlagsnummer und auf Wunsch über eine Online-Abfrage. Titel mit Vorschlag stehen innerhalb eines Fachs oben.

## Preispflege

Materialpreise können regelmäßig aktualisiert werden:

| Aktion | Beschreibung |
|---|---|
| Preise einsehen | Aktuelle Preise aller Materialien |
| Preis aktualisieren | Einzelnen Preis ändern |
| Sammelaktualisierung | Mehrere Preise auf einmal anpassen |
| Veraltete Preise löschen | Nicht mehr relevante Einträge bereinigen |
| Preisänderungen exportieren | Änderungsprotokoll als Export |
| Fehlende Preise | Lernmittel ohne hinterlegten Preis |

## Schülerzuweisung

Pro Schüler können folgende Einstellungen vorgenommen werden:

| Einstellung | Beschreibung |
|---|---|
| SGB-Befreiung | Befreiung von Lernmittelkosten (SGB-Förderung) – gilt nur für das analoge Paket |
| Geschwisterrabatt | Ermäßigung für Geschwisterkinder |
| Digitale Lernmittel | Teilnahme am digitalen Lernmittelpaket |
| Zahlungsstatus | Getrennt für analoges und digitales Paket |

Die **SGB Übersicht** und die **Geschw. Übersicht** listen alle Schülerinnen und Schüler mit Befreiung bzw. Geschwisterrabatt.

## Lagerbestand und Inventur

| Menüpunkt | Zweck |
|---|---|
| LM - Bestand Übersicht | Bestand je Titel |
| LM - Bestand Scan | Bestands-Scanner (siehe unten) |
| LM Inventur | Zustand einzelner Buchexemplare per Scan erfassen (z. B. verfügbar oder defekt) |
| LM - Scanner | Exemplare per Scan ausgeben und zurücknehmen |

Lagerbestand und Lagerort gehören zur **ISBN**: Gibt es denselben Titel für mehrere Jahrgänge, liegt im Regal trotzdem nur ein Stapel, und alle Jahrgänge greifen auf denselben Bestand zu.

### Bestands-Scanner

Der Bestands-Scanner ist in zwei Arbeitsbereiche geteilt; der nicht aktive Bereich wird abgeblendet, damit sichtbar bleibt, wo die Eingabe landet:

- **Exemplare scannen** – jedes gescannte Exemplar wird sofort auf **verfügbar** gesetzt (freier Inventurscan ohne ISBN-Vorauswahl)
- **ISBN-Eingabe** – Bestandspflege je Titel mit IST- und SOLL-Bestand, Exemplaren im Lager und im Verleih sowie Lagerort

Wird eine ISBN gescannt, die sich mehrere Jahrgänge teilen, weist der Scanner darauf hin. Die gewählte Arbeitsweise bleibt für die Sitzung erhalten.

## Arbeitsheftebestellungen

Arbeitshefte werden über das Elternportal bestellt und unter **AH - Bestellungen anzeigen** bearbeitet. Die Suche findet Bestellungen über Schüler, Barcode, Bestellnummer und – bei rein numerischer Eingabe – auch über die interne ID.

### Pick-Übersicht

Die Pick-Übersicht zeigt alle Bestellungen im Status **bestellt** mit offenen Positionen:

| Kennzahl | Bedeutung |
|---|---|
| Offene Positionen | Noch nicht gepickte Hefte |
| Davon im Lager | Laut Bestands-Scanner vorhanden |
| Älteren Bestellungen zugesagt | Exemplare, die bereits einer älteren Bestellung zugeteilt sind |
| Ohne Bestandsdaten | Titel ohne erfasste Inventur |
| Komplett pickbar | Bestellungen, die vollständig aus dem Lager bedient werden können |
| Ohne offene Position | Bereits vollständig gepickte Bestellungen |

Der Bestand wird nach Bestellalter verteilt – ältere Bestellungen greifen zuerst zu. Die Sortierung **wenigste fehlende Exemplare zuerst** zeigt sofort, welche Bestellungen komplett gepickt werden können. Mit der **Sprachsteuerung** („weiter") springen Sie zur nächsten Bestellung.

Bestellungen ohne offene Position stehen am Listenende und sind als „vollständig gepickt" markiert. Über **Öffnen / zurücksetzen** lassen sich die gepickten Mengen samt Lagerbuchung zurücksetzen. Wird der Status einer Bestellung von Hand auf **bestellt** zurückgesetzt, erscheint sie wieder in der Übersicht.

### Picken

In der Pick-Maske einer Bestellung (mit Klasse und Klassenbuchstabe) werden die Hefte gescannt. Der Lagerbestand wird dabei **Exemplar für Exemplar** abgebucht; zurückgesetzte oder gelöschte Positionen schreiben die Exemplare wieder gut.

- Positionen, die laut Bestands-Scanner nicht (vollständig) im Lager liegen, sind **rot** markiert, mit Angabe der fehlenden Menge
- Titel ohne gebuchte Inventur erscheinen neutral als **ohne Bestandsdaten**

### Abholung

| Funktion | Beschreibung |
|---|---|
| Abholbenachrichtigungen | Eltern und Schüler per E-Mail informieren, dass ein Paket abholbereit ist; jede Bestellung merkt sich Zeitpunkt und Anzahl der Benachrichtigungen |
| SelfService Portal | Abholstation, an der Schülerinnen und Schüler Bücher und Arbeitshefte per Ausweis-Scan abholen |
| Abholkontrolle | Bestellnummern der Pakete erfassen, die noch im Raum liegen – einzeln oder als Liste. Die Seite gleicht sie mit allen Bestellungen im Status **gepackt** ab und zeigt drei Gruppen: liegen im Büro, nicht im Büro (vermutlich bereits abgeholt) und nicht zuordenbar. Fehlende Pakete lassen sich einzeln oder gesammelt auf **geliefert** setzen |

:::note
Antworten auf die Abholbenachrichtigung gehen an den IT-Service.
:::

### Bedarfsbericht

Der Bedarfsbericht rechnet je ISBN: Mehrere Jahrgänge eines Titels stehen in einer Zeile mit zusammengezähltem Bedarf, dazu Ist-Bestand und Fehlmenge. Titel lassen sich ausblenden („Ignorieren" gilt für alle Jahrgänge einer ISBN).

## Digitale Lernmittel (E-Books)

### Online-Buchbestellungen

Unter **E-Book (Bestellungen - EP)** erscheinen die Bestellungen digitaler Lernmittel aus dem Elternportal. Wer das Digitalpaket bestellt und bezahlt hat, wird automatisch übernommen.

| Status | Bedeutung |
|---|---|
| Neu | Bestellung eingegangen, Zahlung noch nicht gebucht |
| In Bearbeitung | Zahlung gebucht – wird automatisch gesetzt |
| Abgeschlossen | Zugangsdaten wurden per E-Mail verschickt |
| Storniert | Bestellung entfällt |

Auf **Abgeschlossen** setzt ausschließlich der E-Mail-Versand der Zugangsdaten. Jede Bestellung hält das Datum des Versands fest, sodass erkennbar ist, ob die Zugangsdaten tatsächlich verschickt oder die Bestellung nur von Hand abgeschlossen wurde.

**Weitere Funktionen:**

- **CSV-Export** für den Verlag – enthält alle Bestellungen außer Stornos, mit Gruppen für Jahrgang, Klasse (z. B. 9a), Religion und zweite Fremdsprache
- **Passwort-Import** der vom Verlag gelieferten Zugangsdaten
- **Alle E-Mails senden** – zeigt die Zahl der versandbereiten Bestellungen; niemand wird doppelt angeschrieben, abgemeldete Schülerinnen und Schüler werden nicht angeschrieben und als Problemfall ausgewiesen
- **Unvollständige Angaben** – Filter mit Zähler für fehlende Fremdsprache, Religion oder Oberstufenfächer; Angaben lassen sich direkt in der Zeile nachtragen
- **Sammelaktion** zum Umstellen des Status eines ganzen Schuljahres
- **Einträge in anderes Schuljahr verschieben**

### Lizenzzuweisung

Die Seite **Lizenzzuweisung** listet alle Bestellungen im Status **In Bearbeitung**, filterbar nach Schuljahr, Jahrgang und Name:

1. Nach- und Vorname per Schaltfläche kopieren und ins Bildungsportal einfügen
2. Je Fach abhaken, dass die Lizenz vergeben wurde – über den Spaltenkopf für alle angezeigten Schüler eines Fachs, über **Alle** für sämtliche Fächer eines Schülers
3. Vollständig zugewiesene Zeilen **abschließen** – einzeln oder gesammelt

### Bedarf & Statistik

**E-Book Bedarf & Statistik** zeigt:

- Bestellungen nach Status und je Jahrgang (Gesamtübersicht)
- je Titel Bedarf, vorhandene Lizenzen, zu bestellende Menge und Kosten der Nachbestellung, mit CSV-Export
- die **Verlagsbestellung zum Abhaken**: Ein Titel erscheint nur einmal, auch wenn er zu mehreren Jahrgängen gehört. Jede Zeile und jeder Verlag lässt sich als **bestellt** markieren; festgehalten werden Zeitpunkt, Benutzer und die offene Menge. Kommen danach weitere Bestellungen hinzu, weist die Ansicht die Differenz aus. Eine Fortschrittsleiste zeigt, wie viele Positionen bestellt sind.

### Digitale Lizenzen

Unter **Digitale Lizenzen** wird der CSV-Export aus dem Lizenz-Manager des Bildungsportals eingelesen (**Lizenz-Export einlesen**) und je Medium zusammengefasst – mit Nutzungsrechten gesamt, frei und vergeben sowie Bedarf und Fehlmenge. Titel, die sich nicht automatisch über die ISBN zuordnen lassen, werden von Hand zugeordnet oder als ohne Lizenz markiert.

:::info Freischaltung im SelfService
Digitale Lernmittel werden im [SelfService](./selbstservice#digitale-lernmittel-lmdigi) nur freigeschaltet, wenn das Digitalpaket gebucht **und** bezahlt ist.
:::

## Änderungsprotokoll

Alle Änderungen an Lernmitteln werden unter **Änderungen an Büchern** protokolliert:

- Änderungen einsehen und bestätigen
- Alte Einträge löschen
- Vollständige Änderungshistorie einsehen

## Schuljahreswechsel

Zum neuen Schuljahr setzt die Administration den Lernmittel-Status zurück: Zahlungs- und Akzeptanzkennzeichen (analog und digital), SGB-Ermäßigung und Geschwisterrabatt werden geleert, anschließend läuft die Geschwistererkennung neu. Gebuchte Transaktionen und Kontostände bleiben unverändert (siehe [Administration](./administration#schuljahreswechsel)).
