self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('first-app')
      .then(function(cache) {
        cache.addAll([
          '/',
          '/manifest.json',
          '/index.html',
          '/welcomescreen.html',
          '/src/css/app.css',
          '/src/css/bootstrap.min.css',
          '/src/css/welcomescreen.css',
          '/src/js/app.js',
          '/src/js/jquery.min.js',
          '/src/js/popper.min.js',
          '/src/js/bootstrap.min.js',
          '/src/images/homescreen.png',
          '/src/images/icons/icon-72x72.png',
          '/src/images/icons/icon-96x96.png',
          '/src/images/icons/icon-128x128.png',
          '/src/images/icons/icon-144x144.png',
          '/src/images/icons/icon-152x152.png',
          '/src/images/icons/icon-192x192.png',
          '/src/images/icons/icon-384x384.png',
          '/src/images/icons/icon-512x512.png',
          '/src/images/char1.gif',
          '/src/images/char2.gif'
        ])
      })
  );
  return self.clients.claim();
});
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(res) {
        return res;
      })
  );
});


