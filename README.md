# Shreyal Stationery Solution 📚💼

A modern, responsive B2B wholesale stationery and institutional supply e-commerce website built with React, Vite, and Tailwind CSS.

🌐 **Live URL (after GitHub Pages deployment):** `https://asrathore0.github.io/Shreyal/`

---

## Features

- **Institutional B2B Catalog:** 9 dedicated wholesale departments (Notebooks, Copier Paper, Pens & Writing, Office Supplies, Art & Craft, School Supplies, Files & Binders, Desk Essentials, Exam Supplies).
- **Volume Tier Pricing:** Dynamic bulk discount tiers with live quantity multipliers.
- **WhatsApp Checkout Channel:** Instant formatted cart orders and institutional RFQ submissions sent directly to the sales desk on WhatsApp (`wa.me`).
- **Interactive Wholesale Calculator:** Live comparison estimator calculating wholesale savings vs retail market rates.
- **Mobile-First Experience:** Floating island navigation dock, scroll-direction aware search bar, and 1-tap product autocomplete.
- **GitHub Pages Ready:** Configured with SPA subpath routing, 404 redirect handling, and automated GitHub Actions deployment.

---

## Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Local Development Server
```bash
npm run dev
```

### 3. Build for Production
```bash
npm run build
```

---

## Deployment to GitHub Pages

This repository includes an automated GitHub Actions deployment workflow at `.github/workflows/deploy.yml`.

### Enabling GitHub Pages in Your Repository:
1. Push the code to `https://github.com/ASRathore0/Shreyal.git`:
   ```bash
   git add .
   git commit -m "Deploy Shreyal Stationery Solution"
   git push -u origin main
   ```
2. Go to **Settings** → **Pages** on your GitHub repository.
3. Under **Build and deployment** → **Source**, select **GitHub Actions**.
4. The deployment workflow will automatically run, build, and publish the live storefront at:
   `https://asrathore0.github.io/Shreyal/`
