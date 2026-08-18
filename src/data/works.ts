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
    "year": "2026",
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
    "year": "2026",
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
  email: "waterwoterwater@gmail.com",
  tools: ["Unreal Engine 5", "3ds Max", "ZBrush", "Substance 3D Painter", "Marvelous Designer", "Marmoset Toolbag", "Photoshop", "Blender", "Maya"],
};
