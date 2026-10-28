---
slug: v1-68-0
title: "v1.68.0 – IT-Dokumentation, Datenschutz, Zeiterfassung nach TV-L & Backup"
date: 2026-10-28T18:00:00
authors: [david]
tags: [planora]
---

Sammel-Release für alles seit v1.19.0 – die Versionen `1.20.0` bis `1.68.0` (16.08. – 28.10.2026). Zusammengefasst nach Themen statt nach Einzelversionen.

<!-- truncate -->

## IT-Dokumentation

- **Neues Modul nach dem Vorbild von NetBox** (v1.37.0) – Ersetzt das bisherige Server-Modul, das nur Name, URL, Version und Freitext kannte und jeden Server an genau ein Konto band. Jetzt werden Standorte, Räume, Geräte, Netze, IP-Adressen, Dienste, Zertifikate, Domains, Verträge und Lizenzen organisationsweit an einer Stelle geführt. Geräte tragen Rolle, Typ und Hersteller samt rollenabhängigen Zusatzfeldern; Verbünde bilden Proxmox-Cluster ab. Der Bestand wandert verlustfrei mit (Server, Logbuch, Tags; Standort-Tags werden zu Räumen), die alten Server-Adressen leiten weiter
- **Prüfungen und Logbuch** (v1.37.0) – Das Modul meldet, was in gewachsener Dokumentation untergeht: feste Adressen im DHCP-Pool, randomisierte MAC-Adressen, doppelte Namen, abgelaufene Zertifikate, verstrichene Kündigungsfristen. Das Logbuch kennt Wartung, Störung, Änderung und Notiz, hängt an beliebigen Objekten und trägt Anhänge. Importer übernehmen OPNsense-Exporte, Wiki-Tabellen und CSV-Listen. Zugangsdaten speichert das Modul bewusst nicht – nur einen Verweis auf den Passwortmanager
- **Änderungsprotokoll** (v1.38.0) – Hält fest, wer wann was geändert hat; vom System geschrieben, weder änderbar noch löschbar. Geheime Felder wie `secret_ref` oder `license_key` werden nur als „geändert“ vermerkt, nie mit Wert. Ausdünnen per `php artisan audits:prune`, bewusst nur von Hand
- **Selbsterfassung der Geräte** (v1.44.0) – Unter `/it/reports` liefert ein Erfassungslink ein PowerShell- oder Shell-Skript, das Hostname, Betriebssystem, Seriennummer, Hardware, Anschlüsse und installierte Software zurückmeldet. Meldungen landen in einem Posteingang, nie direkt im Bestand; der Schlüssel im Link lässt sich erneuern
- **Software-Bestand** (v1.44.0) – Unter `/it/software` geräteübergreifend: welches Programm liegt auf wie vielen Geräten in welchen Versionen. Dazu Monitore samt Endpunkt für Monitoring-Ergebnisse, Flags und Tags mit Schnellmarkierung, Kategorien an Diensten und die `vmid` virtueller Maschinen
- **Gemeinsames Notizbrett mit Wiedervorlagen** (v1.45.0) – Unter `/it/notes` Zettel und Telefonnotizen für die ganze IT, farbig, anheftbar, in Kategorien. Wiedervorlagen auch als Serie; Abhaken rückt eine Serie auf den nächsten Termin. Ein Zettel kann sich auf Gerät, Dienst, Zertifikat, Vertrag oder Lizenz beziehen und erscheint dann in dessen Detailansicht
- **Zugänge für Externe** (v1.45.0) – Unter `/it/access` je Person und Zugangsart eine Zeile mit eigenem Ablaufdatum (z. B. WLAN, Office 365, IServ – die Arten sind frei pflegbar). Ablaufende Zugänge erscheinen in der Wartungsliste des Dashboards und in der täglichen Push-Zusammenfassung. Passwörter nimmt der Bereich nicht entgegen
- **Gastzugänge per QR-Code** (v1.47.0) – Z. B. für den Schulträger: ein Gastpass nennt Gültigkeitsfenster, Sitzungsdauer und freigegebene Bereiche. Gäste schreiben nicht direkt, sondern legen Änderungsvorschläge ab, die in einem Freigabepostfach feldweise übernommen werden; Logbuch und Notizbrett dürfen sie direkt kommentieren. Seit v1.51.3 sind alle Rubriken von `/it` einzeln freigebbar, seit v1.59.0 lassen sich gesperrte Pässe löschen (automatisch spätestens 7 Tage nach dem Sperren)
- **Ansprechpartner am Objekt** (v1.53.1) – Kontakte mit Rolle direkt an Gerät und Dienst; die Kontaktliste zeigt, woran ein Kontakt hängt. Bei Backup und Monitoring eines Dienstes werden die häufigsten Einträge als Vorschläge angeboten
- **Dateien an Lizenzen** (v1.53.9) – Lizenzzertifikat, Rechnung, Lizenzvertrag; beliebig viele Dateien je Lizenz, abgelegt auf nicht öffentlichem Speicher
- **Dienstmaske mit Reitern** (v1.53.5) – Dienst, Technik, Verantwortung, Dokumentation, Wartung; ein beanstandetes Feld meldet sich als roter Punkt am Reiter. Der Freitext „Update-Cycle“ ist in die Wartung umgezogen (v1.53.6). Der Dienst-Steckbrief zeigt die zugehörigen Zertifikate und DNS-Einträge (v1.49.0), Dienste zeigen die IP-Adressen ihres Hosts und sind darüber suchbar (v1.46.1)
- **Geräteliste und -formular** (v1.53.0 – v1.58.2) – Doppelte Gerätenamen führen zu einer Rückfrage („Trotzdem anlegen“) statt zu einer Sperre; Hersteller und Modelle richten sich nach der gewählten Rolle. Die Liste zeigt physisch/virtuell, die Suche hält mehrere Begriffe als Chips fest, das Feld „Node“ ist durchsuchbar. Ereigniszeitpunkte ohne Uhrzeit stehen als reines Datum da

