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
          { text: 'TwitterPush', link: '/cqp/twitter' },
          { text: '自定义表情包', link: '/cqp/image' },
          { text: 'Bestdori自制谱作图器', link: '/cqp/bestdori' },
          { text: '小游戏Demo', link: '/cqp/grail' },
          { text: '早晚安', link: '/cqp/goodmorning' },
          { text: '复读机', link: '/cqp/repeater' },
          { text: '其他', link: '/cqp/other' },
          { text: 'GitHub', link: 'https://github.com/fz6m/nonebot-plugin' }
        ],
        lastUpdated: '上次更新',
        smoothScroll: true,
        search: false
      }
}

