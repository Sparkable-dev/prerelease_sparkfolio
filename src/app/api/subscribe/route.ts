import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { email, name, listId } = await request.json();

    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    // TODO: Replace with actual Brevo API integration
    // For now, we'll simulate the API call
    const BREVO_API_KEY = process.env.BREVO_API_KEY;
    const BREVO_LIST_ID = process.env.BREVO_LIST_ID || listId;

    if (!BREVO_API_KEY) {
      console.log('Brevo API key not configured, simulating success');
      return NextResponse.json(
        { 
          success: true, 
          message: 'Successfully subscribed to waitlist',
          // In development, we'll just log the subscription
          subscription: { email, name, listId: BREVO_LIST_ID }
        },
        { status: 200 }
      );
    }

    // Actual Brevo API integration
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
      }),
    });

    if (!brevoResponse.ok) {
      const errorData = await brevoResponse.json();
      console.error('Brevo API error:', errorData);
      return NextResponse.json(
        { error: 'Failed to subscribe to mailing list' },
        { status: 500 }
      );
    }

    const result = await brevoResponse.json();
    
    return NextResponse.json(
      { 
        success: true, 
        message: 'Successfully subscribed to waitlist',
        subscription: result
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Subscription error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
