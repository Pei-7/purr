'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "f0e9c8d0107b44f46ad0d4f471becbec",
"version.json": "5d915f12b4e52a90bfa6a537989c010d",
"index.html": "6985b8914ec01d82e626d03fbbd2fdac",
"/": "6985b8914ec01d82e626d03fbbd2fdac",
"main.dart.js": "ab7c1d90375541d0c28a6d997b1cf1ba",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "dbd2fdfb863c4d507812c50815f6ff93",
".git/config": "5fde81d29dfe19fc66f31bbc991b080d",
".git/objects/0d/9e56f64ce9553e0ef17a5fd3c7d44620cb3fbb": "90969bdc4cdcafcb91a5d2d79f1fdf4f",
".git/objects/0d/54f2470459b02ab302a7ba6f95327cc366c092": "bc20eb13989f0e9861036eea2951643b",
".git/objects/59/55deb8837aa8c7fd81831a479d1e9d842169c6": "0b9a4a6bdd40225457b5198fefd08583",
".git/objects/50/8ea397cf6206622e4968442193f3a473d263dc": "5aea9b7c6beb74ca748936677df8bf17",
".git/objects/9b/3f9f5702307a472ca4d3ead088839a3b9705fb": "e24cea04bc9dd0d2929827c73d035f12",
".git/objects/9e/208611b5ccf0c6089fbd01b4428ca19e47a5df": "75cd6e020cef0a859aaf95a9977abd6b",
".git/objects/6a/e6b04de60405b41f69e2b691cc00c56ae0be32": "5b04e38281e45a6233cc5f4314823116",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/0e/51fd2b12d1316cd76cff60956a058e966c6317": "c0ba7bf5658f46f6ee9960117476d5aa",
".git/objects/34/57f80e71ce7b99d2eabc0768f06ba273c24261": "c088d41e00a6ae95054cd122a50d0059",
".git/objects/5a/dc243c51540f094531f4d1fcf0db62d32fa87c": "f0670628cc5bebf107c39c17d2b1db2e",
".git/objects/a4/fd6d11eb380a8b616a4aa097da9c3682272ede": "849518e420ce3991c41ae5243c13537b",
".git/objects/a3/92a86ff77cd2f01e230408ae81ccc01d8c9675": "e6061e49615632af1854fbadd041d0d0",
".git/objects/ad/75dfa54b4bacdc88fdf22e3bbb72de19b6e7db": "e1a1db751cdebd4444b6352cf6dac9e0",
".git/objects/bb/68c8e2f4ea767545c2b110b29274e531e43720": "c25153bf479bc539d7d3801237f2943a",
".git/objects/d0/6d2968346e0db6d14acf1dea2ec8eaf6ac2956": "951c70104c8e631092447306588e36fa",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/da/807dc52a9516be5035aa1ffb97b591fcd18d50": "940ed613d2d04ff48b784d0480e7f111",
".git/objects/b4/a3ecb9428e2a4b8aff40c099e1c27d64a928f0": "6e4bc29289eb6be950713f1b329eaf0d",
".git/objects/a5/982efb53a3b0397e61671a0378eed5cdfce629": "aefad3514aaea420bb61533e9b7b4873",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/464c99024519b0e5daa4c1550fd5aa72948e7e": "5b504354b1e1add58f281b242c08255f",
".git/objects/d8/8d971f3d028df69b2fea5abf78271804a0c4be": "7be16c60645477b1343a072089f77f6e",
".git/objects/e5/29c25ca05cc92154b8fef1bedf4a89b0c85a6b": "aa89290abe607df6ae8f90952c64ca34",
".git/objects/f4/825b9f9a616393da132ccf7905d7b76a478e55": "75d21a43402fd9fc3d4e66f7f4c7d8fa",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c7/6993ccdc302cdbbcb32ce4e4e09900a653be01": "f2a0595aa17a5b8eeaaa48ce32ed03c3",
".git/objects/c0/088d0284e418bd5a8ebc92441cf6988387111f": "debb41ec6a6335ffe797d646928e3a53",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/cf/faccd7d4d3ddb0ac8020d877f67dbf528afb76": "ad6e9a7152088e7ad4f914bafce7c3bd",
".git/objects/ca/367158c05ffcd89fe75a99931b0dd62e72a576": "efb4fde94fd093bb1f85e74f55316685",
".git/objects/ca/8482c88c44dcfdf9ead9d3726df9574ac9775c": "81cbf504c8b90bc81a07b514349a4ac5",
".git/objects/e4/08a319a167f5d161707e76ce249dfaa373c58a": "b1b29f0e7c83ff3142aa355acaaa14f7",
".git/objects/fe/d01a4a08171d92c15b95adcb7100d7e94ce055": "2fe4984ca7be68f9ff3d9b89adf7c5d0",
".git/objects/fe/1ea4682aff75dff7b8cb0425bf65af17ca0982": "427aee0498d6a153eea10df6a9fd5699",
".git/objects/fb/452cb443595cd3f0ab5238e90f2a086d3b8f27": "144e6d9cc3a32905f4e5b5cb41c0a6e9",
".git/objects/4e/47f86f08f7ffdab00a7a6cfcad1516719d15f3": "575976287746de7889b96f6d3d514456",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/20/1cb58ed62370838afb0223f42f1d147a0d0ed1": "033d710818edc9fb6490d6ac2f890eef",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/18/daee63be00cb8b665e05bc758ea1e7f90f5061": "194407143308dc607e477b3c78e607c2",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/27/51f6cc74dba70f9fe4ea6185162ba2590f40f3": "01cdbc5a8213a7ada70c603f068a4ea5",
".git/objects/7c/8fa8059482e7030853139b0d8cb3ea0ef354d3": "08641229499a376c17f0b4459c3135b6",
".git/objects/7c/09d499f23e8c9cfadbd067e09e62b423cd8b4a": "4f5d6ea007527788d254cd3ceeb9b8a8",
".git/objects/16/f13be2e980a2855c02f0b537d40482a38ce051": "aec670b1970cee06e7979d2968c7e993",
".git/objects/87/074170648d314b3751f481b6efea5ccdfd500d": "155f1222a4113de43e04883adc385431",
".git/objects/28/5684d29c62a7881ac6dc89b3bf45ac0dbcaee0": "c59d9934ad0cc368ef28911de99651a4",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/10/da2c5a82dfdd1519090d40dc3a66ec5f4ba656": "a86a9464894088463c2a378f75bb5568",
".git/objects/81/bedebcab47a8949cad47d1f5a9967cf8d7790b": "9bd25e25b5eef9aa774d50d878062736",
".git/objects/43/7a0285072b5713f46ed1191e4fd7ee8af3e05e": "310a9ab307b7db9b81d05a8356e44162",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9f/9a84bc3d353cea39f1c28c6a4c30ec4bd84c07": "bda9c3b0d9c0fbc2668e0b68d683fdd6",
".git/objects/5c/cab697f94ec3ebb6de88fe2c299e800b93f8ad": "dd2243c42e220c07453550b7a584aadd",
".git/objects/09/4bb6ae24f0cd847d40cb4cc4a2434f2ec9b83b": "b9e6d850322c11db635bcf0a45b762ff",
".git/objects/62/eba2d8bb0210d58d5a6e22134e6e1f9fc7b8b0": "eb7cdda57c0898a97b9917ac9717b145",
".git/objects/3a/bf18c41c58c933308c244a875bf383856e103e": "30790d31a35e3622fd7b3849c9bf1894",
".git/objects/30/1cc392bb84708c2f796656d6f48170555693b1": "9f5b89c21b78108e432dee0b38cd1c05",
".git/objects/99/91c0e66cccd930f9a7e6f1f3e5c5db2dafc604": "8024ae92ddc6a9290fc3354f0b29e22f",
".git/objects/52/9167edbfef07874867951d762c94c41a5645bb": "440851c633fbc46099b5398c6ce90cb8",
".git/objects/55/c969afb348b530e80ee1162c18b8989d661e00": "884ae1a4475882c5fb2e6971d2415bc7",
".git/objects/0f/79d236f25058a4a1f6560fc6854e4d7d49c84f": "84c3907c76b39608ae3c090834a02e63",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/ba/b12c0372097cf6f7d7e41dfac0bdb08478c51c": "610d7b32906faba85a8e8a5789be7dfa",
".git/objects/b6/702f4d09b8ef7d63d7e74fe2e720e7616f5b7c": "4370b22612c52e546cf37bd0729abbb3",
".git/objects/d2/1c58e8cc86ab155d2ac948f53c4877796f247e": "eb531d4376b97c05005d742089c2ee99",
".git/objects/aa/2c164b011c7ceaa993c9e1f75f141de924b899": "d9560eeb2185199202170b1d4c8e6b54",
".git/objects/aa/1c2d01d713a830c1e718a2953a1454321876a0": "f44fc62b8cc2e169eadf1b05ef5025b3",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/db/a6a3b66addbe8933ccf7d1f2e19d0c4cfcc55a": "5d4e8a7f2f58b1e70760b36bd58915e3",
".git/objects/a8/7ccc9cc45d0a965f565503b83b850d9ef12daa": "28243283b3d82403f82bd869efa0c32f",
".git/objects/de/9172e0a493df303c4f8a4dd37b5ed911b9fd07": "f9c99b2752f37027044648d50d027af7",
".git/objects/b0/4b3efc6d06a7c0113824ea00256c34969bdb45": "b02b43b082375fb66fb5f2d70709d227",
".git/objects/a6/3e5ad6949906fa8e0e75a523766a27f3427879": "1ff1836907d09128ca16ca26925d4e1d",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/0063c2cdce9ae90e587734cc165c77c68e1415": "27998e4cb51a4e5c4287ad1a2a1775e1",
".git/objects/ef/a185e54d8a72e7ada7e611fc458b0f36a55dc4": "3b832ad9d797417a9276b38070c6bc60",
".git/objects/f9/02426fa99c5b6541777a7d2599465b93488d4e": "b2dd3b8127d54c9b16268fa002737650",
".git/objects/f7/64d87c43c7acc786bc3c82acbe45e34a73202f": "2fc33115237eff2bca8a34b8f37c9fe0",
".git/objects/e8/29d5bbe2f2e98bf8c9bc30d0aff1c6d9560e8f": "117160fccca8d78c1e6265f5914e9dd3",
".git/objects/46/ea95da4faecc64dac67a46a61d0aa62cf38682": "c121c2b07e4aeb5eb619a131979a47a1",
".git/objects/2c/1b3524a5162bcf39548ecbf4b56ecd7a1ba7bc": "db5608bb1f4db1d167abab9bdffffa64",
".git/objects/2d/53a7c22a463c1e86a001385d237dba88a615d9": "2c7c577ad9ac4d39f7ba3e752ce29390",
".git/objects/83/6ba1098c0b5b8cf1c27b20b25c1e4a9899a4b4": "463d3b566e2b61c1e0b04140aff98d11",
".git/objects/48/c2f5969b1a165e31c7d10da168b22f81378e48": "9364247468f78783bbd43c6276c2e75c",
".git/objects/23/d0653bbfc881b8e3ced4bb62b3630f08c95606": "2d476eed50409c1cb90c498714a446e6",
".git/objects/85/ed385b0bcaee53578f1d5c0a5a9cb66201293f": "bdf9190e7419460440332d3f8e9ce1e2",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/76/c747ca31848e7d5d5aae0787658b125a1b5082": "4185183d4141f7cbee8ed8d98aea5041",
".git/objects/82/f9c7b2edadea3a075e5ad57667db7021e4e7cd": "a68864add480ebd7aff90eb760138697",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/49/17a98fb0656617b02a4bc7f7e5eb97372d5c5c": "cc1897c6726830ad66882e814d260cbc",
".git/objects/14/249d7e668e233b07f7aed8129a7bf1e3734636": "2ecd138ed9f2657f2b1f6b941f6ae195",
".git/objects/25/a0c28dac2b99e83a7fbc54f39109d1be0b4161": "f78dbe03ceaca1d55cda56eaae8f34a7",
".git/objects/25/bb0fd9fa6315c1cf1e6f60056d9c9776aa4526": "76a509484a2b28577087031634761a04",
".git/HEAD": "5ab7a4355e4c959b0c5c008f202f51ec",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "938250ad691fc5d5a67cfaadf5e8e167",
".git/logs/refs/heads/gh-pages": "938250ad691fc5d5a67cfaadf5e8e167",
".git/logs/refs/remotes/origin/gh-pages": "9acae76d46372346ec9f7fb5ffa3cbbf",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/gh-pages": "b35579727ad5b433af5e30bf7b6fedab",
".git/refs/remotes/origin/gh-pages": "b35579727ad5b433af5e30bf7b6fedab",
".git/index": "270f36936bc6ca2fe86f4be2b8a361a3",
".git/COMMIT_EDITMSG": "8439beb8b1732c0a2985d22d90c57484",
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