## Netzwerk, Räume & IPAM

- **IPAM** (v1.37.0) – Präfixe und Bereiche werden numerisch gerechnet und sortiert (.9 vor .10), mit Auslastung und hinterlegter Vergaberegel. Bereiche lassen sich aufklappen und zeigen ihre vergebenen Adressen (v1.53.0). Die Suche findet auch Gerätenamen, der Suchbegriff steht in der URL, und IP-Adressen auf der Geräteseite führen direkt ins IPAM (v1.67.3)
- **Netzwerkliste mit Dialogen** (v1.48.0) – `/it/network` zeigt lesbare Werte (Raum, Schrank, Uplink samt Port, Status); „Bearbeiten“ öffnet das Gerät im Dialog. Hersteller und Modell lassen sich dort setzen (v1.51.1), Netzwerkgeräte wandern beim Löschen in einen Papierkorb (v1.53.0)
- **Datenschränke** (v1.48.0 / v1.48.1) – Neue Ebene Standort → Raum → Schrank → Gerät (Serverschrank, Wandverteiler, Netzwerkschrank), auch in der Geräteliste mit Filter und Plakette
- **Räume und Flure direkt beim Gerät anlegen** (v1.47.1 / v1.51.2) – „+ Neuer Raum“ bzw. „+ Neuer Flur“ neben der Raumauswahl; Access Points und Wandverteiler können im Flur hängen
- **Patchfelder, Ports und Patchkabel** (v1.53.10 – v1.53.13) – Neue Geräterolle „Patchfeld“, Ports von Patchfeldern und Switchen einzeln beschriftbar. Patchkabel verbinden Port mit Port, Endgeräte hängen an Ports. Die Geräteseite zeigt eine Frontansicht der Portbelegung (grün verbunden, blau beschriftet, grau frei); Endgeräte zeigen „Angeschlossen an“ bis zum Switch

## Wartung

