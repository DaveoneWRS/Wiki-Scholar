---
slug: "2026-08-14"
title: "v2026.08.14 – Schüler-Hilfe-App, On-/Offboarding, digitale Lernmittel & Inventur"
authors: [david]
tags: [scholar]
---

Sammel-Release für alles seit dem letzten Eintrag – Scholar-Versionen `2026.04.24-002` bis `2026.08.14-002` und Elternportal-Versionen `2026.05.28-001` bis `2026.08.06-001` (24.04. – 14.08.2026). Zusammengefasst nach Themen statt nach Einzelversionen.

<!-- truncate -->

## Scholar (v2026.08.14-002)

#### Schüler-Hilfe & Android-Begleit-App

- **Android-App zur Schüler-Hilfe-Seite** – Kopplung per QR-Code, die App zeigt automatisch den im Browser geöffneten Schüler an. Sprachausgabe über ElevenLabs mit Geräte-Fallback, eigene Lautstärke- und Tempo-Einstellung, Bestellungen direkt als geliefert markieren. Dazu eine eigene Mobile-API (`routes/mobile-api.php`) mit Sanctum-Token, unabhängig von der IP-Whitelist
- **Fernsteuerung des Bücher-Pickens** aus der App: Picker starten, Fach wechseln, überspringen, beenden. Fernbefehle werden auch auf der Übersichtsseite ausgewertet, nicht nur bei geöffnetem Schüler
- **Schülersuche am Handy** – Über Geburtsdatum oder Ausweis-Scan; der Browser springt automatisch auf dieselbe Seite. Die Geburtsdatum-Eingabe wurde überarbeitet (keine springende Formatierung, Vorschlagsliste ab Tag und Monat inkl. Geburtsjahr und Klasse)
- **Verlauf der letzten 15 bzw. 25 aufgerufenen Schüler** – in der Weboberfläche neben „Bücher picken“ und in der App unter „Zuletzt“
- **Bücher picken mit Auswahl-Stationen** – Mehrbändige Lehrwerke (z. B. À plus! Band 1–3) erscheinen als gemeinsame Station mit der Ansage „Bitte Auswahl treffen“; gescannt wird eines davon, der Rest bleibt sichtbar und lässt sich überspringen
- **Cover und Zustandsabfragen deutlich schneller** – Buch-Cover werden dauerhaft auf dem Gerät zwischengespeichert und vorab geladen; aktiver Schüler und Picken-Status kommen über einen einzigen Poll-Endpunkt (`/api/mobile/state`) statt bisher bis zu drei Anfragen
- **Zahlungsstatus als Symbol**, Knopf „FF“ liest Geburtsdatum, Anschrift und Vornamen der verknüpften Eltern vor, Anmerkungen zur Lernmittelausleihe direkt am Handy erfassen, Einstellungen-Dialog inkl. Versionsanzeige (App-Version 1.2)
- **Knopf „Ausweis“ heißt jetzt „Barcode“** und erkennt selbst, was gescannt wurde – Schülerausweis öffnet den Schüler, eine Lernmittel-Inventarnummer oder ein Geräte-Barcode zeigt den Leihverlauf mit den letzten 25 Leihnehmern (setzt „Geräteverleih anzeigen“ voraus)
- **Sprachansage nennt den tatsächlichen Bestellstatus** („bezahlt und bestellt“, „abholbereit“, „bereits geliefert“) statt alles außer geliefert pauschal als „noch offen“. Die Bestellnummer wird nur bei abholbereiten Bestellungen gesprochen, dafür zusammen mit der Klasse und ein zweites Mal am Ende
- **Gepackte Bestellungen direkt dort umstellen, wo sie auffallen** – neben dem orangenen Bestell-Hinweis und auf der Bestell-Detailseite; die Detailseite bietet zusätzlich ein Auswahlfeld für alle übrigen Status. Bestellungen tragen überall dieselbe Nummer
- **Fix: Religionsbücher wurden evangelischen und katholischen Schülern gar nicht angezeigt** – der Religionsschlüssel ist groß geschrieben (`RE`, `RK`), die Buchfächer gemischt (`Re`, `Rk`), der Vergleich war damit immer falsch
- **Fix: Anfragelimit der App-Schnittstelle** – 60 Anfragen pro Minute und pro IP-Adresse ließen die App beim Picken dauerhaft ins Limit laufen; sie hat jetzt ein eigenes Limit je gekoppeltem Gerät. Bei Überschreitung kommt ein Fehlercode statt einer HTML-Umleitung (in der App bisher als „Use JsonReader.setLenient(true)“ sichtbar)
- **Fix: Beim Zuordnen eines Buchexemplars** wird eine noch offene Ausleihe eines Vorbesitzers automatisch zurückgebucht, statt den Vorgang abzubrechen – an der Ausgabe liegt das Buch physisch vor. Die Rückmeldung nennt den Vorbesitzer, der Vorgang wird protokolliert

