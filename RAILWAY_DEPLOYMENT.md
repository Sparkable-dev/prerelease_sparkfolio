# Railway Deployment Guide

## Environment Variables

Set these environment variables in your Railway project:

### Required Variables:

- `BREVO_API_KEY`: Your Brevo API key for email subscriptions
- `BREVO_LIST_ID`: `1` (or your specific list ID)

### Optional Variables:

- `NEXT_PUBLIC_APP_URL`: Your Railway app URL
- `NODE_ENV`: Set to `production`

## API Endpoints

### Health Check

- `GET /api/health` - Returns API status

### Email Subscription

- `POST /api/subscribe` - Subscribe to waitlist
  - Body: `{ "email": "user@example.com", "name": "User Name", "listId": "1" }`
  - Returns: `{ "success": true, "message": "Thanks for joining!" }`

## Build Configuration

The app is configured for Railway with:

- Next.js 15 with App Router
- CORS headers for API routes
- Error handling for production
- Health check endpoint
- Optimized build settings

## Deployment Steps

1. Connect your GitHub repository to Railway
2. Set environment variables in Railway dashboard
3. Deploy automatically on push to main branch
4. Monitor logs for any issues

## Troubleshooting

### Common Issues:

1. **API not working**: Check environment variables are set
2. **Build errors**: Ensure all dependencies are in package.json
3. **CORS errors**: API routes include proper CORS headers
4. **Internal server errors**: Check Railway logs for specific errors

### Health Check:

Visit `https://your-app.railway.app/api/health` to verify API is working.
