# Wedgewood Adventures Kenya - Luxury Safari Website

A premium luxury safari booking website built with Next.js, featuring bespoke safari experiences in Kenya.

## 🌐 Live Site

**GitHub Pages:** [https://novasway.github.io/Wedge-wood-adventures/](https://novasway.github.io/Wedge-wood-adventures/)

## 🚀 Features

- **Responsive Design**: Optimized for mobile, tablet, and desktop
- **Interactive Calendar**: Date picker for safari booking
- **Smooth Navigation**: Scroll-to-section functionality
- **Contact Forms**: WhatsApp and email integration
- **Image Gallery**: Lightbox modal for safari photos
- **Modern UI**: Built with Tailwind CSS and Radix UI components

## 🛠️ Tech Stack

- **Framework**: Next.js 16.0.10
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4.1.9
- **UI Components**: Radix UI / shadcn/ui
- **Icons**: Lucide React
- **Deployment**: GitHub Pages

## 📦 Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## 🚢 Deployment

This project is configured for GitHub Pages deployment using GitHub Actions.

### Setup Instructions:

1. **Enable GitHub Pages**:
   - Go to your repository settings
   - Navigate to "Pages" section
   - Select "GitHub Actions" as the source

2. **Automatic Deployment**:
   - The workflow automatically builds and deploys on every push to `main` branch
   - The site will be available at: `https://[username].github.io/Wedge-wood-adventures/`

3. **Manual Deployment**:
   ```bash
   git push origin main
   ```

## 📝 Project Structure

```
├── app/                 # Next.js app directory
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Home page
│   └── globals.css     # Global styles
├── components/          # React components
│   ├── Hero.tsx        # Hero section
│   ├── Navigation.tsx  # Navigation bar
│   ├── About.tsx       # About section
│   └── ...            # Other sections
├── public/             # Static assets
└── lib/               # Utility functions
```

## 🔧 Configuration

The project is configured for static export in `next.config.mjs`:
- `output: 'export'` - Enables static site generation
- `basePath: '/Wedge-wood-adventures'` - Sets the base path for GitHub Pages
- `images: { unoptimized: true }` - Required for static export

## 📱 Contact Information

- **Phone**: +254 748 132 915
- **Email**: wedgewoodadventuresafaris@gmail.com
- **WhatsApp**: +254 748 132 915
- **Location**: Nairobi, Kenya

## 📄 License

All rights reserved © 2024 Wedgewood Adventures Kenya