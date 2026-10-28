---
slug: "2026-10-27"
title: "v2026.10.27 – Lernmittel-Ausgabe, Schülerakte, Schnittstellen & Laravel 13"
authors: [david]
tags: [scholar]
---

Sammel-Release für alles seit dem letzten Eintrag – Scholar-Versionen `2026.08.16-001` bis `2026.10.27-007` und Elternportal-Versionen `2026.08.17-001` bis `2026.10.21-002` (16.08. – 27.10.2026). Zusammengefasst nach Themen statt nach Einzelversionen.

<!-- truncate -->

## Scholar (v2026.10.27-007)

#### Lernmittel-Ausgabe, Picken & Lager

- **Eine gemeinsame Liste „Fehlende Lernmittel“** – Bei der Ausgabe erfasste Fehlmeldungen und noch offene Self-Service-Anforderungen (Bücher und digitale Lernmittel) stehen zusammen, gruppiert nach Buch. Schüler-Hilfe und Self-Service-Übersicht zeigen denselben Bestand und sind gegenseitig verlinkt; Einträge lassen sich einzeln oder je Buch entfernen. Bei „SB Buch“-Einträgen löst der Papierkorb denselben Pick-Vorgang aus wie der Pick-Button. Der Tab in der Schüler-Hilfe listet nur noch physische Bücher, digitale Anforderungen werden unter „Self-Service-Ereignisse“ bearbeitet
- **Pick-Übersicht mit Lagerabgleich** – Je Bestellung steht, wie viele offene Positionen laut Bestands-Scanner im Lager liegen und wie viele fehlen. Der Bestand wird nach Bestellalter verteilt, bereits älteren Bestellungen zugeteilte Exemplare gelten nicht mehr als verfügbar und werden gesondert ausgewiesen. Neue Sortierung „wenigste fehlende Exemplare zuerst“, kompaktere Tabelle
- **Pick-Maske markiert Fehlendes rot** – mit fehlender Menge am Buchtitel, Gesamtzahl über der Tabelle und Hinweis beim aktuellen Pick. Unterschieden wird zwischen „fehlt im Lager“ und „ohne Bestandsdaten“, damit nie inventarisierte Titel nicht fälschlich rot erscheinen. Neben dem Jahrgang steht der Klassenbuchstabe (9a statt 9)
- **Vollständig gepickte Bestellungen** stehen am Listenende, sind als „vollständig gepickt“ markiert und lassen sich über „Öffnen / zurücksetzen“ samt Lagerbuchung zurücksetzen; die Sprachsteuerung („weiter“) überspringt sie. Wird eine Bestellung von Hand auf „bestellt“ zurückgesetzt, taucht sie wieder auf
- **Neue Seite „Abholkontrolle“** – Das Büro erfasst die Bestellnummern der noch im Raum liegenden Pakete (einzeln oder als Liste), die Seite gleicht sie mit allen „gepackt“-Bestellungen ab und zeigt vorhanden / fehlt (vermutlich abgeholt) / nicht zuordenbar. Fehlende Pakete lassen sich einzeln oder gesammelt auf „geliefert“ setzen
- **Lagerbestand und Lagerort gehören zur ISBN** statt zum einzelnen Buch-Datensatz – derselbe Titel steht je Jahrgang mehrfach in der Buchliste, liegt aber als ein Stapel im Regal. Bestände wurden verlustfrei je ISBN zusammengefasst; auch der Bedarfsbericht rechnet jetzt je ISBN
- **Bestands-Scanner in zwei Bereiche geteilt** – links Zurückbuchen, rechts Bestandspflege über die ISBN; der inaktive Bereich wird abgeblendet, bei ISBNs mehrerer Jahrgänge erscheint ein Hinweis
- **Bestellsuche über die interne ID** – rein numerische Eingaben werden zusätzlich gegen die ID geprüft, auch im Filter der Sammelabbuchung
- **Abhol-Benachrichtigung** verweist auf den IT-Service in Raum 132, nennt Kontaktdaten in der Fußzeile und hat itsm@wilhelm-raabe-schule.de als Antwortadresse
- **Fix: Lagerbestand wurde doppelt abgezogen** – Abgebucht wird jetzt beim Picken Exemplar für Exemplar statt zusätzlich beim Sammel-Setzen auf „bestellt“. Zurückgesetzte und gelöschte Positionen schreiben genau die abgezogene Menge wieder gut, der Bestand läuft nicht ins Minus
- **Fix: Pick-Übersicht zeigte Bestellungen ohne zu pickende Positionen** („Gesamt Positionen 0“), die nie aus der Liste verschwanden; die Überschrift nannte fälschlich den Status „gezahlt“
- **Fix: Versand der Abholbenachrichtigungen brach mit Datenbankfehler ab** (`pickup_notification_sent_at` fehlte) – die Mails gingen trotzdem raus, wurden aber nicht ausgewiesen
- **Fix: Verlagspflege** ist jetzt tatsächlich nach Fächern sortiert, Titel mit Verlagsvorschlag zuerst