- **Wartungspläne mit Nachweis** (v1.46.0) – Für alles, was turnusmäßig anfällt (Restore-Test, USV-Akkutausch, Firewall-Review, DGUV-V3-Prüfung, Inventur). Ein Plan hängt an Gerät, Dienst, Verbund, Standort, Raum, Vertrag, Zertifikat, Domain, Lizenz – oder an nichts. Starrer Rhythmus hält den Stichtag, gleitender zählt ab dem Wartungstag. Jede Durchführung schreibt einen Nachweis mit eingefrorener Checkliste und einen Logbucheintrag. Dazu ein Katalog von 40 vorgedachten Wartungen einer Schul-IT, sieben davon als Pflichtprüfung mit Rechtsgrundlage
- **Wartungsampel in Geräte- und Dienstliste** (v1.52.1) – Grün: Wartung hinterlegt, orange blinkend: Termin verpasst, rot: gar keine Wartung dokumentiert
- **Wartung in den Bearbeitungsmasken** (v1.53.2 / v1.53.3) – Dienst, Gerät und Netzwerkgerät zeigen ihre Wartungspläne direkt beim Bearbeiten; Escape schließt dabei nur das oberste Fenster (v1.53.4)
- **Wartungsliste verbessert** (v1.53.7 – v1.57.4) – Die Suche findet auch das Objekt (z. B. „PVE1“), „Heute fällig“ als eigenes Etikett, Objektart und -name stehen vor dem Titel. Vom Dashboard führt ein Klick direkt zum richtigen Plan; Pläne gelöschter Objekte wandern mit in den Papierkorb (v1.53.8)

## Datenschutz & Notfallhandbuch

- **Verzeichnis der Verarbeitungstätigkeiten** (v1.50.0) – Nach Art. 30 DSGVO unter `/it/privacy` mit Druckansicht; Verfahren hängen an Diensten und Verträgen, fehlende Pflichtangaben werden als Lücke gemeldet. Verträge tragen den Stand der Auftragsverarbeitung (Art. 28)
- **Datenschutzverletzungen** (v1.50.0) – Als Kennzeichen an Störungen im Logbuch, mit 72-Stunden-Frist, Risikobewertung, Meldung und Benachrichtigung (Art. 33/34) sowie eigener Druckansicht
- **Löschkonzept für Planora selbst** (v1.50.0) – `itdoc:prune-personal-data` entfernt täglich personenbezogene Daten nach einstellbaren Fristen (Selbsterfassung, beendete Zugänge, erledigte Telefonnotizen, ausgemusterte Geräte, alte Protokolle)
- **TOM, Schutzbedarf und Löschnachweis** (v1.51.0) – Technische und organisatorische Maßnahmen (Art. 32) mit Überprüfungsnachweis über Wartungspläne; Dienste tragen Schutzbedarf je Grundwert (BSI 200-2) und RTO/RPO, entsorgte Geräte einen Löschnachweis
- **Notfallhandbuch** (v1.51.0) – Druckseite unter `/it/emergency` mit Ansprechpartnern und Vertragsnummern, Startreihenfolge aus den Dienst-Abhängigkeiten und Vorgehen bei Störung
- **Datenschutz als eigenes Modul** (v1.52.0) – Eine Rolle für die oder den Datenschutzbeauftragten bekommt nur dieses Modul samt eigenem Menüpunkt, ohne Geräte, Netze und Zugänge zu sehen. Neue Befugnis „Verarbeitungsverzeichnis ändern“, eigenes Änderungsprotokoll auf der Datenschutzseite

## Aufgaben & Dashboard

