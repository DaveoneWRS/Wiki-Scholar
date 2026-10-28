---
sidebar_position: 3
---

# Netz & IP-Adressen

Unter **Netz & IPs** verwaltet die IT-Dokumentation das IP-Adressmanagement (IPAM): Netze, Vergabebereiche, einzelne Adressen und VLANs. Adressen werden nach ihrem Zahlenwert sortiert – `.9` steht also vor `.10`.

Die Seite hat vier Reiter.

## Netze & Bereiche

Hier stehen die Netze (Präfixe) mit ihrer **Auslastung** und die Vergabebereiche darin.

| Feld | Beschreibung |
|---|---|
| Netz (CIDR) | z. B. `10.20.0.0/16` |
| Bezeichnung, Beschreibung | Freitext |
| Standort, VLAN | Zuordnung des Netzes |
| Gateway | Standard-Gateway des Netzes |
| Bereich | Erste und letzte Adresse sowie Vergabe: Statisch, Server oder DHCP-Pool |

Ein Bereich kann als **⭐ Vergabebereich für Server** markiert werden – dort steht die verbindliche Vergaberegel für neue Server. Ein Klick klappt einen Bereich auf und zeigt seine vergebenen Adressen (bis zu hundert, der Rest wird gezählt).

## Adressen

Die Liste **IP-Adressen** enthält alle vergebenen Adressen mit Vergabeart, Status, DNS-Name und zugeordnetem Gerät bzw. Anschluss. Filter gibt es nach Netz, Bereich, Status und Vergabeart.

- **🎯 Freie Adressen** zeigt die nächsten freien Adressen eines Bereichs
- Beim Anlegen kann direkt ein **Standard-Anschluss** am Gerät entstehen
- Die Suche findet Adressen auch über Gerätename und Hostname; der Suchbegriff steht in der Adresszeile, sodass sich gefilterte Ansichten als Link weitergeben lassen

IP-Adressen auf der [Geräteseite](/docs/planora/it/geraete#detailseite) führen direkt hierher.

## VLANs

Die Segmente des Netzes mit Nummer und Bezeichnung. Netze lassen sich einem VLAN zuordnen.

## Prüfungen

Der Reiter **🩺 Prüfungen** meldet, was in gewachsener Dokumentation leicht untergeht:

- feste Adressen im DHCP-Pool, doppelt vergebene Adressen, Adressen ohne Bezeichnung
- doppelte Hostnamen und randomisierte MAC-Adressen
- Server außerhalb des Vergabebereichs
- abgelaufene oder bald ablaufende Zertifikate, Verträge und Lizenzen sowie verstrichene Kündigungsfristen
- Dienste ohne Host oder mit unvollständiger Dokumentation
- entsorgte Geräte ohne Löschnachweis
- offene Punkte aus dem [Datenschutz](/docs/planora/it/datenschutz), etwa nicht gemeldete Datenpannen, fehlende AV-Verträge oder eine fehlende DSB

Die Befunde sind nach Schwere sortiert und führen per Link zum betroffenen Objekt.

:::tip
Prüfungen ersetzen keine Pflege, zeigen aber, wo sie fehlt. Ein regelmäßiger Blick in diesen Reiter lohnt sich – am besten als eigener [Wartungsplan](/docs/planora/it/wartung).
:::
