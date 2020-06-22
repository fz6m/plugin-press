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
    plugins: [
      ['@vuepress/back-to-top'],
      [
        'vuepress-plugin-zooming',
        {
          selector: '.my-img',
          delay: 1000
        },
      ]
    ],
    themeConfig: {
      sidebar: 'auto',
      nav: [
        { text: '主页', link: '/' },
        { text: '了解基础', link: '/cqp/' },
        { text: '从零开始', link: '/guide/course' },
        {
          text: '插件说明',
          items: [
            { text: 'TwitterPush', link: '/cqp/twitter' },
            { text: '自定义表情包', link: '/cqp/image' },
            { text: '复读机', link: '/cqp/repeater' },
            { text: 'Bestdori 自制谱作图器', link: '/cqp/bestdori' },
            { text: '圣杯战争', link: '/cqp/grail' },
            { text: '营销号文案生成', link: '/cqp/marketing' },
            { text: '早晚安', link: '/cqp/goodmorning' },
            { text: 'CP 小故事', link: '/cqp/cp' },
            { text: '一言', link: '/cqp/hitokoto' },
            { text: '图片旋转', link: '/cqp/rotating' },
            { text: 'Pixiv 看图', link: '/cqp/pixiv' },
            { text: 'V 运势', link: '/cqp/fortune' },
          ]
        },
        { text: '其他', link: '/other/other' },
        { text: 'GitHub', link: 'https://github.com/fz6m/nonebot-plugin' }
      ],
      lastUpdated: '上次更新',
      smoothScroll: true,
      search: false
  }
}