- **Planungsraster für den Tag** (v1.28.0 – v1.30.0) – Neuer Anzeigemodus `/tasks?display=grid`: der Tag als Viertelstunden-Raster über der Arbeitszeit, daneben fällige und undatierte Aufgaben. Ziehen oder Antippen legt eine Aufgabe auf eine Uhrzeit, „Automatisch verteilen“ füllt die Lücken nach Label-Gewicht und Priorität. Serien- und Kalendertermine liegen fest; vergangene Viertelstunden fallen am heutigen Tag heraus, eine orange Jetzt-Marke zeigt den Übergang
- **Schnellaufgabe als aufklappbares Fenster** (v1.33.0) – Auf dem Dashboard steht nur noch eine Zeile, der Rest klappt beim Überfahren auf. Eingaben bleiben über Seitenwechsel erhalten, Entwürfe lassen sich zwischenspeichern (bis zu zehn). Der Knopf „Details…“ legt die Aufgabe an und öffnet sie direkt im Bearbeiten-Fenster (v1.20.0)
- **Schneller Datum und Uhrzeit setzen** (v1.30.0 / v1.31.0) – Knöpfe „Heute“ und „Morgen“ unter dem Datumsfeld; die Uhrzeit wählt man aus einem aufklappbaren Raster (Stunde, dann Viertelstunde) statt aus einer langen Scrollliste
- **Dashboard frei anordnen** (v1.64.0) – Kacheln wie auf einer Pinnwand zwischen zwei oder drei Spalten ziehen, ausblenden und einklappen. Neue Karte „Tagesvorschau“ mit den offenen Aufgaben eines frei gewählten künftigen Tages, inklusive künftiger Serientermine (v1.63.0)
- **Serienaufgaben im Dashboard** (v1.67.2) – Der Bearbeiten-Dialog zeigt und ändert die Wiederholung; Serien sind in den Listen mit 🔁 markiert
- **Label-Farben in den Dialogen** (v1.34.0) – Ausgewählte Labels erscheinen sofort komplett in ihrer Farbe, einheitlich in Board, Liste, Schnellaufgabe und Dashboard
- **Board-Schnelleintrag übernimmt das gewählte Projekt** (v1.30.0) – Neue Aufgaben verschwinden nicht mehr sofort aus der Spalte; neue Projekte erben die aktive Ansicht (Beruflich/Privat), und die Projektauswahl im Dashboard folgt ihr (v1.28.0)
- **Aufgaben mit Dauer** (v1.22.0) – Fällige Aufgaben mit Zeitbedarf belegen Zeit im Tag und nehmen sie aus den buchbaren Slots heraus

## Projekte & Freigaben

- **Projekte für alle freigeben** (v1.53.15) – Alle Benutzer sehen die Aufträge und dürfen neue anlegen, bearbeiten aber nur ihre eigenen; Besitzer sehen und bearbeiten Aufträge, die andere in ihren Projekten angelegt haben. Neue Aufträge gibt es nur noch mit entsprechendem Recht im Projekt, auch über die API (v1.53.17)
- **Geteilte Projekte nutzbar** (v1.53.14 – v1.53.20) – Geteilte Unterprojekte erscheinen beim Empfänger auch ohne geteiltes Oberprojekt; das Badge „Aufträge anlegen“ führt direkt zur Aufgabenliste des Projekts, und die Dashboard-Schnellaufgabe bietet fremde Projekte an, in die man Aufträge legen darf

## Kalender & Terminbuchung

- **Buchungs-Mails und Selbstverwaltung für Gäste** (v1.22.0) – SMTP-Postfach in den Einstellungen; Anlage, Bestätigung, Verschiebung und Absage gehen mit ICS-Anhang an Gast und Kalenderbesitzer, Gäste können ihren Termin ohne Konto verschieben oder absagen. Die Mails an Gäste stehen in der Sie-Form (v1.23.0). Buchungsanfragen lassen sich direkt auf dem Dashboard annehmen oder ablehnen
- **Erneuerbarer Buchungs-Link** (v1.22.0) – „Erneuern“ macht den alten Link sofort ungültig, iCal-Abos und der öffentliche Kalender-Link bleiben bestehen
- **Serientermine sperren Buchungszeit** (v1.24.0) – Künftige Termine von Serienaufgaben waren für die Verfügbarkeit unsichtbar und damit buchbar. Sie werden jetzt berechnet, sperren ihren Zeitraum und erscheinen im Kalender blass und schreibgeschützt
- **Buchungsformular** (v1.23.0) – Einzelne Wochentage im Zeitslot-Formular sind wieder anklickbar, Buchungsfelder per Drag-and-drop sortierbar
- **Informative Kalender** (v1.29.0) – Neue Einstellung, damit Termine z. B. abonnierter Feeds oder Geburtstage im Planungsraster keine Zeit sperren
- **Arbeitswoche als Kalenderansicht** (v1.28.0) – Wochenansicht ohne Samstag und Sonntag
- **Aufgaben in der Projektfarbe** (v1.62.0) – Aufgaben im Kalender sind in der Farbe ihres Projekts gefüllt, die Schrift passt sich automatisch an

