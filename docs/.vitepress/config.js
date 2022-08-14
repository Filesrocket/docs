export default {
  themeConfig: {
    siteTitle: 'Filesrocket',
    logo: "/logo.png",
    nav: [
      { text: 'Guide', link: '/introduction/what-is-filesrocket' },
      { text: 'Configs', link: '/configs' },
      { text: 'Changelog', link: 'https://github.com/...' }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/filesrocket/filesrocket' }
    ],
    sidebar: [
      {
        text: 'Introduction',
        items: [
          { text: 'What is Filesrocket?', link: '/introduction/what-is-filesrocket' },
          { text: 'Getting Started', link: '/introduction/getting-started' }
        ]
      }
    ]
  }
}