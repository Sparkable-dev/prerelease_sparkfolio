# SPARKFOLIO Pre-Release Setup Guide

## Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```bash
# Brevo API Configuration
BREVO_API_KEY=your_brevo_api_key_here
BREVO_LIST_ID=your_brevo_list_id_here
```

## Brevo API Setup

1. Sign up for a Brevo account at https://www.brevo.com
2. Navigate to your account settings and generate an API key
3. Create a contact list for your waitlist subscribers
4. Get the list ID from the Brevo dashboard
5. Add both the API key and list ID to your `.env.local` file

## Development

```bash
npm run dev
```

The application will be available at http://localhost:3000

## Features Implemented

- ✅ Hero section with SPARKFOLIO branding
- ✅ Product screenshots carousel
- ✅ Features showcase with icons
- ✅ Email collection form with Brevo integration
- ✅ Social proof section with testimonials
- ✅ Responsive design (mobile-first)
- ✅ Modern UI with animations
- ✅ GDPR-compliant consent checkbox

## Customization

- Update product screenshots in `src/components/ProductScreenshots.tsx`
- Modify features in `src/components/FeaturesShowcase.tsx`
- Customize testimonials in `src/components/SocialProof.tsx`
- Update branding colors in `src/app/globals.css`
