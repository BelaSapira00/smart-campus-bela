const CACHE_NAME = "smart-campus-v8";

const urlsToCache = [

  "/",
  "/index.html",
  "/login.html",
  "/dashboard.html",
  "/jadwal.html",
  "/tugas.html",
  "/profil.html",
  "/notifikasi.html",
  "/script.js",
  "/jadwal.json",
  "/manifest.json"

];



// INSTALL
self.addEventListener("install",function(event){

  event.waitUntil(

    caches.open(CACHE_NAME)

    .then(function(cache){

      return cache.addAll(urlsToCache);

    })

  );

});



// FETCH
self.addEventListener("fetch",function(event){

  event.respondWith(

    caches.match(event.request)

    .then(function(response){

      return response || fetch(event.request);

    })

  );

});



// ACTIVATE
self.addEventListener("activate",function(event){

  event.waitUntil(

    caches.keys().then(function(cacheNames){

      return Promise.all(

        cacheNames.map(function(cache){

          if(cache !== CACHE_NAME){

            return caches.delete(cache);

          }

        })

      );

    })

  );

});
