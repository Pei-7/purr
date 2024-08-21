'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "e4762e99681a23872e193a8f1e15f72b",
"version.json": "5d915f12b4e52a90bfa6a537989c010d",
"index.html": "2a733d6a8d8ba99b55a46dd35b7fb443",
"/": "2a733d6a8d8ba99b55a46dd35b7fb443",
"main.dart.js": "ab7c1d90375541d0c28a6d997b1cf1ba",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "dbd2fdfb863c4d507812c50815f6ff93",
"assets/AssetManifest.json": "2f8ee48ff269a72e45ca7056104eec78",
"assets/NOTICES": "639f646c2f80ddffefd19ddfcb9c1305",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/AssetManifest.bin.json": "001cc5e453b6f5bcabc6ac6ec1d3f828",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "54e135b7743b0dc281cca8b6c32f5917",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/assets/cat_icon.png": "81bcbb9d6885684e2da35be70ecd649e",
"assets/assets/cat.gif": "29ddbb831be4e6aeff27168096d8a327",
"assets/assets/unsure.png": "022fa6437d1c8d98938188be03bb05c9",
"assets/assets/result/world.png": "f6858104019f1a0d845310bfb6101fb6",
"assets/assets/result/unicorn.png": "cfacc182e80a0dfd0d6acec87b840c8c",
"assets/assets/result/fire.png": "b2ae3cdb852d3d6140b25dddc955ab07",
"assets/assets/result/tiger.png": "a7985d39176a6ce03187ce5d089e86c9",
"assets/assets/result/mermaid.png": "7c2e6f79e7f6363271516bfbb733cf24",
"assets/assets/result/shark.png": "1987b94fb235f012e110a1f59740b61f",
"assets/assets/result/panda.png": "8dd1168e37c1fb6a99ef19a137d2a086",
"assets/assets/result/gift.png": "5963baea264929fa4a0ed78a05c7b259",
"assets/assets/result/bat.png": "03c92682152c64724a3257d3fbd525d8",
"assets/assets/result/pig.png": "834e9ca87b379334e6fca79892c5b3c1",
"assets/assets/result/koala.png": "b53437daf1a58662681b603e0f56fd63",
"assets/assets/result/friendship.png": "5588a844d73d0efd8683935ee67a3b21",
"assets/assets/result/snail.png": "81bca3490c26dd9e18ebc2dcdaa1a288",
"assets/assets/sleep.png": "3c36e271799ed2de8814ffddc90d7fbd",
"assets/assets/explore/horse.png": "431bee8cc3450f9cd264bcf2a4a74048",
"assets/assets/explore/rose.png": "51dfc43f6aa14acffb41c7fcf8cfada8",
"assets/assets/explore/sleep.png": "3c36e271799ed2de8814ffddc90d7fbd",
"assets/assets/explore/parachute.png": "3d0b73f354f185139c754467fd14e388",
"assets/assets/explore/city.png": "0d60b6fa4eb456bd0b56bfef90891b51",
"assets/assets/explore/tornado.png": "c58306bc3fee1ad8cb3311a5a81fde2e",
"assets/assets/explore/letter.png": "ec90e6df795cc7d13c0e831a6788bcc8",
"assets/assets/explore/soccer.png": "79078f178e8bcf35f144f4080ee8ef30",
"assets/assets/explore/mouse.png": "2af2de64d0dccc6e1beeef65a51b2965",
"assets/assets/explore/ski.png": "ab5c4f3511b03c924e81cf2a224aea50",
"assets/assets/explore/balloon.png": "de206c53fd3afd1861e8afc582ec947b",
"assets/assets/explore/ufo.png": "fdf3430d9234dc910528ce83f684aba3",
"assets/assets/explore/tree.png": "63fe72bb535b660723d3fc029bb1c023",
"assets/assets/explore/champion.png": "b47a56e7357ad137a1f0a8efa0520268",
"assets/assets/explore/pigeon.png": "453f69a2f90b901823bef4d170c7830d",
"assets/assets/explore/flower.png": "01ca78beb164f5074d7b71fdef4cbfac",
"assets/assets/explore/trash.png": "39768062c2fb0662201cedca93b33db0",
"assets/assets/explore/alpaca.png": "27967c2c18f20ec2a773dc256349fc7a",
"assets/assets/explore/surfing.png": "68172a98d3724b7268a4800727b745c6",
"assets/assets/explore/snake.png": "ab9400523459ae7f905e16c23d303add",
"assets/assets/food/chili.png": "77f122ca91ceac77d6d0a8676c703f73",
"assets/assets/food/cake.png": "4f24a3549f5b1a57ae7791bfa36c6f6b",
"assets/assets/food/coffee.png": "4e82f439ca23d866bbfee3dde3bbcbe2",
"assets/assets/food/hotDog.png": "71617635ed609e9c1cd0f578ffa4cd0b",
"assets/assets/food/avacado.png": "37712a88593e16f58cc6ea024e05e727",
"assets/assets/food/mashroom.png": "f1d585df6bb2da9cfe9e4e7d289eeefb",
"assets/assets/food/pineapple.png": "6fbc671b278b8c661acafcef77922edd",
"assets/assets/food/cherry.png": "a5fba1cded71f869eb88e1647222d9cc",
"assets/assets/food/toast.png": "208a5a79ede813ca276e13a81dbc9c39",
"assets/assets/play/book.png": "d2f1743bf6fa43846b4104f0da967d37",
"assets/assets/play/ball.png": "4f65b71745f3aa4eb02636e728147560",
"assets/assets/play/safari.png": "a6b56ac493a40b2c0ae07e62d42a86fd",
"assets/assets/play/music.png": "0b3f7e250ced9cb14691996354c9bbbd",
"assets/assets/play/box.png": "4c157ce9d52647e5a1d5df900fa29d2d",
"assets/assets/play/hide.png": "2e07ffafc2ede518a5e0408df9ff8994",
"assets/assets/mood/mood1.png": "34dd5795bbaad362a1faf73fbb3c1f38",
"assets/assets/mood/mood2.png": "d190e8a0f08ef3efbf221a339baca3ca",
"assets/assets/mood/mood3.png": "96dd7f3d4c3b044d1a480eacbc48ec66",
"assets/assets/mood/mood4.png": "4fecf020afd9f97562af1f77f2d5cf59",
"assets/assets/mood/mood5.png": "97cddfc64ac4cf8f00951b36099e0802",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
