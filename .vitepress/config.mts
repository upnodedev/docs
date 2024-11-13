import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Upnode Documents",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Introduction', link: '/introduction' },
      { text: 'Upnode Deploy', link: '/opstack-compose' },
      { text: 'Signer Proxy', link: '/signer-proxy' },
      { text: 'Optimism Alt-DA', link: '/op-alt-da' },
    ],

    sidebar: [
      {
        text: 'OP Stack',
        items: [
          { text: 'Introduction', link: '/introduction' },
          { text: 'Upnode Deploy', link: '/opstack-compose' },
          { text: 'Signer Proxy', link: '/signer-proxy' },
          { text: 'Optimism Alt-DA', link: '/op-alt-da' },
          //{ text: 'Markdown Examples', link: '/markdown-examples' },
          //{ text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
