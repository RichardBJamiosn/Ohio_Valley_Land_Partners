import { escapeHtml, guardFormRequest, jsonResponse } from '../_utils.js';

export async function onRequestPost(context) {
  try {
    const guard = await guardFormRequest(context);
    if (!guard.ok) return guard.response;

    const { address, email } = guard.body;

    if (!address?.trim() || !email?.trim()) {
      return jsonResponse({ error: 'Address and email are required' }, 400);
    }

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${context.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'OVLP Website <noreply@ohiovalleylandpartners.com>',
        to: 'info@ohiovalleylandpartners.com',
        subject: 'New Seller Lead — Cash Offer Request',
        html: `
          <h2>New Seller Lead</h2>
          <p><strong>Property Address:</strong> ${escapeHtml(address)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p><strong>Phone:</strong> Not collected on this form. Phone/SMS opt-in is handled by the GHL chat widget.</p>
          <p><strong>Source:</strong> Homepage — Get My Cash Offer form</p>
        `,
      }),
    });

    if (!res.ok) {
      console.error('Resend error:', await res.text());
      return jsonResponse({ error: 'Failed to submit' }, 500);
    }

    return jsonResponse({ success: true }, 201);
  } catch (err) {
    console.error('Seller form error:', err);
    return jsonResponse({ error: 'Internal server error' }, 500);
  }
}