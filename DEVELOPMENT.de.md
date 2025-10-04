# Entwicklungsrichtlinien

Dieses Dokument bietet umfassende Richtlinien für die Entwicklung der Trailmarks.io Homepage.

## 🎨 Styling mit Tailwind CSS

Dieses Projekt verwendet **Tailwind CSS** als exklusives Styling-Framework. Alle Styles müssen mit Tailwind Utility-Klassen umgesetzt werden.

### Grundprinzipien

1. **Utility-First**: Verwende Tailwind Utility-Klassen direkt im HTML
2. **Keine Inline-Styles**: Verwende niemals inline `style=""` Attribute
3. **Komponenten-Klassen**: Verwende `@apply` in `src/input.css` für wiederverwendbare Patterns
4. **Konsistenz**: Folge dem etablierten Design-System

### Tailwind-Konfiguration

Unsere Tailwind-Konfiguration ist in `tailwind.config.js` definiert:

```javascript
// Eigene Markenfarben
colors: {
  'trailmark': {
    'blue': '#3B82F6',    // Primäre Markenfarbe
    'green': '#10B981',   // Natur, Erfolg
    'orange': '#F59E0B',  // Energie, Akzent
    'stone': '#78716C',   // Erde, Neutral
    'earth': '#92400E'    // Boden, Dunkler Akzent
  }
}

// Eigene Schriftarten
fontFamily: {
  'sans': ['Inter', 'system-ui', 'sans-serif'],      // Fließtext
  'display': ['Poppins', 'system-ui', 'sans-serif']  // Überschriften
}
```

### Eigene Komponenten

Wir haben eigene Komponenten-Klassen in `src/input.css` für häufig verwendete Patterns definiert:

#### Button-Stile

```css
.btn-primary
  - Primärer Aktions-Button
  - Blauer Hintergrund mit weißem Text
  - Hover-Effekt zu dunklerem Blau
  
.btn-secondary
  - Sekundärer Aktions-Button
  - Weißer Hintergrund mit blauem Rand und Text
  - Hover-Effekt zu hellgrauem Hintergrund

.section-padding
  - Standard vertikaler Abstand für Sektionen
  - 4rem (py-16) auf Mobilgeräten
  - 6rem (py-24) auf Desktop (lg breakpoint)
```

### Verwendungsbeispiele

#### Primärer Button
```html
<a href="/action" class="btn-primary">
    Klick mich
</a>
```

#### Sekundärer Button
```html
<a href="/action" class="btn-secondary">
    Mehr erfahren
</a>
```

#### Sektion-Padding
```html
<section class="section-padding bg-white">
    <!-- Inhalt -->
</section>
```

### Richtlinien für Farbverwendung

- **trailmark-blue**: Primäre Aktionen, Links, Markenelemente
- **trailmark-green**: Erfolgsstatus, Natur-Themen, sekundäre Akzente
- **trailmark-orange**: Call-to-Action Highlights, Energie-Elemente
- **trailmark-stone**: Neutrale Hintergründe, subtile Elemente
- **trailmark-earth**: Dunkle Akzente, Footer-Elemente

### Typografie

- **Überschriften**: Verwende `font-display` (Poppins) für alle Überschriften
- **Fließtext**: Verwende Standard `font-sans` (Inter) für Fließtext
- **Größen**: Verwende Tailwinds Standard-Textgrößen (text-sm, text-base, text-lg, etc.)

Beispiel:
```html
<h1 class="text-4xl md:text-5xl lg:text-6xl font-display font-bold">
    Überschrift
</h1>
<p class="text-lg text-gray-600 leading-relaxed">
    Fließtext
</p>
```

### Responsive Design

Verwende Tailwinds responsive Prefixe konsistent:

- `sm:` - Kleine Bildschirme (640px+)
- `md:` - Mittlere Bildschirme (768px+)
- `lg:` - Große Bildschirme (1024px+)

Beispiel:
```html
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    <!-- Responsives Grid -->
</div>
```

