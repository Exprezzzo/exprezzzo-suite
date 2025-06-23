self.addEventListener('install', (e) => {
  console.log('[ServiceWorker] Install');
  e.waitUntil(
    caches.open('lvgt-v1').then((cache) => cache.addAll([
      '/index.html',
      '/vendors.html',
      '/onboarding.html',
      '/about.html',
      '/favicon.ico'
    ]))
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request))
  );
});
