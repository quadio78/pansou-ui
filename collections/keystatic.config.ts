import { config, fields, collection } from '@keystatic/core';

export default config({
  storage: {
    kind: 'local',
  },
  ui: {
    brand: {
      name: '集合管理系统',
    },
  },
  collections: {
    categories: collection({
      label: '🏷️ 分类管理',
      slugField: 'id',
      path: 'src/data/categories/*',
      format: { contentField: 'content' },
      schema: {
        id: fields.slug({ 
          name: { label: '分类ID (如: games, movies)' }
        }),
        name: fields.text({ 
          label: '分类名称',
          validation: { isRequired: true }
        }),
        icon: fields.select({
          label: '图标',
          options: [
            { label: '🎮 游戏手柄', value: 'fa-gamepad' },
            { label: '🎬 电影胶片', value: 'fa-film' },
            { label: '🎵 音乐', value: 'fa-music' },
            { label: '📚 书本', value: 'fa-book' },
            { label: '💻 电脑', value: 'fa-laptop' },
            { label: '📱 手机', value: 'fa-mobile-alt' },
            { label: '🎨 艺术', value: 'fa-palette' },
            { label: '📁 文件夹', value: 'fa-folder' },
          ],
          defaultValue: 'fa-folder'
        }),
        color: fields.select({
          label: '主题颜色',
          options: [
            { label: '🟣 紫色', value: 'bg-purple-500' },
            { label: '🔴 红色', value: 'bg-red-500' },
            { label: '🟢 绿色', value: 'bg-green-500' },
            { label: '🟡 黄色', value: 'bg-yellow-500' },
            { label: '🔵 蓝色', value: 'bg-blue-500' },
            { label: '🩷 粉色', value: 'bg-pink-500' },
            { label: '🟦 靛蓝', value: 'bg-indigo-500' },
            { label: '⚫ 灰色', value: 'bg-gray-500' },
          ],
          defaultValue: 'bg-blue-500'
        }),
        content: fields.document({
          label: '分类描述',
          formatting: true,
          dividers: true,
          links: true,
        }),
      },
    }),
    collections: collection({
      label: '📦 集合管理',
      slugField: 'id',
      path: 'src/data/collections/*',
      format: { contentField: 'description' },
      schema: {
        id: fields.slug({ name: { label: '集合ID (如: steam-games-2024)' } }),
        title: fields.text({ 
          label: '集合标题',
          validation: { isRequired: true }
        }),
        category: fields.select({
          label: '所属分类',
          options: [
            { label: '📁 动漫', value: 'cartoon' },
            { label: '📺 电视剧', value: 'episodes' },
            { label: '🎮 游戏合集', value: 'games' },
            { label: '🎬 电影合集', value: 'movies' },
            { label: '🎵 音乐合集', value: 'music' },
            { label: '📚 学习资料', value: 'study' },


          ],
          defaultValue: 'games'
        }),
        cover: fields.text({ 
          label: '封面图片路径 (如: /images/cover.png)'
        }),
        tags: fields.array(
          fields.text({
            label: '标签名称',
            validation: { isRequired: true }
          }),
          {
            label: '🏷️ 标签列表',
            itemLabel: props => props.value || '新标签',
            validation: { length: { min: 0 } }
          }
        ),
        created: fields.date({ 
          label: '创建日期',
          defaultValue: { kind: 'today' }
        }),
        updated: fields.date({ 
          label: '更新日期',
          defaultValue: { kind: 'today' }
        }),
        resources: fields.array(
          fields.object({
            name: fields.text({ 
              label: '资源名称',
              validation: { isRequired: true }
            }),
            platform: fields.select({
              label: '网盘平台',
              options: [
                { label: '🔢 115网盘', value: '115' },
                { label: '1️⃣2️⃣3️⃣ 123网盘', value: '123' },
                { label: '📱 移动云盘', value: 'mobile' },
                { label: '⚡ 迅雷云盘', value: 'xunlei' },
                { label: '☁️ 阿里云盘', value: 'aliyun' },
                { label: '🧭 UC网盘', value: 'uc' },
                { label: '☁️ 天翼云盘', value: 'tianyi' },
                { label: '🔍 夸克网盘', value: 'quark' },
                { label: '💾 百度网盘', value: 'baidu' },
                { label: '📁 其他网盘', value: 'others' },
              ],
              defaultValue: 'quark'
            }),
            link: fields.url({ 
              label: '分享链接',
              validation: { isRequired: true }
            }),
            password: fields.text({ 
              label: '提取密码 (可选)'
            }),
            size: fields.text({ 
              label: '文件大小 (如: 1.6TB)'
            }),
            tags: fields.array(
              fields.text({
                label: '标签',
                validation: { isRequired: true }
              }),
              {
                label: '资源标签',
                itemLabel: props => props.value || '新标签',
                validation: { length: { min: 0 } }
              }
            ),
            description: fields.text({ 
              label: '资源描述',
              multiline: true
            }),
          }),
          {
            label: '📋 资源列表',
            itemLabel: props => props.fields.name.value || '新资源'
          }
        ),
        description: fields.document({
          label: '集合详细描述',
          formatting: true,
          dividers: true,
          links: true,
        }),
      },
    }),
  },
});