#### Digitale Lernmittel & Zahlungen

- **Neue Seite „Lizenzzuweisung“** in der E-Book-Verwaltung – Bestellungen „In Bearbeitung“ filterbar nach Schuljahr, Jahrgang und Name, Nach- und Vorname als Kopierknöpfe fürs Bildungsportal. Je Fach lässt sich die Lizenzvergabe abhaken (auch spaltenweise oder für alle Fächer eines Schülers); vollständige Zeilen werden einzeln oder gesammelt abgeschlossen
- **Verlagsbestellung abhakbar** – Titel mehrerer Jahrgänge („Unsere Erde 7|8“) stehen nur noch einmal mit addiertem Bedarf. Zeilen oder ganze Verlage lassen sich als „bestellt“ markieren (mit Zeitpunkt, Benutzer und offener Menge); spätere Nachbestellungen werden als Differenz ausgewiesen, eine Fortschrittsleiste zeigt den Stand
- **Klarer Ablauf für Online-Buchbestellungen** – Neu → nach Zahlungsbuchung automatisch In Bearbeitung → Abgeschlossen ausschließlich durch den E-Mail-Versand der Zugangsdaten. Jede Bestellung merkt sich das Versanddatum, ein zweiter Sammelversand schreibt niemanden doppelt an, „Alle E-Mails senden“ zeigt die Anzahl versandbereiter Bestellungen
- **Verlags-Export** enthält auch Bestellungen im Status „Neu“ (das Portal deaktiviert jedes fehlende Konto) und zusätzlich die Klasse mit Buchstaben (`9a`), damit der Verlag Konten klassenweise zuordnen kann
- **Statistik je Jahrgang** – Gesamtübersicht aller Online-Bestellungen unabhängig vom Status, Bestellungen ohne Jahrgang getrennt ausgewiesen
- **Zahlungsübersicht: Filter „Digitalpaket“ und Kachel „Digital offen“** – Analog- und Digitalpaket werden getrennt abgebucht, offene Digital-Differenzen fand der Filter „Unbezahlt“ bisher nie
- **Knopf „Mit Elternportal abgleichen“** (nur mit Lernmittel-Adminrecht) holt Zustimmungen und Paketwahl sofort. Der Abgleich nimmt ein Digitalpaket zurück, wenn die Bestellung im Elternportal abgemeldet wurde – von Hand vergebene und bereits bezahlte Pakete bleiben stehen und werden zur Prüfung gemeldet
- **Spalte „Zustimmung | Paket“** statt „Status A | D“ – Zustimmung als „Akzeptiert/Nicht akzeptiert“, Paket als „Analog/Digital“. Ohne Wahl im Elternportal steht „Keine Wahl“ statt „Analog“; umschalten lässt sich das Paket nur bei gesetzter Zustimmung, manuelle Änderungen werden mit Zeitpunkt und Benutzer vermerkt
- **Fix: Digitale Lernmittel am SelfService nur noch nach Buchung und Zahlung** – bisher genügte ein Schülerausweis, um ein Bildungslogin-Passwort oder eine Freischaltung auszulösen. Eine LM-SGB-Befreiung gilt weiterhin nur für das analoge Paket
- **Fix: Manuelle Digitalbuchung landete als Analogbuchung** – das Digitalpaket blieb „Unbezahlt“ und ließ sich endlos erneut buchen. Bei SGB-befreiten Schülern mit 0 € Digitalanteil springt jetzt auch der Digitalstatus auf „bezahlt“
- **Fix: Abgemeldete Schüler** bekommen keine Zugangsdaten für Online-Bücher mehr, und für sie entstehen keine neuen Bestellungen
- **Fix: Versandknopf für Zugangsdaten war bei allen Bestellungen gesperrt** („Schüler ist nicht mehr aktiv“), weil die Aktivitätsangabe beim Laden fehlte
- **Fix: Filter der Zahlungsübersicht** wirken wieder sofort bei der Auswahl; die Medien-Auswahl der Lizenzübersicht ist breit genug, um Titel zu unterscheiden