#### On- und Offboarding

- **Startseite als Arbeitsverlauf** – Die zuletzt bearbeiteten 30 Fälle zuerst, Schüler und Gastschüler gemeinsam, mit Zeitpunkt der letzten Bearbeitung. Dazu eine Suche über den gesamten Bestand, auch über abgeschlossene Fälle und solche, die nie über den Magellan-Import kamen. Ein Klick auf „Ausstehend“ öffnet einen abgeschlossenen Fall wieder
- **Übersicht klassenweise statt nach Datum** – passend dazu, dass Ausweise, Zugänge und Material klassenweise abgearbeitet werden. Schüler und Gastschüler stehen gemeinsam unter ihrer Klasse, alphabetisch mit korrekt einsortierten Umlauten und Zähler je Klasse; der Status wird über eine Schaltflächenleiste mit einem Klick gesetzt. Nach dem Setzen kehrt die Seite an die Stelle zurück, an der man war
- **Bearbeitungsstand direkt auf der OnBoarding-Seite** eines Schülers oder Gastschülers umstellbar, ohne Neuladen. Wer die Checkliste speichert, setzt den Vorgang automatisch auf „In Bearbeitung“; ein gesetztes „Erledigt“ bleibt erhalten
- **Zugangsdaten sind vorbelegt** – IServ, Office 365, Untis und moin.schule aus dem Schülerdatensatz, der Bildungslogin aus der Online-Buchbestellung. Vorbelegte Felder sind gekennzeichnet und werden erst durch Absenden dauerhaft gespeichert. Die Zugangsdaten sind jetzt auch direkt aus der Schülerakte erreichbar
- **Schülerausweis im OnBoarding-PDF** – Unten rechts zum Selbstausschneiden: Barcode (Code 128), darüber Name, Klasse und Schuljahr, ringsum eine gestrichelte Schnittlinie. Der Ausweis trägt das Ausstellungsdatum und ist ein halbes Jahr gültig. Die PDFs sind kompakter gesetzt und passen wieder auf eine Seite; die Adressen unter „Deine Zugänge im Überblick“ stehen schwarz und fett statt in der kaum lesbaren Akzentfarbe
- **Textvorlagen für die Notizen** – Wiederkehrende Hinweise werden einmal hinterlegt und per Haken angehängt; der Haken richtet sich nach dem tatsächlichen Feldinhalt. Angelegt, umsortiert und ausgeblendet werden sie über „Vorlagen bearbeiten“ direkt am Notizfeld
- **Fix: Checkliste und Notizen wurden nie gespeichert** – Ursache war ein verschachteltes Formular („Server-seitig neu generieren“ brachte ein eigenes Formular mitten im OnBoarding-Formular mit); dadurch fehlten sie im PDF immer
- **Fix: Der Magellan-Import überschrieb bei jedem Durchlauf den Bearbeitungsstand** – die CSV-Spalte „Status“ (Aktiv/Inaktiv) und `students.status` (Ausstehend/In Bearbeitung/Erledigt) landeten in derselben Spalte. Der Import schreibt jetzt nur noch bei echten Übergängen, der Altbestand wurde einmalig geradegezogen
- **Fix: Benutzer standen gleichzeitig in Onboarding- und Offboarding-Tabelle** – beide Listen teilten sich ein einziges Statusfeld; sie haben jetzt je einen eigenen Status. Damit sind auch die Folgefehler behoben (Offboarding fiel unter den Tisch, abgeschlossenes Onboarding wurde zurückgesetzt, Referendare tauchten nach Vertragsende erneut auf)
- **Passwort-Rücksetzungen laufen sichtbar im Hintergrund** – Fortschritt, Ergebnis und das neue Passwort stehen in einer Anzeige unten rechts, die auf jeder Seite mitläuft; bisher hingen sie am Formular und waren beim Verlassen der Seite verloren. Antwortet ein Job binnen 60 Sekunden nicht, wird das als Fehler gemeldet („Läuft der Queue-Worker?“). Gilt für IServ, Office 365, WLAN und das Masterkennwort
- **Planora-Aufgaben werden automatisch abgehakt**, sobald der Vorgang in Scholar auf „Erledigt“ steht – bei Schülern, Gastschülern und Mitarbeitern

#### Lernmittel, digitale Medien & Bibliothek

