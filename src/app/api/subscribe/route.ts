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
      console.error('BREVO_API_KEY environment variable is not set');
      return addCorsHeaders(NextResponse.json(
        { 
          success: false, 
          error: 'Service temporarily unavailable. Please try again later.',
          message: 'We\'re experiencing technical difficulties. Please try again in a few minutes.'
        },
        { status: 503 }
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
        console.error('Brevo API error:', errorData);
        console.error('Error status:', brevoResponse.status);
        
        // Handle specific Brevo API errors
        if (brevoResponse.status === 400 && errorData.code === 'duplicate_parameter') {
          // Email already exists - treat as success
          return addCorsHeaders(NextResponse.json(
            { 
              success: true, 
              message: 'Thanks for joining! We\'ll contact you soon.',
              subscription: { email, alreadyExists: true }
            },
            { status: 200 }
          ));
        }
        
        // For other errors, return a proper error response
        return addCorsHeaders(NextResponse.json(
          { 
            success: false, 
            error: 'Failed to process subscription',
            message: 'We\'re experiencing technical difficulties. Please try again later.'
          },
          { status: 500 }
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
      console.error('Brevo API call failed:', brevoError);
      
      // Handle network errors and other API issues
      return addCorsHeaders(NextResponse.json(
        { 
          success: false, 
          error: 'Network error',
          message: 'We\'re experiencing technical difficulties. Please try again later.'
        },
        { status: 503 }
      ));
    }

  } catch (error) {
    console.error('Subscription error:', error);
    
    // Handle unexpected errors
    return addCorsHeaders(NextResponse.json(
      { 
        success: false, 
        error: 'Internal server error',
        message: 'We\'re experiencing technical difficulties. Please try again later.'
      },
      { status: 500 }
    ));
  }
}