#### Self-Service, Kiosk & Passwort-Resets

- **Passwort sofort gesetzt** – Wer sich am Terminal mit Barcode und Geburtsdatum ausweist, bekommt das neue IServ- bzw. Office-365-Passwort direkt (über die Warteschlange, bis zu drei Versuche), die Erfolgsmeldung nennt Benutzername bzw. Adresse. Bisher blieb die Anfrage liegen, bis jemand die Übersicht öffnete
- **Klare Angabe, wann ein neues Passwort gilt** – automatisch nach ca. 5 Minuten (WLAN, Office 365), von Hand nach ca. 3 Stunden (Untis, digitale Lernmittel) oder per Mail ins IServ-Postfach (moin.schule)
- **Jede Passwort-Zurücksetzung wird für die Auswertung festgehalten** – IServ, Office 365 und WLAN automatisch, sobald das Zielsystem das Passwort übernommen hat. Externe Resets lassen sich in der Schülerakte unter „Weitere Dienste“ erfassen; die MagicCard-Statistik wertet alles aus (Summen je Dienst, Rangliste der Schüler)
- **Buchauswahl im Self-Service** zeigt wieder alle Bücher des Jahrgangs (zuletzt fehlten 35 Titel) und filtert wie die Schüler-Hilfe inklusive Sprach- und Religionswahl
- **Self-Service-Übersicht** – Nachname per Klick in die Zwischenablage kopieren
- **Fix: Kiosk-Passwortanzeige lief in eine Sperre**, weil der Zähler mit allen anderen Seitenaufrufen geteilt war; bei Erreichen einer Grenze zeigt der Knopf jetzt einen Countdown. Die Kiosk-Nachricht nennt den tatsächlichen Login-Benutzernamen statt des Schülernamens
- **Fix: MagicCard-Statistik zählte falsch** – am Kiosk aktivierte Karten fehlten, Einlösungen und Rücknahmen zählten als Aktivierung („deaktiviert“ enthält „aktiviert“). Altbestände werden beim Update nachgetragen; Statistiken lassen sich von Admins protokolliert zurücksetzen

#### Geräte, Wartung & Verwarnungen

