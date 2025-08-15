/* Simple offline cache for DeFi-RealEstate demo */
const STATIC_CACHE = 'dre-static-v10';
const IMG_CACHE = 'dre-img-v1';
const toURL = (p) => new URL(p, self.location).toString();
const CORE_ASSETS = [
  '/index.html?rev=3',
  '/dividends.html?rev=3',
  '/growth.html?rev=3',
  '/marketplace.html?rev=3',
  '/admin.html?rev=3',
  'assets/style.min.css?v=4',
  'assets/app.min.js?v=2',
  'assets/shared.min.js?v=5',
  'assets/i18n-extra.js?v=1'
].map(toURL);

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(STATIC_CACHE).then(cache => cache.addAll(CORE_ASSETS)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(k => ![STATIC_CACHE, IMG_CACHE].includes(k)).map(k => caches.delete(k)))).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  const url = new URL(req.url);

  // HTML navigation requests: network-first for freshness, fallback to cache
  if (req.mode === 'navigate') {
    event.respondWith(
      fetch(req).then(res => {
        const copy = res.clone();
        caches.open(STATIC_CACHE).then(c => c.put(req, copy)).catch(()=>{});
        return res;
      }).catch(() => caches.match(toURL('index.html')))
    );
    return;
  }

  // Same-origin static assets: cache-first
  if (url.origin === self.location.origin && (req.destination === 'style' || req.destination === 'script')) {
    event.respondWith(
  caches.match(req).then(cached => cached || fetch(req).then(res => {
        const copy = res.clone();
        caches.open(STATIC_CACHE).then(c => c.put(req, copy)).catch(()=>{});
        return res;
      }))
    );
    return;
  }

  // Images: stale-while-revalidate (including cross-origin)
  if (req.destination === 'image') {
    event.respondWith(
  caches.match(req).then(cached => {
        const fetchPromise = fetch(req).then(res => {
          const copy = res.clone();
          caches.open(IMG_CACHE).then(c => c.put(req, copy)).catch(()=>{});
          return res;
        }).catch(()=>cached);
        return cached || fetchPromise;
      })
    );
  }
});
