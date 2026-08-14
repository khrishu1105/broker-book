/* Service Worker — 讓電子書可離線複習。
   改版課文/題庫後，把 CACHE 版本號 +1，手機下次連網開啟就會自動更新。 */
const CACHE = "broker-book-v55";
const ASSETS = [
  "./",
  "./index.html",
  "./manifest.json",
  "./data/book.js",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./icons/apple-touch-icon.png"
];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

/* 網路優先，失敗才用快取 → 有網路時永遠拿到最新內容，沒網路也能讀 */
self.addEventListener("fetch", (e) => {
  if (e.request.method !== "GET") return;
  e.respondWith(
    fetch(e.request)
      .then((res) => {
        const copy = res.clone();
        caches.open(CACHE).then((c) => c.put(e.request, copy));
        return res;
      })
      .catch(() => caches.match(e.request).then((r) => r || caches.match("./index.html")))
  );
});
