---
slug: "2026-04-24"
title: "v2026.04.24 – Web-Update, Etikettendruck, Mahn-Vorlagen & Gastschüler"
authors: [david]
tags: [scholar]
---

Sammel-Release für alle Änderungen vom **14.04. – 24.04.2026** (Scholar-Versionen `2026.04.14-000` bis `2026.04.24-001` und Elternportal-Versionen `2026.04.14-001` bis `2026.04.24-001`).

<!-- truncate -->

## Scholar (v2026.04.24-001)

#### Update-System – komplette Überarbeitung

- **Vollautomatisches Web-Update mit Admin-Bypass** – Signiertes Cookie (`scholar_update_bypass`, HMAC-SHA256, 60 min TTL) lässt den initiierenden Admin während des Updates durch den Wartungsmodus durch
- **Update-Fortschrittsanzeige auf der Lizenz-Seite** – Live-Polling alle 3 Sekunden, Fortschrittsbalken, Schritt-für-Schritt-Liste, Farbcodierung (aktiv/abgeschlossen/fehlgeschlagen) und Fehlermeldung
- **503-Wartungsseite zeigt Live-Update-Fortschritt** – Eigener `/update-progress`-Endpoint, Heartbeat-Anzeige, automatischer Reload nach Wartungsmodus-Ende, 3 s Polling-Intervall
- **Force-Unlock-Button als Notfall-Recovery** – Prozess-Kill, Lock entfernen, Wartungsmodus deaktivieren – sichtbar bei Fehler oder über 5 min ohne Heartbeat
- **Graceful-Update-UI im Lizenz-Menü** – Direkter Update-Button durch `AdminUpdateControl` ersetzt; Updates werden geplant, alle angemeldeten Benutzer erhalten einen Countdown-Hinweis mit Zeit zum Speichern
- **Update-System auf CRM-Server umgestellt** – `crm.scholar.schule` statt `entwurf.io`, Lizenzschlüssel- bzw. Token-basierter Download, SHA256-Checksum-Prüfung, SSL-Verify wieder aktiv
- **Lizenz-Key DB-first** – `UpdateApplication` liest Lizenz-Key und Update-URL primär aus der `configs`-Tabelle; Fallback-Kette: DB → `config/services` → `.env`
- **Notfall-Bootstrap-Skript** – `emergency_update_bootstrap.sh` für festgefahrene Update-Mechanismen; neues Flag `app:update --skip-download` nutzt eine bereits vorhandene `storage/app/update.zip` und umgeht das Versions-Gate
- **Stündlicher Update-Check sendet Lizenz-Key + Domain-Header** – CRM kann gruppenspezifische Versionen ausliefern
- **Robusterer Update-Prozess** – ZIP-Download via HTTP-Streaming statt RAM, leere ZIP wird früh erkannt, `temp_update`-Verzeichnis automatisch bereinigt, veraltete Lock-Dateien (>30 min) werden entfernt, `php -d memory_limit=-1`
- **Permission `run-update`** für `POST /update` zusätzlich erforderlich

#### Lernmittel & Bibliothek

- **Editierbare Mahn-E-Mail-Vorlagen** – Bibliothekare bearbeiten Stufe 1/2/3 unter `/lib/loans/reminder-templates`. Platzhalter-Tags als Pills mit Drag & Drop, Live-Preview, „Auf Standard zurücksetzen". Neue Tabelle `email_templates`, generischer `EmailTemplateRenderer` (Mustache-Style, kein Blade-Code-Exec)
- **Gesamtliste beliebtester Bücher** – Neue Seite `/lib/scanner/popular-books` mit Suche, Medienart-Filter, Sortierung (Ausleihzahl / Exemplare / Titel / Jahr / Medienart) und Pagination
- **Exemplar-Tabelle** – Bulk-Löschen per Checkbox, inline editierbarer Status-Dropdown (AJAX), neues Bemerkungsfeld pro Exemplar, Echtzeit-Barcode-Suche, Hover blendet andere Barcodes aus (Scanner liest nur den aktiven), Inventarnummer unter jedem Barcode
- **Zebra ZT220 Etikettendruck** – ZPL-Label (57 mm × 32 mm, 203 dpi) mit Titel, Barcode und ISBN direkt aus der Exemplar-Erfassung über IPP. Druckerkonfiguration (IP + CUPS-Queue) in EP-Einstellungen pflegbar; nachträglicher Druck per POST-Route; `label_printed_at`-Feld zur Nachverfolgung
- **Schuljahres-Tracking für Online-Buch-Bestellungen** – `school_year_id` zu `online_book_orders` hinzugefügt; Schuljahr-Umschalter, Verschieben-Modal zwischen Schuljahren, Export berücksichtigt gewähltes Schuljahr; Sync-Command weist neue Einträge automatisch dem aktiven Schuljahr zu
- **Wartungssound-Fix** – Sound auf Kachel-Ansicht spielt nur noch einmal ab (Loop-Attribut entfernt)

