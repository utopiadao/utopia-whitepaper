```javascript
export const zhHK = {
  title: '烏托邦白皮書',
  description: '共識自由財富網絡：自治進化的價值流動生態',
  
  themeConfig: {
    logo: '/logo/logo2.svg',
    nav: [
      { text: '白皮書', link: '/whitepaper/' },
      { text: '經濟模型', link: '/economics/' }
    ],

    sidebar: {
      '/whitepaper/': [
        {
          text: '前言',
          link: '/whitepaper/'
        },
        {
          text: '第一章：財富自由的哲學思考',
          link: '/whitepaper/chapter1/'
        },
        {
          text: '第二章：烏托邦的誕生',
          link: '/whitepaper/chapter2/'
        },
        {
          text: '第三章：共鳴池系統',
          collapsed: false,
          items: [
            { text: '章節概覽', link: '/whitepaper/chapter3/' },
            { text: '3.1 共鳴池的哲學基礎', link: '/whitepaper/chapter3/section1' },
            { text: '3.2 四維共鳴結構', link: '/whitepaper/chapter3/section2' },
            { text: '3.3 共鳴放大原理', link: '/whitepaper/chapter3/section3' },
            { text: '3.4 參與流程', link: '/whitepaper/chapter3/section4' }
          ]
        },
        {
          text: '第四章：區域共識網絡',
          collapsed: false,
          items: [
            { text: '章節概覽', link: '/whitepaper/chapter4/' },
            { text: '4.1 星盤結構與維度共識', link: '/whitepaper/chapter4/section1' },
            { text: '4.2 價值共識演算法與星圖', link: '/whitepaper/chapter4/section2' },
            { text: '4.3 網絡哲學與技術實現', link: '/whitepaper/chapter4/section3' }
          ]
        },
        {
          text: '第五章：繁榮節點體系',
          collapsed: false,
          items: [
            { text: '章節概覽', link: '/whitepaper/chapter5/' },
            { text: '5.1 繁榮節點的本質與選拔', link: '/whitepaper/chapter5/section1' },
            { text: '5.2 星系共享與價值分配', link: '/whitepaper/chapter5/section2' },
            { text: '5.3 繁榮引擎與動態平衡', link: '/whitepaper/chapter5/section3' }
          ]
        },
        {
          text: '第六章：鳳凰重啟機制',
          collapsed: false,
          items: [
            { text: '章節概覽', link: '/whitepaper/chapter6/' },
            { text: '6.1 鳳凰重啟的哲學與觸發機制', link: '/whitepaper/chapter6/section1' },
            { text: '6.2 鳳凰重生過程設計', link: '/whitepaper/chapter6/section2' },
            { text: '6.3 經濟學原理分析', link: '/whitepaper/chapter6/section3' },
            { text: '6.4 持續繁榮獎勵機制', link: '/whitepaper/chapter6/section4' },
            { text: '6.5 博弈論分析與終極意義', link: '/whitepaper/chapter6/section5' }
          ]
        },
        {
          text: '第七章：訊息驅動的智能合約',
          collapsed: false,
          items: [
            { text: '章節概覽', link: '/whitepaper/chapter7/' },
            { text: '7.1 架構設計與理念', link: '/whitepaper/chapter7/section1' },
            { text: '7.2 預計算引擎與安全機制', link: '/whitepaper/chapter7/section2' },
            { text: '7.3 用戶交互與去中心化', link: '/whitepaper/chapter7/section3' },
            { text: '7.4 透明度與技術總結', link: '/whitepaper/chapter7/section4' }
          ]
        },
        {
          text: '第八章：數學建模',
          collapsed: false,
          items: [
            { text: '章節概覽', link: '/whitepaper/chapter8/' },
            { text: '8.1 核心變量與穩定性模型', link: '/whitepaper/chapter8/section1' },
            { text: '8.2 網絡效應與動態平衡', link: '/whitepaper/chapter8/section2' },
            { text: '8.3 鳳凰演算法與壓力測試', link: '/whitepaper/chapter8/section3' },
            { text: '8.4 經濟理論與結論', link: '/whitepaper/chapter8/section4' }
          ]
        },
        {
          text: '第九章：常見誤解澄清',
          collapsed: false,
          items: [
            { text: '章節概覽', link: '/whitepaper/chapter9/' },
            { text: '9.1 誤解一：這是龐氏騙局或資金盤', link: '/whitepaper/chapter9/section1' },
            { text: '9.2 誤解二：高收益不可持續', link: '/whitepaper/chapter9/section2' },
            { text: '9.3 誤解三：缺乏真實價值支撐', link: '/whitepaper/chapter9/section3' },
            { text: '9.4 誤解四：技術複雜是為了欺騙', link: '/whitepaper/chapter9/section4' },
            { text: '9.5 誤解五：風險太高無法控制', link: '/whitepaper/chapter9/section5' },
            { text: '9.6 誤解六：只是擊鼓傳花遊戲', link: '/whitepaper/chapter9/section6' },
            { text: '9.7 誤解七：系統可能被操縱', link: '/whitepaper/chapter9/section7' },
            { text: '9.8 誤解八：經濟模型不可持續', link: '/whitepaper/chapter9/section8' },
            { text: '9.9 誤解九：團隊可能跑路', link: '/whitepaper/chapter9/section9' },
            { text: '9.10 誤解十：只有早期參與者受益', link: '/whitepaper/chapter9/section10' },
            { text: '9.11 結語：理性認知與明智選擇', link: '/whitepaper/chapter9/section11' },
            { text: '9.12 附錄：技術驗證指南', link: '/whitepaper/chapter9/section12' },
            { text: '9.13 社區驗證工具', link: '/whitepaper/chapter9/section13' }
          ]
        },
        {
          text: '第十章：結語 - 思想的種子',
          link: '/whitepaper/chapter10/'
        },
        {
          text: '第十一章：附錄',
          collapsed: false,
          items: [
            { text: '章節概覽', link: '/whitepaper/appendix/' },
            { text: '11.1 核心概念詞彙表', link: '/whitepaper/appendix/section1' },
            { text: '11.2 系統參數與參考資料', link: '/whitepaper/appendix/section2' },
            { text: '11.3 術語對照與致謝', link: '/whitepaper/appendix/section3' },
            { text: '11.4 免責聲明與參與', link: '/whitepaper/appendix/section4' }
          ]
        }
      ],
      '/economics/': [
        {
          text: '經濟模型',
          items: [
            { text: '概述', link: '/economics/' },
            { text: '網絡價值理論', link: '/economics/network-value' },
            { text: '收益模型', link: '/economics/revenue-model' },
            { text: '風險管理', link: '/economics/risk-management' },
            { text: '可持續性分析', link: '/economics/sustainability' }
          ]
        }
      ]
    },

    // 香港繁體中文界面文本
    outlineTitle: '目錄',
    docFooter: {
      prev: '上一頁',
      next: '下一頁'
    },
    darkModeSwitchLabel: '外觀',
    sidebarMenuLabel: '選單',
    returnToTopLabel: '返回頂部'
  }
}
```