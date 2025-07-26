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

1. 修改页面组件后需要重新构建项目才能看到效果
2. 所有静态资源最终都生成到 `collections-static/` 目录