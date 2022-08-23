'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "7007afee581695270608c0e2422dbb25",
"assets/assets/fonts/Morganite-Black.ttf": "1770f2701d6a1869d956cd8eeda33a7d",
"assets/assets/fonts/Morganite-Bold.ttf": "8a660620c6f4f5e2320cbd1aa337ef26",
"assets/assets/fonts/Morganite-Light.ttf": "3dcfba973b635ccc5474835dc980f639",
"assets/assets/fonts/Morganite-Medium.ttf": "350422113e692055cf22fe395ca09d9b",
"assets/assets/images/-Menu.png": "955885b52cb6da724d30fa6b8ddb4590",
"assets/assets/images/breads.jpg": "d7d6bedf29caff481b206de9c7abc4b1",
"assets/assets/images/burgers.jpg": "d2748ba42a2f49139c1bfbf7277f9634",
"assets/assets/images/bwm4.png": "2b234fca9056ee975e9d383f76af9cc6",
"assets/assets/images/cocktail.jpg": "0632894aadb9f6d1c7283b1b93c8f1d3",
"assets/assets/images/Delivery.jpg": "65ecbaa0566e2a5d0a74a92b7eab9d55",
"assets/assets/images/delivery_new.jpg": "a1aa09884cefd3040cffd0d4c988ba00",
"assets/assets/images/desserts.jpg": "09d04efc4a099e3a56533596b0710b35",
"assets/assets/images/entries.jpg": "4e80a0def0dbfcb243db0553d3a30eb3",
"assets/assets/images/harpers.png": "521dea8565b5f5e42fc5dd8e0d23de87",
"assets/assets/images/kids.jpg": "7bf6d9e006d8c76f3626a4e83b3ef885",
"assets/assets/images/logo-bw-white.png": "5570c762f220982d5e5c6112d4562492",
"assets/assets/images/Logo-Harpers-con-copyright%25201.png": "64ed043cdae6cc89ecd3f4805f62ba92",
"assets/assets/images/Logo-shape.png": "c5bf3f407fec71dd53c9e1dd09871e75",
"assets/assets/images/restaurant.jpg": "4257d063edc71b348b13fb8f757144cd",
"assets/assets/images/steaks.jpg": "bfeb936425d399e9b7b86332712bfe67",
"assets/assets/images/terms.png": "72ddfb0cf14c8472e81626373b379eeb",
"assets/assets/images/wings.jpg": "8c2ecb7a3f9ca3c146eb7730003b457a",
"assets/assets/svg/delivery.svg": "395e485a0256bcd28daae3f15cdc1f11",
"assets/assets/svg/Logo-BestwayMarketing.svg": "db9739ea41a5a1470daa97f9eb2d2d99",
"assets/assets/svg/sandwich.svg": "ff113d3b5ba3b0e7a5c7abaaebe61a51",
"assets/FontManifest.json": "26205158b8838ba3933262a9195d1b47",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "0aba1f02c55088a124818d3366800fbc",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "d1722d5cf2c7855862f68edb85e31f88",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "613e4cc1af0eb5148b8ce409ad35446d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "dd3c4233029270506ecc994d67785a37",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "3a47256b7353cfc05ba6e4709e304d83",
"/": "3a47256b7353cfc05ba6e4709e304d83",
"main.dart.js": "5f32fff11da5c7ea6ad13d51dffcca59",
"manifest.json": "c843bc1f10939fdde8202dab4c04eb0a",
"splash/img/dark-1x.png": "785fee7efca8ca8e9239c48d279b7055",
"splash/img/dark-2x.png": "b41469d1329732240592d5b24931383c",
"splash/img/dark-3x.png": "f3559f164c53a6667492dd3365e49345",
"splash/img/dark-4x.png": "9b81d6062f2fd5446a041adf01a67f1f",
"splash/img/light-1x.png": "785fee7efca8ca8e9239c48d279b7055",
"splash/img/light-2x.png": "b41469d1329732240592d5b24931383c",
"splash/img/light-3x.png": "f3559f164c53a6667492dd3365e49345",
"splash/img/light-4x.png": "9b81d6062f2fd5446a041adf01a67f1f",
"splash/splash.js": "123c400b58bea74c1305ca3ac966748d",
"splash/style.css": "bf988cf063f03a951438daa5f9ddaf8c",
"version.json": "ac2997cb206cf2e755dfcf46aefc87e4"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
