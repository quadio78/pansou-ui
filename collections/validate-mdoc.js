import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 验证.mdoc文件格式
function validateMdocFiles() {
    const collectionsDir = path.join(__dirname, 'src/data/collections');
    const categoriesDir = path.join(__dirname, 'src/data/categories');
    
    console.log('🔍 开始验证.mdoc文件格式...');
    
    let hasErrors = false;
    
    // 验证集合文件
    console.log('\n📦 验证集合文件:');
    const collectionFiles = fs.readdirSync(collectionsDir).filter(file => file.endsWith('.mdoc'));
    
    for (const file of collectionFiles) {
        const filePath = path.join(collectionsDir, file);
        try {
            const content = fs.readFileSync(filePath, 'utf8');
            const parts = content.split('---');
            
            if (parts.length < 3) {
                console.log(`❌ ${file}: 格式错误，缺少YAML frontmatter`);
                hasErrors = true;
                continue;
            }
            
            const yamlContent = parts[1].trim();
            const data = yaml.load(yamlContent);
            
            // 验证必需字段
            const requiredFields = ['id', 'title', 'category', 'tags', 'resources'];
            for (const field of requiredFields) {
                if (!data.hasOwnProperty(field)) {
                    console.log(`❌ ${file}: 缺少必需字段 "${field}"`);
                    hasErrors = true;
                }
            }
            
            // 验证tags字段
            if (data.tags && !Array.isArray(data.tags)) {
                console.log(`❌ ${file}: tags字段必须是数组`);
                hasErrors = true;
            }
            
            // 验证resources字段
            if (data.resources && !Array.isArray(data.resources)) {
                console.log(`❌ ${file}: resources字段必须是数组`);
                hasErrors = true;
            }
            
            // 验证每个resource的tags字段
            if (data.resources && Array.isArray(data.resources)) {
                for (let i = 0; i < data.resources.length; i++) {
                    const resource = data.resources[i];
                    if (resource.tags && !Array.isArray(resource.tags)) {
                        console.log(`❌ ${file}: resources[${i}].tags字段必须是数组`);
                        hasErrors = true;
                    }
                }
            }
            
            if (!hasErrors) {
                console.log(`✅ ${file}: 格式正确`);
            }
            
        } catch (error) {
            console.log(`❌ ${file}: YAML解析错误 - ${error.message}`);
            hasErrors = true;
        }
    }
    
    // 验证分类文件
    console.log('\n🏷️ 验证分类文件:');
    const categoryFiles = fs.readdirSync(categoriesDir).filter(file => file.endsWith('.mdoc'));
    
    for (const file of categoryFiles) {
        const filePath = path.join(categoriesDir, file);
        try {
            const content = fs.readFileSync(filePath, 'utf8');
            const parts = content.split('---');
            
            if (parts.length < 3) {
                console.log(`❌ ${file}: 格式错误，缺少YAML frontmatter`);
                hasErrors = true;
                continue;
            }
            
            const yamlContent = parts[1].trim();
            const data = yaml.load(yamlContent);
            
            // 验证必需字段
            const requiredFields = ['id', 'name', 'icon', 'color'];
            for (const field of requiredFields) {
                if (!data.hasOwnProperty(field)) {
                    console.log(`❌ ${file}: 缺少必需字段 "${field}"`);
                    hasErrors = true;
                }
            }
            
            if (!hasErrors) {
                console.log(`✅ ${file}: 格式正确`);
            }
            
        } catch (error) {
            console.log(`❌ ${file}: YAML解析错误 - ${error.message}`);
            hasErrors = true;
        }
    }
    
    if (hasErrors) {
        console.log('\n❌ 发现格式错误，请修复后重试');
        process.exit(1);
    } else {
        console.log('\n✅ 所有.mdoc文件格式正确！');
    }
}

validateMdocFiles();