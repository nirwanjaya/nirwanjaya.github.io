self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('first-app')
      .then(function(cache) {
        cache.addAll([
          '/',
          '/index.html',
          '/welcomescreen.html',
          '/src/css/app.css',
          '/src/css/bootstrap.min.css',
          '/src/js/app.js',
          '/src/js/jquery.min.js',
          '/src/js/popper.min.js',
          '/src/js/bootstrap.min.js'
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