### Abstände

- Verwende konsistente Abstands-Skala: 4, 6, 8, 12, 16, 24
- Verwende `mb-*` für untere Abstände
- Verwende `gap-*` für Flexbox/Grid-Abstände
- Verwende `space-x-*` und `space-y-*` für konsistente Kind-Abstände

### Häufige Patterns

#### Container
```html
<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <!-- Zentrierter Inhalt mit responsivem Padding -->
</div>
```

#### Verlaufshintergrund
```html
<section class="bg-gradient-to-br from-blue-50 via-white to-green-50">
    <!-- Subtiler Verlaufshintergrund -->
</section>
```

#### Karte
```html
<div class="bg-white rounded-lg shadow-lg p-8">
    <!-- Karten-Inhalt -->
</div>
```

#### Hover-Übergänge
```html
<a href="#" class="text-gray-700 hover:text-trailmark-blue transition-colors duration-200">
    Link
</a>
```

## 🛠️ Entwicklungs-Workflow

### Voraussetzungen

- **Ruby 3.x** - Für Jekyll
- **Node.js 18+** - Für Tailwind CSS
- **Git** - Versionskontrolle

### Initiales Setup

1. **Repository klonen**
   ```bash
   git clone https://github.com/trailmarks-io/trailmarks-io.github.io.git
   cd trailmarks-io.github.io
   ```

2. **Ruby-Abhängigkeiten installieren**
   ```bash
   bundle install
   ```

3. **Node.js-Abhängigkeiten installieren**
   ```bash
   npm install
   ```

### Entwicklungsbefehle

#### CSS Bauen (Entwicklung)
```bash
npm run build-css
```
- Überwacht `src/input.css` auf Änderungen
- Kompiliert zu `assets/css/style.css`
- Enthält alle Tailwind-Klassen (nicht minimiert)

#### CSS Bauen (Produktion)
```bash
npm run build-css-prod
```
- Kompiliert und minimiert CSS
- Entfernt ungenutzte Klassen
- Optimiert für Produktion

#### Entwicklungsserver starten
```bash
npm run dev
```
- Startet Tailwind CSS Watch-Modus
- Startet Jekyll-Entwicklungsserver mit Live-Reload
- Verfügbar unter http://localhost:4000

#### Produktions-Site bauen
```bash
npm run build
```
- Baut minimiertes CSS
- Baut Jekyll-Site
- Ausgabe im `_site/` Verzeichnis

### Dateistruktur

```
├── src/
│   └── input.css          # Tailwind CSS Quelle mit eigenen Komponenten
├── assets/
│   └── css/
│       └── style.css      # Kompiliertes CSS (automatisch generiert)
├── tailwind.config.js     # Tailwind-Konfiguration
├── _layouts/              # Jekyll-Layout-Templates
├── _includes/             # Wiederverwendbare Komponenten (Header, Footer)
├── index.html             # Deutsche Homepage
├── en/                    # Englische Seiten
│   ├── index.html
│   ├── about.html
│   └── contact.html
└── about.html             # Deutsche Seiten
```

## 📝 Coding-Standards

### HTML

1. Verwende semantische HTML5-Elemente
2. Füge korrekte ARIA-Labels für Barrierefreiheit hinzu
3. Verwende Jekyll-Includes für wiederverwendbare Komponenten
4. Halte die Verschachtelungstiefe angemessen

### Tailwind CSS

1. **Ordne Klassen logisch**:
   - Layout (display, position)
   - Box-Modell (width, height, padding, margin)
   - Typografie (font, text)
   - Visuell (background, border)
   - Effekte (shadow, opacity)
   - Interaktivität (hover, focus)
   - Responsive Modifikatoren zuletzt

2. **Teile lange Klassenlisten** in mehrere Zeilen auf für bessere Lesbarkeit:
   ```html
   <button class="
       bg-trailmark-blue hover:bg-blue-600 
       text-white font-semibold 
       py-3 px-6 rounded-lg 
       transition-colors duration-200
   ">
   ```

