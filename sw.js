// install event
self.addEventListener("install", (e) => {
  console.log("[Service Worker] installed");
});

// activate event
self.addEventListener("activate", (e) => {
  console.log("[Service Worker] actived", e);
});

// fetch event
self.addEventListener("fetch", (e) => {
  console.log("[Service Worker] fetched resource " + e.request.url);
  e.respondWith(
    caches.match(e.request).then(function (response) {
      return response || fetch(e.request);
    })
  );
});
