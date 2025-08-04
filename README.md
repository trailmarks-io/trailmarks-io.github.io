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

### Prerequisites

- Ruby 3.x
- Node.js 18+
- Git

### Local Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/trailmarks-io/trailmarks-io.github.io.git
   cd trailmarks-io.github.io
   ```

2. **Install dependencies**
   ```bash
   # Ruby dependencies
   bundle install

   # Node.js dependencies
   npm install
   ```

3. **Build CSS**
   ```bash
   npm run build-css
   ```

4. **Start development server**
   ```bash
   npm run dev
   # or manually:
   bundle exec jekyll serve --livereload
   ```

5. **Visit the site**
   Open http://localhost:4000 in your browser

### Build Commands

- `npm run build-css` - Build CSS with Tailwind (watch mode)
- `npm run build-css-prod` - Build CSS for production (minified)
- `npm run dev` - Start development server with live reload
- `npm run build` - Build production site

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

The site uses a custom Tailwind CSS configuration with Trailmarks brand colors:

- **Blue**: #3B82F6 (primary)
- **Green**: #10B981 (nature)
- **Orange**: #F59E0B (energy)
- **Stone**: #78716C (earth)
- **Earth**: #92400E (ground)

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
