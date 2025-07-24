import { e as createComponent, f as createAstro, l as renderHead, n as renderSlot, o as renderScript, r as renderTemplate, k as renderComponent, p as defineScriptVars, h as addAttribute, m as maybeRenderHead } from '../chunks/astro/server_DkYMhDvy.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="zh-CN"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>${title}</title><link rel="icon" href="/logo.png" type="image/png"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">${renderHead()}</head> <body class="min-h-screen py-8 px-4 sm:px-8"> ${renderSlot($$result, $$slots["default"])} <button id="backToTopBtn" title="返回顶部"> <i class="fas fa-arrow-up"></i> </button> ${renderScript($$result, "/Users/hua/Documents/vhost/pansou-ui/collections/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts")} </body> </html>`;
}, "/Users/hua/Documents/vhost/pansou-ui/collections/src/layouts/Layout.astro", void 0);

const categories = [{"id":"games","name":"游戏合集","icon":"fa-gamepad","color":"bg-purple-500"},{"id":"movies","name":"电影合集","icon":"fa-film","color":"bg-red-500"},{"id":"music","name":"音乐合集","icon":"fa-music","color":"bg-green-500"},{"id":"study","name":"学习资料","icon":"fa-book","color":"bg-yellow-500"}];
const collections = [{"id":"action-movies-2024","title":"电影精选","category":"movies","description":"精选的电影大片，包括好莱坞大片和各国佳作","cover":"/images/movie.png","tags":["动作","热门","高清","4K"],"created":"2025-07-23T00:00:00.000Z","updated":"2025-07-23T00:00:00.000Z","resourceCount":3,"resources":[{"name":"周星驰电影33部","platform":"quark","link":"https://pan.quark.cn/s/60c159bfa831","password":"","size":"","tags":["周星驰","喜剧","无厘头","动作","高清"],"description":"周星驰电影"},{"name":"宫崎骏+吉卜力工作室 30部作品总集","platform":"quark","link":"https://pan.quark.cn/s/d82372900921","password":"","size":"1T","tags":["喜剧","爱情","动作","奇幻","冒险"],"description":"【4K&蓝光原盘REMUX】【杜比视界&杜比&次世代国粤日多音轨】简繁日英双语特效多字幕"},{"name":"成龙经典电影合集68部","platform":"quark","link":"https://pan.quark.cn/s/217a7822c439","password":"","size":"","tags":["1080P蓝光","国粤双语音轨","动作","爱情"],"description":"成龙经典电影合集"}]},{"id":"action-movies-2025","title":"2025热门电影","category":"movies","description":"2025热门电影合集，包含最新上映的动作大片。","cover":"/images/2025movie.png","tags":["2025","热门","动作"],"created":"2025-07-24T00:00:00.000Z","updated":"2025-07-24T00:00:00.000Z","resourceCount":3,"resources":[{"name":"《F1：狂飙飞车》","platform":"baidu","link":"https://pan.baidu.com/s/1MSSIwVakuYf5T_eX0AOfHQ?pwd=2kdc","password":"2kdc","size":"17GB","tags":["动作","赛车"],"description":"豆瓣8.5分，近期院线片最佳。\n布拉德·皮特主演的赛车电影《F1：狂飙飞车》豆瓣开分8.5分，很可以的评分，今年好莱坞电影最高评分"},{"name":"时间之子","platform":"baidu","link":"https://pan.baidu.com/s/1qn9lwIE_KcZMclJZsDu1MA?pwd=v693","password":"v693","size":"3.8GB","tags":["爱情","动画","奇幻","冒险"],"description":"冷面杀手十七与渔村少女千晓因神秘时轮结缘，一个想“离职”找自由，一个想“离岛”寻精彩，他们决定暂时合作成为“一日时轮搭子”，在繁华的大都会开启了一场有惊有喜的浪漫奇遇。在这个过程中，十七和千晓的关系悄悄发生着变化，从最初的冤家对头逐渐变成了默契搭档，两颗心在不经意间靠近的同时，殊不知时轮背后的秘密，也在悄然影响着两人的命运……"},{"name":"物质主义者Materialists","platform":"baidu","link":"https://pan.baidu.com/s/1hbEZWqA_wEpsAL28Sm3q-w?pwd=96m4","password":"96m4","size":"8.7GB","tags":["喜剧","爱情"],"description":"年轻且企图心旺盛的纽约恋爱顾问Lucy（达科塔·约翰逊 Dakota Johnson 饰）发现自己在完美的另一半（佩德罗·帕斯卡 Pedro Pascal 饰）和不完美的前任（克里斯·埃文斯 Chris Evans 饰）之间犹豫不决。"}]},{"id":"classical-music","title":"网易云音乐精选集","category":"music","description":"精选网易云音乐作品，高品质无损音频","cover":"/images/wyy.jpg","tags":["网易云","无损","mp3"],"created":"2025-07-23T00:00:00.000Z","updated":"2025-07-23T00:00:00.000Z","resourceCount":2,"resources":[{"name":"网易云评论超10W+的歌曲合集800多首","platform":"quark","link":"https://pan.quark.cn/s/3457409dc28d","password":"","size":"7.9GB","tags":["热评","mp3"],"description":"网易云评论超10W+的歌曲合集800多首"},{"name":"网易云音乐收藏榜单TOP5","platform":"quark","link":"https://pan.quark.cn/s/d76e2482e5af","password":"","size":"8.03GB","tags":["收藏榜单TOP5","mp3"],"description":"网易云音乐收藏榜单TOP5"}]},{"id":"programming-courses","title":"编程学习课程合集","category":"study","description":"从入门到进阶的编程学习资源，包含多种编程语言和框架","cover":"/images/bc.png","tags":["编程","教程","视频课程","AI"],"created":"2025-07-23T00:00:00.000Z","updated":"2025-07-23T00:00:00.000Z","resourceCount":2,"resources":[{"name":"编程开发教程合集","platform":"baidu","link":"https://pan.baidu.com/s/1I5XkashUOlhY3xnz-8E-lg?pwd=mun4","password":"mun4","size":"补充中","tags":["JavaScript","全栈","Python","Java"],"description":"合集"},{"name":"AI相关资料 合集","platform":"baidu","link":"https://pan.baidu.com/s/1eF6XpE5d9Tmfvn-4eLkJew?pwd=xmpn","password":"xmpn","size":"补充中","tags":["AI","AI开发","AI项目"],"description":"合集"}]},{"id":"steam-games-2024","title":"热门游戏合集","category":"games","description":"收录热门的游戏，包括3A大作和独立游戏精品,手机游戏等","cover":"/images/game.png","tags":["Steam","热门","3A大作","手机游戏"],"created":"2025-07-23T00:00:00.000Z","updated":"2025-07-23T00:00:00.000Z","resourceCount":2,"resources":[{"name":"经典3A游戏合集","platform":"quark","link":"https://pan.quark.cn/s/3f9633b77909","password":"","size":"1.6TB","tags":["3A大作","电脑游戏"],"description":"CD Projekt RED开发的开放世界RPG游戏"},{"name":"【安卓】手机游戏[修改版＆Mod版][1630+款]","platform":"quark","link":"https://pan.quark.cn/s/3cc61194d40e","password":"","size":"221.7GB","tags":["经典游戏","手机游戏"],"description":"CD Projekt RED开发的开放世界RPG游戏"}]}];
const collectionsData = {
  categories,
  collections,
};

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const { categories, collections } = collectionsData;
  const platformMap = {
    "115": { name: "115\u7F51\u76D8", icon: "fa-box", color: "bg-orange-500" },
    "123": { name: "123\u7F51\u76D8", icon: "fa-hashtag", color: "bg-green-500" },
    "mobile": { name: "\u79FB\u52A8\u4E91\u76D8", icon: "fa-mobile-alt", color: "bg-blue-500" },
    "xunlei": { name: "\u8FC5\u96F7\u4E91\u76D8", icon: "fa-bolt", color: "bg-yellow-500" },
    "aliyun": { name: "\u963F\u91CC\u4E91\u76D8", icon: "fa-cloud", color: "bg-purple-500" },
    "uc": { name: "UC\u7F51\u76D8", icon: "fa-compass", color: "bg-red-500" },
    "tianyi": { name: "\u5929\u7FFC\u4E91\u76D8", icon: "fa-cloud", color: "bg-pink-500" },
    "quark": { name: "\u5938\u514B\u7F51\u76D8", icon: "fa-search", color: "bg-indigo-500" },
    "others": { name: "\u5176\u4ED6\u7F51\u76D8", icon: "fa-ellipsis-h", color: "bg-gray-500" },
    "baidu": { name: "\u767E\u5EA6\u7F51\u76D8", icon: "fa-database", color: "bg-blue-600" }
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "\u8D44\u6E90\u96C6\u5408 - \u76D8\u641C" }, { "default": ($$result2) => renderTemplate(_a || (_a = __template([" ", '<div class="max-w-6xl mx-auto"> <!-- \u6807\u9898\u533A\u57DF --> <div class="text-center mb-10 fade-in"> <div class="w-16 h-16 flex items-center justify-center mx-auto mb-4"> <img src="/logo.png" alt="\u76D8\u641C Logo" class="w-full h-full object-contain"> </div> <h1 class="text-4xl font-bold mb-2 bg-gradient-to-r from-ios-blue to-blue-500 bg-clip-text text-transparent">\u8D44\u6E90\u96C6\u5408</h1> <p class="text-ios-gray text-lg">\u7CBE\u5FC3\u6574\u7406\u7684\u4F18\u8D28\u8D44\u6E90\u5408\u96C6,\u9646\u7EED\u66F4\u65B0\u4E2D...</p> <div class="mt-4"> <a href="/" class="text-ios-blue hover:underline text-sm">\u2190 \u8FD4\u56DE\u641C\u7D22\u9875\u9762</a> </div> </div> <!-- \u5206\u7C7B\u5BFC\u822A --> <div class="mb-8"> <div class="flex flex-wrap gap-3 justify-center"> <button class="category-tab active" data-category="all"> <i class="fas fa-th-large mr-2"></i>\u5168\u90E8\n</button> ', ' </div> </div> <!-- \u641C\u7D22\u6846 --> <div class="ios-card p-1 mb-8 search-box max-w-2xl mx-auto"> <div class="flex items-center"> <div class="pl-4 text-ios-gray"> <i class="fas fa-search"></i> </div> <input type="text" id="collectionSearch" placeholder="\u641C\u7D22\u96C6\u5408\u540D\u79F0\u6216\u6807\u7B7E..." class="w-full py-4 px-4 bg-transparent outline-none text-lg placeholder-ios-gray" autocomplete="off"> </div> </div> <!-- \u96C6\u5408\u5C55\u793A\u533A\u57DF --> <div id="collectionsContainer" class="grid gap-6 md:grid-cols-2 lg:grid-cols-3"> ', ' </div> <!-- \u96C6\u5408\u8BE6\u60C5\u6A21\u6001\u6846 --> <div id="collectionModal" class="fixed inset-0 bg-black bg-opacity-50 hidden z-50 p-4"> <div class="max-w-4xl mx-auto mt-8 bg-white rounded-2xl max-h-[90vh] overflow-hidden"> <!-- \u6A21\u6001\u6846\u5934\u90E8 --> <div class="p-6 border-b border-gray-200"> <div class="flex items-center justify-between"> <div> <h2 id="modalTitle" class="text-2xl font-bold text-ios-dark"></h2> <p id="modalDescription" class="text-ios-gray mt-1"></p> </div> <button id="closeModal" class="text-ios-gray hover:text-ios-dark text-2xl"> <i class="fas fa-times"></i> </button> </div> </div> <!-- \u6A21\u6001\u6846\u5185\u5BB9 --> <div class="p-6 overflow-y-auto max-h-[70vh]"> <div id="modalContent"> <!-- \u8D44\u6E90\u5217\u8868\u5C06\u5728\u8FD9\u91CC\u52A8\u6001\u751F\u6210 --> </div> </div> </div> </div> <!-- \u9875\u811A --> <div class="mt-12 text-center text-ios-gray"> <p class="text-sm"> <a href="/" class="text-ios-blue hover:underline">\u8FD4\u56DE\u641C\u7D22\u9875\u9762</a> </p> </div> </div> <script>(function(){', `
        // \u5206\u7C7B\u7B5B\u9009\u529F\u80FD
        const categoryTabs = document.querySelectorAll('.category-tab');
        const collectionCards = document.querySelectorAll('.collection-card');
        const searchInput = document.getElementById('collectionSearch');

        // \u5206\u7C7B\u7B5B\u9009
        categoryTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                // \u66F4\u65B0\u6D3B\u8DC3\u72B6\u6001
                categoryTabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
                
                const category = tab.dataset.category;
                filterCollections(category, searchInput.value);
            });
        });

        // \u641C\u7D22\u529F\u80FD
        searchInput.addEventListener('input', (e) => {
            const activeCategory = document.querySelector('.category-tab.active').dataset.category;
            filterCollections(activeCategory, e.target.value);
        });

        // \u7B5B\u9009\u51FD\u6570
        function filterCollections(category, searchTerm) {
            collectionCards.forEach(card => {
                const cardCategory = card.dataset.category;
                const cardTags = card.dataset.tags;
                const cardTitle = card.querySelector('h3').textContent.toLowerCase();
                
                const matchesCategory = category === 'all' || cardCategory === category;
                const matchesSearch = !searchTerm || 
                    cardTitle.includes(searchTerm.toLowerCase()) || 
                    cardTags.includes(searchTerm.toLowerCase());
                
                if (matchesCategory && matchesSearch) {
                    card.style.display = 'block';
                    card.classList.add('fade-in');
                } else {
                    card.style.display = 'none';
                }
            });
        }

        // \u6A21\u6001\u6846\u529F\u80FD
        const modal = document.getElementById('collectionModal');
        const modalTitle = document.getElementById('modalTitle');
        const modalDescription = document.getElementById('modalDescription');
        const modalContent = document.getElementById('modalContent');
        const closeModal = document.getElementById('closeModal');

        // \u67E5\u770B\u8BE6\u60C5\u6309\u94AE
        document.querySelectorAll('.view-collection-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const collectionId = btn.dataset.collectionId;
                const collection = collections.find(c => c.id === collectionId);
                showCollectionDetail(collection);
            });
        });

        // \u663E\u793A\u96C6\u5408\u8BE6\u60C5
        function showCollectionDetail(collection) {
            modalTitle.textContent = collection.title;
            modalDescription.textContent = collection.description;
            
            let resourcesHtml = '<div class="space-y-4">';
            collection.resources.forEach(resource => {
                const platform = platformMap[resource.platform] || platformMap.others;
                resourcesHtml += \`
                    <div class="result-item p-4 rounded-lg border border-gray-200">
                        <div class="flex items-start gap-4">
                            <div class="platform-icon \${platform.color}">
                                <i class="fas \${platform.icon}"></i>
                            </div>
                            <div class="flex-1">
                                <h4 class="font-semibold text-ios-dark mb-1">\${resource.name}</h4>
                                <p class="text-sm text-ios-gray mb-2">\${resource.description || ''}</p>
                                <div class="flex flex-wrap gap-2 mb-2">
                                    <span class="platform-tag">\${platform.name}</span>
                                    <span class="platform-tag">\${resource.size}</span>
                                    \${resource.tags.map(tag => \`<span class="platform-tag">\${tag}</span>\`).join('')}
                                </div>
                                <div class="flex gap-2">
                                    <button class="text-ios-blue hover:underline text-sm copy-link-btn" data-link="\${resource.link}">
                                        <i class="fas fa-copy mr-1"></i>\u590D\u5236\u94FE\u63A5
                                    </button>
                                    <button class="text-ios-blue hover:underline text-sm open-link-btn" data-link="\${resource.link}">
                                        <i class="fas fa-external-link-alt mr-1"></i>\u7ACB\u5373\u67E5\u770B
                                    </button>
                                    \${resource.password ? \`
                                        <button class="text-ios-blue hover:underline text-sm copy-password-btn" data-password="\${resource.password}">
                                            <i class="fas fa-key mr-1"></i>\u590D\u5236\u5BC6\u7801
                                        </button>
                                    \` : ''}
                                </div>
                            </div>
                        </div>
                    </div>
                \`;
            });
            resourcesHtml += '</div>';
            
            modalContent.innerHTML = resourcesHtml;
            modal.classList.remove('hidden');
            
            // \u6DFB\u52A0\u590D\u5236\u529F\u80FD
            addCopyFunctionality();
        }

        // \u590D\u5236\u529F\u80FD
        function addCopyFunctionality() {
            document.querySelectorAll('.copy-link-btn').forEach(btn => {
                btn.addEventListener('click', () => {
                    navigator.clipboard.writeText(btn.dataset.link);
                    btn.innerHTML = '<i class="fas fa-check mr-1"></i>\u5DF2\u590D\u5236';
                    setTimeout(() => {
                        btn.innerHTML = '<i class="fas fa-copy mr-1"></i>\u590D\u5236\u94FE\u63A5';
                    }, 2000);
                });
            });

            document.querySelectorAll('.open-link-btn').forEach(btn => {
                btn.addEventListener('click', () => {
                    window.open(btn.dataset.link, '_blank');
                });
            });

            document.querySelectorAll('.copy-password-btn').forEach(btn => {
                btn.addEventListener('click', () => {
                    navigator.clipboard.writeText(btn.dataset.password);
                    btn.innerHTML = '<i class="fas fa-check mr-1"></i>\u5DF2\u590D\u5236';
                    setTimeout(() => {
                        btn.innerHTML = '<i class="fas fa-key mr-1"></i>\u590D\u5236\u5BC6\u7801';
                    }, 2000);
                });
            });
        }

        // \u5173\u95ED\u6A21\u6001\u6846
        closeModal.addEventListener('click', () => {
            modal.classList.add('hidden');
        });

        // \u70B9\u51FB\u80CC\u666F\u5173\u95ED\u6A21\u6001\u6846
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.add('hidden');
            }
        });

        // ESC\u952E\u5173\u95ED\u6A21\u6001\u6846
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                modal.classList.add('hidden');
            }
        });
    })();<\/script>`], [" ", '<div class="max-w-6xl mx-auto"> <!-- \u6807\u9898\u533A\u57DF --> <div class="text-center mb-10 fade-in"> <div class="w-16 h-16 flex items-center justify-center mx-auto mb-4"> <img src="/logo.png" alt="\u76D8\u641C Logo" class="w-full h-full object-contain"> </div> <h1 class="text-4xl font-bold mb-2 bg-gradient-to-r from-ios-blue to-blue-500 bg-clip-text text-transparent">\u8D44\u6E90\u96C6\u5408</h1> <p class="text-ios-gray text-lg">\u7CBE\u5FC3\u6574\u7406\u7684\u4F18\u8D28\u8D44\u6E90\u5408\u96C6,\u9646\u7EED\u66F4\u65B0\u4E2D...</p> <div class="mt-4"> <a href="/" class="text-ios-blue hover:underline text-sm">\u2190 \u8FD4\u56DE\u641C\u7D22\u9875\u9762</a> </div> </div> <!-- \u5206\u7C7B\u5BFC\u822A --> <div class="mb-8"> <div class="flex flex-wrap gap-3 justify-center"> <button class="category-tab active" data-category="all"> <i class="fas fa-th-large mr-2"></i>\u5168\u90E8\n</button> ', ' </div> </div> <!-- \u641C\u7D22\u6846 --> <div class="ios-card p-1 mb-8 search-box max-w-2xl mx-auto"> <div class="flex items-center"> <div class="pl-4 text-ios-gray"> <i class="fas fa-search"></i> </div> <input type="text" id="collectionSearch" placeholder="\u641C\u7D22\u96C6\u5408\u540D\u79F0\u6216\u6807\u7B7E..." class="w-full py-4 px-4 bg-transparent outline-none text-lg placeholder-ios-gray" autocomplete="off"> </div> </div> <!-- \u96C6\u5408\u5C55\u793A\u533A\u57DF --> <div id="collectionsContainer" class="grid gap-6 md:grid-cols-2 lg:grid-cols-3"> ', ' </div> <!-- \u96C6\u5408\u8BE6\u60C5\u6A21\u6001\u6846 --> <div id="collectionModal" class="fixed inset-0 bg-black bg-opacity-50 hidden z-50 p-4"> <div class="max-w-4xl mx-auto mt-8 bg-white rounded-2xl max-h-[90vh] overflow-hidden"> <!-- \u6A21\u6001\u6846\u5934\u90E8 --> <div class="p-6 border-b border-gray-200"> <div class="flex items-center justify-between"> <div> <h2 id="modalTitle" class="text-2xl font-bold text-ios-dark"></h2> <p id="modalDescription" class="text-ios-gray mt-1"></p> </div> <button id="closeModal" class="text-ios-gray hover:text-ios-dark text-2xl"> <i class="fas fa-times"></i> </button> </div> </div> <!-- \u6A21\u6001\u6846\u5185\u5BB9 --> <div class="p-6 overflow-y-auto max-h-[70vh]"> <div id="modalContent"> <!-- \u8D44\u6E90\u5217\u8868\u5C06\u5728\u8FD9\u91CC\u52A8\u6001\u751F\u6210 --> </div> </div> </div> </div> <!-- \u9875\u811A --> <div class="mt-12 text-center text-ios-gray"> <p class="text-sm"> <a href="/" class="text-ios-blue hover:underline">\u8FD4\u56DE\u641C\u7D22\u9875\u9762</a> </p> </div> </div> <script>(function(){', `
        // \u5206\u7C7B\u7B5B\u9009\u529F\u80FD
        const categoryTabs = document.querySelectorAll('.category-tab');
        const collectionCards = document.querySelectorAll('.collection-card');
        const searchInput = document.getElementById('collectionSearch');

        // \u5206\u7C7B\u7B5B\u9009
        categoryTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                // \u66F4\u65B0\u6D3B\u8DC3\u72B6\u6001
                categoryTabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
                
                const category = tab.dataset.category;
                filterCollections(category, searchInput.value);
            });
        });

        // \u641C\u7D22\u529F\u80FD
        searchInput.addEventListener('input', (e) => {
            const activeCategory = document.querySelector('.category-tab.active').dataset.category;
            filterCollections(activeCategory, e.target.value);
        });

        // \u7B5B\u9009\u51FD\u6570
        function filterCollections(category, searchTerm) {
            collectionCards.forEach(card => {
                const cardCategory = card.dataset.category;
                const cardTags = card.dataset.tags;
                const cardTitle = card.querySelector('h3').textContent.toLowerCase();
                
                const matchesCategory = category === 'all' || cardCategory === category;
                const matchesSearch = !searchTerm || 
                    cardTitle.includes(searchTerm.toLowerCase()) || 
                    cardTags.includes(searchTerm.toLowerCase());
                
                if (matchesCategory && matchesSearch) {
                    card.style.display = 'block';
                    card.classList.add('fade-in');
                } else {
                    card.style.display = 'none';
                }
            });
        }

        // \u6A21\u6001\u6846\u529F\u80FD
        const modal = document.getElementById('collectionModal');
        const modalTitle = document.getElementById('modalTitle');
        const modalDescription = document.getElementById('modalDescription');
        const modalContent = document.getElementById('modalContent');
        const closeModal = document.getElementById('closeModal');

        // \u67E5\u770B\u8BE6\u60C5\u6309\u94AE
        document.querySelectorAll('.view-collection-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const collectionId = btn.dataset.collectionId;
                const collection = collections.find(c => c.id === collectionId);
                showCollectionDetail(collection);
            });
        });

        // \u663E\u793A\u96C6\u5408\u8BE6\u60C5
        function showCollectionDetail(collection) {
            modalTitle.textContent = collection.title;
            modalDescription.textContent = collection.description;
            
            let resourcesHtml = '<div class="space-y-4">';
            collection.resources.forEach(resource => {
                const platform = platformMap[resource.platform] || platformMap.others;
                resourcesHtml += \\\`
                    <div class="result-item p-4 rounded-lg border border-gray-200">
                        <div class="flex items-start gap-4">
                            <div class="platform-icon \\\${platform.color}">
                                <i class="fas \\\${platform.icon}"></i>
                            </div>
                            <div class="flex-1">
                                <h4 class="font-semibold text-ios-dark mb-1">\\\${resource.name}</h4>
                                <p class="text-sm text-ios-gray mb-2">\\\${resource.description || ''}</p>
                                <div class="flex flex-wrap gap-2 mb-2">
                                    <span class="platform-tag">\\\${platform.name}</span>
                                    <span class="platform-tag">\\\${resource.size}</span>
                                    \\\${resource.tags.map(tag => \\\`<span class="platform-tag">\\\${tag}</span>\\\`).join('')}
                                </div>
                                <div class="flex gap-2">
                                    <button class="text-ios-blue hover:underline text-sm copy-link-btn" data-link="\\\${resource.link}">
                                        <i class="fas fa-copy mr-1"></i>\u590D\u5236\u94FE\u63A5
                                    </button>
                                    <button class="text-ios-blue hover:underline text-sm open-link-btn" data-link="\\\${resource.link}">
                                        <i class="fas fa-external-link-alt mr-1"></i>\u7ACB\u5373\u67E5\u770B
                                    </button>
                                    \\\${resource.password ? \\\`
                                        <button class="text-ios-blue hover:underline text-sm copy-password-btn" data-password="\\\${resource.password}">
                                            <i class="fas fa-key mr-1"></i>\u590D\u5236\u5BC6\u7801
                                        </button>
                                    \\\` : ''}
                                </div>
                            </div>
                        </div>
                    </div>
                \\\`;
            });
            resourcesHtml += '</div>';
            
            modalContent.innerHTML = resourcesHtml;
            modal.classList.remove('hidden');
            
            // \u6DFB\u52A0\u590D\u5236\u529F\u80FD
            addCopyFunctionality();
        }

        // \u590D\u5236\u529F\u80FD
        function addCopyFunctionality() {
            document.querySelectorAll('.copy-link-btn').forEach(btn => {
                btn.addEventListener('click', () => {
                    navigator.clipboard.writeText(btn.dataset.link);
                    btn.innerHTML = '<i class="fas fa-check mr-1"></i>\u5DF2\u590D\u5236';
                    setTimeout(() => {
                        btn.innerHTML = '<i class="fas fa-copy mr-1"></i>\u590D\u5236\u94FE\u63A5';
                    }, 2000);
                });
            });

            document.querySelectorAll('.open-link-btn').forEach(btn => {
                btn.addEventListener('click', () => {
                    window.open(btn.dataset.link, '_blank');
                });
            });

            document.querySelectorAll('.copy-password-btn').forEach(btn => {
                btn.addEventListener('click', () => {
                    navigator.clipboard.writeText(btn.dataset.password);
                    btn.innerHTML = '<i class="fas fa-check mr-1"></i>\u5DF2\u590D\u5236';
                    setTimeout(() => {
                        btn.innerHTML = '<i class="fas fa-key mr-1"></i>\u590D\u5236\u5BC6\u7801';
                    }, 2000);
                });
            });
        }

        // \u5173\u95ED\u6A21\u6001\u6846
        closeModal.addEventListener('click', () => {
            modal.classList.add('hidden');
        });

        // \u70B9\u51FB\u80CC\u666F\u5173\u95ED\u6A21\u6001\u6846
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.add('hidden');
            }
        });

        // ESC\u952E\u5173\u95ED\u6A21\u6001\u6846
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                modal.classList.add('hidden');
            }
        });
    })();<\/script>`])), maybeRenderHead(), categories.map((category) => renderTemplate`<button class="category-tab"${addAttribute(category.id, "data-category")}> <i${addAttribute(`fas ${category.icon} mr-2`, "class")}></i> ${category.name} </button>`), collections.map((collection) => {
    const category = categories.find((cat) => cat.id === collection.category);
    return renderTemplate`<div class="ios-card collection-card p-6"${addAttribute(collection.category, "data-category")}${addAttribute(collection.tags.join(",").toLowerCase(), "data-tags")}> <!-- 集合封面 --> <div class="mb-4"> ${collection.cover ? renderTemplate`<div class="collection-cover overflow-hidden"> <img${addAttribute(collection.cover, "src")}${addAttribute(collection.title, "alt")} class="w-full h-full object-cover" onError="this.style.display='none'; this.nextElementSibling.style.display='flex';"> <div class="collection-cover flex items-center justify-center text-white text-4xl" style="display: none;"> <i${addAttribute(`fas ${category?.icon || "fa-folder"}`, "class")}></i> </div> </div>` : renderTemplate`<div class="collection-cover flex items-center justify-center text-white text-4xl"> <i${addAttribute(`fas ${category?.icon || "fa-folder"}`, "class")}></i> </div>`} </div> <!-- 集合信息 --> <div class="mb-4"> <div class="flex items-center justify-between mb-2"> <h3 class="text-xl font-semibold text-ios-dark line-clamp-2">${collection.title}</h3> <span${addAttribute(`platform-icon ${category?.color || "bg-gray-500"} text-xs px-2 py-1 rounded-full`, "class")}> <i${addAttribute(`fas ${category?.icon || "fa-folder"}`, "class")}></i> </span> </div> <p class="text-ios-gray text-sm mb-3 line-clamp-2">${collection.description}</p> <!-- 标签 --> <div class="flex flex-wrap gap-1 mb-3"> ${collection.tags.slice(0, 3).map((tag) => renderTemplate`<span class="platform-tag text-xs">${tag}</span>`)} ${collection.tags.length > 3 && renderTemplate`<span class="platform-tag text-xs">+${collection.tags.length - 3}</span>`} </div> <!-- 统计信息 --> <div class="flex items-center justify-between text-sm text-ios-gray"> <span> <i class="fas fa-file-alt mr-1"></i> ${collection.resourceCount} 个资源
</span> <span> <i class="fas fa-clock mr-1"></i> ${new Date(collection.updated).toLocaleDateString("zh-CN")} </span> </div> </div> <!-- 操作按钮 --> <div class="flex gap-2"> <button class="flex-1 bg-gradient-to-r from-ios-blue to-blue-500 text-white rounded-xl py-2 px-4 font-medium hover:opacity-90 transition-opacity cursor-pointer view-collection-btn"${addAttribute(collection.id, "data-collection-id")}>
查看详情
</button> </div> </div>`;
  }), defineScriptVars({ collections, platformMap })) })}`;
}, "/Users/hua/Documents/vhost/pansou-ui/collections/src/pages/index.astro", void 0);

const $$file = "/Users/hua/Documents/vhost/pansou-ui/collections/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
