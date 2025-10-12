# Brevo Form Integration Setup

## Steps to Set Up Brevo Form

### 1. Create a Brevo Account

- Go to [Brevo.com](https://www.brevo.com) and create an account
- Verify your email address

### 2. Create a Form

- Log into your Brevo dashboard
- Navigate to "Forms" in the left sidebar
- Click "Create a new form"
- Choose "Embedded form" option
- Design your form with the fields you need (email, name, etc.)
- Configure form settings and styling

### 3. Get Your Form ID

- After creating the form, you'll get a form ID
- It will look something like: `12345678-1234-1234-1234-123456789012`

### 4. Update the Code

Replace `YOUR_BREVO_FORM_ID` in the following files:

**src/components/EmailCollection.tsx:**

```tsx
<BrevoForm formId="YOUR_ACTUAL_FORM_ID_HERE" className="w-full" />
```

### 5. Test the Integration

- Start your development server: `npm run dev`
- Navigate to the waitlist section
- The Brevo form should load automatically
- Test form submission

## Form Customization

### Styling

The Brevo form will inherit your site's styling. You can customize it further by:

1. **In Brevo Dashboard:**

   - Go to your form settings
   - Customize colors, fonts, and layout
   - Match your site's design system

2. **CSS Overrides:**
   - Add custom CSS to override Brevo form styles
   - Target `.brevo-form` class for customizations

### Form Fields

Configure these fields in your Brevo form:

- **Email** (required)
- **Name** (optional)
- **Consent checkbox** (required for GDPR compliance)

## Troubleshooting

### Form Not Loading

- Check that your form ID is correct
- Ensure the Brevo script is loading (check browser console)
- Verify your Brevo account is active

### Styling Issues

- The form should inherit your site's colors
- If styling is off, add custom CSS overrides
- Check that your form is set to "embedded" mode in Brevo

### Form Submission

- Test form submission in development
- Check Brevo dashboard for new contacts
- Verify email notifications are working

## Production Deployment

1. **Environment Variables:**

   - No additional environment variables needed for basic form embedding
   - Form ID is hardcoded in the component

2. **Domain Configuration:**

   - Add your production domain to Brevo form settings
   - Ensure CORS is configured properly

3. **Testing:**
   - Test form on production domain
   - Verify submissions are being captured
   - Check email notifications work correctly
