# Development Guidelines

This document provides comprehensive guidelines for developing the Trailmarks.io homepage.

## 🎨 Styling with Tailwind CSS

This project uses **Tailwind CSS** as the exclusive styling framework. All styling must be done using Tailwind utility classes.

### Core Principles

1. **Utility-First**: Use Tailwind utility classes directly in HTML
2. **No Inline Styles**: Never use inline `style=""` attributes
3. **Component Classes**: Use `@apply` in `src/input.css` for reusable patterns
4. **Consistency**: Follow the established design system

### Tailwind Configuration

Our Tailwind setup is configured in `tailwind.config.js`:

```javascript
// Custom brand colors
colors: {
  'trailmark': {
    'blue': '#3B82F6',    // Primary brand color
    'green': '#10B981',   // Nature, success
    'orange': '#F59E0B',  // Energy, accent
    'stone': '#78716C',   // Earth, neutral
    'earth': '#92400E'    // Ground, dark accent
  }
}

// Custom fonts
fontFamily: {
  'sans': ['Inter', 'system-ui', 'sans-serif'],      // Body text
  'display': ['Poppins', 'system-ui', 'sans-serif']  // Headlines
}
```

### Custom Components

We have defined custom component classes in `src/input.css` for frequently used patterns:

#### Button Styles

```css
.btn-primary
  - Primary action button
  - Blue background with white text
  - Hover effect to darker blue
  
.btn-secondary
  - Secondary action button
  - White background with blue border and text
  - Hover effect to light gray background

.section-padding
  - Standard vertical padding for sections
  - 4rem (py-16) on mobile
  - 6rem (py-24) on desktop (lg breakpoint)
```

### Usage Examples

#### Primary Button
```html
<a href="/action" class="btn-primary">
    Click Me
</a>
```

#### Secondary Button
```html
<a href="/action" class="btn-secondary">
    Learn More
</a>
```

#### Section Padding
```html
<section class="section-padding bg-white">
    <!-- Content -->
</section>
```

### Color Usage Guidelines

- **trailmark-blue**: Primary actions, links, brand elements
- **trailmark-green**: Success states, nature themes, secondary accents
- **trailmark-orange**: Call-to-action highlights, energy elements
- **trailmark-stone**: Neutral backgrounds, subtle elements
- **trailmark-earth**: Dark accents, footer elements

### Typography

- **Headings**: Use `font-display` (Poppins) for all headings
- **Body Text**: Use default `font-sans` (Inter) for body text
- **Sizes**: Use Tailwind's standard text size scale (text-sm, text-base, text-lg, etc.)

Example:
```html
<h1 class="text-4xl md:text-5xl lg:text-6xl font-display font-bold">
    Heading
</h1>
<p class="text-lg text-gray-600 leading-relaxed">
    Body text
</p>
```

### Responsive Design

Use Tailwind's responsive prefixes consistently:

- `sm:` - Small screens (640px+)
- `md:` - Medium screens (768px+)
- `lg:` - Large screens (1024px+)

Example:
```html
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    <!-- Responsive grid -->
</div>
```

### Spacing

- Use consistent spacing scale: 4, 6, 8, 12, 16, 24
- Use `mb-*` for bottom margins
- Use `gap-*` for flexbox/grid spacing
- Use `space-x-*` and `space-y-*` for consistent child spacing

### Common Patterns

#### Container
```html
<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <!-- Centered content with responsive padding -->
</div>
```

#### Gradient Background
```html
<section class="bg-gradient-to-br from-blue-50 via-white to-green-50">
    <!-- Subtle gradient background -->
</section>
```

#### Card
```html
<div class="bg-white rounded-lg shadow-lg p-8">
    <!-- Card content -->
</div>
```

#### Hover Transitions
```html
<a href="#" class="text-gray-700 hover:text-trailmark-blue transition-colors duration-200">
    Link
</a>
```

## 🛠️ Development Workflow

### Prerequisites

- **Ruby 3.x** - For Jekyll
- **Node.js 18+** - For Tailwind CSS
- **Git** - Version control

