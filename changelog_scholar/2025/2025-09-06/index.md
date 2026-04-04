---
slug: "2025-09-06"
title: "v0.0.72-000"
authors: [david]
tags: [scholar]
---

<!-- truncate -->

#### Neu

- Individuelle PDF-Dokumente: Formulare können jetzt ihre eigenen spezifischen PDF-Vorlagen verwenden - ermöglicht maßgeschneiderte Dokumente für verschiedene Anwendungsfälle
- Öffentliche Kiosk-Anzeige: PDF-Dokumente können jetzt direkt am Terminal angezeigt werden ohne Anmeldung
- Verbesserte PDF-Verarbeitung: Stabilere und zuverlässigere Erstellung von PDF-Dokumenten
- Intelligente Dokumentenauswahl: System wählt automatisch die beste PDF-Vorlage aus - eigene Dokumente haben Vorrang vor Standard-Vorlagen
- Erweiterte Formularerstellung: Verbessertes Interface zum Erstellen und Bearbeiten von Formularen mit PDF-Upload-Funktion
- Automatisches Verstecken: Formulare können sich nach der ersten Verwendung automatisch ausblenden - ideal für einmalige Anmeldungen
- Kiosk-Nachrichten: Administratoren können jetzt Mitteilungen an Terminal-Benutzer senden (Informationen, Warnungen, Erfolg, Fehler)
- Flexible PDF-Erstellung: Formular-Vorlagen können jetzt auch ohne PDF-Datei erstellt werden - PDFs können später hinzugefügt werden
- Vereinfachte Sichtbarkeit: Klare Regel für die Anzeige von Formularen am Terminal - weniger Verwirrung bei der Verwaltung
- Sauberere Terminal-Oberfläche: Entfernung unnötiger Informationen für eine übersichtlichere Benutzeroberfläche

#### Bugfixes

- PDF-Kompatibilität: Verbesserung der PDF-Bibliothek für stabilere Dokumentenerstellung
- Routing-Probleme: Fehlerhafte Verbindungen im Formular-Management behoben
- PDF-Fehlerbehandlung: Robustere PDF-Generierung mit besserer Fehlerbehandlung
- Kiosk-Benachrichtigungen: Problem mit fehlerhaften Nachrichten am Terminal behoben
- PDF-Vorschau: Anzeige von benutzerdefinierten PDFs am Terminal funktioniert jetzt korrekt
- Vorlagen-Bearbeitung: Fehlende Funktion zum Bearbeiten von Formular-Vorlagen hinzugefügt
- Auswahlfelder-Speicherung: Problem beim Speichern von Dropdown-Optionen in Formularen behoben
- JavaScript-Konflikte: Doppelte Code-Definitionen am Terminal beseitigt
- Sichtbarkeits-Verwirrung: Klarere Regeln für die Anzeige von Formularen am Terminal
- Intelligente Aktualisierung: Automatische Seitenaktualisierung erfolgt nur noch bei Inaktivität (nach 30+ Sekunden)
- Nachrichten-Formatierung: Zeilenumbrüche in Kiosk-Nachrichten werden jetzt korrekt angezeigt
- Automatische Statusaktualisierung: Einmalige Formulare werden nach Verwendung automatisch als abgeschlossen markiert