- **Online-Buchbestellungen entstehen von selbst** – Wer digitale Lernmittel bestellt und bezahlt hat, erscheint automatisch in der Bestellübersicht: beim Buchen der Zahlung, beim Aufruf der Übersicht und stündlich im Hintergrund. Der Knopf „Sync online“ und die Seite „Digitale Zahlungen ohne Bestellung“ entfallen
- **Titelgenauer Bedarf** – Die Statistik zeigt je Titel Bedarf, vorhandene Lizenzen, zu bestellende Menge und Kosten, inklusive CSV-Export als Grundlage der Verlagsbestellung
- **Neuer Bereich „Lizenzbestand“** – Der CSV-Export aus dem Lizenz-Manager des Bildungsportals wird eingelesen und je Medium zusammengefasst; nicht über die ISBN auflösbare Titel lassen sich von Hand zuordnen oder als „ohne Lizenz“ markieren
- **Fix: Lizenzbestand wurde je Jahrgang statt je Medium gegengerechnet** – Titel in mehreren Jahrgängen (etwa „Leben leben 1“ in 5 und 6) haben denselben Bestand mehrfach abgezogen. Im laufenden Schuljahr betraf das 25 von 55 zugeordneten Medien und 413 zu wenig bestellte Lizenzen. Die Spalte „Vorhanden“ zeigt jetzt den zugeteilten Anteil, der CSV-Export die neue Spalte „Bestand gesamt“
- **Filter „Unvollständige Angaben“** mit Zähler – zeigt Bestellungen, bei denen Fremdsprache, Religion, Oberstufenfächer oder der Schülerdatensatz fehlen; nachtragen lässt sich direkt in der Zeile, Fremdsprache und Religion werden am Schüler gespeichert
- **Sammelaktion für Bestellstatus** eines ganzen Schuljahres, wahlweise eingeschränkt auf bestimmte Ausgangsstatus, mit Rückfrage und Angabe der betroffenen Anzahl. Von Hand gesetzte Status bleiben jetzt stehen; die Status heißen auf Deutsch (Neu, In Bearbeitung, Abgeschlossen, Storniert)
- **„Zugangsdaten aus Vorjahr“** – Verlagskonten bleiben über die Schuljahre bestehen und müssen nach dem Wechsel nur wieder zugeordnet statt neu importiert werden
- **Neue Seite „Fehlende Verlage“** – Titel ohne Verlag mit einem Vorschlag aus der ISBN: aus dem Verlagsverzeichnis, aus bereits zugeordneten Büchern derselben Verlagsnummer und auf Wunsch über eine Online-Abfrage
- **Bildungslogin für Lehrkräfte** – Export der aktiven Lehrkräfte als CSV, Einlesen der Rückmeldedatei mit Benutzername und Passwort (verschlüsselt am OnBoarding-Datensatz), Versand der Zugangsdaten per E-Mail
- **Schuljahreswechsel: „Lernmittel-Status zurücksetzen“** – Zahlungs- und Akzeptanzkennzeichen, SGB-Ermäßigung und Geschwisterrabatt werden geleert, anschließend läuft die Geschwistererkennung neu. Transaktionen und Kontostände bleiben unverändert
- **Kopiercodes automatisch erzeugen** – Muster wählen, Anzahl angeben, Vorschlag prüfen und erst dann anlegen; angezeigt wird, wie viele Nummern im Muster noch frei sind
- **Aus dem Elternportal werden nur noch Lernmittel-Klasse und Oberstufen-Fächerwahl übernommen** – Fremdsprache und Religion liest die Bedarfsermittlung live aus dem Schülerdatensatz
- **Bibliothek** – Ein Ausleih-Eintrag kann gelöscht werden; ist die Ausleihe noch offen, wird das Exemplar zurückgebucht. Die Detailseite lässt sich wieder öffnen, wenn das Exemplar nach der Rückgabe aus dem Bestand entfernt wurde
- **Übersicht deutlich schneller** – Die Tabelle einer Klassenstufe lädt erst beim Aufklappen, offene Änderungen eines Buches erst beim Öffnen der Zeile. Der Buchtyp-Filter erlaubt mehrere Typen gleichzeitig, das Menü der Lernmittelverwaltung ist nach Themen gruppiert

#### Geräte, Inventur, Lager & Wartung

