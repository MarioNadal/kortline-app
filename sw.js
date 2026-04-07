const CACHE = "kortline-v1";
const URLS_TO_CACHE = [
  "./",
  "./index.html",
  "./manifest.json"
];
// Install: cache key files
self.addEventListener("install", function(event) {
  event.waitUntil(
    caches.open(CACHE).then(function(cache) {
      return cache.addAll(URLS_TO_CACHE);
    }).catch(function() {})
  );
  self.skipWaiting();
});
// Activate: clean old caches
self.addEventListener("activate", function(event) {
  event.waitUntil(
    caches.keys().then(function(keys) {
      return Promise.all(
        keys.filter(function(k) { return k !== CACHE; })
            .map(function(k) { return caches.delete(k); })
      );
    })
  );
  self.clients.claim();
});
// Fetch: network first, fallback to cache
self.addEventListener("fetch", function(event) {
  if (event.request.method !== "GET") return;
  event.respondWith(
    fetch(event.request).then(function(response) {
      if (response && response.status === 200) {
        var responseClone = response.clone();
        caches.open(CACHE).then(function(cache) {
          cache.put(event.request, responseClone);
        });
      }
      return response;
    }).catch(function() {
      return caches.match(event.request).then(function(cached) {
        return cached || new Response("Offline", { status: 503 });
      });
    })
  );
});
