---
sidebar_position: 21
---

# Administration

Der Administrationsbereich (Menü **Admin**) ist Benutzerinnen und Benutzern mit der Rolle **Admin** oder **Schulleitung** vorbehalten. Wer nur das Export-Recht besitzt, sieht ausschließlich den Bereich **Export**. Hier werden alle systemweiten Einstellungen verwaltet.

## Admin-Übersicht

Die Admin-Übersicht ist links in Rubriken gegliedert:

| Rubrik | Inhalt |
|---|---|
| Home | Kacheln für den schnellen Zugriff, System- und API-Status, Updates |
| Sicherheit | Sicherheitswarnungen, Login-Historie, Rollen-Sperrung, Sicherheits-Dashboard |
| System | Artisan Tools, Datenbank, geplante Tasks, Unterrichtszeiten, IP-Freigaben, Benutzer, SSL-Überwachung, WLAN, Geräte, Lagerplätze, Barcodes, Fächer, Schuljahreswechsel |
| Systemabgleich | Microsoft 365, IServ, moin.schule |
| Tools | Finanzen (Kassenbuch), Case Management |
| Statistiken | Self-Service-, MagicCard- und Support-Auswertungen |
| Kopiercodes | Kopiercodes verwalten (falls Modul aktiv) |
| Support | Supportfälle erfassen und auswerten (falls Modul aktiv) |
| Updates & Lizenz | Lizenz, Update-Prüfung und geplante Updates |
| Dienste | Dienste-Manager |
| API-Schlüssel | Zugänge für externe Systeme |
| Logs / Backups | Protokolle und Datensicherungen |
| Export / Import | Datenexporte und -importe |
| Konfigurationen | Systemweite Einstellungen nach Gruppen |

Unter **Einstellungen** finden Sie außerdem **Schuljahr**, **Module**, **Hilfe-Links** und **Footer-Links**.

### Kacheln auf der Startseite

| Kachel | Zweck |
|---|---|
| SelfService | Offene Anfragen aus den [Selbstservice-Portalen](./selbstservice) |
| Scanner | Geräteausgabe-Station |
| Scan-Monitor | Live-Übersicht aktiver Scan-Stationen (siehe unten) |
| Login-Historie | Anmeldeprotokoll |
| Support-Statistiken | Auswertung der Supportfälle |
| System-Status | Erreichbarkeit der Anwendung |
| API-Status | Ampel für alle angebundenen Schnittstellen |
| Schülerakte | Auswahl unter „Weitere Dienste" in der Schülerakte |
| Rollen-Sperrung | Rollen vorübergehend sperren |
| Artisan Tools, Datenbank, Geplante Tasks | Systemwerkzeuge |
| Finanzen, Case Management | Kassenbuch und [Fallmanagement](./fallmanagement) |

Eine Statuskarte zeigt die installierte Version, den Zeitpunkt der letzten Update-Prüfung und einen Knopf **Jetzt prüfen**.

## API-Status

Die Kachel **API-Status** zeigt mit einer Ampel, ob die angebundenen Systeme erreichbar sind – etwa Elternportal, Microsoft 365, RADIUS, OPNsense, PaperPrintScan, WebUntis, moin.schule, IServ, Planora, Scholar-CRM, Ferien-API, isbn.de, Übersetzungsdienst, ElevenLabs, Zammad und der Mailserver. Geprüft werden nur aktive bzw. konfigurierte Schnittstellen.

| Farbe | Bedeutung |
|---|---|
| Grün | Schnittstelle erreichbar |
| Gelb | Erreichbar, aber langsam, gedrosselt, Kontingent fast verbraucht oder ein zugehöriger Sync-Task ist in den letzten 24 Stunden fehlgeschlagen |
| Rot | Keine Verbindung, Anmeldung abgelehnt oder Zugangsdaten fehlen |

Die Prüfung läuft automatisch alle 15 Minuten; **Jetzt prüfen** stößt sie sofort an. Die Ferien-API wird nur einmal pro Woche abgefragt – bis dahin zeigt die Kachel das letzte Ergebnis; ein fehlgeschlagener Ferienimport färbt sie aber sofort gelb.

