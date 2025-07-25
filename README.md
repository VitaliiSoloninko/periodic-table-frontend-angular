# Periodensystem Frontend Angular

Angular-Anwendung zur Darstellung des Periodensystems der chemischen Elemente mit detaillierten Informationen zu jedem Element.

## Architektur

**Feature-Sliced Design (FSD)** - einer Architekturmethodik für Frontend-Projekte.

### Architekturprinzipien:

- **Shared**: Kleinste wiederverwendbare Komponenten ohne Geschäftslogik
- **Entities**: Geschäftsentitäten, größere Komponenten, aber auch ohne Logik
- **Features**: Komponenten mit Logik und Benutzerszenarien
- **Widgets**: Zusammengesetzte Blöcke, die alle vorherigen Schichten kombinieren
- **Pages**: Anwendungsseiten, maximal einfach, integrieren Widgets

## 🚀 Technologien

- **Angular 19**
- **Tailwind CSS**

## 📦 Installation

1. Abhängigkeiten installieren:

```bash
npm install
```

2. Entwicklungsserver starten:

```bash
ng serve
```

## Konfiguration

### Tailwind CSS

- `tailwind.config.js` - Hauptkonfiguration
- `src/styles.css` - Globale Stile und CSS-Variablen
