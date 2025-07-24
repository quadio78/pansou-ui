# 🎯 集合管理系统完整指南

## 📋 系统概述

你现在拥有一个完整的集合管理系统，包含：
- ✅ **Keystatic CMS**: 可视化的中文管理界面
- ✅ **数据同步**: 自动将修改同步到JSON文件
- ✅ **本地运行**: 无需部署，本地使用
- ✅ **友好界面**: 中文界面，emoji图标，易于使用

## 🚀 快速开始

### 1. 启动管理系统
```bash
cd collections
npm run dev
```

### 2. 访问管理界面
打开浏览器访问: `http://localhost:4321/keystatic`

### 3. 同步数据到JSON
在Keystatic中修改数据后，运行：
```bash
npm run sync
```

## 🎮 使用流程

### 完整工作流程
1. **启动服务**: `npm run dev`
2. **打开管理界面**: 访问 `http://localhost:4321/keystatic`
3. **编辑数据**: 在可视化界面中添加/修改集合和分类
4. **同步数据**: 运行 `npm run sync` 将修改同步到JSON
5. **查看效果**: 访问 `http://localhost:4321` 查看前端效果

### 推荐的自动同步模式
```bash
npm run dev:sync
```
这个命令会同时启动开发服务器和文件监听，自动同步数据变化。

## 📁 文件结构说明

```
collections/
├── src/data/
│   ├── collections.json          # 原始JSON数据文件
│   ├── categories/               # Keystatic分类数据
│   │   ├── games.mdoc
│   │   ├── movies.mdoc
│   │   └── ...
│   └── collections/              # Keystatic集合数据
│       ├── steam-games-2024.mdoc
│       ├── action-movies-2024.mdoc
│       └── ...
├── keystatic.config.ts           # Keystatic配置文件
├── sync-to-json.js              # 数据同步脚本
└── KEYSTATIC_使用说明.md         # 详细使用说明
```

## 🛠️ 可用命令

| 命令 | 功能 |
|------|------|
| `npm run dev` | 启动开发服务器 |
| `npm run sync` | 手动同步数据到JSON |
| `npm run dev:sync` | 启动开发服务器+自动同步 |
| `npm run build` | 构建生产版本 |

## 🎯 管理功能

### 🏷️ 分类管理
- 添加/编辑/删除分类
- 设置分类图标和颜色
- 中文界面，emoji图标选择

### 📦 集合管理
- 添加/编辑/删除集合
- 管理集合的基本信息
- 添加多个资源到集合中
- 设置标签和描述

### 📋 资源管理
- 为每个集合添加多个资源
- 支持多种网盘平台
- 设置分享链接和提取密码
- 添加资源标签和描述

## 💡 使用技巧

1. **数据备份**: 定期备份 `src/data/collections.json` 文件
2. **批量操作**: 可以在Keystatic中同时编辑多个项目
3. **预览效果**: 修改后访问主页面查看实际效果
4. **自动同步**: 使用 `npm run dev:sync` 获得最佳体验

## 🔧 故障排除

### 常见问题

**Q: Keystatic界面显示英文怎么办？**
A: 配置文件已设置中文标签，如果仍显示英文，请刷新页面。

**Q: 修改后前端页面没有更新？**
A: 运行 `npm run sync` 同步数据到JSON文件。

**Q: 开发服务器启动失败？**
A: 检查端口4321是否被占用，或重新安装依赖 `npm install`。

**Q: 数据丢失了怎么办？**
A: 检查 `src/data/categories/` 和 `src/data/collections/` 目录中的.mdoc文件，运行同步脚本恢复。

### 重置数据
如果需要重置到初始状态：
```bash
rm -rf src/data/categories src/data/collections
node migrate-data.js
```

## 🎉 总结

现在你拥有了一个功能完整的集合管理系统：

✅ **易于使用**: 中文界面，可视化编辑  
✅ **功能完整**: 分类、集合、资源全面管理  
✅ **本地运行**: 无需部署，数据安全  
✅ **自动同步**: 修改后自动更新到JSON文件  
✅ **扩展性强**: 可以轻松添加新的分类和集合  

享受你的新管理系统吧！🚀