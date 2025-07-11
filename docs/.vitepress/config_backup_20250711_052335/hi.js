export const hi = {
  title: 'यूटोपिया श्वेतपत्र',
  description: 'सहमति मुक्त संपत्ति नेटवर्क: मूल्य प्रवाह पारिस्थितिकी तंत्र का स्व-शासित विकास',
  
  themeConfig: {
    logo: '/logo/logo2.svg',
    nav: [
      { text: 'श्वेतपत्र', link: '/hi/whitepaper/' },
      { text: 'अर्थशास्त्र', link: '/hi/economics/' }
    ],

    sidebar: {
      '/hi/whitepaper/': [
        {
          text: 'प्रस्तावना',
          link: '/hi/whitepaper/'
        },
        {
          text: 'अध्याय 1: वित्तीय स्वतंत्रता का दर्शन',
          collapsed: false,
          items: [
            { text: 'संपत्ति का सार', link: '/hi/whitepaper/chapter1/section1' },
            { text: 'सहमति का निर्माण और विकास', link: '/hi/whitepaper/chapter1/section2' },
            { text: 'स्वतंत्रता की सीमाओं को परिभाषित करना', link: '/hi/whitepaper/chapter1/section3' }
          ]
        },
        {
          text: 'अध्याय 2: यूटोपिया का जन्म',
          collapsed: false,
          items: [
            { text: 'दृष्टि और मिशन', link: '/hi/whitepaper/chapter2/section1' },
            { text: 'मुख्य मूल्य', link: '/hi/whitepaper/chapter2/section2' },
            { text: 'सिस्टम आर्किटेक्चर अवलोकन', link: '/hi/whitepaper/chapter2/section3' }
          ]
        },
        {
          text: 'अध्याय 3: अनुनाद पूल प्रणाली',
          collapsed: false,
          items: [
            { text: 'दार्शनिक आधार', link: '/hi/whitepaper/chapter3/section1' },
            { text: 'चार-आयामी संरचना', link: '/hi/whitepaper/chapter3/section2' },
            { text: 'अनुनाद प्रवर्धन', link: '/hi/whitepaper/chapter3/section3' },
            { text: 'अनुनाद प्रक्रिया', link: '/hi/whitepaper/chapter3/section4' }
          ]
        },
        {
          text: 'अध्याय 4: क्षेत्र सहमति नेटवर्क',
          collapsed: false,
          items: [
            { text: 'खगोलीय संरचना', link: '/hi/whitepaper/chapter4/section1' },
            { text: 'आयामी सहमति', link: '/hi/whitepaper/chapter4/section2' },
            { text: 'मूल्य सहमति एल्गोरिदम', link: '/hi/whitepaper/chapter4/section3' },
            { text: 'सहमति तारा मानचित्र', link: '/hi/whitepaper/chapter4/section4' }
          ]
        },
        {
          text: 'अध्याय 5: समृद्धि नोड प्रणाली',
          collapsed: false,
          items: [
            { text: 'समृद्धि नोड्स का सार', link: '/hi/whitepaper/chapter5/section1' },
            { text: 'मूल्य का प्रमाण तंत्र', link: '/hi/whitepaper/chapter5/section2' },
            { text: 'गैलेक्टिक साझाकरण तंत्र', link: '/hi/whitepaper/chapter5/section3' },
            { text: 'समृद्धि इंजन कार्य', link: '/hi/whitepaper/chapter5/section4' }
          ]
        },
        {
          text: 'अध्याय 6: फीनिक्स पुनः प्रारंभ तंत्र',
          collapsed: false,
          items: [
            { text: 'शाश्वत चक्रों का दर्शन', link: '/hi/whitepaper/chapter6/section1' },
            { text: 'फीनिक्स पुनर्जन्म प्रक्रिया', link: '/hi/whitepaper/chapter6/section2' },
            { text: 'आर्थिक सिद्धांत विश्लेषण', link: '/hi/whitepaper/chapter6/section3' },
            { text: 'निरंतर समृद्धि पुरस्कार', link: '/hi/whitepaper/chapter6/section4' }
          ]
        },
        {
          text: 'अध्याय 7: स्मार्ट कॉन्ट्रैक्ट आर्किटेक्चर',
          collapsed: false,
          items: [
            { text: 'कभी अपग्रेड न करने का दर्शन', link: '/hi/whitepaper/chapter7/section1' },
            { text: 'पूर्व-गणना इंजन', link: '/hi/whitepaper/chapter7/section2' },
            { text: 'विकेंद्रीकरण गारंटी', link: '/hi/whitepaper/chapter7/section3' },
            { text: 'ऑन-चेन पारदर्शिता', link: '/hi/whitepaper/chapter7/section4' }
          ]
        },
        {
          text: 'अध्याय 8: आर्थिक मॉडल',
          collapsed: false,
          items: [
            { text: 'गतिशील संतुलन एल्गोरिदम', link: '/hi/whitepaper/chapter8/section1' },
            { text: 'फीनिक्स पुनः प्रारंभ एल्गोरिदम', link: '/hi/whitepaper/chapter8/section2' },
            { text: 'तनाव परीक्षण विश्लेषण', link: '/hi/whitepaper/chapter8/section3' },
            { text: 'मोंटे कार्लो सिमुलेशन', link: '/hi/whitepaper/chapter8/section4' }
          ]
        },
        {
          text: 'अध्याय 9: भ्रांतियों का स्पष्टीकरण',
          collapsed: false,
          items: [
            { text: 'सिस्टम प्रकृति भ्रांतियां', link: '/hi/whitepaper/chapter9/section1' },
            { text: 'जटिलता भ्रांतियां', link: '/hi/whitepaper/chapter9/section2' },
            { text: 'तकनीकी सुरक्षा भ्रांतियां', link: '/hi/whitepaper/chapter9/section3' },
            { text: 'स्थिरता भ्रांतियां', link: '/hi/whitepaper/chapter9/section4' }
          ]
        },
        {
          text: 'अध्याय 10: निष्कर्ष',
          collapsed: false,
          items: [
            { text: 'विचार के बीज', link: '/hi/whitepaper/chapter10/section1' },
            { text: 'हमारा साझा भविष्य', link: '/hi/whitepaper/chapter10/section2' },
            { text: 'शाश्वत मूल्य', link: '/hi/whitepaper/chapter10/section3' }
          ]
        },
        {
          text: 'परिशिष्ट',
          collapsed: false,
          items: [
            { text: 'शब्दावली', link: '/hi/whitepaper/appendix/glossary' },
            { text: 'सिस्टम पैरामीटर', link: '/hi/whitepaper/appendix/parameters' },
            { text: 'सत्यापन गाइड', link: '/hi/whitepaper/appendix/verification' },
            { text: 'अस्वीकरण', link: '/hi/whitepaper/appendix/disclaimer' }
          ]
        }
      ],
      '/hi/economics/': [
        {
          text: 'आर्थिक मॉडल',
          items: [
            { text: 'अवलोकन', link: '/hi/economics/' },
            { text: 'नेटवर्क मूल्य सिद्धांत', link: '/hi/economics/network-value' },
            { text: 'राजस्व मॉडल', link: '/hi/economics/revenue-model' },
            { text: 'जोखिम प्रबंधन', link: '/hi/economics/risk-management' },
            { text: 'स्थिरता विश्लेषण', link: '/hi/economics/sustainability' }
          ]
        }
      ],
      '/hi/technology/': [
        {
          text: 'तकनीकी आर्किटेक्चर',
          items: [
            { text: 'अवलोकन', link: '/hi/technology/' },
            { text: 'स्मार्ट कॉन्ट्रैक्ट्स', link: '/hi/technology/smart-contract' },
            { text: 'सुरक्षा तंत्र', link: '/hi/technology/security' },
            { text: 'API दस्तावेज़ीकरण', link: '/hi/technology/api' }
          ]
        }
      ]
    },

    // Hindi interface text
    editLink: {
      pattern: 'https://github.com/utopia-project/whitepaper/edit/main/docs/:path',
      text: 'इस पृष्ठ को GitHub पर संपादित करें'
    }
  }
}