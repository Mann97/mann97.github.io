'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "7a7f50d595f0834858b0706a4b24463d",
"version.json": "f94e109cae5adef69ba271668badd2bd",
"index.html": "eff4142a284dc8b71e3debd69f1d62c3",
"/": "eff4142a284dc8b71e3debd69f1d62c3",
"firebase-messaging-sw.js": "d20f01093d00a50df7492d7c20a6fcf8",
"main.dart.js": "9f460aaf16d8a0de279df6c155fad2ef",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"favicon.png": "9999ff5afd219d7aef94c3c66fb6c13b",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "df1d7e9f4de9e0b685387d340a2d920e",
"assets/AssetManifest.json": "1bbfd24cafa588bb4946cd482ded0c57",
"assets/NOTICES": "b72989f8bba8bc69b4843629c2a566bd",
"assets/FontManifest.json": "4040abf472e825d1501e35e09d56ef04",
"assets/AssetManifest.bin.json": "6e3ab5e844ba7971df185ad6a57d7fc0",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "9b28afe441fdbc81a543cacd9bdf7e9b",
"assets/packages/flutter_inappwebview_web/assets/web/web_support.js": "ffd063c5ddbbe185f778e7e41fdceb31",
"assets/packages/flutter_image_compress_web/assets/pica.min.js": "6208ed6419908c4b04382adc8a3053a2",
"assets/packages/flex_color_picker/assets/opacity.png": "49c4f3bcb1b25364bb4c255edcaaf5b2",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/html_editor_enhanced/assets/plugins/summernote-at-mention/summernote-at-mention.js": "8d1a7c753cf1a4cd0058e31fa1e5376e",
"assets/packages/html_editor_enhanced/assets/summernote-lite-dark.css": "3f3cb618d1d51e3e6d0d4cce469b991b",
"assets/packages/html_editor_enhanced/assets/summernote.html": "8ce8915ee5696d3c568e94911eb0d9bf",
"assets/packages/html_editor_enhanced/assets/jquery.min.js": "b61aa6e2d68d21b3546b5b418bf0e9c3",
"assets/packages/html_editor_enhanced/assets/summernote-no-plugins.html": "89ca56cd85a91f1dc39f5413204e24d0",
"assets/packages/html_editor_enhanced/assets/font/summernote.ttf": "82fa597f29de41cd41a7c402bcf09ba5",
"assets/packages/html_editor_enhanced/assets/font/summernote.eot": "f4a47ce92c02ef70fc848508f4cec94a",
"assets/packages/html_editor_enhanced/assets/summernote-lite.min.css": "570da368f96dc6433b8a1006c425ca7d",
"assets/packages/html_editor_enhanced/assets/summernote-lite.min.js": "4fe75f9b35f43da141d60d6a697db1c1",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "b2e9c62d8823a031be1dfd14fc5e39af",
"assets/fonts/MaterialIcons-Regular.otf": "a27b1a529b9e968af4f5dff1bbf6c75d",
"assets/assets/anim/anim_splash.json": "172cfbd4c23e803f03d712b208b4e98f",
"assets/assets/anim/anim_error_403.json": "892e48270e732b2cfe9d26259e93afaa",
"assets/assets/anim/anim_error_404.json": "3b9d7012593f2c8fc039f00b267604d8",
"assets/assets/anim/anim_create_ticket_success.json": "ce55673d1f95ce2285b08a6f60637b5f",
"assets/assets/anim/anim_success.json": "ce55673d1f95ce2285b08a6f60637b5f",
"assets/assets/anim/anim_change_password_success.json": "86beaa669e4de6ed1e1c5605099de736",
"assets/assets/anim/anim_change_email_success.json": "fee91bb8a7acd6eb6519bc069962d15c",
"assets/assets/anim/anim_auth_robot.json": "764f2ac11ec264e1bdc1973ffc481c99",
"assets/assets/anim/anim_camera_storage.json": "dcf6d581be885a7a1e6dd241d5fec76a",
"assets/assets/images/3x/ic_back.png": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/images/ic_aadhar_card.png": "8b898fb8450af9e81cb9a1d9da5de83c",
"assets/assets/images/ic_robot_image.png": "56b96742c06fca5b70c2e095e21e1905",
"assets/assets/images/ic_back.png": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/images/2x/ic_aadhar_card.png": "54d6bc2dc0ae2092e3e4c9acc0a2f872",
"assets/assets/images/2x/ic_robot_image.png": "2e8738403a27d3531cefec7a444270b3",
"assets/assets/images/2x/ic_back.png": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/svgs/svg_filter.svg": "f8e29d07320976ce751337947167794a",
"assets/assets/svgs/svg_password_unhide.svg": "5cd067c0123eddd501619c5c93719525",
"assets/assets/svgs/svg_hide_password.svg": "26674e92898293dce4974ae0ba62e772",
"assets/assets/svgs/svg_ad_drawer.svg": "2a2641b402b24e513f9c38d4c308a806",
"assets/assets/svgs/svg_black_right_arrow.svg": "512541e129a35fe9334d1d5038a04be1",
"assets/assets/svgs/svg_cross_rounded.svg": "5c6e7ffdf533e69d6ebaacb89aec464d",
"assets/assets/svgs/svg_delete.svg": "f57d0f2c2ff63cb637f00a103529e104",
"assets/assets/svgs/svg_edit2.svg": "a8cc5b64266dae703520b335c6658784",
"assets/assets/svgs/svg_edit_pen.svg": "b5a4a5d54a0f0e12380751bd18ca1ff9",
"assets/assets/svgs/svg_file.svg": "291bbd8a39af89dd48cd64df67449e18",
"assets/assets/svgs/svg_back_button.svg": "dbb67ba99822be2243c3375303211cf6",
"assets/assets/svgs/svg_cross_icon.svg": "049031c3d5bff76773eb7d4309b1f339",
"assets/assets/svgs/svg_master_total_destination.svg": "3c36d4b4ce88985a3fc6501eb1d5b0d4",
"assets/assets/svgs/svg_back_button_without_bg.svg": "255414de54b8af6745e9c532251910ff",
"assets/assets/svgs/svg_notification_web.svg": "30ab322d78ce68f7d21c7f94aa431fcf",
"assets/assets/svgs/svg_dasher.svg": "46edab5ebea5a3e645dadce9fc6f4933",
"assets/assets/svgs/svg_drop_down.svg": "5afc3d25024912edc7c430d8fc6f541a",
"assets/assets/svgs/svg_radio_unselected.svg": "7d6d0342b4525a1e1488e8cc5bc0f670",
"assets/assets/svgs/svg_admin_name.svg": "fc742ccc536c4de649e0e0f9f75abb9a",
"assets/assets/svgs/svg_filter_rounded.svg": "7803b20d7f7617a79acd5124a7a22b2b",
"assets/assets/svgs/svg_calendar.svg": "8018f5c8381e32ef42d89255ac67ddf2",
"assets/assets/svgs/svg_download_sample.svg": "ce4b54703edec5fdc8b307bce7ffc128",
"assets/assets/svgs/svg_left_triangle.svg": "51b8e34af4e682a68f6cb99af68878d8",
"assets/assets/svgs/svg_agency_registered.svg": "faf129b35f225de76ca9efce2d91a1ef",
"assets/assets/svgs/svg_info.svg": "7fddab580460fecd5e40d9a1fa446c6b",
"assets/assets/svgs/svg_store.svg": "a2e08ca19887f7a4cbfbd70ebbc016d5",
"assets/assets/svgs/svg_roles_permission.svg": "6128625ec1fcfe6996fa592803e4c78c",
"assets/assets/svgs/svg_dashboard.svg": "d2e26e711a19942151e2d07bf8c2a2af",
"assets/assets/svgs/svg_master_filter.svg": "01c8df31766ed83b8a756b05362f5584",
"assets/assets/svgs/svg_forward_arrow.svg": "7de048290cb35a9b9e8c7489e496eb10",
"assets/assets/svgs/svg_placeholder.svg": "34bcdc129e1d60f2b8eccd0510b4cc00",
"assets/assets/svgs/svg_notification_appbar.svg": "91024f1fc8783dc750fdd0198ce7503c",
"assets/assets/svgs/svg_cross_icon_bg.svg": "1853c49f1f43c4451d8fe39e38303d26",
"assets/assets/svgs/svg_file_upload.svg": "b7e2aaeefb79d309c75b4166017d141b",
"assets/assets/svgs/svg_client_registered.svg": "f81dba0344ebeac674016e996a40ed0b",
"assets/assets/svgs/svg_mobile_number.svg": "052ff8895a9151cbcd6279903a3d3c46",
"assets/assets/svgs/svg_dashboard_logo.svg": "be78c9e785a42b636f9d186c0b5bf338",
"assets/assets/svgs/svg_master_store_registered.svg": "8cec0656986e37eed7dce3af5d321667",
"assets/assets/svgs/svg_import.svg": "8696be1e6ac6816a78ccd51515905df5",
"assets/assets/svgs/svg_filled_checkbox.svg": "63808c0b991e94a64b5f36d58daa0512",
"assets/assets/svgs/svg_faq_drawer.svg": "fe89bbeb9ae1b16dd3725049e1e9803a",
"assets/assets/svgs/svg_setting.svg": "29b314975e2f9f4c46852cd37ab33115",
"assets/assets/svgs/svg_search_web.svg": "9c7558e20d8173f1b947d9a6d1a68e9e",
"assets/assets/svgs/svg_close.svg": "6b1e67b53e52f1ba125c0c9595f4a43f",
"assets/assets/svgs/svg_robot_registered.svg": "0e240ce1019626be3b1ac7de36469976",
"assets/assets/svgs/svg_edit.svg": "db8aad5b9fb04e8bcbe29c0c60a2e4e0",
"assets/assets/svgs/svg_no_data.svg": "dd838a1ce6b1f06b2f745ffcf7747217",
"assets/assets/svgs/svg_empty_checkbox.svg": "dd91618af070f53e85157a4af254a33f",
"assets/assets/svgs/svg_radio_selected.svg": "1a3f18144d573d7d0315b1d5e7a3e595",
"assets/assets/svgs/svg_password_hide.svg": "9c93dadbbce920b3d0e1b11e9b2af989",
"assets/assets/svgs/svg_right_arrow.svg": "512541e129a35fe9334d1d5038a04be1",
"assets/assets/svgs/svg_logout_transparent.svg": "616710c7f0690e46bde7d7dc17739571",
"assets/assets/svgs/svg_ticket_management.svg": "2edd277e7211b7898ae42c75783b8433",
"assets/assets/svgs/svg_edit_with_bg.svg": "bb774998d9306603e8728618043dc39c",
"assets/assets/svgs/svg_show_password.svg": "1cec1702b232ed6f9e2c24bb96304fe2",
"assets/assets/svgs/svg_destination.svg": "69c91c98ce88c8ebcc9178a7b0f2d340",
"assets/assets/svgs/svg_agency.svg": "66c43a36a7d0d3400a7420734971ddcd",
"assets/assets/svgs/svg_foreground_notification_icon.svg": "1c79df2f2bf4b93cb5c968cd22aab055",
"assets/assets/svgs/svg_select_image.svg": "b1ca6b813d966b2782d7ad311366d68f",
"assets/assets/svgs/svg_profile.svg": "57e892a774dd6dbada4dd1138a01fe41",
"assets/assets/svgs/svg_date.svg": "839546c3f5501ccd06ab498f435c5169",
"assets/assets/svgs/svg_info2.svg": "1524303198ec8b059c4cb8b796048075",
"assets/assets/svgs/svg_left_arrow.svg": "54370558e5c3bb46f871cd61d9860ad3",
"assets/assets/svgs/svg_search.svg": "e912d41e4cf45ed2add5f702b83cac28",
"assets/assets/svgs/svg_clear_search.svg": "43ed62bc49dcf121c7f597fc77fdde16",
"assets/assets/svgs/svg_package_master.svg": "2fa395d7ea495f54e832622f6749b14e",
"assets/assets/svgs/svg_down_arrow.svg": "d374d8c5e9799f62fac5eb5669b07ce7",
"assets/assets/svgs/svg_view_details.svg": "c4cfbd8f70eba8dd93a58712ab6ed550",
"assets/assets/svgs/svg_robot_list.svg": "20bd0f8111e6586cc51fb8f644d1a33d",
"assets/assets/svgs/svg_users.svg": "55ce3b47474f7d93ece441a4ef35b9aa",
"assets/assets/svgs/svg_white_right_arrow.svg": "e719986dc5a08527d9ce8fdb617d4544",
"assets/assets/svgs/svg_email_id.svg": "5f32c9b5eaeaed8757b02f6558e40545",
"assets/assets/svgs/svg_cms.svg": "3bd497b83caca1ed7e6061a6b312fb0b",
"assets/assets/svgs/svg_no_permission.svg": "59b7280655a6857a0568945c5c8de8f7",
"assets/assets/svgs/svg_dasher_latter.svg": "11a6ba05a7dbaa2d9500204c580a6cef",
"assets/assets/svgs/svg_user1.svg": "79efcfd96f5b4f2994cb57cf1dcc1f79",
"assets/assets/svgs/svg_export.svg": "f10cf9d4e44108388c395485e0d75c1f",
"assets/assets/svgs/svg_right_triangle.svg": "c11762a3a88e89c64ac3502e8c833f00",
"assets/assets/svgs/svg_arrow_up.svg": "a6ff8bd7fb13e4e18f367465571db01c",
"assets/assets/svgs/svg_master.svg": "8df7bc631ad58f606138f00b0876563a",
"assets/assets/lang/en.json": "6c4b9ddfbbb38f03978bc14961da9fee",
"assets/assets/lang/ar.json": "d99515b954b4c6011b62f056221213e6",
"assets/assets/fonts/Outfit/Outfit-Bold.ttf": "e28d1b405645dfd47f4ccbd97507413c",
"assets/assets/fonts/Outfit/Outfit-Regular.ttf": "9f444021dd670d995f9341982c396a1d",
"assets/assets/fonts/Outfit/Outfit-Black.ttf": "d032ccd62028487a6c8d70a07bda684b",
"assets/assets/fonts/Outfit/Outfit-Thin.ttf": "8f281fc8ba39d6f355190c14b6532b44",
"assets/assets/fonts/Outfit/Outfit-SemiBold.ttf": "f4bde7633a5db986d322f4a10c97c0de",
"assets/assets/fonts/Outfit/Outfit-ExtraLight.ttf": "f257db4579a91feb1c1f0e80daae48ae",
"assets/assets/fonts/Outfit/Outfit-ExtraBold.ttf": "d649fd9b3a7e7c6d809b53eede996d18",
"assets/assets/fonts/Outfit/Outfit-Medium.ttf": "3c88ad79f2a55beb1ffa8f68d03321e3",
"assets/assets/fonts/Outfit/Outfit-Light.ttf": "905f109c79bd9683fc22eaffe4808ffe",
"assets/assets/fonts/Roboto/Roboto-Medium.ttf": "68ea4734cf86bd544650aee05137d7bb",
"assets/assets/fonts/Roboto/Roboto-Light.ttf": "881e150ab929e26d1f812c4342c15a7c",
"assets/assets/fonts/Roboto/Roboto-Regular.ttf": "8a36205bd9b83e03af0591a004bc97f4",
"assets/assets/fonts/Roboto/Roboto-Bold.ttf": "b8e42971dec8d49207a8c8e2b919a6ac",
"assets/assets/fonts/Roboto/Roboto-Thin.ttf": "66209ae01f484e46679622dd607fcbc5",
"assets/assets/fonts/Roboto/Roboto-Black.ttf": "d6a6f8878adb0d8e69f9fa2e0b622924",
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
