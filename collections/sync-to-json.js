import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 解析 YAML frontmatter
function parseFrontmatter(content) {
  // 标准化换行符，处理Windows的\r\n
  const normalizedContent = content.replace(/\r\n/g, '\n').replace(/\r/g, '\n');
  
  // 更宽松的frontmatter正则表达式
  const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n?([\s\S]*)$/;
  const match = normalizedContent.match(frontmatterRegex);
  
  if (!match) {
    console.log('未找到frontmatter，内容开头:', normalizedContent.substring(0, 100));
    return { frontmatter: {}, content: normalizedContent };
  }
  
  const yamlContent = match[1];
  const bodyContent = match[2].trim();
  
  try {
    const frontmatter = yaml.load(yamlContent) || {};
    return { frontmatter, content: bodyContent };
  } catch (error) {
    console.error('YAML解析错误:', error);
    console.error('YAML内容:', yamlContent);
    return { frontmatter: {}, content: bodyContent };
  }
}

// 读取分类数据
function readCategories() {
  const categoriesDir = path.join(__dirname, 'src/data/categories');
  const categories = [];
  
  if (!fs.existsSync(categoriesDir)) {
    return [];
  }
  
  const files = fs.readdirSync(categoriesDir).filter(file => file.endsWith('.mdoc'));
  
  for (const file of files) {
    const filePath = path.join(categoriesDir, file);
    const content = fs.readFileSync(filePath, 'utf8');
    const { frontmatter } = parseFrontmatter(content);
    
    categories.push({
      id: frontmatter.id || path.basename(file, '.mdoc'),
      name: frontmatter.name || '',
      icon: frontmatter.icon || 'fa-folder',
      color: frontmatter.color || 'bg-blue-500'
    });
  }
  
  return categories;
}

// 读取集合数据
function readCollections() {
  const collectionsDir = path.join(__dirname, 'src/data/collections');
  const collections = [];
  
  if (!fs.existsSync(collectionsDir)) {
    return [];
  }
  
  const files = fs.readdirSync(collectionsDir).filter(file => file.endsWith('.mdoc'));
  
  for (const file of files) {
    const filePath = path.join(collectionsDir, file);
    const content = fs.readFileSync(filePath, 'utf8');
    const { frontmatter, content: description } = parseFrontmatter(content);
    
    // 处理资源数据，确保格式正确
    const resources = (frontmatter.resources || []).map(resource => ({
      name: resource.name || '',
      platform: resource.platform || 'others',
      link: resource.link || '',
      password: resource.password || '',
      size: resource.size || '',
      tags: Array.isArray(resource.tags) ? resource.tags : [],
      description: resource.description || ''
    }));
    
    const collection = {
      id: frontmatter.id || path.basename(file, '.mdoc'),
      title: frontmatter.title || '',
      category: frontmatter.category || 'games',
      description: description || frontmatter.description || '',
      cover: frontmatter.cover || '',
      tags: Array.isArray(frontmatter.tags) ? frontmatter.tags : [],
      created: frontmatter.created || new Date().toISOString().split('T')[0],
      updated: frontmatter.updated || new Date().toISOString().split('T')[0],
      resourceCount: resources.length,
      resources: resources
    };
    
    collections.push(collection);
  }
  
  return collections;
}

// 同步数据到JSON文件
function syncToJson() {
  console.log('🔄 开始同步Keystatic数据到JSON文件...');
  
  try {
    const categories = readCategories();
    const collections = readCollections();
    
    const jsonData = {
      categories,
      collections
    };
    
    const jsonPath = path.join(__dirname, 'src/data/collections.json');
    fs.writeFileSync(jsonPath, JSON.stringify(jsonData, null, 2));
    
    console.log(`✅ 同步完成！`);
    console.log(`📊 分类数量: ${categories.length}`);
    console.log(`📦 集合数量: ${collections.length}`);
    console.log(`💾 数据已保存到: ${jsonPath}`);
    
    // 显示集合详情
    collections.forEach(collection => {
      console.log(`  📦 ${collection.title}: ${collection.resourceCount} 个资源`);
    });
    
  } catch (error) {
    console.error('❌ 同步失败:', error);
    process.exit(1);
  }
}

// 执行同步
syncToJson();