```javascript
export const it = {
  title: 'Libro Bianco di Utopia',
  description: 'Rete di Ricchezza Libera per Consenso: Ecosistema di Flusso di Valore Auto-evolutivo',
  
  themeConfig: {
    logo: '/logo/logo2.svg',
    nav: [
      { text: 'Libro Bianco', link: '/whitepaper/' },
      { text: 'Modello Economico', link: '/economics/' }
    ],

    sidebar: {
      '/whitepaper/': [
        {
          text: 'Prefazione',
          link: '/whitepaper/'
        },
        {
          text: 'Capitolo 1: Riflessione Filosofica sulla Libertà di Ricchezza',
          link: '/whitepaper/chapter1/'
        },
        {
          text: 'Capitolo 2: La Nascita di Utopia',
          link: '/whitepaper/chapter2/'
        },
        {
          text: 'Capitolo 3: Sistema Pool di Risonanza',
          collapsed: false,
          items: [
            { text: 'Panoramica del Capitolo', link: '/whitepaper/chapter3/' },
            { text: '3.1 Fondamenti Filosofici del Pool di Risonanza', link: '/whitepaper/chapter3/section1' },
            { text: '3.2 Struttura di Risonanza Quadridimensionale', link: '/whitepaper/chapter3/section2' },
            { text: '3.3 Principio di Amplificazione della Risonanza', link: '/whitepaper/chapter3/section3' },
            { text: '3.4 Processo di Partecipazione', link: '/whitepaper/chapter3/section4' }
          ]
        },
        {
          text: 'Capitolo 4: Rete di Consenso Regionale',
          collapsed: false,
          items: [
            { text: 'Panoramica del Capitolo', link: '/whitepaper/chapter4/' },
            { text: '4.1 Struttura Carta Stellare e Consenso Dimensionale', link: '/whitepaper/chapter4/section1' },
            { text: '4.2 Algoritmo di Consenso del Valore e Mappa Stellare', link: '/whitepaper/chapter4/section2' },
            { text: '4.3 Filosofia di Rete e Pratica Tecnica', link: '/whitepaper/chapter4/section3' }
          ]
        },
        {
          text: 'Capitolo 5: Sistema Nodi di Prosperità',
          collapsed: false,
          items: [
            { text: 'Panoramica del Capitolo', link: '/whitepaper/chapter5/' },
            { text: '5.1 Natura e Selezione dei Nodi di Prosperità', link: '/whitepaper/chapter5/section1' },
            { text: '5.2 Condivisione Galattica e Distribuzione del Valore', link: '/whitepaper/chapter5/section2' },
            { text: '5.3 Motore di Prosperità e Equilibrio Dinamico', link: '/whitepaper/chapter5/section3' }
          ]
        },
        {
          text: 'Capitolo 6: Meccanismo di Riavvio Fenice',
          collapsed: false,
          items: [
            { text: 'Panoramica del Capitolo', link: '/whitepaper/chapter6/' },
            { text: '6.1 Filosofia e Meccanismo di Attivazione del Riavvio Fenice', link: '/whitepaper/chapter6/section1' },
            { text: '6.2 Design del Processo di Rinascita Fenice', link: '/whitepaper/chapter6/section2' },
            { text: '6.3 Analisi dei Principi Economici', link: '/whitepaper/chapter6/section3' },
            { text: '6.4 Meccanismo di Ricompensa della Prosperità Continua', link: '/whitepaper/chapter6/section4' },
            { text: '6.5 Analisi della Teoria dei Giochi e Significato Ultimo', link: '/whitepaper/chapter6/section5' }
          ]
        },
        {
          text: 'Capitolo 7: Contratti Intelligenti Guidati dall\'Informazione',
          collapsed: false,
          items: [
            { text: 'Panoramica del Capitolo', link: '/whitepaper/chapter7/' },
            { text: '7.1 Design Architetturale e Concetto', link: '/whitepaper/chapter7/section1' },
            { text: '7.2 Motore di Pre-calcolo e Meccanismi di Sicurezza', link: '/whitepaper/chapter7/section2' },
            { text: '7.3 Interazione Utente e Decentralizzazione', link: '/whitepaper/chapter7/section3' },
            { text: '7.4 Trasparenza e Riassunto Tecnico', link: '/whitepaper/chapter7/section4' }
          ]
        },
        {
          text: 'Capitolo 8: Modellazione Matematica',
          collapsed: false,
          items: [
            { text: 'Panoramica del Capitolo', link: '/whitepaper/chapter8/' },
            { text: '8.1 Variabili Centrali e Modello di Stabilità', link: '/whitepaper/chapter8/section1' },
            { text: '8.2 Effetto Rete e Equilibrio Dinamico', link: '/whitepaper/chapter8/section2' },
            { text: '8.3 Algoritmo Fenice e Test di Stress', link: '/whitepaper/chapter8/section3' },
            { text: '8.4 Teoria Economica e Conclusione', link: '/whitepaper/chapter8/section4' }
          ]
        },
        {
          text: 'Capitolo 9: Chiarimento di Malintesi Comuni',
          collapsed: false,
          items: [
            { text: 'Panoramica del Capitolo', link: '/whitepaper/chapter9/' },
            { text: '9.1 Malinteso 1: Questo è uno schema Ponzi o pool di denaro', link: '/whitepaper/chapter9/section1' },
            { text: '9.2 Malinteso 2: I rendimenti elevati non sono sostenibili', link: '/whitepaper/chapter9/section2' },
            { text: '9.3 Malinteso 3: Mancanza di supporto del valore reale', link: '/whitepaper/chapter9/section3' },
            { text: '9.4 Malinteso 4: Complessità tecnica per ingannare', link: '/whitepaper/chapter9/section4' },
            { text: '9.5 Malinteso 5: Rischi troppo elevati e incontrollabili', link: '/whitepaper/chapter9/section5' },
            { text: '9.6 Malinteso 6: Solo un gioco di patata bollente', link: '/whitepaper/chapter9/section6' },
            { text: '9.7 Malinteso 7: Il sistema potrebbe essere manipolato', link: '/whitepaper/chapter9/section7' },
            { text: '9.8 Malinteso 8: Il modello economico non è sostenibile', link: '/whitepaper/chapter9/section8' },
            { text: '9.9 Malinteso 9: Il team potrebbe scappare', link: '/whitepaper/chapter9/section9' },
            { text: '9.10 Malinteso 10: Solo i primi partecipanti beneficiano', link: '/whitepaper/chapter9/section10' },
            { text: '9.11 Conclusione: Cognizione Razionale e Scelta Saggia', link: '/whitepaper/chapter9/section11' },
            { text: '9.12 Appendice: Guida alla Verifica Tecnica', link: '/whitepaper/chapter9/section12' },
            { text: '9.13 Strumenti di Verifica della Comunità', link: '/whitepaper/chapter9/section13' }
          ]
        },
        {
          text: 'Capitolo 10: Conclusione - Semi del Pensiero',
          link: '/whitepaper/chapter10/'
        },
        {
          text: 'Capitolo 11: Appendice',
          collapsed: false,
          items: [
            { text: 'Panoramica del Capitolo', link: '/whitepaper/appendix/' },
            { text: '11.1 Glossario dei Concetti Centrali', link: '/whitepaper/appendix/section1' },
            { text: '11.2 Parametri di Sistema e Materiali di Riferimento', link: '/whitepaper/appendix/section2' },
            { text: '11.3 Confronto Terminologico e Riconoscimenti', link: '/whitepaper/appendix/section3' },
            { text: '11.4 Disclaimer e Partecipazione', link: '/whitepaper/appendix/section4' }
          ]
        }
      ],
      '/economics/': [
        {
          text: 'Modello Economico',
          items: [
            { text: 'Panoramica', link: '/economics/' },
            { text: 'Teoria del Valore della Rete', link: '/economics/network-value' },
            { text: 'Modello di Entrate', link: '/economics/revenue-model' },
            { text: 'Gestione del Rischio', link: '/economics/risk-management' },
            { text: 'Analisi di Sostenibilità', link: '/economics/sustainability' }
          ]
        }
      ]
    },

    // Testi interfaccia italiana
    outlineTitle: 'Indice',
    docFooter: {
      prev: 'Pagina precedente',
      next: 'Pagina successiva'
    },
    darkModeSwitchLabel: 'Aspetto',
    sidebarMenuLabel: 'Menu',
    returnToTopLabel: 'Torna in alto'
  }
}
```