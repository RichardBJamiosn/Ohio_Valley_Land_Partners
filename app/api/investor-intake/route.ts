/**
 * /api/investor-intake — Investor/buyer criteria intake
 * Accepts: name, email, phone, counties[], acreage, useCase, budget
 * Inserts into Supabase `leads` table with lead_type = 'investor'
 * Required env: NEXT_PUBLIC_SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY
 */

import { createClient } from '@supabase/supabase-js';
import { NextRequest, NextResponse } from 'next/server';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

const supabase =
  supabaseUrl && supabaseKey ? createClient(supabaseUrl, supabaseKey) : null;

export async function POST(request: NextRequest) {
  try {
    if (!supabase) {
      return NextResponse.json(
        { error: 'Database service not configured' },
        { status: 500 }
      );
    }

    const body = await request.json() as {
      name?: string;
      email?: string;
      phone?: string;
      counties?: string[];
      acreage?: string;
      useCase?: string;
      budget?: string;
    };

    const { name, email, phone, counties, acreage, useCase, budget } = body;

    if (!name?.trim() || !email?.trim() || !phone?.trim()) {
      return NextResponse.json(
        { error: 'Name, email, and phone are required' },
        { status: 400 }
      );
    }

    const message = [
      `Counties: ${counties?.join(', ') || 'Not specified'}`,
      `Acreage: ${acreage || 'Not specified'}`,
      `Use case: ${useCase || 'Not specified'}`,
      `Budget: ${budget || 'Not specified'}`,
    ].join('\n');

    const { data, error } = await supabase
      .from('leads')
      .insert({
        full_name: name.trim(),
        email: email.trim(),
        phone: phone.trim(),
        lead_type: 'investor',
        message,
        source: 'investor-intake',
        metadata: {
          counties,
          acreage,
          useCase,
          budget,
          userAgent: request.headers.get('user-agent'),
          referer: request.headers.get('referer'),
        },
      })
      .select();

    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json({ error: 'Failed to submit' }, { status: 500 });
    }

    return NextResponse.json({ success: true, id: data?.[0]?.id }, { status: 201 });
  } catch (err) {
    console.error('Investor intake error:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