- **Neue Inventarisierung** (Geräteverwaltung › Inventur) – Ein Inventurlauf setzt alle Geräte mit Status „verfügbar“ auf offen. Ein Gerät verschwindet aus der Liste, sobald es am Geräte-Scanner, in der Wartungsübersicht oder im Lager-Scanner gescannt wurde; nichts muss doppelt erfasst werden
- **Inventurseite mit Fortschritt** (erfasst von gesamt), offenen Geräten nach Typ und Filtern nach Typ, Lagerort und Suchbegriff. Wartungsübersicht und Lager-Scanner tragen einen Zähler der noch offenen Geräte. Der Status lässt sich direkt in der Zeile ändern (z. B. auf „defekt“ oder „ausgemustert“), das Gerät gilt damit zugleich als inventarisiert
- **Statistik-Karte in der Wartungsübersicht** – Gesamtzahl wartungsfälliger Geräte plus klickbare Pills je Gerätetyp, unabhängig von den aktiven Filtern berechnet und nach Anzahl sortiert
- **Neue Navigationsgruppe „Lager“** mit Lagerorteverwaltung und Lager-Scanner; „Küche“ ist aus der Reservierungen-Gruppe verschwunden, der Modul-Schalter bleibt funktional
- **Neuer Filter „Reservierung“** in der Geräteübersicht, bleibt beim Bearbeiten und Löschen erhalten
- **Fix: Zähler hingen bis zu 5 Minuten am Cache** – Badges für Wartungsübersicht und Standard-Ausleihen aktualisieren sich jetzt live aus jeder Scan-Antwort; die Caches werden beim Rückbuchen und nach dem Bestätigen einer Wartung gezielt geleert
- **Fix: Geräte-Scanner** – Wird ein nicht ausgeliehenes Gerät ohne vorherigen Ausweis-Scan gescannt, erscheint eine Vollbild-Meldung „Bitte zuerst den Ausweis scannen!“ statt das Gerät kommentarlos in die Liste zu legen

#### Kiosk & Scan-Monitor

- **Scan-Monitor** (`/adminTools/device-scan-monitor`) – Live-Übersicht aktiver Scan-Stationen mit Profilbild, Klasse, gescannten Geräten, Geburtstags-Banner (±3 Tage) und Service-Chip; zurückliegende Vorgänge bleiben 3 Stunden als gedämpfte Historie sichtbar. Eine Middleware spiegelt den Zustand von Geräteausgabe, Buch-Ausleihe und allen Self-Service-Abläufen, damit der Monitor serviceübergreifend mitliest
- **MagicCard-Selbstaktivierung am Kiosk** – Öffentliche Kachel `/kiosk/magiccard` mit Assistent (Geburtsdatum → Klasse → nur bei Mehrdeutigkeit Nachname → nur bei Zwillingen Vorname), tolerantes Namens-Matching für mehrteilige Vornamen und Adelspartikel, Rate-Limit 10 pro 5 Minuten und IP. Bei Erfolg wird der Universal-Barcode aktiviert und eine Notiz in der Schülerakte angelegt
- **Tap-Picker statt Tastatur** – Geburtsdatum in drei Schritten (Tag → Monat → Jahr) und Klassenstufe/Buchstabe als Buttons; die Stufen-Buttons zeigen nur tatsächlich existierende Klassen, Stufen ohne Buchstaben (Q1/Q2) springen direkt weiter. Client-seitige Prüfung erkennt unmögliche Daten, serverseitig wurde `birthdate` auf `date_format:Y-m-d` verschärft
- **Erfolgsseite springt nach 15 Sekunden zurück** auf `/kiosk`, damit die Station nicht offen bleibt
- **Kiosk-IP-Schutz und Besucher-Tracking** – Kiosk-Routen nur noch von freigegebenen IPs erreichbar (`allow_kiosk`), erfolgreiche Barcode-Scans werden gespeichert und die Besuche der letzten 8 Stunden im Scan-Monitor angezeigt. Die Kachel „Ausweis vergessen“ wird pro Display freigegeben statt über einen globalen Schalter

#### Fachkonferenzen & Schulorganisation

- **FK-Einladungen** (FKL-Verwaltung) – Fachleitungen legen eine Einladung mit Termin, Ort, Teilnehmerkreis und frei formulierter E-Mail an. Der Mailtext entsteht im WYSIWYG-Editor mit Platzhaltern für Name, Fach, Datum, Uhrzeit und Ort sowie Live-Vorschau; beliebige Dateien lassen sich anhängen
- **Genehmigung durch die Schulleitung** – Die Einladung geht nicht direkt raus, sondern wird vorgelegt; bei Ablehnung mit Begründung wird die einladende Person per Mail informiert und kann überarbeiten. Nach der Genehmigung geht die Mail an jeden Empfänger einzeln, der Versandstatus wird pro Empfänger protokolliert. Jeder Einladung liegt eine Kalenderdatei (.ics) bei. Neue Berechtigung „Fachkonferenz-Einladungen genehmigen“
- **Neuer Bereich „Schuljahreswechsel“** in den Admin-Tools – AG-Angebote entfernen, Fachkonferenz-Vertreter entfernen und Schülerrollen von ihren Zuweisungen befreien, jeweils mit Rückfrage
- **Neue Fremdsprachenliste** unter Druckansicht – für einen Jahrgang alle Schülerinnen und Schüler nach 2. bzw. 3. Fremdsprache gruppiert, als Vorschau oder PDF inklusive Anzahl je Gruppe
- **Schulbescheinigung (DE + EN)** direkt aus dem Schülerprofil – zweiseitiges PDF mit Schuldaten aus der Konfiguration und automatisch berechnetem Schuljahr (Stichtag 1. August)
- **Abgangszeugnis** – Der Knopf erscheint nur noch in den Jahrgängen 8 bis 10 und nur, wenn eine Vorlage hinterlegt ist; fehlt sie, erklärt eine Meldung den Grund statt den Druck wortlos abbrechen zu lassen
- **Druckfunktion (A4 Querformat) für die AV/SV-Übersicht**

