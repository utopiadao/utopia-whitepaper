export const ko = {
  title: 'UTOPIA 백서',
  description: '합의 자유 부 네트워크: 가치 흐름 생태계의 자치 진화',
  
  themeConfig: {
    logo: '/logo/logo2.svg',
    nav: [
      { text: '백서', link: '/ko/whitepaper/' },
      { text: '경제학', link: '/ko/economics/' }
    ],

    sidebar: {
      '/ko/whitepaper/': [
        {
          text: '서문',
          link: '/ko/whitepaper/'
        },
        {
          text: '제1장: 금융 자유의 철학',
          collapsed: false,
          items: [
            { text: '부의 본질', link: '/ko/whitepaper/chapter1/section1' },
            { text: '합의의 형성과 진화', link: '/ko/whitepaper/chapter1/section2' },
            { text: '자유의 경계 정의', link: '/ko/whitepaper/chapter1/section3' }
          ]
        },
        {
          text: '제2장: 유토피아의 탄생',
          collapsed: false,
          items: [
            { text: '비전과 미션', link: '/ko/whitepaper/chapter2/section1' },
            { text: '핵심 가치', link: '/ko/whitepaper/chapter2/section2' },
            { text: '시스템 아키텍처 개요', link: '/ko/whitepaper/chapter2/section3' }
          ]
        },
        {
          text: '제3장: 공명 풀 시스템',
          collapsed: false,
          items: [
            { text: '철학적 기초', link: '/ko/whitepaper/chapter3/section1' },
            { text: '4차원 구조', link: '/ko/whitepaper/chapter3/section2' },
            { text: '공명 증폭', link: '/ko/whitepaper/chapter3/section3' },
            { text: '공명 프로세스', link: '/ko/whitepaper/chapter3/section4' }
          ]
        },
        {
          text: '제4장: 구역 합의 네트워크',
          collapsed: false,
          items: [
            { text: '별자리 구조', link: '/ko/whitepaper/chapter4/section1' },
            { text: '차원 합의', link: '/ko/whitepaper/chapter4/section2' },
            { text: '가치 합의 알고리즘', link: '/ko/whitepaper/chapter4/section3' },
            { text: '합의 별지도', link: '/ko/whitepaper/chapter4/section4' }
          ]
        },
        {
          text: '제5장: 번영 노드 시스템',
          collapsed: false,
          items: [
            { text: '번영 노드의 본질', link: '/ko/whitepaper/chapter5/section1' },
            { text: '가치 증명 메커니즘', link: '/ko/whitepaper/chapter5/section2' },
            { text: '은하 공유 메커니즘', link: '/ko/whitepaper/chapter5/section3' },
            { text: '번영 엔진 기능', link: '/ko/whitepaper/chapter5/section4' }
          ]
        },
        {
          text: '제6장: 피닉스 재시작 메커니즘',
          collapsed: false,
          items: [
            { text: '영원한 순환의 철학', link: '/ko/whitepaper/chapter6/section1' },
            { text: '피닉스 재생 프로세스', link: '/ko/whitepaper/chapter6/section2' },
            { text: '경제 원리 분석', link: '/ko/whitepaper/chapter6/section3' },
            { text: '지속적인 번영 보상', link: '/ko/whitepaper/chapter6/section4' }
          ]
        },
        {
          text: '제7장: 스마트 컨트랙트 아키텍처',
          collapsed: false,
          items: [
            { text: '업그레이드 불가 철학', link: '/ko/whitepaper/chapter7/section1' },
            { text: '사전 계산 엔진', link: '/ko/whitepaper/chapter7/section2' },
            { text: '탈중앙화 보장', link: '/ko/whitepaper/chapter7/section3' },
            { text: '온체인 투명성', link: '/ko/whitepaper/chapter7/section4' }
          ]
        },
        {
          text: '제8장: 경제 모델',
          collapsed: false,
          items: [
            { text: '동적 균형 알고리즘', link: '/ko/whitepaper/chapter8/section1' },
            { text: '피닉스 재시작 알고리즘', link: '/ko/whitepaper/chapter8/section2' },
            { text: '스트레스 테스트 분석', link: '/ko/whitepaper/chapter8/section3' },
            { text: '몬테카를로 시뮬레이션', link: '/ko/whitepaper/chapter8/section4' }
          ]
        },
        {
          text: '제9장: 오해 해소',
          collapsed: false,
          items: [
            { text: '시스템 성격 오해', link: '/ko/whitepaper/chapter9/section1' },
            { text: '복잡성 오해', link: '/ko/whitepaper/chapter9/section2' },
            { text: '기술적 보안 오해', link: '/ko/whitepaper/chapter9/section3' },
            { text: '지속가능성 오해', link: '/ko/whitepaper/chapter9/section4' }
          ]
        },
        {
          text: '제10장: 결론',
          collapsed: false,
          items: [
            { text: '사고의 씨앗', link: '/ko/whitepaper/chapter10/section1' },
            { text: '우리의 공유된 미래', link: '/ko/whitepaper/chapter10/section2' },
            { text: '영원한 가치', link: '/ko/whitepaper/chapter10/section3' }
          ]
        },
        {
          text: '부록',
          collapsed: false,
          items: [
            { text: '용어집', link: '/ko/whitepaper/appendix/glossary' },
            { text: '시스템 매개변수', link: '/ko/whitepaper/appendix/parameters' },
            { text: '검증 가이드', link: '/ko/whitepaper/appendix/verification' },
            { text: '면책조항', link: '/ko/whitepaper/appendix/disclaimer' }
          ]
        }
      ],
      '/ko/economics/': [
        {
          text: '경제 모델',
          items: [
            { text: '개요', link: '/ko/economics/' },
            { text: '네트워크 가치 이론', link: '/ko/economics/network-value' },
            { text: '수익 모델', link: '/ko/economics/revenue-model' },
            { text: '위험 관리', link: '/ko/economics/risk-management' },
            { text: '지속가능성 분석', link: '/ko/economics/sustainability' }
          ]
        }
      ],
      '/ko/technology/': [
        {
          text: '기술 아키텍처',
          items: [
            { text: '개요', link: '/ko/technology/' },
            { text: '스마트 컨트랙트', link: '/ko/technology/smart-contract' },
            { text: '보안 메커니즘', link: '/ko/technology/security' },
            { text: 'API 문서', link: '/ko/technology/api' }
          ]
        }
      ]
    },

    // Korean interface text
    editLink: {
      pattern: 'https://github.com/utopia-project/whitepaper/edit/main/docs/:path',
      text: 'GitHub에서 이 페이지 편집'
    }
  }
}