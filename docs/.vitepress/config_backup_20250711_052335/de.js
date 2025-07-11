export const de = {
  title: 'UTOPIA Whitepaper',
  description: 'Konsensfreies Wohlstandsnetzwerk: Selbstverwaltende Evolution des Wertstromökosystems',
  
  themeConfig: {
    logo: '/logo/logo2.svg',
    nav: [
      { text: 'Whitepaper', link: '/de/whitepaper/' },
      { text: 'Wirtschaft', link: '/de/economics/' }
    ],

    sidebar: {
      '/de/whitepaper/': [
        {
          text: 'Vorwort',
          link: '/de/whitepaper/'
        },
        {
          text: 'Kapitel 1: Philosophie der finanziellen Freiheit',
          collapsed: false,
          items: [
            { text: 'Das Wesen des Reichtums', link: '/de/whitepaper/chapter1/section1' },
            { text: 'Bildung und Evolution des Konsenses', link: '/de/whitepaper/chapter1/section2' },
            { text: 'Die Grenzen der Freiheit definieren', link: '/de/whitepaper/chapter1/section3' }
          ]
        },
        {
          text: 'Kapitel 2: Geburt von Utopia',
          collapsed: false,
          items: [
            { text: 'Vision und Mission', link: '/de/whitepaper/chapter2/section1' },
            { text: 'Kernwerte', link: '/de/whitepaper/chapter2/section2' },
            { text: 'Systemarchitektur Übersicht', link: '/de/whitepaper/chapter2/section3' }
          ]
        },
        {
          text: 'Kapitel 3: Resonanzpool-System',
          collapsed: false,
          items: [
            { text: 'Philosophische Grundlage', link: '/de/whitepaper/chapter3/section1' },
            { text: 'Vierdimensionale Struktur', link: '/de/whitepaper/chapter3/section2' },
            { text: 'Resonanzverstärkung', link: '/de/whitepaper/chapter3/section3' },
            { text: 'Resonanzprozess', link: '/de/whitepaper/chapter3/section4' }
          ]
        },
        {
          text: 'Kapitel 4: Zonenkonsens-Netzwerk',
          collapsed: false,
          items: [
            { text: 'Astrale Struktur', link: '/de/whitepaper/chapter4/section1' },
            { text: 'Dimensionaler Konsens', link: '/de/whitepaper/chapter4/section2' },
            { text: 'Wertkonsens-Algorithmus', link: '/de/whitepaper/chapter4/section3' },
            { text: 'Konsens-Sternenkarte', link: '/de/whitepaper/chapter4/section4' }
          ]
        },
        {
          text: 'Kapitel 5: Wohlstandsknoten-System',
          collapsed: false,
          items: [
            { text: 'Wesen der Wohlstandsknoten', link: '/de/whitepaper/chapter5/section1' },
            { text: 'Wertnachweis-Mechanismus', link: '/de/whitepaper/chapter5/section2' },
            { text: 'Galaktischer Teilungsmechanismus', link: '/de/whitepaper/chapter5/section3' },
            { text: 'Wohlstandsmotor-Funktionen', link: '/de/whitepaper/chapter5/section4' }
          ]
        },
        {
          text: 'Kapitel 6: Phoenix-Neustart-Mechanismus',
          collapsed: false,
          items: [
            { text: 'Philosophie der ewigen Zyklen', link: '/de/whitepaper/chapter6/section1' },
            { text: 'Phoenix-Wiedergeburtsprozess', link: '/de/whitepaper/chapter6/section2' },
            { text: 'Wirtschaftsprinzipien-Analyse', link: '/de/whitepaper/chapter6/section3' },
            { text: 'Kontinuierliche Wohlstandsbelohnungen', link: '/de/whitepaper/chapter6/section4' }
          ]
        },
        {
          text: 'Kapitel 7: Smart Contract Architektur',
          collapsed: false,
          items: [
            { text: 'Nie-Upgrade-Philosophie', link: '/de/whitepaper/chapter7/section1' },
            { text: 'Vorberechnungsmotor', link: '/de/whitepaper/chapter7/section2' },
            { text: 'Dezentralisierungsgarantie', link: '/de/whitepaper/chapter7/section3' },
            { text: 'On-Chain-Transparenz', link: '/de/whitepaper/chapter7/section4' }
          ]
        },
        {
          text: 'Kapitel 8: Wirtschaftsmodell',
          collapsed: false,
          items: [
            { text: 'Dynamischer Gleichgewichtsalgorithmus', link: '/de/whitepaper/chapter8/section1' },
            { text: 'Phoenix-Neustart-Algorithmus', link: '/de/whitepaper/chapter8/section2' },
            { text: 'Stresstestanalyse', link: '/de/whitepaper/chapter8/section3' },
            { text: 'Monte-Carlo-Simulation', link: '/de/whitepaper/chapter8/section4' }
          ]
        },
        {
          text: 'Kapitel 9: Missverständnisse klären',
          collapsed: false,
          items: [
            { text: 'Missverständnisse über die Systemnatur', link: '/de/whitepaper/chapter9/section1' },
            { text: 'Missverständnisse über Komplexität', link: '/de/whitepaper/chapter9/section2' },
            { text: 'Missverständnisse über technische Sicherheit', link: '/de/whitepaper/chapter9/section3' },
            { text: 'Missverständnisse über Nachhaltigkeit', link: '/de/whitepaper/chapter9/section4' }
          ]
        },
        {
          text: 'Kapitel 10: Fazit',
          collapsed: false,
          items: [
            { text: 'Samen des Denkens', link: '/de/whitepaper/chapter10/section1' },
            { text: 'Unsere gemeinsame Zukunft', link: '/de/whitepaper/chapter10/section2' },
            { text: 'Ewiger Wert', link: '/de/whitepaper/chapter10/section3' }
          ]
        },
        {
          text: 'Anhang',
          collapsed: false,
          items: [
            { text: 'Glossar', link: '/de/whitepaper/appendix/glossary' },
            { text: 'Systemparameter', link: '/de/whitepaper/appendix/parameters' },
            { text: 'Verifizierungsleitfaden', link: '/de/whitepaper/appendix/verification' },
            { text: 'Haftungsausschluss', link: '/de/whitepaper/appendix/disclaimer' }
          ]
        }
      ],
      '/de/economics/': [
        {
          text: 'Wirtschaftsmodell',
          items: [
            { text: 'Übersicht', link: '/de/economics/' },
            { text: 'Netzwerkwerttheorie', link: '/de/economics/network-value' },
            { text: 'Einnahmemodell', link: '/de/economics/revenue-model' },
            { text: 'Risikomanagement', link: '/de/economics/risk-management' },
            { text: 'Nachhaltigkeitsanalyse', link: '/de/economics/sustainability' }
          ]
        }
      ]
    },

    // German interface text
    editLink: {
      pattern: 'https://github.com/utopia-project/whitepaper/edit/main/docs/:path',
      text: 'Diese Seite auf GitHub bearbeiten'
    }
  }
}