## Notizen

- **Lange Zettel kürzen** (v1.21.0) – Lange Texte zeigen sechs Zeilen und darunter „mehr“, statt die Spalte in die Länge zu ziehen
- **Formatierung und freie Anordnung** (v1.53.11) – WYSIWYG mit fett, kursiv und Links (Strg+B/I/K), URLs werden automatisch verlinkt; Post-its per Drag-and-drop frei anordnen
- **Notizen teilen, als Kopie senden, Verlauf** (v1.53.18) – Geteilte Notizen bearbeiten alle gemeinsam, mit Rückfrage bei gleichzeitiger Änderung; „Als Kopie senden“ legt eine unabhängige Notiz an. Ein Änderungsverlauf hält 90 Tage lang jeden Stand samt Bearbeiter fest und kann ihn wiederherstellen

## Türschild

- **Eigene Displays mit eigenem Link** (v1.54.0) – Statt einer offenen Türanzeige gibt es Türschild-Displays je Benutzer mit geheimem, erneuerbarem Link (`/door/{token}`), optionaler IP-Sperre und eigener Darstellung (Größen-Presets für 7"/10"/24", Schriftfaktor, Theme, Uhr u. a.) samt Live-Vorschau. Schilder wählen, auf welchen Displays sie erscheinen. Die offenen Endpunkte `/door-view/start`, `GET/PUT /api/v1/signs/doorview` und `GET /api/v1/signs/active` sind entfallen
- **Zeitgesteuert aktivieren** (v1.25.0) – Vorlagen lassen sich zu einem Startzeitpunkt mit optionalem Ende einplanen, laufende Schilder auf Wunsch punktgenau beenden; neuer Abschnitt „Geplant“
- **Türschild an Aufgaben hängen** (v1.26.0 / v1.27.0) – Eine Vorlage an der Aufgabe erzeugt ein Schild für deren Zeitraum, das Verschieben, Abhaken und Löschen automatisch folgt. Ein einstellbarer Vorlauf hängt es vorher auf, abgenommen wird es erst beim Erledigen. Geplante Schilder werden durch „Aktivieren“ oder „Alle deaktivieren“ nicht mehr versehentlich abgeschaltet (v1.49.1)
- **Zeilenumbrüche in der Überschrift** (v1.32.0) – Enter setzt einen Umbruch; die Überschrift wird verkleinert, bis das längste Wort in eine Zeile passt

## Zeiterfassung

- **Regelwerk nach TV-L** (v1.57.0) – Vorlagen für TV-L je Land, TV-H Hessen und Sonderfälle, jeder Wert anpassbar. Feiertage je Bundesland werden selbst berechnet, 24.12./31.12. sind freigestellt; Pausen nach § 4 ArbZG werden ergänzt, ab 10 Stunden gibt es eine Warnung. „Gültig ab“ legt einen neuen Plan an, das Stundenkonto rechnet jeden Tag mit dem damals gültigen. Korrigiert: Abwesenheiten zählten zusätzlich zum abgesenkten Soll als Plusstunden
- **Keine Überschneidungen mehr** (v1.57.1) – Web, API und Stechuhr lehnen sich überschneidende Arbeitszeit ab, bestehende Überschneidungen werden markiert
- **Stechuhr mit Tagesstand** (v1.58.0) – Erfüllte Zeit, Tagessoll, fehlende Zeit und die Uhrzeit, zu der das Soll erreicht ist, inklusive Pflichtpausen
- **Jahresübersicht und neue Kacheln** (v1.65.0 – v1.66.0) – Je Monat Soll, Ist, Plus/Minus und Saldo samt Übertrag; die Urlaubskachel zeigt Gesamt, Verbraucht und Verfügbar, die Kacheln nennen ihre Differenz zum Soll und den Saldo-Verlauf
- **Statistik rechnet wie das Stundenkonto** (v1.67.0) – Ist gegen Soll im Zeitraum, Diagramme mit Soll-Markierung, Arbeitszeit nach Projekt; Urlaub und Krankheit zählen nicht mehr als Arbeit. Manuelle Einträge nur noch an eigenen Projekten (v1.67.1)
- **Monatserster fehlt nicht mehr** (v1.64.1) – Einträge vom 1. eines Monats ohne Uhrzeit fielen aus Übersicht und Report heraus

## Datensicherung

- **Verschlüsseltes Datenbank-Backup** (v1.60.0 / v1.61.0) – Unter Einstellungen → Datenbank-Backup (nur Administratoren) als verschlüsseltes `tar.gz` mit Datenbank und optional allen Dateianhängen. AES-256 mit eigenem Passwort, auch ohne Planora mit `openssl` und `tar` zu öffnen; dazu `planora:backup-decrypt`. Downloads werden protokolliert
- **Backup wieder einspielen** (v1.68.0) – Eine Sicherung hochladen und mit dem aktuellen Stand zusammenführen: vorhandene Einträge wahlweise ignorieren oder überschreiben (Bestätigung durch Eintippen von `UEBERSCHREIBEN`), gelöscht wird nie. Dateianhänge optional, alles in einer Transaktion, Sicherungen neuerer Versionen werden abgelehnt; danach gibt es eine Zusammenfassung je Tabelle
- **Datenexport der IT-Dokumentation** (v1.44.0) – Sicherung und Wiederherstellung als Datei, eine Prüfung erzwingt, dass jede neue Tabelle mitgesichert wird

## Rollen & Einstellungen

- **Rollenverwaltung** (v1.35.0) – Rollen bündeln Adminrechte und Modulfreigaben; was die Rolle nicht freigibt, kann auch der persönliche Schalter nicht öffnen. Statistiken und Benutzerverwaltung sind in die Einstellungen gewandert (alte Adressen leiten weiter), das Modul Open Claude ist entfallen
- **Besondere Befugnisse** (v1.49.0) – Z. B. „Auf der Statusseite veröffentlichen“: nicht mehr jeder, der Aufgaben pflegen darf, spricht öffentlich im Namen der Schule. Die API prüft dieselbe Befugnis (403)
- **Benutzerliste ohne horizontales Scrollen** (v1.53.16)

## API & Android-App

- **REST-API der IT-Dokumentation** (v1.38.0) – Vollständig unter `/api/v1/it/`, mit Massenoperationen und neuem Token-Scope `itdoc:read` für reinen Lesezugriff, etwa für ein Monitoring. Seit v1.37.0 liefert `/api/v1/servers` organisationsweit statt nur eigene Objekte. Ein Fehler, bei dem `PATCH` auf mehrere IT-Endpunkte mit 500 endete, ist behoben (v1.58.3)
- **Offline-Abgleich für die Android-App** (v1.54.1 – v1.57.2) – Neuer Endpunkt `GET /api/v1/sync` mit Delta und ID-Listen; er liefert nach und nach Module, Zeiteinträge, Stundenkonto, Feiertage und Urlaubskonto, persönliche Notizen sowie Kennzeichen für IT-Modus und Adminrechte. Dazu Türschild-Endpunkte (Board, Vorlage aufhängen, umschalten), Notizen-CRUD und mehr Details an Geräten, Ports und Projekten. Behoben: Projekte, Kalender und Termine ließen sich über die API nicht abrufen, bearbeiten oder löschen

## Technik

- **CSS-Bundle neu gebaut** (v1.22.1, v1.29.0) – Fehlende Utility-Klassen hatten u. a. die Seitennavigation der Einstellungen und das Planungsraster zerlegt
- **Tests und Formatierung** (v1.38.1, v1.53.1) – Beispieltest durch einen echten Test der Wurzelweiterleitung ersetzt; Pint meldet über den ganzen Baum keine Verstöße mehr
