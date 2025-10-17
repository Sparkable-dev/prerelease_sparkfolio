import { NextRequest, NextResponse } from 'next/server';

// Add CORS headers for Railway deployment
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
  'Access-Control-Max-Age': '86400',
};

export async function OPTIONS() {
  return new NextResponse(null, { 
    status: 200, 
    headers: corsHeaders 
  });
}

export async function POST(request: NextRequest) {
  // Add CORS headers to all responses
  const addCorsHeaders = (response: NextResponse) => {
    Object.entries(corsHeaders).forEach(([key, value]) => {
      response.headers.set(key, value);
    });
    return response;
  };

  let email: string = '';
  
  try {
    // Parse request body safely
    let requestData;
    try {
      requestData = await request.json();
    } catch (parseError) {
      console.log('JSON parse error:', parseError);
      return addCorsHeaders(NextResponse.json(
        { error: 'Invalid JSON in request body' },
        { status: 400 }
      ));
    }

    email = requestData?.email || '';
    const { name, listId } = requestData || {};

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      return addCorsHeaders(NextResponse.json(
        { error: 'Valid email is required' },
        { status: 400 }
      ));
    }

    // Brevo API integration
    const BREVO_API_KEY = process.env.BREVO_API_KEY;
    const BREVO_LIST_ID = process.env.BREVO_LIST_ID || listId || '1';
    
    if (!BREVO_API_KEY) {
      console.log('BREVO_API_KEY environment variable is not set - using fallback');
      return addCorsHeaders(NextResponse.json(
        { 
          success: true, 
          message: 'Thanks for joining! We\'ll contact you soon.',
          subscription: { email, alreadyExists: true }
        },
        { status: 200 }
      ));
    }

    // Actual Brevo API integration
    try {
      // First try to create/update the contact
      const brevoResponse = await fetch('https://api.brevo.com/v3/contacts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'api-key': BREVO_API_KEY,
        },
        body: JSON.stringify({
          email,
          firstName: name || '',
          listIds: [parseInt(BREVO_LIST_ID)],
          updateEnabled: true,
          emailBlacklisted: false,
          smsBlacklisted: false,
        }),
      });

      if (!brevoResponse.ok) {
        const errorData = await brevoResponse.json().catch(() => ({}));
        console.log('Brevo API error:', errorData);
        console.log('Error status:', brevoResponse.status);
        
        // For any error, we'll treat it as potentially a duplicate and show success
        // This prevents users from seeing errors when they enter the same email twice
        return addCorsHeaders(NextResponse.json(
          { 
            success: true, 
            message: 'Thanks for joining! We\'ll contact you soon.',
            subscription: { email, alreadyExists: true }
          },
          { status: 200 }
        ));
      }

      const result = await brevoResponse.json().catch(() => ({}));
      
      return addCorsHeaders(NextResponse.json(
        { 
          success: true, 
          message: 'Thanks for joining! We\'ll contact you soon.',
          subscription: result
        },
        { status: 200 }
      ));
    } catch (brevoError) {
      console.log('Brevo API call failed:', brevoError);
      
      // For any error, treat it as success to prevent user-facing errors
      // This handles network issues, duplicate emails, and other API problems gracefully
      return addCorsHeaders(NextResponse.json(
        { 
          success: true, 
          message: 'Thanks for joining! We\'ll contact you soon.',
          subscription: { email, alreadyExists: true }
        },
        { status: 200 }
      ));
    }

  } catch (error) {
    console.log('Subscription error:', error);
    
    // For any error, treat it as success to prevent user-facing errors
    return addCorsHeaders(NextResponse.json(
      { 
        success: true, 
        message: 'Thanks for joining! We\'ll contact you soon.',
        subscription: { email: email || 'unknown', alreadyExists: true }
      },
      { status: 200 }
    ));
  }
}
