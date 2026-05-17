export async function onRequestPost(context) {
  try {
    const { name, message, page } = await context.request.json();

    if (!name || !message) {
      return new Response(
        JSON.stringify({ error: 'Name and message are required' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
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
        subject: `Chat Message — ${name}`,
        html: `
          <h2>New Chat Message</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Page:</strong> ${page || 'Unknown'}</p>
          <hr />
          <p>${message.replace(/\n/g, '<br />')}</p>
          <hr />
          <p style="color: #999; font-size: 12px;">
            Sent from the OVLP website chat widget
          </p>
        `,
      }),
    });

    if (!res.ok) {
      throw new Error('Resend API error');
    }

    return new Response(
      JSON.stringify({ success: true }),
      { status: 201, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (err) {
    return new Response(
      JSON.stringify({ error: 'Failed to send message' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
