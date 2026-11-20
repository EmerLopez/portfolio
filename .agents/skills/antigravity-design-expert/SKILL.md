---
name: antigravity-design-expert
description: >-
  Expert guidance on UI/UX design, visual hierarchy, modern color theory, responsive layouts,
  accessibility (WCAG), and frontend engineering standards for web projects and developer portfolios.
  Use when designing, auditing, refactoring, or modernizing web interfaces, design systems, and developer portfolios.
---

# Antigravity Design Expert

This skill provides comprehensive instructions, standards, and design system best practices for crafting modern, accessible, and high-impact web interfaces, with specialized guidelines for software developer portfolios.

---

## 1. Core Visual Design Principles

### Visual Hierarchy & Layout
- **F-Pattern & Z-Pattern Scanning:** Position the most critical elements (Value proposition, Call-to-Actions, Key navigation) along primary visual scan paths.
- **8-Point Grid System:** Use consistent spatial scaling for margins, paddings, and heights (`4px`, `8px`, `16px`, `24px`, `32px`, `48px`, `64px`). Never use arbitrary spacing.
- **Content Chunking:** Group related information into cohesive cards or sections with clear borders or subtle background elevation (`rgba(0, 0, 0, 0.04)` to `rgba(0, 0, 0, 0.08)`).
- **Whitespace / Negative Space:** Give headings and sections room to breathe. Maintain at least `4rem` to `6rem` vertical padding between landing page sections.

### Modern Color Harmony
- **60-30-10 Rule:**
  - **60% Dominant (Canvas):** Neutral background (clean light mode `#F8FAFC` / `#FFFFFF` or sleek dark mode `#0F172A` / `#1E293B`).
  - **30% Secondary (Structure):** Cards, navbars, borders, muted text (`#334155`, `#64748B`, `#E2E8F0`).
  - **10% Accent (Action & Focus):** Interactive buttons, active states, tech tags, key highlights (`#3B82F6`, `#6366F1`, or brand color).
- **Contrast Ratios (WCAG 2.1 AA Compliance):**
  - Normal text (< 18pt): Minimum **4.5:1** contrast against background.
  - Large text (>= 18pt / bold >= 14pt): Minimum **3:1** contrast.
  - Interactive icons and form inputs: Minimum **3:1** boundary contrast.

### Typography Standards
- **Font Pairing:** Use maximum 2 typefaces. One clean sans-serif for UI/body (e.g., `Inter`, `Roboto`, `Plus Jakarta Sans`, `system-ui`) and optionally a distinct display font or monospace for code snippets (`Fira Code`, `JetBrains Mono`).
- **Typographic Scale:**
  - Hero Display: `2.5rem` - `3.5rem` (`bold` / `800`)
  - Section Headings (H2): `1.75rem` - `2.25rem` (`semi-bold` / `700`)
  - Subheadings (H3): `1.25rem` - `1.5rem` (`medium` / `600`)
  - Body Text: `1rem` (`16px`) with `1.5` to `1.7` line-height for readability.
  - Captions / Badges: `0.75rem` - `0.875rem` (`500` / `600` letter-spaced).

---

## 2. Developer Portfolio Architecture & UI Standards

A competitive developer portfolio for internships or junior roles must satisfy specific technical and recruiter expectations:

### A. Hero Section (First 5 Seconds)
- **Role Definition:** Explicit title (e.g., *"Full Stack Developer | Backend & Frontend"*), not vague adjectives.
- **Value Proposition:** 1-2 concise sentences outlining primary technologies (e.g., *"Building robust web applications with PHP, C#, Python, and modern JavaScript"*).
- **Direct Action Triggers:**
  - `GitHub Profile` (with icon)
  - `LinkedIn Profile` (with icon)
  - `Download CV` (PDF)
  * `Contact Me` anchor link

### B. Technical Skills Matrix
- Organize by layers rather than a random tag cloud:
  - **Frontend:** HTML5, CSS3, JavaScript (ES6+), Bootstrap, Tailwind CSS, Responsive Web Design.
  - **Backend:** PHP, C# (.NET), Python, RESTful APIs, MVC Pattern, OOP.
  - **Databases:** MySQL, PostgreSQL, Relational Schema Design, SQL Query Optimization.
  - **DevOps & Tools:** Git, GitHub, Postman, Linux, Networking Foundations (CCNA).

### C. Project Showcase (Case Studies)
Every project card/modal must provide:
1. **Clear Thumbnail:** High-resolution screenshot or mockup showing real interface.
2. **Project Context:** Academic, Freelance, or Personal.
3. **Problem & Solution:** What does it solve?
4. **Specific Role:** Responsibilities and modules built by the developer.
5. **Tech Stack Badges:** Individual technology pills.
6. **Code & Live Links:** Direct buttons for `GitHub Repository` and `Live Demo` or `Video Walkthrough`.

### D. Certifications & Academic Credentials
- Present official certificates (e.g., Cisco CCNA, University competitions) with title, issuing entity, date, and verified badge or modal preview.

---

## 3. Frontend Implementation & Engineering Best Practices

### Clean HTML Semantics
- Use semantic tags (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`) instead of nested generic `<div>` soup.
- Every `<img>` tag must include descriptive `alt` text (avoid empty or generic `alt="img"`).
- Provide meaningful form input `<label>` elements linked via `for="inputId"`.

### CSS Architecture & Maintainability
- Avoid duplicate class declarations or conflicting selector overrides.
- Use CSS Custom Properties (variables) for theme tokens:
  ```css
  :root {
    --color-primary: #0d6efd;
    --color-secondary: #2c3e50;
    --color-accent: #3b82f6;
    --color-bg: #f8fafc;
    --color-surface: #ffffff;
    --color-text: #1e293b;
    --color-text-muted: #64748b;
    --radius-sm: 6px;
    --radius-md: 12px;
    --radius-lg: 20px;
    --shadow-card: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
  }
  ```
- Use smooth transitions (`transition: transform 0.2s ease, box-shadow 0.2s ease;`) on interactive cards and buttons.

### Performance & Asset Optimization
- Convert heavy PNG/JPEG assets (>500KB) to modern formats (**WebP** / **AVIF**) or compress them.
- Apply responsive images and `loading="lazy"` on off-screen assets.
- Eliminate unused boilerplate images and dead code.

---

## 4. Design Audit Checklist

Before publishing or reviewing an interface, verify:
- [ ] No placeholder text (e.g., *"Lorem Ipsum"*, *"Descripción detallada del proyecto 1"*).
- [ ] All social and repository links open valid targets with `rel="noopener noreferrer"`.
- [ ] Contact form triggers visual feedback (loading state, success alert, error alert) without console errors.
- [ ] Spelling, grammar, and accent marks are 100% verified across all languages.
- [ ] Viewport renders smoothly on mobile (360px), tablet (768px), and desktop (1200px+).
