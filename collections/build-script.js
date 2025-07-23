import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 复制构建文件到 collections-static 目录
const distDir = path.join(__dirname, 'dist');
const targetDir = path.join(__dirname, '..', 'collections-static');

// 确保目标目录存在
if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
}

// 复制 index.html 并重命名为 collections.html
const indexPath = path.join(distDir, 'index.html');
const collectionsPath = path.join(targetDir, 'collections.html');

if (fs.existsSync(indexPath)) {
    let content = fs.readFileSync(indexPath, 'utf8');
    
    // 修复 CSS 和资源路径
    content = content.replace(/href="\/_astro\//g, 'href="/collections-static/_astro/');
    content = content.replace(/src="\/_astro\//g, 'src="/collections-static/_astro/');
    content = content.replace(/href="\/logo\.png"/g, 'href="/collections-static/logo.png"');
    content = content.replace(/src="\/logo\.png"/g, 'src="/collections-static/logo.png"');
    content = content.replace(/href="\/images\//g, 'href="/collections-static/images/');
    content = content.replace(/src="\/images\//g, 'src="/collections-static/images/');
    
    fs.writeFileSync(collectionsPath, content);
    console.log('✓ collections.html 已生成');
}

// 复制 _astro 目录
const astroSrcDir = path.join(distDir, '_astro');
const astroTargetDir = path.join(targetDir, '_astro');

if (fs.existsSync(astroSrcDir)) {
    try {
        // 删除旧的 _astro 目录
        if (fs.existsSync(astroTargetDir)) {
            fs.rmSync(astroTargetDir, { recursive: true, force: true });
        }
        
        // 复制新的 _astro 目录
        fs.cpSync(astroSrcDir, astroTargetDir, { recursive: true });
        console.log('✓ _astro 资源已复制');
    } catch (error) {
        console.log('警告：_astro 目录复制失败，可能是文件被占用');
        console.log('请手动复制 collections/dist/_astro 到 collections-static/_astro');
    }
}

// 复制 logo.png
const logoSrc = path.join(distDir, 'logo.png');
const logoTarget = path.join(targetDir, 'logo.png');

if (fs.existsSync(logoSrc)) {
    fs.copyFileSync(logoSrc, logoTarget);
    console.log('✓ logo.png 已复制');
}

// 复制 images 目录
const imagesSrcDir = path.join(distDir, 'images');
const imagesTargetDir = path.join(targetDir, 'images');

if (fs.existsSync(imagesSrcDir)) {
    try {
        // 删除旧的 images 目录
        if (fs.existsSync(imagesTargetDir)) {
            fs.rmSync(imagesTargetDir, { recursive: true, force: true });
        }
        
        // 复制新的 images 目录
        fs.cpSync(imagesSrcDir, imagesTargetDir, { recursive: true });
        console.log('✓ images 目录已复制');
    } catch (error) {
        console.log('警告：images 目录复制失败');
    }
}

console.log('🎉 构建完成！');