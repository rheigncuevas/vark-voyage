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
        visual: [
          {
            title: "Oral Communication Video Lessons",
            description: "Complete video lesson playlist covering oral communication concepts, speech types, and delivery techniques for SHS students.",
            url: "https://youtube.com/playlist?list=PLcQqNc3v9Bcddr6xFs7C_nsE4WL0lp8OZ&si=EthNvWCMxXWj50Rr",
          },
        ],
        auditory: [
          {
            title: "Famous Speeches Collection",
            description: "Listen to iconic speeches from world leaders and orators — perfect for understanding tone, pacing, and rhetorical strategies.",
            url: "https://open.spotify.com/playlist/7l1ImgoDryHCdq6SsrC2Jo?si=qsM-YjG5R0aU_Rz2a5aSiw",
          },
        ],
        reading: [
          {
            title: "Oral Communication Modules",
            description: "Self-learning modules covering speech writing, types of communication, and oral presentation skills aligned with the SHS curriculum.",
            url: "https://shs.modyul.online/tag/oral-communication-in-context/",
          },
        ],
        kinesthetic: [
          {
            title: "Impromptu Speaking Exercises",
            description: "Practice your on-the-spot speaking skills with guided impromptu speech exercises and tips for thinking on your feet.",
            url: "https://youtu.be/SehA30-v-nM?si=kKaienYdoH-atd8H",
          },
        ],
      },
      {
        slug: "reading-and-writing-skills",
        name: "Reading and Writing Skills",
        description: "Strengthen reading comprehension and writing proficiency through analysis, composition, and critical literacy practices.",
        visual: [
          {
            title: "Reading & Writing Video Lessons",
            description: "Video playlist with lessons on reading strategies, text analysis, and writing techniques for senior high school students.",
            url: "https://youtube.com/playlist?list=PLcQqNc3v9Bcde0-KVybgFMQxSUZLWYuJ8&si=obbur6z0hIhb2bYJ",
          },
        ],
        auditory: [
          {
            title: "Read Aloud Sessions & Audiobooks",
            description: "Improve comprehension and fluency by listening to curated audiobook readings and read-aloud sessions on Spotify.",
            url: "https://open.spotify.com/playlist/520Umcdb875vvnaORFCfWX?si=i3n9Z01bToOpf7No7SwgzA",
          },
        ],
        reading: [
          {
            title: "Reading & Writing Skills Modules",
            description: "Downloadable self-learning modules covering paragraph writing, essay structures, and critical reading techniques.",
            url: "https://shs.modyul.online/tag/reading-and-writing-skills/",
          },
        ],
        kinesthetic: [
          {
            title: "Script Writing & Theater Workshop",
            description: "Get hands-on with writing by crafting scripts and performing them — combining writing skills with physical expression.",
            url: "https://youtu.be/23x-PVNAfXA?si=28C-xZAej5PrA1Rw",
          },
        ],
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
        visual: [
          {
            title: "21st Century Literature Video Lessons",
            description: "Visual playlist exploring Philippine and world literary genres, movements, and notable works of the 21st century.",
            url: "https://youtube.com/playlist?list=PLUHq-qRsPvwfbUf9f1bdxrpk06gEwX2fM&si=XV95Crd9O75bp0z1",
          },
        ],
        auditory: [
          {
            title: "Spoken Word Poetry Readings",
            description: "Experience powerful spoken word poetry performances — feel the rhythm and emotion of contemporary Filipino and world literature.",
            url: "https://open.spotify.com/playlist/0KBZJVEzw96B4lBTrjlsaF?si=xVTVlAanTCOUjmcQrchA5Q",
          },
        ],
        reading: [
          {
            title: "21st Century Literature Modules",
            description: "Self-learning modules covering literary genres, Philippine literary history, and analysis of contemporary works.",
            url: "https://shs.modyul.online/tag/21st-century-literature-from-the-philippines-and-the-world/",
          },
        ],
        kinesthetic: [
          {
            title: "Dramatic Interpretations Workshop",
            description: "Bring literature to life through dramatic interpretation — act out scenes, perform monologues, and embody characters from contemporary works.",
            url: "https://youtu.be/zg70hU2cN0I?si=ZaNpYhS3pioK6MSo",
          },
        ],
      },
      {
        slug: "komunikasyon-at-pananaliksik",
        name: "Komunikasyon at Pananaliksik sa Wika at Kulturang Pilipino",
        description: "Pag-aralan ang mga konsepto ng komunikasyon at pananaliksik sa konteksto ng wikang Filipino at kulturang Pilipino.",
        visual: [
          {
            title: "Komunikasyon Video Lessons",
            description: "Mga video lesson tungkol sa komunikasyon, wika, at kulturang Pilipino para sa mga mag-aaral ng SHS.",
            url: "https://youtube.com/playlist?list=PLcQqNc3v9BccnJ0NgNP5F0yEuCB_HBwAD&si=XN4cQ6AqnWu-cvki",
          },
        ],
        auditory: [
          {
            title: "Filipino Spoken Poetry",
            description: "Makinig sa mga spoken word poetry sa Filipino — isang paraan ng pagpapahayag ng damdamin at kaisipan sa wikang Filipino.",
            url: "https://open.spotify.com/playlist/7iT9E7yB6A317Qj1yIADal?si=BORfpFUgSvKy8o5D640f-g",
          },
        ],
        reading: [
          {
            title: "Komunikasyon at Pananaliksik Modules",
            description: "Mga modyul at babasahin tungkol sa komunikasyon, pananaliksik, at kulturang Pilipino na ayon sa kurikulum ng SHS.",
            url: "https://shsph.blogspot.com/2021/04/komunikasyon-at-pananaliksik-sa-wika-at.html?m=1",
          },
        ],
        kinesthetic: [
          {
            title: "Research Defense Practice in Filipino",
            description: "Matuto kung paano magsagawa ng research defense sa wikang Filipino — isang hands-on na aktibidad sa pananaliksik.",
            url: "https://youtu.be/gAYB3y3pfLE?si=HHY6AfFDUovODF81",
          },
        ],
      },
      {
        slug: "pagbasa-at-pagsusuri",
        name: "Pagbasa at Pagsusuri Ng Iba't-ibang Teksto Tungo sa Pananaliksik",
        description: "Paunlarin ang kasanayan sa pagbasa, pagsusuri, at pagsulat ng iba't ibang uri ng teksto para sa pananaliksik.",
        visual: [
          {
            title: "Pagbasa at Pagsusuri Video Lessons",
            description: "Mga video lesson na nagpapaliwanag ng iba't ibang uri ng teksto at mga estratehiya sa pagbasa at pagsusuri.",
            url: "https://youtube.com/playlist?list=PL7nQoVRZsXUz55pJW5QhoOpURZMMjH9hg&si=d_09C8VLavqyn2Tk",
          },
        ],
        auditory: [
          {
            title: "Pagbasa Audio Lessons",
            description: "Mga audio lesson para sa pagbasa at pagsusuri ng mga teksto — perpekto para sa mga auditory learners.",
            url: "https://youtube.com/playlist?list=PL9eWY9H6slg1P6zC0c4i72mUZIpv84kiN&si=ppyI1vILCP1WnUgO",
          },
        ],
        reading: [
          {
            title: "Pagbasa at Pagsusuri Module 1",
            description: "Komprehensibong modyul na tumatalakay sa mga teksto at estratehiya sa pagbasa tungo sa pananaliksik.",
            url: "https://www.scribd.com/document/507095707/Module-1-Week-1-Pagbasa-at-Pagsusuri-sa-Ibat-Ibang-Teksto-Tungo-sa-Pananaliksik-module-1",
          },
        ],
        kinesthetic: [
          {
            title: "Interactive Text Analysis Activity",
            description: "Hands-on na aktibidad sa pagsusuri ng mga teksto — magsanay sa pagkilala ng mga elemento at istruktura ng teksto.",
            url: "https://youtu.be/1vWdCevKmf4?si=P-ssTw0GQOstQQug",
          },
        ],
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
        visual: [
          {
            title: "Personal Development Video Lessons",
            description: "Video playlist covering self-awareness, goal-setting, stress management, and building healthy relationships.",
            url: "https://youtube.com/playlist?list=PL5IAC9BfZH2aCOg8vOBUdvE8QsZFLN7av&si=_d5noxFiA848RBNP",
          },
        ],
        auditory: [
          {
            title: "Personal Growth Podcast",
            description: "A Spotify podcast that discusses self-improvement, emotional intelligence, and personal development strategies.",
            url: "https://open.spotify.com/show/6rptxTurg2ujmQOInQ7low?si=jE2CFRQFQHqt2hyJqZ-BgQ",
          },
        ],
        reading: [
          {
            title: "Personal Development Modules 1–6",
            description: "Complete set of self-learning modules covering personality, self-concept, emotions, relationships, and career planning.",
            url: "https://www.scribd.com/document/459293412/MODULE-1-6-Personal-Development",
          },
        ],
        kinesthetic: [
          {
            title: "Self-Discovery & Mindfulness Exercises",
            description: "Guided mindfulness and self-reflection exercises to build self-awareness and emotional regulation through physical engagement.",
            url: "https://youtu.be/ZS8DTcuzfEo?si=_5tewXFvytA_urUU",
          },
        ],
      },
      {
        slug: "physical-education",
        name: "Physical Education",
        description: "Engage in physical fitness activities, learn about health and wellness, and develop an active lifestyle through sports and exercise.",
        visual: [
          {
            title: "Physical Education Video Lessons",
            description: "Video playlist demonstrating exercises, sports techniques, and fitness routines aligned with the PE curriculum.",
            url: "https://youtube.com/playlist?list=PLyvLlSwBY36sG69-3xRGSsg529usfpwBg&si=P0b7CxHl_5ZbkDTs",
          },
        ],
        auditory: [
          {
            title: "PE Audio Discussion",
            description: "Listen to discussions about physical fitness concepts, health principles, and active lifestyle tips.",
            url: "https://drive.google.com/file/d/1xfiP32I5hQLbHlI-WDPdVmcTeQ3AUxaj/view?usp=drivesdk",
          },
        ],
        reading: [
          {
            title: "PE HOPE Module",
            description: "Self-learning module covering health-optimizing physical education with lessons on fitness, nutrition, and wellness.",
            url: "https://www.scribd.com/document/471319584/PE-12-HOPE-3-Q1-Module-1-Lesson-1-4-by-Shine",
          },
        ],
        kinesthetic: [
          {
            title: "Follow-Along Workout Routine",
            description: "Get moving with this guided workout routine — perfect for practicing fitness exercises at home or in the classroom.",
            url: "https://youtu.be/CDygGfksP-0?si=DcnDKIEDwzt508sL",
          },
        ],
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
        visual: [
          {
            title: "General Mathematics PowerPoint",
            description: "Visual presentation covering key GenMath topics like functions, rational expressions, and business math with graphs and charts.",
            url: "https://www.scribd.com/presentation/427255641/General-Mathematics-PowerPoint",
          },
        ],
        auditory: [
          {
            title: "Math Explained Podcast",
            description: "Audio explanations of general mathematics topics — listen and learn about functions, equations, and problem-solving approaches.",
            url: "https://open.spotify.com/show/2c7kM1S61DGpR7dnXQBre4",
          },
        ],
        reading: [
          {
            title: "General Mathematics Reading Module",
            description: "Comprehensive reading material and PDF slides covering GenMath lessons from functions to business math applications.",
            url: "https://www.slideshare.net/slideshow/general-mathematicspdf/260278094",
          },
        ],
        kinesthetic: [
          {
            title: "GenMath Learning Activity Sheets",
            description: "Hands-on activity sheets with practice problems and exercises to build math skills through doing and solving.",
            url: "https://www.scribd.com/document/561500821/Genmath-Learning-Activity-Sheets",
          },
        ],
      },
      {
        slug: "statistics-and-probability",
        name: "Statistics and Probability",
        description: "Learn how to collect, analyze, and interpret data using statistical methods and probability theory for informed decision-making.",
        visual: [
          {
            title: "Statistics & Probability Introduction",
            description: "Visual slideshow introducing core concepts of statistics and probability with diagrams, graphs, and examples.",
            url: "https://www.slideshare.net/slideshow/introduction-to-statistics-and-probability-232532533/232532533",
          },
        ],
        auditory: [
          {
            title: "Statistics Podcast",
            description: "Listen to clear explanations of statistical concepts, probability distributions, and data analysis methods.",
            url: "https://open.spotify.com/show/3NA20RWdSNIWlQ3j3j40Gv",
          },
        ],
        reading: [
          {
            title: "Statistics & Probability Module",
            description: "Self-learning module covering random variables, probability distributions, sampling, and hypothesis testing.",
            url: "https://www.scribd.com/document/498116517/statistics-and-probablity-SHS-11-module-1-week1",
          },
        ],
        kinesthetic: [
          {
            title: "Interactive Data Collection Activity",
            description: "Learn statistics by doing — collect real data, create graphs, and compute probabilities through hands-on exercises.",
            url: "https://youtu.be/HnIHpjb3apc?si=292w5xAMIKwEDkt8",
          },
        ],
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
