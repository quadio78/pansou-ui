#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import chokidar from 'chokidar';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🚀 启动自动同步监听器...');

// 监听的目录
const categoriesDir = path.join(__dirname, 'src/data/categories');
const collectionsDir = path.join(__dirname, 'src/data/collections');

// 创建监听器
const watcher = chokidar.watch([categoriesDir, collectionsDir], {
  ignored: /(^|[\/\\])\../, // 忽略隐藏文件
  persistent: true,
  ignoreInitial: true // 忽略初始扫描
});

let syncTimeout;

// 防抖函数，避免频繁同步
function debouncedSync() {
  clearTimeout(syncTimeout);
  syncTimeout = setTimeout(() => {
    console.log('🔄 检测到文件变化，开始自动同步...');
    try {
      execSync('node sync-to-json.js', { 
        stdio: 'inherit',
        cwd: __dirname 
      });
      console.log('✅ 自动同步完成！');
    } catch (error) {
      console.error('❌ 自动同步失败:', error.message);
    }
  }, 1000); // 1秒延迟，避免频繁触发
}

// 监听文件变化
watcher
  .on('add', (filePath) => {
    if (filePath.endsWith('.mdoc')) {
      console.log(`📄 新增文件: ${path.basename(filePath)}`);
      debouncedSync();
    }
  })
  .on('change', (filePath) => {
    if (filePath.endsWith('.mdoc')) {
      console.log(`📝 修改文件: ${path.basename(filePath)}`);
      debouncedSync();
    }
  })
  .on('unlink', (filePath) => {
    if (filePath.endsWith('.mdoc')) {
      console.log(`🗑️ 删除文件: ${path.basename(filePath)}`);
      debouncedSync();
    }
  })
  .on('error', (error) => {
    console.error('❌ 监听器错误:', error);
  });

console.log('👀 正在监听以下目录的变化:');
console.log(`   📁 ${categoriesDir}`);
console.log(`   📁 ${collectionsDir}`);
console.log('💡 当你在Keystatic中保存修改时，数据将自动同步到JSON文件');
console.log('🛑 按 Ctrl+C 停止监听');

// 优雅退出
process.on('SIGINT', () => {
  console.log('\n🛑 停止自动同步监听器...');
  watcher.close();
  process.exit(0);
});