- **Gerätewartung erkennt ausgeliehene Geräte** – Statt ein noch ausgeliehenes Gerät still auf „verfügbar“ zu setzen, erscheint ein Hinweis mit Ausleiher und Ausleihdatum: zurückbuchen und warten, Ausleihe behalten und nur die Wartung erfassen, oder abbrechen
- **Töne in der Gerätewartung** – eigener Warnton für ausgeliehene Geräte, unterscheidbare Töne für Erfolg und Fehler (unbekannter Barcode, Netzwerkfehler)
- **Warnmodus im Lagerscanner mit Bestätigung** – Vor dem Versand einer Verwarnung („Akku“, „Ausschalten“) zeigt die Oberfläche Gerät, Klasse, letzten Ausleihzeitraum und bisherige Verwarnungen und lässt fünf Sekunden zum Abbrechen. Die beiden Warnmodi schließen sich gegenseitig aus
- **Verwarnung erreicht den Schüler auch ohne Mail** – beim nächsten Ausweis-Scan am Geräte-Scanner einmalig als Vollbild-Hinweis mit Sprachausgabe; ohne Office-365-Adresse bricht der Vorgang nicht mehr ab. Neue Verwarnungsstatistik auf der MagicCard-Seite
- **Verwarnung am Geräte-Scanner steht feste 5 Sekunden** und lässt sich nicht mehr durch einen weiteren Scan wegdrücken; in dieser Zeit gescannte Codes verfallen
- **Sprachausgabe überall mit der konfigurierten ElevenLabs-Stimme**, auch an der nicht angemeldeten Scan-Station. „Fach gesperrt/freigegeben“ im Lagerscanner folgt jetzt dem Sprachausgabe-Schalter im Benutzer-Menü
- **Scan-Monitor** meldet Geburtstage von gestern, heute und morgen

#### Notensystem & Zeugnisse

- **Offene Benotungen auf der Startseite** – hinter „Fachlehrer: Noteneintrag“ stehen Klassen und Fächer mit fehlenden Noten samt Anzahl, zugeordnet über das Untis-Kürzel; ein Klick öffnet die Noteneingabe mit vorgewählter Klasse und Fach
- **Vorherige Halbjahresnote zur Kontrolle** neben dem Notenfeld. Bei einem Sprung um zwei oder mehr Notenstufen ist eine Begründung Pflicht; sie ist nur in der Zeugniskonferenz hinter einem Infosymbol sichtbar und landet nie auf dem Zeugnis
- **AV/SV an einer Stelle** – Note und Text werden nur noch in der AV/SV-Übersicht gepflegt (mit Floskel-Dialog); „Fehltage“ erfasst nur noch Fehltage. In der Noteneingabe (FL) ist AV/SV mit „C“ vorbelegt
- **Nur noch ein Fach „Religion“** in der Noteneingabe (FL) – das Zeugnis kennt nur eine Religionsnote; Lehrkräfte für Religion katholisch tragen dort mit ein
- **„Meine Klasse“ heißt „Meine Klassen“**
- **Fix: Unnötige „Seite verlassen?“-Warnung** beim Speichern der Noteneingabe (FL) entfällt

#### Schülerakte, Sekretariat & Eltern

- **Neue Übersicht „Schüler im Ausland“** unter Sekretariat – löst die Excel-Liste ab: Schuljahr, Klasse, Zeitraum, Zielland, Antrag, Beratung, Haken für Wiederholung, Anerkennung, Q-Phase und WebUntis, Bemerkungen als Einzeleinträge. In der Schülerakte erscheint während des Aufenthalts ein oranger Hinweis
- **Vermerke zur elterlichen Sorge** – Teilbereiche (u. a. Personensorge, Aufenthaltsbestimmung, Abholberechtigung) mit Rechtsgrundlage, Einstufung, Inhaber, Aktenzeichen und Gültigkeit. Aktive Vermerke stehen als farbiger Reiter im Aktenkopf (rot / gelb / grün). Lesen darf jeder mit Aktenzugriff, eintragen nur Sekretariat, Schulleitung, Koordination und Admin; Vermerke werden nie gelöscht, sondern aufgehoben
- **Nachteilsausgleiche aus ILE/Förderung** erscheinen in der Schülerakte mit lesender Detailansicht; die Klassenlehrer-Übersicht zeigt allen Lehrkräften ihre zugeordneten Klassen und markiert Schüler mit gültigem Nachteilsausgleich
- **Persönliches Dashboard** – Boxen lassen sich je Benutzer anordnen und ausblenden; bei freigeschalteter Noteneingabe erscheint das Notensystem-Menü direkt dort
- **E-Mail-Export der Eltern** – Auswahl nach Jahrgängen oder Klassen mit Adressanzahl je Klasse, als Outlook-Kontaktliste, Verteilerliste (Semikolon-getrennt) oder Excel-Liste für Serienbriefe. Eltern mehrerer Kinder stehen nur einmal; eigenes Recht für Admin, Schulleitung, Koordination und Verwaltung
- **Fix: Elternvertretung** – Klasse und Fach lassen sich bei jedem Typ ändern, eine nicht mehr aktive Klasse bleibt mit „(nicht mehr aktiv)“ erhalten statt beim Speichern zu verschwinden. Das Menü „Erziehungsberechtigte“ erscheint nur mit `listParents`
- **Fix: Speichern eines Nachteilsausgleichs** brach bei leerem Zählfeld (Ja/Nein/Enthaltung) mit Datenbankfehler ab

