```javascript
export const es = {
  title: 'Libro Blanco de Utopía',
  description: 'Red de Riqueza Libre por Consenso: Ecosistema de Flujo de Valor Auto-Evolutivo',
  
  themeConfig: {
    logo: '/logo/logo2.svg',
    nav: [
      { text: 'Libro Blanco', link: '/whitepaper/' },
      { text: 'Modelo Económico', link: '/economics/' }
    ],

    sidebar: {
      '/whitepaper/': [
        {
          text: 'Prefacio',
          link: '/whitepaper/'
        },
        {
          text: 'Capítulo 1: Reflexión Filosófica sobre la Libertad de Riqueza',
          link: '/whitepaper/chapter1/'
        },
        {
          text: 'Capítulo 2: El Nacimiento de Utopía',
          link: '/whitepaper/chapter2/'
        },
        {
          text: 'Capítulo 3: Sistema de Piscina de Resonancia',
          collapsed: false,
          items: [
            { text: 'Resumen del Capítulo', link: '/whitepaper/chapter3/' },
            { text: '3.1 Fundamentos Filosóficos de la Piscina de Resonancia', link: '/whitepaper/chapter3/section1' },
            { text: '3.2 Estructura de Resonancia Cuatridimensional', link: '/whitepaper/chapter3/section2' },
            { text: '3.3 Principio de Amplificación de Resonancia', link: '/whitepaper/chapter3/section3' },
            { text: '3.4 Proceso de Participación', link: '/whitepaper/chapter3/section4' }
          ]
        },
        {
          text: 'Capítulo 4: Red de Consenso Regional',
          collapsed: false,
          items: [
            { text: 'Resumen del Capítulo', link: '/whitepaper/chapter4/' },
            { text: '4.1 Estructura de Carta Estelar y Consenso Dimensional', link: '/whitepaper/chapter4/section1' },
            { text: '4.2 Algoritmo de Consenso de Valor y Mapa Estelar', link: '/whitepaper/chapter4/section2' },
            { text: '4.3 Filosofía de Red y Práctica Técnica', link: '/whitepaper/chapter4/section3' }
          ]
        },
        {
          text: 'Capítulo 5: Sistema de Nodos de Prosperidad',
          collapsed: false,
          items: [
            { text: 'Resumen del Capítulo', link: '/whitepaper/chapter5/' },
            { text: '5.1 Naturaleza y Selección de Nodos de Prosperidad', link: '/whitepaper/chapter5/section1' },
            { text: '5.2 Compartición Galáctica y Distribución de Valor', link: '/whitepaper/chapter5/section2' },
            { text: '5.3 Motor de Prosperidad y Equilibrio Dinámico', link: '/whitepaper/chapter5/section3' }
          ]
        },
        {
          text: 'Capítulo 6: Mecanismo de Reinicio Fénix',
          collapsed: false,
          items: [
            { text: 'Resumen del Capítulo', link: '/whitepaper/chapter6/' },
            { text: '6.1 Filosofía y Mecanismo de Activación del Reinicio Fénix', link: '/whitepaper/chapter6/section1' },
            { text: '6.2 Diseño del Proceso de Renacimiento Fénix', link: '/whitepaper/chapter6/section2' },
            { text: '6.3 Análisis de Principios Económicos', link: '/whitepaper/chapter6/section3' },
            { text: '6.4 Mecanismo de Recompensa de Prosperidad Continua', link: '/whitepaper/chapter6/section4' },
            { text: '6.5 Análisis de Teoría de Juegos y Significado Último', link: '/whitepaper/chapter6/section5' }
          ]
        },
        {
          text: 'Capítulo 7: Contratos Inteligentes Impulsados por Información',
          collapsed: false,
          items: [
            { text: 'Resumen del Capítulo', link: '/whitepaper/chapter7/' },
            { text: '7.1 Diseño de Arquitectura y Concepto', link: '/whitepaper/chapter7/section1' },
            { text: '7.2 Motor de Pre-cálculo y Mecanismos de Seguridad', link: '/whitepaper/chapter7/section2' },
            { text: '7.3 Interacción de Usuario y Descentralización', link: '/whitepaper/chapter7/section3' },
            { text: '7.4 Transparencia y Resumen Técnico', link: '/whitepaper/chapter7/section4' }
          ]
        },
        {
          text: 'Capítulo 8: Modelado Matemático',
          collapsed: false,
          items: [
            { text: 'Resumen del Capítulo', link: '/whitepaper/chapter8/' },
            { text: '8.1 Variables Centrales y Modelo de Estabilidad', link: '/whitepaper/chapter8/section1' },
            { text: '8.2 Efecto de Red y Equilibrio Dinámico', link: '/whitepaper/chapter8/section2' },
            { text: '8.3 Algoritmo Fénix y Prueba de Estrés', link: '/whitepaper/chapter8/section3' },
            { text: '8.4 Teoría Económica y Conclusión', link: '/whitepaper/chapter8/section4' }
          ]
        },
        {
          text: 'Capítulo 9: Aclaración de Conceptos Erróneos Comunes',
          collapsed: false,
          items: [
            { text: 'Resumen del Capítulo', link: '/whitepaper/chapter9/' },
            { text: '9.1 Concepto Erróneo 1: Esto es un esquema Ponzi o fondo de dinero', link: '/whitepaper/chapter9/section1' },
            { text: '9.2 Concepto Erróneo 2: Los altos rendimientos no son sostenibles', link: '/whitepaper/chapter9/section2' },
            { text: '9.3 Concepto Erróneo 3: Falta de soporte de valor real', link: '/whitepaper/chapter9/section3' },
            { text: '9.4 Concepto Erróneo 4: Complejidad técnica para engañar', link: '/whitepaper/chapter9/section4' },
            { text: '9.5 Concepto Erróneo 5: Riesgos demasiado altos e incontrolables', link: '/whitepaper/chapter9/section5' },
            { text: '9.6 Concepto Erróneo 6: Solo un juego de papa caliente', link: '/whitepaper/chapter9/section6' },
            { text: '9.7 Concepto Erróneo 7: El sistema podría ser manipulado', link: '/whitepaper/chapter9/section7' },
            { text: '9.8 Concepto Erróneo 8: El modelo económico no es sostenible', link: '/whitepaper/chapter9/section8' },
            { text: '9.9 Concepto Erróneo 9: El equipo podría huir', link: '/whitepaper/chapter9/section9' },
            { text: '9.10 Concepto Erróneo 10: Solo los participantes tempranos se benefician', link: '/whitepaper/chapter9/section10' },
            { text: '9.11 Conclusión: Cognición Racional y Elección Sabia', link: '/whitepaper/chapter9/section11' },
            { text: '9.12 Apéndice: Guía de Verificación Técnica', link: '/whitepaper/chapter9/section12' },
            { text: '9.13 Herramientas de Verificación Comunitaria', link: '/whitepaper/chapter9/section13' }
          ]
        },
        {
          text: 'Capítulo 10: Conclusión - Semillas del Pensamiento',
          link: '/whitepaper/chapter10/'
        },
        {
          text: 'Capítulo 11: Apéndice',
          collapsed: false,
          items: [
            { text: 'Resumen del Capítulo', link: '/whitepaper/appendix/' },
            { text: '11.1 Glosario de Conceptos Centrales', link: '/whitepaper/appendix/section1' },
            { text: '11.2 Parámetros del Sistema y Materiales de Referencia', link: '/whitepaper/appendix/section2' },
            { text: '11.3 Comparación de Terminología y Reconocimientos', link: '/whitepaper/appendix/section3' },
            { text: '11.4 Descargo de Responsabilidad y Participación', link: '/whitepaper/appendix/section4' }
          ]
        }
      ],
      '/economics/': [
        {
          text: 'Modelo Económico',
          items: [
            { text: 'Resumen', link: '/economics/' },
            { text: 'Teoría del Valor de Red', link: '/economics/network-value' },
            { text: 'Modelo de Ingresos', link: '/economics/revenue-model' },
            { text: 'Gestión de Riesgos', link: '/economics/risk-management' },
            { text: 'Análisis de Sostenibilidad', link: '/economics/sustainability' }
          ]
        }
      ]
    },

    // Textos de interfaz en español
    outlineTitle: 'Contenido',
    docFooter: {
      prev: 'Página anterior',
      next: 'Página siguiente'
    },
    darkModeSwitchLabel: 'Apariencia',
    sidebarMenuLabel: 'Menú',
    returnToTopLabel: 'Volver arriba'
  }
}
```