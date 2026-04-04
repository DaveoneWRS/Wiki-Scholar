---
slug: "2026-01-20"
title: "v0.0.91 (-015, -014, -013)"
authors: [david]
tags: [scholar]
---

<!-- truncate -->

### 0.0.91-015

#### Neu

- Support-Fälle: PDF-Export als Gedächtnisprotokoll für einzelne Fälle

### 0.0.91-014

#### Bugfixes

- RolePermissionSeeder: Manuell konfigurierte Berechtigungen werden bei Updates nicht mehr überschrieben

### 0.0.91-013

#### Neu

- composer.phar (v2.9.3) zum Projekt hinzugefügt - vermeidet System-Composer Deprecation-Warnungen auf PHP 8.5
- UpdateApplication: Verwendet jetzt projekt-eigene composer.phar falls vorhanden
