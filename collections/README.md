# 盘搜资源集合页面

这是盘搜项目的资源集合页面，使用 Astro 构建，展示精心整理的各类资源合集。

## 功能特性

- 🎮 **多分类展示**: 游戏、电影、软件、音乐、学习资料等分类
- 🔍 **搜索功能**: 支持按集合名称和标签搜索
- 📱 **响应式设计**: 完美适配桌面端和移动端
- 🎨 **iOS风格UI**: 与主站保持一致的设计风格
- ⚡ **快速加载**: 基于Astro的静态生成，加载速度极快
- 📋 **详情展示**: 点击查看集合详情，支持一键复制链接和密码

## 项目结构

```
collections/
├── src/
│   ├── data/
│   │   └── collections.json    # 集合数据文件
│   ├── layouts/
│   │   └── Layout.astro        # 布局组件
│   ├── pages/
│   │   └── index.astro         # 主页面
│   └── styles/
│       └── global.css          # 全局样式
├── public/
│   └── logo.png               # Logo文件
└── package.json
```

## 本地开发

1. 安装依赖：
```bash
npm install
```

2. 启动开发服务器：
```bash
npm run dev
```

3. 访问 `http://localhost:4321` 查看页面

## 内容管理

### 添加新集合

编辑 `src/data/collections.json` 文件，在 `collections` 数组中添加新的集合对象：

```json
{
  "id": "new-collection",
  "title": "新集合标题",
  "category": "games",
  "description": "集合描述",
  "cover": "/images/cover.jpg",
  "tags": ["标签1", "标签2"],
  "created": "2024-01-01",
  "updated": "2024-01-01",
  "resourceCount": 10,
  "resources": [
    {
      "name": "资源名称",
      "platform": "baidu",
      "link": "https://pan.baidu.com/s/xxx",
      "password": "1234",
      "size": "1GB",
      "tags": ["标签"],
      "description": "资源描述"
    }
  ]
}
```

### 支持的网盘平台

- `baidu`: 百度网盘
- `aliyun`: 阿里云盘
- `115`: 115网盘
- `quark`: 夸克网盘
- `tianyi`: 天翼云盘
- `xunlei`: 迅雷云盘
- `mobile`: 移动云盘
- `uc`: UC网盘
- `123`: 123网盘
- `others`: 其他网盘

### 添加新分类

在 `collections.json` 的 `categories` 数组中添加新分类：

```json
{
  "id": "category-id",
  "name": "分类名称",
  "icon": "fa-icon-name",
  "color": "bg-color-class"
}
```

## 部署

### Vercel 部署

1. 将项目推送到 GitHub
2. 在 Vercel 中导入项目
3. 选择 Astro 框架
4. 部署完成

### 手动构建

```bash
npm run build
```

构建产物在 `dist/` 目录中。

## 与主站集成

1. 将构建后的文件部署到 `/collections/` 路径下
2. 主站已添加导航链接，用户可以直接访问集合页面
3. 集合页面提供返回主站的链接

## 技术栈

- **Astro**: 现代静态站点生成器
- **Tailwind CSS**: 原子化CSS框架
- **Font Awesome**: 图标库
- **Inter字体**: 现代化字体

## 自定义样式

所有样式定义在 `src/styles/global.css` 中，包括：
- iOS风格的卡片设计
- 渐变背景
- 动画效果
- 响应式布局

## 注意事项

1. 修改 `collections.json` 后需要重新构建项目
2. 图片资源放在 `public/` 目录下
3. 保持与主站的设计风格一致
4. 定期更新资源链接的有效性

## 许可证

与主项目保持一致
