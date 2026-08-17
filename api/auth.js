export default async function handler(req, res) {
  const targetBaseUrl = process.env.NEON_AUTH_BASE_URL || 'https://ep-quiet-shadow-axfnflw6.neonauth.c-4.us-east-2.aws.neon.tech/neondb/auth';
  
  // Extract the path after /auth
  // Vercel preserves the original URL in req.url
  const subPath = req.url.split('/auth')[1] || '';
  const targetUrl = `${targetBaseUrl}${subPath}`;

  try {
    const options = {
      method: req.method,
      headers: {
        'Content-Type': 'application/json',
        'Origin': targetBaseUrl
      }
    };

    if (req.method !== 'GET' && req.method !== 'HEAD') {
      // Vercel parses JSON bodies automatically into req.body
      options.body = typeof req.body === 'object' ? JSON.stringify(req.body) : req.body;
    }

    const response = await fetch(targetUrl, options);
    
    // Copy all headers from the Neon Auth response to our response
    response.headers.forEach((value, key) => {
      res.setHeader(key, value);
    });

    // If it's a JSON response, send it as JSON
    const contentType = response.headers.get('content-type') || '';
    if (contentType.includes('application/json')) {
      const data = await response.json();
      res.status(response.status).json(data);
    } else {
      const data = await response.text();
      res.status(response.status).send(data);
    }
  } catch (err) {
    console.error('Auth proxy error:', err);
    res.status(500).json({ error: 'Auth proxy failed' });
  }
}
