import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const collectionsDataPath = path.join(__dirname, 'src/data/collections.json');
const collectionsData = JSON.parse(fs.readFileSync(collectionsDataPath, 'utf8'));
const { collections } = collectionsData;

const targetDir = path.join(__dirname, '..');
const sitemapPath = path.join(targetDir, 'sitemap.xml');

const domain = 'https://pansou.jkai.de';

const urls = [
    { loc: `${domain}/`, changefreq: 'daily', priority: '1.0' },
    { loc: `${domain}/collections-static/collections.html`, changefreq: 'daily', priority: '0.9' }
];

collections.forEach(collection => {
    urls.push({
        loc: `${domain}/collections-static/${collection.id}.html`,
        lastmod: new Date(collection.updated).toISOString().split('T')[0],
        changefreq: 'weekly',
        priority: '0.8'
    });
});

const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls.map(url => `
    <url>
        <loc>${url.loc}</loc>
        ${url.lastmod ? `<lastmod>${url.lastmod}</lastmod>` : ''}
        <changefreq>${url.changefreq}</changefreq>
        <priority>${url.priority}</priority>
    </url>`).join('')}
</urlset>`;

fs.writeFileSync(sitemapPath, sitemapContent.trim());

console.log(`✓ sitemap.xml 已生成到 ${sitemapPath}`);