import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 读取所有分类
function getAllCategories() {
  const categoriesDir = path.join(__dirname, 'src/data/categories');
  const categories = [];
  
  if (!fs.existsSync(categoriesDir)) {
    return [];
  }
  
  const files = fs.readdirSync(categoriesDir).filter(file => file.endsWith('.mdoc'));
  
  for (const file of files) {
    const filePath = path.join(categoriesDir, file);
    const content = fs.readFileSync(filePath, 'utf8');
    
    // 解析frontmatter
    const frontmatterMatch = content.match(/^---\s*\n([\s\S]*?)\n---/);
    if (frontmatterMatch) {
      const frontmatter = frontmatterMatch[1];
      const idMatch = frontmatter.match(/id:\s*(.+)/);
      const nameMatch = frontmatter.match(/name:\s*(.+)/);
      
      if (idMatch && nameMatch) {
        const id = idMatch[1].trim();
        const name = nameMatch[1].trim();
        
        // 根据分类ID添加合适的emoji
        const emojiMap = {
          'games': '🎮',
          'movies': '🎬',
          'music': '🎵',
          'study': '📚',
          'episodes': '📺',
          'episodes-2025': '📺',
          'software': '💻',
          'books': '📖',
          'anime': '🎌'
        };
        
        const emoji = emojiMap[id] || '📁';
        categories.push({
          id,
          name,
          label: `${emoji} ${name}`,
          value: id
        });
      }
    }
  }
  
  return categories;
}

// 更新keystatic配置文件
function updateKestaticConfig() {
  console.log('🔄 正在更新Keystatic配置文件...');
  
  const categories = getAllCategories();
  const configPath = path.join(__dirname, 'keystatic.config.ts');
  
  if (!fs.existsSync(configPath)) {
    console.error('❌ keystatic.config.ts 文件不存在');
    return;
  }
  
  let configContent = fs.readFileSync(configPath, 'utf8');
  
  // 生成新的分类选项
  const categoryOptions = categories.map(cat => 
    `            { label: '${cat.label}', value: '${cat.value}' },`
  ).join('\n');
  
  // 替换分类选项
  const categorySelectRegex = /(category: fields\.select\(\{\s*label: '所属分类',\s*options: \[)([\s\S]*?)(\s*\],\s*defaultValue: 'games'\s*\}\),)/;
  
  const newCategorySelect = `$1
${categoryOptions}
$3`;
  
  if (categorySelectRegex.test(configContent)) {
    configContent = configContent.replace(categorySelectRegex, newCategorySelect);
    fs.writeFileSync(configPath, configContent);
    
    console.log('✅ Keystatic配置文件已更新');
    console.log(`📊 发现 ${categories.length} 个分类:`);
    categories.forEach(cat => {
      console.log(`  ${cat.label} (${cat.value})`);
    });
  } else {
    console.error('❌ 无法找到分类选项配置');
  }
}

// 执行更新
updateKestaticConfig();