# 🐦 RoboBird IT Solution & Services — Website

> **Empowering Businesses Through Smart Digital Solutions**

A full production-ready website for RoboBird IT Solution & Services, built with React 18, Vite, Framer Motion, and React Router DOM.

---

## ✨ Features

- **6 Pages**: Home, Services, Products, Portfolio, About, Contact
- **Dark Mode** with localStorage persistence
- **Animated Hero** with glassmorphism and floating cards
- **Animated Counters** (Intersection Observer triggered)
- **Portfolio Filter** with AnimatePresence transitions
- **Testimonials Carousel**
- **Accordion FAQ** with 10 questions
- **Contact Form** with validation
- **Loading Screen** on first visit
- **WhatsApp Float Button**
- **Back to Top Button**
- **Fully Responsive** — mobile, tablet, desktop
- **SEO Optimized** — meta tags, OG, Twitter cards, Schema.org JSON-LD

---

## 🛠 Tech Stack

| Layer | Tech |
|---|---|
| Framework | React 18 |
| Build Tool | Vite 5 |
| Routing | React Router DOM 6 |
| Animation | Framer Motion 11 |
| Icons | Lucide React |
| Fonts | Poppins + Inter (Google Fonts) |
| Deployment | GitHub Pages / Vercel / Netlify |

---

## 📁 Project Structure

```
robobird/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── LoadingScreen.jsx
│   │   ├── WhatsAppFloat.jsx
│   │   ├── BackToTop.jsx
│   │   ├── DarkModeToggle.jsx
│   │   ├── ServiceCard.jsx
│   │   ├── StatsSection.jsx
│   │   ├── Testimonials.jsx
│   │   ├── FAQ.jsx
│   │   └── CTASection.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Services.jsx
│   │   ├── Products.jsx
│   │   ├── Portfolio.jsx
│   │   ├── About.jsx
│   │   └── Contact.jsx
│   ├── hooks/
│   │   ├── useDarkMode.js
│   │   └── useCounter.js
│   ├── data/
│   │   └── index.js
│   ├── styles/
│   │   └── globals.css
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── vite.config.js
├── package.json
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm 9+

### Installation

```bash
# Clone the repo
git clone https://github.com/yourusername/robobird.git
cd robobird

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 📦 Build for Production

```bash
npm run build
```

Output goes to `dist/`.

Preview production build locally:
```bash
npm run preview
```

---

## 🌐 Deployment

### GitHub Pages

1. Update `vite.config.js` base if deploying to a subpath:
   ```js
   base: '/repo-name/', // if at yourusername.github.io/repo-name
   // or
   base: '/',           // if using custom domain
   ```

2. Deploy:
   ```bash
   npm run deploy
   ```
   This runs `predeploy` (build) then `gh-pages -d dist`.

3. Go to **GitHub → Settings → Pages** → Source: `gh-pages` branch.

### Vercel (Recommended)

```bash
npm i -g vercel
vercel --prod
```

### Netlify

```bash
npm run build
# Drag and drop dist/ to netlify.com/drop
```

---

## 🌍 Custom Domain Setup

### Step 1 — Add CNAME in repo

Create `public/CNAME` with:
```
robobird.in
```

### Step 2 — DNS Records (at your registrar)

| Type | Name | Value |
|------|------|-------|
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| CNAME | www | yourusername.github.io |

### Step 3 — GitHub Settings

**Settings → Pages → Custom domain** → Enter `robobird.in` → Save

Check **Enforce HTTPS** after DNS propagates (up to 48 hours).

---

## 🔍 SEO Configuration

SEO tags are in `index.html`:
- Meta description + keywords
- Open Graph (og:title, og:description, og:image)
- Twitter Card
- Schema.org JSON-LD (Organization)

Update `og:image` by adding `/public/og-image.png` (1200×630px recommended).

---

## 🎨 Customization

### Colors (`src/styles/globals.css`)
```css
:root {
  --primary: #2563EB;    /* Main blue */
  --accent:  #06B6D4;    /* Cyan accent */
  --success: #10B981;    /* Green */
}
```

### Content (`src/data/index.js`)
Edit `services`, `products`, `portfolio`, `testimonials`, `faqs`, `stats` arrays.

### Contact Details
Search for placeholder phone/email/address in `Footer.jsx` and `Contact.jsx`.

### WhatsApp Number
Edit `WhatsAppFloat.jsx` — update the `href` number.

---

## 📄 License

MIT © 2024 RoboBird IT Solution & Services
