module.exports = {
    title: 'TZG API',
    base: '/',
    head: [],
    plugins: [],
    themeConfig: {
        sidebar: [],
        sidebarDepth: 2,
        lastUpdated: 'Last Updated',
        nav: [
            { text: 'Home', link: '/' },
            { text: '文档', link: '/doc/BiliBV.html' },
            { text: '帮助', link: '/help/' },
          ],
        smoothScroll: true
    },
    plugins: {
        "vuepress-plugin-auto-sidebar": {
            titleMode: "titlecase",
        },
        "vuepress-plugin-matomo": {
            siteId: 9,
            trackerUrl: "https://s.tzg6.com/"
      },
    }
}