#### Fremdsprachenwahl

- **Übersicht „Noch nicht gewählt“** mit Zähler-Badge und Knopf „Wahl eintragen“; Standardfokus liegt auf der aktuellen 5. Klasse
- **Manuell editierbare Einträge** – Änderungen werden als „manuell bearbeitet“ markiert und vom Elternportal-Sync nicht überschrieben
- **Sync löscht nicht mehr** – Im Portal fehlende Einträge werden als „im Portal entfernt“ markiert (roter Hintergrund + Badge) statt gelöscht; tauchen sie wieder auf, verschwindet die Markierung automatisch. Der CSV-Export hat eine neue Spalte „Status“
- **Fix: Gesamt-Statistik zählte Scholar-Codes (fr/sn/la) und EP-Codes (Fra/Spa/La) getrennt** – jetzt wird nach Sprach-Label aggregiert; das Edit-Modal bietet nur noch Scholar-interne Codes an und kanonisiert bestehende EP-Codes
- **Fehlermeldungen des Syncs** zeigen URL und gekürzten, von HTML bereinigten Body statt der kompletten Laravel-Fehlerseite; der Exit-Code wird ausgewertet, ein leeres Ziel vorab geprüft

#### Schülerkonto & Buchungen

- **Buchungen löschen** – Admins können einzelne Buchungen aus „Letzte Buchungen“ entfernen, mit Pflicht-Begründung und wahlweise automatischer Saldo-Korrektur. Gelöschte Buchungen werden nur ausgeblendet und bleiben mit Grund und Bearbeiter erhalten
- **Saldo korrigieren** – Der Wert „aktuell verfügbar“ lässt sich auf einen Zielwert setzen, die Differenz entsteht als nachvollziehbare Korrektur-Buchung
- **Protokoll** – Neues Uhr-Symbol unter dem Saldo öffnet alle Kontoänderungen mit Zeitpunkt, Benutzer, Vorgang und Begründung, inklusive gelöschter Buchungen
- **Fix: Der Storno-Zeitpunkt wurde nie gespeichert** (`reversed_at` fehlte in den massenzuweisbaren Feldern), der Storno-Knopf blieb dadurch nach dem Stornieren sichtbar

#### Import-Schnittstellen

- **Untis-Benutzerimport** unter Admin-Tools – Der Benutzerexport aus WebUntis trägt die Anmeldenamen bei Schülern, Gastschülern und Personal ein und markiert Elternkonten als in Untis vorhanden. Zuordnung über Office-365-Mail, ersatzweise IServ-Mail und zuletzt die Magellan-ID. Der Anmeldename bekommt eine eigene Spalte, damit der laufende WebUntis-Sync ihn nicht mit dem Kürzel überschreibt. Der bisherige Untis-Import in den Artisan-Tools entfällt
- **Untis-Abgleich-Export** – Die Klasse wird als ein Feld ausgegeben (z. B. `5a`) statt getrennt, dazu die neue Spalte „Iserv-Benutzername“
- **moin.schule-Anmeldenamen** – Der Anmeldename ist systemgeneriert (z. B. `dabopi3040`) und war bisher nur über das Portal zu erfahren. Der Abgleich holt ihn über die Schnittstelle und schreibt ihn zu Schülern, Gastschülern und Benutzern; der Schülersync übernimmt ihn gleich mit, der Einzellauf bleibt erhalten. Die Auswertungen verändern nichts mehr an den Daten – geschrieben wird ausschließlich beim ausdrücklich angestoßenen Sync
- **IServ-Mail-Import meldet, was er getan hat** – gelesene Zeilen, aktualisierte und bereits aktuelle Schüler, Treffer ohne Gegenstück, unvollständige Zeilen; das Ergebnis überlebt ein Neuladen. Lehrkräfte und Funktionsaccounts werden übersprungen, CSV-Dateien nicht mehr fälschlich abgelehnt
- **Neuer Eltern-Import** mit Matching-Service, dazu ein Knopf „Eltern aus EP synchronisieren“ in der Eltern-Übersicht (nur mit `editParents`-Recht), der den Artisan-Command per Klick startet und die Zahl neuer und aktualisierter Eltern zurückmeldet
- **Lehrer- und Magellan-Import** in eigene Service-Klassen ausgelagert; `class_id` wird per Lookup gesetzt

