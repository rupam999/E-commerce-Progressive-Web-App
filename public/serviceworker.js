const CACHE_NAME = "e-commerce-pwa";
const urlsToCache = [ 
    'index.html', 
    'offline.html',
];

const self = this;

// Install SW
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('Opened cache');

                return cache.addAll(urlsToCache);
            })
    )
});

// Listen for requests
self.addEventListener('fetch', (event) => {
    if(!navigator.onLine){
        event.respondWith(
            caches.match(event.request)
                .then(() => {
                    return fetch(event.request)
                        .catch(() => caches.match('offline.html'))
                })
        )
    }
});

// 


// Activate the SW
self.addEventListener('activate', (event) => {
    const cacheWhitelist = [];
    cacheWhitelist.push(CACHE_NAME);

    event.waitUntil(
        caches.keys().then((cacheNames) => Promise.all(
            cacheNames.map((cacheName) => {
                if(!cacheWhitelist.includes(cacheName)) {
                    return caches.delete(cacheName);
                }
            })
        ))
    )
});