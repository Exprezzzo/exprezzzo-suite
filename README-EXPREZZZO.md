
# 🦅 Exprezzzo AI Starter Kit

Welcome to the unified starter kit for all Exprezzzo projects!

## 🚀 Quick Start

1. **Choose Your Project:**
   ```bash
   # For LVGT
   cp -r exprezzzo-ai-starter lvgt-pwa
   
   # For EIS
   cp -r exprezzzo-ai-starter eis-admin
   
   # For new project
   cp -r exprezzzo-ai-starter my-new-app
   ```

2. **Setup Environment:**
   ```bash
   cd your-project
   cp .env.local.example .env.local
   # Fill in your Firebase credentials
   ```

3. **Install & Run:**
   ```bash
   npm install
   npm run validate-env
   npm run dev
   ```

## 📦 What's Included

- ✅ Production-ready Next.js config
- ✅ SSR-safe Firebase setup
- ✅ Multi-model AI router (Claude/Gemini/OpenAI)
- ✅ Error boundaries & monitoring
- ✅ CI/CD with GitHub Actions
- ✅ TypeScript with strict mode
- ✅ Security headers & best practices

## 🎯 Project Types

### LVGT (Las Vegas Good Times)
- PWA-enabled booking platform
- AI concierge features
- Real-time availability

### EIS (Enterprise Intelligence System)
- Admin dashboard
- Analytics & reporting
- User management

### Exprezzzo Global
- Multi-tenant platform
- White-label support
- AI orchestration

## 🛠️ Commands

```bash
npm run dev              # Start development
npm run build            # Build for production
npm run deploy:preview   # Deploy to preview
npm run deploy:prod      # Deploy to production
```

## 🔐 Security

- Never commit `.env.local`
- Rotate API keys regularly
- Use GitHub secrets for CI/CD
- Enable Firebase App Check in production

## 🦅 Support

Questions? Drop your code into Claude or ChatGPT for instant help!
