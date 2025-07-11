```javascript
export const ar = {
  title: 'الكتاب الأبيض لليوتوبيا',
  description: 'شبكة الثروة الحرة القائمة على الإجماع: نظام بيئي لتدفق القيمة يتطور ذاتياً',
  
  themeConfig: {
    logo: '/logo/logo2.svg',
    nav: [
      { text: 'الكتاب الأبيض', link: '/whitepaper/' },
      { text: 'النموذج الاقتصادي', link: '/economics/' }
    ],

    sidebar: {
      '/whitepaper/': [
        {
          text: 'المقدمة',
          link: '/whitepaper/'
        },
        {
          text: 'الفصل الأول: التفكير الفلسفي في حرية الثروة',
          link: '/whitepaper/chapter1/'
        },
        {
          text: 'الفصل الثاني: ولادة اليوتوبيا',
          link: '/whitepaper/chapter2/'
        },
        {
          text: 'الفصل الثالث: نظام مجمع الرنين',
          collapsed: false,
          items: [
            { text: 'نظرة عامة على الفصل', link: '/whitepaper/chapter3/' },
            { text: '3.1 الأسس الفلسفية لمجمع الرنين', link: '/whitepaper/chapter3/section1' },
            { text: '3.2 هيكل الرنين رباعي الأبعاد', link: '/whitepaper/chapter3/section2' },
            { text: '3.3 مبدأ تضخيم الرنين', link: '/whitepaper/chapter3/section3' },
            { text: '3.4 عملية المشاركة', link: '/whitepaper/chapter3/section4' }
          ]
        },
        {
          text: 'الفصل الرابع: شبكة الإجماع الإقليمي',
          collapsed: false,
          items: [
            { text: 'نظرة عامة على الفصل', link: '/whitepaper/chapter4/' },
            { text: '4.1 هيكل اللوحة النجمية وإجماع الأبعاد', link: '/whitepaper/chapter4/section1' },
            { text: '4.2 خوارزمية إجماع القيمة والخريطة النجمية', link: '/whitepaper/chapter4/section2' },
            { text: '4.3 فلسفة الشبكة والممارسة التقنية', link: '/whitepaper/chapter4/section3' }
          ]
        },
        {
          text: 'الفصل الخامس: نظام عقد الازدهار',
          collapsed: false,
          items: [
            { text: 'نظرة عامة على الفصل', link: '/whitepaper/chapter5/' },
            { text: '5.1 جوهر عقد الازدهار وعملية الانتقاء', link: '/whitepaper/chapter5/section1' },
            { text: '5.2 التقاسم المجري وتوزيع القيمة', link: '/whitepaper/chapter5/section2' },
            { text: '5.3 محرك الازدهار والتوازن الديناميكي', link: '/whitepaper/chapter5/section3' }
          ]
        },
        {
          text: 'الفصل السادس: آلية إعادة تشغيل العنقاء',
          collapsed: false,
          items: [
            { text: 'نظرة عامة على الفصل', link: '/whitepaper/chapter6/' },
            { text: '6.1 فلسفة إعادة تشغيل العنقاء وآلية التفعيل', link: '/whitepaper/chapter6/section1' },
            { text: '6.2 تصميم عملية إعادة ولادة العنقاء', link: '/whitepaper/chapter6/section2' },
            { text: '6.3 تحليل المبادئ الاقتصادية', link: '/whitepaper/chapter6/section3' },
            { text: '6.4 آلية مكافآت الازدهار المستمر', link: '/whitepaper/chapter6/section4' },
            { text: '6.5 تحليل نظرية اللعب والمعنى النهائي', link: '/whitepaper/chapter6/section5' }
          ]
        },
        {
          text: 'الفصل السابع: العقود الذكية المدفوعة بالمعلومات',
          collapsed: false,
          items: [
            { text: 'نظرة عامة على الفصل', link: '/whitepaper/chapter7/' },
            { text: '7.1 تصميم الهيكل والمفهوم', link: '/whitepaper/chapter7/section1' },
            { text: '7.2 محرك الحوسبة المسبقة وآليات الأمان', link: '/whitepaper/chapter7/section2' },
            { text: '7.3 تفاعل المستخدم واللامركزية', link: '/whitepaper/chapter7/section3' },
            { text: '7.4 الشفافية والملخص التقني', link: '/whitepaper/chapter7/section4' }
          ]
        },
        {
          text: 'الفصل الثامن: النمذجة الرياضية',
          collapsed: false,
          items: [
            { text: 'نظرة عامة على الفصل', link: '/whitepaper/chapter8/' },
            { text: '8.1 المتغيرات الأساسية ونموذج الاستقرار', link: '/whitepaper/chapter8/section1' },
            { text: '8.2 تأثير الشبكة والتوازن الديناميكي', link: '/whitepaper/chapter8/section2' },
            { text: '8.3 خوارزمية العنقاء واختبار الضغط', link: '/whitepaper/chapter8/section3' },
            { text: '8.4 النظرية الاقتصادية والخلاصة', link: '/whitepaper/chapter8/section4' }
          ]
        },
        {
          text: 'الفصل التاسع: توضيح سوء الفهم الشائع',
          collapsed: false,
          items: [
            { text: 'نظرة عامة على الفصل', link: '/whitepaper/chapter9/' },
            { text: '9.1 سوء الفهم الأول: هذا مخطط بونزي أو صندوق أموال', link: '/whitepaper/chapter9/section1' },
            { text: '9.2 سوء الفهم الثاني: العوائد العالية غير مستدامة', link: '/whitepaper/chapter9/section2' },
            { text: '9.3 سوء الفهم الثالث: نقص الدعم بقيمة حقيقية', link: '/whitepaper/chapter9/section3' },
            { text: '9.4 سوء الفهم الرابع: التعقيد التقني للخداع', link: '/whitepaper/chapter9/section4' },
            { text: '9.5 سوء الفهم الخامس: المخاطر عالية جداً ولا يمكن السيطرة عليها', link: '/whitepaper/chapter9/section5' },
            { text: '9.6 سوء الفهم السادس: مجرد لعبة تمرير الطبل والزهرة', link: '/whitepaper/chapter9/section6' },
            { text: '9.7 سوء الفهم السابع: النظام قد يتم التلاعب به', link: '/whitepaper/chapter9/section7' },
            { text: '9.8 سوء الفهم الثامن: النموذج الاقتصادي غير مستدام', link: '/whitepaper/chapter9/section8' },
            { text: '9.9 سوء الفهم التاسع: الفريق قد يهرب', link: '/whitepaper/chapter9/section9' },
            { text: '9.10 سوء الفهم العاشر: المشاركون الأوائل فقط يستفيدون', link: '/whitepaper/chapter9/section10' },
            { text: '9.11 الخاتمة: الإدراك العقلاني والاختيار الحكيم', link: '/whitepaper/chapter9/section11' },
            { text: '9.12 الملحق: دليل التحقق التقني', link: '/whitepaper/chapter9/section12' },
            { text: '9.13 أدوات التحقق المجتمعية', link: '/whitepaper/chapter9/section13' }
          ]
        },
        {
          text: 'الفصل العاشر: الخاتمة - بذرة الفكر',
          link: '/whitepaper/chapter10/'
        },
        {
          text: 'الفصل الحادي عشر: الملحق',
          collapsed: false,
          items: [
            { text: 'نظرة عامة على الفصل', link: '/whitepaper/appendix/' },
            { text: '11.1 مسرد المفاهيم الأساسية', link: '/whitepaper/appendix/section1' },
            { text: '11.2 معاملات النظام والمراجع', link: '/whitepaper/appendix/section2' },
            { text: '11.3 مقارنة المصطلحات والشكر', link: '/whitepaper/appendix/section3' },
            { text: '11.4 إخلاء المسؤولية والمشاركة', link: '/whitepaper/appendix/section4' }
          ]
        }
      ],
      '/economics/': [
        {
          text: 'النموذج الاقتصادي',
          items: [
            { text: 'نظرة عامة', link: '/economics/' },
            { text: 'نظرية قيمة الشبكة', link: '/economics/network-value' },
            { text: 'نموذج الإيرادات', link: '/economics/revenue-model' },
            { text: 'إدارة المخاطر', link: '/economics/risk-management' },
            { text: 'تحليل الاستدامة', link: '/economics/sustainability' }
          ]
        }
      ]
    },

    // نصوص الواجهة العربية
    outlineTitle: 'المحتويات',
    docFooter: {
      prev: 'الصفحة السابقة',
      next: 'الصفحة التالية'
    },
    darkModeSwitchLabel: 'المظهر',
    sidebarMenuLabel: 'القائمة',
    returnToTopLabel: 'العودة إلى الأعلى'
  }
}
```