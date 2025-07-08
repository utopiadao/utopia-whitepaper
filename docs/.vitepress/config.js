import { defineConfig } from 'vitepress'
import { en } from './config/en'
import { zh } from './config/zh'

export default defineConfig({
  title: 'UTOPIA',
  description: 'A decentralized value flow network',
  
  // 多语言配置
  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-CN',
      link: '/',
      ...zh
    },
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',
      ...en
    }
  },

  // 强制暗色模式
  appearance: 'dark',
  
  // 主题配置
  themeConfig: {
    logo: '/images/utopia-logo.png',
    siteTitle: 'UTOPIA',
    
    // 社交链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com/utopiadao/' }
    ],

    // 搜索
    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换'
                }
              }
            }
          },
          en: {
            translations: {
              button: {
                buttonText: 'Search',
                buttonAriaLabel: 'Search'
              },
              modal: {
                noResultsText: 'No results found',
                resetButtonTitle: 'Clear search',
                footer: {
                  selectText: 'Select',
                  navigateText: 'Navigate'
                }
              }
            }
          }
        }
      }
    }
  },
  
  // 构建配置
  base: '/utopia-whitepaper/',
  
  // Vite 配置
  vite: {
    ssr: {
      noExternal: ['@arco-design/web-vue', 'echarts', 'vue-echarts']
    },
    resolve: {
      alias: {
        '@': '/docs/.vitepress',
        '~': '/docs'
      }
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: ``
        }
      }
    }
  },

  // 头部标签
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#E5A000' }],
    ['meta', { name: 'og:type', content: 'website' }],
    ['meta', { name: 'og:site_name', content: 'UTOPIA Whitepaper' }],
    ['meta', { name: 'og:image', content: '/images/og-image.png' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:image', content: '/images/og-image.png' }]
  ],

  // 最后更新时间
  lastUpdated: true
})