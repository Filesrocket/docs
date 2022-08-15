export default {
  themeConfig: {
    siteTitle: 'Filesrocket',
    logo: "/logo.png",
    nav: [
      { text: 'Guide', link: '/introduction/what-is-filesrocket' },
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
      },
      {
        text: 'Overview',
        items: [
          { text: 'Filesrocket', link: '/overview/filesrocket' },
          { text: 'Controllers', link: '/overview/controllers' },
          { text: "Services", link: '/overview/services' },
          { text: "Examples", link: '/overview/examples' },
          { text: "Congratulations", link: '/overview/congratulations' }
        ]
      },
      {
        text: 'Services',
        items: [
          { text: 'Local', link: '/services/local' },
          { text: 'Cloudinary', link: '/services/cloudinary' },
          { text: 'Amazon S3', link: '/services/amazon-s3' }
        ]
      },
      {
        text: 'Extra topics',
        items: [
          { text: 'Schema', link: '/extras/schema' }
        ]
      }
    ]
  }
}