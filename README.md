# Dr. Edmund Moore - Financial Freedom Platform

**A comprehensive financial education platform featuring interactive tools, bilingual support, and the 30-Day Financial Freedom Challenge.**

[![Next.js](https://img.shields.io/badge/Next.js-15.3-black)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-blue)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)](https://www.typescriptlang.org/)
[![License](https://img.shields.io/badge/License-Private-red)]()

---

## 🎯 Features

### Interactive Financial Tools (7)
- **Net Worth Calculator** - Track assets and liabilities
- **Investment Growth Forecaster** - Visualize compound interest
- **Strategic Decision Evaluator** - Make informed financial decisions
- **Financial Goal Tracker** - Set and achieve financial goals
- **Emergency Fund Planner** - Build your financial safety net
- **Philosophy Assessment Quiz** - Discover your financial personality
- **Book-Digital Companion** - Chapter-by-chapter tool integration

### Special Features
- **30-Day Financial Freedom Challenge** - Daily actionable steps
- **User Authentication** - Secure accounts with NextAuth.js
- **Bilingual Support** - Complete English/Spanish translation
- **User Dashboard** - Track progress and stats
- **Responsive Design** - Mobile, tablet, and desktop optimized

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ ([Download](https://nodejs.org/))
- npm (comes with Node.js)

### Installation

1. **Install Dependencies**
```bash
npm install
```

2. **Setup Environment Variables**
```bash
# Copy template
copy env-template.txt .env.local

# Edit with your values
notepad .env.local
```

**Minimum required:**
```env
DATABASE_URL="file:./dev.db"
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="[generate-32-char-secret]"
```

**Generate secret:**
```bash
node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"
```

3. **Initialize Database**
```bash
npx prisma generate
npx prisma migrate dev
```

4. **Start Development Server**
```bash
npm run dev
```

**Open:** [http://localhost:3000](http://localhost:3000)

---

## 📁 Project Structure

```
src/
├── app/                    # Next.js pages (App Router)
│   ├── api/auth/          # Authentication endpoints
│   ├── auth/              # Sign in/up pages
│   ├── challenge/         # 30-Day Challenge
│   ├── dashboard/         # User dashboard
│   ├── tools/             # Financial tools
│   └── ...
├── components/            # React components
├── lib/                   # Utilities (auth, prisma)
└── i18n/                  # Internationalization

messages/                  # Translations (en.json, es.json)
prisma/                    # Database schema
public/                    # Static assets
```

---

## 🛠️ Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint

npx prisma studio    # Open database GUI
npx prisma migrate dev  # Create migration
```

---

## 🗄️ Database

**Development:** SQLite (file-based)  
**Production:** PostgreSQL (recommended)

**Models:**
- User, Account, Session
- QuizResult, NetWorthData
- Decision, Investment

**Manage with Prisma Studio:**
```bash
npx prisma studio
```
Opens at [http://localhost:5555](http://localhost:5555)

---

## 🌐 Internationalization

**Languages:** English (en), Spanish (es)

**Translation Files:**
- `messages/en.json` - English (700+ keys)
- `messages/es.json` - Spanish (700+ keys)

**Usage:**
- Language switcher in header
- URLs: `/` (English), `/es/*` (Spanish)
- Automatic locale detection

---

## 🔐 Authentication

**Provider:** NextAuth.js v5

**Methods:**
- Email/Password (bcrypt hashing)
- Google OAuth (ready)

**Protected Routes:**
- `/dashboard` - User dashboard
- `/api/*` - API endpoints

**Pages:**
- `/auth/signin` - Sign in
- `/auth/signup` - Sign up

---

## 📊 Key Pages

| Page | URL | Description |
|------|-----|-------------|
| Homepage | `/` | Hero, philosophy, challenge banner |
| Tools | `/tools` | All financial tools |
| Challenge | `/challenge` | 30-Day Financial Freedom Challenge |
| Books | `/books` | Dr. Moore's books |
| Quiz | `/philosophy-quiz` | Financial personality assessment |
| Dashboard | `/dashboard` | User stats and progress |
| Sign In | `/auth/signin` | Authentication |

---

## 🎨 Tech Stack

**Frontend:**
- Next.js 15.3 (App Router)
- React 19
- TypeScript 5
- Tailwind CSS 4
- Framer Motion (animations)
- Recharts (visualizations)
- Lucide React (icons)

**Backend:**
- NextAuth.js 5 (authentication)
- Prisma ORM (database)
- Zod (validation)
- bcryptjs (password hashing)

**Internationalization:**
- next-intl 3.0

---

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm i -g vercel
vercel login
vercel
```

### Environment Variables (Production)
```env
DATABASE_URL="postgresql://..."
NEXTAUTH_URL="https://edmundmoore.com"
NEXTAUTH_SECRET="[production-secret]"
GOOGLE_CLIENT_ID="[google-oauth-id]"
GOOGLE_CLIENT_SECRET="[google-oauth-secret]"
```

**See:** `/docs/PRODUCTION-DEPLOYMENT-GUIDE.md` for complete instructions

---

## 📚 Documentation

- **[Quick Start Guide](../QUICK-START.md)** - Get started in 5 minutes
- **[Production Deployment](../docs/PRODUCTION-DEPLOYMENT-GUIDE.md)** - Full deployment guide
- **[Final Project Summary](../docs/FINAL-PROJECT-SUMMARY.md)** - Complete feature list
- **[i18n Guide](../docs/i18n-implementation-guide.md)** - Translation system
- **[Auth Guide](../docs/phase-3-authentication-guide.md)** - Authentication setup

---

## 🧪 Testing

### Manual Testing Checklist
- [ ] All pages load
- [ ] Tools function correctly
- [ ] Authentication works
- [ ] Language switching works
- [ ] Mobile responsive
- [ ] Cross-browser compatible

### Test URLs
- Homepage: http://localhost:3000
- Tools: http://localhost:3000/tools
- Challenge: http://localhost:3000/challenge
- Dashboard: http://localhost:3000/dashboard

---

## 🐛 Troubleshooting

### Port Already in Use
```bash
# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F
```

### Database Issues
```bash
# Reset database
npx prisma migrate reset

# Regenerate client
npx prisma generate
```

### Build Errors
```bash
# Clear cache
rm -rf .next node_modules
npm install
npm run build
```

---

## 📈 Project Stats

- **Lines of Code:** 15,000+
- **Components:** 20+
- **Pages:** 15+
- **Tools:** 7
- **Languages:** 2
- **Database Models:** 7
- **API Endpoints:** 5+

---

## 🎯 Key Features

✅ **7 Interactive Financial Tools**  
✅ **30-Day Challenge** with daily actions  
✅ **Complete Bilingual Support** (EN/ES)  
✅ **User Authentication** & Dashboard  
✅ **Mobile Responsive** Design  
✅ **SEO Optimized** (sitemap, robots.txt)  
✅ **Production Ready** Code  

---

## 🌟 Highlights

- **Dr. Moore's Book Principles** - Integrated throughout
- **Urgency Messaging** - Motivates immediate action
- **Progress Tracking** - Visual feedback everywhere
- **Gamification** - Challenge streaks and achievements
- **Professional UI/UX** - Modern, clean design
- **Secure** - Industry best practices
- **Scalable** - Ready for growth

---

## 📞 Support

For issues or questions:
1. Check documentation in `/docs/`
2. Review troubleshooting section above
3. Check browser console for errors
4. Verify environment variables

---

## 📄 License

Private - All Rights Reserved

---

## 🎉 Ready to Transform Lives!

**The Edmund Moore Financial Freedom Platform is production-ready and optimized for success!**

Start the development server and begin building financial freedom:

```bash
npm run dev
```

**Visit:** [http://localhost:3000](http://localhost:3000)

---

**Built with ❤️ using Next.js, React, and TypeScript**
