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
        ...req.headers,
        'Host': new URL(targetBaseUrl).host,
        'Origin': targetBaseUrl
      }
    };

    // Remove headers that shouldn't be proxied blindly
    delete options.headers['x-forwarded-for'];
    delete options.headers['x-forwarded-host'];
    delete options.headers['x-forwarded-proto'];
    delete options.headers['connection'];
    delete options.headers['content-length']; // Let fetch calculate the correct length
    
    if (req.method !== 'GET' && req.method !== 'HEAD') {
      options.body = typeof req.body === 'object' ? JSON.stringify(req.body) : req.body;
      options.headers['content-type'] = 'application/json';
    }

    const response = await fetch(targetUrl, options);
    
    // Copy headers carefully
    response.headers.forEach((value, key) => {
      if (key.toLowerCase() !== 'set-cookie') {
        res.setHeader(key, value);
      }
    });

    // Handle Set-Cookie array properly to avoid comma-merging bugs
    const setCookies = response.headers.getSetCookie ? response.headers.getSetCookie() : [];
    if (setCookies && setCookies.length > 0) {
      res.setHeader('Set-Cookie', setCookies);
    } else if (response.headers.has('set-cookie')) {
      // Fallback for older environments
      res.setHeader('Set-Cookie', response.headers.get('set-cookie'));
    }

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