3. **Extrahiere wiederholte Patterns** in eigene Komponenten in `src/input.css`

4. **Verwende eigene Farbnamen** anstatt generischer:
   - ✅ `bg-trailmark-blue`
   - ❌ `bg-blue-500`

### Jekyll

1. Verwende Front Matter für Seiten-Metadaten
2. Nutze Includes für wiederverwendbare Komponenten
3. Verwende korrekte Liquid-Templating-Syntax
4. Unterstütze sowohl Deutsch (Standard) als auch Englisch

## 🌍 Internationalisierung

- Deutsch ist die Standardsprache (`lang: de`)
- Englische Seiten befinden sich im `/en/` Verzeichnis
- Verwende bedingte Darstellung für sprachspezifische Inhalte:

```html
{% if page.lang == 'en' %}
    <p>English content</p>
{% else %}
    <p>Deutscher Inhalt</p>
{% endif %}
```

## 🧪 Änderungen Testen

### Visuelles Testen

1. Entwicklungsserver starten: `npm run dev`
2. Prüfe sowohl deutsche als auch englische Versionen
3. Teste responsive Design bei verschiedenen Breakpoints:
   - Mobil: 375px
   - Tablet: 768px
   - Desktop: 1024px, 1440px

### Browser-Tests

Teste in:
- Chrome/Edge (Chromium)
- Firefox
- Safari (falls verfügbar)

### Barrierefreiheit

- Verwende semantisches HTML
- Füge Alt-Text für Bilder hinzu
- Stelle ausreichenden Farbkontrast sicher
- Teste Tastaturnavigation
- Verwende ARIA-Labels wo angemessen

## 🚀 Deployment

Die Site wird automatisch via GitHub Actions deployed:

- **Produktion**: `main` Branch → https://trailmarks-io.github.io
- **Staging**: `develop` Branch → https://trailmarks-io.github.io/dev
- **Pull Requests**: Nur Build (kein Deployment)

### Deployment-Checkliste

Vor dem Merge in main:

- [ ] CSS für Produktion bauen: `npm run build-css-prod`
- [ ] Build lokal testen: `npm run build`
- [ ] Prüfen, dass alle Seiten korrekt laden
- [ ] Sowohl deutsche als auch englische Version prüfen
- [ ] Responsive Design verifizieren
- [ ] Browser-Konsole auf Fehler prüfen

## 🔧 Troubleshooting

### CSS aktualisiert nicht

1. Jekyll-Cache löschen: `bundle exec jekyll clean`
2. Tailwind-Watch neu starten: `npm run build-css`
3. Browser hart neu laden (Ctrl+Shift+R / Cmd+Shift+R)

### Klassen nicht gefunden

1. Prüfen, dass die Datei im `tailwind.config.js` content-Array enthalten ist
2. Sicherstellen, dass gültige Tailwind-Klassen verwendet werden
3. CSS neu bauen: `npm run build-css`

### Build-Fehler

1. Node.js-Version prüfen: `node --version` (sollte 18+ sein)
2. Ruby-Version prüfen: `ruby --version` (sollte 3.x sein)
3. Abhängigkeiten neu installieren:
   ```bash
   rm -rf node_modules
   npm install
   bundle install
   ```

## 📚 Ressourcen

- [Tailwind CSS Dokumentation](https://tailwindcss.com/docs)
- [Jekyll Dokumentation](https://jekyllrb.com/docs/)
- [Alpine.js Dokumentation](https://alpinejs.dev/) (verwendet für mobiles Menü)

## 🤝 Contributing

1. Erstelle einen Feature-Branch von `develop`
2. Mache deine Änderungen gemäß diesen Richtlinien
3. Teste gründlich
4. Erstelle einen Pull Request zu `develop`

---

*Halte sauberen, semantischen und barrierefreien Code mit Tailwind CSS Utilities.*
