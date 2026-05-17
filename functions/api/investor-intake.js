export async function onRequestPost(context) {
  try {
    const body = await context.request.json();
    const { name, email, phone, counties, acreage, useCase, budget } = body;

    if (!name?.trim() || !email?.trim() || !phone?.trim()) {
      return new Response(JSON.stringify({ error: 'Name, email, and phone are required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${context.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'OVLP Website <noreply@ohiovalleylandpartners.com>',
        to: 'info@ohiovalleylandpartners.com',
        subject: `New Investor/Buyer Lead — ${name.trim()}`,
        html: `
          <h2>New Investor / Deal List Signup</h2>
          <p><strong>Name:</strong> ${name.trim()}</p>
          <p><strong>Email:</strong> ${email.trim()}</p>
          <p><strong>Phone:</strong> ${phone.trim()}</p>
          <p><strong>Counties of Interest:</strong> ${counties?.join(', ') || 'Not specified'}</p>
          <p><strong>Acreage Range:</strong> ${acreage || 'Not specified'}</p>
          <p><strong>Intended Use:</strong> ${useCase || 'Not specified'}</p>
          <p><strong>Budget Range:</strong> ${budget || 'Not specified'}</p>
          <p><strong>Source:</strong> Investor Portal — Get on the Deal List form</p>
        `,
      }),
    });

    if (!res.ok) {
      const err = await res.text();
      console.error('Resend error:', err);
      return new Response(JSON.stringify({ error: 'Failed to submit' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 201,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    console.error('Investor intake error:', err);
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
