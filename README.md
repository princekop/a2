# A² Peanut Butter 🥜✨

> Where craft meets indulgence. Built by [Prince](https://git.darkbyte.in/).

## What's This About?

Look, I got tired of peanut butter websites that felt like they were made on a template assembly line. So I built this—a premium, no-BS website for A² (A Square) Peanut Butter. It's got that liquid gold aesthetic because, let's be honest, good peanut butter deserves better than stock photos and Times New Roman.

## The Stack

- **Next.js 16** - Because I like my React apps server-rendered and fast
- **TypeScript** - Type safety is non-negotiable
- **Tailwind CSS** - Utility-first styling (no fighting with CSS modules)
- **Framer Motion** - Smooth animations that don't make your eyes bleed
- **React Three Fiber** - 3D product showcases because flat is boring
- **GSAP** - Premium cursor animations (check out those corner brackets 👌)

## Getting It Running

```bash
# Clone this bad boy
git clone https://github.com/yourprofile/asquare-peanut-butter.git

# Install dependencies
npm install

# Fire up the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) and you're good to go.

## Project Structure

```
├── app/                  # Next.js app directory
│   ├── layout.tsx       # Root layout with SEO magic
│   ├── page.tsx         # Main landing page
│   └── globals.css      # Global styles
├── components/           # Reusable components
│   ├── navigation.tsx   # Top nav with A² branding
│   ├── target-cursor.tsx # Custom GSAP cursor (the fun part)
│   ├── sections/        # Page sections
│   └── ui/              # Base UI components
├── hooks/               # Custom React hooks
├── lib/                 # Utilities and helpers
└── public/              # Static assets
```

## What Makes It Special?

### 🎨 No Template Vibes
Every line of code was written with intent. No generic "Lorem ipsum" placeholder text, no stock photos labeled "professional business person smiling."

### 🔒 Locked Down Tight
Security headers configured properly. CSP, X-Frame-Options, the whole nine yards. Because even a peanut butter site deserves enterprise-grade security.

### ⚡ Performance First
- Image optimization with next/image
- Font optimization with display: swap
- Compressed assets
- Security headers that don't slow you down

### 🎯 SEO-Ready
- Comprehensive meta tags
- Open Graph for social sharing
- Twitter Cards
- JSON-LD structured data
- Sitemap ready
- Google-friendly robots.txt

### 🎭 Humanized Copy
No "elevate your journey" or "synergize your breakfast experience" nonsense. Just real talk about damn good peanut butter.

## Environment Variables

Create a `.env.local` file:

```env
# Analytics (optional)
NEXT_PUBLIC_GA_ID=your-google-analytics-id

# Add your own as needed
```

## Deployment

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Other Platforms
Build for production:
```bash
npm run build
npm start
```

Works great on:
- Netlify
- Railway
- DigitalOcean App Platform
- Your own VPS if you're old school

## License

MIT License - do whatever you want with it.

## Credits

**Built by Prince** - Solo mission, no AI assembly line nonsense.

**Tech Stack**:
- Next.js team for the framework
- Vercel for making deployment stupid simple
- Framer Motion for the smooth animations
- GSAP for cursor wizardry

## Contributing

Found a bug? Have an idea? Open an issue or PR. Just keep it real—no corporate speak, please.

## Contact

Hit me up:
- Twitter: [@yourhandle](https://twitter.com/yourhandle)
- Email: prince@asquare.com
- LinkedIn: [Your Profile](https://linkedin.com/in/yourprofile)

---

**Note**: This is a showcase project. If you want actual A² Peanut Butter (which sadly doesn't exist yet), you'll have to make your own. But hey, at least you've got the website ready to go. 🚀

*Last updated: November 2024*
*Crafted with ☕ and attention to detail*
