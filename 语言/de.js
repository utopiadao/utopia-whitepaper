```javascript
export const de = {
  title: 'Utopia Whitepaper',
  description: 'Konsens-freies Wohlstandsnetzwerk: Sich selbst entwickelndes Wertstrom-Ökosystem',
  
  themeConfig: {
    logo: '/logo/logo2.svg',
    nav: [
      { text: 'Whitepaper', link: '/whitepaper/' },
      { text: 'Wirtschaftsmodell', link: '/economics/' }
    ],

    sidebar: {
      '/whitepaper/': [
        {
          text: 'Vorwort',
          link: '/whitepaper/'
        },
        {
          text: 'Kapitel 1: Philosophische Betrachtung der Vermögensfreiheit',
          link: '/whitepaper/chapter1/'
        },
        {
          text: 'Kapitel 2: Die Entstehung von Utopia',
          link: '/whitepaper/chapter2/'
        },
        {
          text: 'Kapitel 3: Resonanz-Pool-System',
          collapsed: false,
          items: [
            { text: 'Kapitelübersicht', link: '/whitepaper/chapter3/' },
            { text: '3.1 Philosophische Grundlagen des Resonanz-Pools', link: '/whitepaper/chapter3/section1' },
            { text: '3.2 Vierdimensionale Resonanzstruktur', link: '/whitepaper/chapter3/section2' },
            { text: '3.3 Resonanzverstärkungsprinzip', link: '/whitepaper/chapter3/section3' },
            { text: '3.4 Teilnahmeprozess', link: '/whitepaper/chapter3/section4' }
          ]
        },
        {
          text: 'Kapitel 4: Regionales Konsensnetzwerk',
          collapsed: false,
          items: [
            { text: 'Kapitelübersicht', link: '/whitepaper/chapter4/' },
            { text: '4.1 Sterndiagramm-Struktur und Dimensionskonsens', link: '/whitepaper/chapter4/section1' },
            { text: '4.2 Wertkonsens-Algorithmus und Sternkarte', link: '/whitepaper/chapter4/section2' },
            { text: '4.3 Netzwerkphilosophie und technische Praxis', link: '/whitepaper/chapter4/section3' }
          ]
        },
        {
          text: 'Kapitel 5: Wohlstands-Knoten-System',
          collapsed: false,
          items: [
            { text: 'Kapitelübersicht', link: '/whitepaper/chapter5/' },
            { text: '5.1 Wesen und Auswahl der Wohlstands-Knoten', link: '/whitepaper/chapter5/section1' },
            { text: '5.2 Galaktisches Teilen und Wertverteilung', link: '/whitepaper/chapter5/section2' },
            { text: '5.3 Wohlstandsmotor und dynamisches Gleichgewicht', link: '/whitepaper/chapter5/section3' }
          ]
        },
        {
          text: 'Kapitel 6: Phoenix-Neustart-Mechanismus',
          collapsed: false,
          items: [
            { text: 'Kapitelübersicht', link: '/whitepaper/chapter6/' },
            { text: '6.1 Philosophie und Auslösemechanismus des Phoenix-Neustarts', link: '/whitepaper/chapter6/section1' },
            { text: '6.2 Phoenix-Wiedergeburtsprozess-Design', link: '/whitepaper/chapter6/section2' },
            { text: '6.3 Analyse wirtschaftlicher Prinzipien', link: '/whitepaper/chapter6/section3' },
            { text: '6.4 Kontinuierlicher Wohlstands-Belohnungsmechanismus', link: '/whitepaper/chapter6/section4' },
            { text: '6.5 Spieltheorie-Analyse und ultimative Bedeutung', link: '/whitepaper/chapter6/section5' }
          ]
        },
        {
          text: 'Kapitel 7: Informationsgetriebene Smart Contracts',
          collapsed: false,
          items: [
            { text: 'Kapitelübersicht', link: '/whitepaper/chapter7/' },
            { text: '7.1 Architekturdesign und Konzept', link: '/whitepaper/chapter7/section1' },
            { text: '7.2 Vorberechnungsmaschine und Sicherheitsmechanismen', link: '/whitepaper/chapter7/section2' },
            { text: '7.3 Benutzerinteraktion und Dezentralisierung', link: '/whitepaper/chapter7/section3' },
            { text: '7.4 Transparenz und technische Zusammenfassung', link: '/whitepaper/chapter7/section4' }
          ]
        },
        {
          text: 'Kapitel 8: Mathematische Modellierung',
          collapsed: false,
          items: [
            { text: 'Kapitelübersicht', link: '/whitepaper/chapter8/' },
            { text: '8.1 Kernvariablen und Stabilitätsmodell', link: '/whitepaper/chapter8/section1' },
            { text: '8.2 Netzwerkeffekt und dynamisches Gleichgewicht', link: '/whitepaper/chapter8/section2' },
            { text: '8.3 Phoenix-Algorithmus und Stresstest', link: '/whitepaper/chapter8/section3' },
            { text: '8.4 Wirtschaftstheorie und Schlussfolgerung', link: '/whitepaper/chapter8/section4' }
          ]
        },
        {
          text: 'Kapitel 9: Aufklärung häufiger Missverständnisse',
          collapsed: false,
          items: [
            { text: 'Kapitelübersicht', link: '/whitepaper/chapter9/' },
            { text: '9.1 Missverständnis 1: Das ist ein Ponzi-Schema oder Geldfonds', link: '/whitepaper/chapter9/section1' },
            { text: '9.2 Missverständnis 2: Hohe Renditen sind nicht nachhaltig', link: '/whitepaper/chapter9/section2' },
            { text: '9.3 Missverständnis 3: Mangel an realer Wertunterstützung', link: '/whitepaper/chapter9/section3' },
            { text: '9.4 Missverständnis 4: Technische Komplexität zur Täuschung', link: '/whitepaper/chapter9/section4' },
            { text: '9.5 Missverständnis 5: Risiken zu hoch und unkontrollierbar', link: '/whitepaper/chapter9/section5' },
            { text: '9.6 Missverständnis 6: Nur ein Spiel mit heißer Kartoffel', link: '/whitepaper/chapter9/section6' },
            { text: '9.7 Missverständnis 7: System könnte manipuliert werden', link: '/whitepaper/chapter9/section7' },
            { text: '9.8 Missverständnis 8: Wirtschaftsmodell ist nicht nachhaltig', link: '/whitepaper/chapter9/section8' },
            { text: '9.9 Missverständnis 9: Team könnte verschwinden', link: '/whitepaper/chapter9/section9' },
            { text: '9.10 Missverständnis 10: Nur frühe Teilnehmer profitieren', link: '/whitepaper/chapter9/section10' },
            { text: '9.11 Schlussfolgerung: Rationale Erkenntnis und kluge Wahl', link: '/whitepaper/chapter9/section11' },
            { text: '9.12 Anhang: Technischer Verifizierungsleitfaden', link: '/whitepaper/chapter9/section12' },
            { text: '9.13 Community-Verifizierungstools', link: '/whitepaper/chapter9/section13' }
          ]
        },
        {
          text: 'Kapitel 10: Schlussfolgerung - Der Samen des Gedankens',
          link: '/whitepaper/chapter10/'
        },
        {
          text: 'Kapitel 11: Anhang',
          collapsed: false,
          items: [
            { text: 'Kapitelübersicht', link: '/whitepaper/appendix/' },
            { text: '11.1 Glossar der Kernkonzepte', link: '/whitepaper/appendix/section1' },
            { text: '11.2 Systemparameter und Referenzmaterialien', link: '/whitepaper/appendix/section2' },
            { text: '11.3 Begriffsvergleich und Danksagungen', link: '/whitepaper/appendix/section3' },
            { text: '11.4 Haftungsausschluss und Teilnahme', link: '/whitepaper/appendix/section4' }
          ]
        }
      ],
      '/economics/': [
        {
          text: 'Wirtschaftsmodell',
          items: [
            { text: 'Übersicht', link: '/economics/' },
            { text: 'Netzwerkwerttheorie', link: '/economics/network-value' },
            { text: 'Ertragsmodell', link: '/economics/revenue-model' },
            { text: 'Risikomanagement', link: '/economics/risk-management' },
            { text: 'Nachhaltigkeitsanalyse', link: '/economics/sustainability' }
          ]
        }
      ]
    },

    // Deutsche Oberflächentexte
    outlineTitle: 'Inhaltsverzeichnis',
    docFooter: {
      prev: 'Vorherige Seite',
      next: 'Nächste Seite'
    },
    darkModeSwitchLabel: 'Erscheinungsbild',
    sidebarMenuLabel: 'Menü',
    returnToTopLabel: 'Zurück nach oben'
  }
}
```