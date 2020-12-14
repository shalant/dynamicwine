// for jon... might use


// const DATA_CACHE_NAME = "data-cache-v1";

// // variables to store the differnt icon sizes
// // const iconSizes = ["72", "96", "128", "144", "152", "192", "384", "512"];
// // const iconFiles = iconSizes.map(
// //   (size) => `/assets/images/icons/icon-${size}x${size}.png`
// // );

// // files to cache (icons concat at the end)
// const staticFilesToPreCache = [
//   "/",
//   "./index.html",

//   "./service-worker.js",
// //   "./db.js",
//   "./Assets/css/styles.css",
//   "./manifest.webmanifest"
// ]
// // .concat(iconFiles);


// // install
// self.addEventListener("install", function(evt) {
//   evt.waitUntil(
//     caches.open(CACHE_NAME).then(cache => {
//       console.log("Your files were pre-cached successfully!");
//       return cache.addAll(staticFilesToPreCache);
//     })
//   );
//   self.skipWaiting();
// });

// // fetch
// self.addEventListener("fetch", function(evt) {
//   if (evt.request.url.includes("/api")) {
//     evt.respondWith(
//       caches.open(DATA_CACHE_NAME).then(cache => {
//         return fetch(evt.request)
//           .then(response => {
//             // If the response was good, clone it and store it in the cache.
//             if (response.status === 200) {
//               cache.put(evt.request, response.clone());
//             }
//             return response;
//           })
//           .catch(err => {
//             // Network request failed, try to get it from the cache.
//             return cache.match(evt.request);
//           });
//       }).catch(err => console.log(err))
//     );
//   } else {
//     // respond from static cache, request is not for /api/*
//     evt.respondWith(
//       caches.open(CACHE_NAME).then(cache => {
//         return cache.match(evt.request).then(response => {
//           return response || fetch(evt.request);
//         });
//       })
//     );
//   }
// });

// // activate
// self.addEventListener("activate", function(evt) {
//   evt.waitUntil(
//     caches.keys().then(keyList => {
//       return Promise.all(
//         keyList.map(key => {
//           if (key !== CACHE_NAME && key !== DATA_CACHE_NAME) {
//             console.log("Removing old cache data", key);
//             return caches.delete(key);
//           }
//         })
//       );
//     })
//   );

//   self.clients.claim();
// });