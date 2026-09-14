# Mohamed Mamdouh — Systems Architecture & Security Engineering Portfolio

Official engineering portfolio of Mohamed Mamdouh (`XREFS0`), Senior Systems Architect & Cybersecurity Engineer. The platform showcases production desktop systems, network telemetry utilities, high-throughput data extraction engines, enterprise management software, and accredited cybersecurity credentials.

---

## Technical Overview

- Architecture: Client-side single-page application (SPA)
- Core Runtime: React 18, TypeScript 5.5, Vite 5.4
- Design System: Vanilla Tailwind CSS (custom dark aesthetic, zero generic UI frameworks)
- Motion Engine: Framer Motion (physics-based spring animations and directional transitions)
- Typography: Inter (primary interface font) and JetBrains Mono (code and telemetry values)
- Iconography: Vector brand SVGs and Lucide React icon suite

---

## Core Sections

### 1. Systems & Engineering Catalog
Presents 37 engineering projects organized into five distinct technical domains:
- Cybersecurity & Recon: Active/passive domain reconnaissance engines with multi-phase orchestration.
- Networking: Promiscuous packet inspectors, multi-threaded port scanners, subnet calculators, and route diagnostic utilities.
- C# & .NET: High-concurrency desktop tools, real-time hardware telemetry monitors, cryptographic key generators, and multi-threaded data extraction engines.
- Systems & Linux: Kernel interface inspectors, automated differential backup daemons, and system health monitors.
- Enterprise Systems: Double-entry accounting software, multi-warehouse inventory systems, customer relationship managers, and automated billing platforms built on ACID-compliant SQLite architectures.

Each entry includes a technical breakdown, core feature sets, architectural summaries, and direct repository links.

### 2. Verified Accreditations
Presents 61 professional certifications across seven specialized tracks:
- Cybersecurity (29 certifications)
- Software Engineering & Architecture (10 certifications)
- Web & Backend Infrastructure (6 certifications)
- Systems & Distributed Computing (5 certifications)
- Mobile Application Development (3 certifications)
- Software Quality Assurance & Automation (3 certifications)
- Professional Freelance Practice (5 certifications)

Issued by accredited institutions including the Egyptian Ministry of Communications and Information Technology (MCIT) and the Information Technology Institute (ITI) Mahara-Tech.

### 3. Technical Expertise Matrix
An interactive display of foundational proficiencies across programming languages (C#, Python, Java, C++, TypeScript, JavaScript), frameworks (.NET 8, React, Qt/PySide6, WPF, Node.js), platforms (Linux, Docker, Git), and security diagnostics (Wireshark, Selenium, Raw Sockets).

---

## Project Structure

```text
├── public/
│   ├── certificates/    # High-resolution accredited certificate assets (61 files)
│   ├── projects/        # Production software screenshots and telemetry captures (35+ files)
│   ├── profile/         # Portrait imagery
│   └── logo.jpg         # Custom 3D monogram icon (favicon and branding)
├── src/
│   ├── components/
│   │   ├── common/      # Reusable primitives, modals, and canvas backgrounds
│   │   ├── layout/      # Header navigation, branding, and footer
│   │   ├── projects/    # Project detail modal viewers
│   │   └── certificates/# Certificate zoom and inspect modals
│   ├── data/
│   │   ├── projects.ts  # Catalog of 37 production projects with technical metadata
│   │   ├── certificates.ts # 61 verified certification entries
│   │   └── socialLinks.ts  # Verified communication and repository endpoints
│   ├── sections/        # Section modules (Hero, About, Projects, Certifications, Contact)
│   ├── types/           # TypeScript data contracts and domain definitions
│   ├── App.tsx          # Root application container
│   ├── index.css        # Tailwind baseline and custom utility classes
│   └── main.tsx         # React root mounting point
├── index.html           # Document head, SEO metadata, Open Graph, and Twitter Cards
├── package.json         # Dependency tree and build scripts
├── tailwind.config.js   # Bespoke theme tokens and color definitions
├── tsconfig.json        # TypeScript compiler configurations
└── vite.config.ts       # Vite bundler configurations
```

---

## Getting Started

### Prerequisites

- Node.js: v18.0.0 or higher
- Package Manager: npm or pnpm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/XREFS0/portfolio.git
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Development

Run the local development server with Hot Module Replacement (HMR):
```bash
npm run dev
```

The application will be accessible at `http://localhost:3000` (or `http://localhost:3001` depending on port availability).

### Production Build

Type-check and compile the production bundle:
```bash
npm run build
```

Preview the production build locally:
```bash
npm run preview
```

---

## Deployment

The built artifacts in `dist/` can be served directly from any static hosting provider (GitHub Pages, Cloudflare Pages, Vercel, or Netlify). Ensure single-page application fallback rules are configured to route all incoming requests to `index.html`.

---

## License

This project is licensed under the MIT License. Refer to the `LICENSE` file for full terms.
