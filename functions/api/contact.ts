interface ContactRequest {
  name: string;
  email: string;
  message: string;
}

export async function onRequestPost(context: any) {
  try {
    const request = context.request;
    const data: ContactRequest = await request.json();

    // Validate input
    if (!data.name || !data.email || !data.message) {
      return new Response(JSON.stringify({ error: 'Missing required fields' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return new Response(JSON.stringify({ error: 'Invalid email' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Here you would normally send an email using a service like:
    // - Resend API
    // - SendGrid API  
    // - Mailgun API
    // - Or Cloudflare Email Workers
    
    // For now, we'll log it (you'll need to set up an email service)
    console.log('Contact form submission:', data);

    // TODO: Set up email service
    // Example with Resend:
    // const resendApiKey = context.env.RESEND_API_KEY;
    // await fetch('https://api.resend.com/emails', {
    //   method: 'POST',
    //   headers: {
    //     'Authorization': `Bearer ${resendApiKey}`,
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     from: 'contact@7o9o.com',
    //     to: 'your-email@example.com',
    //     subject: `Contact from ${data.name}`,
    //     html: `<p><strong>From:</strong> ${data.name} (${data.email})</p><p><strong>Message:</strong></p><p>${data.message}</p>`,
    //   }),
    // });

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
