'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "c2ed5e75f1bbb436b9a0b9271044f79c",
".git/config": "ba97e5a35ae06ceb0b11e047a9821274",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "77573568df6e2d02959b369eeb107f17",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "de36fb08340b39c4f6f9333ee38a74cb",
".git/logs/refs/heads/master": "de36fb08340b39c4f6f9333ee38a74cb",
".git/logs/refs/remotes/origin/master": "bd09e45375efae90641a3867ee31cb66",
".git/objects/00/b933e2d80db51774cfc1679f14a4940aba01df": "e5f870082937796a60286d1794d4b735",
".git/objects/01/b61af059c78f0c418fead1ed64c5b7a1a350f6": "60cb7b96a9a69d5c007cd17d33dd9a9a",
".git/objects/03/cc78823925060b27990abc111206db6fbec96a": "21b0a98bf10593b147ff30e93e0bafcb",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/0d/46b4323c369177c7829d7ad437fc5facbc3881": "ada7627d2e8213b6eb4fc8374e937ef7",
".git/objects/0f/d625bc55a645005b57d970fd9f2c2298747c15": "8cb005f1935fe4423504d59b81c6e32f",
".git/objects/16/296989fb0fc7f6c5716fc8002b7a6a1c0e351f": "9fa2ba0272211fb5664529a49b4197c5",
".git/objects/1a/37880b9d8242a47f6df29a9f3b8039d0ad5531": "96566db787be643587d4ca6d3368f78d",
".git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "a8d542276aa823dfefb8d26439e1077a",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/22/50f7270d61eb766b151fdf97c1cdef3b45e052": "5d52e4274a27017adecee1f1044b9a22",
".git/objects/28/51d27e42170184d0b8b3ac31a548327bbbd1fb": "8e140a9abf0ce02df6eeaea3fe9bf96c",
".git/objects/28/a7ca2f7ce2010c8ad41d9b728612ad0a908784": "73473d895ed8100fd079223c91824e75",
".git/objects/2b/d4c3b9715efb035a3baee5703a63693d746601": "9a638ed144de51c3b1a8342d2e5f6049",
".git/objects/30/80fcd071de70078335fdfe3607a375e9b13658": "d3cad1df3e8e15568c23841b239eaf40",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/35/e739af5f83dc73473f8678675600e7c9c4183f": "e5b60c01cb070bdad0a9065ad840de31",
".git/objects/38/dda0b09cd752621a3c044e532ae0bc94f6a162": "525a33c6ca2cc38475187b114c3853ad",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/3a/9f608a1bf8076b0f7e2b23bfceb07db798c42d": "fe91bfc22d893d41652766ee66d33bbb",
".git/objects/40/0d5b186c9951e294699e64671b9dde52c6f6a0": "f6bd3c7f9b239e8898bace6f9a7446b9",
".git/objects/40/1a3f1d8b5079690744eca3709e06867b6a3735": "54c088ec4e1a9653a1010ca80e0f6334",
".git/objects/41/de173d9014b38f8290acf270c490b37fc79a60": "d2a9d01215e9d65fd0456ded49e98878",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/46/6a26e321947b734bf9266b38fc8bdecb5cf9e8": "ce055ec18f9c0f10eff6fa4c4320b454",
".git/objects/4a/4589e7abc2e02407c4c402f007ae7e959157ec": "3b5ad9d69a7e0a9e0a61133d23aba399",
".git/objects/4e/06753a261fdf057f2a2ab1840b96b667698ef3": "c9e41e6bcd36d23d61238ada8779e7dd",
".git/objects/51/81fecc0dfe790571863d9c1ccaff73d442fe94": "584ce90bc14c262de767d58056cf6987",
".git/objects/53/a229170b9d62c907f913de6be2b7d2dc98239b": "74d380f153a3ac77e2b48c42584d9620",
".git/objects/58/92b1f1c6c0ab2aa1f6448add8ada9a8796b010": "9a201b7d0eeb0967f4f569c06c390b6f",
".git/objects/5b/2e9134f100fd3c1b53221ba366ad576afa6d5e": "92cfff709e110dad3d1ca51100f0b190",
".git/objects/5b/8b8d985e9ed8dd7d92980c518ec43694e879d0": "5f8a5be5041d9841707f399849597895",
".git/objects/5f/7664904b8398241fe60671dfe3f35ee163dd9d": "61e731d1db949bf9be8edbd3e0849a9a",
".git/objects/65/ad84f2ca6ac2b3edf3c82a4d3eeaaf8cacc0b0": "789c973a8f92b1bdc727ef20696a69a1",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/7c/6a78532b44aedfa8357786aab63b5351d8fd71": "cb8b1387df5c0ce2ef8fe9f51e5624f0",
".git/objects/7e/500951de8610c1367baf48ff5e39ff02a8d41e": "d2b3e7cbff1af6067bb4245e1cf70345",
".git/objects/82/2bc1ebab3050f0888b045a9ba2a3dac9b05bd9": "8962deb94ef0de5e0d379d2557df1c8c",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/86/7d9ddd53a635dc65afc0639698395a08132dc2": "c4055c396d8e2536043d0d24e788eba4",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/92/65271423f84461d77884d2951fb8bc3d1fd82a": "b19ea62170f08eea8d0867d33c16947d",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/9d/c9fc3bc9fa3f3264013f8af2d6ef02e97813d5": "c234dddf848d2715f4c56e5427dabee7",
".git/objects/9f/86b90cb75206441047e3a8d928ac17dba88d61": "4708dc8b58797385afeebbedf30d47f8",
".git/objects/9f/8fb832490c6cecd2d11e07fa9d3b0c4a269b2d": "1f23e5f3fd2d6edc4d06e3b4538a4cb9",
".git/objects/a3/cbabc04c31924965c31918ac59e7d0e066bc8b": "a4f9ae8a76df6d67c5039863fd9be1c9",
".git/objects/a6/17c9f7ad0bb55e8db13e95c75884ed65dade0e": "addaa4c69f4824493599ef9e9def18e1",
".git/objects/aa/20cf7b5ea2e95562f311c798ba7e088ad4bbbb": "3eeb9f5647255b82a54116beccbe81a2",
".git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b6/35b42ce776942ac024524d5f0de0e834dda897": "0a1acded3f993fd32689c2bc95c074db",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/cb/f3fd5be63049bda545ad2c82b89ae92959dab2": "ac854949ba1d1a793f0490a2d7c054f1",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/d0/2d3e5c757c62497b87031c1e38c23cc683377e": "aa540649d6655f77daf12bab103debaa",
".git/objects/d1/270437907ebfdd6a6b6f61901bc06d1893b581": "17b2c12692181cb529cbbafaafa44f1d",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/bb50b3c3bc534b51ba035a5e8495ba7af5025b": "81d30e6f235d2cd1960b1a0d917b3043",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/e0/b9af8cfed48fdebf5cde0aa25180684a640507": "db23af87b5eb4d1b4237207bdc60e7bf",
".git/objects/e7/5b44bd32a6af90a62d5e30bfa5b38f4ff20d5f": "5de666d57d276d7b74dd0f1e0ae9bbaa",
".git/objects/eb/83b15cc7e269c6bed78e54ed6b36ccf0bb277c": "da4ab3a261346fc69deeef70d9cfd440",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/157f92409d9dab858f13e7cc686112902de25b": "48bbf49709381c5a8b1bec176ad2e3ab",
".git/objects/f8/878dfb39d5d2d155ccd4b3ffd6d16e14fab37d": "55fab22a73d4f373236375e8773b1d65",
".git/refs/heads/master": "a679441fb4f54dbcd077dab20f13cd98",
".git/refs/remotes/origin/master": "a679441fb4f54dbcd077dab20f13cd98",
"assets/AssetManifest.bin": "f2dfb75409235362e0eb441650715139",
"assets/AssetManifest.bin.json": "f3345e90daea9e9b7e6f321b476bcafc",
"assets/AssetManifest.json": "e28ea64cb477fdb9c6d99b3f1f45bf9f",
"assets/FontManifest.json": "b417c8197e08be3f18101f9b01bf0e45",
"assets/fonts/MaterialIcons-Regular.otf": "43995d71a33d173b5af5440015409a38",
"assets/NOTICES": "d172578beab53784632c80d5a283c89b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/fluent_ui/assets/AcrylicNoise.png": "81f27726c45346351eca125bd062e9a7",
"assets/packages/fluent_ui/fonts/FluentIcons.ttf": "b6530f23d5df9d8b334e31a4dc62e0d0",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "4e937952f4caef60bfd7fad2ef285333",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "91a395c8ef0b6bef1f0b97330644479b",
"/": "91a395c8ef0b6bef1f0b97330644479b",
"main.dart.js": "7d339bafe45658df7dd0a2895b55c35f",
"manifest.json": "dffd4a47ff4e08b6c3ff557299b6f648",
"version.json": "30f81905898b02c26250f9777ef46a58"};
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