#### AGs

- **Alle AG-Teilnehmer auf einmal** – als CSV (eine Zeile je Teilnehmer) und als Sammel-PDF (eine AG je Seite mit Deckblatt), wahlweise alle, bestätigte oder vorläufige Zuweisungen
- **AG-Leitungen sehen und drucken die Bewerbungen ihrer AG**, auch ohne Zuteilungsrecht; neue Druckansicht für Bewerber- und Teilnehmerliste
- **Rechte für AG-Zuweisungen** – Lehrkräfte können Bewerbungen ab Werk nicht mehr übernehmen oder ablehnen (`ags_assignment` für die Rolle Lehrer gesperrt, freischaltbar). Die Seiten hängen jetzt allein an diesem Recht – bisher brach „Übernehmen“ mit Fehlerseite ab, während „Alle übernehmen“ funktionierte
- **AG-Import-Vorschau als eigene Seite** – Neuladen und Zurück führen nicht mehr zur Fehlermeldung, Korrekturen bleiben erhalten. Das Stundenraster kennt die 9. und 10. Stunde
- **AG-Export ans Elternportal** prüft vorab mit denselben Regeln, ergänzt fehlende Sekunden und nennt bei Fehlern alle betroffenen AGs mit Name, Leitung und Bearbeiten-Link
- **Fix: Gelöschte AGs tauchten im Elternportal wieder auf** – der stündliche Schüler-Abgleich übertrug auch gelöschte AGs und Zuordnungen aus dem Vorjahr
- **Fix: AG-Bewerbungsübersicht** – „Anzeigen“ und „Alle übernehmen“ sind bei langen Namen wieder erreichbar

#### Druckansicht & Listen

- **Neuer Reiter „Klassenfotos“** – alle Fotos einer Klasse alphabetisch auf einer A4-Seite, als Vorschau oder PDF, mit Hinweis auf fehlende Fotos
- **Fremdsprachenliste ausgebaut** – auch für einzelne Klassen und die Jahrgänge 11 und 12, 2. und 3. Fremdsprache werden gemeinsam ausgewertet (wer zwei belegt, steht in beiden Gruppen), zusätzlich als CSV. Nur für Schulleitung, Koordination, Verwaltung und Administration sichtbar
- **Fix: Latein-Liste** zeigt aktuelle Klasse, Zeugnisklasse und Schuljahr des Zeugnisses statt immer des laufenden Jahres, sortiert nach aktueller Klasse
- **Fix: CSV-Export-Knopf** saß im falschen Reiter und brach mit Fehlerseite ab
- **Fix: Bibliotheks-Etikett** – lange Interessenskreise werden kleiner gesetzt statt abgeschnitten

#### PDF-Unterschriften & Fälle

