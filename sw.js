self.addEventListener("install", (e) => {
  console.log("Service Worker Installed");
  e.waitUntil(
    caches.open("zt7-cache").then((cache) => {
      return cache.addAll([
        "./",
        "index.html",
        "style.css", // أو اسم ملف CSS عندك
        "manifest.json"
      ]);
    })
  );
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