### Initial Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/trailmarks-io/trailmarks-io.github.io.git
   cd trailmarks-io.github.io
   ```

2. **Install Ruby dependencies**
   ```bash
   bundle install
   ```

3. **Install Node.js dependencies**
   ```bash
   npm install
   ```

### Development Commands

#### Build CSS (Development)
```bash
npm run build-css
```
- Watches `src/input.css` for changes
- Compiles to `assets/css/style.css`
- Includes all Tailwind classes (unminified)

#### Build CSS (Production)
```bash
npm run build-css-prod
```
- Compiles and minifies CSS
- Removes unused classes
- Optimized for production

#### Start Development Server
```bash
npm run dev
```
- Starts Tailwind CSS watch mode
- Starts Jekyll development server with live reload
- Available at http://localhost:4000

#### Build Production Site
```bash
npm run build
```
- Builds minified CSS
- Builds Jekyll site
- Output in `_site/` directory

### File Structure

```
├── src/
│   └── input.css          # Tailwind CSS source with custom components
├── assets/
│   └── css/
│       └── style.css      # Compiled CSS (auto-generated)
├── tailwind.config.js     # Tailwind configuration
├── _layouts/              # Jekyll layout templates
├── _includes/             # Reusable components (header, footer)
├── index.html             # German homepage
├── en/                    # English pages
│   ├── index.html
│   ├── about.html
│   └── contact.html
└── about.html             # German pages
```

## 📝 Coding Standards

### HTML

1. Use semantic HTML5 elements
2. Add proper ARIA labels for accessibility
3. Use Jekyll includes for reusable components
4. Keep nesting depth reasonable

### Tailwind CSS

1. **Order classes logically**:
   - Layout (display, position)
   - Box model (width, height, padding, margin)
   - Typography (font, text)
   - Visual (background, border)
   - Effects (shadow, opacity)
   - Interactivity (hover, focus)
   - Responsive modifiers last

2. **Break long class lists** into multiple lines for readability:
   ```html
   <button class="
       bg-trailmark-blue hover:bg-blue-600 
       text-white font-semibold 
       py-3 px-6 rounded-lg 
       transition-colors duration-200
   ">
   ```

3. **Extract repeated patterns** to custom components in `src/input.css`

4. **Use custom color names** instead of generic ones:
   - ✅ `bg-trailmark-blue`
   - ❌ `bg-blue-500`

### Jekyll

1. Use front matter for page metadata
2. Leverage includes for reusable components
3. Use proper liquid templating syntax
4. Support both German (default) and English languages

## 🌍 Internationalization

- German is the default language (`lang: de`)
- English pages are in `/en/` directory
- Use conditional rendering for language-specific content:

```html
{% if page.lang == 'en' %}
    <p>English content</p>
{% else %}
    <p>Deutscher Inhalt</p>
{% endif %}
```

## 🧪 Testing Changes

### Visual Testing

1. Start development server: `npm run dev`
2. Check both German and English versions
3. Test responsive design at different breakpoints:
   - Mobile: 375px
   - Tablet: 768px
   - Desktop: 1024px, 1440px

### Browser Testing

Test in:
- Chrome/Edge (Chromium)
- Firefox
- Safari (if available)

### Accessibility

- Use semantic HTML
- Include alt text for images
- Ensure proper color contrast
- Test keyboard navigation
- Use ARIA labels where appropriate

## 🚀 Deployment

The site is automatically deployed via GitHub Actions:

- **Production**: `main` branch → https://trailmarks-io.github.io
- **Staging**: `develop` branch → https://trailmarks-io.github.io/dev
- **Pull Requests**: Build-only (no deployment)

### Deployment Checklist

Before merging to main:

- [ ] Build CSS for production: `npm run build-css-prod`
- [ ] Test build locally: `npm run build`
- [ ] Verify all pages load correctly
- [ ] Check both German and English versions
- [ ] Verify responsive design
- [ ] Check browser console for errors

## 🔧 Troubleshooting

### CSS Not Updating

1. Clear Jekyll cache: `bundle exec jekyll clean`
2. Restart Tailwind watch: `npm run build-css`
3. Hard refresh browser (Ctrl+Shift+R / Cmd+Shift+R)

### Classes Not Found

1. Check that the file is included in `tailwind.config.js` content array
2. Ensure you're using valid Tailwind classes
3. Rebuild CSS: `npm run build-css`

### Build Errors

1. Check Node.js version: `node --version` (should be 18+)
2. Check Ruby version: `ruby --version` (should be 3.x)
3. Reinstall dependencies:
   ```bash
   rm -rf node_modules
   npm install
   bundle install
   ```

## 📚 Resources

- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Jekyll Documentation](https://jekyllrb.com/docs/)
- [Alpine.js Documentation](https://alpinejs.dev/) (used for mobile menu)

## 🤝 Contributing

1. Create a feature branch from `develop`
2. Make your changes following these guidelines
3. Test thoroughly
4. Submit a pull request to `develop`

---

*Maintain clean, semantic, and accessible code using Tailwind CSS utilities.*
