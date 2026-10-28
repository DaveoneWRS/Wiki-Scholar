---
sidebar_position: 1
---

# IT-Dokumentation – Übersicht

Die IT-Dokumentation führt die gesamte IT-Infrastruktur der Schule an einer Stelle: Standorte und Räume, Geräte, Netze und IP-Adressen, Dienste, Zertifikate, Domains, Verträge und Lizenzen – dazu Wartung, Logbuch und Zugänge für Externe. Anders als persönliche Aufgaben und Notizen ist der Bestand **organisationsweit** sichtbar: Alle, deren Rolle das Modul freigibt, sehen und pflegen dieselben Daten.

Sie ersetzt das frühere Server-Modul. Dessen Server, Logbucheinträge und Tags wurden bei der Umstellung übernommen; alte Adressen leiten weiter.

:::note Modul
Die IT-Dokumentation ist ein eigenes Modul und muss für Ihre Rolle freigeschaltet sein – siehe [Administration](/docs/planora/administration#rollen). Einzelne Bereiche wie Katalog, Import, Gastzugänge und Änderungsvorschläge sind Administratoren vorbehalten.
:::

## Aufbau

In der Seitenleiste steht **IT-Dokumentation** mit den Unterpunkten **Geräte**, **Netz & IPs**, **Dienste**, **Wartung** und **Logbuch**. Alle weiteren Bereiche erreichen Sie über die Kacheln auf der Startseite der IT-Dokumentation:

| Kachel | Inhalt | Handbuch |
|---|---|---|
| 📌 Notizen & Wiedervorlagen | Gemeinsames Notizbrett mit Terminen | [unten](#notizen--wiedervorlagen) |
| 🔧 Wartung | Wiederkehrende Prüfungen mit Checkliste und Nachweis | [Wartung & Logbuch](/docs/planora/it/wartung) |
| 💻 Endgeräte | Tablets, Whiteboards und Arbeitsplätze in Menge pflegen | [Geräte](/docs/planora/it/geraete#endgeräte) |
| 🔀 Netzwerk | Switche, Access Points, Router und Patchfelder | [Geräte](/docs/planora/it/geraete#netzwerkinfrastruktur) |
| 📨 Selbsterfassung | Geräte melden sich per Skript selbst | [Geräte](/docs/planora/it/geraete#selbsterfassung) |
| 📦 Software | Installierte Programme über alle Geräte | [Geräte](/docs/planora/it/geraete#software) |
| 🔑 Zugänge | Konten für Externe mit Ablaufdatum | [Zugänge & Gastzugänge](/docs/planora/it/zugaenge) |
| 🔐 Zertifikate & Domains | Ablaufampel für Zertifikate und Domains | [Dienste & Verträge](/docs/planora/it/dienste#zertifikate--domains) |
| 📄 Verträge & Lizenzen | Laufzeiten, Kündigungsfristen, Ansprechpartner | [Dienste & Verträge](/docs/planora/it/dienste#verträge--lizenzen) |
| 🛡️ Datenschutz | Verarbeitungsverzeichnis, TOM, Datenpannen | [Datenschutz](/docs/planora/it/datenschutz) |
| 🧯 Notfallhandbuch | Druckfassung mit Startreihenfolge und Ansprechpartnern | [Dienste & Verträge](/docs/planora/it/dienste#notfallhandbuch) |
| 📝 Änderungsvorschläge | Vorschläge aus Gastzugängen (Admin) | [Zugänge & Gastzugänge](/docs/planora/it/zugaenge#änderungsvorschläge) |
| 🎫 Gastzugänge | QR-Code-Zugang für den Schulträger (Admin) | [Zugänge & Gastzugänge](/docs/planora/it/zugaenge#gastzugänge) |
| 🏭 Katalog | Hersteller, Modelle und Geräterollen (Admin) | [unten](#katalog) |
| 📥 Import | OPNsense, Wiki-Tabellen und CSV übernehmen (Admin) | [unten](#import) |

Unter den Kacheln stehen die Reiter der Startseite:

| Reiter | Inhalt |
|---|---|
| 📊 Übersicht | Kennzahlen der dokumentierten Infrastruktur |
| 🏫 Standorte & Räume | Gebäude, Räume und Datenschränke |
| 🧩 Verbünde | Virtualisierungs-Verbünde und ihre Hosts |
| 🚩 Tags & Flags | Markierungen für Geräte und Dienste |
| 🔑 Zugangsarten | Kontowelten für [Zugänge](/docs/planora/it/zugaenge) |
| 🔧 Wartungsrubriken | Themenfelder der [Wartung](/docs/planora/it/wartung) |
| 🕵️ Änderungsprotokoll | Wer hat wann was geändert |

## Standorte & Räume

Hier pflegen Sie Standorte (Gebäude) und ihre Räume. Die Ortsangabe eines Geräts folgt der Kette **Standort → Raum → Schrank → Gerät**.

- **Räume** tragen Name, Art und Etage; die Art **Flur** dient für Geräte an Decke oder Wand eines Flurs
- **Datenschränke** (Serverschrank, Wandverteiler, Netzwerkschrank) legen Sie aufklappbar unter ihrem Raum an
- Etagen werden so sortiert, wie man durchs Haus geht: Keller, Erdgeschoss, Obergeschosse, Dach

Räume und Schränke lassen sich auch direkt beim Erfassen eines Netzwerkgeräts anlegen.

## Verbünde

Ein Verbund bildet einen Virtualisierungs-Cluster ab (z. B. Proxmox) samt der physischen Hosts (**Nodes**), aus denen er besteht. Dienste und virtuelle Maschinen werden dem Verbund zugeordnet statt einem einzelnen Node – so bleibt die Angabe auch nach einer Live-Migration richtig.

## Tags & Flags

**Tags** und **Flags** sind Markierungen mit Name und Farbe, Flags zusätzlich mit Symbol und Reihenfolge. Gepflegt werden sie hier, gesetzt an den Geräten und Diensten selbst – dort auch per Schnellmarkierung.

## Notizen & Wiedervorlagen

Das Notizbrett der IT-Dokumentation funktioniert wie die persönlichen [Notizzettel](/docs/planora/notizen), ist aber **gemeinsam** für alle mit dem Modul: Zettel und Telefonnotizen, farbig, anheftbar, in Kategorien.

| Feld | Beschreibung |
|---|---|
| Gehört zu | Optionaler Bezug auf ein Gerät, einen Dienst, ein Zertifikat, einen Vertrag oder eine Lizenz |
| Wiedervorlage am | Termin, an dem der Zettel wieder ansteht, optional mit Uhrzeit |
| Serie | Wiederholung der Wiedervorlage, z. B. jeden Mittwoch, mit optionalem Serienende |

Abhaken einer Serie legt den Zettel nicht ab, sondern rückt ihn auf den nächsten Termin; **↩️ zurücknehmen** macht einen Fehlgriff rückgängig. An Geräten und Diensten erscheinen die zugehörigen Zettel direkt in der Detailansicht oberhalb des Logbuchs.

## Änderungsprotokoll

Das Änderungsprotokoll hält fest, wer wann was geändert hat. Es wird vom System geschrieben, lässt sich weder ändern noch löschen und vermerkt bei vertraulichen Feldern (etwa Lizenzschlüsseln) nur, *dass* sie geändert wurden – nie ihren Wert.

## Katalog

Im Katalog (Admin) pflegen Sie **Hersteller** (mit Webseite und Supportadresse), **Modelle** (mit Artikelnummer und vorgeschlagener Rolle) und **Geräterollen**. Wählt man beim Erfassen ein Modell, übernimmt das Gerät Hersteller und vorgeschlagene Rolle.

## Import

Der Import (Admin) übernimmt vorhandene Bestände in drei Schritten – **Importweg**, **Quelle**, **Vorschau** – aus OPNsense-Exporten, Wiki-Tabellen und CSV-Listen. Die Vorschau zeigt je Zeile, was geschieht; Widersprüche werden gemeldet statt still aufgelöst.

:::warning Keine Passwörter
Die IT-Dokumentation speichert keine Zugangsdaten. Wo ein Zugang gebraucht wird, steht nur ein **Verweis auf den Passwortmanager** – niemals das Passwort selbst.
:::
