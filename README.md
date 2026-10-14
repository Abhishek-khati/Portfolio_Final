# Abhishek Khati — Personal Portfolio

A production-quality, visually distinctive personal portfolio built with React 18, TypeScript, Vite, Framer Motion, and Three.js.

## ✨ Features

- 🌌 Interactive 3D hero scene (WebGL with CSS fallback)
- 🎨 Dark / Light theme toggle with persistence
- 🧭 Smooth scroll navigation with active-section tracking
- 📊 Interactive skills with category tabs and proficiency badges
- 💼 Project cards with hover effects and full case-study modals
- 🗓️ Animated learning journey timeline
- 📩 Contact form with client-side validation
- 📱 Fully responsive (mobile, tablet, desktop)
- ♿ Accessible — keyboard navigation, ARIA labels, reduced-motion support
- ⚡ Lazy-loaded 3D scene for performance

## 🚀 Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Copy environment variables

```bash
copy .env.example .env
```

Edit `.env` to add your EmailJS keys if you want the contact form to send real emails.

### 3. Resume

Resume PDF is placed at:

```
public/Abhishek_resume_Ak47.pdf
```

### 4. Update your personal info

All editable content is centralized in one file:

```
src/data/portfolio.ts
```

Update `profile`, `skills`, `projects`, `journey`, and `certifications` there.

### 5. Start dev server

```bash
npm run dev
```

Open **http://localhost:5173** in your browser.

## 🏗️ Build for Production

```bash
npm run build
```

Output will be in the `dist/` folder.

Preview the production build locally:

```bash
npm run preview
```

## 🚢 Deploy to Vercel

### Option A — Vercel CLI

```bash
npm install -g vercel
vercel
```

Follow the prompts. Set the build command to `npm run build` and output directory to `dist`.

### Option B — Vercel Dashboard

1. Push this project to a GitHub repository.
2. Go to [vercel.com](https://vercel.com) → Import Project.
3. Select your repository.
4. Set **Framework Preset** to `Vite`.
5. Set **Output Directory** to `dist`.
6. Add environment variables from `.env.example` if needed.
7. Deploy.

## 📁 Project Structure

```
src/
  components/       # All page sections and UI components
  data/
    portfolio.ts    # ← EDIT THIS to update your portfolio content
  hooks/            # useTheme, useScrollProgress
  styles/
    index.css       # Global design tokens and utilities
  App.tsx
  main.tsx
public/
  Abhishek_resume_Ak47.pdf  # Actual verified resume
  favicon.svg
```

## 🔧 Enabling the Contact Form (EmailJS)

1. Create a free account at [emailjs.com](https://www.emailjs.com).
2. Create an Email Service and a Template.
3. Copy your Service ID, Template ID, and Public Key into `.env`.
4. In `Contact.tsx`, replace the simulated `await new Promise(...)` with an actual `emailjs.send()` call.

## 📝 Content Guidelines

- All project descriptions only describe features that were actually built.
- Skill levels use honest labels (working / familiar / learning) — no fake percentages.
- Certifications section shows an empty state if no verified credentials exist.
- Availability status is controlled by `profile.availableForWork` in `portfolio.ts`.
