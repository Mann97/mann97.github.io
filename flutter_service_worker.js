'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "764b2dcfeaea80434f72613ddbc46224",
"index.html": "3177eda40da7e879893a5b0c89fc0c40",
"/": "3177eda40da7e879893a5b0c89fc0c40",
"anim_splash.json": "dc438af2d16da8cbd7cbf9d3f80ece01",
"firebase-messaging-sw.js": "8893451ffe10aac5164f07aae9a1371e",
"main.dart.js": "d36608a96a0179cf026124d263cd38c3",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"favicon.png": "0adf2b7844505b4b885901c56337067f",
"lottie-player.js": "3ef0bb736f98fe9e7788c543716024a1",
"icons/Icon-192.png": "8c1007eac0f05aa4e7aac22e7bbd106a",
"icons/Icon-maskable-192.png": "8c1007eac0f05aa4e7aac22e7bbd106a",
"icons/Icon-maskable-512.png": "50f67e8973ae2dabcc94092b675f3590",
"icons/Icon-512.png": "50f67e8973ae2dabcc94092b675f3590",
"manifest.json": "e5755b89ca072c87bca2b77a007438d0",
"anim_splash_mobile.json": "af347cbef8d3633388d54cc4b0f24131",
"assets/AssetManifest.json": "c396c1017c1ec106d3b2af8e055a4f16",
"assets/NOTICES": "3fb3462e0b0ee5b5baa235228eaca382",
"assets/FontManifest.json": "4040abf472e825d1501e35e09d56ef04",
"assets/AssetManifest.bin.json": "befa65acd0fafa9b7821513c4fd9df0e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "229d36864e2e7d6f615ff9fba4228cd0",
"assets/packages/flex_color_picker/assets/opacity.png": "49c4f3bcb1b25364bb4c255edcaaf5b2",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/kody_enc_dec/lib/asset/pr.txt": "506eb441074a4e771fae31ca038c0868",
"assets/packages/kody_enc_dec/lib/asset/pb.txt": "df951d61a0bc6d3ec28ec793314fc139",
"assets/packages/html_editor_enhanced/assets/plugins/summernote-at-mention/summernote-at-mention.js": "8d1a7c753cf1a4cd0058e31fa1e5376e",
"assets/packages/html_editor_enhanced/assets/summernote-lite-dark.css": "3f3cb618d1d51e3e6d0d4cce469b991b",
"assets/packages/html_editor_enhanced/assets/summernote.html": "8ce8915ee5696d3c568e94911eb0d9bf",
"assets/packages/html_editor_enhanced/assets/jquery.min.js": "b61aa6e2d68d21b3546b5b418bf0e9c3",
"assets/packages/html_editor_enhanced/assets/summernote-no-plugins.html": "89ca56cd85a91f1dc39f5413204e24d0",
"assets/packages/html_editor_enhanced/assets/font/summernote.ttf": "82fa597f29de41cd41a7c402bcf09ba5",
"assets/packages/html_editor_enhanced/assets/font/summernote.eot": "f4a47ce92c02ef70fc848508f4cec94a",
"assets/packages/html_editor_enhanced/assets/summernote-lite.min.css": "570da368f96dc6433b8a1006c425ca7d",
"assets/packages/html_editor_enhanced/assets/summernote-lite.min.js": "4fe75f9b35f43da141d60d6a697db1c1",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "ab181b82dc2fec276cdb91ee91deb487",
"assets/fonts/MaterialIcons-Regular.otf": "5655050e8c41782cd985c0e588bb7839",
"assets/assets/svg/svg_faq_icon.svg": "5588ddb5c219b5ce7f33750d57549090",
"assets/assets/svg/svg_filter.svg": "997d5f1c55e2d4f628982ff3c4a08ada",
"assets/assets/svg/svg_additional_note.svg": "6046f8f3906bdbcf3f57f0cedcf77555",
"assets/assets/svg/svg_selected_rounded.svg": "883bdf419a4e8dd06efc9e83b80ec16d",
"assets/assets/svg/svg_product_type_snacks.svg": "045a7620ba4b5d64ba51f7c295b09b23",
"assets/assets/svg/svg_remove.svg": "d4da4126987b209fa9c1e30c9fe462f5",
"assets/assets/svg/svg_hide_password.svg": "26674e92898293dce4974ae0ba62e772",
"assets/assets/svg/svg_tray_bg_robot.svg": "4999b983153c73409c5f73380ef3555f",
"assets/assets/svg/svg_empty_order.svg": "69a5d95a7399cc8ec73d5fb36074bc3a",
"assets/assets/svg/svg_drop_up.svg": "967eb2610fe3e5ee3a63584ce51deaa6",
"assets/assets/svg/svg_arrow_down.svg": "b9e18301c03115e0e885b8e5c64eddfe",
"assets/assets/svg/svg_product_manage.svg": "c4821b9caedb6e80868585b5d56effa1",
"assets/assets/svg/svg_order_home.svg": "83a92d7e0d55acead2b3570f2b90d1f4",
"assets/assets/svg/svg_java.svg": "7ee27648a97aa0a07d8fefa90d688f95",
"assets/assets/svg/svg_cross_rounded.svg": "5c6e7ffdf533e69d6ebaacb89aec464d",
"assets/assets/svg/svg_favorite.svg": "c669c9eec8d7e1187de99a140481ce4a",
"assets/assets/svg/svg_my_order.svg": "ce4a3f9ae08b19a8256b97cbe584ef36",
"assets/assets/svg/svg_robotics.svg": "18b623a323aad62ebafac0c3c4ced586",
"assets/assets/svg/svg_past_order_mobile.svg": "1dcaa5460442eca74f81d21d495c939d",
"assets/assets/svg/svg_past_order.svg": "1dcaa5460442eca74f81d21d495c939d",
"assets/assets/svg/svg_delete.svg": "4f4d406728e2c0d18156420cafb4bc62",
"assets/assets/svg/svg_single_sachet_sugar.svg": "d005f80d4fe37ebcda46f15a01120233",
"assets/assets/svg/svg_map.svg": "60469dd6c2eb91611f6aed379af90cf4",
"assets/assets/svg/svg_app_name.svg": "9bdceb4d41ac554c02e685aa96860e36",
"assets/assets/svg/svg_favourite.svg": "b5ca639d7ca0ce7024189f3fe9a5f244",
"assets/assets/svg/svg_cross_white.svg": "3e9db7e5e53f914535ffa09ebccaaa79",
"assets/assets/svg/svg_all.svg": "1a4e62afa064692a3bffecc389557730",
"assets/assets/svg/svg_mobile.svg": "cd11c7db971434afe5fa8d7539888871",
"assets/assets/svg/svg_round_setting.svg": "a840af74f84e32e869d57e1e01090fe2",
"assets/assets/svg/svg_products.svg": "c4821b9caedb6e80868585b5d56effa1",
"assets/assets/svg/svg_cross_icon.svg": "049031c3d5bff76773eb7d4309b1f339",
"assets/assets/svg/svg_back_scaffold_bg.svg": "fdfecb24b3e7470366c900593059ad30",
"assets/assets/svg/svg_up_arrow.svg": "dbd07701ccbff386105ea767897197ed",
"assets/assets/svg/svg_robot_serving_icon.svg": "b1803b108265dce0e0ba9b9e4de29179",
"assets/assets/svg/svg_work_anniversary_logo.svg": "aa7f683658a44dd07b01643625a325a1",
"assets/assets/svg/svg_notification_web.svg": "30ab322d78ce68f7d21c7f94aa431fcf",
"assets/assets/svg/svg_dasher.svg": "46edab5ebea5a3e645dadce9fc6f4933",
"assets/assets/svg/svg_power.svg": "052476afdd9ba65ce2b7d1084510ab52",
"assets/assets/svg/svg_robotic_arm.svg": "f00fdf8dbcc86bc62031a9863e89ed1e",
"assets/assets/svg/svg_receive_service.svg": "3b67186eeff011f758e06ff630a34f28",
"assets/assets/svg/svg_dinebot_d_logo.svg": "11a6ba05a7dbaa2d9500204c580a6cef",
"assets/assets/svg/svg_drop_down.svg": "5afc3d25024912edc7c430d8fc6f541a",
"assets/assets/svg/svg_ui_ux.svg": "534bf666267aa4c51f89c9d0e256b356",
"assets/assets/svg/svg_without_sugar.svg": "32d6f9141f10441b87adc152f7532f76",
"assets/assets/svg/svg_robot_available_icon.svg": "201c7431d00445c2cb4ff541cad4cc2d",
"assets/assets/svg/svg_user.svg": "07ce930869f9cfd991bca45aa2532b9b",
"assets/assets/svg/svg_send_service.svg": "799f99c4769ee6b6bec4d80623c344c6",
"assets/assets/svg/svg_home.svg": "a336a519e92208c90f4459f1c75a63da",
"assets/assets/svg/svg_checked_box.svg": "31fafe75b66569d848d11b77f8303b2f",
"assets/assets/svg/svg_voice_mic.svg": "50b0f7e95c6ec8e6e1d18ff31e485297",
"assets/assets/svg/svg_divider.svg": "2c346f525b699b1f9beea49fefe0f032",
"assets/assets/svg/svg_birthday_celebration_logo.svg": "29925c12720823bea80c351ed71b99bf",
"assets/assets/svg/svg_service_document_file.svg": "3986255b6bcc6d3f89502449a67bb5e5",
"assets/assets/svg/svg_round_help_support.svg": "aa8f0d2282db53b77b5897d7dc2cf7e7",
"assets/assets/svg/svg_personal_info.svg": "05cdd7c9e00ff0587d0638c00f4a27c2",
"assets/assets/svg/svg_service.svg": "24fbdd952c4743c7ee7386fbd2b90170",
"assets/assets/svg/svg_notification_black.svg": "b4f9c008f92f15220758dc72fd5f6903",
"assets/assets/svg/svg_radio_unselected.svg": "af0caff2f82258c5f72669ceb723655d",
"assets/assets/svg/svg_round_profile.svg": "06bddcf9cb6aa540e0c1fe0ffe26159c",
"assets/assets/svg/svg_ticket_icon_white_bg.svg": "83691e414b526e1e9ca30f3c36ee4b0c",
"assets/assets/svg/svg_red_cross_icon.svg": "b5ac5df0056711b58f04749badf7272c",
"assets/assets/svg/svg_product_detail.svg": "de917504831fde24aeabb41cbd2a6424",
"assets/assets/svg/svg_order_success_top.svg": "766d9d929abf79bb53edc22e25b2749a",
"assets/assets/svg/svg_order_time.svg": "1bca616ac12c8abc86ecc90401a0d4d0",
"assets/assets/svg/svg_work_anniversary.svg": "2c08125f8c518274d094170a4131a6fb",
"assets/assets/svg/svg_product_type_drinks.svg": "f5346e966b6141792b880868da85d2b6",
"assets/assets/svg/svg_product_type_all.svg": "393c56e64367fcfb7e06ce94bcece40f",
"assets/assets/svg/svg_bell.svg": "61a11a57036b9669d54bae650e40ed66",
"assets/assets/svg/svg_production.svg": "a869a986af059b2a27f389d54c546b2d",
"assets/assets/svg/svg_no_services.svg": "ec4552e0d8c25512835b797fd4f82386",
"assets/assets/svg/svg_team.svg": "8584d939ef7723792cf9f188da252dd5",
"assets/assets/svg/svg_order_manage.svg": "0b5e9380bcef1613ec2dd3baab022d45",
"assets/assets/svg/svg_change_language_icon.svg": "f25fbe6c32d86aecdd47b3d2b13805c4",
"assets/assets/svg/svg_new_order.svg": "00cc8c2f32d5f37b4959a79c2ec9e739",
"assets/assets/svg/svg_help_and_support_bg.svg": "f9e05c2192ca0119425de8b909a6995e",
"assets/assets/svg/svg_left_triangle.svg": "51b8e34af4e682a68f6cb99af68878d8",
"assets/assets/svg/svg_setting_icon.svg": "19139b6b0b9f5acc402a11ed97e60255",
"assets/assets/svg/svg_info.svg": "7fddab580460fecd5e40d9a1fa446c6b",
"assets/assets/svg/svg_dashboard.svg": "0b5e9380bcef1613ec2dd3baab022d45",
"assets/assets/svg/svg_tray_item_owner.svg": "16be4152fe3f26255a42252715b57090",
"assets/assets/svg/svg_add.svg": "268efbca99b7d89066bdb5aa2933e8bd",
"assets/assets/svg/svg_empty_trays.svg": "c327677f06668b2bcc881aeea8d03abb",
"assets/assets/svg/svg_language.svg": "4b1e49c8adfac28f29bbde76a2721084",
"assets/assets/svg/svg_round_terms_condition.svg": "aeb15273627cbcd600bed1ab10920886",
"assets/assets/svg/svg_expand_history.svg": "f895800c9684b7f398bc267aec79e292",
"assets/assets/svg/svg_ticket_vertical_divider.svg": "224419a08598987949b80ea6c0f30d66",
"assets/assets/svg/svg_forward_arrow.svg": "7a6fb9dd4e5e563a0b94611f1b08bfbf",
"assets/assets/svg/svg_email.svg": "77c7e2d4630dd1cc7f267ec5834cb276",
"assets/assets/svg/svg_chat_vertical_divider.svg": "41948950a9fee1791f03be4795579f9f",
"assets/assets/svg/svg_medium_milk.svg": "41090c92f578f82fe7dd7e33cb73cbbe",
"assets/assets/svg/svg_small_milk.svg": "d25ba94355466742e3321016cc602c22",
"assets/assets/svg/svg_soya_milk.svg": "ee5774ab2b84af59995266c2b97a5292",
"assets/assets/svg/svg_chai.svg": "a6b1f2b50cc4f03495ffef5f60cef527",
"assets/assets/svg/svg_recent_search.svg": "54072fb855f987bec588d6823598e990",
"assets/assets/svg/svg_setting_mobile.svg": "ce2dc15e4e751594e7c2b43e670d6551",
"assets/assets/svg/svg_notification_appbar.svg": "91024f1fc8783dc750fdd0198ce7503c",
"assets/assets/svg/svg_rounded_back.svg": "5ac495715c924cdbd78baf75f594a232",
"assets/assets/svg/svg_birthday_celebration.svg": "fd49a658b6d2b89395f61d03215bb772",
"assets/assets/svg/svg_notification.svg": "08a53131e9c3a72ba90d7d061f5f69c6",
"assets/assets/svg/svg_all_logo.svg": "6c0d90f0f6d21e0b2cb21d8a837786dc",
"assets/assets/svg/svg_new_order_mobile.svg": "5d0714773c4a6b1f90d7d674b302bb16",
"assets/assets/svg/svg_time.svg": "bb484596761081803c99881aed8e7a36",
"assets/assets/svg/svg_round_faq.svg": "175ac3f5c969238b6db521ca730d85c0",
"assets/assets/svg/svg_add_more.svg": "fb455e98fcc746b50fe228399aef08ca",
"assets/assets/svg/svg_place.svg": "7263c0d77fd876576fb99f4257ebe985",
"assets/assets/svg/svg_cross_with_bg.svg": "ef942ab893d2c75a9c65465002023a9a",
"assets/assets/svg/svg_back_Icon.svg": "503c8a5b2b67c020d68e6736783c8d9e",
"assets/assets/svg/svg_general_logo.svg": "f699193ff5bb0c1c2efa1c5cc84d8b3f",
"assets/assets/svg/svg_php.svg": "70a6b8288eacb1622a435400f22675fe",
"assets/assets/svg/svg_mobile_number.svg": "d8a39377f5cc7d4d6f9aaa44e34ed7ee",
"assets/assets/svg/svg_favourite_without_color.svg": "8bd954bd4b536ddc5b11d2f93d39475a",
"assets/assets/svg/svg_my_tray.svg": "075a74a7fe6640c306e88c268dd3adfc",
"assets/assets/svg/svg_bd.svg": "ebc21ac07d5145c06fa9f03213d91424",
"assets/assets/svg/svg_tea_cups.svg": "d806358e676d2f8a093ba1a27fa7d5a9",
"assets/assets/svg/svg_recent_time.svg": "b05958339deec0c0832db224da6ba1aa",
"assets/assets/svg/svg_ios_off.svg": "e0ca8217f94f2f62f910642654f4747b",
"assets/assets/svg/svg_red_cross.svg": "5ae6426e553dab5883d79ffa4a5562d5",
"assets/assets/svg/svg_round_about.svg": "3bd9682f115bcde8467d0b3c0cc441ae",
"assets/assets/svg/svg_setting.svg": "7299316a56c27bc68a7e0cd93051b8b3",
"assets/assets/svg/svg_search_web.svg": "9c7558e20d8173f1b947d9a6d1a68e9e",
"assets/assets/svg/svg_right.svg": "7a6fb9dd4e5e563a0b94611f1b08bfbf",
"assets/assets/svg/svg_faq.svg": "80672291fc6380f0639bdc6539c92345",
"assets/assets/svg/svg_robot_tray_order.svg": "9716435ff621b13a27bc19cca4bf0152",
"assets/assets/svg/svg_speaker.svg": "95b981d6c0977795a6ee70d7e35cc0a2",
"assets/assets/svg/svg_charging_bar.svg": "9535b8594e30c13c6b372f9af33ce97f",
"assets/assets/svg/svg_edit.svg": "6b90dc6d0f4eda0e36380317d274a7d5",
"assets/assets/svg/svg_double_sachet_sugar.svg": "b628235f10f31147423cc2451e58eae1",
"assets/assets/svg/svg_no_data.svg": "dd838a1ce6b1f06b2f745ffcf7747217",
"assets/assets/svg/svg_radio_selected.svg": "d1930cb9f15567f2f99ff5ec840689bb",
"assets/assets/svg/svg_filter_mobile.svg": "ae98e5438b098e25ba09af91d2c592b0",
"assets/assets/svg/svg_app_name_black.svg": "5ee64a9b5a2b8d71f4470a789007397e",
"assets/assets/svg/svg_notification_mobile.svg": "f36709038e9326877aa1c9473c96e458",
"assets/assets/svg/svg_general.svg": "bd51656a4f04b357282e6f2ac0b074e1",
"assets/assets/svg/svg_right_arrow.svg": "512541e129a35fe9334d1d5038a04be1",
"assets/assets/svg/svg_order_setting.svg": "0d4dd4010d4c2169657e04ea4417f136",
"assets/assets/svg/svg_back_arrow.svg": "6a47e909222326bc6d4f1975524824cd",
"assets/assets/svg/svg_services.svg": "24fbdd952c4743c7ee7386fbd2b90170",
"assets/assets/svg/svg_filter_white.svg": "52bbd3d6fe0bcfe7970cc7f94e1e77b6",
"assets/assets/svg/svg_cross_rounded_white_bg.svg": "db9a4fbf38f513c10653554f1f2790db",
"assets/assets/svg/svg_un_selected_round.svg": "f0478d3dcdcb8561782879f55406b5f4",
"assets/assets/svg/svg_logout_transparent.svg": "616710c7f0690e46bde7d7dc17739571",
"assets/assets/svg/svg_arrow_back.svg": "6a47e909222326bc6d4f1975524824cd",
"assets/assets/svg/svg_close_white_back_bg.svg": "5bd202d2831532a23224bfa712610dea",
"assets/assets/svg/svg_unfavorite.svg": "59b6ce70fe22320192dcb8174da6c38a",
"assets/assets/svg/svg_add_icon.svg": "45f8cdc9754102c5b68dfd5708c36f9a",
"assets/assets/svg/svg_show_password.svg": "1cec1702b232ed6f9e2c24bb96304fe2",
"assets/assets/svg/svg_total_order_mobile.svg": "e2b28899ff3906181755943aa67fbd4b",
"assets/assets/svg/svg_uncheck_box.svg": "05e29c66bb4e010ceb3a82d470e618d1",
"assets/assets/svg/svg_back.svg": "54370558e5c3bb46f871cd61d9860ad3",
"assets/assets/svg/svg_total_order.svg": "ca40173f6981f21bc8f5cdea469d47a8",
"assets/assets/svg/svg_operator_name.svg": "42d2831571e09aaf122e968388511050",
"assets/assets/svg/svg_java_logo.svg": "221512626b1305707bcc114532f34316",
"assets/assets/svg/svg_left_arrrow.svg": "53bd16e6d092654a14fec24c31b21f90",
"assets/assets/svg/svg_cross.svg": "5944194e696362cd760b2ec16afa454c",
"assets/assets/svg/svg_round_policy.svg": "0e9f4b5d05ee1d00cd003fe29416a591",
"assets/assets/svg/svg_almond_milk.svg": "f980fb29a91095e2dbd0bb59557bdcb5",
"assets/assets/svg/svg_cancel_order.svg": "ef6cfec923d9437e33326aae9f2dc370",
"assets/assets/svg/svg_success.svg": "a5b90982d2fa505ae415a836b817c799",
"assets/assets/svg/svg_tray_item_location.svg": "48f4dd0d482893117358266bd7ec3d85",
"assets/assets/svg/svg_language_icon.svg": "c99516fcaadb073301cd5312318ff863",
"assets/assets/svg/svg_minus_eclipse.svg": "bb3e8abaeb742088c6387d44eae5e179",
"assets/assets/svg/svg_arrow_forward.svg": "5f7f4fc6b82ba5f119414138bd03693f",
"assets/assets/svg/svg_foreground_notification_icon.svg": "1c79df2f2bf4b93cb5c968cd22aab055",
"assets/assets/svg/svg_filter_with_bg.svg": "fe40cea65881171098ed8b1022ef9dfe",
"assets/assets/svg/svg_update_image.svg": "a63c586efefe0b6ae77cc1e33cb9428a",
"assets/assets/svg/svg_select_image.svg": "b1ca6b813d966b2782d7ad311366d68f",
"assets/assets/svg/svg_profile.svg": "57e892a774dd6dbada4dd1138a01fe41",
"assets/assets/svg/svg_notification_icon.svg": "c78d97ad87e0b43a5a9d0e3723153633",
"assets/assets/svg/svg_ios_onn.svg": "fc933522e28554d3d3edebfd4e7a3b97",
"assets/assets/svg/svg_robot_tray_selection.svg": "2149e38ee850e894c0b08e77b0c60b36",
"assets/assets/svg/svg_left_arrow.svg": "54370558e5c3bb46f871cd61d9860ad3",
"assets/assets/svg/svg_calender.svg": "ea707d31bb4e9a9a502c3c7152db9841",
"assets/assets/svg/svg_search.svg": "7a60e891720790fcb5c665bfc255f022",
"assets/assets/svg/svg_coffee_cup.svg": "2f1e849d6f6d05665f038491f6e08758",
"assets/assets/svg/svg_large_milk.svg": "86ab29ed5d8c3587740c696d42143c30",
"assets/assets/svg/svg_ticket_chat_send.svg": "68e22b3efd713f6da9fd44c2b9dea499",
"assets/assets/svg/svg_robot_unavailable_icon.svg": "9caf72a2f368bc8d95fb0d78adb74ca8",
"assets/assets/svg/svg_profile_user.svg": "9309e2df3851904f465ff1816c682417",
"assets/assets/svg/svg_ticket_filter.svg": "b24f0d517d5575be2ba5b9312929010a",
"assets/assets/svg/svg_service_document_file_white_bg.svg": "feb7e2b1a8209835e09889a9902540e6",
"assets/assets/svg/dinebot_logo.svg": "266b4d6267c43100f2c9e92ec1bcee09",
"assets/assets/svg/svg_round_language.svg": "eea78a0299cc69fcd33dd1bf5ce800b6",
"assets/assets/svg/svg_down_arrow.svg": "d374d8c5e9799f62fac5eb5669b07ce7",
"assets/assets/svg/svg_without_milk.svg": "163b58b55b049e44d6a8563c67a61085",
"assets/assets/svg/svg_robotics_team.svg": "07c30feddbe0a7e3ffa35338f516d310",
"assets/assets/svg/svg_plus_eclipse.svg": "f071fa9bf19abf4b9a1ee4033da79c30",
"assets/assets/svg/svg_drawer.svg": "40d5b145f57c193bb6c32f1713c13dce",
"assets/assets/svg/svg_marketing.svg": "1f2c34dd4d207bedacab2ff5843a0a8a",
"assets/assets/svg/svg_drawer_selected_hns.svg": "389920b500ba74453eb0072ac37b9c16",
"assets/assets/svg/svg_users.svg": "8e4221b36fd4a1d885a781b3a1f180a8",
"assets/assets/svg/svg_voice_playing.svg": "2c1c40719bcaea68e4bb4d7a2afede3d",
"assets/assets/svg/svg_view_note.svg": "c464b24f26b7a1baa4de0a9db064735c",
"assets/assets/svg/svg_history.svg": "cbb42e298616261761d54f2ca04ca292",
"assets/assets/svg/svg_arrow_right.svg": "7a6fb9dd4e5e563a0b94611f1b08bfbf",
"assets/assets/svg/svg_logout.svg": "e10127481cc1946832da02fdd5af1b78",
"assets/assets/svg/svg_email_id.svg": "352e846988bb7b5916706317807eb9d4",
"assets/assets/svg/svg_my_tray_empty.svg": "2e9497ba0e71549fef99ac0664d35ee6",
"assets/assets/svg/svg_dasher_latter.svg": "11a6ba05a7dbaa2d9500204c580a6cef",
"assets/assets/svg/svg_right_triangle.svg": "c11762a3a88e89c64ac3502e8c833f00",
"assets/assets/svg/svg_arrow_up.svg": "a6ff8bd7fb13e4e18f367465571db01c",
"assets/assets/svg/svg_ticket_icon.svg": "7d2760bb0d7b117f27cd5209bdeb411f",
"assets/assets/anim/anim_order_successfull_2.json": "7f6152b21477792655bc31204dc588f1",
"assets/assets/anim/anim_recycle_service.json": "c127b9ffaa96bc2efb0a3a2f776aa12e",
"assets/assets/anim/anim_your_request_sent.json": "5af2ec5b047a02b9e7ddc6ab93cdc595",
"assets/assets/anim/anim_service.json": "db9e10e4febbafbd32e33b2dd3e85f35",
"assets/assets/anim/anim_order_pending.json": "7c2ccd53dbb017ad6dc0f5d7bd56c8a4",
"assets/assets/anim/anim_error_404_mobile.json": "4b13f5bbbbd17cdb701a1e3511e617e7",
"assets/assets/anim/anim_home.json": "6294a95d4d9eba1ac07d38a250470d68",
"assets/assets/anim/anim_history.json": "043b2f3f3c21200af1d2d6039d4cd344",
"assets/assets/anim/anim_password_change_popup.json": "836a91d0d7f87a919200a3eb8ba06987",
"assets/assets/anim/anim_order_accept.json": "e33e8d38240c4d0fcab1f6bd6db559f5",
"assets/assets/anim/anim_preparing_order.json": "e03ef9be61eb212b9b91e5bb7d5b1ee6",
"assets/assets/anim/anim_error_403.json": "892e48270e732b2cfe9d26259e93afaa",
"assets/assets/anim/anim_no_internet.json": "6e3b55770374163d78ae4a06f83fbc9a",
"assets/assets/anim/anim_email_change_success.json": "fee91bb8a7acd6eb6519bc069962d15c",
"assets/assets/anim/anim_send_document.json": "58d7b38831c6cb095747ec5b0161d2e8",
"assets/assets/anim/anim_error_404.json": "3b9d7012593f2c8fc039f00b267604d8",
"assets/assets/anim/anim_user.json": "798a36d361339a15eda823300ceb15bc",
"assets/assets/anim/anim_order_successful.json": "1783613f16af9243d0f3ef7b266b4dfb",
"assets/assets/anim/anim_change_password_success.json": "86beaa669e4de6ed1e1c5605099de736",
"assets/assets/anim/anim_change_email_success.json": "fee91bb8a7acd6eb6519bc069962d15c",
"assets/assets/anim/anim_product.json": "f016678150b3d0c6ec4377cdc39a964b",
"assets/assets/anim/anim_your_request_sent_cropped.json": "08385feaeab06c7d7adc2c30bfee1f4d",
"assets/assets/anim/anim_view_note.json": "c02e28095971f99651ff7848fa5194e9",
"assets/assets/anim/anim_splash_mobile.json": "af347cbef8d3633388d54cc4b0f24131",
"assets/assets/anim/anim_order_successful_new_lottie_mobile.json": "be22334215f2680fdab321f361cc9f87",
"assets/assets/anim/anim_order_partially_delivered.json": "f59be3d903baec6fd9a907d5f301db4d",
"assets/assets/anim/anim_order_reject.json": "8416bfc9260e2165ed7cd2c55478118c",
"assets/assets/anim/anim_order_processing.json": "9a0af5dd945c3299474790b798dfbb37",
"assets/assets/anim/anim_order_successfull.json": "1783613f16af9243d0f3ef7b266b4dfb",
"assets/assets/anim/anim_order.json": "a670dbe12cda296a156272d0e16a4a60",
"assets/assets/anim/anim_error_403_mobile.json": "e5d381dcc954646d2de486a5b15edad2",
"assets/assets/anim/anim_order_delivered.json": "7d46f5dcad4fc892f1c3e621ab3fb0fe",
"assets/assets/anim/anim_order_dispatch.json": "08fbfe21542f4dbb15b4011536b0fd3a",
"assets/assets/anim/anim_order_successful_new_lottie_web.json": "b77c552cb1516b8543571ee0f3cee4dd",
"assets/assets/anim/anim_camera_storage.json": "dcf6d581be885a7a1e6dd241d5fec76a",
"assets/assets/anim/anim_order_preparing.json": "e03ef9be61eb212b9b91e5bb7d5b1ee6",
"assets/assets/riv/riv_splash_robot.riv": "cb29cebcc04421302bae64353f77bbc0",
"assets/assets/images/ic_map.png": "c74128ef91156ad19d4d617f066583a4",
"assets/assets/images/3x/ic_map.png": "b5a4f3e9b69e12e34303653f7344d158",
"assets/assets/images/3x/robot_serving_unselected.png": "f194f9fd08f9c8d9c9f377c377926bb7",
"assets/assets/images/3x/robot_available_selected.png": "0bf3fcc236aea6a12545a18d5c764b18",
"assets/assets/images/3x/robot_available_unselected.png": "3d4acffc177502bd62238ddde400536e",
"assets/assets/images/3x/auth_top_image.png": "15d431cc9f25d0d094b86c966c1bedd8",
"assets/assets/images/3x/robot_serving_selected.png": "e7aa10cb7e96d9baf6ba310c49ad4273",
"assets/assets/images/3x/robot_unavailable.png": "edc211d8a1b16fafeb8b9cb4e859bea8",
"assets/assets/images/robot_serving_unselected.png": "0d673d68372bbd0f9a1c19757cc2807a",
"assets/assets/images/ic_user.png": "5405d77c51fb46a0cbf26cb96fe4da4d",
"assets/assets/images/bg_robot_outline_three_layers.png": "95fac01c41a674a48465bde760a00b8c",
"assets/assets/images/ic_change_password_success.png": "218aaf14976a41b6aa9da0001f9d99a8",
"assets/assets/images/ic_auth_bg.png": "e4c72bc6ab75170b51cf64e4f53b1e10",
"assets/assets/images/ic_latte.png": "c92c3d68f77c92fc6fe443c1285c8c79",
"assets/assets/images/4x/robot_serving_unselected.png": "83711db3186230d851fdff5307750a65",
"assets/assets/images/4x/robot_available_unselected.png": "832b49c8612e2512f3d518436a559a37",
"assets/assets/images/4x/robot_serving_selected.png": "0a793a12b08eb511db3df62f33a9dfd0",
"assets/assets/images/4x/robot_unavailable.png": "9a44b0156ae155e3ffac094a5cedc611",
"assets/assets/images/ic_service_management_bg.png": "9a7e2d7571c59779f9e6305ec095de32",
"assets/assets/images/ic_cappuccino.png": "b27d71baed3ef1ff0cee4a4d7e91d77f",
"assets/assets/images/robot_available_selected.png": "24cfe60e17f4b1d2005d641494b44fb5",
"assets/assets/images/ic_chat_profile.png": "1037a68eae4dc3330724de2d6fa616b8",
"assets/assets/images/ic_person.png": "cc4753bce6b4cdab1eaaaf4aeb8ed544",
"assets/assets/images/robot_available_unselected.png": "b763dd7babd097fe1b76a9396e22ec50",
"assets/assets/images/auth_top_image.png": "929318ea64c9e47d6442b7bf09bc4b6d",
"assets/assets/images/robot_serving_selected.png": "05acb78af0e28b4281f5eca43a9cdcfb",
"assets/assets/images/2x/ic_map.png": "3281f8b8f1e658260d2ab32322d8dfaa",
"assets/assets/images/2x/robot_serving_unselected.png": "9ca07d34e06117d9a4d7f17e348b8790",
"assets/assets/images/2x/robot_available_selected.png": "109adebfc7fe4001f24e49612df1edb2",
"assets/assets/images/2x/robot_available_unselected.png": "b9673c97ae55d87572946bfa05c75dca",
"assets/assets/images/2x/auth_top_image.png": "34e0c8bd7947ea353d7e8dbc4784c66a",
"assets/assets/images/2x/robot_serving_selected.png": "1dc341730921d5b86fc47b184b014b94",
"assets/assets/images/2x/robot_unavailable.png": "0eb85b9947d399b4cff6b35d49875bff",
"assets/assets/images/robot_unavailable.png": "6f19da4f06c7008af18cc0e0d46ae714",
"assets/assets/images/ic_espresso.png": "0d8eb34f953e8bab9a19f212ceb5380c",
"assets/assets/lang/en.json": "93f5dffd9deb8ac0ba0ddd30caa0c7c4",
"assets/assets/lang/fr.json": "fbbe7ce814e74b7ef7c017990e794603",
"assets/assets/lang/hi.json": "7300daaac1b668e21baeda3c48ca12b0",
"assets/assets/lang/ar.json": "17ce0a2b6c7907410e26cd342abe0fe3",
"assets/assets/audio/buzzer_duzzy.mp3": "d5b2b9e04be6d2e1efc669b5056a635e",
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
"assets/assets/fonts/Roboto/Roboto-Italic.ttf": "cebd892d1acfcc455f5e52d4104f2719",
"assets/assets/fonts/Roboto/Roboto-Bold.ttf": "b8e42971dec8d49207a8c8e2b919a6ac",
"assets/assets/fonts/Roboto/Roboto-Thin.ttf": "66209ae01f484e46679622dd607fcbc5",
"assets/assets/fonts/Roboto/Roboto-Black.ttf": "d6a6f8878adb0d8e69f9fa2e0b622924",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