## Schülerakte: Weitere Dienste

Die Kachel **Schülerakte** pflegt die Auswahl im Dialog **Weiteren Dienst erfassen** der [Schülerakte](./schueler#passwörter-und-weitere-dienste): Dienste ein- und ausblenden, aktivieren und deaktivieren, umbenennen, sortieren und neu anlegen. Es sind dieselben Dienste wie im **Dienste-Manager** (Standardgruppe „Schüler"); neu angelegte Dienste stehen sofort in der Schülerakte. Ändern erfordert das Recht, Dienste zu verwalten.

## Benutzerverwaltung

| Aktion | Beschreibung |
|---|---|
| Benutzer anzeigen | Alle Benutzerkonten auflisten |
| Benutzer erstellen | Neues Konto anlegen |
| Benutzer bearbeiten | Informationen und Rollen aktualisieren |
| Benutzer löschen | Konto entfernen |
| Passwort zurücksetzen | Neues Passwort generieren |
| Geburtsdatum setzen | Für Selbstservice-Verifikation |
| Als dieser Nutzer einloggen | Sitzung aus Sicht einer anderen Person starten (siehe unten) |
| Berechtigungsübersicht | Rechte aus Sicht des Nutzers anzeigen |

### Als anderer Nutzer anmelden

Administratoren können sich nach einer Rückfrage als beliebiger anderer Nutzer anmelden, etwa um ein Problem nachzustellen. Während der Sitzung ist ein gelber Hinweis zu sehen; ein Knopf führt zurück zum eigenen Konto. Administratoren selbst und inaktive Konten sind ausgenommen, jeder Wechsel wird protokolliert.

### Berechtigungsübersicht

Die rein lesende Ansicht zeigt für eine Person die zugewiesenen Rollen, die Berechtigungen je Rolle, direkte Berechtigungen und eine effektive Gesamtliste mit Quellenangabe (direkt bzw. über welche Rolle).

### On-/Offboarding

- Onboarding-Liste für neue Mitarbeitende und Schüler einsehen
- Fortschritt markieren und PDF generieren
- Passwörter neu generieren
- Offboarding-Datum setzen und Abschluss verfolgen

Details unter [Mitarbeitende](./mitarbeiter) und [Schülerverwaltung](./schueler#on--und-offboarding).

## Rollen & Berechtigungen

Scholar verwendet ein granulares Rollen- und Berechtigungssystem:

### Verfügbare Rollen

| Rolle | Beschreibung |
|---|---|
| Admin | Vollzugriff auf alle Bereiche |
| Schulleitung | Erweiterter Zugriff ohne Systemkonfiguration |
| Koordinatoren | AG- und Notenkonfiguration, Elternvertretung, Exporte |
| Verwaltung | Sekretariatsfunktionen |
| Lehrer | Noten, Klassen, AGs |
| Sozialarbeiter | Schülerprofil und Ereignisse |
| Mitarbeiter | Eingeschränkter Zugriff |
| Bibliothek | Bibliothekssystem |
| Sonstige | Weitere Personen mit Einzelrechten |

Rollen sind kumulativ – jede zugewiesene Rolle schaltet zusätzliche Berechtigungen frei.

### Berechtigungen verwalten

- Berechtigungen einer Rolle anzeigen
- Berechtigungen zuweisen oder entziehen
- Benutzerberechtigungen zurücksetzen

Unter **Rollen & Berechtigungen verwalten** sperrt der Schalter **Aktiv/Inaktiv** eine Berechtigung für die ganze Rolle. Maßgeblich ist die Rollenverwaltung selbst: Wird einer Rolle ein Recht entzogen, verlieren es alle betroffenen Benutzer.

### Rollen-Sperrung

Über **Rollen-Sperrung** lässt sich eine komplette Rolle vorübergehend sperren, optional mit Grund. Die Übersicht zeigt gesperrte Rollen und die Zahl der betroffenen Benutzer.

## Barcode-Verwaltung

- Barcodes anzeigen und manuell zuweisen
- Barcodes automatisch generieren

## Schulkonfiguration

Schulbezogene Stammdaten pflegen:

- Schulname und Adresse (**Sekretariat → Schulstammdaten**)
- Schuljahr
- Unterrichtsstunden und Zeiten – das Stundenraster reicht bis zur 10. Stunde; **Auf Standardwerte zurücksetzen** legt fehlende Stunden an
- Religionsoptionen und -typen
- Fächer

## Schuljahreswechsel

Der Bereich **Schuljahreswechsel** bündelt Aktionen, die nur beim Wechsel in ein neues Schuljahr ausgeführt werden sollten – idealerweise nach einem Backup. Jede Aktion fragt vorher nach.

| Aktion | Wirkung |
|---|---|
| AG-Angebote entfernen | Alle aktuellen AG-Angebote werden entfernt |
| Fachkonferenzvertreter entfernen | Die Vertretungen in den [Fachkonferenzen](./fachkonferenzen#fk-teilnehmer) werden gelöscht |
| Lernmittel-Status zurücksetzen | Bezahlt- und Akzeptiert-Kennzeichen (analog/digital), SGB-Ermäßigung und Geschwisterrabatt werden geleert; die Geschwistererkennung läuft automatisch neu. Transaktionen und Kontostände bleiben erhalten |
| Schülerrollen-Zuweisungen entfernen | Schülerrollen (z. B. Klassensprecher) von ihren Zuweisungen lösen |

:::warning
Die Aktionen wirken auf den gesamten Datenbestand und lassen sich nicht rückgängig machen.
:::

## Externe Integrationen

Synchronisation mit externen Systemen:

| System | Aktion |
|---|---|
| iServ | Benutzerdaten synchronisieren, Mail-Adressen importieren |
| WebUntis | Stundenplan- und Vertretungsdaten abgleichen, Benutzerimport |
| moin.schule | Benutzer synchronisieren und Anmeldenamen abrufen |
| Office 365 | E-Mails, Konten und Lizenzen abgleichen |
| Magellan | Schüler- und Lehrerdaten importieren |
| Elternportal | Daten über geplante Tasks austauschen |
| PaperPrintScan | Benutzer und Kopiercodes übertragen |
| Planora | Aufgaben aus On-/Offboarding und Self-Service anlegen und abhaken |

### Import

| Import | Beschreibung |
|---|---|
| Magellan Import | Schülerdaten (XLS, XLSX, CSV oder TXT) und Lehrerdaten (CSV) mit Vorschau |
| IServ-Mail-Import | IServ-Adressen zu Schülern übernehmen; das Ergebnis nennt gelesene, aktualisierte und nicht zugeordnete Zeilen |
| Untis-Benutzerimport | Anmeldenamen aus dem WebUntis-Benutzerexport bei Schülern, Gastschülern und Personal eintragen; Elternkonten werden als in Untis vorhanden markiert |

### Magellan-Import: Vorschau

Die Vorschau des Imports nennt oben, welche Magellan-Spalten in der Datei gefunden wurden, und weist auf fehlende Spalten (z. B. Geburtsdatum) hin. Jede Änderung ist als **neu**, **überschreibt** oder **wird geleert** gekennzeichnet; Zähler fassen Überschreibungen und Löschungen zusammen.

- Leere Felder in der Datei löschen gepflegte Angaben nicht – es sei denn, **Leere Felder aus der Datei übernehmen** ist angehakt
- Ist zu einer Magellan-ID ein gelöschtes Benutzerkonto vorhanden, erscheint die Person unter **Fehler** mit dem Hinweis, das Konto in der Benutzerverwaltung wiederherzustellen; die übrigen Lehrkräfte werden normal importiert
- Bereits vergebene Platzhalter-Adressen neuer Lehrkräfte werden automatisch durchgezählt

### Export

Unter **Export** stehen Benutzer-, IServ-, Schüler-, Bildungslogin- und Untis-Eltern-Exporte, der [E-Mail-Export der Eltern](./eltern#e-mail-export) sowie ein Jamf-Export zur Verfügung.

## Geplante Tasks

**Geplante Tasks verwalten** listet alle zeitgesteuerten Aufgaben mit Zeitplan, Status und dem Ergebnis des letzten – auch automatischen – Laufs.

- **Jetzt ausführen** startet einen Task sofort; ein fehlgeschlagener Befehl wird als Fehler gemeldet
- Zeitplan **Nur manuell**: Solche Tasks laufen nie automatisch, lassen sich aber jederzeit anstoßen
- Ein Info-Symbol zeigt den tatsächlich ausgeführten Befehl
- Schlägt ein Task fehl, geht eine E-Mail an die hinterlegte Wartungsadresse – mit Befehl, Zeitplan, Exit-Code und kompletter Ausgabe; sobald er wieder durchläuft, folgt eine Entwarnung. Pro Task wird höchstens eine Meldung je Stunde verschickt
- Die Übersicht zeigt die Zahl fehlgeschlagener Tasks und die Adresse, an die gemeldet wird

Alle Befehle zum Austausch mit dem Elternportal (Schüler, AGs, Bücher, Einstellungen, Bestellungen, Registrierungen, Klassengeld-Wahlleistungen) stehen hier zur Verfügung. Die Übertragung an PaperPrintScan heißt **PaperPrintScan: Benutzer und Kopiercodes übertragen** und ist zunächst abgeschaltet.

## Konfigurationen

Systemweite Einstellungen sind nach Gruppen geordnet, u. a. Schule, Klassengeld, Elternportal, Drucker & Hardware, Lizenz & Updates, Backup & Logs, Lernmittel & Sync, Datenimport, Mail, Microsoft 365 / Azure, IServ, WebUntis, RADIUS / WiFi, Barcode-Präfixe und **PaperPrintScan**.

:::note PaperPrintScan einrichten
In der Gruppe **PaperPrintScan** werden Adresse und Token der Gegenstelle eingetragen. Das Token lässt sich per Knopfdruck erzeugen und wird erst mit **Speichern** übernommen; derselbe Wert muss anschließend in PaperPrintScan hinterlegt werden. Übertragen werden zuerst Personal und Schüler, dann die Kopiercodes – immer der komplette Bestand. In Scholar gelöschte Codes werden drüben abgeschaltet, gelöschte Personen deaktiviert.
:::

## Kopiercodes

Unter **Kopiercodes** werden die Codes für Kopierer und Drucker gepflegt und Personen zugeordnet:

- Codes einzeln anlegen, bearbeiten, entziehen oder löschen
- **Codes automatisch anlegen** – Muster wählen, Anzahl angeben, Vorschlag prüfen und erst dann anlegen
- **Import** aus der Gerätedatei des Kopierers oder als eingefügte Liste (`code,username`) mit Vorschau

Im Adressbuch des Kopierers erscheinen freie Codes nicht im Klartext, sondern als „frei 01", „frei 02" usw.

## Dienste

Der **Dienste-Manager** verwaltet die Dienste, für die Zugänge vergeben werden. Dienste der Standardgruppe „Schüler" stehen in der Schülerakte unter **Weitere Dienste** zur Auswahl.

## API-Schlüssel

Externe Systeme können Daten aus Scholar lesend abfragen. Den Zugang regeln API-Schlüssel:

1. **Neuer API-Schlüssel** – Bezeichnung und Freigaben wählen, optional erlaubte IP-Adressen oder Netze
2. Den Schlüssel sofort kopieren – er wird aus Sicherheitsgründen nur einmal angezeigt

| Freigabe | Inhalt |
|---|---|
| timetable | Stundenpläne von Klassen und Lehrkräften |
| students | Schülersuche nach Name und/oder Klasse (nur aktive Schüler mit Name und Klasse) |
| birthdays | Geburtstage (heute, an einem Tag oder zu einem Geburtsdatum) |
| schueler_hilfe | Lesezugriff im Umfang der Schülerhilfe-App |
| schueler_hilfe_write | Anmerkung speichern, Bestellung als geliefert markieren |
| device_rentals | Leihverlauf von Geräten |

Bezeichnung, Freigaben und IP-Beschränkung lassen sich nachträglich ändern, ohne dass sich der Schlüssel ändert. Für Freigaben mit Schülerdaten ist eine IP-Beschränkung dringend empfohlen. Jede Abfrage von Schülerdaten wird pro Schlüssel protokolliert und 180 Tage aufbewahrt.

## Statistiken

Die Rubrik **Statistiken** bündelt die Auswertungen:

| Auswertung | Inhalt |
|---|---|
| Self-Service | Nutzung der Selbstservice-Portale |
| MagicCard-Statistik | Aktivierungen und Nutzungen der MagicCards, Verwarnungen am Lagerscanner (Akku nicht geprüft, nicht ausgeschaltet) und Passwort-Zurücksetzungen je Dienst mit Rangliste |
| Support | Auswertung der Supportfälle |

MagicCard- und Verwarnungsstatistik lassen sich von Administratoren zurücksetzen. Dabei werden nur Auswertungsdaten gelöscht; noch aktive MagicCards und noch nicht angezeigte Verwarnungen bleiben bestehen. Jedes Zurücksetzen wird revisionssicher protokolliert.

## Scan-Monitor

Der **Scan-Monitor** zeigt live die aktiven Scan-Stationen mit Profilbild, Klasse, gescannten Geräten und genutztem Dienst. Er meldet Geburtstage von gestern, heute und morgen; zurückliegende Vorgänge bleiben drei Stunden als Verlauf sichtbar, dazu die Kiosk-Besuche der letzten acht Stunden.

## WLAN-Verwaltung

Vollständige WLAN-Verwaltung im Admin-Bereich (siehe auch [WLAN](./wlan)):

- Voucher verwalten
- IP-Zugänge genehmigen oder ablehnen
- Dauerzugänge verwalten

## Module

Einzelne Funktionsbereiche können aktiviert oder deaktiviert werden:

- Modulübersicht anzeigen
- Modul aktivieren / deaktivieren
- Moduleinstellungen konfigurieren

## Datenbank, Logs & Backups

| Funktion | Beschreibung |
|---|---|
| Speicherübersicht | Datenbankgröße und Systemspeicher anzeigen |
| Backup erstellen | Manuelle Datensicherung |
| Backup-Übersicht | Vorhandene Backups verwalten |
| Logs | Protokolleinstellungen; das Log des Vortags kann täglich per E-Mail verschickt werden |

## Lizenz & Updates

- Lizenzinformationen einsehen
- Auf Updates prüfen
- Updates einplanen – die Zielversion wird übernommen; geplante Updates und aktive Sitzungen sind in der Update-Zentrale sichtbar
- Changelog der Anwendung anzeigen (lädt auf Klick)

Ein geplantes Update kündigt sich im Kopfbereich mit einem Countdown an. Überfällige geplante Updates verschwinden nach 10 Minuten aus dem Kopfbereich, lassen sich in der Update-Zentrale aber weiterhin ausführen oder abbrechen. Geplante Updates für eine bereits installierte Version werden automatisch abgebrochen.

:::note Vor dem Update
Das Update prüft vorab, ob genügend Speicherplatz frei ist und ob alle Verzeichnisse beschreibbar sind, und bricht andernfalls ab, bevor etwas verändert wird. Ein abgebrochenes Update holt seine Datenbankänderungen beim nächsten Lauf nach.
:::

## Anmeldeverlauf

Das Anmeldeprotokoll (**Login-Historie**) zeigt alle Login-Ereignisse mit:
- Benutzername
- Zeitpunkt
- IP-Adresse und Geräteinformation

## Hilfe-Links

Interne Hilfe-Links können verwaltet und in der Anwendung angezeigt werden:

- Link erstellen, bearbeiten und löschen
- Nutzungsstatistiken einsehen

## Support & Feedback

- Support-Fälle erfassen und anzeigen
- Support-PDFs exportieren
- Nutzerfeedback auswerten
