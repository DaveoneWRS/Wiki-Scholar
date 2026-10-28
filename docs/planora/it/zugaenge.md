---
sidebar_position: 6
---

# Zugänge & Gastzugänge

Zwei Bereiche der IT-Dokumentation drehen sich um Menschen von außen: **Zugänge** halten fest, welche Konten Externe in den Systemen der Schule bekommen haben. **Gastzugänge** erlauben dem Schulträger oder Dienstleistern einen zeitlich begrenzten Blick in die IT-Dokumentation selbst.

## Zugänge für Externe

Handwerker, Referendarinnen, Praktikanten oder Dienstleister erhalten Konten in verschiedenen Systemen. Unter **🔑 Zugänge** steht je Person und Zugangsart eine eigene Zeile – der WLAN-Zugang läuft also unabhängig vom Office-Konto ab.

### Zugang anlegen

Mit **+ Neuer Zugang**:

| Feld | Beschreibung |
|---|---|
| Name, Firma, E-Mail | Wer den Zugang erhält |
| Zugangsart | z. B. WLAN, Office 365, IServ |
| Anmeldename | Benutzername im jeweiligen System |
| Gilt ab / Gilt bis | Zeitraum des Zugangs |
| Status | Beantragt, Aktiv oder Beendet |
| Ansprechpartner | Zuständige Person an der Schule |
| Grund, Bemerkung | Anlass und Hinweise |

Die Liste filtert nach Zugangsart und Status (**Offen**, **Nur beantragt**, **Nur aktiv**, **Alle, auch beendete**) und markiert **Läuft bald ab** und **Abgelaufen**. Mit **⏹️** beenden Sie einen Zugang.

Ablaufende Zugänge erscheinen in der Dashboard-Kachel **🛠️ Wartung & Ablauf** und in der täglichen Push-Übersicht – zusammen mit Verträgen, Lizenzen und Zertifikaten. Beendete Zugänge bleiben als Historie stehen.

:::warning Keine Passwörter
Passwörter nimmt dieser Bereich bewusst nicht entgegen. Der Anmeldename genügt; alles Weitere gehört in den Passwortmanager.
:::

### Zugangsarten

Welche Kontowelten es gibt, pflegen Sie auf der Startseite der IT-Dokumentation im Reiter **🔑 Zugangsarten**. WLAN, Office 365 und IServ sind als Startbestand angelegt. Eine Zugangsart mit vorhandenen Zugängen lässt sich nicht löschen, nur ausmustern.

## Gastzugänge

Ein Gastzugang (Admin) gibt z. B. dem Schulträger Einblick in die IT-Dokumentation, ohne dass er ein Planora-Konto braucht. Der Zugang erfolgt über einen **QR-Code** oder Link, nicht über ein Anmeldeformular.

### Gastzugang ausstellen

Unter **🎫 Gastzugänge** mit **+ Neuer Gastzugang**:

| Feld | Beschreibung |
|---|---|
| Bezeichnung, Firma, Notiz | Für wen der Zugang ist |
| Gilt ab / Gilt bis | Gültigkeitsfenster |
| Sitzungsdauer (Minuten) | Wie lange eine Sitzung nach dem Einlösen läuft |
| Sichtbare Bereiche | Welche Teile der IT-Dokumentation der Gast sieht |

Danach stehen **QR-Code** (auch zum **Drucken**) und **Link zum Weitergeben** bereit.

Als Bereiche lassen sich unter anderem Übersicht, Geräte, Endgeräte, Netzwerk, Verbünde, Netz & IPs, Dienste, Standorte & Räume, Wartung, Logbuch, Notizen, Software, Selbsterfassung, Tags & Flags, Zugänge, Zertifikate & Domains, Verträge & Lizenzen, Ansprechpartner, Datenschutz, Notfallhandbuch und Änderungsprotokoll freigeben. Ein Teil davon ist vorausgewählt, vertraulichere Bereiche müssen bewusst angehakt werden. Verwaltungsbereiche – Änderungsvorschläge, Gastzugänge, Katalog und Import – sind nie freigebbar.

### Was Gäste dürfen

- Gäste sehen nur die freigegebenen Bereiche; Seitenleiste und Kacheln zeigen nichts anderes
- Änderungen an Geräten, Netzen und Diensten werden nicht gespeichert, sondern als **Änderungsvorschlag** eingereicht
- In **Logbuch** und **Notizen** schreiben Gäste direkt – als Kommentar zur Dokumentation
- Datenschutz bleibt für Gäste reine Ansicht
- Unter **📝 Meine Vorschläge** sieht der Gast, was aus seinen Vorschlägen geworden ist
- Einstellungen, API und alle übrigen Module bleiben gesperrt

### Sperren und löschen

| Aktion | Wirkung |
|---|---|
| Sperren | Beendet den Zugang sofort |
| Neuen Schlüssel ausstellen | Macht QR-Code und Link ungültig und erzeugt neue |
| Löschen | Nur bei gesperrten Zugängen, mit Rückfrage |

Gesperrte Gastzugänge werden spätestens sieben Tage nach dem Sperren automatisch gelöscht; die Liste nennt das Datum. Logbucheinträge und Vorschläge des Gastes behalten ihren Verfasser.

## Änderungsvorschläge

Vorschläge aus Gastzugängen landen im Freigabepostfach **📝 Änderungsvorschläge** (Admin). Die Zahl offener Vorschläge steht auch am Menüpunkt **IT-Dokumentation**. Je Feld zeigt der Vergleich **Bisher** und **Vorgeschlagen**; Konflikte mit zwischenzeitlichen Änderungen werden angezeigt. Sie **übernehmen** Felder einzeln oder **lehnen ab** – auf Wunsch mit einer Anmerkung, die der Gast sieht.
