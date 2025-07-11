export const zh = {
  title: '乌托邦白皮书',
  description: '共识自由财富网络：自治进化的价值流动生态',
  
  themeConfig: {
    logo: '/logo/logo2.svg',
    nav: [
      { text: '白皮书', link: '/whitepaper/' },
      { text: '经济模型', link: '/economics/' }
    ],

    sidebar: {
      '/whitepaper/': [
        {
          text: '前言',
          link: '/whitepaper/'
        },
        {
          text: '第一章：财富自由的哲学思考',
          link: '/whitepaper/chapter1/'
        },
        {
          text: '第二章：乌托邦的诞生',
          collapsed: false,
          items: [
            { text: '愿景与使命', link: '/whitepaper/chapter2/section1' },
            { text: '核心价值观', link: '/whitepaper/chapter2/section2' },
            { text: '系统架构概览', link: '/whitepaper/chapter2/section3' }
          ]
        },
        {
          text: '第三章：共鸣池系统',
          collapsed: false,
          items: [
            { text: '共鸣池的哲学基础', link: '/whitepaper/chapter3/section1' },
            { text: '四维共鸣结构', link: '/whitepaper/chapter3/section2' },
            { text: '共鸣放大原理', link: '/whitepaper/chapter3/section3' },
            { text: '共鸣过程', link: '/whitepaper/chapter3/section4' }
          ]
        },
        {
          text: '第四章：区域共识网络',
          collapsed: false,
          items: [
            { text: '星盘结构', link: '/whitepaper/chapter4/section1' },
            { text: '维度共识', link: '/whitepaper/chapter4/section2' },
            { text: '价值共识算法', link: '/whitepaper/chapter4/section3' },
            { text: '共识星图', link: '/whitepaper/chapter4/section4' }
          ]
        },
        {
          text: '第五章：繁荣节点体系',
          collapsed: false,
          items: [
            { text: '繁荣节点的本质', link: '/whitepaper/chapter5/section1' },
            { text: '价值证明机制', link: '/whitepaper/chapter5/section2' },
            { text: '星系共享机制', link: '/whitepaper/chapter5/section3' },
            { text: '繁荣引擎功能', link: '/whitepaper/chapter5/section4' }
          ]
        },
        {
          text: '第六章：凤凰重启机制',
          collapsed: false,
          items: [
            { text: '循环永生的哲学', link: '/whitepaper/chapter6/section1' },
            { text: '凤凰重生过程', link: '/whitepaper/chapter6/section2' },
            { text: '经济学原理分析', link: '/whitepaper/chapter6/section3' },
            { text: '持续繁荣奖励', link: '/whitepaper/chapter6/section4' }
          ]
        },
        {
          text: '第七章：智能合约架构',
          collapsed: false,
          items: [
            { text: '永不升级理念', link: '/whitepaper/chapter7/section1' },
            { text: '预计算引擎', link: '/whitepaper/chapter7/section2' },
            { text: '去中心化保障', link: '/whitepaper/chapter7/section3' },
            { text: '链上透明度', link: '/whitepaper/chapter7/section4' }
          ]
        },
        {
          text: '第八章：经济模型建模',
          collapsed: false,
          items: [
            { text: '动态平衡算法', link: '/whitepaper/chapter8/section1' },
            { text: '凤凰重启算法', link: '/whitepaper/chapter8/section2' },
            { text: '压力测试分析', link: '/whitepaper/chapter8/section3' },
            { text: '蒙特卡洛仿真', link: '/whitepaper/chapter8/section4' }
          ]
        },
        {
          text: '第九章：常见误解澄清',
          collapsed: false,
          items: [
            { text: '系统性质误解', link: '/whitepaper/chapter9/section1' },
            { text: '复杂性误解', link: '/whitepaper/chapter9/section2' },
            { text: '技术安全误解', link: '/whitepaper/chapter9/section3' },
            { text: '可持续性误解', link: '/whitepaper/chapter9/section4' }
          ]
        },
        {
          text: '第十章：结语',
          collapsed: false,
          items: [
            { text: '思想的种子', link: '/whitepaper/chapter10/section1' },
            { text: '共同的未来', link: '/whitepaper/chapter10/section2' },
            { text: '永恒的价值', link: '/whitepaper/chapter10/section3' }
          ]
        },
        {
          text: '附录',
          collapsed: false,
          items: [
            { text: '核心概念词汇表', link: '/whitepaper/appendix/section1' },
            { text: '系统参数速查', link: '/whitepaper/appendix/section2' },
            { text: '技术验证指南', link: '/whitepaper/appendix/section3' },
            { text: '风险提示', link: '/whitepaper/appendix/section4' }
          ]
        }
      ],
      '/economics/': [
        {
          text: '经济模型',
          items: [
            { text: '概述', link: '/economics/' },
            { text: '网络价值理论', link: '/economics/network-value' },
            { text: '收益模型', link: '/economics/revenue-model' },
            { text: '风险管理', link: '/economics/risk-management' },
            { text: '可持续性分析', link: '/economics/sustainability' }
          ]
        }
      ],
      '/technology/': [
        {
          text: '技术架构',
          items: [
            { text: '概述', link: '/technology/' },
            { text: '智能合约', link: '/technology/smart-contract' },
            { text: '安全机制', link: '/technology/security' },
            { text: 'API 文档', link: '/technology/api' }
          ]
        }
      ]
    },

    // 中文界面文本
    outlineTitle: '目录',
    lastUpdatedText: '最后更新',
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    darkModeSwitchLabel: '外观',
    sidebarMenuLabel: '菜单',
    returnToTopLabel: '返回顶部',
    
    // 编辑链接
    editLink: {
      pattern: 'https://github.com/utopia-project/whitepaper/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页'
    }
  }
}