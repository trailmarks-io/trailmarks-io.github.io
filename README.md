# Trailmarks.io Homepage

Welcome to the official homepage of Trailmarks.io - The new standard for your hiking trailmarks and stones.

## 🏔️ About

This repository contains the source code for the Trailmarks.io homepage, a modern Jekyll site that tells the story of "Wandersteine" (hiking stones) and introduces our vision for the future of digital trail marking.

## 🚀 Features

- **Modern Design**: Built with Tailwind CSS for a bright, responsive design
- **Bilingual**: Full German and English language support
- **Static Site**: Jekyll-powered for fast, reliable performance
- **GitHub Pages**: Automated deployment via GitHub Actions
- **Multi-Environment**: Support for dev/qa/prod staging

## 🛠️ Development

### Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/trailmarks-io/trailmarks-io.github.io.git
   cd trailmarks-io.github.io
   ```

2. **Install dependencies**
   ```bash
   bundle install  # Ruby dependencies
   npm install     # Node.js dependencies
   ```

3. **Start development**
   ```bash
   npm run dev
   ```

4. **Visit the site**
   Open http://localhost:4000 in your browser

### Build Commands

- `npm run build-css` - Build CSS with Tailwind (watch mode)
- `npm run build-css-prod` - Build CSS for production (minified)
- `npm run dev` - Start development server with live reload
- `npm run build` - Build production site

### Development Guidelines

**📖 See [DEVELOPMENT.md](DEVELOPMENT.md) for comprehensive guidelines on:**

- Tailwind CSS styling conventions and best practices
- Custom components and utilities
- Responsive design patterns
- Code standards and file structure
- Testing and deployment procedures

## 🌐 Deployment

The site is automatically deployed via GitHub Actions:

- **Production**: `main` branch → https://trailmarks-io.github.io
- **Staging**: `develop` branch → https://trailmarks-io.github.io/dev
- **Pull Requests**: Build-only (no deployment)

## 📁 Project Structure

```
├── _config.yml          # Jekyll configuration
├── _layouts/            # Page templates
├── _includes/           # Reusable components
├── _site/              # Generated site (git-ignored)
├── assets/css/         # Generated CSS
├── src/                # Source files
│   └── input.css       # Tailwind CSS source
├── en/                 # English pages
├── index.html          # German homepage
├── about.html          # German about page
├── contact.html        # German contact page
├── package.json        # Node.js dependencies
├── Gemfile            # Ruby dependencies
└── tailwind.config.js # Tailwind configuration
```

## 🎨 Design System

The site uses **Tailwind CSS** as the exclusive styling framework with a custom configuration.

### Brand Colors

- **trailmark-blue**: `#3B82F6` - Primary brand color
- **trailmark-green**: `#10B981` - Nature, success states
- **trailmark-orange**: `#F59E0B` - Energy, call-to-action
- **trailmark-stone**: `#78716C` - Earth, neutral tones
- **trailmark-earth**: `#92400E` - Ground, dark accents

### Typography

- **Font Display**: Poppins - For headlines and display text
- **Font Sans**: Inter - For body text and UI elements

### Custom Components

- `.btn-primary` - Primary action buttons
- `.btn-secondary` - Secondary action buttons
- `.section-padding` - Standard section spacing

See [DEVELOPMENT.md](DEVELOPMENT.md#-styling-with-tailwind-css) for detailed styling guidelines.

## 🌍 Languages

- **German** (default): `/`, `/about/`, `/contact/`
- **English**: `/en/`, `/en/about/`, `/en/contact/`

## 📄 Content

The homepage tells the story of:
- **Wandersteine**: Historical context of trail stones
- **Tradition**: From ancient Romans to modern hikers
- **Innovation**: How Trailmarks.io bridges tradition and technology
- **Vision**: Future of digital trail marking

## 🤝 Contributing

This project is in active development. Follow our progress:

- **GitHub**: [@trailmarks-io](https://github.com/trailmarks-io)
- **Issues**: Report bugs and feature requests
- **Discussions**: Join community conversations

## 📜 License

This project is open source. See individual files for specific license information.

---

*Entdecke die faszinierende Welt der Wandersteine und Wegmarkierungen.*
*Discover the fascinating world of hiking stones and trail markers.*
