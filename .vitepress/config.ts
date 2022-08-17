import { defineConfigWithTheme } from "vitepress";

export default defineConfigWithTheme({
  lang: "en-US",
  title: "Filesrocket",
  description: "Manage your files with any Cloud Storage Service",
  srcDir: "docs",
  outDir: "dist",
  head: [
    ['link', { rel: "icon", type: "image/png", sizes: "16x16", href: "/icon.png"}]
  ],
  themeConfig: {
    siteTitle: 'Filesrocket',
    logo: "/icon.png",
    nav: [
      { text: 'Guide', link: '/introduction/what-is-filesrocket' },
      { text: 'Changelog', link: 'https://github.com/Filesrocket/filesrocket/blob/master/CHANGELOG.md' }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/filesrocket' }
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
          { text: 'Schema', link: '/extras/schema' },
          { text: 'Pagination', link: '/extras/pagination' }
        ]
      }
    ]
  }
});