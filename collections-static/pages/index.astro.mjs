import { e as createComponent, k as renderComponent, r as renderTemplate, n as defineScriptVars, h as addAttribute, m as maybeRenderHead } from '../chunks/astro/server_CzBadtu_.mjs';
import 'kleur/colors';
import { c as collectionsData, $ as $$Layout } from '../chunks/collections_BDcKvR1P.mjs';
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const { categories, collections } = collectionsData;
  collections.sort((a, b) => new Date(b.updated) - new Date(a.updated));
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
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "\u8D44\u6E90\u96C6\u5408 - \u76D8\u641C" }, { "default": async ($$result2) => renderTemplate(_a || (_a = __template([" ", '<div class="max-w-6xl mx-auto"> <!-- \u6807\u9898\u533A\u57DF --> <div class="text-center mb-10 fade-in"> <div class="w-16 h-16 flex items-center justify-center mx-auto mb-4"> <img src="/logo.png" alt="\u76D8\u641C Logo" class="w-full h-full object-contain"> </div> <h1 class="text-4xl font-bold mb-2 bg-gradient-to-r from-ios-blue to-blue-500 bg-clip-text text-transparent">\u8D44\u6E90\u96C6\u5408</h1> <p class="text-ios-gray text-lg">\u7CBE\u5FC3\u6574\u7406\u7684\u4F18\u8D28\u8D44\u6E90\u5408\u96C6,\u9646\u7EED\u66F4\u65B0\u4E2D...</p> <div class="mt-4"> <a href="/" class="text-ios-blue hover:underline text-sm">\u2190 \u8FD4\u56DE\u641C\u7D22\u9875\u9762</a> </div> </div> <!-- \u5206\u7C7B\u5BFC\u822A --> <div class="mb-8"> <div class="flex flex-wrap gap-3 justify-center"> <button class="category-tab active" data-category="all"> <i class="fas fa-th-large mr-2"></i>\u5168\u90E8\n</button> ', ' </div> </div> <!-- \u7B5B\u9009\u548C\u6392\u5E8F --> <div class="flex flex-col md:flex-row justify-center items-center gap-4 mb-8"> <!-- \u641C\u7D22\u6846 --> <div class="ios-card p-1 search-box flex-grow w-full md:w-auto"> <div class="flex items-center"> <div class="pl-4 text-ios-gray"> <i class="fas fa-search"></i> </div> <input type="text" id="collectionSearch" placeholder="\u641C\u7D22\u96C6\u5408\u540D\u79F0\u6216\u6807\u7B7E..." class="w-full py-4 px-4 bg-transparent outline-none text-lg placeholder-ios-gray" autocomplete="off"> </div> </div> <!-- \u6392\u5E8F\u65B9\u5F0F --> <div class="ios-card p-1"> <select id="sortOrder" class="w-full md:w-auto py-4 px-4 bg-transparent outline-none text-lg text-ios-gray"> <option value="updated">\u6309\u66F4\u65B0\u65F6\u95F4</option> <option value="views">\u6309\u8BBF\u95EE\u6B21\u6570</option> <option value="created">\u6309\u521B\u5EFA\u65E5\u671F</option> </select> </div> </div> <!-- \u96C6\u5408\u5C55\u793A\u533A\u57DF --> <div id="collectionsContainer" class="grid gap-6 md:grid-cols-2 lg:grid-cols-3"> ', ' </div> <!-- \u9875\u811A --> <div class="mt-12 text-center text-ios-gray"> <p class="text-sm"> <a href="/" class="text-ios-blue hover:underline">\u8FD4\u56DE\u641C\u7D22\u9875\u9762</a> </p> </div> </div> <script>(function(){', `
        // DOM \u5143\u7D20
        const categoryTabs = document.querySelectorAll('.category-tab');
        const searchInput = document.getElementById('collectionSearch');
        const sortOrderSelect = document.getElementById('sortOrder');
        const collectionsContainer = document.getElementById('collectionsContainer');
        
        let allCollectionCards = Array.from(document.querySelectorAll('.collection-card'));

        // \u6E32\u67D3\u96C6\u5408
        function renderCollections(cards) {
            collectionsContainer.innerHTML = '';
            cards.forEach(card => {
                collectionsContainer.appendChild(card);
            });
        }

        // \u6392\u5E8F\u51FD\u6570
        function sortCollections(cards, sortBy) {
            return [...cards].sort((a, b) => {
                const aValue = a.dataset[sortBy];
                const bValue = b.dataset[sortBy];

                if (sortBy === 'views') {
                    return parseInt(bValue, 10) - parseInt(aValue, 10);
                }
                // For dates, we want descending order
                return new Date(bValue) - new Date(aValue);
            });
        }

        // \u7B5B\u9009\u548C\u6392\u5E8F\u4E3B\u51FD\u6570
        function filterAndSort() {
            const activeCategory = document.querySelector('.category-tab.active').dataset.category;
            const searchTerm = searchInput.value.toLowerCase();
            const sortBy = sortOrderSelect.value;

            // 1. \u7B5B\u9009
            let filteredCards = allCollectionCards.filter(card => {
                const cardCategory = card.dataset.category;
                const cardTags = card.dataset.tags;
                const cardTitle = card.querySelector('h3').textContent.toLowerCase();
                
                const matchesCategory = activeCategory === 'all' || cardCategory === activeCategory;
                const matchesSearch = !searchTerm || cardTitle.includes(searchTerm) || cardTags.includes(searchTerm);
                
                return matchesCategory && matchesSearch;
            });

            // 2. \u6392\u5E8F
            const sortedCards = sortCollections(filteredCards, sortBy);
            
            // 3. \u6E32\u67D3
            renderCollections(sortedCards);
        }

        // \u4E8B\u4EF6\u76D1\u542C
        categoryTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                categoryTabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
                filterAndSort();
            });
        });

        searchInput.addEventListener('input', filterAndSort);
        sortOrderSelect.addEventListener('change', filterAndSort);

        // \u83B7\u53D6\u5E76\u66F4\u65B0\u6240\u6709\u8BBF\u95EE\u6B21\u6570
        async function fetchAllViews() {
            console.log('fetchAllViews called');
            try {
                const response = await fetch('/api/get-all-views');
                console.log('API response status:', response.status);
                if (!response.ok) {
                    console.log('API response not ok');
                    return;
                }
                const views = await response.json();
                console.log('Data received from API:', views);
                
                allCollectionCards.forEach(card => {
                    const collectionId = card.dataset.id;
                    if (views[collectionId] !== undefined) {
                        const viewCountSpan = card.querySelector('.view-count');
                        if (viewCountSpan) {
                            viewCountSpan.textContent = views[collectionId];
                        }
                        // \u66F4\u65B0\u5361\u7247\u4E0A\u7684 data-views \u5C5E\u6027\u4EE5\u4FBF\u6392\u5E8F
                        card.dataset.views = views[collectionId];
                    }
                });
                // \u83B7\u53D6\u6570\u636E\u540E\u91CD\u65B0\u6392\u5E8F\u548C\u6E32\u67D3
                filterAndSort();
            } catch (error) {
                console.error('Failed to fetch all views:', error);
            }
        }

        // \u521D\u59CB\u52A0\u8F7D
        window.addEventListener('pageshow', (event) => {
            // \u6BCF\u6B21\u9875\u9762\u663E\u793A\u65F6\u90FD\u83B7\u53D6\u6700\u65B0\u6570\u636E
            fetchAllViews();
            // \u5982\u679C\u9875\u9762\u662F\u4ECE\u7F13\u5B58\u4E2D\u52A0\u8F7D\u7684\uFF0C\u6211\u4EEC\u53EF\u80FD\u9700\u8981\u91CD\u65B0\u521D\u59CB\u5316\u4E00\u4E9B\u72B6\u6001
            if (event.persisted) {
                console.log("Page was loaded from the cache.");
                // \u53EF\u4EE5\u5728\u8FD9\u91CC\u6DFB\u52A0\u9700\u8981\u91CD\u65B0\u521D\u59CB\u5316\u7684\u903B\u8F91
            }
            // \u786E\u4FDD\u7B5B\u9009\u548C\u6392\u5E8F\u5728\u6570\u636E\u66F4\u65B0\u540E\u6267\u884C
            // fetchAllViews \u5185\u90E8\u5DF2\u7ECF\u8C03\u7528\u4E86 filterAndSort
        });

        // \u9875\u9762\u521D\u6B21\u52A0\u8F7D\u65F6\uFF0C\u4E5F\u6267\u884C\u4E00\u6B21\u6392\u5E8F
        filterAndSort();
    })();<\/script>`])), maybeRenderHead(), categories.map((category) => renderTemplate`<button class="category-tab"${addAttribute(category.id, "data-category")}> <i${addAttribute(`fas ${category.icon} mr-2`, "class")}></i> ${category.name} </button>`), collections.map((collection) => {
    const category = categories.find((cat) => cat.id === collection.category);
    return renderTemplate`<div class="ios-card collection-card p-6"${addAttribute(collection.id, "data-id")}${addAttribute(collection.category, "data-category")}${addAttribute(collection.tags.join(",").toLowerCase(), "data-tags")}${addAttribute(collection.views || 0, "data-views")}${addAttribute(collection.updated, "data-updated")}${addAttribute(collection.created, "data-created")}> <!-- 集合封面 --> <div class="mb-4"> ${collection.cover ? renderTemplate`<div class="collection-cover overflow-hidden"> <img${addAttribute(collection.cover, "src")}${addAttribute(collection.title, "alt")} class="w-full h-full object-cover" onError="this.style.display='none'; this.nextElementSibling.style.display='flex';"> <div class="collection-cover flex items-center justify-center text-white text-4xl" style="display: none;"> <i${addAttribute(`fas ${category?.icon || "fa-folder"}`, "class")}></i> </div> </div>` : renderTemplate`<div class="collection-cover flex items-center justify-center text-white text-4xl"> <i${addAttribute(`fas ${category?.icon || "fa-folder"}`, "class")}></i> </div>`} </div> <!-- 集合信息 --> <div class="mb-4"> <div class="flex items-center justify-between mb-2"> <h3 class="text-xl font-semibold text-ios-dark line-clamp-2">${collection.title}</h3> <span${addAttribute(`platform-icon ${category?.color || "bg-gray-500"} text-xs px-2 py-1 rounded-full`, "class")}> <i${addAttribute(`fas ${category?.icon || "fa-folder"}`, "class")}></i> </span> </div> <p class="text-ios-gray text-sm mb-3 line-clamp-2">${collection.description}</p> <!-- 标签 --> <div class="flex flex-wrap gap-1 mb-3"> ${collection.tags.slice(0, 3).map((tag) => renderTemplate`<span class="platform-tag text-xs">${tag}</span>`)} ${collection.tags.length > 3 && renderTemplate`<span class="platform-tag text-xs">+${collection.tags.length - 3}</span>`} </div> <!-- 统计信息 --> <div class="flex items-center justify-between text-sm text-ios-gray"> <span> <i class="fas fa-file-alt mr-1"></i> ${collection.resourceCount} 个资源
</span> <span> <i class="fas fa-eye mr-1"></i> <span class="view-count">${collection.views || 0}</span> 次访问
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