- **Eine Vorlagen-Auswahl beim Anlegen eines Falls** – PDF-Unterschriften-, PDF-Layout- und Formular-Vorlagen sowie „Eigenes PDF hochladen“; bei eigenem PDF öffnet sich direkt der Feld-Editor
- **E-Mail-Einstellungen einer PDF-Vorlage nachträglich änderbar** – bisher schaltete jedes Speichern im Editor den Versand ab. Der Kiosk fragt die Adresse nur noch ab, wenn die Vorlage es verlangt
- **Einladung per E-Mail zu einer Elternportal-Freigabe** (Briefumschlag-Symbol) mit Link, Zugangscode und Ablaufdatum; Freigaben lassen sich endgültig löschen, bereits eingegangene Einreichungen bleiben erhalten
- **Fix: Rückmeldungen auf der Fall-Bearbeitungsseite** werden angezeigt; die Fall-Übersicht passt wieder ins Fenster

#### API & Schnittstellen

- **API-Schlüssel** in den AdminTools – nur einmal angezeigt, als Hash gespeichert, nachträglich bearbeitbar und auf IP-Adressen oder Netze beschränkbar. Freigaben für Stundenpläne (`/api/timetable`), Schülersuche (`students`), Geburtstage (`birthdays`) und die Schüler-Hilfe (`schueler_hilfe`, `device_rentals`, `schueler_hilfe_write`) im Umfang der Handy-App. Abfragen von Schülerdaten werden je Schlüssel protokolliert (180 Tage)
- **PaperPrintScan-Anbindung** – Kopiercodes, Personal und Schüler werden an die neue Druck-, Kopier- und Scanverwaltung übertragen, Lehrkräfte werden automatisch zugeordnet, in Scholar Gelöschtes wird dort deaktiviert. Schüler melden sich an der Freigabestation mit ihrem Ausweis an. Adresse und Token stehen unter „Konfigurationen › PaperPrintScan“ (setzt eine aktuelle PaperPrintScan-Version voraus)
- **Fix: Vertretungsplan wird wieder von WebUntis abgeholt** (der Abgleich brach seit Beginn mit „Method not found“ ab). Original und Vertretung für Lehrkraft, Fach und Raum kommen getrennt an, der Typ wird direkt übernommen, zurückgenommene Vertretungen verschwinden
- **Fix: Magellan-Schülerimport** setzte Schüler im Auslandsjahr in ihre alte 5. Klasse; sie kommen jetzt in die Sammelklasse 100 („Ausland“) und automatisch in die Übersicht „Schüler im Ausland“ – bereits falsch einsortierte Schüler bitte dort korrigieren
- **Fix: Magellan-Lehrerimport** – leere Felder löschen keine gepflegten Angaben mehr (ein Export ohne Geburtsdatum leerte bisher alle Geburtsdaten), außer man hakt es ausdrücklich an. Die Vorschau zeigt echte Altwerte, kennzeichnet „neu / überschreibt / wird geleert“, vergleicht alle Felder und nennt die gefundenen Spalten. Doppelte Platzhalter-Adressen werden durchgezählt statt den ganzen Import abzubrechen
- **Übertragungen ans Elternportal** melden eine Ablehnung jetzt als Fehlschlag statt als Erfolg

#### Administration

