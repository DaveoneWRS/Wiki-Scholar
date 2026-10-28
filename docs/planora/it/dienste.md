---
sidebar_position: 4
---

# Dienste & Verträge

Ein **Dienst** ist das, was Nutzerinnen und Nutzer tatsächlich verwenden – etwa Scholar, IServ, der RADIUS-Server oder das WLAN. Er läuft auf einem Gerät oder einem Verbund und hängt oft von weiteren Diensten, Zertifikaten und Verträgen ab. Diese Seite beschreibt Dienste, Zertifikate & Domains, Verträge & Lizenzen sowie das Notfallhandbuch.

## Dienstliste

Unter **Dienste** stehen alle erfassten Dienste mit Status, Host und dessen IP-Adressen. Filter gibt es nach Art, Kategorie, Host und Status; die Suche findet Dienste auch über die IP-Adressen ihres Hosts. Neben dem Status zeigt ein Schraubenschlüssel die [Wartungsampel](/docs/planora/it/wartung#wartungsampel).

### Dienst anlegen und bearbeiten

**+ Neuer Dienst** bzw. **✏️ Bearbeiten** öffnet die Dienstmaske mit fünf Reitern:

| Reiter | Inhalt |
|---|---|
| Dienst | Name, Art, Kategorie, Status, Kurzbeschreibung, wo der Dienst läuft (Verbund bzw. Gerät), wer ihn nutzt, Betriebszeit und Vorgehen bei Störung |
| Technik | Netzwerk-Hinweis, Ressourcen, Web-URL, Absicherung durch **Backup** und **Monitoring**, Logdateien, Zugriffsrechte, Datenintegrität |
| Verantwortung | Wer den Dienst betreibt und verantwortet (Schule oder Schulträger), Grundlage der Zusammenarbeit, Schutzbedarf und Wiederanlauf |
| Dokumentation | Installationsanweisung, weitere Dokumentation, Verweis auf den Passwortmanager, Überwachung |
| Wartung | Wartungspläne des Dienstes – sie werden sofort gespeichert, nicht erst mit **Speichern** |

Ein fehlerhaftes Feld meldet sich als roter Punkt am Reiter; beim Speichern springt die Maske dorthin. Bei **Backup** und **Monitoring** schlägt Planora die im Bestand häufigsten Einträge zum Anklicken vor.

### Schutzbedarf und Wiederanlauf

Unter **🎯 Schutzbedarf und Wiederanlauf** stufen Sie den Dienst je Grundwert (Vertraulichkeit, Integrität, Verfügbarkeit nach BSI 200-2) ein und legen die **höchste Ausfallzeit** und den **höchsten Datenverlust** in Stunden fest (RTO/RPO). Diese Angaben nutzt das [Notfallhandbuch](#notfallhandbuch).

### Detailseite

Der **Steckbrief** eines Dienstes zeigt alle Angaben auf einen Blick. Dazu kommen:

| Bereich | Inhalt |
|---|---|
| 🔌 Ports | Port, Protokoll und ob er aus dem Internet erreichbar ist |
| 🔗 Abhängigkeiten | **⬇️ Hängt ab von** und **⬆️ Wird gebraucht von**; gegenseitige Abhängigkeiten werden markiert |
| 🔐 Zertifikate / 🌐 DNS-Namen | Zertifikate und DNS-Einträge, die auf den Dienst zeigen |
| 🛡️ Verarbeitungen | Verfahren aus dem [Verarbeitungsverzeichnis](/docs/planora/it/datenschutz) |
| Ansprechpartner, Wartung, Notizen, Logbuch | wie bei Geräten |

## Zertifikate & Domains

Die Seite hat zwei Reiter:

- **Zertifikate** – sortiert nach Ablaufdatum, mit Common Name, weiteren Namen (SAN), Aussteller, Gültigkeit, Erneuerungsverfahren (z. B. **♻️ Automatisch**) und Bezug zu Dienst, Gerät oder Domain. Eine Ampel zeigt **🟠 Läuft bald ab** und **🔴 Abgelaufen**
- **Domains** – registrierte Domains mit Verlängerungsdatum und den wichtigsten DNS-Einträgen

## Verträge & Lizenzen

Die Seite hat drei Reiter:

| Reiter | Inhalt |
|---|---|
| Verträge | Anbieter, Vertrags- und Kundennummer, Laufzeit, Kündigungsfrist, Kosten; darunter **Vertragspositionen**, etwa geleaste Kopierer mit Seriennummer und Raum. Dazu der Stand der **Auftragsverarbeitung** (Art. 28 DSGVO) mit Unterauftragnehmern und Drittland-Kennzeichen |
| Lizenzen | Softwarelizenzen mit Sitzplätzen (gesamt und belegt), Gültigkeit und Vertrag; Registriercode nur für Administratoren sichtbar. Unter **Dateien** lassen sich Lizenzzertifikate, Rechnungen oder Lizenzverträge ablegen |
| Ansprechpartner | Firmen und Personen hinter Verträgen, Geräten und Domains – mit Angabe, woran sie hängen |

Ampeln markieren **🟠 Endet in 90 Tagen**, **🔴 Kündigungsfrist verstrichen** bzw. **Abgelaufen** und **🛡️ AV-Vertrag fehlt**. Ablaufende Verträge, Lizenzen und Zertifikate erscheinen außerdem in der Dashboard-Kachel **Wartung & Ablauf** und in der täglichen Push-Übersicht.

:::note
Wer im Notfallhandbuch stehen soll, wird zusätzlich auf der Detailseite des Geräts oder Dienstes als Ansprechpartner (z. B. Support oder Verantwortlich) verknüpft.
:::

## Notfallhandbuch

Die Kachel **🧯 Notfallhandbuch** erzeugt eine Druckseite für den Ernstfall – zum Ausdrucken, damit sie auch dann vorliegt, wenn Planora selbst nicht erreichbar ist. Sie enthält:

- **Ansprechpartner** mit Vertragsnummern
- die **Startreihenfolge** der Dienste aus ihren Abhängigkeiten; Dienste, die gegenseitig voneinander abhängen, starten gemeinsam
- die **Dienste nach Verfügbarkeitsbedarf** mit dem jeweiligen Vorgehen bei Störung

:::tip
Drucken Sie das Notfallhandbuch nach größeren Änderungen neu aus und bewahren Sie es an einem bekannten Ort auf.
:::
