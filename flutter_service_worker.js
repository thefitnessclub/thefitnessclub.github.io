'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "3fe36bc77f3e7204f3d5e24aa4a927de",
"assets/assets/icons/Documents.svg": "51896b51d35e28711cf4bd218bde185d",
"assets/assets/icons/doc_file.svg": "552a02a5a3dbaee682de14573f0ca9f3",
"assets/assets/icons/drop_box.svg": "3295157e194179743d6093de9f1ff254",
"assets/assets/icons/excle_file.svg": "dc91b258ecf87f5731fb2ab9ae15a3ec",
"assets/assets/icons/Figma_file.svg": "0ae328b79325e7615054aed3147c81f9",
"assets/assets/icons/folder.svg": "40a82e74e930ac73aa6ccb85d8c5a29c",
"assets/assets/icons/google_drive.svg": "9a3005a58d47a11bfeffc11ddd3567c1",
"assets/assets/icons/logo.svg": "b3af0c077a73709c992d7e075b76ce33",
"assets/assets/icons/media.svg": "059dfe46bd2d92e30bf361c2f7055c3b",
"assets/assets/icons/media_file.svg": "2ac15c968f8a8cea571a0f3e9f238a66",
"assets/assets/icons/menu_dashbord.svg": "b2cdf62e9ce9ca35f3fc72f1c1fcc7d4",
"assets/assets/icons/menu_doc.svg": "09673c2879de2db9646345011dbaa7bb",
"assets/assets/icons/menu_notification.svg": "460268d6e4bdeab56538d7020cc4b326",
"assets/assets/icons/menu_profile.svg": "fe56f998a7c1b307809ea3653a1b62f9",
"assets/assets/icons/menu_setting.svg": "d0e24d5d0956729e0e2ab09cb4327e32",
"assets/assets/icons/menu_store.svg": "2fd4ae47fd0fca084e50a600dda008cd",
"assets/assets/icons/menu_task.svg": "1a02d1c14f49a765da34487d23a3093b",
"assets/assets/icons/menu_tran.svg": "6c95fa7ae6679737dc57efd2ccbb0e57",
"assets/assets/icons/one_drive.svg": "aa908c0a29eb795606799385cdfc8592",
"assets/assets/icons/pdf_file.svg": "ca854643eeee7bedba7a1d550e2ba94f",
"assets/assets/icons/Search.svg": "396d519c18918ed763d741f4ba90243a",
"assets/assets/icons/sound_file.svg": "fe212d5edfddd0786319edf50601ec73",
"assets/assets/icons/unknown.svg": "b2f3cdc507252d75dea079282f14614f",
"assets/assets/icons/xd_file.svg": "38913b108e39bcd55988050d2d80194c",
"assets/assets/images/baby_child_children_boy-512.png": "d4866d9a89d87cc0e694270dff83b19c",
"assets/assets/images/cash_flow_tranfer_finance-512.png": "6c6f84fda39d9457d249353cd5c47ad6",
"assets/assets/images/decrease_presentation_down_loss-512.png": "4d4d3f96d3619c76e85883a1459a742e",
"assets/assets/images/dumbbell_gym_fitness_exercise-512.png": "aefa7b5e8e38e8a03785b75cc91f864c",
"assets/assets/images/family_tree_members_people-512.png": "b7a6a2e4c3dad7dc1416030e2501e9b0",
"assets/assets/images/gym_club_fitness_center-512.png": "34e20a4f5189a150362fb77b2a151f51",
"assets/assets/images/gym_coach_trainer_fitness-512.png": "09756b74f433d4abaa62b0f2be371c83",
"assets/assets/images/increase_presentation_Profit_growth-512.png": "1f651d7caf3c4ca1e4eda6f605d50c0f",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/images/background.png": "97bcdff34666d1b3e9ccbac7b1a58d95",
"assets/images/c1.jpg": "8086f9ee9e31b8190d925f6d90067323",
"assets/images/clock.png": "c0091febbdfb94bacb488b00f4521d5a",
"assets/images/dhoti1.jpeg": "501c00971f882aa928bc67c0759febe3",
"assets/images/dress2.jpeg": "5cdc3b2f416ab5df62cc75ee7681e8bf",
"assets/images/google-logo.png": "b75aecaf9e70a9b1760497e33bcd6db1",
"assets/images/gown.jpg": "6617a42da338a9e14c0490855dea30a9",
"assets/images/jacket.png": "be5ce8d6f9a07cb26b276e4ebb303f77",
"assets/images/kurta1.jpeg": "c946dcf7a3b790c158f079118a234b5a",
"assets/images/kurtin.jpg": "e0c2eb9de42ee852d065e35330b6fe4c",
"assets/images/kurti_plazo.jpeg": "8443301634f571c00e3c1d5105c21465",
"assets/images/light-1.png": "6c8ba31eab30d40b5ce914be52ca484e",
"assets/images/light-2.png": "82bff49a319cf52b57967f67ead32154",
"assets/images/logo.PNG": "15511288d7d9e84827b1adb77f641376",
"assets/images/logoout.png": "200723fe3785a25adcf45241fa37235f",
"assets/images/m1.jpeg": "d475c2aa58d06350a3d0b1395fedb345",
"assets/images/m2.jpg": "7b3a75a83820d1e6ed9893da8b60ad42",
"assets/images/medical.jpeg": "a1dc1320f6585a3fd78f4311f5ae4b89",
"assets/images/newl.png": "ab85780a922f14fb7d32b2192cb15a16",
"assets/images/pant.jpeg": "9dd14d6ec4bc5b909f186c75199b6165",
"assets/images/pants2.jpeg": "f28e9d6eb259ec6095a55322723aa3c8",
"assets/images/plazo.jpeg": "a6f8350ef5d3df90b32f86b878b17afb",
"assets/images/sari1.jpg": "cae43afe20b335c05556bf7477f7d764",
"assets/images/shirt.jpeg": "4e2f78899ee4f840547f6f399cb65cca",
"assets/images/shoe_thumb_1.png": "99d5195016bccef5fce5580ef7fdc0a2",
"assets/images/shoe_thumb_2.png": "a1bcf8da270988941107f57ec931c794",
"assets/images/shoe_thumb_3.png": "466aa8793c17411a3206ab2a6199d36a",
"assets/images/shoe_thumb_4.png": "5bb69dde7e2c2dd270c3cdcc521d1ec9",
"assets/images/shoe_thumb_5.png": "d500ef8d64f45d35704b18393324e339",
"assets/images/shoe_tilt_2.png": "e2b20edc778b9f667f0578babc3610e5",
"assets/images/shooe_tilt_1.png": "db258913940d39c245dcc6ee7f071a63",
"assets/images/show_1.png": "08bb308cf16622b4253a0060ffa1cf5f",
"assets/images/skt1.jpeg": "288752bfebc0b485507b4dbcbcdca4c7",
"assets/images/small_tilt_shoe_1.png": "5371b4a4e3917b445ef4050a14abb377",
"assets/images/small_tilt_shoe_2.png": "9ff0194d2d2f94d10d5c8c5b445b08b2",
"assets/images/small_tilt_shoe_3.png": "1c4be47d6718e25c8ae4d4f7f6b9e84a",
"assets/images/top.jpeg": "d52cc284b225e860172be8a237c742e9",
"assets/images/user.png": "0770252ca09af76850741f2cb2e5c06a",
"assets/images/w1.jpeg": "c92a802f37b8716fc9af48ff1235883b",
"assets/images/w3.jpeg": "ceaa53e20ef2d994befb2d3b473566e2",
"assets/images/w4.jpeg": "5425fb8a28e29725ed757c4478b0a253",
"assets/images/watch.png": "1c3815c4efbca52c927ec848607d75c8",
"assets/NOTICES": "4202bddc9eab6e6b07115519dd70f510",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/rflutter_alert/assets/images/2.0x/close.png": "abaa692ee4fa94f76ad099a7a437bd4f",
"assets/packages/rflutter_alert/assets/images/2.0x/icon_error.png": "2da9704815c606109493d8af19999a65",
"assets/packages/rflutter_alert/assets/images/2.0x/icon_info.png": "612ea65413e042e3df408a8548cefe71",
"assets/packages/rflutter_alert/assets/images/2.0x/icon_success.png": "7d6abdd1b85e78df76b2837996749a43",
"assets/packages/rflutter_alert/assets/images/2.0x/icon_warning.png": "e4606e6910d7c48132912eb818e3a55f",
"assets/packages/rflutter_alert/assets/images/3.0x/close.png": "98d2de9ca72dc92b1c9a2835a7464a8c",
"assets/packages/rflutter_alert/assets/images/3.0x/icon_error.png": "15ca57e31f94cadd75d8e2b2098239bd",
"assets/packages/rflutter_alert/assets/images/3.0x/icon_info.png": "e68e8527c1eb78949351a6582469fe55",
"assets/packages/rflutter_alert/assets/images/3.0x/icon_success.png": "1c04416085cc343b99d1544a723c7e62",
"assets/packages/rflutter_alert/assets/images/3.0x/icon_warning.png": "e5f369189faa13e7586459afbe4ffab9",
"assets/packages/rflutter_alert/assets/images/close.png": "13c168d8841fcaba94ee91e8adc3617f",
"assets/packages/rflutter_alert/assets/images/icon_error.png": "f2b71a724964b51ac26239413e73f787",
"assets/packages/rflutter_alert/assets/images/icon_info.png": "3f71f68cae4d420cecbf996f37b0763c",
"assets/packages/rflutter_alert/assets/images/icon_success.png": "8bb472ce3c765f567aa3f28915c1a8f4",
"assets/packages/rflutter_alert/assets/images/icon_warning.png": "ccfc1396d29de3ac730da38a8ab20098",
"canvaskit/canvaskit.js": "62b9906717d7215a6ff4cc24efbd1b5c",
"canvaskit/canvaskit.wasm": "b179ba02b7a9f61ebc108f82c5a1ecdb",
"canvaskit/profiling/canvaskit.js": "3783918f48ef691e230156c251169480",
"canvaskit/profiling/canvaskit.wasm": "6d1b0fc1ec88c3110db88caa3393c580",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "ba0cbf3074ef74ed99035a4f68964376",
"/": "ba0cbf3074ef74ed99035a4f68964376",
"main.dart.js": "d6ad9c66a045aa565298b1a45e6f3fc0",
"manifest.json": "1884eeb2d508b517e77356ff7304a9c9",
"version.json": "99aa130c6d17a670953675b16309499d"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
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
