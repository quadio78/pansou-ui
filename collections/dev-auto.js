import { spawn } from 'child_process';
import { platform } from 'os';

const isWindows = platform() === 'win32';

// 创建子进程的函数
function createProcess(command, args = []) {
    return spawn(command, args, {
        stdio: 'inherit',
        shell: true
    });
}

console.log('🚀 启动开发环境...');

// 启动自动同步
const autoSync = createProcess('npm', ['run', 'auto-sync']);

// 启动开发服务器
const dev = createProcess('npm', ['run', 'dev']);

// 处理进程退出
function cleanup() {
    console.log('\n🛑 正在停止所有进程...');
    autoSync.kill();
    dev.kill();
    process.exit(0);
}

// 监听退出信号
process.on('SIGINT', cleanup);
process.on('SIGTERM', cleanup);

// 监听子进程退出
autoSync.on('exit', (code) => {
    if (code !== 0) {
        console.log(`❌ 自动同步进程退出，代码: ${code}`);
    }
});

dev.on('exit', (code) => {
    if (code !== 0) {
        console.log(`❌ 开发服务器退出，代码: ${code}`);
    }
    cleanup();
});