- **Kachel „API-Status“** in der Adminübersicht – Ampel für Elternportal, Microsoft 365, RADIUS, OPNsense, PaperPrintScan, WebUntis, moin.schule, IServ, Planora, Scholar-CRM, Ferien-API, isbn.de, DeepL/Google, ElevenLabs, Zammad und Mailserver (nur aktive Schnittstellen). Gelb bei langsamer Antwort, Drosselung, knappem Kontingent oder fehlgeschlagenem Sync, rot bei fehlender Verbindung oder Anmeldung. Geprüft wird alle 15 Minuten, die Ferien-API nur wöchentlich
- **Kachel „Schülerakte“** – pflegt die Auswahl unter „Weitere Dienste“: ein-/ausblenden, aktivieren, umbenennen, sortieren, neu anlegen (Recht `manage_services`)
- **Fehlgeschlagene Cronjobs melden sich per E-Mail** – mit Befehl, Exit-Code und Ausgabe, Entwarnung bei Erfolg, höchstens eine Meldung pro Task und Stunde. „Geplante Tasks verwalten“ zeigt jetzt auch automatische Läufe und die Meldeadresse
- **„EP Synchronisation“ in den Admin-Tools entfällt** – alle Elternportal-Befehle stehen unter den geplanten Aufgaben, neuer Zeitplan „Nur manuell“. „Jetzt ausführen“ meldet Fehlschläge nicht mehr als Erfolg
- **Eigene Rubrik „Statistiken“** für Self-Service, MagicCard und Support
- **Rollenverwaltung ist maßgeblich** – „Aktiv/Inaktiv“ sperrt eine Berechtigung jetzt wirklich für die ganze Rolle; bisher hoben der nächtliche Abgleich und Einzelrechte am Benutzer die Sperre wieder auf. Neuer Befehl `permissions:strip-redundant-direct` räumt Altbestände auf
- **Permanente WLAN-Zugänge brauchen einen Grund** – Übersicht als durchsuchbare Tabelle mit Grund, Anlagedatum und Gültigkeit, abgelaufene Zugänge rot markiert. Fix: Das Präfix wurde bei gecachter Konfiguration ignoriert
- **Revisionsprotokoll** – der Log-Kanal war nicht konfiguriert; Backups, Sicherheits-Wochenbericht und Statistik-Resets werden jetzt festgehalten
- **Fix: Die tägliche Log-Mail** verschickt das Log des abgeschlossenen Vortags statt des gerade begonnenen Tages

#### Update-System

- **Schreibrechte-Prüfung vor dem Update** – Sind Zielverzeichnisse nicht beschreibbar (typisch nach einem Update als root), bricht das Update ab, bevor etwas verändert wird. Neues Reparaturskript `setup/repair_installation.sh` analysiert und repariert halb aktualisierte Installationen
- **Fix: Updates mit neuer Laravel-Version brachen nach `composer install` ab** – Migrationen, Seeder und Cache-Befehle laufen jetzt in einem eigenen PHP-Prozess. Ein abgebrochenes Update holt seine Migrationen beim nächsten Lauf nach
- **Fix: „Update in 00:00“ blieb im Header stehen** – geplante Updates für eine bereits installierte Version werden abgebrochen, überfällige verschwinden nach 10 Minuten aus dem Header

#### Türschild

- **Türschild-Anzeige aus Scholar entfernt** (`/door-view/…` samt Outlook-Kalenderansicht) – Türschilder werden vollständig in Planora verwaltet, jedes Display hat dort einen eigenen geschützten Link. Zuvor gab es noch Verbesserungen an der Schriftgröße, an Zeilenumbrüchen aus Planora und an langen Wörtern

#### Technik & Sicherheit

- **Laravel 13, Livewire 4, PHPUnit 13, Tailwind CSS 4** sowie neue Hauptversionen von Laravel Excel, spatie/laravel-permission, activitylog, authentication-log und backup; alle bekannten Sicherheitslücken geschlossen. Tailwind 4 braucht aktuelle Browser (Safari/iOS 16.4+, Chrome/Edge 111+, Firefox 128+). Nach dem Update `php artisan migrate` ausführen; Livewire liefert seine Skripte unter `/livewire-<hash>/` aus – Firewall- oder Webserver-Regeln ggf. anpassen
- **Keine externen CDNs mehr** – JavaScript, CSS und Schriften kommen vom eigenen Server (betraf u. a. die Self-Service-Seiten, die Alpine.js unversioniert von unpkg luden). Barcode-Scanner nutzen den gepflegten Quagga2-Fork
- **Livewire 3.8.8** schloss vorab eine XSS-Lücke (CVE-2026-81887)
- **Cache deserialisiert keine Objekte mehr**; das Datenbank-Passwort für Backups steht nicht mehr auf der Kommandozeile
- **Ungenutzte Abhängigkeiten entfernt** (u. a. `microsoft/microsoft-graph` mit 20 Folgepaketen, Headless UI, Heroicons, Flowbite); Reste der Todoist-Anbindung samt gespeicherter Zugangsdaten gelöscht
- **Fix: Jeder Login wurde doppelt protokolliert**; die Seite WebUntis-Synchronisation lädt wieder; Drag & Drop im Checklisten-Editor und die AG-Leitung als Freitext funktionieren wieder

