---
sidebar_position: 2
---

# Geräte

Geräte sind das Herzstück der IT-Dokumentation: Server, virtuelle Maschinen, Netzwerktechnik, Drucker, Tablets und Arbeitsplätze. Je nach Art pflegen Sie sie in einer von drei Listen – alle zeigen auf dieselben Geräte.

| Liste | Gedacht für |
|---|---|
| **Geräte** (Seitenleiste) | Alle Geräte mit vollem Datensatz, vor allem Server und virtuelle Maschinen |
| **💻 Endgeräte** (Kachel) | Tablets, Whiteboards und Arbeitsplätze in großer Zahl |
| **🔀 Netzwerk** (Kachel) | Switche, Access Points, Router und Patchfelder |

## Geräteliste

Die Liste unter **Geräte** lässt sich nach Rolle, Status, Raum, Schrank, Verbund und Tags filtern. Vor dem Namen steht, ob ein Gerät physisch oder virtuell ist; neben dem Status zeigt ein Schraubenschlüssel die [Wartungsampel](/docs/planora/it/wartung#wartungsampel).

Das Suchfeld findet Geräte auch über ihre IP-Adressen. Mit **Enter** halten Sie einen Suchbegriff als Chip fest und können weitere hinzufügen – ein Gerät erscheint, sobald es zu einem der Begriffe passt. Komma oder Semikolon trennen mehrere Begriffe auf einmal.

### Gerät anlegen

Mit **+ Neues Gerät** öffnet sich das Formular. Es ist in Abschnitte gegliedert:

| Abschnitt | Inhalt |
|---|---|
| 🖥️ Stammdaten | Name, Rolle, Hersteller, Modell, Status, Hostname, Seriennummer |
| 📍 Wo steht das Gerät? | Standort, Raum und Schrank |
| 📦 Wo läuft das Gerät? | Bei virtuellen Geräten: Verbund, Node und VM-ID |
| 💻 Technik und Zuständigkeit | Betriebssystem, Prozessor, RAM, Speicher, Verwaltungsadresse, zugeordnete Person |
| 🏷️ Inventar, Kauf und Garantie | Inventarnummer, Kaufdatum, Garantie bis |
| 🗓️ Prüfung | Prüfintervall und nächste Prüfung |
| 🔐 Verweis auf den Passwortmanager | Nur der Fundort, niemals das Passwort selbst |
| 🔖 Markierungen | Tags und Flags |

Hersteller und Modelle richten sich nach der gewählten Rolle; das Häkchen **Nur Hersteller und Modelle, die zur Rolle passen** lässt sich abwählen. Gibt es den Namen bereits, weist der Dialog darauf hin – der Knopf heißt dann **Trotzdem anlegen**.

Der Gerätestatus folgt dem Lebenszyklus: **Geplant**, **Vorbereitet**, **Aktiv**, **Offline**, **Außer Betrieb**, **Entsorgt**. Für entsorgte Geräte tragen Sie Datum, Person, Art der Datenlöschung und einen **Vernichtungsnachweis** ein; fehlt er, meldet Planora das.

:::note Prüfintervall
Ein Prüfintervall legt automatisch den Wartungsplan **Version prüfen** an. Prüfintervall und Termin am Gerät bleiben mit diesem Plan verbunden – siehe [Wartung](/docs/planora/it/wartung).
:::

### Detailseite

Ein Klick auf ein Gerät öffnet die Detailseite mit Stammdaten, Netzwerk, Vertrag und Garantie, Dokumentation und Zusatzfeldern. Dazu kommen:

- **Anschlüsse** mit MAC-Adresse und IP-Adressen; IP-Adressen führen ins [IPAM](/docs/planora/it/netz)
- **Dienste**, die auf dem Gerät laufen, sowie VMs und Container darunter
- **📦 Installierte Software** und **📨 Zuletzt gemeldet** aus der Selbsterfassung
- **Ansprechpartner** mit ihrer Rolle (z. B. Support oder Verantwortlich) – sie erscheinen im [Notfallhandbuch](/docs/planora/it/dienste#notfallhandbuch)
- **Wartungspläne**, **Notizen** und **Logbuch** des Geräts
- Bei Switchen und Patchfeldern die **Portbelegung**

## Endgeräte

Die Liste **💻 Endgeräte** ist auf Menge ausgelegt: Mit **+ Endgerät** legen Sie schnell neue Geräte an. Über die Auswahl mehrerer Zeilen setzen Sie gesammelt Raum (**📍 Zuweisen**), Status (**🔁 Setzen**) oder Tags (**🏷️ Anhängen**). **Geräteseite** führt zur vollständigen Detailseite.

## Netzwerkinfrastruktur

Die Liste **🔀 Netzwerk** zeigt Switche, Access Points, Router und Patchfelder mit Raum, Schrank, Uplink samt Port und Status. Filtern lässt sie sich nach Standort, Etage, Raum, Schrank, Rolle und Status. **+ Netzwerkgerät** und **✏️ Bearbeiten** öffnen denselben Dialog:

| Abschnitt | Inhalt |
|---|---|
| 🖥️ Stammdaten | Name, Rolle, Hersteller, Modell, Status |
| 📍 Wo steht das Gerät? | Standort, **Raum oder Flur**, Schrank – mit **+ Neuer Raum**, **+ Neuer Flur** und **+ Neuer Schrank** direkt im Dialog |
| 🔌 Netz | Uplink und Uplink-Port; ein Ring aus Uplinks wird abgewiesen |
| 🛠️ Verwaltung | Management-Adresse und Management-URL |
| 🏷️ Inventar | Inventarnummer und Seriennummer |

### Ports, Patchfelder und Patchkabel

Bei Switchen und Patchfeldern öffnet **🔢 Ports** einen Dialog, in dem Sie die Portanzahl festlegen und jeden Port beschriften. Zusätzlich lassen sich Ports verbinden:

- **Patchkabel** – Port zu Port zwischen Patchfeld und Switch; erscheint auf beiden Seiten
- **Endgerät am Port** – z. B. Access Point, Drucker oder Server

Auf der Geräteseite zeigt der Kasten **Portbelegung** eine Frontansicht: grün verbunden, blau beschriftet, grau frei. Endgeräte zeigen unter **🔌 Angeschlossen an**, an welchem Port sie bis zum Switch hängen. Die Suche der Netzwerkliste findet Geräte auch über Portbeschriftungen und angeschlossene Endgeräte.

### Papierkorb

Administratoren können Netzwerkgeräte direkt in der Liste löschen. Gelöschte Geräte liegen im Papierkorb (Kästchen in der Filterzeile) und lassen sich mit **↩️ Zurückholen** wiederherstellen. **Papierkorb leeren** entfernt sie endgültig; ihre IP-Adressen bleiben im IPAM stehen, das Logbuch bleibt erhalten.

## Selbsterfassung

Unter **📨 Selbsterfassung** steht ein **🔗 Erfassungslink** mit einem **Windows-Skript (.ps1)** und einem **Linux-Skript (.sh)**. Das Skript liest auf dem Rechner Hostname, Betriebssystem, Seriennummer, Hardware, Datenträger, Anschlüsse und installierte Software aus und meldet sie an Planora.

Jede Meldung landet zunächst im **Posteingang** – nie unmittelbar im Bestand. Dort wählen Sie:

- **Einem vorhandenen Gerät zuordnen** – die Softwareliste des Geräts wird aktualisiert, alles andere am Gerät bleibt unangetastet
- **Als neues Gerät anlegen** – mit Name, Rolle und Raum

Meldet sich ein bereits zugeordnetes Gerät erneut, wird seine Softwareliste automatisch nachgeführt.

:::warning
Der Zugangsschutz ist der Schlüssel im Erfassungslink. **Schlüssel erneuern** macht alle bereits verteilten Skripte auf einen Schlag wertlos.
:::

## Software

Unter **📦 Software** sehen Sie die gemeldeten Programme über alle Geräte hinweg: welches Programm auf wie vielen Geräten liegt, in welchen Versionen und auf welchen Geräten. Die Suche greift auf Name und Version; sortiert wird **Nach Verbreitung** oder **Nach Namen**.

## Überwachung

Ein externes Monitoring kann seine Ergebnisse an Geräte und Dienste melden. Der Live-Status erscheint dann an der Detailseite; bleiben Meldungen länger aus, gilt der Status als veraltet und wird grau statt grün dargestellt.
