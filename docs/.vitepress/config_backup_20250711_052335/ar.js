export const ar = {
  title: 'الورقة البيضاء ليوتوبيا',
  description: 'شبكة الثروة الحرة بالإجماع: التطور الذاتي الحكم لنظام تدفق القيمة',
  
  themeConfig: {
    logo: '/logo/logo2.svg',
    nav: [
      { text: 'الورقة البيضاء', link: '/ar/whitepaper/' },
      { text: 'الاقتصاد', link: '/ar/economics/' }
    ],

    sidebar: {
      '/ar/whitepaper/': [
        {
          text: 'المقدمة',
          link: '/ar/whitepaper/'
        },
        {
          text: 'الفصل 1: فلسفة الحرية المالية',
          collapsed: false,
          items: [
            { text: 'جوهر الثروة', link: '/ar/whitepaper/chapter1/section1' },
            { text: 'تشكيل وتطور الإجماع', link: '/ar/whitepaper/chapter1/section2' },
            { text: 'تحديد حدود الحرية', link: '/ar/whitepaper/chapter1/section3' }
          ]
        },
        {
          text: 'الفصل 2: ولادة يوتوبيا',
          collapsed: false,
          items: [
            { text: 'الرؤية والرسالة', link: '/ar/whitepaper/chapter2/section1' },
            { text: 'القيم الأساسية', link: '/ar/whitepaper/chapter2/section2' },
            { text: 'نظرة عامة على هندسة النظام', link: '/ar/whitepaper/chapter2/section3' }
          ]
        },
        {
          text: 'الفصل 3: نظام حوض الرنين',
          collapsed: false,
          items: [
            { text: 'الأساس الفلسفي', link: '/ar/whitepaper/chapter3/section1' },
            { text: 'الهيكل الرباعي الأبعاد', link: '/ar/whitepaper/chapter3/section2' },
            { text: 'تضخيم الرنين', link: '/ar/whitepaper/chapter3/section3' },
            { text: 'عملية الرنين', link: '/ar/whitepaper/chapter3/section4' }
          ]
        },
        {
          text: 'الفصل 4: شبكة إجماع المنطقة',
          collapsed: false,
          items: [
            { text: 'الهيكل النجمي', link: '/ar/whitepaper/chapter4/section1' },
            { text: 'الإجماع البعدي', link: '/ar/whitepaper/chapter4/section2' },
            { text: 'خوارزمية إجماع القيمة', link: '/ar/whitepaper/chapter4/section3' },
            { text: 'خريطة نجوم الإجماع', link: '/ar/whitepaper/chapter4/section4' }
          ]
        },
        {
          text: 'الفصل 5: نظام عقد الازدهار',
          collapsed: false,
          items: [
            { text: 'جوهر عقد الازدهار', link: '/ar/whitepaper/chapter5/section1' },
            { text: 'آلية إثبات القيمة', link: '/ar/whitepaper/chapter5/section2' },
            { text: 'آلية المشاركة المجرية', link: '/ar/whitepaper/chapter5/section3' },
            { text: 'وظائف محرك الازدهار', link: '/ar/whitepaper/chapter5/section4' }
          ]
        },
        {
          text: 'الفصل 6: آلية إعادة تشغيل العنقاء',
          collapsed: false,
          items: [
            { text: 'فلسفة الدورات الأبدية', link: '/ar/whitepaper/chapter6/section1' },
            { text: 'عملية ولادة العنقاء من جديد', link: '/ar/whitepaper/chapter6/section2' },
            { text: 'تحليل المبادئ الاقتصادية', link: '/ar/whitepaper/chapter6/section3' },
            { text: 'مكافآت الازدهار المستمر', link: '/ar/whitepaper/chapter6/section4' }
          ]
        },
        {
          text: 'الفصل 7: هندسة العقود الذكية',
          collapsed: false,
          items: [
            { text: 'فلسفة عدم الترقية أبدًا', link: '/ar/whitepaper/chapter7/section1' },
            { text: 'محرك الحساب المسبق', link: '/ar/whitepaper/chapter7/section2' },
            { text: 'ضمان اللامركزية', link: '/ar/whitepaper/chapter7/section3' },
            { text: 'الشفافية على السلسلة', link: '/ar/whitepaper/chapter7/section4' }
          ]
        },
        {
          text: 'الفصل 8: النموذج الاقتصادي',
          collapsed: false,
          items: [
            { text: 'خوارزمية التوازن الديناميكي', link: '/ar/whitepaper/chapter8/section1' },
            { text: 'خوارزمية إعادة تشغيل العنقاء', link: '/ar/whitepaper/chapter8/section2' },
            { text: 'تحليل اختبار الإجهاد', link: '/ar/whitepaper/chapter8/section3' },
            { text: 'محاكاة مونت كارلو', link: '/ar/whitepaper/chapter8/section4' }
          ]
        },
        {
          text: 'الفصل 9: توضيح المفاهيم الخاطئة',
          collapsed: false,
          items: [
            { text: 'المفاهيم الخاطئة حول طبيعة النظام', link: '/ar/whitepaper/chapter9/section1' },
            { text: 'المفاهيم الخاطئة حول التعقيد', link: '/ar/whitepaper/chapter9/section2' },
            { text: 'المفاهيم الخاطئة حول الأمان التقني', link: '/ar/whitepaper/chapter9/section3' },
            { text: 'المفاهيم الخاطئة حول الاستدامة', link: '/ar/whitepaper/chapter9/section4' }
          ]
        },
        {
          text: 'الفصل 10: الخاتمة',
          collapsed: false,
          items: [
            { text: 'بذور الفكر', link: '/ar/whitepaper/chapter10/section1' },
            { text: 'مستقبلنا المشترك', link: '/ar/whitepaper/chapter10/section2' },
            { text: 'القيمة الأبدية', link: '/ar/whitepaper/chapter10/section3' }
          ]
        },
        {
          text: 'الملحق',
          collapsed: false,
          items: [
            { text: 'المصطلحات', link: '/ar/whitepaper/appendix/glossary' },
            { text: 'معاملات النظام', link: '/ar/whitepaper/appendix/parameters' },
            { text: 'دليل التحقق', link: '/ar/whitepaper/appendix/verification' },
            { text: 'إخلاء المسؤولية', link: '/ar/whitepaper/appendix/disclaimer' }
          ]
        }
      ],
      '/ar/economics/': [
        {
          text: 'النموذج الاقتصادي',
          items: [
            { text: 'نظرة عامة', link: '/ar/economics/' },
            { text: 'نظرية قيمة الشبكة', link: '/ar/economics/network-value' },
            { text: 'نموذج الإيرادات', link: '/ar/economics/revenue-model' },
            { text: 'إدارة المخاطر', link: '/ar/economics/risk-management' },
            { text: 'تحليل الاستدامة', link: '/ar/economics/sustainability' }
          ]
        }
      ]
    },

    // Arabic interface text
    editLink: {
      pattern: 'https://github.com/utopia-project/whitepaper/edit/main/docs/:path',
      text: 'تحرير هذه الصفحة على GitHub'
    }
  }
}