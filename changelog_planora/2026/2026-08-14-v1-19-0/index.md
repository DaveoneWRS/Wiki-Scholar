---
slug: v1-19-0
title: "v1.19.0 – Kalender-Arbeitsplatz, Notiz-Board, Türschilder & API"
date: 2026-08-14T18:00:00
authors: [david]
tags: [planora]
---

Sammel-Release für alles seit v1.2.2 – die Versionen `1.3.0` bis `1.19.0` (26.04. – 14.08.2026). Zusammengefasst nach Themen statt nach Einzelversionen.

<!-- truncate -->

## Aufgaben & Board

- **Trello-Board für Aufgaben** (v1.3.0) – Drei Spalten (Geplante, Serien, Ungeplante) mit Drag-and-drop. Projekte, Labels und Kalender sind als Tabs in die Aufgabenseite gewandert, die eigenen Routen `/projects`, `/labels` und `/calendar` entfallen
- **Schnellanlage auf dem Dashboard** (v1.3.0) – QuickAdd-Formular; Listen zeigen Labels und Projekt, „Letzte Aufgaben“ auch erledigte, Abhaken funktioniert als Umschalter
- **Öffentliche Aufgabenseite für Kunden** (v1.5.19 / v1.5.21) – Einzelne Aufgaben lassen sich per nicht erratbarem Token teilen (`/task/{token}`), ohne Anmeldung einsehbar: Titel, Fälligkeit und Status. Die Seite wurde neu gestaltet (Status-Badges, deutsches Datumsformat, Hinweisbox); Unteraufgaben erscheinen anonym als Fortschrittsbalken, der externe Tailwind-CDN ist einem lokalen Build gewichen
- **Anhänge, interne Notiz und Unteraufgaben** (v1.5.20) – Dateianhänge mit MIME-Whitelist, ein nie öffentliches Notizfeld, optional öffentliche Beschreibung, Unteraufgaben direkt im Dialog. Der Bearbeiten-Dialog ist zweispaltig, Karten tragen Badges für öffentlich / Anhänge / Unteraufgaben-Fortschritt
- **Export und Import der eigenen Daten** (v1.6.4) – Aufgaben inkl. Unteraufgaben und Labels sowie Kalendertermine als JSON, mit Dublettenerkennung beim Import. Dazu einheitliche Dialog-Fußzeilen und korrekte Sortierung geplanter Aufgaben nach Fälligkeit
- **Serienaufgaben zählen als erledigt** (v1.16.6) – Beim Abhaken springt eine Serie auf den nächsten Termin und leerte dabei `completed_at`, wodurch die Erledigung für alle Zähler unsichtbar blieb. Jede Erledigung wird jetzt protokolliert, Dashboard und Statistik zählen darüber
- **Serientermine mit Konfliktprüfung** (v1.16.9) – Vor dem Anlegen bzw. Umwandeln einer Serie wird auf Konflikte geprüft und rückgefragt; die Schnellaufgabe kann Serien anlegen, Serienaufgaben tragen optional eine Uhrzeit
- **Ortsfeld mit Route-Knopf** (v1.10.0) – Aufgaben haben wie Termine ein Ortsfeld; daneben ein Knopf, der die Navigation öffnet (auf Android direkt die Maps-App). Der Link entsteht schon beim Tippen, also vor dem Speichern

## Kalender

- **Vollständiger Kalender-Arbeitsplatz** (v1.5.0) – CalDAV, iCal-Import (`.ics`) mit UID-Deduplizierung, Terminbuchung und Terminvorschläge. Buchungen mit Mindest-Vorlauf und maximalem Horizont je Kalender, mehrtägige Slots (Mo–Fr, Sa+So, beliebige Kombination), kalenderübergreifende Blockierung, Inbox für offene Buchungen und Vorschläge, sprechende Kalender-URLs, Aufgabenfälligkeiten als blockierende Termine
- **CalDAV stabilisiert** (v1.5.1 – v1.5.18) – Reihe von Korrekturen an der Sabre-Anbindung: PROPFIND-Routing, Antwort-Bridging zu Laravel, Basis-URL, HTTP-Exceptions, CTag (damit DAVx5 Änderungen von selbst holt), Termine ohne UID sowie von Clients verworfene Termine durch doppelte UID. Aufgaben werden als schreibgeschützte ganztägige Termine exportiert
- **ICS-Abonnements** (v1.7.0) – Fremde Kalender per URL abonnieren, stündliche Synchronisation über `calendar:sync-ics`, Sync-Knopf und Zeitpunkt der letzten Synchronisation in den Einstellungen. Das Dashboard zeigt die heutigen Termine mit Uhrzeit, Ort und Kalenderfarbe
- **Termine und Aufgaben direkt im Kalender bearbeiten** (v1.9.1 / v1.10.0) – Ein Klick öffnet den Bearbeiten-Dialog, Details erscheinen beim Überfahren. Über `sync_tasks` eingeblendete Aufgaben waren bisher unantastbar; sie lassen sich jetzt öffnen, abhaken und per Ziehen umdatieren (in den Monat gezogen entfällt die Uhrzeit, in einen Zeitslot gezogen wird sie gesetzt)
- **Vergangene Termine auf dem Dashboard ausblenden** (v1.16.7); der Kalender startet beim Öffnen wieder auf dem heutigen Tag (v1.16.9)

