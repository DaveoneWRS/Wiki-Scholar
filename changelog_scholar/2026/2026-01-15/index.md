---
slug: "2026-01-15"
title: "v0.0.87 (-011, -010, -009, -008, -007)"
authors: [david]
tags: [scholar]
---

<!-- truncate -->

### 0.0.87-011

#### Bugfixes

- PDF-Export: %NAME% Platzhalter in Bemerkungen und Phrasen wird jetzt korrekt durch Schülernamen ersetzt (PdfController)
- Zeugniskonferenzen: %NAME% wird auch in der Webansicht durch den Vornamen ersetzt

### 0.0.87-010

#### Neu

- Zammad Feedback-Formular: Integration über REST API mit Token-Authentifizierung
- Feedback-Button im Footer: 'Fehler gefunden? / Vorschlag machen' öffnet Modal
- Favoriten-Sidebar: Toggle-Option im Benutzermenü unter 'Ansicht'

#### Bugfixes

- Zeugniskonferenzen: 'Versäumte Unterrichtstage' Wert wird jetzt korrekt angezeigt (HTML-Syntaxfehler behoben)

### 0.0.87-009

#### Neu

- Sonderklassen: Neue Verwaltungsseite für Klassenbezeichnungen unter /grade/settings/sonderklassen
- Sonderklassen: Bezeichnung wird im Zeugnis-PDF-Export angezeigt (z.B. 'Bücherklasse 5a')

#### Bugfixes

- PDF-Export: %NAME% Platzhalter wird jetzt durch Schülernamen ersetzt
- PDF-Export: Umlaute in Bemerkungen und Phrasen werden korrekt dargestellt (iconv UTF-8)
- PDF-Export: Geburtsort mit korrektem 'in:' Doppelpunkt

### 0.0.87-008

#### Bugfixes

- Gastschüler: Visuelles Feedback bei Gastfamilien-Auswahl (grüne Bestätigungsbox) funktioniert jetzt
- StudentSearch: Deutsche Sonderzeichen (ä, ö, ü, ß) werden jetzt in der Suche akzeptiert

### 0.0.87-007

#### Neu

- Zeugniskonferenzen: Freischaltung für alle Lehrkräfte über Admin-Einstellungen
- Zeugniskonferenzen: Neuer Menüpunkt 4 auf /grade/start
- Zeugniskonferenzen: Livewire-Toggle für Freigabe unter /grade/settings Punkt 7
