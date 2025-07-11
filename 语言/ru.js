```javascript
export const ru = {
  title: 'Белая книга Утопии',
  description: 'Сеть свободного богатства на основе консенсуса: саморазвивающаяся экосистема потока ценности',
  
  themeConfig: {
    logo: '/logo/logo2.svg',
    nav: [
      { text: 'Белая книга', link: '/whitepaper/' },
      { text: 'Экономическая модель', link: '/economics/' }
    ],

    sidebar: {
      '/whitepaper/': [
        {
          text: 'Предисловие',
          link: '/whitepaper/'
        },
        {
          text: 'Глава 1: Философские размышления о свободе богатства',
          link: '/whitepaper/chapter1/'
        },
        {
          text: 'Глава 2: Рождение Утопии',
          link: '/whitepaper/chapter2/'
        },
        {
          text: 'Глава 3: Система резонансного пула',
          collapsed: false,
          items: [
            { text: 'Обзор главы', link: '/whitepaper/chapter3/' },
            { text: '3.1 Философские основы резонансного пула', link: '/whitepaper/chapter3/section1' },
            { text: '3.2 Четырехмерная резонансная структура', link: '/whitepaper/chapter3/section2' },
            { text: '3.3 Принцип усиления резонанса', link: '/whitepaper/chapter3/section3' },
            { text: '3.4 Процесс участия', link: '/whitepaper/chapter3/section4' }
          ]
        },
        {
          text: 'Глава 4: Региональная сеть консенсуса',
          collapsed: false,
          items: [
            { text: 'Обзор главы', link: '/whitepaper/chapter4/' },
            { text: '4.1 Структура звездной карты и размерный консенсус', link: '/whitepaper/chapter4/section1' },
            { text: '4.2 Алгоритм консенсуса ценности и звездная карта', link: '/whitepaper/chapter4/section2' },
            { text: '4.3 Философия сети и техническая практика', link: '/whitepaper/chapter4/section3' }
          ]
        },
        {
          text: 'Глава 5: Система узлов процветания',
          collapsed: false,
          items: [
            { text: 'Обзор главы', link: '/whitepaper/chapter5/' },
            { text: '5.1 Природа и отбор узлов процветания', link: '/whitepaper/chapter5/section1' },
            { text: '5.2 Галактическое разделение и распределение ценности', link: '/whitepaper/chapter5/section2' },
            { text: '5.3 Двигатель процветания и динамический баланс', link: '/whitepaper/chapter5/section3' }
          ]
        },
        {
          text: 'Глава 6: Механизм перезапуска Феникса',
          collapsed: false,
          items: [
            { text: 'Обзор главы', link: '/whitepaper/chapter6/' },
            { text: '6.1 Философия и механизм запуска перезапуска Феникса', link: '/whitepaper/chapter6/section1' },
            { text: '6.2 Дизайн процесса возрождения Феникса', link: '/whitepaper/chapter6/section2' },
            { text: '6.3 Анализ экономических принципов', link: '/whitepaper/chapter6/section3' },
            { text: '6.4 Механизм непрерывного вознаграждения за процветание', link: '/whitepaper/chapter6/section4' },
            { text: '6.5 Анализ теории игр и конечное значение', link: '/whitepaper/chapter6/section5' }
          ]
        },
        {
          text: 'Глава 7: Смарт-контракты, управляемые информацией',
          collapsed: false,
          items: [
            { text: 'Обзор главы', link: '/whitepaper/chapter7/' },
            { text: '7.1 Архитектурный дизайн и концепция', link: '/whitepaper/chapter7/section1' },
            { text: '7.2 Движок предварительных вычислений и механизмы безопасности', link: '/whitepaper/chapter7/section2' },
            { text: '7.3 Взаимодействие с пользователем и децентрализация', link: '/whitepaper/chapter7/section3' },
            { text: '7.4 Прозрачность и техническое резюме', link: '/whitepaper/chapter7/section4' }
          ]
        },
        {
          text: 'Глава 8: Математическое моделирование',
          collapsed: false,
          items: [
            { text: 'Обзор главы', link: '/whitepaper/chapter8/' },
            { text: '8.1 Основные переменные и модель стабильности', link: '/whitepaper/chapter8/section1' },
            { text: '8.2 Сетевой эффект и динамический баланс', link: '/whitepaper/chapter8/section2' },
            { text: '8.3 Алгоритм Феникса и стресс-тестирование', link: '/whitepaper/chapter8/section3' },
            { text: '8.4 Экономическая теория и заключение', link: '/whitepaper/chapter8/section4' }
          ]
        },
        {
          text: 'Глава 9: Разъяснение распространенных заблуждений',
          collapsed: false,
          items: [
            { text: 'Обзор главы', link: '/whitepaper/chapter9/' },
            { text: '9.1 Заблуждение 1: Это схема Понци или денежный пул', link: '/whitepaper/chapter9/section1' },
            { text: '9.2 Заблуждение 2: Высокие доходы неустойчивы', link: '/whitepaper/chapter9/section2' },
            { text: '9.3 Заблуждение 3: Отсутствие поддержки реальной ценности', link: '/whitepaper/chapter9/section3' },
            { text: '9.4 Заблуждение 4: Техническая сложность для обмана', link: '/whitepaper/chapter9/section4' },
            { text: '9.5 Заблуждение 5: Риски слишком высоки и неконтролируемы', link: '/whitepaper/chapter9/section5' },
            { text: '9.6 Заблуждение 6: Просто игра в горячую картошку', link: '/whitepaper/chapter9/section6' },
            { text: '9.7 Заблуждение 7: Системой можно манипулировать', link: '/whitepaper/chapter9/section7' },
            { text: '9.8 Заблуждение 8: Экономическая модель неустойчива', link: '/whitepaper/chapter9/section8' },
            { text: '9.9 Заблуждение 9: Команда может сбежать', link: '/whitepaper/chapter9/section9' },
            { text: '9.10 Заблуждение 10: Только ранние участники получают выгоду', link: '/whitepaper/chapter9/section10' },
            { text: '9.11 Заключение: Рациональное познание и мудрый выбор', link: '/whitepaper/chapter9/section11' },
            { text: '9.12 Приложение: Руководство по технической проверке', link: '/whitepaper/chapter9/section12' },
            { text: '9.13 Инструменты проверки сообщества', link: '/whitepaper/chapter9/section13' }
          ]
        },
        {
          text: 'Глава 10: Заключение - Семена мысли',
          link: '/whitepaper/chapter10/'
        },
        {
          text: 'Глава 11: Приложение',
          collapsed: false,
          items: [
            { text: 'Обзор главы', link: '/whitepaper/appendix/' },
            { text: '11.1 Глоссарий основных концепций', link: '/whitepaper/appendix/section1' },
            { text: '11.2 Параметры системы и справочные материалы', link: '/whitepaper/appendix/section2' },
            { text: '11.3 Сравнение терминологии и благодарности', link: '/whitepaper/appendix/section3' },
            { text: '11.4 Отказ от ответственности и участие', link: '/whitepaper/appendix/section4' }
          ]
        }
      ],
      '/economics/': [
        {
          text: 'Экономическая модель',
          items: [
            { text: 'Обзор', link: '/economics/' },
            { text: 'Теория сетевой ценности', link: '/economics/network-value' },
            { text: 'Модель доходов', link: '/economics/revenue-model' },
            { text: 'Управление рисками', link: '/economics/risk-management' },
            { text: 'Анализ устойчивости', link: '/economics/sustainability' }
          ]
        }
      ]
    },

    // Русские тексты интерфейса
    outlineTitle: 'Содержание',
    docFooter: {
      prev: 'Предыдущая страница',
      next: 'Следующая страница'
    },
    darkModeSwitchLabel: 'Внешний вид',
    sidebarMenuLabel: 'Меню',
    returnToTopLabel: 'Вернуться наверх'
  }
}