const cacheName = "cache-student-example";
//When the browser reads this for the first time it caches all the files mentioned in the list
self.addEventListener("install", function(event) {
    event.waitUntil(
        caches.open(cacheName).then(function(cache){
            return cache.addAll(["/student-example/", "/student-example/index.html",
            "/student-example/morten.png",
            "/student-example/nina.png",
            "/student-example/olivia.png"])
        })
    )
});
// if the user requests a ressource (file, html, image, js, json, etc.) then look for it online.
//if NOT available online, get the file from the cache

self.addEventListener("fetch", function(event) {
        event.respondWith(fetch(event.request).catch(() =>
        caches.open(cacheName).then(cache => cache.match(event.request)))
    )
});