#### Sonstiges

- **Quicksearch-Verlauf an jedem Suchfeld** – ein Uhr-Symbol zeigt die letzten 15 ausgewählten Personen (lokal im Browser gespeichert), u. a. in Navigation, Schüler-Hilfe, Zahlungen und Bestellungen
- **Ricoh-Adressbuch** zeigt freie Kopiercodes als „frei 01“, „frei 02“ statt im Klartext
- **Fix: Onboarding-PDF** nennt den IServ-Benutzernamen ohne Domain; die IT-Service-Nummer lautet überall 04131 309 7219
- **Fix: Frischinstallation** – Barcode-Erzeugung und Rollen-Abgleich brachen ab; Self-Service-Übersicht stürzte bei Büchern ohne Autor ab

---

## Elternportal (v2026.10.21-002)

#### Neu

- **AG-Wahl übersichtlicher** – gewählte AGs als farbige Karte mit Markierung „Ausgewählt“, Übersicht aller gewählten AGs mit Anzahl, große Bestätigung nach dem Speichern samt Zeitpunkt. Ein Hinweis erklärt, dass die Auswahl ein Wunsch ist und erst nach der Zuordnung durch die Schule unter „AG – Ausgewählt“ erscheint
- **Lernmittel-Assistent als Einstieg** in den Lernmittelbereich – die alte Anmeldeseite ist entfernt, Altlinks werden umgeleitet. Bankverbindung und Verwendungszweck für Arbeitshefte stehen direkt auf der Infoseite
- **WLAN-Seite zweispaltig** – links Informationstexte, rechts die mitlaufende Freigabe je Kind; auf Smartphone und Tablet untereinander
- **Lernmittel-Navigation** – unter 1024 Pixeln erscheint das Menü-Symbol, Schadensfälle, WLAN und Kontakt liegen im „Mehr“-Menü
- **Update-Prozess prüft vorab die Dateirechte** und bricht sonst ab, bevor etwas verändert wird; die Meldung nennt Dateien und Korrekturbefehl
- **Technik** – Laravel 13, Livewire 4, Vite 8, Tailwind CSS 4; der Server braucht jetzt PHP 8.4 oder neuer

#### Sicherheit

- **PDF einer Schulanmeldung** nur noch über den persönlichen, 24 Stunden gültigen Link abrufbar – vorher ließen sich fremde Anmeldungen über die Adresse aufrufen
- **Abhängigkeiten aktualisiert**, rund 30 ungenutzte Pakete entfernt, API-Token wird nicht mehr protokolliert und zeitkonstant geprüft, TLS-Zertifikat des Update-Servers wird wieder geprüft, Font Awesome lokal ausgeliefert. Zuvor bereits `league/commonmark` 2.10.0 und `nanoid` 3.3.18

#### Fixes

- **AG-Übernahme aus Scholar** – ein leerer AG-Bestand wird korrekt übernommen statt abgelehnt; Anfragen ohne `ags`-Schlüssel löschen weiterhin nichts
- **AG-Wahl** – die Bestätigung verschwand sofort durch ein Neuladen; der Speichern-Knopf verhindert Doppelklicks
- **Fußbereich** überdeckt auf Mobilgeräten und auf der WLAN-Seite keine Schaltflächen mehr; Klick auf den Text neben der Checkbox schaltet das richtige Kind
- **Livewire wurde doppelt geladen**, was unter Livewire 4 zu Skriptfehlern führte
