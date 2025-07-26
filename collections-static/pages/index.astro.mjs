import { e as createComponent, k as renderComponent, r as renderTemplate, n as defineScriptVars, h as addAttribute, m as maybeRenderHead } from '../chunks/astro/server_CzBadtu_.mjs';
import 'kleur/colors';
import { $ as $$Layout, c as collectionsData } from '../chunks/collections_BY5t8Bm7.mjs';
export { renderers } from '../renderers.mjs';

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
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "\u8D44\u6E90\u96C6\u5408 - \u76D8\u641C" }, { "default": ($$result2) => renderTemplate(_a || (_a = __template([" ", '<div class="max-w-6xl mx-auto"> <!-- \u6807\u9898\u533A\u57DF --> <div class="text-center mb-10 fade-in"> <div class="w-16 h-16 flex items-center justify-center mx-auto mb-4"> <img src="/logo.png" alt="\u76D8\u641C Logo" class="w-full h-full object-contain"> </div> <h1 class="text-4xl font-bold mb-2 bg-gradient-to-r from-ios-blue to-blue-500 bg-clip-text text-transparent">\u8D44\u6E90\u96C6\u5408</h1> <p class="text-ios-gray text-lg">\u7CBE\u5FC3\u6574\u7406\u7684\u4F18\u8D28\u8D44\u6E90\u5408\u96C6,\u9646\u7EED\u66F4\u65B0\u4E2D...</p> <div class="mt-4"> <a href="/" class="text-ios-blue hover:underline text-sm">\u2190 \u8FD4\u56DE\u641C\u7D22\u9875\u9762</a> </div> </div> <!-- \u5206\u7C7B\u5BFC\u822A --> <div class="mb-8"> <div class="flex flex-wrap gap-3 justify-center"> <button class="category-tab active" data-category="all"> <i class="fas fa-th-large mr-2"></i>\u5168\u90E8\n</button> ', ' </div> </div> <!-- \u641C\u7D22\u6846 --> <div class="ios-card p-1 mb-8 search-box max-w-2xl mx-auto"> <div class="flex items-center"> <div class="pl-4 text-ios-gray"> <i class="fas fa-search"></i> </div> <input type="text" id="collectionSearch" placeholder="\u641C\u7D22\u96C6\u5408\u540D\u79F0\u6216\u6807\u7B7E..." class="w-full py-4 px-4 bg-transparent outline-none text-lg placeholder-ios-gray" autocomplete="off"> </div> </div> <!-- \u96C6\u5408\u5C55\u793A\u533A\u57DF --> <div id="collectionsContainer" class="grid gap-6 md:grid-cols-2 lg:grid-cols-3"> ', ' </div> <!-- \u9875\u811A --> <div class="mt-12 text-center text-ios-gray"> <p class="text-sm"> <a href="/" class="text-ios-blue hover:underline">\u8FD4\u56DE\u641C\u7D22\u9875\u9762</a> </p> </div> </div> <script>(function(){', `
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
                    const targetUrl = btn.dataset.link;
                    window.open(\`/go?url=\${encodeURIComponent(targetUrl)}\`, '_blank');
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
    })();<\/script>`], [" ", '<div class="max-w-6xl mx-auto"> <!-- \u6807\u9898\u533A\u57DF --> <div class="text-center mb-10 fade-in"> <div class="w-16 h-16 flex items-center justify-center mx-auto mb-4"> <img src="/logo.png" alt="\u76D8\u641C Logo" class="w-full h-full object-contain"> </div> <h1 class="text-4xl font-bold mb-2 bg-gradient-to-r from-ios-blue to-blue-500 bg-clip-text text-transparent">\u8D44\u6E90\u96C6\u5408</h1> <p class="text-ios-gray text-lg">\u7CBE\u5FC3\u6574\u7406\u7684\u4F18\u8D28\u8D44\u6E90\u5408\u96C6,\u9646\u7EED\u66F4\u65B0\u4E2D...</p> <div class="mt-4"> <a href="/" class="text-ios-blue hover:underline text-sm">\u2190 \u8FD4\u56DE\u641C\u7D22\u9875\u9762</a> </div> </div> <!-- \u5206\u7C7B\u5BFC\u822A --> <div class="mb-8"> <div class="flex flex-wrap gap-3 justify-center"> <button class="category-tab active" data-category="all"> <i class="fas fa-th-large mr-2"></i>\u5168\u90E8\n</button> ', ' </div> </div> <!-- \u641C\u7D22\u6846 --> <div class="ios-card p-1 mb-8 search-box max-w-2xl mx-auto"> <div class="flex items-center"> <div class="pl-4 text-ios-gray"> <i class="fas fa-search"></i> </div> <input type="text" id="collectionSearch" placeholder="\u641C\u7D22\u96C6\u5408\u540D\u79F0\u6216\u6807\u7B7E..." class="w-full py-4 px-4 bg-transparent outline-none text-lg placeholder-ios-gray" autocomplete="off"> </div> </div> <!-- \u96C6\u5408\u5C55\u793A\u533A\u57DF --> <div id="collectionsContainer" class="grid gap-6 md:grid-cols-2 lg:grid-cols-3"> ', ' </div> <!-- \u9875\u811A --> <div class="mt-12 text-center text-ios-gray"> <p class="text-sm"> <a href="/" class="text-ios-blue hover:underline">\u8FD4\u56DE\u641C\u7D22\u9875\u9762</a> </p> </div> </div> <script>(function(){', `
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
                    const targetUrl = btn.dataset.link;
                    window.open(\\\`/go?url=\\\${encodeURIComponent(targetUrl)}\\\`, '_blank');
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
    })();<\/script>`])), maybeRenderHead(), categories.map((category) => renderTemplate`<button class="category-tab"${addAttribute(category.id, "data-category")}> <i${addAttribute(`fas ${category.icon} mr-2`, "class")}></i> ${category.name} </button>`), collections.map((collection) => {
    const category = categories.find((cat) => cat.id === collection.category);
    return renderTemplate`<div class="ios-card collection-card p-6"${addAttribute(collection.category, "data-category")}${addAttribute(collection.tags.join(",").toLowerCase(), "data-tags")}> <!-- 集合封面 --> <div class="mb-4"> ${collection.cover ? renderTemplate`<div class="collection-cover overflow-hidden"> <img${addAttribute(collection.cover, "src")}${addAttribute(collection.title, "alt")} class="w-full h-full object-cover" onError="this.style.display='none'; this.nextElementSibling.style.display='flex';"> <div class="collection-cover flex items-center justify-center text-white text-4xl" style="display: none;"> <i${addAttribute(`fas ${category?.icon || "fa-folder"}`, "class")}></i> </div> </div>` : renderTemplate`<div class="collection-cover flex items-center justify-center text-white text-4xl"> <i${addAttribute(`fas ${category?.icon || "fa-folder"}`, "class")}></i> </div>`} </div> <!-- 集合信息 --> <div class="mb-4"> <div class="flex items-center justify-between mb-2"> <h3 class="text-xl font-semibold text-ios-dark line-clamp-2">${collection.title}</h3> <span${addAttribute(`platform-icon ${category?.color || "bg-gray-500"} text-xs px-2 py-1 rounded-full`, "class")}> <i${addAttribute(`fas ${category?.icon || "fa-folder"}`, "class")}></i> </span> </div> <p class="text-ios-gray text-sm mb-3 line-clamp-2">${collection.description}</p> <!-- 标签 --> <div class="flex flex-wrap gap-1 mb-3"> ${collection.tags.slice(0, 3).map((tag) => renderTemplate`<span class="platform-tag text-xs">${tag}</span>`)} ${collection.tags.length > 3 && renderTemplate`<span class="platform-tag text-xs">+${collection.tags.length - 3}</span>`} </div> <!-- 统计信息 --> <div class="flex items-center justify-between text-sm text-ios-gray"> <span> <i class="fas fa-file-alt mr-1"></i> ${collection.resourceCount} 个资源
</span> <span> <i class="fas fa-clock mr-1"></i> ${new Date(collection.updated).toLocaleDateString("zh-CN")} </span> </div> </div> <!-- 操作按钮 --> <div class="flex gap-2"> <a${addAttribute(`/collection?id=${collection.id}`, "href")} class="flex-1 bg-gradient-to-r from-ios-blue to-blue-500 text-white rounded-xl py-2 px-4 font-medium hover:opacity-90 transition-opacity text-center">
查看详情
</a> </div> </div>`;
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
