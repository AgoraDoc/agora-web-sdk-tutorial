const config = {
  gatsby: {
    pathPrefix: '/',
    siteUrl: 'https://www.agora.io',
    gaTrackingId: null,
    trailingSlash: false,
  },
  header: {
    title:
      "声网 Agora 实时音视频 Web SDK 教程",
    helpUrl: '',
    tweetText: '',
    social: ``,
    links: [{ text: '', link: '' }],
    search: {
      enabled: false,
      indexName: '',
      algoliaAppId: process.env.GATSBY_ALGOLIA_APP_ID,
      algoliaSearchKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
      algoliaAdminKey: process.env.ALGOLIA_ADMIN_KEY,
    },
  },
  sidebar: {
    forcedNavOrder: [
      '/introduction', // add trailing slash if enabled above
      '/codeblock',
    ],
    collapsedNav: [
      '/codeblock', // add trailing slash if enabled above
    ],
    links: [{ text: '声网 Agora 官方网站', link: 'https://agora.io' }, { text: '声网 Agora 文档中心', link: 'https://docs.agora.io' }, { text: 'Web SDK 示例项目', link: 'https://github.com/AgoraIO/API-Examples-Web' }],
    frontline: false,
    ignoreIndex: true,
    title:
      "",
  },
  siteMetadata: {
    title: 'RTC Web SDK Training | Agora',
    description: 'Documentation built with mdx. Powering docs.agora.io ',
    ogImage: null,
    docsLocation: 'https://github.com/yamasite/agora-web-sdk-tutorial/tree/master/content',
    favicon: '',
  },
  pwa: {
    enabled: false, // disabling this will also remove the existing service worker.
    manifest: {
      name: 'Gatsby Gitbook Starter',
      short_name: 'GitbookStarter',
      start_url: '/',
      background_color: '#6b37bf',
      theme_color: '#6b37bf',
      display: 'standalone',
      crossOrigin: 'use-credentials',
      icons: [
      ],
    },
  },
};

module.exports = config;
