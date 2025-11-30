# Production Deployment Guide

## Environment Setup

### 1. Environment Variables
Create `.env.production`:

```env
# Analytics (optional)
NEXT_PUBLIC_GA_ID=your-google-analytics-id

# Add production-specific vars here
NODE_ENV=production
```

### 2. Build for Production

```bash
# Install dependencies
npm install

# Run production build
npm run build

# Test production build locally
npm start
```

### 3. Deployment Options

#### Vercel (Recommended - Zero Config)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

#### Other Platforms

**Netlify:**
- Build command: `npm run build`
- Publish directory: `.next`

**Railway / DigitalOcean:**
- Dockerfile ready
- Auto-deploys from git

### 4. Production Checklist

- [x] Security headers configured
- [x] SEO meta tags set
- [x] Brand protection active
- [x] Social links connected
- [x] MIT License included
- [ ] Add actual domain
- [ ] Configure analytics
- [ ] Set up newsletter backend

## Social Links (Production Ready)

- **Instagram**: [@princexbyte](https://www.instagram.com/princexbyte)
- **Git**: [git.darkbyte.in](https://git.darkbyte.in/)
- **Portfolio**: [prince.darkbyte.in](https://prince.darkbyte.in)
- **Website**: [www.darkbyte.in](https://www.darkbyte.in)

## Performance Tips

1. **Images**: Add actual product images to `/public` folder
2. **Fonts**: Already optimized with `display: swap`
3. **Analytics**: Configure Vercel Analytics
4. **Caching**: Handled automatically by Next.js

## Post-Deployment

1. Test on real devices
2. Run Lighthouse audit
3. Check social meta tags with:
   - [OpenGraph Debugger](https://www.opengraph.xyz/)
   - [Twitter Card Validator](https://cards-dev.twitter.com/validator)

---

**Built by Prince** | [git.darkbyte.in](https://git.darkbyte.in/)