#### Türschild & Planora-Kopplung

- **Mehrzeilige Türschilder** – `/door-view/start` zeigt jetzt auch den Fließtext eines Planora-Schilds; bisher kam nur die Überschrift an. Zeilenumbrüche bleiben erhalten, zu langer Text scrollt langsam nach unten und beginnt wieder von oben. Sobald Fließtext da ist, schrumpft die Überschrift und alle Größen richten sich nach der Displayhöhe (setzt Planora ab 1.17.0 voraus)
- **Fett, kursiv und unterstrichen** – Scholar nimmt die Auszeichnungen über das API-Feld `descriptionHtml` entgegen und filtert sie sicherheitshalber selbst noch einmal; erlaubt sind ausschließlich diese drei (setzt Planora ab 1.18.0 voraus)
- **Fix: Das Türschild lud sich stur alle 10 Sekunden neu** und schnitt damit jeden längeren Lauftext ab. Es fragt jetzt nur den Schild-Status ab und lädt nur bei echten Änderungen neu; die Kalenderansichten behalten ihren festen Reload
- **Fix: Der Planora-Abgleich legte On-/Offboarding-Aufgaben bei jedem Lauf erneut an** – also sechsmal täglich dieselbe Aufgabe. Scholar prüft jetzt an der Antwort, ob die eindeutige Kennung angekommen ist, und bricht sonst mit klarer Meldung ab (setzt Planora ab 1.16.8 voraus)
- **Fix: Beim Abschluss eines Vorgangs konnten in Planora fremde Aufgaben abgehakt werden** – eine Planora-Version ohne die Kennungssuche lieferte alle offenen Aufgaben zurück. Scholar prüft die Treffer jetzt selbst. Self-Service-Anfragen und Formular-Einreichungen erscheinen nur noch einmal und werden automatisch abgehakt, sobald sie bearbeitet sind

#### Benutzer, Rechte & Verwaltung

- **Impersonation** – Admins können sich als beliebiger anderer Nutzer einloggen (Bestätigungsdialog vorab, gelber Banner während der Sitzung, Knopf zurück zum eigenen Konto). Admins selbst und inaktive Konten sind ausgenommen; jeder Take/Leave-Vorgang landet als Audit-Eintrag mit Tag `impersonation`
- **Read-only-Ansicht „Rechte aus Sicht des Nutzers“** – zugewiesene Rollen, Berechtigungen pro Rolle, direkte Permissions und eine effektive Gesamtliste mit Quellenangabe (direkt / via Rolle X)
- **Verwaltungskräfte bekommen ihre Rechte über die Rolle** statt als Einzelzuweisung – neue Verwaltungskräfte hatten dadurch bisher nur einen Bruchteil davon, unter anderem fehlte die Schülersuche in der Kopfzeile
- **WLAN-Kennwort einzeln neu setzbar**, ohne den Scholar-Login anzutasten; ein neues Master-Passwort im OnBoarding zieht den WLAN-Zugang automatisch mit
- **Fix: Suchleiste und zahlreiche Menüpunkte waren für alle Benutzer unsichtbar** – auch für Admins. Routen hinter `auth:sanctum` schalten den Standard-Guard zur Laufzeit um, die Berechtigungen liegen aber unter `web`, wodurch alle Rechteprüfungen fehlschlugen. Der Guard ist am User-Model jetzt fest auf `web` gesetzt
- **Fix: Deaktivierte Benutzer tauchten weiter als aktiv auf** – etwa bei den Geburtstagen auf dem Dashboard, in der Benutzerliste und in der AG-Leitung. Zwei Aktiv-Kennzeichen (`status` und das später hinzugekommene `is_active`) liefen auseinander; `status` ist jetzt führend, der Bestand wurde einmalig abgeglichen
- **Erlaubte IP-Adressen** – Sortierbare Spalten (Status, IP, Kommentar, zuletzt gesehen), Standard „zuletzt gesehen“ absteigend mit nie genutzten Einträgen am Ende, Sort-Parameter gegen eine Whitelist validiert
- **Geplante Aufgaben** – Info-Symbol je Aufgabe zeigt den tatsächlich ausgeführten Befehl inkl. Task-Key und Kopieren-Knopf
- **Adminübersicht** – Statuskarte für Updates mit installierter Version, Zeitpunkt der letzten Prüfung und einem Knopf „Jetzt prüfen“, der den Update-Server tatsächlich abfragt. Der Changelog lädt nicht mehr dauerhaft mit, sondern erst auf Klick

