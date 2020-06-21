module.exports = {
    base: '/plugin-press/',
    title: '桃饱の店',
    description: '基于NoneBot的插件使用说明',
    port: 9527,
    head: [
      [
        'link',
        {
          rel: 'icon',
          href: '/logo.png'
        }
      ]
    ],
    plugins: ['@vuepress/back-to-top'],
    themeConfig: {
        nav: [
          { text: '主页', link: '/' },
          { text: '插件说明', link: '/cqp/' },
          { text: '从零开始', link: '/guide/course' },
          { text: 'TwitterPush', link: '/cqp/twitter' },
          { text: '自定义表情包', link: '/cqp/image' },
          { text: 'Bestdori自制谱作图器', link: '/cqp/bestdori' },
          { text: '小游戏Demo', link: '/cqp/grail' },
          { text: '早晚安', link: '/cqp/goodmorning' },
          { text: '复读机', link: '/cqp/repeater' },
          { text: 'Pixiv看图', link: '/cqp/pixiv' },
          { text: '一言', link: '/cqp/hitokoto' },
          { text: '其他', link: '/cqp/other' },
          { text: 'GitHub', link: 'https://github.com/fz6m/nonebot-plugin' }
        ],
        lastUpdated: '上次更新',
        smoothScroll: true,
        search: false
      }
}

