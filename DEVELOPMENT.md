# 盘搜项目开发文档

## 项目概述

盘搜是一个资源集合网站，主要功能是展示和管理各种网盘资源。项目采用 Astro 框架构建，并通过自定义构建脚本生成静态文件。

## 项目结构

```
pansou-ui/
├── collections/                 # 资源集合管理模块
│   ├── src/                    # Astro 源代码
│   │   ├── pages/             # 页面组件
│   │   ├── components/        # 组件
│   │   ├── layouts/           # 布局组件
│   │   ├── data/              # 数据文件
│   │   └── styles/            # 样式文件
│   ├── public/                # 静态资源
│   ├── dist/                  # 构建输出目录
│   └── collections-static/    # 最终静态文件目录
├── api/                       # 后端 API 接口
├── lib/                       # 公共库文件
└── mgck2/                     # 敏感词库
```

## 核心功能模块

### 1. 资源集合展示

资源集合展示是项目的核心功能，主要包括：

- 集合列表页面 (`collections/src/pages/index.astro`)
- 单个集合详情页面 (`collections/src/pages/collection.astro`)

### 2. 构建系统

项目使用自定义构建脚本 (`collections/build-script.js`) 来生成静态文件，而不是直接使用 Astro 的构建输出。

#### 构建流程：

1. 运行 `npm run build` 在 `collections` 目录
2. Astro 构建生成 `collections/dist/` 目录
3. `build-script.js` 脚本处理并生成最终静态文件到 `collections-static/` 目录

#### 关键构建函数：

- `generateStaticCollectionsHtml()`: 生成集合列表页面
- `generateStaticCollectionHtml()`: 生成单个集合详情页面

## 关键技术实现

### 2. 数据管理

资源数据存储在 `collections/src/data/` 目录中，采用 JSON 格式：

- `collections.json`: 包含所有集合和分类信息
- `categories/`: 分类定义文件
- `collections/`: 各个集合的详细信息文件

## 开发和部署流程

### 1. 开发环境

1. 安装依赖：`npm install` (在 `collections` 目录)
2. 启动开发服务器：`npm run dev` (在 `collections` 目录)

### 2. 构建和部署

1. 构建项目：`npm run build` (在 `collections` 目录)
2. 启动本地测试：`vercel dev` (在根目录)
3. 部署到生产环境：使用 Vercel 部署

## 注意事项

1.  修改页面组件后需要重新构建项目才能看到效果。
2.  所有静态资源最终都生成到 `collections-static/` 目录。
3.  **【重要】** 本项目使用自定义构建脚本 `collections/build-script.js` 来生成部分核心页面的**最终静态文件**，例如**单个集合详情页** (`collection.html`) 和**集合列表页** (`collections.html`)。
    -   **生产构建 (`npm run build`)**: 最终的 `collections-static/*.html` 文件内容由 `build-script.js` 中的 HTML 生成函数（如 `generateStaticCollectionHtml`）决定。因此，对这些页面的最终修改**必须在 `build-script.js` 中完成**。
    -   **开发环境 (`npm run dev`)**: 开发服务器直接使用 `.astro` 文件（如 `src/pages/collection.astro`）来实时渲染页面。
    -   **开发流程建议**: 为了确保开发环境和最终构建的一致性，当修改这些页面时，**建议同时修改对应的 `.astro` 文件和 `build-script.js` 中的 HTML 生成逻辑**。这样可以保证在 `dev` 模式下实时预览效果，同时确保 `build` 后的生产文件也包含了这些更改。

---

### 链接规范

为了确保全站链接行为的一致性和安全性，所有指向外部资源的“立即查看”链接，必须遵循以下 `<a>` 标签结构：

```html
<a href="${resource.link}" target="_blank" rel="noreferrer" class="text-blue-600 hover:underline text-sm">
    <i class="fas fa-external-link-alt mr-1"></i>立即查看
</a>
```

**关键属性说明:**
-   `href`: 必须直接指向资源的原始链接 (`resource.link`)。
-   `target="_blank"`: 确保链接在新标签页中打开。
-   `rel="noreferrer"`: 出于安全考虑，阻止新打开的页面通过 `window.opener` 访问原始页面。

**注意：** 严禁使用 JavaScript (`window.open`) 或中间页 (`go.html`) 来处理外部链接跳转。所有跳转必须通过标准的 `<a>` 标签完成。

---

## 首页 (index.html)

首页是项目的主要用户入口，提供核心的网盘资源搜索功能。它是一个独立的、功能丰富的单页面应用。

### 核心交互元素

-   `searchInput`: 用户输入搜索关键词的文本框。
-   `searchButton`: 触发搜索操作的按钮。
-   `resetButton`: 清空搜索框并重置页面的按钮，仅在输入框有内容时显示。
-   `searchModeContainer`: 搜索模式切换控件，允许用户在“快速搜索”和“深度搜索”之间选择。

### 搜索模式

提供两种搜索模式，以平衡速度和资源覆盖面：

1.  **深度搜索 (默认)**: 使用所有可用插件 (`pansearch`, `qupansou`, `panta`, `pan666`, `hunhepan`, `jikepan`)，资源更全但耗时更长。
2.  **快速搜索**: 使用 `pansearch` 和 `pan666` 插件，响应速度快。

用户的选择会通过 `localStorage.setItem('searchMode', mode)` 被缓存在本地，下次访问时会自动恢复。

### 内容区域

-   **分类/热搜 Tabs**: 页面加载时，默认显示“热搜”内容，通过 `/api/hot-searches` 接口获取。用户可以点击不同的分类 Tab（如“电影”、“游戏”）来查看预设的热门搜索词。
-   **结果展示**: 搜索结果会按网盘平台（如“阿里云盘”、“百度网盘”）分组展示。提供排序和按平台筛选的功能。

---

## 缓存与更新机制 (sw.js)

本项目使用 **Service Worker** (`sw.js`) 来实现静态资源的缓存，以提升页面加载速度和实现离线访问能力。

### 缓存策略

采用 **“缓存优先 (Cache First)”** 策略。这意味着一旦核心资源（如 `index.html`, `logo.png` 等）被缓存，浏览器将**始终**从本地缓存加载，而不会向服务器请求新版本。

### **【极其重要】如何强制更新线上内容**

由于采用“缓存优先”策略，直接修改 `index.html` 并上传到服务器**不会**让现有用户看到更新。

**强制所有用户更新到最新版本的唯一方法是：**

1.  打开 `sw.js` 文件。
2.  修改文件第一行的 `CACHE_NAME` 常量，将其版本号加一。
    ```javascript
    // 例如，从 v3 更新到 v4
    const CACHE_NAME = 'pansou-cache-v4'; 
    ```
3.  将修改后的 `sw.js` 文件和您更新过的其他文件（如 `index.html`）一同部署到服务器。

当用户的浏览器检测到 `sw.js` 文件本身发生了变化，它会自动下载并安装新的 Service Worker，并根据 `activate` 事件中的逻辑，删除所有使用旧版本号的缓存，然后重新缓存新文件。