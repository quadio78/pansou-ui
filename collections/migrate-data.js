import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 读取现有的collections.json数据
const collectionsData = JSON.parse(
  fs.readFileSync(path.join(__dirname, 'src/data/collections.json'), 'utf8')
);

// 创建分类文件
function createCategoryFiles() {
  const categoriesDir = path.join(__dirname, 'src/data/categories');
  
  collectionsData.categories.forEach(category => {
    const categoryContent = `---
id: ${category.id}
name: ${category.name}
icon: ${category.icon}
color: ${category.color}
---

${category.name}的相关资源集合
`;
    
    fs.writeFileSync(
      path.join(categoriesDir, `${category.id}.mdoc`),
      categoryContent
    );
  });
  
  console.log(`✅ 已创建 ${collectionsData.categories.length} 个分类文件`);
}

// 创建集合文件
function createCollectionFiles() {
  const collectionsDir = path.join(__dirname, 'src/data/collections');
  
  collectionsData.collections.forEach(collection => {
    const frontmatter = {
      id: collection.id,
      title: collection.title,
      category: collection.category,
      cover: collection.cover || '',
      tags: collection.tags,
      created: collection.created,
      updated: collection.updated,
      resources: collection.resources.map(resource => ({
        name: resource.name,
        platform: resource.platform,
        link: resource.link,
        password: resource.password || '',
        size: resource.size || '',
        tags: resource.tags || [],
        description: resource.description || ''
      }))
    };
    
    const yamlFrontmatter = `---
id: ${frontmatter.id}
title: ${frontmatter.title}
category: ${frontmatter.category}
cover: ${frontmatter.cover}
tags:
${frontmatter.tags.map(tag => `  - ${tag}`).join('\n')}
created: ${frontmatter.created}
updated: ${frontmatter.updated}
resources:
${frontmatter.resources.map(resource => `  - name: ${resource.name}
    platform: ${resource.platform}
    link: ${resource.link}
    password: ${resource.password}
    size: ${resource.size}
    tags:
${resource.tags.map(tag => `      - ${tag}`).join('\n')}
    description: ${resource.description}`).join('\n')}
---

${collection.description}
`;
    
    fs.writeFileSync(
      path.join(collectionsDir, `${collection.id}.mdoc`),
      yamlFrontmatter
    );
  });
  
  console.log(`✅ 已创建 ${collectionsData.collections.length} 个集合文件`);
}

// 执行迁移
console.log('🚀 开始数据迁移...');
createCategoryFiles();
createCollectionFiles();
console.log('✨ 数据迁移完成！');
console.log('\n📝 接下来的步骤：');
console.log('1. 运行 npm run dev 启动开发服务器');
console.log('2. 访问 http://localhost:4321/keystatic 进入管理界面');
console.log('3. 现在你可以通过可视化界面管理你的集合数据了！');