## Notizen

- **Notiz-Board als Post-it-Wand** (v1.11.0) – Eigenes, abschaltbares Modul: farbige Zettel mit eigenen Kategorien, optional als ToDo mit Fälligkeit und Uhrzeit inkl. Überfällig-Kennzeichnung, Telefonnotizen mit Rückrufnummer, Betreff und „Weiterleiten an“, dazu ein Tag-Pool je Benutzer zum Filtern
- **Papierkorb und Verzahnung mit Kalender/Dashboard** (v1.12.0) – Gelöschte Notizen sind wiederherstellbar; Notiz-ToDos erscheinen wahlweise im Kalender (Ziehen ändert die Fälligkeit) und auf dem Dashboard zum Abhaken
- **Kopier-Knopf** (v1.16.4 / v1.16.5) – Notizinhalt in die Zwischenablage, ohne umgebende Beschriftungen

## Projekte, Server & Zeiterfassung

- **Projekte sortieren, Icons und sichtbare Unterprojekte** (v1.14.0 / v1.14.1) – Der Projektbaum erscheint überall eingerückt mit `↳`, Unterprojekte tragen ein Badge, Sortierung per Drag-and-drop innerhalb der Ebene, Icon-Auswahl im Projekt-Dialog. Ein Projekt kann nicht mehr unter sich selbst gehängt werden
- **Tags für Server** (v1.13.0) – Standort-Tags und allgemeine Tags aus einem gemeinsamen Pool, Filterleiste über der Liste, Suche findet Server auch über ihre Tags. Das wirkungslose Freitextfeld „Standort“ wurde in Tags überführt und entfernt
- **Server-Prüfung mit Rückfrage** (v1.15.0) – Beschrifteter Knopf „✅ Geprüft“, der vor dem Setzen das neue Prüfdatum nennt; der Server-/Log-Dialog scrollt jetzt korrekt statt nach oben aus dem Bild zu wachsen (v1.16.6)
- **Art der Zeiteinträge sichtbar** (v1.15.0) – Alle sechs Eintragsarten mit Symbol und Badge in Tagesliste und Monatstabelle (Arbeit, Urlaub, Krank, Feiertag, Stundenausgleich, Sonstiges); die API kennt dieselben Typen wie die Oberfläche
- **Stundenausgleich belastet das Stundenkonto korrekt** (v1.7.1) – Solche Einträge zählten als geleistete Arbeitszeit und glichen sich mit dem unveränderten Tages-Soll aus. Zusätzlich bleibt das zuletzt gewählte Projekt bei der Schnellaufgabe rund 3 Minuten vorausgewählt
- **Datums- und Uhrzeitfelder im deutschen Format** (v1.9.2)

## Türschild (Door-View)

- **Mehrzeilige Schilder mit Lauftext** (v1.17.0) – Überschrift plus mehrzeiliges Textfeld (Limit von 2.000 auf 5.000 Zeichen). Zu langer Text scrollt langsam nach unten, hält an und beginnt von vorn; auf 10-Zoll-Displays schrumpft die Überschrift zugunsten des Fließtexts. Statt eines starren Reloads alle 10 Sekunden – der jeden längeren Durchlauf abschnitt – fragt die Anzeige `/door-view/state` ab und lädt nur bei echten Änderungen neu
- **Fett, kursiv und unterstrichen** (v1.18.0) – Der Schild-Text ist ein kleines WYSIWYG-Feld; mehr als diese drei Auszeichnungen gibt es bewusst nicht. Beim Speichern fällt alles andere weg. Die API liefert `description` als reinen Text und zusätzlich `descriptionHtml` mit den Auszeichnungen – von dort holt Scholar das Türschild ab

