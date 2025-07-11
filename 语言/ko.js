```javascript
export const ko = {
  title: '유토피아 백서',
  description: '합의 자유 부 네트워크: 자율 진화하는 가치 흐름 생태계',
  
  themeConfig: {
    logo: '/logo/logo2.svg',
    nav: [
      { text: '백서', link: '/whitepaper/' },
      { text: '경제 모델', link: '/economics/' }
    ],

    sidebar: {
      '/whitepaper/': [
        {
          text: '서문',
          link: '/whitepaper/'
        },
        {
          text: '제1장: 부의 자유에 대한 철학적 사고',
          link: '/whitepaper/chapter1/'
        },
        {
          text: '제2장: 유토피아의 탄생',
          link: '/whitepaper/chapter2/'
        },
        {
          text: '제3장: 공명 풀 시스템',
          collapsed: false,
          items: [
            { text: '장 개요', link: '/whitepaper/chapter3/' },
            { text: '3.1 공명 풀의 철학적 기초', link: '/whitepaper/chapter3/section1' },
            { text: '3.2 4차원 공명 구조', link: '/whitepaper/chapter3/section2' },
            { text: '3.3 공명 증폭 원리', link: '/whitepaper/chapter3/section3' },
            { text: '3.4 참여 과정', link: '/whitepaper/chapter3/section4' }
          ]
        },
        {
          text: '제4장: 지역 합의 네트워크',
          collapsed: false,
          items: [
            { text: '장 개요', link: '/whitepaper/chapter4/' },
            { text: '4.1 별자리 구조와 차원 합의', link: '/whitepaper/chapter4/section1' },
            { text: '4.2 가치 합의 알고리즘과 별지도', link: '/whitepaper/chapter4/section2' },
            { text: '4.3 네트워크 철학과 기술적 실천', link: '/whitepaper/chapter4/section3' }
          ]
        },
        {
          text: '제5장: 번영 노드 시스템',
          collapsed: false,
          items: [
            { text: '장 개요', link: '/whitepaper/chapter5/' },
            { text: '5.1 번영 노드의 본질과 선택', link: '/whitepaper/chapter5/section1' },
            { text: '5.2 은하계 공유와 가치 분배', link: '/whitepaper/chapter5/section2' },
            { text: '5.3 번영 엔진과 동적 균형', link: '/whitepaper/chapter5/section3' }
          ]
        },
        {
          text: '제6장: 피닉스 재시작 메커니즘',
          collapsed: false,
          items: [
            { text: '장 개요', link: '/whitepaper/chapter6/' },
            { text: '6.1 피닉스 재시작의 철학과 트리거 메커니즘', link: '/whitepaper/chapter6/section1' },
            { text: '6.2 피닉스 재생 프로세스 설계', link: '/whitepaper/chapter6/section2' },
            { text: '6.3 경제 원리 분석', link: '/whitepaper/chapter6/section3' },
            { text: '6.4 지속적 번영 보상 메커니즘', link: '/whitepaper/chapter6/section4' },
            { text: '6.5 게임 이론 분석과 궁극적 의미', link: '/whitepaper/chapter6/section5' }
          ]
        },
        {
          text: '제7장: 정보 기반 스마트 컨트랙트',
          collapsed: false,
          items: [
            { text: '장 개요', link: '/whitepaper/chapter7/' },
            { text: '7.1 아키텍처 설계와 개념', link: '/whitepaper/chapter7/section1' },
            { text: '7.2 사전 계산 엔진과 보안 메커니즘', link: '/whitepaper/chapter7/section2' },
            { text: '7.3 사용자 상호작용과 탈중앙화', link: '/whitepaper/chapter7/section3' },
            { text: '7.4 투명성과 기술적 요약', link: '/whitepaper/chapter7/section4' }
          ]
        },
        {
          text: '제8장: 수학적 모델링',
          collapsed: false,
          items: [
            { text: '장 개요', link: '/whitepaper/chapter8/' },
            { text: '8.1 핵심 변수와 안정성 모델', link: '/whitepaper/chapter8/section1' },
            { text: '8.2 네트워크 효과와 동적 균형', link: '/whitepaper/chapter8/section2' },
            { text: '8.3 피닉스 알고리즘과 스트레스 테스트', link: '/whitepaper/chapter8/section3' },
            { text: '8.4 경제 이론과 결론', link: '/whitepaper/chapter8/section4' }
          ]
        },
        {
          text: '제9장: 일반적인 오해 해명',
          collapsed: false,
          items: [
            { text: '장 개요', link: '/whitepaper/chapter9/' },
            { text: '9.1 오해 1: 이것은 폰지 스킴이거나 자금 풀', link: '/whitepaper/chapter9/section1' },
            { text: '9.2 오해 2: 높은 수익률은 지속 불가능', link: '/whitepaper/chapter9/section2' },
            { text: '9.3 오해 3: 실제 가치 지원 부족', link: '/whitepaper/chapter9/section3' },
            { text: '9.4 오해 4: 속이기 위한 기술적 복잡성', link: '/whitepaper/chapter9/section4' },
            { text: '9.5 오해 5: 위험이 너무 높고 통제 불가능', link: '/whitepaper/chapter9/section5' },
            { text: '9.6 오해 6: 단순한 뜨거운 감자 게임', link: '/whitepaper/chapter9/section6' },
            { text: '9.7 오해 7: 시스템이 조작될 수 있음', link: '/whitepaper/chapter9/section7' },
            { text: '9.8 오해 8: 경제 모델이 지속 불가능', link: '/whitepaper/chapter9/section8' },
            { text: '9.9 오해 9: 팀이 도망갈 수 있음', link: '/whitepaper/chapter9/section9' },
            { text: '9.10 오해 10: 초기 참가자만 이익을 얻음', link: '/whitepaper/chapter9/section10' },
            { text: '9.11 결론: 합리적 인식과 현명한 선택', link: '/whitepaper/chapter9/section11' },
            { text: '9.12 부록: 기술 검증 가이드', link: '/whitepaper/chapter9/section12' },
            { text: '9.13 커뮤니티 검증 도구', link: '/whitepaper/chapter9/section13' }
          ]
        },
        {
          text: '제10장: 결론 - 사고의 씨앗',
          link: '/whitepaper/chapter10/'
        },
        {
          text: '제11장: 부록',
          collapsed: false,
          items: [
            { text: '장 개요', link: '/whitepaper/appendix/' },
            { text: '11.1 핵심 개념 용어집', link: '/whitepaper/appendix/section1' },
            { text: '11.2 시스템 매개변수와 참고 자료', link: '/whitepaper/appendix/section2' },
            { text: '11.3 용어 비교와 감사의 말', link: '/whitepaper/appendix/section3' },
            { text: '11.4 면책 조항과 참여', link: '/whitepaper/appendix/section4' }
          ]
        }
      ],
      '/economics/': [
        {
          text: '경제 모델',
          items: [
            { text: '개요', link: '/economics/' },
            { text: '네트워크 가치 이론', link: '/economics/network-value' },
            { text: '수익 모델', link: '/economics/revenue-model' },
            { text: '위험 관리', link: '/economics/risk-management' },
            { text: '지속가능성 분석', link: '/economics/sustainability' }
          ]
        }
      ]
    },

    // 한국어 인터페이스 텍스트
    outlineTitle: '목차',
    docFooter: {
      prev: '이전 페이지',
      next: '다음 페이지'
    },
    darkModeSwitchLabel: '모양',
    sidebarMenuLabel: '메뉴',
    returnToTopLabel: '맨 위로 돌아가기'
  }
}
```