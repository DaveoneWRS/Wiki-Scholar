---
sidebar_position: 7
---

# Datenschutz

Der Bereich **Datenschutz** führt das Verzeichnis der Verarbeitungstätigkeiten nach Art. 30 DSGVO, die technischen und organisatorischen Maßnahmen (TOM) nach Art. 32 DSGVO und die Dokumentation von Datenschutzverletzungen nach Art. 33/34 DSGVO. Er ist eng mit der IT-Dokumentation verknüpft: Verfahren hängen an Diensten und Verträgen, Datenpannen an Störungen im Logbuch.

:::note Eigenes Modul
Datenschutz ist ein eigenes Modul. Wer auch die IT-Dokumentation hat, erreicht ihn über die Kachel **🛡️ Datenschutz** auf deren Startseite. Eine Rolle, die nur das Modul Datenschutz freigibt – etwa für die oder den Datenschutzbeauftragten –, hat einen eigenen Menüpunkt **Datenschutz** und sieht keine Geräte, Netze oder Zugänge. Siehe [Administration](/docs/planora/administration#rollen).
:::

## Verantwortliche Stelle und DSB

Ganz oben stehen die Kopfangaben des Verzeichnisses: **verantwortliche Stelle** und **Datenschutzbeauftragte(r)**. Ändern darf sie nur, wessen Rolle die Befugnis **Verarbeitungsverzeichnis ändern** trägt (oder wer Administrator ist).

## Verarbeitungstätigkeiten

Mit **+ Neues Verfahren** erfassen Sie eine Verarbeitungstätigkeit. Das Formular ist in Abschnitte gegliedert:

| Abschnitt | Inhalt |
|---|---|
| 🎯 Zweck und Rechtsgrundlage | Bezeichnung, Zweck, Rechtsgrundlage, Fachvorschrift, Verantwortlich |
| 👥 Betroffene und Daten | Betroffene Personen und Datenkategorien, Kennzeichen für besondere Kategorien (Art. 9) |
| 📤 Empfänger und Übermittlung | Empfänger, Übermittlung in ein Drittland samt Garantien |
| 🛡️ Löschung und Schutz | Löschfrist und Schutzmaßnahmen |
| 🔗 Dienste und Verträge | Verknüpfte Dienste und Verträge aus der IT-Dokumentation |
| Datenschutz-Folgenabschätzung | Ob eine DSFA nötig ist und wann sie durchgeführt wurde |

Verfahren haben einen Status (Entwurf, in Betrieb, eingestellt) und einen Termin für die **nächste Prüfung**. Fehlende Pflichtangaben werden als **⚠️ Mit Lücken** angezeigt, außerdem **🔴 Folgenabschätzung offen** und **🗓️ Prüfung überfällig**. Die Liste lässt sich danach filtern.

Mit **🖨️ Verzeichnis drucken** erhalten Sie das vollständige Verzeichnis als Druckansicht – mit den TOM als Anhang.

## Technische und organisatorische Maßnahmen

Die TOM sind nach den üblichen Kategorien gegliedert; jede Kategorie steht auch leer da, damit Lücken auffallen. Je Maßnahme erfassen Sie Beschreibung, Stand, Zuständige und eine Bemerkung.

Den Nachweis der regelmäßigen Überprüfung liefern verknüpfte [Wartungspläne](/docs/planora/it/wartung). Ist ein solcher Plan überfällig, meldet Planora das.

## Datenschutzverletzungen

Eine Datenpanne wird als Kennzeichen an einer **Störung** im [Logbuch](/docs/planora/it/wartung#logbuch) erfasst – oder mit **+ Datenpanne erfassen** direkt am Verfahren, wenn keine Technik beteiligt war. Festgehalten werden:

- der Zeitpunkt der Kenntnis – ab ihm läuft die **72-Stunden-Frist**
- die Risikobewertung: kein Risiko, Risiko (Meldung an die Aufsicht) oder hohes Risiko (zusätzlich Benachrichtigung der Betroffenen)
- **📨 Gemeldet** und **✉️ Betroffene benachrichtigt**

Die Liste filtert nach **Mit offener Meldung** und **Alle dokumentierten**; über **🖨️ Drucken** gibt es eine eigene Druckansicht.

## Weitere Angaben in der IT-Dokumentation

| Wo | Angabe |
|---|---|
| Verträge | Stand der Auftragsverarbeitung (Art. 28 DSGVO), Unterauftragnehmer, Drittland |
| Dienste | Verantwortung zwischen Schule und Schulträger, Schutzbedarf, Wiederanlauf |
| Geräte | Löschnachweis bei der Entsorgung |

Fehlende AV-Verträge, offene Folgenabschätzungen, nicht gemeldete Datenpannen und eine fehlende DSB erscheinen unter den [Prüfungen](/docs/planora/it/netz#prüfungen).

## Löschfristen in Planora selbst

Planora löscht seine eigenen personenbezogenen Daten aus der IT-Dokumentation automatisch nach festen Fristen – etwa Angaben aus der Selbsterfassung, beendete Zugänge, Kontaktdaten erledigter Telefonnotizen, Zuordnungen ausgemusterter Geräte, gesperrte Gastzugänge und alte Protokolleinträge. Die geltenden Fristen stehen auf der Datenschutzseite und gehören ins Verzeichnis.

## Änderungsprotokoll Datenschutz

Ein eigenes Protokoll zeigt, wer Verfahren, TOM, Datenpannen und Kopfangaben wann geändert hat – einschließlich der Verknüpfungen zu Diensten, Verträgen und Wartungsplänen. Für Gäste ist es nicht sichtbar.
