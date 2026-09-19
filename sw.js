self.addEventListener("install", (e) => self.skipWaiting());
self.addEventListener("activate", (e) => self.clients.claim());
self.addEventListener("fetch", (e) => {
  // Pass-through network requests; this keeps the app installable as a PWA.
  e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});