#### Schülerprofil & Klassen

- **Eingeschränkte Ansicht statt Fehlerseite** – Ein Schülerprofil ohne passende Klassenzuordnung öffnet die eingeschränkte Ansicht; ILE-Einträge sind dort nur mit Berechtigung sichtbar
- **Zwischennoten zeigen nur das aktive Schuljahr**, mit Schuljahr und Halbjahr in der Überschrift – bisher standen dort alle je erfassten Noten aus allen Jahrgängen untereinander
- **Gastschüler-Übersicht** – Nur noch laufende und vor höchstens 14 Tagen beendete Aufenthalte, ältere auf Knopfdruck; die Suche geht über den gesamten Bestand, CSV- und Excel-Export folgen dem Filter
- **Elternansicht** – Kopier-Knöpfe für E-Mail-Adresse und Anschrift, mit Fallback für Browser ohne Zwischenablage-Zugriff über HTTP
- **Case-Management** – Vergleichs-Einstellungen, Auto-Deaktivierung von Freigaben nach Abgabe, Excel-Exporte für Case-Vergleich und -Submissions
- **Fix: Fachschaft-Ansichten** zeigen keine deaktivierten Benutzer mehr; die Trefferliste der Mitarbeitersuche erscheint wieder unter dem Suchfeld statt am Seitenende
- **Fix: Zwischennoten ohne Fächer** – die `subjects`-Tabelle war leer, die Auswahl dadurch ohne Inhalt; per Migration befüllt, mit Nachlauf für den Fall, dass die erste Migration bereits als gelaufen galt

#### Update-System

- **Fix: Ein Update meldete Erfolg, obwohl es Dateien nicht schreiben konnte** – Weil eine neue Datei nur in einem beschreibbaren Verzeichnis entsteht, eine bestehende aber auch in einem schreibgeschützten ersetzt wird, blieb ein Update auf halbem Weg stehen: geänderte Dateien kamen an, neu hinzugekommene nicht. Der Updater macht Zielverzeichnisse jetzt vorab beschreibbar und weist alles Nicht-Geschriebene mit Pfad und Grund aus
- **Fix: Kompilierte Frontend-Dateien wurden nicht mitgeliefert** – Änderungen an der Oberfläche kamen dadurch nie auf den Installationen an; sie sind jetzt Bestandteil jedes Updates
- **Fix: HTTP 403 beim ZIP-Download vom CRM** – Der Download sendet jetzt zusätzlich zum Bearer-Token den `X-Scholar-Domain`-Header, den die CRM-Middleware zur Domain-Bindung erwartet. Bisher schlug das automatische Update fehl und Admins mussten das Notfall-Skript nutzen; 403/401-Meldungen nennen jetzt URL und Domain
- **Speicherplatz-Vorabprüfung** – Unter 1,5 GB frei bricht das Update sofort mit Aufräum-Anweisung ab, statt 20 Minuten in den Composer-Timeout zu laufen. Backup-Verzeichnisse älter als 30 Tage werden beim Update gelöscht, mindestens die 5 jüngsten bleiben erhalten
- **Updates direkt aus den Lizenzeinstellungen einplanen**, Zielversion wird übernommen; der Verbindungstest meldet jetzt Erfolg bzw. Fehler statt gar nichts, eine fehlgeschlagene Prüfung gilt nicht mehr als „System ist aktuell“
- **Fix: Die Update-Benachrichtigung konnte die Anwendung abstürzen lassen** (`fopen(...): No such file or directory`) – das Anfragelimit legte für jeden Treffer eine Datei im Cache-Verzeichnis an, das ein gleichzeitiges Leeren des Caches entfernte. Die beiden Status-Routen laufen jetzt ohne Anfragelimit

#### Sicherheit

