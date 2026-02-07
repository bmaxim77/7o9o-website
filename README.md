# 7o9o Website

Elegant, minimalist website for strategic financial services.

## Features

- **Minimalist Design**: Clean, sophisticated aesthetic with dark color scheme
- **Responsive**: Fully responsive across all devices
- **Fast**: Built with Astro for optimal performance
- **Professional**: Deliberately vague messaging suitable for private financial services

## Color Scheme

- Primary: Deep Navy (#1a1f2e)
- Secondary: Charcoal (#2d3548)
- Accent: Gold (#c9a961)
- Text: Light Gray (#e8e8e8)

## Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment

This site is configured for Cloudflare Pages deployment via GitHub.

1. Push changes to GitHub
2. Cloudflare automatically builds and deploys
3. Build command: `npm run build`
4. Build output directory: `dist`

## Structure

```
7o9o-website/
├── src/
│   ├── components/      # Reusable components
│   ├── layouts/         # Page layouts
│   └── pages/          # Routes (index.astro = homepage)
├── public/             # Static assets
└── astro.config.mjs    # Astro configuration
```

## Customization

To update content:
- **Hero section**: Edit `src/components/Hero.astro`
- **About text**: Edit `src/components/About.astro`
- **Services**: Edit `src/components/Services.astro`
- **Contact email**: Edit `src/components/Contact.astro`
- **Colors**: Modify CSS variables in `src/layouts/Layout.astro`

## Contact

For any updates or changes, contact through this Claude conversation.