## API & Anbindungen

- **Aufgaben auf der ITSM-Statusseite veröffentlichen** (v1.8.0) – Aufgaben lassen sich als Meldung freigeben (Störung / Geplante Arbeiten / Information) mit eigenem öffentlichem Titel, Text und betroffenem Dienst. Der Feed `GET /api/v1/status-page` ist immer vollständig, damit die Gegenseite ihn spiegeln kann. Beschreibung und interne Notiz werden nie veröffentlicht
- **API-Tokens auf einen Zweck einschränkbar** (v1.9.0) – Wahl zwischen Vollzugriff und „Nur Statusseite lesen“; ein eingeschränktes Token erhält auf allen anderen Endpunkten 403. Bestehende Tokens dürfen unverändert alles
- **Fremdschlüssel für Aufgaben** (v1.16.8) – Aufgaben können einen Schlüssel des anlegenden Systems tragen (`external_ref`, z. B. `scholar:onboarding:user:42`). Existiert dazu bereits eine offene Aufgabe desselben Tokens, gibt `POST /api/v1/tasks` sie zurück, statt ein Duplikat anzulegen – ein wiederkehrender Sync legt dieselbe Aufgabe damit nicht bei jedem Lauf erneut an. Gesucht wird über `?external_ref=` bzw. `?external_ref_prefix=`
- **Gemeinsamer Textvorrat für den Antwort-Assistenten** (v1.19.0) – Das Add-on gibt es für Betterbird und für Firefox an Zammad; beide legen Bausteine, Footer, Platzhalter und gemerkte Anreden unter `GET|PUT|DELETE /api/v1/assistant/library` in Planora ab. Planora verwahrt den Inhalt nur, zusammengeführt wird im Add-on. Eine Revisionszählung verhindert, dass ein Gerät die Arbeit des anderen stillschweigend überschreibt (409 mit aktuellem Stand); Obergrenze 4 MB
- **API für Anhänge, öffentliches Teilen und Unteraufgaben** (v1.6.2)

## Benachrichtigungen

- **Push aufs Handy über ntfy** (v1.16.0) – Fällige Aufgaben, Notiz-ToDos, Termine und Server-Prüfungen kommen als Push an, auch wenn Planora nicht geöffnet ist. `planora:send-reminders` läuft alle fünf Minuten, jede Meldung geht genau einmal raus, Zustellfehler werden erneut versucht. Server-Prüfungen kommen als Tagesübersicht ab 7 Uhr. Einstellbar sind Topic, Vorlaufzeit und vier Kategorie-Schalter, dazu ein Test-Knopf
- **ntfy-Server und Token über die Einstellungen** statt über die `.env` (v1.16.1)
- **Wartungsanzeige im Dashboard** (v1.16.0) – Server mit überfälliger oder in sieben Tagen fälliger Wartung; die Server-Statistik zählte zuvor jeden nicht überfälligen Server als „bald fällig“, „OK“ stand deshalb immer auf 0

## Bedienung auf dem Handy

- **Dashboard und Kalender brauchbar gemacht** (v1.10.1) – Das Dashboard war breiter als der Bildschirm und ließ sich seitlich verschieben; der Bearbeiten-Dialog lief mit Ortsfeld und Speichern-Knopf aus dem Bild und ist jetzt unterhalb von `md` einspaltig als Sheet von unten. Die Knöpfe zum Bearbeiten und Abhaken sind auf Touchscreens dauerhaft sichtbar statt nur bei Maus-Hover. Banner lassen sich ausblenden

## Update & Release

- **Update meldet keinen Erfolg mehr, wenn Dateien fehlschlagen** (v1.16.3)
- **Update-Installer prüft die Version des Archivs** gegen die angeforderte Version (v1.5.18)
- **Automatischer GitHub-Release-Workflow** (v1.6.5 – v1.6.8, repariert in v1.16.2)
- **Migrationen** – Rückfallmechanismus (v1.5.13) und Admin-Berechtigung für `runMigrations` (v1.5.14); Knopf zum Leeren des Caches in den Einstellungen (v1.10.0)