- **Abhängigkeiten aktualisiert** – `league/commonmark` 2.8.2 → 2.10.0 und `guzzlehttp/guzzle` 7.15.1 → 7.15.2 schließen acht gemeldete Lücken (fünf hoch, drei mittel), unter anderem mehrere Wege, den Markdown-Parser lahmzulegen, einen Filter-Bypass bei Links in Markdown-Attributen und zwei Fälle falsch bewerteter Hostnamen und Cookie-Domains. Keine Funktionsänderung
- **Fix: Beim Anlegen von Benutzern wurde das Passwort nie gespeichert** – `password` ist aus Sicherheitsgründen nicht massenzuweisbar und wurde von `User::create()` stillschweigend verworfen. Betraf Registrierung, Benutzer anlegen, Onboarding, Admin-Seeder und die ILE-Importbefehle
- **Zufallspasswörter statt fest hinterlegter** – für den System-Benutzer der ILE-Importe und für neu angelegte Onboarding-Benutzer (die Anmeldung läuft ohnehin über Office 365)
- **Größeres Sicherheitspaket (v2026.06.25-002)** – `adminer.php` und `install.php` aus `public/` entfernt, hardcodierte Secrets in die `.env` ausgelagert, Default-Admin-Seeder mit Zufallspasswort, IDOR auf die Schüleransicht über eine `StudentPolicy` behoben, Mass-Assignment-Schutz für Passwort- und Barcode-Felder, Credential-Felder verschlüsselt gespeichert, Impersonation abgesichert, TLS-Verifikation für externe Dienste aktiviert, 2FA-Pflicht für Admin-Rollen, Session-Verschlüsselung und Secure-Cookie, PII aus der Kiosk-Barcode-Antwort entfernt samt Rate-Limiting, CSPRNG für Barcode- und Passwort-Erzeugung. Die Todoist-Integration wurde vollständig entfernt
- **Altbestände verschlüsselt** – Gespeicherte Passwortfelder aus der Zeit vor der Verschlüsselung machten einzelne Seiten unbenutzbar; sie werden nachträglich verschlüsselt, unlesbare Werte erscheinen leer statt die Seite abzubrechen

#### Sonstiges

- **Fix: Der Link aus der Bestätigungsmail lief ins Leere** – hinter dem Reverse-Proxy passte die Signatur nie zur aufgerufenen Adresse. Der Link funktioniert jetzt auch ohne bestehende Anmeldung und ist 7 statt 60 Minuten gültig
- **Fehlerseite zeigt eine wiederfindbare Fehlerkennung** – dieselbe Nummer steht im Log und in der Benachrichtigungsmail; vorher war die angezeigte Nummer bei jedem Aufruf eine andere
- **Fix: Scan-Monitor schrieb keine Einträge** – Die Tracking-Middleware legte den Service-Namen in einer Instanzvariable ab, Laravel löst für `terminate()` aber eine neue Instanz auf; zusätzlich hatte eine doppelte Routendefinition die Middleware überschrieben
- **Fix: Selbstbedienungsseite nannte für WebUntis noch die alte Portaladresse** (richtig ist `wrs-lg.webuntis.com`); der QR-Code beim Koppeln eines Geräts blieb leer und wird jetzt serverseitig erzeugt
- **Ausgelieferte Seiten sind kleiner geworden** – die Einrückung der Vorlagen wird aus der Antwort entfernt, ohne die Darstellung zu ändern
- **Code-Formatierung** des gesamten Projekts an den Laravel-Pint-Standard angeglichen (364 Dateien, rein formal)

---

## Elternportal (v2026.08.06-001)

#### Neu

- **Lernmittel-Anmelde-Assistent** (`/lernmittel-wizard`) – Geführter Ablauf in vier Schritten: Kindauswahl mit Status-Badges, Abmelden-Option und Tooltip für inaktive Rabatte; Paketauswahl (analog/digital) mit Preisanzeige und Digitalaufpreis sowie Klassenauswahl für Kinder ohne hinterlegte Klasse; AGB, Zahlungsdetails mit fälligem Betrag und Digital-Konfiguration; abschließend Kostenübersicht. Die getrennten Navbar-Einträge „Anmeldung (analog)“ und „Anmeldung (digital)“ sind dem Assistenten gewichen
- **IDOR-Schutz** in `selectStudent` und `unregisterStudent`

#### Fixes

- **Arbeitsheftbestellung abgesichert** – Bestellungen ohne Position werden abgewiesen, Bücher müssen zur gewählten Klassenstufe gehören, doppelte Positionen werden abgelehnt, das Absenden bei geschlossenem Bestellsystem wird serverseitig verhindert. Bestellung und Positionen entstehen in einer Transaktion; der Absenden-Knopf ist bei leerer Auswahl deaktiviert und Doppelklicks lösen keine zweite Bestellung aus
- **Kein 500-Fehler mehr**, wenn die Verifizierungs-E-Mail nicht versendet werden kann – stattdessen ein Hinweis für die Eltern; SMTP-Fehler werden allgemein abgefangen
- **Rechtschreibung in den Bestellbestätigungs-Mails** korrigiert (Grußformel, Schülerin/Schüler, Leerzeichen vor Währungszeichen)
- **Race Condition beim Passwort-Reset** behoben, Klasse 14 auf `/learningMaterials_register` ausgeblendet, Hinweistext zur Lernmittelpflicht ergänzt, `version.json`-Korruption behoben
