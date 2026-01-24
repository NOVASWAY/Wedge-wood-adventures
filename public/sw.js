/**
 * Service Worker for Security & Caching
 * Provides client-side security protections and performance optimization
 */

const CACHE_NAME = 'wedgewood-v1';
const ASSETS_TO_CACHE = [
  '/',
  '/Wedge-wood-adventures/',
  '/Wedge-wood-adventures/index.html',
];

// Install event - cache static assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE).catch(() => {
        // Graceful fallback if some assets can't be cached
        console.warn('Some assets could not be cached');
      });
    })
  );
  self.skipWaiting();
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Fetch event - implement security and caching strategy
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Block requests to suspicious domains
  if (isBlockedDomain(url.hostname)) {
    event.respondWith(
      new Response('Blocked by service worker', {
        status: 403,
        statusText: 'Forbidden',
      })
    );
    return;
  }

  // Prevent clickjacking - block frame navigation
  if (request.mode === 'navigate') {
    if (!isSameOrigin(url)) {
      // Block navigation to different origins in frames
      if (isFramedRequest(request)) {
        event.respondWith(
          new Response('Frame navigation blocked', {
            status: 403,
            statusText: 'Forbidden',
          })
        );
        return;
      }
    }
  }

  // Apply CSP via headers (client-side simulation)
  if (request.method === 'GET') {
    event.respondWith(
      fetch(request)
        .then((response) => {
          // Clone response to add security headers
          const newResponse = response.clone();

          // Only cache successful responses
          if (response.status === 200) {
            const responseToCache = response.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(request, responseToCache);
            });
          }

          return addSecurityHeaders(newResponse);
        })
        .catch(() => {
          // Fallback to cache on network error
          return caches.match(request);
        })
    );
  } else {
    // For non-GET requests, always fetch fresh
    event.respondWith(fetch(request));
  }
});

/**
 * Add security headers to response
 */
function addSecurityHeaders(response) {
  const headers = new Headers(response.headers);

  // Prevent clickjacking
  headers.set('X-Frame-Options', 'DENY');

  // Prevent MIME type sniffing
  headers.set('X-Content-Type-Options', 'nosniff');

  // Enable XSS protection
  headers.set('X-XSS-Protection', '1; mode=block');

  // Control referrer information
  headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');

  // Restrict feature access
  headers.set('Permissions-Policy', 'geolocation=(), microphone=(), camera=()');

  // Content Security Policy (permissive for Chatbase)
  headers.set(
    'Content-Security-Policy',
    "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.chatbase.co https://*.chatbase.co; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:; connect-src 'self' https://www.chatbase.co https://*.chatbase.co https://*.vercel.com; frame-ancestors 'none'"
  );

  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers: headers,
  });
}

/**
 * Check if domain should be blocked
 */
function isBlockedDomain(hostname) {
  const blockedDomains = [
    // Add malicious domains here as needed
  ];

  return blockedDomains.some((domain) => hostname.includes(domain));
}

/**
 * Check if request is from same origin
 */
function isSameOrigin(url) {
  return url.origin === self.location.origin;
}

/**
 * Check if request is framed
 */
function isFramedRequest(request) {
  return request.mode === 'navigate' && request.destination === 'iframe';
}

/**
 * Message handler for communication with clients
 */
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }

  // Handle cache clearing
  if (event.data && event.data.type === 'CLEAR_CACHE') {
    caches.delete(CACHE_NAME).then(() => {
      event.ports[0].postMessage({ success: true });
    });
  }
});

console.log('Service Worker loaded with security features');
