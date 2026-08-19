export type WorkImage = { src: string; w: number; h: number };
export type Work = {
  slug: string;
  no: number;
  title: string;
  short: string;
  year: string;
  period?: string;
  type: string;
  role: string;
  engine: string;
  duration: string;
  software: string[];
  summary: string;
  summaryKo?: string;
  concept: string;
  artstation: string;
  cover: WorkImage;
  images: WorkImage[];
};

export const works: Work[] = [
  {
    "slug": "forgotten-breath",
    "no": 1,
    "title": "The Forgotten Breath of a Medieval Village",
    "short": "Forgotten Breath",
    "year": "2025",
    "period": "2025.01 - 2025.04",
    "type": "Personal Project",
    "role": "Environment Art — modeling, texturing, lighting, composition",
    "engine": "Unreal Engine 5",
    "duration": "3–4 months",
    "software": [
      "3ds Max",
      "ZBrush",
      "Substance 3D Painter",
      "Unreal Engine 5.3",
      "Photoshop",
      "Marvelous Designer",
      "Marmoset Toolbag"
    ],
    "summary": "The Forgotten Breath of a Medieval Village is my first 3D game environment project. The scene was built using a modular asset kit, with its composition and atmosphere developed from the referenced concept art. Additional visual references guided the mood, architectural structure, and environmental density, strengthening the scene’s realism and sense of place. Production took approximately three to four months, including iterative refinement. No AI-generated assets were used.",
    "summaryKo": "'중세 마을의 잊힌 숨결(The Forgotten Breath of a Medieval Village)'은 저의 첫 3D 게임 환경 제작 프로젝트입니다.\n모듈러 에셋 키트를 활용하여 구축되었으며, 구도와 분위기는 참고용 컨셉 아트를 바탕으로 발전시켰습니다.\n추가적인 시각적 자료를 통해 전체적인 무드, 건축적 구조, 환경적 밀도 등을 설정함으로써 장면의 사실감과 장소감을 한층 높였습니다.\n제작에는 반복적인 수정 및 보완 과정을 포함하여 약 3~4개월이 소요되었습니다.\nAI로 생성된 에셋은 일절 사용하지 않았습니다.",
    "concept": "https://www.artstation.com/artwork/8bx4vO",
    "artstation": "https://www.artstation.com/artwork/DLzPvn",
    "cover": {
      "src": "/works/forgotten-breath/cover.webp",
      "w": 1920,
      "h": 1050
    },
    "images": [
      {
        "src": "/works/forgotten-breath/01.jpg",
        "w": 2560,
        "h": 1400
      },
      {
        "src": "/works/forgotten-breath/project-description.jpg",
        "w": 1920,
        "h": 1080
      },
      {
        "src": "/works/forgotten-breath/scene-building-process.jpg",
        "w": 1920,
        "h": 1080
      },
      {
        "src": "/works/forgotten-breath/02.jpg",
        "w": 2560,
        "h": 1400
      },
      {
        "src": "/works/forgotten-breath/03.jpg",
        "w": 1920,
        "h": 1123
      },
      {
        "src": "/works/forgotten-breath/04.jpg",
        "w": 2560,
        "h": 1400
      },
      {
        "src": "/works/forgotten-breath/05.jpg",
        "w": 2560,
        "h": 1400
      },
      {
        "src": "/works/forgotten-breath/06.jpg",
        "w": 2560,
        "h": 1400
      },
      {
        "src": "/works/forgotten-breath/07.jpg",
        "w": 2489,
        "h": 1400
      },
      {
        "src": "/works/forgotten-breath/08.jpg",
        "w": 2489,
        "h": 1400
      },
      {
        "src": "/works/forgotten-breath/09.jpg",
        "w": 2560,
        "h": 1400
      },
      {
        "src": "/works/forgotten-breath/10.jpg",
        "w": 2560,
        "h": 1400
      },
      {
        "src": "/works/forgotten-breath/11.jpg",
        "w": 1920,
        "h": 1050
      },
      {
        "src": "/works/forgotten-breath/12.jpg",
        "w": 2489,
        "h": 1400
      },
      {
        "src": "/works/forgotten-breath/13.jpg",
        "w": 2489,
        "h": 1400
      },
      {
        "src": "/works/forgotten-breath/14.jpg",
        "w": 1920,
        "h": 1050
      },
      {
        "src": "/works/forgotten-breath/15.jpg",
        "w": 1920,
        "h": 1050
      },
      {
        "src": "/works/forgotten-breath/16.jpg",
        "w": 2560,
        "h": 1400
      },
      {
        "src": "/works/forgotten-breath/17.jpg",
        "w": 2560,
        "h": 1400
      },
      {
        "src": "/works/forgotten-breath/18.jpg",
        "w": 2560,
        "h": 1400
      },
      {
        "src": "/works/forgotten-breath/19.gif",
        "w": 1920,
        "h": 1050
      },
      {
        "src": "/works/forgotten-breath/20.webp",
        "w": 1920,
        "h": 1080
      }
    ]
  },
  {
    "slug": "medieval-props",
    "no": 2,
    "title": "Props of Medieval Village",
    "short": "Medieval Props",
    "year": "2025",
    "period": "2025.01 - 2025.04",
    "type": "Personal Project",
    "role": "Prop & modular kit modeling, texturing, presentation",
    "engine": "Unreal Engine 5",
    "duration": "3–4 months",
    "software": [
      "3ds Max",
      "ZBrush",
      "Unreal Engine",
      "Substance 3D Painter",
      "Photoshop",
      "Marvelous Designer",
      "Marmoset Toolbag"
    ],
    "summary": "Modular building kit and prop set for the medieval village scene — timber-frame houses, roofs, carts, cloth and dressing assets, presented as breakdowns and turntables. No AI-generated assets.",
    "summaryKo": "중세 마을을 위한 모듈러 건물 키트와 프랍 세트입니다.\n목조 주택, 지붕, 수레, 천 등의 에셋을 제작하고 브레이크다운과 턴테이블 형식으로 정리했습니다.\nAI 생성 에셋은 사용하지 않았습니다.",
    "concept": "",
    "artstation": "https://www.artstation.com/artwork/AZVYlX",
    "cover": {
      "src": "/works/medieval-props/cover.webp",
      "w": 1920,
      "h": 1080
    },
    "images": [
      {
        "src": "/works/medieval-props/01.webp",
        "w": 1920,
        "h": 1080
      },
      {
        "src": "/works/medieval-props/02.webp",
        "w": 1920,
        "h": 1080
      },
      {
        "src": "/works/medieval-props/03.webp",
        "w": 1920,
        "h": 1080
      },
      {
        "src": "/works/medieval-props/04.webp",
        "w": 1920,
        "h": 1080
      },
      {
        "src": "/works/medieval-props/05.webp",
        "w": 1920,
        "h": 1080
      },
      {
        "src": "/works/medieval-props/06.webp",
        "w": 1920,
        "h": 1080
      },
      {
        "src": "/works/medieval-props/07.webp",
        "w": 1920,
        "h": 1080
      },
      {
        "src": "/works/medieval-props/08.webp",
        "w": 1920,
        "h": 1080
      },
      {
        "src": "/works/medieval-props/09.webp",
        "w": 1920,
        "h": 1080
      },
      {
        "src": "/works/medieval-props/10.webp",
        "w": 1920,
        "h": 1080
      },
      {
        "src": "/works/medieval-props/11.webp",
        "w": 1920,
        "h": 1080
      },
      {
        "src": "/works/medieval-props/12.webp",
        "w": 1920,
        "h": 1080
      }
    ]
  },
  {
    "slug": "weind-up",
    "no": 3,
    "title": "WeIND UP — Escape from ToyCorp",
    "short": "WeIND UP",
    "year": "2025-2026",
    "period": "2025.06 - 2026.08",
    "type": "Team Project · Studio Gravitia",
    "role": "Environment Art — mesh placement, prop creation, lighting",
    "engine": "Unreal Engine 5",
    "duration": "In development",
    "software": [
      "Unreal Engine",
      "3ds Max",
      "Substance 3D Painter",
      "Photoshop"
    ],
    "summary": "Cooperative puzzle game environment. Translated 2D concept art into a realized 3D world in Unreal, focusing on mood, spatial composition and readable gameplay space. Level layout by a dedicated level designer; environment execution and atmospheric direction by me.",
    "summaryKo": "협동 퍼즐 게임의 환경 작업으로, 2D 컨셉 아트를 Unreal Engine의 3D 공간으로 구현하며 분위기와 플레이 동선의 가독성에 집중했습니다.\n저는 환경 제작과 분위기 연출을 담당했으며, 레벨 레이아웃은 전담 디자이너가 맡았습니다.",
    "concept": "https://x.com/Studio_Gravitia",
    "artstation": "https://www.artstation.com/artwork/rlxNzG",
    "cover": {
      "src": "/works/weind-up/cover.webp",
      "w": 2048,
      "h": 1152
    },
    "images": [
      {
        "src": "/works/weind-up/01.webp",
        "w": 1920,
        "h": 1080
      },
      {
        "src": "/works/weind-up/02.webp",
        "w": 1920,
        "h": 1080
      },
      {
        "src": "/works/weind-up/03.webp",
        "w": 1920,
        "h": 1080
      },
      {
        "src": "/works/weind-up/04.webp",
        "w": 1920,
        "h": 1080
      },
      {
        "src": "/works/weind-up/05.webp",
        "w": 1920,
        "h": 1080
      },
      {
        "src": "/works/weind-up/06.webp",
        "w": 1920,
        "h": 1080
      },
      {
        "src": "/works/weind-up/07.webp",
        "w": 1920,
        "h": 1080
      },
      {
        "src": "/works/weind-up/08.webp",
        "w": 1920,
        "h": 1080
      },
      {
        "src": "/works/weind-up/09.webp",
        "w": 1920,
        "h": 1080
      },
      {
        "src": "/works/weind-up/10.webp",
        "w": 1920,
        "h": 1080
      },
      {
        "src": "/works/weind-up/chapter2-4-5.jpg",
        "w": 1920,
        "h": 1080
      },
      {
        "src": "/works/weind-up/chapter2-5.jpg",
        "w": 1920,
        "h": 1080
      },
      {
        "src": "/works/weind-up/project-description.jpg",
        "w": 1920,
        "h": 1080
      },
      {
        "src": "/works/weind-up/11.webp",
        "w": 1920,
        "h": 1080
      },
      {
        "src": "/works/weind-up/12.webp",
        "w": 1920,
        "h": 1080
      },
      {
        "src": "/works/weind-up/13.webp",
        "w": 1920,
        "h": 1080
      },
      {
        "src": "/works/weind-up/14.webp",
        "w": 1920,
        "h": 1080
      },
      {
        "src": "/works/weind-up/15.webp",
        "w": 1920,
        "h": 1080
      },
      {
        "src": "/works/weind-up/16.webp",
        "w": 1920,
        "h": 1080
      },
      {
        "src": "/works/weind-up/optimization.jpg",
        "w": 1920,
        "h": 1080
      }
    ]
  },
  {
    "slug": "props",
    "no": 4,
    "title": "Props",
    "short": "Props",
    "year": "2024.05",
    "period": "2024.05",
    "type": "Personal Project",
    "role": "Prop Art — modeling, sculpting, texturing",
    "engine": "3ds Max / ZBrush",
    "duration": "2 days each",
    "software": [
      "3ds Max",
      "ZBrush",
      "Substance 3D Painter"
    ],
    "summary": "These props were created using Maya, 3ds Max, and ZBrush. The project focused on strengthening adaptability across a range of production tools and expanding workflow flexibility, while gaining hands-on experience with a prop creation pipeline designed for real-time environments.",
    "summaryKo": "Maya, 3ds Max, ZBrush를 활용한 개인 프랍 작업입니다.\n다양한 제작 툴에 대한 적응력과 작업 확장성을 높이고, 실시간 환경에 적합한 프랍 제작 파이프라인을 경험하는 데 집중했습니다.",
    "concept": "",
    "artstation": "",
    "cover": {
      "src": "/works/props/cover.jpg",
      "w": 1920,
      "h": 1080
    },
    "images": [
      {
        "src": "/works/props/cup.jpg",
        "w": 1920,
        "h": 1080
      },
      {
        "src": "/works/props/statue.jpg",
        "w": 1920,
        "h": 1080
      }
    ]
  }
];

export const profile = {
  name: "MinJeong Kim",
  nameKo: "김민정",
  headline: "3D Environment Artist",
  location: "South Korea",
  artstation: "https://waterwoterwater.artstation.com",
  youtube: "https://www.youtube.com/@waterwoterwater",
  email: "waterwoterwater@gmail.com",
  tools: ["Unreal Engine 5", "3ds Max", "ZBrush", "Substance 3D Painter", "Marvelous Designer", "Marmoset Toolbag", "Photoshop", "Blender", "Maya"],
};
