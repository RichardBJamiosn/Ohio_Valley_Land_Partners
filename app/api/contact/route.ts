import { createClient } from '@supabase/supabase-js';
import { NextRequest, NextResponse } from 'next/server';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

const supabase = supabaseUrl && supabaseKey
  ? createClient(supabaseUrl, supabaseKey)
  : null;

interface ContactPayload {
  fullName: string;
  email: string;
  phone?: string;
  company?: string;
  leadType: 'land' | 'commercial' | 'investor' | 'partnership' | 'inquiry';
  propertyInterest?: string;
  budgetRange?: string;
  message: string;
  source?: string;
}

export async function POST(request: NextRequest) {
  try {
    if (!supabase) {
      return NextResponse.json(
        { error: 'Database service not configured' },
        { status: 500 }
      );
    }

    const body = (await request.json()) as ContactPayload;

    const { fullName, email, phone, company, leadType, propertyInterest, budgetRange, message, source } =
      body;

    if (!fullName || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const { data, error } = await supabase
      .from('leads')
      .insert({
        full_name: fullName,
        email,
        phone: phone || null,
        company: company || null,
        lead_type: leadType,
        property_interest: propertyInterest || null,
        budget_range: budgetRange || null,
        message,
        source: source || 'website',
        metadata: {
          userAgent: request.headers.get('user-agent'),
          referer: request.headers.get('referer'),
        },
      })
      .select();

    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json(
        { error: 'Failed to submit form' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, id: data?.[0]?.id },
      { status: 201 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
