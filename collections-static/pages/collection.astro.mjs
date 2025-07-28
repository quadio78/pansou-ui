import { e as createComponent, f as createAstro, k as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute, l as renderScript } from '../chunks/astro/server_CzBadtu_.mjs';
import 'kleur/colors';
import { c as collectionsData, $ as $$Layout } from '../chunks/collections_BW-dVHrS.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Collection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Collection;
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
  const id = Astro2.url.searchParams.get("id");
  if (!id) {
    return new Response("Collection ID not provided", { status: 400 });
  }
  const collection = collections.find((c) => c.id === id);
  if (!collection) {
    return new Response("Collection not found", { status: 404 });
  }
  const category = categories.find((cat) => cat.id === collection.category);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `${collection.title} - \u8D44\u6E90\u96C6\u5408 - \u76D8\u641C`, "description": collection.description, "keywords": `${collection.title},${collection.tags.join(",")},${collection.resources.map((r) => r.name).join(",")}` }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-6xl mx-auto"> <!-- 标题区域 --> <div class="text-center mb-6 fade-in"> <div class="w-12 h-12 flex items-center justify-center mx-auto mb-4"> <img src="/logo.png" alt="盘搜 Logo" class="w-full h-full object-contain"> </div> <h1 class="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-ios-blue to-blue-500 bg-clip-text text-transparent">资源集合</h1> <p class="text-ios-gray text-base md:text-lg">精心整理的优质资源合集,陆续更新中...</p> <div class="mt-4"> <a href="/collections" class="text-ios-blue hover:underline text-sm">← 返回资源集合页面</a> </div> </div> <!-- 集合详情 --> <div class="ios-card p-8 mb-8 fade-in hidden md:block"> <div class="max-w-4xl mx-auto"> <!-- 集合封面 --> <div class="mb-8"> <div class="relative overflow-hidden rounded-2xl shadow-xl transform transition-transform hover:scale-105 duration-300"> ${collection.cover ? renderTemplate`<div class="relative h-48 md:h-96"> <img${addAttribute(collection.cover, "src")}${addAttribute(collection.title, "alt")} class="w-full h-full object-cover" onError="this.classList.add('img-hidden'); this.parentElement.querySelector('.img-placeholder').classList.add('img-error');"> <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div> <div class="absolute bottom-6 left-6 right-6 text-white img-placeholder"> <h2 class="text-2xl font-bold mb-2">${collection.title}</h2> <p class="text-lg opacity-90">${collection.description}</p> </div> </div>` : renderTemplate`<div class="h-80 md:h-96 flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600"> <div class="text-center text-white"> <i${addAttribute(`fas ${category?.icon || "fa-folder"} text-6xl mb-4`, "class")}></i> <h2 class="text-3xl font-bold">${collection.title}</h2> </div> </div>`} <div class="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-700 flex items-center justify-center img-placeholder"> <i${addAttribute(`fas ${category?.icon || "fa-folder"} text-6xl text-white`, "class")}></i> </div> </div> </div> <!-- 集合信息 --> <div class="text-center mb-8 fade-in"> <div class="flex flex-wrap items-center justify-center gap-3 mb-4"> <h2 class="text-3xl md:text-4xl font-bold text-ios-dark">${collection.title}</h2> <span${addAttribute(`flex items-center ${category?.color || "bg-gray-500"} text-sm px-4 py-2 rounded-full shadow-md`, "class")}> <i${addAttribute(`fas ${category?.icon || "fa-folder"} mr-2`, "class")}></i> ${category?.name || "\u672A\u77E5\u5206\u7C7B"} </span> </div> <p class="text-ios-gray text-lg md:text-xl max-w-3xl mx-auto mb-6 leading-relaxed">${collection.description}</p> <!-- 标签 --> <div class="flex flex-wrap justify-center gap-3 mb-6"> ${collection.tags.map((tag, index) => renderTemplate`<span${addAttribute(index, "key")}${addAttribute(`platform-tag text-sm px-4 py-2 rounded-full shadow-sm fade-in delay-${index % 5 + 1}`, "class")}> ${tag} </span>`)} </div> <!-- 统计信息 --> <div class="flex flex-wrap items-center justify-center gap-6 text-ios-gray bg-gray-50 rounded-2xl p-4 max-w-2xl mx-auto"> <div class="flex items-center"> <i class="fas fa-file-alt text-blue-500 mr-2 text-xl"></i> <span class="font-semibold text-lg">${collection.resourceCount} 个资源</span> </div> <div class="flex items-center"> <i class="fas fa-clock text-green-500 mr-2 text-xl"></i> <span class="font-semibold text-lg">更新于 ${new Date(collection.updated).toLocaleDateString("zh-CN")}</span> </div> <div class="flex items-center"> <i class="fas fa-eye text-purple-500 mr-2 text-xl"></i> <span class="font-semibold text-lg" id="view-count">${collection.views || 0}</span> 次访问
