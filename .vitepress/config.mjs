import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Doc",
  description: "A VitePress Site",
  themeConfig: {
    search: {
      provider: 'local'
    },
    nav: [
      { text: 'Home', link: '/' },
      
    ],
    sidebar: [
      {
        text: 'Принципы программирования',
        items: [
          { text: 'SOLID', link: '/principles-programming/SOLID' },
          { text: 'DRY', link: '/principles-programming/DRY' },
          { text: 'KISS', link: '/principles-programming/KISS' },
          { text: 'YAGNI', link: '/principles-programming/YAGNI' },
          { text: 'BDUF', link: '/principles-programming/BDUF' }
        ]
      },
      {
        text: 'Анти-Паттерны программирования',
        items: [
          { text: '25 примеров', link: '/anti-patterns/index' }
         
        ]
      },
      {
        text: 'Паттерны программирования ФП',
        items: [
          { text: 'Adapter', link: 'patterns-functional-paradigm/adapter' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
