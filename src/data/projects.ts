import { Project } from '../types';

export const projects = [
  {
    id: '0',
    type: 'web',
    title: {
      en: 'D2 Design and Works',
      kr: 'D2 디자인 앤 웍스'
    },
    description: {
      en: 'Comprehensive ERP system for kitchen and bath interior design management',
      kr: '노션 템플렛 자동화 | 욕실 인테리어 디자인 관리를 위한 종합 ERP 시스템'
    },
    imageUrl: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fb8oM34%2FbtsMhxDSyv8%2FsFj2iikHkUUj9Tb2KFiXJ0%2Fimg.png',
    projectUrl: '/project/0',
    screenshots: [
      'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fb8oM34%2FbtsMhxDSyv8%2FsFj2iikHkUUj9Tb2KFiXJ0%2Fimg.png',
      'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcRIzvu%2FbtsMh57ZzFa%2FAFZipvC2xBK1JbgwogXeBK%2Fimg.png',
      'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FRNU94%2FbtsMigBq1nm%2FaHKleRft6vR890Nt0okKY0%2Fimg.png',
    ],
    details: {
      period: {
        en: 'Nov 2022 - March 2024',
        kr: '2022년 11월 - 2024년 1월'
      },
      team: [
        {
          role: {
            en: 'Freelance Devloper Conslutant Pyungkang Hong',
            kr: '협업 개발 및 시스템 작업 - 홍평강'
          },
          responsibilities: {
            en: 'ERP system development, project coordination, and workflow optimization',
            kr: 'ERP 시스템 개발, 프로젝트 조율 및 워크플로우 최적화'
          }
        }
      ],
      stack: ['n8n', 'Python', 'VM Server','notion'],
      features: {
        en: [
          'Project management for interior design',
          'HR and payroll management',
          'Financial and accounting integration',
          'CRM for client relationship tracking',
          'Digital asset and resource management',
          'Inventory and procurement management'
        ],
        kr: [
          '프로그램 설계 및 프로젝트 관리',
          '노션 - 내부 시스템 관리 자동화',
          '자동화 - 재무 및 회계 통합',
          '웹 어드민 페이지 고객 관계 관리 (CRM)',
          '디지털 자산 및 자료 관리',
        ]
      },
      about: {
        en: 'The ERP system focuses on optimizing the workflow for kitchen and bathroom interior design, helping to effectively manage project schedules, budgets, and resources. We have developed a support automation program that streamlines operations. Additionally, by utilizing the CRM module, we enhance client communication and enable systematic management of digital assets and procurement. In particular, a continuous workflow automation system has been implemented to reduce repetitive tasks, ensuring more efficient project execution.',
        kr: 'ERP 시스템은 키친 및 욕실 인테리어 디자인 워크플로우를 최적화하는 데 초점을 맞추고 프로젝트별 일정, 예산, 리소스를 효과적으로 관리할 수있게 운영을 돕는 서포트 자동화프로그램을 작업을 진행했습니다. 또한, CRM 모듈을 활용해 클라이언트와의 커뮤니케이션을 더욱 원활하게 만들고, 디지털 자산과 구매 관리를 체계적으로 운영할 수 있도록 지원합니다. 특히, 지속적인 업무 자동화 시스템을 적용하여 반복 작업을 줄이고, 보다 효율적인 프로젝트 운영이 가능하도록 설계되었습니다'
      },
      successMetrics: {
        satisfaction: 92,
        retention: 90,
        engagement: 92,
      }
    },
    links: {
      link: 'https://www.d2designandworks.com/'
    }
},
  {
    id: '1',
    type: 'web',
    title: {
      en: '3TP Trading Strategy',
      kr: '3TP 트레이딩 전략'
    },
    description: {
      en: 'Advanced trading strategy development and automation platform using Pine Script',
      kr: 'Pine Script를 활용한 고급 트레이딩 전략 개발 및 자동화 플랫폼'
    },
    imageUrl: 'https://chartgetalgo.com/images/chartgetalgoIndicator.png',
    projectUrl: '/project/1',
    screenshots: [
      'https://chartgetalgo.com/images/chartgetalgoIndicator.png',
      'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2F6JVjW%2FbtsK64QC3Fe%2F5sL8F5CKuuLoxIrchDFmxk%2Fimg.png',
      'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbWzkxE%2FbtsK72R4xN4%2F5AmrXxNFIJkZhpHhqp9641%2Fimg.png'
    ],
    details: {
      period: {
        en: 'Mar 2022 - Nov 2022',
        kr: '2022년 3월 - 2022년 11월'
      },
      team: [
        {
          role: { en: 'Solo Project', kr: '단독 프로젝트' },
          responsibilities: { en: 'Full development and strategy implementation', kr: '전체 개발 및 전략 구현' }
        }
      ],
      stack: ['Pine Script', 'Python', 'TradingView API', 'VM Server'],
      features: {
        en: [
          'Automated trading strategies',
          'Real-time market analysis',
          'Performance testing',
          'User strategy customization'
        ],
        kr: [
          '자동화된 트레이딩 전략',
          '실시간 시장 분석',
          '성능 테스트',
          '사용자 전략 커스터마이징'
        ]
      },
      about: {
        en: 'The 3TP Trading Strategy is a sophisticated algorithmic trading system that combines technical analysis with automated execution. It utilizes advanced Pine Script indicators to identify optimal entry and exit points, while Python handles the backend processing and strategy validation. The system includes extensive backtesting capabilities and real-time performance monitoring to ensure reliable trading outcomes.',
        kr: '3TP 트레이딩 전략은 기술적 분석과 자동 실행을 결합한 정교한 알고리즘 트레이딩 시스템, Pine Script 코드를 사용해 활용하여 최적의 진입 및 청산 지점을 식별하며, 사용자에게 보기 쉽게 사는곳 파는곳을 알려줍니다 또한, 포괄적인 백테스팅 기능과 실시간 성과 모니터링을 통해 안정적인 거래 결과를 보장합니다. 정밀한 데이터 분석과 실시간 시장 대응을 통해 효율적인 트레이딩을 지원하며, 알고리즘 기반 자동화 매매의 신뢰성을 극대화하는 데 초점을 맞추고 있습니다.'
      },
      successMetrics: {
        marketReach: 92,
        conversion: 65,
        retention: 89,
        growth: 78
      }
    },
    links: {
      notion: 'https://www.notion.so/chartget-3tp/ChartGet-Algo-3TP-e0542a5001a944eba22118fcdc90c12b'
    }
  },
  {
    id: '2',
    type: 'web',
    title: {
      en: 'Metro Health Insurance',
      kr: '메트로 '
    },
    description: {
      en: 'Insurance company platform with integrated admin system and digital marketing tools',
      kr: '통합 관리 시스템과 디지털 마케팅 도구를 갖춘 보험 회사 플랫폼'
    },
    imageUrl: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FeeGte3%2FbtsK6oO7DCg%2FbDU7gaWuk2GC2Boi0XEaK0%2Fimg.png',
    projectUrl: '/project/2',
    screenshots: [
      'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FeeGte3%2FbtsK6oO7DCg%2FbDU7gaWuk2GC2Boi0XEaK0%2Fimg.png',
      'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FkE62p%2FbtsK6MPpELf%2FBFMI9cXIKJrBzsVSchmcp1%2Fimg.png',
      'https://images.unsplash.com/photo-1576089172869-4f5f6f315620?auto=format&fit=crop&q=80&w=1280'
    ],
    details: {
      period: {
        en: 'June 2023 - Feb 2024',
        kr: '2023년 6월 - 2024년 2월'
      },
      team: [
        {
          role: { en: 'Cooperation Project', kr: '협업 프로젝트' },
          responsibilities: { en: 'Development and deployment', kr: '시장분석, 디지털마케팅, 개발 협업' }
        }
      ],
      stack: ['HTML/CSS', 'Javascript', 'Django', 'Python', 'Google Analytics'],
      features: {
        en: [
          'BM analytics',
          'Auto SNS platform support',
          'Insurance policy management',
          'Client portal',
          'Digital marketing integration',
          'Analytics dashboard'
        ],
        kr: [
          '경쟁 비지니스 모델 분석',
          '자동화 SNS 디지털홍보',
          '보험 정책 사용자 관리 CRM',
          '고객 포털',
          '디지털 마케팅 통합',
          '분석 대시보드'
        ]
      },
      about: {
        en: 'Metro Health Insurance platform revolutionizes the insurance industry with its modern approach to policy management and client engagement. The system features a robust admin panel for policy management, integrated marketing tools for client acquisition, and comprehensive analytics for business intelligence. Built with scalability in mind, it serves both insurance providers and clients with an intuitive interface and powerful backend capabilities.',
        kr: 'Metro Health Insurance 플랫폼은 현대적인 정책 관리 및 고객 관여 방식을 통해 쉽게 다가가게합니다. 설계관리자 패널을 통해 정책을 효율적으로 운영할 수 있게 설계했으며 고객 유치를 위한 통합 마케팅 도구와 비즈니스 확장'
      },
      successMetrics: {
        marketReach: 70,
        conversion: 65,
        retention: 89,
        growth: 58
      }
    },
    links: {
      live: 'https://www.metrohealthins.com/contact-us/'
    }
  },
  {
    id: '3',
    type: 'app',
    title: {
      en: 'ChartQ',
      kr: '차트큐 - ChartQ'
    },
    description: {
      en: 'ChartQ is a comprehensive platform for mastering financial chart analysis, combining education, quizzes, games, and practical trading strategies to help users succeed in real-world investing',
      kr: '금융 차트 학습 앱: 퀴즈,게임 및 트레이딩 전략을 제공하는 종합 플랫폼'
    },
    imageUrl: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2F7QsDn%2FbtsK4rMMAEx%2F4bjJV7fPp82p01uULHb1Fk%2Fimg.png',
    projectUrl: '/project/3',
    screenshots: [
      'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2F7QsDn%2FbtsK4rMMAEx%2F4bjJV7fPp82p01uULHb1Fk%2Fimg.png',
      'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FboJ1ve%2FbtsK5F35mkc%2F4B7MCvGbKsLWhEpQupbzu0%2Fimg.png',
      'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FnVAlT%2FbtsK5EqzHmF%2FXDIO4S7kXJWnB6OMzCZ01k%2Fimg.png',
      'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FckZ0pb%2FbtsK6sCVIKp%2FthDyQ0ZjUK10R74ABRhQz0%2Fimg.png',
      'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fc5pIWY%2FbtsK4ivwYUc%2FbTk3STUoqfGiyOKq7jJfw0%2Fimg.png',
      'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FvWmb7%2FbtsK6rD0RRW%2FT3kSpSPValRnlv2Y4S0Ea1%2Fimg.png',
      'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FN0wbg%2FbtsK6AVf7xe%2FfX1poGX6olq8u5OpBvcS3K%2Fimg.png',
    ],
    details: {
      period: {
        en: 'May 2024 - Present [Ongoing]',
        kr: '2024년 5월 - 진행 중'
      },
      team: [
        {
          role: { en: 'Project Manager', kr: '프로젝트 매니저' },
          responsibilities: { en: 'PM - Pyungkang Hong', kr: '홍평강' }
        },
        {
          role: { en: 'AI - Developer ', kr: 'AI 분석 개발' },
          responsibilities: { en: 'WhwaSeok Lee', kr: '이회석' }
        },
        {
          role: { en: 'Full Stack Developer', kr: '백앤드 개발자' },
          responsibilities: { en: 'Jaehun Kim', kr: '김재훈' }
        },
        {
          role: { en: 'UI/UX Designer', kr: 'UI/UX 디자이너' },
          responsibilities: { en: 'Lee Dahae', kr: '이다혜' }
        }
      ],
      stack: ['Flutter', 'Supabase', 'Pine Script', 'Python', 'SQLite/Hive', 'Chart.js'],
      features: {
        en: [
          'Interactive quizzes and tests',
          'Chart simulation games',
          'Real-time market data',
          'Achievement system'
        ],
        kr: [
          '인터랙티브 퀴즈 및 테스트',
          '차트 시뮬레이션 게임',
          '실시간 시장 데이터',
          '업적 시스템'
        ]
      },
      about: {
        en: 'ChartQ represents the future of financial education, offering an innovative approach to learning chart analysis and trading strategies. The platform combines gamification with practical learning, featuring interactive quizzes, real-time market data integration, and a comprehensive achievement system. Our focus on user engagement and practical application makes complex financial concepts accessible and enjoyable to learn.',
        kr: '금융 차트 분석을 재미있고 인터랙티브하게 학습할 수 있는 플랫폼, 사용자가 금유이 어렵게 느껴지는 부분을 쉽고 간편하게 다가가는 교육 정보 앱. 차트 게임을 해서 금융차트를 읽는 흐름을 파악할 수있게 도와주는 앱'
      },
      successMetrics: {
        marketReach: 92,
        conversion: 95,
        retention: 89,
        growth: 90
      }
    },
    links: {
      web: "https://chartq.app/",
      figma: 'https://www.figma.com/design/vPnVbj3rBttZvcBplhQLx8/CHARTQ?node-id=0-1&t=8KahQpHmbRXdQLFY-1'
    }
  },
  {
    id: '4',
    type: 'web',
    title: {
      en: 'Fidesbankcard',
      kr: 'FidesBankcard - 파이데스 회사',
    },
    description: {
      en: 'Integrated company platform with POS inventory management and digital marketing solutions',
      kr: 'POS 재고 관리 및 디지털 마케팅 솔루션이 통합된 기업 플랫폼'
    },
    imageUrl: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FCjJp2%2FbtsK7MurrB8%2FVoBzL1sfkxmS3wbXSJbqPK%2Fimg.png',
    projectUrl: '/project/4',
    screenshots: [
      'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FCjJp2%2FbtsK7MurrB8%2FVoBzL1sfkxmS3wbXSJbqPK%2Fimg.png',
      'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FYjvmL%2FbtsK6aDyzBI%2FwM6w7PP9v79kdYDhVqSXCK%2Fimg.png',
      'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fpc92m%2FbtsK625CpSd%2Fhj4qKFPPSOEEx6rgxmNmSk%2Fimg.png',
      'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbbHIjf%2FbtsK6kMGtUA%2FoO6UwP655nQS72J1A9qKV1%2Fimg.png',
      'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FclWJjq%2FbtsK7L3nhrS%2Fpvsu0zmUiqcz2cDZhBnTnK%2Fimg.png'
    ],
    details: {
      period: {
        en: 'Aug 2022 - May 2023',
        kr: '2022년 8월 - 2023년 6월'
      },
      team: [
        {
          role: { 
            en: 'Project Manager',
            kr: '프로젝트 매니저'
          },
          responsibilities: {
            en: 'Project Lead - Pyungkang Hong',
            kr: '홍평강'
          }
        },
        {
          role: {
            en: 'Backend Developer',
            kr: '백엔드 개발자'
          },
          responsibilities: {
            en: 'Backend Developer - David Kim',
            kr: '데이비드 킴'
          }
        },
        {
          role: {
            en: 'UI/UX Designer',
            kr: 'UI/UX 디자이너'
          },
          responsibilities: {
            en: 'UI/UX Designer - Roy Choi',
            kr: '로이 최'
          }
        }
      ],
      stack: ['Django', 'Python', 'HTML/CSS', 'JS', 'MySQL', 'Docker'],
      features: {
        en: [
          'POS system integration with real-time processing',
          'Comprehensive inventory management system',
          'Advanced digital marketing tools',
          'Customizable admin dashboard'
        ],
        kr: [
          '실시간 처리가 가능한 POS 시스템 통합',
          '종합적인 재고 관리 시스템',
          '고급 디지털 마케팅 도구',
          'CRM & ERP 맞춤형 관리자 대시보드 '
        ]
      },
      about: {
        en: 'Fidesbankcard operates as a POS and inventory management system provider, actively functioning as a broker. The platform integrates payment processing, inventory tracking, and marketing tools into a unified solution for business operations. Additionally, through a side project called FEEBOX, the company implemented digital marketing strategies for cash discount programs and conducted market research focused on user engagement and behavior',
        kr: 'Fidesbankcard는 POS(결제 단말기) 및 재고 관리 시스템 공급자이자 중개자 역할을 수행하는 기업으로, 결제 처리, 재고 추적, 마케팅 도구를 비즈니스 운영에 최적화된 통합 플랫폼 솔루션으로 제공합니다. 부가적으로 FEEBOX 프로젝트를 통해 현금 할인 프로그램의 디지털 마케팅 전략 기획 및 실행을 주도하고, 사용자 참여도 및 행동 패턴 분석을 기반으로 한 시장 조사를 수행하며 데이터 기반 의사결정 모델을 구축했습니다. 고객 니즈 파악과 전략적 타겟팅을 통한 매출 증대에 기여했습니다.'
      },
      successMetrics: {
        marketReach: 92,
        conversion: 80,
        retention: 91,
        growth: 80
      }
    },
    links: {
      live: 'https://fidesbankcard.com',
      instagram: 'https://www.instagram.com/feebox.io/'
    }
  },
  {
    id: '5',
    type: 'web',
    title: {
      en: 'Mocean',
      kr: '모션'
    },
    description: {
      en: 'Multi-functional healthcare platform with doctor admin panel and appointment booking system',
      kr: '의사 관리 패널과 예약 시스템을 갖춘 다기능 헬스케어 플랫폼'
    },
    imageUrl: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2F0u3C8%2FbtsK7bg6sUG%2FakNysOGnEKm1gghD9Yx4t1%2Fimg.png',
    projectUrl: '/project/5',
    screenshots: [
      'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2F0u3C8%2FbtsK7bg6sUG%2FakNysOGnEKm1gghD9Yx4t1%2Fimg.png',
      'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FdjSAdz%2FbtsK6671zRL%2FvbMKhctdcKYDz9d5FpJfTk%2Fimg.png',
      'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fbd2xMM%2FbtsK5N9IwkQ%2FwEy3g8LsTJpG8vA31FxAIk%2Fimg.png',
      'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FkRohk%2FbtsK5mxX5jq%2FkwPc5SewOVlMvq2eCKSEtK%2Fimg.png',
      'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fyhp8j%2FbtsK6pAUnE6%2FMnnqnQP9C4dHPzWG3jBRM1%2Fimg.png'
    ],
    details: {
      period: {
        en: 'Mar 2021 - May 2021',
        kr: '2021년 3월 - 2021년 12월'
      },
      team: [
        {
          role: {
            en: 'Project Lead - Pyungkang Hong',
            kr: '프로젝트 리드 - 홍평강'
          },
          responsibilities: {
            en: 'Project management and strategy',
            kr: '프로젝트 관리 및 전략'
          }
        },
        {
          role: {
            en: 'Backend Developer - Hawon Park', 
            kr: '백엔드 개발자 - 박하원'
          },
          responsibilities: {
            en: 'Server architecture and API development',
            kr: '서버 아키텍처 및 API 개발'
          }
        },
        {
          role: {
            en: 'Frontend Developer - Jaehun Kim',
            kr: '프론트엔드 개발자 - 김재훈'
          },
          responsibilities: {
            en: 'User interface implementation',
            kr: '사용자 인터페이스 구현'
          }
        }
       ],
      stack: ['React', 'Python', 'Django', 'nginx', 'Docker', 'RESTful API'],
      features: {
        en: [
          'Smart patient appointment scheduling system',
          'Comprehensive doctor dashboard',
          'Advanced patient analysis tools',
          'Automated notification system'
        ],
        kr: [
          'CRM 사용자 관리자 페이지',
          '스마트 환자 예약 관리 시스템',
          '종합적인 의사 대시보드',
          '고급 환자 분석 도구',
          '자동화된 알림 시스템'
        ]
      },
      about: {
        en: 'Mocean transforms healthcare management with its comprehensive platform designed for both medical professionals and patients. The system streamlines appointment scheduling, patient record management, and administrative tasks, while providing powerful analytics tools for healthcare providers. Its intuitive interface and automated features significantly improve operational efficiency in healthcare practices.',
        kr: '모션은 의료 전문가와 환자 모두를 위해 설계된 종합 플랫폼으로 헬스케어 관리합니다. 시스템은 예약 일정, 환자 기록 관리 및 행정 업무를 편하게 설정하고 환자 또는 재활치료가 필요한 사람들을 돕는 플랫폼'
      },
      successMetrics: {
        marketReach: 92,
        conversion: 65,
        retention: 89,
        growth: 78
      }
    },
    links: {
      live: 'https://moceanpt.com/',
      notion: 'https://workcnt.notion.site/Mocean-Health-Checking-19969006d967800fbf4fe641738888cf',
      github: 'https://github.com/PyungkangHong094/MOCEAN'
    }
  },
  {
    id: '6',
    type: 'web',
    title: {
      en: 'FD Holdings',
      kr: 'FD 홀딩스'
    },
    description: {
      en: 'Modern company landing page with professional design and enhanced brand visibility',
      kr: '전문적인 디자인과 향상된 브랜드 가시성을 갖춘 현대적인 기업 랜딩 페이지'
    },
    imageUrl: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2F4YKwU%2FbtsK6i9UAnG%2FGNcvJ8VjjANsF5ZDGjmMRK%2Fimg.png',
    projectUrl: '/project/6',
    screenshots: [
      'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2F4YKwU%2FbtsK6i9UAnG%2FGNcvJ8VjjANsF5ZDGjmMRK%2Fimg.png',
      'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fljo8M%2FbtsK6bCs846%2F2Kn24w0RJ2kbWQpujmbhW0%2Fimg.png',
      'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fzg5vP%2FbtsK45Qpmwb%2FmFSp95VwFhOIpUqaR19qCk%2Fimg.png',
      'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FuSVXS%2FbtsK52S0KSg%2FIEUDDxNayYaWKH5oP3kfMk%2Fimg.png',
      'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FLoga5%2FbtsK42TGRoV%2FzIeEBPYgCD8Ktj1zElU9T0%2Fimg.png',
      'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fd2hfGi%2FbtsK7a3AYX6%2FkNMnwPEYWxs6wmDgnoOZlk%2Fimg.png',
    ],    details: {
      period: {
        en: 'March 2021 - May 2022',
        kr: '2021년 3월 - 2022년 5월'
      },
      team: [
        {
          role: {
            en: 'Lead Developer - Pyungkang Hong',
            kr: '리드 개발자 - 홍평강'
          },
          responsibilities: {
            en: 'Project leadership and frontend development',
            kr: '프로젝트 리더십 및 프론트엔드 개발'
          }
        },
        {
          role: {
            en: 'Backend Developer - Hawon Park',
            kr: '백엔드 개발자 - 박하원'
          },
          responsibilities: {
            en: 'Backend system architecture and development',
            kr: '백엔드 시스템 아키텍처 및 개발'
          }
        },
        {
          role: {
            en: 'UI/UX Designer - Young Jin Lee',
            kr: 'UI/UX 디자이너 - 이영진'
          },
          responsibilities: {
            en: 'User interface design and user experience',
            kr: '사용자 인터페이스 디자인 및 사용자 경험'
          }
        }
      ],
      stack: ['React', 'Next.js', 'Django', 'Python', 'Keras'],
      features: {
        en: [
          'Integrated CRM admin system',
          'Responsive cross-platform design',
          'Modern UI/UX implementation',
          'Performance optimized architecture',
          'SEO-friendly structure'
        ],
        kr: [
          '통합 CRM 관리자 시스템',
          '반응형 크로스 플랫폼 디자인',
          '현대적인 UI/UX 구현',
          '성능 최적화 아키텍처',
          'SEO 친화적 구조'
        ]
      },
      about: {
        en: 'FD Holdings manages multiple branches, consolidating operations of six different business divisions into one centralized platform. The project includes responsive layouts, integrated user management, and a unified CRM system.',
        kr: 'FD 홀딩스는 여러 지점을 관리하며, 6개 사업부의 운영을 하나의 중앙 플랫폼으로 통합합니다. 반응형 레이아웃, 통합 사용자 관리, 통합 CRM 시스템을 포함합니다.'
      },
      successMetrics: {
        satisfaction: 99,
        growth: 90
      }
    },
    links: {
      live: 'https://fdgroup.co.kr/',
      branch1: 'https://fdblockchain.co.kr/',
      branch2: 'https://www.fdgenuine.com/'
    }
  },
  {
    id: '7',
    type: 'web',
    title: {
      en: 'Featuring Co',
      kr: '피처링 컴퍼니'
    },
    description: {
      en: 'SEO-optimized blogging platform with comprehensive user data analysis',
      kr: '포괄적인 사용자 데이터 분석을 갖춘 SEO 최적화 블로깅 플랫폼'
    },
    imageUrl: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FdAyUF6%2FbtsK643skkG%2FAmmkj1HZDFtfMNHU3SKXb1%2Fimg.png',
    projectUrl: '/project/7',
    screenshots: [
      'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FdAyUF6%2FbtsK643skkG%2FAmmkj1HZDFtfMNHU3SKXb1%2Fimg.png',
      'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fc5Ll0c%2FbtsK5nQ9BGm%2Fvzmjmk57VgnMK5t7BGNb9k%2Fimg.png',
      'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FsWVNa%2FbtsK7NNEDTY%2F0aPbqNRX3HsujgH9YFCwhK%2Fimg.png',
      'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FntsiQ%2FbtsK7IscZ6Q%2Fr94h64xN0eeXbKmR4Yi701%2Fimg.png',
    ],    details: {
      period: {
        en: 'May 2020 - Sept 2020',
        kr: '2020년 5월 - 2020년 9월'
      },
      team: [
        {
          role: {
            en: 'Frontend Developer & SEO Specialist - Pyungkang Hong',
            kr: '프론트엔드 개발자 & SEO - 홍평강'
          },
          responsibilities: {
            en: 'Frontend development, SEO optimization, and analytics implementation',
            kr: '프론트엔드 개발, SEO 최적화 및 분석 구현'
          }
        }
      ],
      stack: ['Python', 'PostgreSQL', 'Google Analytics', 'TailwindCSS'],
      features: {
        en: [
          'Advanced SEO optimization system',
          'Comprehensive user engagement analytics',
          'Content management system',
          'Performance monitoring metrics'
        ],
        kr: [
          '고급 SEO 최적화 시스템',
          '포괄적인 사용자 참여 분석',
          '콘텐츠 관리 시스템',
          '성능 모니터링 지표'
        ]
      },
      about: {
        en: 'Featuring Co leverages advanced analytics to track user behavior and provides valuable insights for content creators while integrating AI technology.',
        kr: '피처링 컴퍼니는 고급 분석을 활용하여 사용자 행동을 추적하고 AI 기술을 통합하여 콘텐츠 제작자에게 가치 있는 인사이트를 제공합니다.'
      },
      successMetrics: {
        marketReach: 92,
      }
    },
    links: {
      live: 'https://featuring.co',
      blog: 'https://featuring.co/blog/all'
    }
  },
  {
    id: '8',
    type: 'app',
    title: {
      en: 'ChartGet',
      kr: '차트겟'
    },
    description: {
      en: 'Cross-platform app designed for learning and mastering chart analysis',
      kr: '차트 분석 학습 및 마스터를 위한 크로스 플랫폼 앱'
    },
    imageUrl: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FNfvfF%2FbtsK3mLplWO%2Ft7BvLkwg2IBZo9Sfei4MH0%2Fimg.png',
    projectUrl: '/project/8',
    screenshots: [
      'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FNfvfF%2FbtsK3mLplWO%2Ft7BvLkwg2IBZo9Sfei4MH0%2Fimg.png',
      'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FdP2XGu%2FbtsK3sYUf12%2FfVS7lJXbDnkINweDL18A9K%2Fimg.png',
      'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FWEFHA%2FbtsK3fyPGjE%2FXKK1kMc0L3n50ve6GBYkQK%2Fimg.png',
      'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2F9rEAW%2FbtsK46HdEfs%2F1KSbMHXFhYkKhUrkONkAeK%2Fimg.png',
      'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FDam2S%2FbtsK4hirgXk%2FmnpPuUS4nYXiKJoHIk6pTk%2Fimg.png',
      'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fcppk7v%2FbtsK4wGnKTm%2FgB3hltC6zWVrkj2Qhkkcik%2Fimg.png',
    ],
    details: {
      period: {
        en: 'Jan 2023 - March 2024',
        kr: '2023년 1월 - 2024년 3월'
      },
      team: [
        {
          role: {
            en: 'Project Manager - Pyungkang Hong',
            kr: '프로젝트 매니저 - 홍평강'
          },
          responsibilities: {
            en: 'Project management and strategy planning',
            kr: '프로젝트 관리 및 전략 기획'
          }
        },
        {
          role: {
            en: 'Backend Developer - Jaehun Kim',
            kr: '백엔드 개발자 - 김재훈'
          },
          responsibilities: {
            en: 'Backend system development and API integration',
            kr: '백엔드 시스템 개발 및 API 통합'
          }
        },
        {
          role: {
            en: 'Frontend Developer - YoungJin Lee',
            kr: '프론트엔드 개발자 - 이영진'
          },
          responsibilities: {
            en: 'Frontend development and UI implementation',
            kr: '프론트엔드 개발 및 UI 구현'
          }
        }
      ],
      stack: ['Flutter', 'Firebase', 'Dart', 'Firebase Storage', 'Hive/SQLite'],
      features: {
        en: [
          'Topic-based chart study lists',
          'Interactive learning examples',
          'Personalized content saving system',
          'Comprehensive progress tracking'
        ],
        kr: [
          '주제별 차트 학습 리스트',
          '인터랙티브 학습 예제',
          '개인화된 콘텐츠 저장 시스템',
          '종합적인 진도 추적'
        ]
      },
      about: {
        en: 'ChartGet revolutionizes chart analysis education with its innovative mobile platform, combining comprehensive learning resources with interactive tools.',
        kr: '차트겟은 기본적인 금융 학습을 할 수 있는 차트 공부 앱, '
      },
      successMetrics: {
        marketReach: 70,
        conversion: 65,
        retention: 80,
        growth: 70
      }
    },
    links: {
      blog: 'https://chartget.co.kr/',
      web: 'https://chartgetalgo.com/'
    }
  },
  {
    id: '9',
    type: 'app',
    title: {
      en: 'Woulduin Coin',
      kr: '우주인 코인'
    },
    description: {
      en: 'Web and mobile platform for coin prices, chats, blogs, news, and Korean exchange chart listings',
      kr: '코인 가격, 채팅, 블로그, 뉴스 및 한국 거래소 차트 리스팅을 위한 웹 및 모바일 플랫폼'
    },
    imageUrl: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fb1zykq%2FbtsK3uo1A8c%2FKRULNer7CMV1msXNMmhgs0%2Fimg.jpg',
    projectUrl: '/project/9',
    screenshots: [
      'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fb1zykq%2FbtsK3uo1A8c%2FKRULNer7CMV1msXNMmhgs0%2Fimg.jpg',
      'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FCJlKy%2FbtsK5HGWno1%2FQnkNSG7uDhmIMSUFzfqUsK%2Fimg.jpg',
      'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FmBqiq%2FbtsK52RCT56%2FUHrJMUoIDkNI7O3RzCg7C0%2Fimg.jpg',
      'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbLtqxT%2FbtsK47MTxb9%2FCizMoXXR6fdSsxoJ8nM5l1%2Fimg.jpg',
      'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2F2ON22%2FbtsK5zoJMJk%2FCAReOFkXofndhhRD57J4Lk%2Fimg.jpg',
    ],
    details: {
      period: {
        en: 'Jan 2021 - Dec 2021 [Product Sold]',
        kr: '[제품 판매됨] 2021년 1월 - 2021년 12월 '
      },
      team: [
        {
          role: {
            en: 'Project Manager - Pyungkang Hong',
            kr: '프로젝트 매니저 - 홍평강'
          },
          responsibilities: {
            en: 'Project management and product strategy',
            kr: '프로젝트 관리 및 제품 전략'
          }
        },
        {
          role: {
            en: 'Backend Developer - Hawon Park',
            kr: '백엔드 개발자 - 박하원'
          },
          responsibilities: {
            en: 'Backend infrastructure and API development',
            kr: '백엔드 인프라 및 API 개발'
          }
        },
        {
          role: {
            en: 'Frontend Developer - YoungJin Lee',
            kr: '프론트엔드 개발자 - 이영진'
          },
          responsibilities: {
            en: 'Mobile app development and UI implementation',
            kr: '모바일 앱 개발 및 UI 구현'
          }
        }
      ],
      stack: ['React Native', 'MongoDB', 'Firebase', 'Redux', 'RESTful API'],
      features: {
        en: [
          'Real-time cryptocurrency price tracking system',
          'Interactive user discussion platform',
          'Comprehensive blog and news aggregation',
          'Korean exchange integration',
          'Customizable dark mode interface'
        ],
        kr: [
          '실시간 암호화폐 가격 추적 시스템',
          '인터랙티브 사용자 토론 플랫폼',
          '종합적인 블로그 및 뉴스 집계',
          '한국 거래소 통합',
          '맞춤형 다크 모드 인터페이스'
        ]
      },
      about: {
        en: 'Woulduin Coin provides a comprehensive cryptocurrency information platform tailored for the Korean market, combining real-time tracking with community features.',
        kr: '우주인코인은 한국 시장에 맞춤화된 종합적인 암호화폐 정보 플랫폼을 제공하며, 실시간 추적과 커뮤니티 기능을 결합한 웹/앱 플랫폼 입니다'
      },
      successMetrics: {
        marketReach: 92,
        conversion: 90,
        targetAudience: 90,
        growth: 80
      }
    },
    links: {
      playStore: 'https://appadvice.com/app/ec-9a-b0-ec-a3-bc-ec-9d-b8-ec-bd-94-ec-9d-b8/1577729016'
    }
  }
] as const;