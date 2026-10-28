---
sidebar_position: 8
---

# Zeiterfassung

Die Zeiterfassung ermöglicht eine detaillierte Protokollierung von Arbeitszeiten, Urlaub, Krankheit und Überstunden. Grundlage ist ein persönliches Arbeitszeitmodell, das sich am TV-L bzw. TV-H und am Arbeitszeitgesetz orientiert.

## Übersicht

Oben auf der Seite **Zeiterfassung** stehen vier Kacheln:

| Kachel | Inhalt |
|---|---|
| Heute | Geleistete Zeit, Tagessoll und das Plus/Minus dazu |
| Monat | Geleistete Zeit, Monatssoll und das Plus/Minus dazu |
| Stundenkonto | Gesamt-Saldo und seine Veränderung seit Vortag, Wochen- und Monatsbeginn |
| Urlaub | Verfügbare Tage (rot, wenn überzogen), Gesamtanspruch aus Jahresurlaub und Vorjahr sowie verbrauchte Tage |

## Arbeitszeit erfassen

### Stechuhr (Ein-/Ausstempeln)

- **▶ Einstempeln** – startet die laufende Zeiterfassung
- **Stoppen** – beendet die Erfassung und erstellt automatisch einen Eintrag

Solange die Stechuhr läuft, zeigt sie den Tagesstand: bereits erfüllte Zeit, Tagessoll, noch fehlende Zeit und die Uhrzeit, zu der das Soll erreicht ist. Pflichtpausen sind dabei schon eingerechnet; die Anzeige aktualisiert sich jede Minute.

### Manueller Eintrag

1. Den gewünschten Tag wählen (Pfeile **◀ ▶** oder **Heute**)
2. Typ, Von/Bis-Zeit, Pause, Projekt und Beschreibung eintragen
3. Speichern

Als Projekt lassen sich nur eigene Projekte wählen. Arbeitseinträge desselben Tages dürfen sich nicht überschneiden – Planora lehnt solche Einträge mit einer Meldung ab. Bereits bestehende Überschneidungen werden in Tagesansicht und Monatstabelle mit ⚠️ markiert, damit Sie sie korrigieren können.

## Eintragstypen

| Typ | Beschreibung |
|---|---|
| 💼 Arbeit | Reguläre Arbeitszeit |
| 🤒 Krank | Krankheitstag |
| 🏖️ Urlaub | Urlaubstag, auch als **½ Tag** |
| 🎄 Feiertag | Gesetzlicher Feiertag |
| ⚖️ Stundenausgleich | Abbau von Überstunden – belastet das Stundenkonto |
| Sonstiges | Sonstige Abwesenheit |

Abwesenheiten wie Urlaub, Krankheit und Feiertag werden höchstens bis zum Tagessoll gutgeschrieben; sie erzeugen keine Plusstunden.

## Überstunden

Überstunden ergeben sich, wenn die erfasste Arbeitszeit das Tagessoll übersteigt. Eine **Überstunden-Begründung** kann am Eintrag hinterlegt werden.

## Monats- und Jahresübersicht

Die Monatstabelle zeigt für jeden Tag Soll, Ist und das Plus/Minus. Darunter steht die **Jahresübersicht** des gewählten Jahres: je Monat Soll, Ist, Plus/Minus und der Saldo am Monatsende, dazu der Übertrag aus dem Vorjahr und die Jahressumme. Ein Klick auf einen Monat öffnet ihn.

## Arbeitszeitmodell

Über **⚙️ Soll-Stunden** konfigurieren Sie Ihr persönliches Arbeitszeitmodell.

### Regelwerk

Eine **Vorlage** füllt alle Werte nach Tarifvertrag und Arbeitszeitgesetz vor:

- TV-L je Bundesland
- TV-H Hessen
- Sonderfälle nach § 6 Abs. 1b–1d TV-L (38,5 h, Tarifgebiet Ost 40 h, Ärztinnen und Ärzte 42 h)
- Eigene Regeln

Danach lässt sich jeder Wert anpassen; Abweichungen von der Vorlage werden angezeigt.

### Einstellungen

| Bereich | Einstellungen |
|---|---|
| Arbeitszeit | Wochenarbeitszeit Vollzeit, Beschäftigungsumfang (Teilzeit), Verteilung auf die Wochentage |
| Feiertage & Freistellung | Bundesland für die Feiertage, zuschaltbare regionale Feiertage, eigene freie Tage (z. B. örtlicher Feiertag) |
| Pausen & Höchstarbeitszeit | Fehlende Pause automatisch ergänzen (§ 4 ArbZG), Warnung ab einer Tagesarbeitszeit (§ 3 ArbZG: 10 h) |
| Urlaub & Gültigkeit | Urlaubstage pro Jahr, Resturlaub aus Vorjahr, Stundenkonto-Startwert, **Gültig ab** |

An Feiertagen sowie am 24. und 31. Dezember ist das Soll 0, wenn sie auf einen Arbeitstag fallen (§ 6 Abs. 3 TV-L). Die Feiertage berechnet Planora je Bundesland selbst.

Pausen nach § 4 ArbZG werden tagesweise nur so weit ergänzt, wie nötig: mehr als 6 Stunden → 30 Minuten, mehr als 9 Stunden → 45 Minuten. Lücken zwischen Einträgen zählen als Pause.

:::tip Neuer Plan ab Stichtag
Ein späteres Datum unter **Gültig ab** legt einen neuen Plan an – etwa bei einer Änderung des Beschäftigungsumfangs. Der bisherige Plan bleibt für vergangene Tage erhalten, das Stundenkonto rechnet jeden Tag mit dem damals gültigen Plan.
:::

## Berichte

Über **📄 Report** erzeugen Sie eine Monatsauswertung der Zeiteinträge. Weitere Auswertungen nach Zeitraum und Projekt stehen unter [Statistiken](./statistiken#zeiterfassung).
