---
slug: "2026-02-27"
title: "v2026.02.27 (-003, -002, -001)"
authors: [david]
tags: [scholar]
---

<!-- truncate -->

### 2026.02.27-003

#### Bugfixes

- Sicherheit: Zugriff auf Schülerprofile wird nun korrekt auf die eigenen Klassen bzw. berechtigte Rollen beschränkt
- Sicherheit: Transaktionszuweisungen können nur noch von Nutzern mit Lernmittel-Berechtigung vorgenommen werden
- Sicherheit: Benutzeranlage durch die Verwaltung schränkt Admin-Felder (E-Mail, Rollen) serverseitig zuverlässig ein
- Sicherheit: Quittungs-PDF-Generierung verwendet einen sichereren Rendering-Modus
- Sicherheit: Geräteverwaltung akzeptiert beim Speichern nur die vorgesehenen Felder
- Bibliothek: Klassifikations-Datensätze sind gegen unerwünschte Massenänderungen geschützt
- Bibliothek /lib/scanner: Statusmeldungen im Buchscanner werden korrekt als Klartext dargestellt
- Self-Service: Statusmeldungen in den Self-Service-Bereichen (IServ, WLAN, Untis, Office, Moin.Schule, Lernmittel digital) werden korrekt als Klartext dargestellt
- Sicherheitsmonitoring: Letzte Anmeldungen, fehlgeschlagene Login-Versuche und auffällige IP-Adressen werden jetzt korrekt aus der Datenbank ausgelesen und im Dashboard angezeigt
- Sicherheitsmonitoring: System stabilitätsprüfung schlägt bei leerer Datenbankabfrage nicht mehr fehl
- Schülerdokumente: Upload-Verzeichnisse werden mit eingeschränkten Zugriffsrechten angelegt

### 2026.02.27-002

#### Neu

- Lernmittel /learning-materials: Neuer Filter 'Ohne Klasse' in Klassenstufen-Dropdown – zeigt Bücher ohne Klassenzuordnung in eigener Gruppe 'Ohne Klassenzuordnung' (nur lm_admin)
- Lernmittel /learning-materials: Neuer Filter 'Gelöschte anzeigen' (Checkbox) – blendet soft-gelöschte Bücher ein, mit roter Zeile und 'Gelöscht'-Badge beim Titel (nur lm_admin)

### 2026.02.27-001

#### Neu

- Bestandsübersicht /books/inventory/overview: Button 'Exemplare' pro Textbook-Zeile wechselt direkt in den Exemplar-Modus und filtert auf die Exemplare des gewählten Buches (filterBookId) – ersetzt das umständliche Inline-Dropdown
- Bestandsübersicht /books/inventory/overview: Aktiver Buch-Filter wird als Chip mit Buchtitel und ISBN angezeigt, mit 'Buch-Filter aufheben'-Button

#### Bugfixes

- Benutzerverwaltung /UserManagment/users: 'There is no permission named FL-Rk for guard web' – Permission war in der DB als FL-RK (Großbuchstabe) gespeichert, per Migration auf FL-Rk (korrektes Casing laut Config) umbenannt
- Bestandsübersicht /books/inventory/overview: Exemplare des gewählten Buches werden korrekt per filterBookId gefiltert (zuvor keine Filterung aktiv)
