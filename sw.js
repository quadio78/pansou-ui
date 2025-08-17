// 静默清理版本 - 为域名切换到Next.js做准备
const CLEANUP_VERSION = 'pansou-cleanup-final';

// 安装阶段：立即激活
self.addEventListener('install', event => {
  self.skipWaiting();
});

// 激活阶段：静默清理所有缓存
self.addEventListener('activate', event => {
  event.waitUntil(
    Promise.all([
      // 清理所有旧缓存
      caches.keys().then(cacheNames => {
        return Promise.all(
          cacheNames.map(cacheName => caches.delete(cacheName))
        );
      }),
      // 立即控制所有客户端
      self.clients.claim()
    ]).then(() => {
      // 静默刷新所有客户端
      return self.clients.matchAll().then(clients => {
        clients.forEach(client => {
          if (client.url && client.navigate) {
            client.navigate(client.url);
          }
        });
      });
    }).then(() => {
      // 清理完成后卸载自己，为新版本让路
      setTimeout(() => {
        self.registration.unregister();
      }, 3000);
    }).catch(() => {
      // 确保无论如何都会卸载
      setTimeout(() => {
        self.registration.unregister();
      }, 3000);
    })
  );
});

// 拦截请求：不再缓存，直接从网络获取
self.addEventListener('fetch', event => {
  // 直接从网络获取，不缓存任何内容
  event.respondWith(fetch(event.request));
});