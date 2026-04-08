---
slug: "2026-03-31"
title: "v2026.03.31 – Modulsystem & Sichtbarkeitssteuerung"
authors: [david]
tags: [scholar]
---

<!-- truncate -->

#### Neu

- **Modulsystem** mit 17+ konfigurierbaren Modulen: Library, Learning-Materials, WiFi-Management, AGS, ILE, Case-Management, Locker-Management, Onboarding, Grades, IServ, Microsoft 365, Device-Management, WebUntis, Self-Service, Kassenbuch, Support, Kopiercodes, moin.schule
- **Modul-Toggle** mit Alpine.js Bestätigungs-Modal (ersetzt Browser-confirm-Dialog)
- **Sichtbarkeitssteuerung** – Deaktivierte Module werden in Navigation (Desktop + Mobil), Dashboard, Schülerprofil, AdminTools und Routen-Middleware automatisch ausgeblendet
- **Device-Management-Modul** – Lagerverwaltung, Lagerübersicht/Scanner, Leihverlauf, Geräte im Verleih und Gerätewartung als eigenes Modul steuerbar
- **WebUntis-Modul** – Stundenplan (Klassen/Lehrer) und Raumübersicht als eigenes Modul steuerbar
- **IServ- und Microsoft-Module** – IServ-Abgleich/Export/Mail-Import und O365-Validierung/Benutzer in AdminTools und Schülerprofil modul-gesteuert
- **Grades-Modul** – Notensystem als konfigurierbares Modul mit Routen-Middleware
- **Self-Service- und Kassenbuch-Module** – Dashboard-Karten, AdminTools-Einträge und Navigation modul-gesteuert
- **Support-, Kopiercodes- und moin.schule-Module** – Sidebar-Buttons, Dashboard-Karten und Systemabgleich modul-gesteuert
- **Update-Button** auf der Lizenz-Seite mit aktueller Version und Update-Badge
- Lizenz-Seite: helles Design, automatische Telemetrie beim Speichern (alle 5 Stunden statt täglich)
- Lizenzinfos werden nach dem Speichern direkt vom CRM geladen

#### Bugfixes

- Versionserkennung korrigiert – `isNewerVersion()` strippt git-describe-Suffix vor Vergleich, Fallback auf `version.json`
- `version_compare()` durch custom Scholar-Versionsvergleich ersetzt (YYYY.MM.DD-NNN Format wurde falsch verglichen)
- Schließfachverwaltung, AGS, Onboarding, ILE, Lernmittel, WLAN und Notenlisten bei deaktiviertem Modul korrekt ausgeblendet
- Admin-Link aus Footer entfernt