# Payment Kita - Cross-Border Payment Gateway Landing Page

Payment Kita is a conceptual marketing landing page for a Web3-powered payment gateway designed to bridge global currencies (via EVM & SVM blockchains) to Indonesian Rupiah (IDR), ultimately boosting the local economy and foreign exchange inflow.

## 🚀 Live Demo

[Link to Vercel Deployment](https://payment-kita.vercel.app)

## 🛠 Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript (Strict Mode)
- **Styling:** Tailwind CSS v4
- **Testing:** Jest & React Testing Library
- **Deployment:** Vercel

## ⚙️ Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/payment-kita.git
   cd payment-kita
   ```

2. **Install dependencies:**
   ```bash
   pnpm install
   ```

3. **Run the development server:**
   ```bash
   pnpm dev
   ```

4. **Open [http://localhost:3000](http://localhost:3000) with your browser.**

## 🧪 Testing

This project includes unit and integration tests to ensure component reliability.

```bash
# Run all tests
pnpm test

# Run tests in watch mode
pnpm test:watch

# Run tests with coverage report
pnpm test:coverage
```

### Test Coverage

The following components are tested:

- **Button** - UI component with variant and size props
- **HeroSection** - Main landing section with CTA buttons
- **MarketSizeSection** - TAM/SAM/SOM visualization section
- **Utils** - Classname merger utility function

## 💼 Business Context (TAM, SAM, SOM)

### Total Addressable Market (TAM)
- **Value:** $190 Triliun
- **Description:** Total volume pembayaran lintas batas global per tahun

### Serviceable Available Market (SAM)
- **Value:** $20 Miliar
- **Description:** Inflow IDR dari remitansi, remote worker, dan agensi lokal Indonesia

### Serviceable Obtainable Market (SOM)
- **Value:** $500 Juta
- **Description:** Target transaksi via EVM & SVM dalam 2 tahun pertama operasi Payment Kita

## 📁 Project Structure

```
payment-kita-profile/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main landing page
│   └── globals.css         # Global styles
├── src/
│   ├── __tests__/
│   │   ├── components/     # Component tests
│   │   └── utils/          # Utility tests
│   ├── components/
│   │   ├── sections/       # Page sections (Hero, Feature, Market, Impact)
│   │   ├── shared/         # Shared components (Navbar, Footer)
│   │   └── ui/             # Reusable UI components (Button, Card)
│   └── lib/
│       ├── constants.ts    # Static content data
│       └── utils.ts        # Helper functions
├── jest.config.js          # Jest configuration
├── jest.setup.ts           # Test setup file
├── tailwind.config.ts      # Tailwind configuration
└── tsconfig.json           # TypeScript configuration
```

## 📝 Git Workflow

Developed using feature-branching and conventional commits for a clean and trackable history:

```bash
# Example commit messages
chore: initialize Next.js app with Tailwind and TS
build: setup Jest and React Testing Library environment
feat: implement TAM/SAM/SOM visualization component
style: apply responsive Tailwind classes to market funnel
test: add rendering tests for MarketSizeSection TAM/SAM/SOM
```

## 🌟 Features

- **Responsive Design** - Optimized for mobile, tablet, and desktop
- **Dark Mode Support** - Automatic theme switching based on system preference
- **Accessibility** - ARIA labels and semantic HTML
- **Performance** - Optimized images and code splitting
- **Type Safety** - Full TypeScript coverage with strict mode

## 📊 Key Metrics

| Metric | Value |
|--------|-------|
| Transaction Fee | < 1% |
| Processing Time | < 5s |
| Availability | 24/7 |

## 🤝 Contributing

This is a technical assessment project. For educational purposes only.

## 📄 License

MIT License - See LICENSE file for details.

---

**Developed by** [Nur Wahid Azhar](https://porto-ku.excitech.id/user?id=nur.wahid.azhar) for Technical Assessment.
