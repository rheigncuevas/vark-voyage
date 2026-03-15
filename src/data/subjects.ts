export interface Resource {
  title: string;
  description: string;
  url: string;
}

export interface Subject {
  slug: string;
  name: string;
  description: string;
  visual: Resource[];
  auditory: Resource[];
  reading: Resource[];
  kinesthetic: Resource[];
}

export interface Category {
  slug: string;
  name: string;
  description: string;
  icon: string;
  gradient: string;
  glow: string;
  subjects: Subject[];
}

export const categories: Category[] = [
  {
    slug: "effective-communication",
    name: "Effective Communication",
    description: "Develop mastery in oral, written, and media communication skills essential for academic and professional success in the 21st century.",
    icon: "MessageSquare",
    gradient: "gradient-visual",
    glow: "glow-visual",
    subjects: [
      {
        slug: "oral-communication",
        name: "Oral Communication",
        description: "Build confidence in public speaking, interpersonal communication, and effective verbal expression across various contexts.",
        visual: [],
        auditory: [],
        reading: [],
        kinesthetic: [],
      },
      {
        slug: "reading-and-writing-skills",
        name: "Reading and Writing Skills",
        description: "Strengthen reading comprehension and writing proficiency through analysis, composition, and critical literacy practices.",
        visual: [],
        auditory: [],
        reading: [],
        kinesthetic: [],
      },
      {
        slug: "media-and-information-literacy",
        name: "Media and Information Literacy",
        description: "Master media literacy, information literacy, and digital citizenship. Understand how media shapes perspectives and learn responsible information use.",
        visual: [
          {
            title: "MIL Video Lessons Playlist",
            description: "Comprehensive YouTube playlist covering Media and Information Literacy concepts with visual presentations.",
            url: "https://youtube.com/playlist?list=PLcQqNc3v9Bcd8YQpMx2KsFG2QablVIGXh&si=4NeTKbSL_CgIFm4J",
          },
          {
            title: "MIL Visual Discussions Playlist",
            description: "Visual discussions and explanations on MIL topics aligned with the SHS curriculum.",
            url: "https://youtube.com/playlist?list=PLN2vKr_NwAR7WQpuuqgrNdGb_Ds9OEc6q&si=mvDkkdgg--OHndmW",
          },
          {
            title: "MIL PowerPoint Presentation 1",
            description: "Detailed slide presentation covering key MIL concepts and frameworks.",
            url: "https://sg.docworkspace.com/d/sbRaqgqKKhkwrOJT_vg9azkpqbghyn8l6bo?sa=601.1074",
          },
          {
            title: "MIL PowerPoint Presentation 2",
            description: "Additional presentation slides on media literacy, information literacy, and digital citizenship.",
            url: "https://sg.docworkspace.com/d/sbRaqrEcU5EVQ8LS_9uvclybsx634huj81e?sa=601.1074",
          },
        ],
        auditory: [
          {
            title: "MIL Audio Discussion",
            description: "Listen to an in-depth audio discussion about Media and Information Literacy topics.",
            url: "https://drive.google.com/file/d/1SQXaJRkd--NZx8OmdJ_UnJPTL4_feVU3/view?usp=drivesdk",
          },
          {
            title: "MIL Podcast on Spotify",
            description: "Spotify podcast series covering various MIL topics perfect for auditory learners.",
            url: "https://open.spotify.com/show/5V8imQe7DncZbfY9K60mWp?si=-G_8c3YXTm-tSeRE3TOo-A",
          },
        ],
        reading: [
          {
            title: "MIL Module & Worksheet",
            description: "Complete module with worksheets and notes covering Media and Information Literacy for SHS.",
            url: "https://www.scribd.com/document/638688318/Untitled",
          },
        ],
        kinesthetic: [
          {
            title: "🎨 T-Shirt Layout Designing",
            description: "Design your own T-shirt layout that communicates a media message or advocacy. Hands-on creative activity!",
            url: "https://youtu.be/7R4ltjGHsfQ?si=m67tU2amswG3fVcw",
          },
          {
            title: "🖌 Sign Painting Tutorial",
            description: "Create a sign or poster that delivers clear information to a target audience using traditional sign painting.",
            url: "https://youtu.be/zyq4fJf-SBw?si=Kazer6nhW-4DgXuD",
          },
          {
            title: "📷 Photography Tutorial",
            description: "Take photos that communicate a story or message related to media and information literacy.",
            url: "https://youtu.be/V7z7BAZdt2M?si=fnD3W0ve1JW4VhVt",
          },
          {
            title: "🎬 Script Writing Tutorial",
            description: "Write a short script for a media production such as a short film or public service announcement.",
            url: "https://youtu.be/-3uO0Qqfklo?si=wVfJ09Ykzq9Nqyzz",
          },
        ],
      },
      {
        slug: "21st-century-literature",
        name: "21st Century Literature from the Philippines and the World",
        description: "Explore contemporary literary works from the Philippines and around the world, analyzing themes, styles, and cultural contexts of modern literature.",
        visual: [],
        auditory: [],
        reading: [],
        kinesthetic: [],
      },
      {
        slug: "komunikasyon-at-pananaliksik",
        name: "Komunikasyon at Pananaliksik sa Wika at Kulturang Pilipino",
        description: "Pag-aralan ang mga konsepto ng komunikasyon at pananaliksik sa konteksto ng wikang Filipino at kulturang Pilipino.",
        visual: [],
        auditory: [],
        reading: [],
        kinesthetic: [],
      },
      {
        slug: "pagbasa-at-pagsusuri",
        name: "Pagbasa at Pagsusuri Ng Iba't-ibang Teksto Tungo sa Pananaliksik",
        description: "Paunlarin ang kasanayan sa pagbasa, pagsusuri, at pagsulat ng iba't ibang uri ng teksto para sa pananaliksik.",
        visual: [],
        auditory: [],
        reading: [],
        kinesthetic: [],
      },
    ],
  },
  {
    slug: "life-and-career-skills",
    name: "Life and Career Skills",
    description: "Develop essential personal and physical competencies that prepare you for lifelong wellness, career readiness, and holistic self-growth.",
    icon: "Heart",
    gradient: "gradient-auditory",
    glow: "glow-auditory",
    subjects: [
      {
        slug: "personal-development",
        name: "Personal Development",
        description: "Understand yourself better through self-awareness, emotional intelligence, interpersonal relationships, and goal setting for personal growth.",
        visual: [],
        auditory: [],
        reading: [],
        kinesthetic: [],
      },
      {
        slug: "physical-education",
        name: "Physical Education",
        description: "Engage in physical fitness activities, learn about health and wellness, and develop an active lifestyle through sports and exercise.",
        visual: [],
        auditory: [],
        reading: [],
        kinesthetic: [],
      },
    ],
  },
  {
    slug: "general-mathematics",
    name: "General Mathematics",
    description: "Build strong analytical and quantitative reasoning skills through mathematical concepts, functions, statistics, and real-world problem solving.",
    icon: "Calculator",
    gradient: "gradient-reading",
    glow: "glow-reading",
    subjects: [
      {
        slug: "general-mathematics",
        name: "General Mathematics",
        description: "Master key mathematical concepts including functions, rational equations, exponential and logarithmic functions, and business mathematics.",
        visual: [],
        auditory: [],
        reading: [],
        kinesthetic: [],
      },
      {
        slug: "statistics-and-probability",
        name: "Statistics and Probability",
        description: "Learn how to collect, analyze, and interpret data using statistical methods and probability theory for informed decision-making.",
        visual: [],
        auditory: [],
        reading: [],
        kinesthetic: [],
      },
    ],
  },
  {
    slug: "general-science",
    name: "General Science",
    description: "Explore the natural world through Earth sciences and physical sciences, building scientific literacy and critical thinking about our environment.",
    icon: "Atom",
    gradient: "gradient-kinesthetic",
    glow: "glow-kinesthetic",
    subjects: [
      {
        slug: "earth-and-life-science",
        name: "Earth and Life Science",
        description: "Study the Earth's systems, geological processes, ecosystems, and the diversity of life forms that inhabit our planet.",
        visual: [],
        auditory: [],
        reading: [],
        kinesthetic: [],
      },
      {
        slug: "physical-science",
        name: "Physical Science",
        description: "Understand the fundamental principles of physics and chemistry that govern matter, energy, and the interactions between them.",
        visual: [],
        auditory: [],
        reading: [],
        kinesthetic: [],
      },
    ],
  },
  {
    slug: "kasaysayan-ng-lipunang-pilipino",
    name: "Pag-aaral ng Kasaysayan ng Lipunang Pilipino",
    description: "Unawain ang mga aspeto ng kultura, lipunan, politika, sining, at pilosopiya ng bansang Pilipinas sa makabagong panahon.",
    icon: "Landmark",
    gradient: "gradient-hero",
    glow: "glow-primary",
    subjects: [
      {
        slug: "understanding-culture-society-politics",
        name: "Understanding Culture, Society and Politics",
        description: "Examine the dynamics of culture, society, and politics in the Philippines and how they shape the Filipino identity and nationhood.",
        visual: [],
        auditory: [],
        reading: [],
        kinesthetic: [],
      },
      {
        slug: "contemporary-arts-philippines",
        name: "Contemporary Arts in the Philippines",
        description: "Discover and appreciate Philippine contemporary art forms from different regions, exploring how art reflects culture, identity, and social issues.",
        visual: [
          {
            title: "CPAR Video Lessons Playlist",
            description: "YouTube playlist with visual lessons on Contemporary Philippine Arts from the Regions.",
            url: "https://youtube.com/playlist?list=PLeJCz3KbmgTn8xC5Q1_nIT9LfLFc3z7eU&si=90Ngd_7IxMrXiJCa",
          },
          {
            title: "CPAR PowerPoint - Lessons 1 & 2",
            description: "Presentation covering various contemporary art forms in the Philippine context.",
            url: "https://www.scribd.com/presentation/591833276/Cpar-Ppt-Lesson-1-2-Various-Contemporary-Art",
          },
          {
            title: "Introduction to CPAR - Slideshow",
            description: "Comprehensive introductory slides about Contemporary Philippine Arts and its significance.",
            url: "https://www.slideshare.net/slideshow/week-1-introduction-to-cparpptx/257716959",
          },
        ],
        auditory: [
          {
            title: "Integrative Art as Applied to Philippine Contemporary Art (Podcast)",
            description: "Apple Podcast episode discussing integrative art forms in Philippine contemporary art practice.",
            url: "https://podcasts.apple.com/us/podcast/unit-1-integrative-art-as-applied-to-philippine-contemporary/id1524802775?i=1000485832882",
          },
        ],
        reading: [
          {
            title: "CPAR Module 1",
            description: "Comprehensive reading module on contemporary arts in the Philippine regions.",
            url: "https://sg.docworkspace.com/d/sbRaqilHJD2RH6iZ_wtqrkpmjs96zcl67wp?sa=601.1074",
          },
          {
            title: "CPAR Module 2",
            description: "Continued reading material and worksheets on Philippine regional art forms.",
            url: "https://sg.docworkspace.com/d/sbRaqlzdnl0LI4pJ_7cdqvkl2bcxez0x6rk?sa=601.1074",
          },
          {
            title: "CPAR Module 3",
            description: "Notes and study materials on contemporary art movements in the Philippines.",
            url: "https://sg.docworkspace.com/d/sbRaquTmMDRPZLIf_85ufo5erkpqnst67sp?sa=601.1074",
          },
          {
            title: "CPAR Module 4",
            description: "Additional worksheets and notes for in-depth study of Philippine contemporary arts.",
            url: "https://sg.docworkspace.com/d/sbRaqpkIrM30ITGx_odirs1ur8tar4tqbkh?sa=601.1074",
          },
        ],
        kinesthetic: [
          {
            title: "Paper Mâché Tutorial",
            description: "Learn to create paper mâché art — a traditional craft technique used in Philippine festivals and art.",
            url: "https://youtu.be/6UdbwnLLGGk?si=dTjoGRDuOx1s_v0w",
          },
          {
            title: "Straw Folding Tutorial",
            description: "Master the art of straw folding — a folk art technique practiced across Philippine regions.",
            url: "https://youtu.be/_DQozdK_BuY?si=swr_ZYjMjfSKOgez",
          },
          {
            title: "Paper Quilling Tutorial",
            description: "Learn paper quilling to create intricate designs and artworks inspired by contemporary art.",
            url: "https://youtu.be/6YWW6RmhwP0?si=twbiK8yyn2wEKy0X",
          },
        ],
      },
      {
        slug: "introduction-philosophy-human-person",
        name: "Introduction to the Philosophy of the Human Person",
        description: "Engage with fundamental philosophical questions about human existence, freedom, morality, and the meaning of life.",
        visual: [],
        auditory: [],
        reading: [],
        kinesthetic: [],
      },
    ],
  },
];

export const getCategoryBySlug = (slug: string) => categories.find((c) => c.slug === slug);

export const getSubjectBySlug = (categorySlug: string, subjectSlug: string) => {
  const cat = getCategoryBySlug(categorySlug);
  return cat?.subjects.find((s) => s.slug === subjectSlug);
};