#### Schüler & Klassen

- **Klassendurchschnitt + Export** – Klassen-Ø auf Übersichtsseite (neue Spalte) und Klassendetail-Seite (Kachel + tfoot); Export der Klassenliste mit Anzahl und Klassen-Ø als PDF und Excel; bestehende PDFs zeigen den Klassen-Ø ebenfalls im Fuß
- **Gastschüler-Onboarding mit PDF-Ausgabe** – Gastschüler erscheinen auf `/students/with-dates`; eigener `GuestStudentOnboardingController` mit Formular, PDF-Download und Passwort-Regenerierung; PDF-Vorlage enthält Herkunftsland, Host-Schüler und gastschüler-spezifische Checkliste
- **Herkunftsland-Feld für Gastschüler** – Länder-Dropdown nach Häufigkeit (AFS/YFU/Rotary), Spalte in Übersicht und Excel-Export
- **Gastschüler-Übersicht redesigned** – Card-Design, Echtzeit-Suche (Alpine.js), CSV-Export (UTF-8 BOM) und XLSX-Export, „Gastschüler anlegen" im Header
- **Barcode-Druck für Gastschüler** – ZPL-Etikett an BP730-Drucker, identisch zu regulären Schülern
- **Schülerprofil – eingeschränkte Ansicht statt 403** – Lehrkräfte ohne Klassenzuordnung sehen Header (Name, Klasse, Foto, medizinischer Hinweis, Nachteilsausgleich, Klassenlehrer-Info) plus gelben Hinweisbalken statt einer 403-Seite
- **Schülerprofil-Berechtigungen** – Klassenlehrer/Fachlehrkräfte sehen E-Mail-Felder (iServ/O365) und können Passwörter zurücksetzen; eigenes Passwort und Kiosk-Versand bleiben Admin-only; Klassenlehrer/Fachlehrkräfte werden im Header angezeigt
- **Zeugniskonferenz** – Verwaltungs-Rolle darf Zeugnisse auch aus inaktiven Schuljahren bearbeiten
- **Klassenverwaltung `/users/classes`** – Klassen-Filter, Nur-Klassenlehrer-Filter, inaktive Benutzer ausgeblendet
- **Magellan-Import** – `class_id` wird per Lookup aus `class_number/class_letter` gesetzt; Klassenleiter-Übersicht lädt Schüler per `class_id` ODER `class_number+class_letter`, sodass kein Schüler verloren geht
- **„Noten"-Tab in Schülerdetailseite zu „Zeugnisse" umbenannt**

#### Wartung, Lager & Geräte

- **Scan-Warteschlange für Lager- und Wartungsscanner** – Barcodes werden gepuffert und sequenziell per AJAX verarbeitet, kein Page-Reload mehr; Status-Overlay zeigt Anzahl ausstehender Scans
- **AJAX-Modal für Wartungs-Checklisten** – Queue pausiert automatisch bei Geräten mit Checkliste und läuft nach Bestätigung/Abbruch weiter; `DeviceAssignmentController::kachelResponse()` und `MaintenanceController` liefern JSON statt klassischem Redirect

#### Support & Verwaltung

- **Support-Statistik-Reset** – Neuer Danger-Zone-Card im adminTools › Support-Panel; `POST /admin/support-cases/reset` (nur Admin) löscht alle `SupportCase`-Einträge mit Audit-Log und Confirm-Dialog
- **Quer-Navigation zwischen Support-Seiten** – Sidebar-Partial mit Links zu Neuer Supportfall / Fallübersicht / Statistiken; im adminTools-Panel zusätzlich Quick-Links
- **Logs- und Backup-Verwaltung in adminTools mit GFS-Retention**
  - Logs: Konfigurierbare Retention (Default 7 Tage), Artisan `logs:prune`, UI mit Größe/Alter/Lösch-Kandidaten; Live-`laravel.log` bleibt erhalten
  - Backups: `BackupRetentionService` mit Grandfather-Father-Son-Strategie (letzte N Stunden + Tage + Monate + Jahre), optional stündliches DB-Backup, tägliche Uhrzeit per UI; `backups:prune` läuft automatisch nach jedem `system:backup`
  - Speicherplatz-Progressbar mit Breakdown Logs/Backups/Frei (60 s Cache)
- **Berechtigungssystem für Küchenreservierung** – Neue Spatie-Permissions `approve_kitchen_reservation` und `inspect_kitchen_reservation` ersetzen hartcodierte Rollen; bisheriges Verhalten (Admin/Schulleitung/Koordinatoren/Verwaltung) 1:1 erhalten; eigene Kategorie „Küchenreservierung" auf der Benutzer-Edit-Seite