</div> </div> </div> </div> </div> <!-- 资源列表 --> <div class="mb-12 fade-in"> <div class="max-w-4xl mx-auto"> <h3 class="text-3xl font-bold text-ios-dark mb-8 text-center relative"> <span class="relative z-10 px-4 bg-white">资源列表</span> <div class="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div> </h3> <div class="space-y-6"> ${collection.resources.map((resource, index) => {
    const platform = platformMap[resource.platform] || platformMap.others;
    return renderTemplate`<div${addAttribute(index, "key")}${addAttribute(`ios-card p-4 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 fade-in delay-${index % 5 + 1}`, "class")}> <div class="flex flex-col md:flex-row gap-6"> <div${addAttribute(`platform-icon ${platform.color} flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center shadow-md`, "class")}> <i${addAttribute(`fas ${platform.icon} text-2xl`, "class")}></i> </div> <div class="flex-1"> <h4 class="font-bold text-ios-dark mb-2 text-xl">${resource.name}</h4> <p class="text-ios-gray mb-4 leading-relaxed">${resource.description || ""}</p> <div class="flex flex-wrap gap-2 mb-4"> <span class="platform-tag px-2 py-0.5 rounded-full">${platform.name}</span> ${resource.size && renderTemplate`<span class="platform-tag px-2 py-0.5 rounded-full">${resource.size}</span>`} ${resource.tags.map((tag, tagIndex) => renderTemplate`<span${addAttribute(tagIndex, "key")} class="platform-tag px-2 py-0.5 rounded-full">${tag}</span>`)} </div> <div class="flex flex-wrap gap-2"> <button class="text-white bg-blue-500 hover:bg-blue-600 px-3 py-1.5 rounded-lg flex items-center transition-colors duration-200 copy-link-btn"${addAttribute(resource.link, "data-link")}> <i class="fas fa-copy mr-2"></i>复制链接
</button> <a${addAttribute(resource.link, "href")} target="_blank" rel="noopener noreferrer" class="text-white bg-green-500 hover:bg-green-600 px-3 py-1.5 rounded-lg flex items-center transition-colors duration-200"> <i class="fas fa-external-link-alt mr-2"></i>立即查看
</a> ${resource.password && renderTemplate`<button class="text-white bg-purple-500 hover:bg-purple-600 px-3 py-1.5 rounded-lg flex items-center transition-colors duration-200 copy-password-btn"${addAttribute(resource.password, "data-password")}> <i class="fas fa-key mr-2"></i>复制密码
</button>`} </div> </div> </div> </div>`;
  })} </div> </div> </div> <!-- 页脚 --> <div class="mt-12 text-center text-ios-gray"> <p class="text-sm"> <a href="/collections" class="text-ios-blue hover:underline">← 返回资源集合页面</a> </p> </div> </div> ${renderScript($$result2, "D:/vhost/pansou/collections/src/pages/collection.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "D:/vhost/pansou/collections/src/pages/collection.astro", void 0);

const $$file = "D:/vhost/pansou/collections/src/pages/collection.astro";
const $$url = "/collection";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Collection,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
