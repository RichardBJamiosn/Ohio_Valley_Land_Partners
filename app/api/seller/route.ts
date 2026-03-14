/**
 * /api/seller — Lightweight seller lead capture
 * Accepts: address (property address), phone
 * Inserts into Supabase `leads` table with lead_type = 'land'
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

    const body = (await request.json()) as { address?: string; phone?: string };
    const { address, phone } = body;

    if (!address?.trim() || !phone?.trim()) {
      return NextResponse.json(
        { error: 'Address and phone are required' },
        { status: 400 }
      );
    }

    const { data, error } = await supabase
      .from('leads')
      .insert({
        full_name: 'Seller Inquiry',
        email: null,
        phone: phone.trim(),
        lead_type: 'land',
        message: `Property address: ${address.trim()}`,
        source: 'homepage-seller-form',
        metadata: {
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
    console.error('Seller form error:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
