```javascript
export const ja = {
  title: 'ユートピア・ホワイトペーパー',
  description: 'コンセンサス・フリー・ウェルス・ネットワーク：自己進化する価値流動エコシステム',
  
  themeConfig: {
    logo: '/logo/logo2.svg',
    nav: [
      { text: 'ホワイトペーパー', link: '/whitepaper/' },
      { text: '経済モデル', link: '/economics/' }
    ],

    sidebar: {
      '/whitepaper/': [
        {
          text: '序文',
          link: '/whitepaper/'
        },
        {
          text: '第1章：富の自由についての哲学的思考',
          link: '/whitepaper/chapter1/'
        },
        {
          text: '第2章：ユートピアの誕生',
          link: '/whitepaper/chapter2/'
        },
        {
          text: '第3章：共鳴プールシステム',
          collapsed: false,
          items: [
            { text: '章の概要', link: '/whitepaper/chapter3/' },
            { text: '3.1 共鳴プールの哲学的基盤', link: '/whitepaper/chapter3/section1' },
            { text: '3.2 四次元共鳴構造', link: '/whitepaper/chapter3/section2' },
            { text: '3.3 共鳴増幅原理', link: '/whitepaper/chapter3/section3' },
            { text: '3.4 参加プロセス', link: '/whitepaper/chapter3/section4' }
          ]
        },
        {
          text: '第4章：地域コンセンサスネットワーク',
          collapsed: false,
          items: [
            { text: '章の概要', link: '/whitepaper/chapter4/' },
            { text: '4.1 星図構造と次元コンセンサス', link: '/whitepaper/chapter4/section1' },
            { text: '4.2 価値コンセンサスアルゴリズムとスターマップ', link: '/whitepaper/chapter4/section2' },
            { text: '4.3 ネットワーク哲学と技術的実践', link: '/whitepaper/chapter4/section3' }
          ]
        },
        {
          text: '第5章：繁栄ノードシステム',
          collapsed: false,
          items: [
            { text: '章の概要', link: '/whitepaper/chapter5/' },
            { text: '5.1 繁栄ノードの本質と選択', link: '/whitepaper/chapter5/section1' },
            { text: '5.2 銀河的共有と価値分配', link: '/whitepaper/chapter5/section2' },
            { text: '5.3 繁栄エンジンと動的バランス', link: '/whitepaper/chapter5/section3' }
          ]
        },
        {
          text: '第6章：フェニックスリスタートメカニズム',
          collapsed: false,
          items: [
            { text: '章の概要', link: '/whitepaper/chapter6/' },
            { text: '6.1 フェニックスリスタートの哲学とトリガーメカニズム', link: '/whitepaper/chapter6/section1' },
            { text: '6.2 フェニックス再生プロセス設計', link: '/whitepaper/chapter6/section2' },
            { text: '6.3 経済原理分析', link: '/whitepaper/chapter6/section3' },
            { text: '6.4 継続的繁栄報酬メカニズム', link: '/whitepaper/chapter6/section4' },
            { text: '6.5 ゲーム理論分析と究極の意味', link: '/whitepaper/chapter6/section5' }
          ]
        },
        {
          text: '第7章：情報駆動型スマートコントラクト',
          collapsed: false,
          items: [
            { text: '章の概要', link: '/whitepaper/chapter7/' },
            { text: '7.1 アーキテクチャ設計と概念', link: '/whitepaper/chapter7/section1' },
            { text: '7.2 事前計算エンジンとセキュリティメカニズム', link: '/whitepaper/chapter7/section2' },
            { text: '7.3 ユーザーインタラクションと分散化', link: '/whitepaper/chapter7/section3' },
            { text: '7.4 透明性と技術的要約', link: '/whitepaper/chapter7/section4' }
          ]
        },
        {
          text: '第8章：数学的モデリング',
          collapsed: false,
          items: [
            { text: '章の概要', link: '/whitepaper/chapter8/' },
            { text: '8.1 中核変数と安定性モデル', link: '/whitepaper/chapter8/section1' },
            { text: '8.2 ネットワーク効果と動的バランス', link: '/whitepaper/chapter8/section2' },
            { text: '8.3 フェニックスアルゴリズムとストレステスト', link: '/whitepaper/chapter8/section3' },
            { text: '8.4 経済理論と結論', link: '/whitepaper/chapter8/section4' }
          ]
        },
        {
          text: '第9章：一般的な誤解の解明',
          collapsed: false,
          items: [
            { text: '章の概要', link: '/whitepaper/chapter9/' },
            { text: '9.1 誤解1：これはポンジスキームまたは資金プール', link: '/whitepaper/chapter9/section1' },
            { text: '9.2 誤解2：高い収益は持続不可能', link: '/whitepaper/chapter9/section2' },
            { text: '9.3 誤解3：実際の価値サポートの欠如', link: '/whitepaper/chapter9/section3' },
            { text: '9.4 誤解4：欺くための技術的複雑さ', link: '/whitepaper/chapter9/section4' },
            { text: '9.5 誤解5：リスクが高すぎて制御できない', link: '/whitepaper/chapter9/section5' },
            { text: '9.6 誤解6：ただのホットポテトゲーム', link: '/whitepaper/chapter9/section6' },
            { text: '9.7 誤解7：システムが操作される可能性', link: '/whitepaper/chapter9/section7' },
            { text: '9.8 誤解8：経済モデルが持続不可能', link: '/whitepaper/chapter9/section8' },
            { text: '9.9 誤解9：チームが逃走する可能性', link: '/whitepaper/chapter9/section9' },
            { text: '9.10 誤解10：初期参加者のみが恩恵を受ける', link: '/whitepaper/chapter9/section10' },
            { text: '9.11 結論：理性的認知と賢明な選択', link: '/whitepaper/chapter9/section11' },
            { text: '9.12 付録：技術検証ガイド', link: '/whitepaper/chapter9/section12' },
            { text: '9.13 コミュニティ検証ツール', link: '/whitepaper/chapter9/section13' }
          ]
        },
        {
          text: '第10章：結論 - 思考の種',
          link: '/whitepaper/chapter10/'
        },
        {
          text: '第11章：付録',
          collapsed: false,
          items: [
            { text: '章の概要', link: '/whitepaper/appendix/' },
            { text: '11.1 中核概念用語集', link: '/whitepaper/appendix/section1' },
            { text: '11.2 システムパラメータと参考資料', link: '/whitepaper/appendix/section2' },
            { text: '11.3 用語比較と謝辞', link: '/whitepaper/appendix/section3' },
            { text: '11.4 免責事項と参加', link: '/whitepaper/appendix/section4' }
          ]
        }
      ],
      '/economics/': [
        {
          text: '経済モデル',
          items: [
            { text: '概要', link: '/economics/' },
            { text: 'ネットワーク価値理論', link: '/economics/network-value' },
            { text: '収益モデル', link: '/economics/revenue-model' },
            { text: 'リスク管理', link: '/economics/risk-management' },
            { text: '持続可能性分析', link: '/economics/sustainability' }
          ]
        }
      ]
    },

    // 日本語インターフェーステキスト
    outlineTitle: '目次',
    docFooter: {
      prev: '前のページ',
      next: '次のページ'
    },
    darkModeSwitchLabel: '外観',
    sidebarMenuLabel: 'メニュー',
    returnToTopLabel: 'トップに戻る'
  }
}
```