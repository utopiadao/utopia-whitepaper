export const ru = {
  title: 'Белая книга UTOPIA',
  description: 'Сеть богатства без консенсуса: Самоуправляемая эволюция экосистемы потоков ценности',
  
  themeConfig: {
    logo: '/logo/logo2.svg',
    nav: [
      { text: 'Белая книга', link: '/ru/whitepaper/' },
      { text: 'Экономика', link: '/ru/economics/' }
    ],

    sidebar: {
      '/ru/whitepaper/': [
        {
          text: 'Предисловие',
          link: '/ru/whitepaper/'
        },
        {
          text: 'Глава 1: Философия финансовой свободы',
          collapsed: false,
          items: [
            { text: 'Сущность богатства', link: '/ru/whitepaper/chapter1/section1' },
            { text: 'Формирование и эволюция консенсуса', link: '/ru/whitepaper/chapter1/section2' },
            { text: 'Определение границ свободы', link: '/ru/whitepaper/chapter1/section3' }
          ]
        },
        {
          text: 'Глава 2: Рождение Утопии',
          collapsed: false,
          items: [
            { text: 'Видение и миссия', link: '/ru/whitepaper/chapter2/section1' },
            { text: 'Основные ценности', link: '/ru/whitepaper/chapter2/section2' },
            { text: 'Обзор системной архитектуры', link: '/ru/whitepaper/chapter2/section3' }
          ]
        },
        {
          text: 'Глава 3: Система резонансного пула',
          collapsed: false,
          items: [
            { text: 'Философская основа', link: '/ru/whitepaper/chapter3/section1' },
            { text: 'Четырехмерная структура', link: '/ru/whitepaper/chapter3/section2' },
            { text: 'Усиление резонанса', link: '/ru/whitepaper/chapter3/section3' },
            { text: 'Процесс резонанса', link: '/ru/whitepaper/chapter3/section4' }
          ]
        },
        {
          text: 'Глава 4: Сеть зонового консенсуса',
          collapsed: false,
          items: [
            { text: 'Астральная структура', link: '/ru/whitepaper/chapter4/section1' },
            { text: 'Измерительный консенсус', link: '/ru/whitepaper/chapter4/section2' },
            { text: 'Алгоритм консенсуса ценности', link: '/ru/whitepaper/chapter4/section3' },
            { text: 'Звездная карта консенсуса', link: '/ru/whitepaper/chapter4/section4' }
          ]
        },
        {
          text: 'Глава 5: Система узлов процветания',
          collapsed: false,
          items: [
            { text: 'Сущность узлов процветания', link: '/ru/whitepaper/chapter5/section1' },
            { text: 'Механизм доказательства ценности', link: '/ru/whitepaper/chapter5/section2' },
            { text: 'Механизм галактического обмена', link: '/ru/whitepaper/chapter5/section3' },
            { text: 'Функции двигателя процветания', link: '/ru/whitepaper/chapter5/section4' }
          ]
        },
        {
          text: 'Глава 6: Механизм перезапуска Феникс',
          collapsed: false,
          items: [
            { text: 'Философия вечных циклов', link: '/ru/whitepaper/chapter6/section1' },
            { text: 'Процесс возрождения Феникса', link: '/ru/whitepaper/chapter6/section2' },
            { text: 'Анализ экономических принципов', link: '/ru/whitepaper/chapter6/section3' },
            { text: 'Непрерывные награды процветания', link: '/ru/whitepaper/chapter6/section4' }
          ]
        },
        {
          text: 'Глава 7: Архитектура смарт-контрактов',
          collapsed: false,
          items: [
            { text: 'Философия без обновлений', link: '/ru/whitepaper/chapter7/section1' },
            { text: 'Движок предварительных вычислений', link: '/ru/whitepaper/chapter7/section2' },
            { text: 'Гарантия децентрализации', link: '/ru/whitepaper/chapter7/section3' },
            { text: 'Прозрачность на блокчейне', link: '/ru/whitepaper/chapter7/section4' }
          ]
        },
        {
          text: 'Глава 8: Экономическая модель',
          collapsed: false,
          items: [
            { text: 'Алгоритм динамического баланса', link: '/ru/whitepaper/chapter8/section1' },
            { text: 'Алгоритм перезапуска Феникс', link: '/ru/whitepaper/chapter8/section2' },
            { text: 'Анализ стресс-тестирования', link: '/ru/whitepaper/chapter8/section3' },
            { text: 'Моделирование Монте-Карло', link: '/ru/whitepaper/chapter8/section4' }
          ]
        },
        {
          text: 'Глава 9: Разъяснение заблуждений',
          collapsed: false,
          items: [
            { text: 'Заблуждения о природе системы', link: '/ru/whitepaper/chapter9/section1' },
            { text: 'Заблуждения о сложности', link: '/ru/whitepaper/chapter9/section2' },
            { text: 'Заблуждения о технической безопасности', link: '/ru/whitepaper/chapter9/section3' },
            { text: 'Заблуждения об устойчивости', link: '/ru/whitepaper/chapter9/section4' }
          ]
        },
        {
          text: 'Глава 10: Заключение',
          collapsed: false,
          items: [
            { text: 'Семена мысли', link: '/ru/whitepaper/chapter10/section1' },
            { text: 'Наше общее будущее', link: '/ru/whitepaper/chapter10/section2' },
            { text: 'Вечная ценность', link: '/ru/whitepaper/chapter10/section3' }
          ]
        },
        {
          text: 'Приложение',
          collapsed: false,
          items: [
            { text: 'Глоссарий', link: '/ru/whitepaper/appendix/glossary' },
            { text: 'Параметры системы', link: '/ru/whitepaper/appendix/parameters' },
            { text: 'Руководство по проверке', link: '/ru/whitepaper/appendix/verification' },
            { text: 'Отказ от ответственности', link: '/ru/whitepaper/appendix/disclaimer' }
          ]
        }
      ],
      '/ru/economics/': [
        {
          text: 'Экономическая модель',
          items: [
            { text: 'Обзор', link: '/ru/economics/' },
            { text: 'Теория сетевой ценности', link: '/ru/economics/network-value' },
            { text: 'Модель доходов', link: '/ru/economics/revenue-model' },
            { text: 'Управление рисками', link: '/ru/economics/risk-management' },
            { text: 'Анализ устойчивости', link: '/ru/economics/sustainability' }
          ]
        }
      ],
      '/ru/technology/': [
        {
          text: 'Техническая архитектура',
          items: [
            { text: 'Обзор', link: '/ru/technology/' },
            { text: 'Смарт-контракты', link: '/ru/technology/smart-contract' },
            { text: 'Механизмы безопасности', link: '/ru/technology/security' },
            { text: 'API документация', link: '/ru/technology/api' }
          ]
        }
      ]
    },

    // Russian interface text
    editLink: {
      pattern: 'https://github.com/utopia-project/whitepaper/edit/main/docs/:path',
      text: 'Редактировать эту страницу на GitHub'
    }
  }
}