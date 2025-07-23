import { c as createComponent, a as createAstro, r as renderHead, b as renderSlot, d as renderScript, e as renderTemplate, f as renderComponent, g as defineScriptVars, h as addAttribute, m as maybeRenderHead } from '../chunks/astro/server_CuSTO97b.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="zh-CN"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>${title}</title><link rel="icon" href="/logo.png" type="image/png"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">${renderHead()}</head> <body class="min-h-screen py-8 px-4 sm:px-8"> ${renderSlot($$result, $$slots["default"])} <button id="backToTopBtn" title="返回顶部"> <i class="fas fa-arrow-up"></i> </button> ${renderScript($$result, "D:/vhost/pansou/collections/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts")} </body> </html>`;
}, "D:/vhost/pansou/collections/src/layouts/Layout.astro", void 0);

const categories = [{"id":"games","name":"游戏合集","icon":"fa-gamepad","color":"bg-purple-500"},{"id":"movies","name":"电影合集","icon":"fa-film","color":"bg-red-500"},{"id":"software","name":"软件合集","icon":"fa-desktop","color":"bg-blue-500"},{"id":"music","name":"音乐合集","icon":"fa-music","color":"bg-green-500"},{"id":"study","name":"学习资料","icon":"fa-book","color":"bg-yellow-500"}];
const collections = [{"id":"steam-games-2024","title":"2024年Steam热门游戏合集","category":"games","description":"收录2024年最受欢迎的Steam游戏，包括3A大作和独立游戏精品","cover":"/images/steam-games.jpg","tags":["Steam","热门","2024","3A大作"],"created":"2024-01-15","updated":"2024-07-20","resourceCount":15,"resources":[{"name":"赛博朋克2077 终极版","platform":"baidu","link":"https://pan.baidu.com/s/1example1","password":"cy77","size":"70GB","tags":["RPG","开放世界","科幻"],"description":"CD Projekt RED开发的开放世界RPG游戏"},{"name":"艾尔登法环","platform":"aliyun","link":"https://www.aliyundrive.com/s/example2","password":"elden","size":"50GB","tags":["魂系列","开放世界","动作RPG"],"description":"FromSoftware与乔治·R·R·马丁合作的魂系列新作"},{"name":"博德之门3","platform":"115","link":"https://115.com/s/example3","password":"bg3","size":"120GB","tags":["RPG","回合制","多人合作"],"description":"Larian Studios开发的经典RPG续作"}]},{"id":"action-movies-2024","title":"2024年动作电影精选","category":"movies","description":"精选2024年最精彩的动作电影，包括好莱坞大片和各国佳作","cover":"/images/action-movies.jpg","tags":["动作","2024","高清","4K"],"created":"2024-02-01","updated":"2024-07-15","resourceCount":12,"resources":[{"name":"疾速追杀4 4K版","platform":"baidu","link":"https://pan.baidu.com/s/1example4","password":"jw4k","size":"25GB","tags":["动作","4K","基努·里维斯"],"description":"基努·里维斯主演的动作系列第四部"},{"name":"碟中谍7：致命清算（上）","platform":"quark","link":"https://pan.quark.cn/s/example5","password":"mi7","size":"18GB","tags":["动作","谍战","汤姆·克鲁斯"],"description":"汤姆·克鲁斯主演的谍战动作大片"}]},{"id":"design-software","title":"设计软件工具包","category":"software","description":"专业设计师必备软件合集，包含Adobe全家桶和其他设计工具","cover":"/images/design-software.jpg","tags":["设计","Adobe","专业软件"],"created":"2024-03-01","updated":"2024-07-10","resourceCount":8,"resources":[{"name":"Adobe Creative Cloud 2024","platform":"baidu","link":"https://pan.baidu.com/s/1example6","password":"cc24","size":"15GB","tags":["Adobe","设计","全家桶"],"description":"Adobe创意云2024版本完整套装"},{"name":"Figma Desktop","platform":"aliyun","link":"https://www.aliyundrive.com/s/example7","password":"figma","size":"200MB","tags":["UI设计","协作","原型"],"description":"现代化的界面设计和原型工具"}]},{"id":"classical-music","title":"古典音乐精选集","category":"music","description":"精选世界著名古典音乐作品，高品质无损音频","cover":"/images/classical-music.jpg","tags":["古典","无损","FLAC"],"created":"2024-04-01","updated":"2024-06-30","resourceCount":20,"resources":[{"name":"贝多芬交响曲全集","platform":"baidu","link":"https://pan.baidu.com/s/1example8","password":"btf9","size":"8GB","tags":["贝多芬","交响曲","FLAC"],"description":"贝多芬九部交响曲完整收录，柏林爱乐演奏"},{"name":"莫扎特钢琴协奏曲","platform":"115","link":"https://115.com/s/example9","password":"mzt","size":"5GB","tags":["莫扎特","钢琴","协奏曲"],"description":"莫扎特钢琴协奏曲精选，多位名家演奏版本"}]},{"id":"programming-courses","title":"编程学习课程合集","category":"study","description":"从入门到进阶的编程学习资源，包含多种编程语言和框架","cover":"/images/programming-courses.jpg","tags":["编程","教程","视频课程"],"created":"2024-05-01","updated":"2024-07-25","resourceCount":25,"resources":[{"name":"JavaScript全栈开发教程","platform":"baidu","link":"https://pan.baidu.com/s/1example10","password":"js2024","size":"12GB","tags":["JavaScript","全栈","Node.js"],"description":"从基础到高级的JavaScript全栈开发完整教程"},{"name":"Python数据科学实战","platform":"aliyun","link":"https://www.aliyundrive.com/s/example11","password":"pyds","size":"8GB","tags":["Python","数据科学","机器学习"],"description":"Python在数据科学领域的实际应用案例教程"}]}];
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
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "\u8D44\u6E90\u96C6\u5408 - \u76D8\u641C" }, { "default": ($$result2) => renderTemplate(_a || (_a = __template([" ", '<div class="max-w-6xl mx-auto"> <!-- \u6807\u9898\u533A\u57DF --> <div class="text-center mb-10 fade-in"> <div class="w-16 h-16 flex items-center justify-center mx-auto mb-4"> <img src="/logo.png" alt="\u76D8\u641C Logo" class="w-full h-full object-contain"> </div> <h1 class="text-4xl font-bold mb-2 bg-gradient-to-r from-ios-blue to-blue-500 bg-clip-text text-transparent">\u8D44\u6E90\u96C6\u5408</h1> <p class="text-ios-gray text-lg">\u7CBE\u5FC3\u6574\u7406\u7684\u4F18\u8D28\u8D44\u6E90\u5408\u96C6</p> <div class="mt-4"> <a href="/" class="text-ios-blue hover:underline text-sm">\u2190 \u8FD4\u56DE\u641C\u7D22\u9875\u9762</a> </div> </div> <!-- \u5206\u7C7B\u5BFC\u822A --> <div class="mb-8"> <div class="flex flex-wrap gap-3 justify-center"> <button class="category-tab active" data-category="all"> <i class="fas fa-th-large mr-2"></i>\u5168\u90E8\n</button> ', ' </div> </div> <!-- \u641C\u7D22\u6846 --> <div class="ios-card p-1 mb-8 search-box max-w-2xl mx-auto"> <div class="flex items-center"> <div class="pl-4 text-ios-gray"> <i class="fas fa-search"></i> </div> <input type="text" id="collectionSearch" placeholder="\u641C\u7D22\u96C6\u5408\u540D\u79F0\u6216\u6807\u7B7E..." class="w-full py-4 px-4 bg-transparent outline-none text-lg placeholder-ios-gray" autocomplete="off"> </div> </div> <!-- \u96C6\u5408\u5C55\u793A\u533A\u57DF --> <div id="collectionsContainer" class="grid gap-6 md:grid-cols-2 lg:grid-cols-3"> ', ' </div> <!-- \u96C6\u5408\u8BE6\u60C5\u6A21\u6001\u6846 --> <div id="collectionModal" class="fixed inset-0 bg-black bg-opacity-50 hidden z-50 p-4"> <div class="max-w-4xl mx-auto mt-8 bg-white rounded-2xl max-h-[90vh] overflow-hidden"> <!-- \u6A21\u6001\u6846\u5934\u90E8 --> <div class="p-6 border-b border-gray-200"> <div class="flex items-center justify-between"> <div> <h2 id="modalTitle" class="text-2xl font-bold text-ios-dark"></h2> <p id="modalDescription" class="text-ios-gray mt-1"></p> </div> <button id="closeModal" class="text-ios-gray hover:text-ios-dark text-2xl"> <i class="fas fa-times"></i> </button> </div> </div> <!-- \u6A21\u6001\u6846\u5185\u5BB9 --> <div class="p-6 overflow-y-auto max-h-[70vh]"> <div id="modalContent"> <!-- \u8D44\u6E90\u5217\u8868\u5C06\u5728\u8FD9\u91CC\u52A8\u6001\u751F\u6210 --> </div> </div> </div> </div> <!-- \u9875\u811A --> <div class="mt-12 text-center text-ios-gray"> <p class="text-sm"> <a href="/" class="text-ios-blue hover:underline">\u8FD4\u56DE\u641C\u7D22\u9875\u9762</a> <span class="mx-2">|</span> <a href="https://github.com/ZhjGo/pansou-ui" target="_blank" class="text-ios-blue hover:underline">\u9879\u76EE\u5730\u5740</a> </p> </div> </div> <script>(function(){', `
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
    })();<\/script>`], [" ", '<div class="max-w-6xl mx-auto"> <!-- \u6807\u9898\u533A\u57DF --> <div class="text-center mb-10 fade-in"> <div class="w-16 h-16 flex items-center justify-center mx-auto mb-4"> <img src="/logo.png" alt="\u76D8\u641C Logo" class="w-full h-full object-contain"> </div> <h1 class="text-4xl font-bold mb-2 bg-gradient-to-r from-ios-blue to-blue-500 bg-clip-text text-transparent">\u8D44\u6E90\u96C6\u5408</h1> <p class="text-ios-gray text-lg">\u7CBE\u5FC3\u6574\u7406\u7684\u4F18\u8D28\u8D44\u6E90\u5408\u96C6</p> <div class="mt-4"> <a href="/" class="text-ios-blue hover:underline text-sm">\u2190 \u8FD4\u56DE\u641C\u7D22\u9875\u9762</a> </div> </div> <!-- \u5206\u7C7B\u5BFC\u822A --> <div class="mb-8"> <div class="flex flex-wrap gap-3 justify-center"> <button class="category-tab active" data-category="all"> <i class="fas fa-th-large mr-2"></i>\u5168\u90E8\n</button> ', ' </div> </div> <!-- \u641C\u7D22\u6846 --> <div class="ios-card p-1 mb-8 search-box max-w-2xl mx-auto"> <div class="flex items-center"> <div class="pl-4 text-ios-gray"> <i class="fas fa-search"></i> </div> <input type="text" id="collectionSearch" placeholder="\u641C\u7D22\u96C6\u5408\u540D\u79F0\u6216\u6807\u7B7E..." class="w-full py-4 px-4 bg-transparent outline-none text-lg placeholder-ios-gray" autocomplete="off"> </div> </div> <!-- \u96C6\u5408\u5C55\u793A\u533A\u57DF --> <div id="collectionsContainer" class="grid gap-6 md:grid-cols-2 lg:grid-cols-3"> ', ' </div> <!-- \u96C6\u5408\u8BE6\u60C5\u6A21\u6001\u6846 --> <div id="collectionModal" class="fixed inset-0 bg-black bg-opacity-50 hidden z-50 p-4"> <div class="max-w-4xl mx-auto mt-8 bg-white rounded-2xl max-h-[90vh] overflow-hidden"> <!-- \u6A21\u6001\u6846\u5934\u90E8 --> <div class="p-6 border-b border-gray-200"> <div class="flex items-center justify-between"> <div> <h2 id="modalTitle" class="text-2xl font-bold text-ios-dark"></h2> <p id="modalDescription" class="text-ios-gray mt-1"></p> </div> <button id="closeModal" class="text-ios-gray hover:text-ios-dark text-2xl"> <i class="fas fa-times"></i> </button> </div> </div> <!-- \u6A21\u6001\u6846\u5185\u5BB9 --> <div class="p-6 overflow-y-auto max-h-[70vh]"> <div id="modalContent"> <!-- \u8D44\u6E90\u5217\u8868\u5C06\u5728\u8FD9\u91CC\u52A8\u6001\u751F\u6210 --> </div> </div> </div> </div> <!-- \u9875\u811A --> <div class="mt-12 text-center text-ios-gray"> <p class="text-sm"> <a href="/" class="text-ios-blue hover:underline">\u8FD4\u56DE\u641C\u7D22\u9875\u9762</a> <span class="mx-2">|</span> <a href="https://github.com/ZhjGo/pansou-ui" target="_blank" class="text-ios-blue hover:underline">\u9879\u76EE\u5730\u5740</a> </p> </div> </div> <script>(function(){', `
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
    return renderTemplate`<div class="ios-card collection-card p-6"${addAttribute(collection.category, "data-category")}${addAttribute(collection.tags.join(",").toLowerCase(), "data-tags")}> <!-- 集合封面 --> <div class="mb-4"> <div class="collection-cover flex items-center justify-center text-white text-4xl"> <i${addAttribute(`fas ${category?.icon || "fa-folder"}`, "class")}></i> </div> </div> <!-- 集合信息 --> <div class="mb-4"> <div class="flex items-center justify-between mb-2"> <h3 class="text-xl font-semibold text-ios-dark line-clamp-2">${collection.title}</h3> <span${addAttribute(`platform-icon ${category?.color || "bg-gray-500"} text-xs px-2 py-1 rounded-full`, "class")}> <i${addAttribute(`fas ${category?.icon || "fa-folder"}`, "class")}></i> </span> </div> <p class="text-ios-gray text-sm mb-3 line-clamp-2">${collection.description}</p> <!-- 标签 --> <div class="flex flex-wrap gap-1 mb-3"> ${collection.tags.slice(0, 3).map((tag) => renderTemplate`<span class="platform-tag text-xs">${tag}</span>`)} ${collection.tags.length > 3 && renderTemplate`<span class="platform-tag text-xs">+${collection.tags.length - 3}</span>`} </div> <!-- 统计信息 --> <div class="flex items-center justify-between text-sm text-ios-gray"> <span> <i class="fas fa-file-alt mr-1"></i> ${collection.resourceCount} 个资源
</span> <span> <i class="fas fa-clock mr-1"></i> ${new Date(collection.updated).toLocaleDateString("zh-CN")} </span> </div> </div> <!-- 操作按钮 --> <div class="flex gap-2"> <button class="flex-1 bg-gradient-to-r from-ios-blue to-blue-500 text-white rounded-xl py-2 px-4 font-medium hover:opacity-90 transition-opacity cursor-pointer view-collection-btn"${addAttribute(collection.id, "data-collection-id")}>
查看详情
</button> </div> </div>`;
  }), defineScriptVars({ collections, platformMap })) })}`;
}, "D:/vhost/pansou/collections/src/pages/index.astro", void 0);

const $$file = "D:/vhost/pansou/collections/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
