# Exprezzzo Suite

A unified architecture powering:

- Las Vegas Good Times (LVGT) – Metro-area sandbox for Las Vegas and surrounding corridor
- Exprezzzo Global UI – Platform-ready experience for onboarding vendors worldwide
- Regional sandboxes (Miami, LA, Puerto Rico, and more)
- The Exprezzzo Intelligence System (EIS) – real-time vendor enablement and onboarding brain

## Folder Structure

/apps/
  └── lvgt/                # Las Vegas Metro sandbox (local branding)
  └── exprezzzo-global/    # Global public-facing UI for onboarding + bookings
  └── miami/               # Future metro sandbox

/packages/
  └── eis-core/            # Main booking logic, registration, onboarding flows
  └── eis-api-adapters/    # Casino, POS, affiliate system connectors
  └── shared-components/   # React/Tailwind UI used across all apps

/firebase/
  ├── functions/           # Firebase Cloud Functions
  ├── firestore.rules      # Secure Firestore permissions
  └── .firebaserc          # Project routing + environment config

/.github/
  └── workflows/
      └── ci.yml           # GitHub Actions deploy pipeline

README.md

## Mission

Exprezzzo Suite enables small businesses—from tattoo shops to tech startups—to become globally visible, bookable, and profitable in under 60 seconds. Whether it’s a chair rental for a barber, a VIP suite auction for a nightclub, or service-based bookings for events, this platform delivers a seamless, AI-powered onboarding experience.

The system honors culture, protects time, and opens economic access.

Built by Exprezzzo — powered by legacy, loyalty, and community.
