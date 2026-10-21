// Service worker: keeps a copy of the game so it starts offline once installed.
// Bump VERSION whenever a cached file changes, so players get the update.
const VERSION = 'v4';
const CACHE = `hoverboard-hero-${VERSION}`;
const FILES = [
  './',
  './index.html',
  './manifest.webmanifest',
  './fonts/bungee-latin.woff2',
  './fonts/rubik-latin.woff2',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/icon-maskable-512.png',
  './icons/apple-touch-icon.png',
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k.startsWith('hoverboard-hero-') && k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== location.origin) return;
  // The page itself: always ask the server first (bypassing the browser's HTTP cache) so updates arrive,
  // fall back to the cached copy offline.
  if (req.mode === 'navigate') {
    e.respondWith(
      fetch(req.url, { cache: 'no-store' })
        .then(res => { const copy = res.clone(); caches.open(CACHE).then(c => c.put('./index.html', copy)); return res; })
        .catch(() => caches.match('./index.html'))
    );
    return;
  }
  // Fonts and icons: cache first.
  e.respondWith(caches.match(req).then(hit => hit || fetch(req)));
});