#### Bugfixes

- **AdminUpdateControl crashte nach Updates** mit `PropertyNotFoundException [$activeSessionCount]` – Computed Methods in reguläre Properties umgebaut, Befüllung in `refreshData()` per `mount()`/Action/`wire:poll`
- **Fatal Error in `PreventRequestsDuringMaintenance`** – Methode `hasValidBypassCookie` überschrieb unbeabsichtigt die Parent-Methode (Signatur-Konflikt) → in `hasValidUpdateBypassCookie` umbenannt
- **Emergency-Bootstrap extrahiert defensiv** kritische Dateien (`UpdateApplication.php`, `PreventRequestsDuringMaintenance.php`, `UpdateController.php`) aus der ZIP **bevor** `app:update` startet, damit ein fehlerhaftes Middleware-Update den Recovery-Pfad nicht blockiert
- **Update-Kopierfehler durch PDO-Deprecation behoben** – `error_clear_last()` vor `@copy()`, damit `error_get_last()` den tatsächlichen Fehler liefert; `bootstrap/cache` wird beim Update übersprungen (wird nach `artisan optimize` regeneriert)
- **Blade-Parser-Fehler in `reminder-templates`-View** (zwei Fixes) – `@js()` in Alpine-Attributen ersetzt durch `data-*`-Attribute + `x-on:`-Schreibweise; `<script>`-Block in `@verbatim`/`@endverbatim` gewrappt; `@json([...])` durch `@php`/`json_encode` ersetzt
- **Lizenzschlüssel-Lesepfad** – Direktes Lesen aus `.env`, wenn `config/services.php` keinen `scholar_update`-Eintrag hat; Lizenzschlüssel und Update-URL werden beim Speichern in der UI synchron in die `.env` geschrieben
- **EP-Settings Fremdsprachenwahl** – Key-Mismatch `allow_language_vote` → `show_Language_Vote` korrigiert, damit die Einstellung korrekt ans Elternportal übertragen wird
- **Bearbeiten-Aktion aus Offboarding-Tabelle entfernt** (Onboarding-Bearbeitung dort nicht relevant)
- **`EpSyncController`** – Symfony Process durch `Artisan::call` ersetzt (behebt Windows-Subprocess-Probleme mit MySQL-DLL-Pfaden)
- **`lib/loans/index`** – Null-safe-Operator für `copy->book` und `copy->exemplarnummer` (verhindert Fehler bei gelöschten Exemplaren)
- **`adminhome`-Sidebar** – `relative` + `pb-24`, damit die Versionsnummer das Menü nicht überlagert
- **Composer-Update** – `--no-scripts` + `Artisan::call(package:discover)` behebt 1200 s-Timeout durch hängendes `post-autoload-dump`-Hook auf PHP 8.5

---

## Elternportal (v2026.04.24-001)

#### Neu

- **Latein zur Fremdsprachenwahl hinzugefügt** – Neue Option im Wahlformular
- **API-Endpoint `/api/language-votes` aktiviert** – Damit Scholar die Fremdsprachenwahl-Ergebnisse über `GET /api/language-votes` abholen kann (geschützt via `auth.api`/Bearer-Token)

#### Verbesserungen

- **Fremdsprachenwahl – Korrekturen**
  - Nur Kinder des eingeloggten Elternteils werden angezeigt (statt aller Schüler)
  - Nur Schüler der 5. Klasse können abstimmen
  - Nur Spanisch und Französisch als Optionen (Englisch entfernt)
  - Fehlermeldung bei gleicher Erst- und Zweitwahl auf Deutsch übersetzt
- **Welcome-Seite** – Logo größer und klarer, Hero-Bereich kompakter, Footer bleibt am Seitenende

#### Aufräumarbeiten

- **Lernmittel-Refactoring** – Legacy-Bestellsystem entfernt: `LearningMaterialOrder`-Controller, `OrderGroupe`-Model, `OrderRepository`
- **API-Bereinigung** – Felder `religion` und `zweite_fremdsprache` aus `DigitalBookOrder` und API-Controller entfernt
- **Workbook-Order-Views überarbeitet** – Alte Bestell-Views (`order`, `orderAdditional`) gelöscht

#### Security

- **Abhängigkeiten auf sichere Versionen aktualisiert**
  - `axios` ^1.12.2 → ^1.15.0 (CVE-2025-62718, **Critical**)
  - `vite` ^6.2.4 → ^6.4.2 (CVE-2026-39363 High, CVE-2026-39365 Moderate)
  - `picomatch` auf 4.0.4+ (CVE-2026-33671/72)
  - `league/commonmark` 2.8.0 → 2.8.2 (CVE-2026-33347/30838 Moderate)
  - Frontend-Assets neu gebaut mit Vite 6.4.2
