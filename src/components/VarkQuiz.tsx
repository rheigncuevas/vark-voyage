import { useState, useMemo, useCallback } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform } from "framer-motion";
import { Eye, Headphones, BookOpen, Hand, ArrowRight, ArrowLeft, RotateCcw, Sparkles, CheckCircle2, Brain, Trophy, Star, Flame } from "lucide-react";
import GlowingCard from "./GlowingCard";

type VarkType = "V" | "A" | "R" | "K";

interface Question {
  question: string;
  emoji: string;
  options: { text: string; type: VarkType }[];
}

const questions: Question[] = [
  {
    question: "When you're trying to learn how to cook a new dish, you prefer to:",
    emoji: "🍳",
    options: [
      { text: "Watch a cooking video or tutorial on YouTube", type: "V" },
      { text: "Listen to someone explain the recipe step by step", type: "A" },
      { text: "Read the written recipe and ingredient list carefully", type: "R" },
      { text: "Jump in the kitchen and start experimenting hands-on", type: "K" },
    ],
  },
  {
    question: "You need to remember directions to a new place. You would:",
    emoji: "🗺️",
    options: [
      { text: "Look at a map or use GPS with a visual route", type: "V" },
      { text: "Ask someone to tell you the directions verbally", type: "A" },
      { text: "Write down the step-by-step directions", type: "R" },
      { text: "Drive there once to memorize the route by experience", type: "K" },
    ],
  },
  {
    question: "In a group project, you naturally take the role of:",
    emoji: "👥",
    options: [
      { text: "Creating the slides, charts, and visual presentation", type: "V" },
      { text: "Leading group discussions and brainstorming sessions", type: "A" },
      { text: "Writing the report, documentation, and scripts", type: "R" },
      { text: "Building the prototype or doing the physical demo", type: "K" },
    ],
  },
  {
    question: "When studying for a big exam, your go-to method is:",
    emoji: "📝",
    options: [
      { text: "Using color-coded notes, diagrams, and mind maps", type: "V" },
      { text: "Recording yourself reading notes and listening back", type: "A" },
      { text: "Re-reading textbooks and rewriting key concepts", type: "R" },
      { text: "Using flashcards, walking while reviewing, or role-playing", type: "K" },
    ],
  },
  {
    question: "You just bought a new gadget. To set it up, you:",
    emoji: "📱",
    options: [
      { text: "Look at the diagrams and pictures in the manual", type: "V" },
      { text: "Call customer support or ask someone to walk you through it", type: "A" },
      { text: "Read the instruction manual from start to finish", type: "R" },
      { text: "Start pressing buttons and figure it out by trial and error", type: "K" },
    ],
  },
  {
    question: "Your teacher introduces a new topic. You learn best when they:",
    emoji: "🎓",
    options: [
      { text: "Show a PowerPoint with images, graphs, and videos", type: "V" },
      { text: "Explain it through a lecture or class discussion", type: "A" },
      { text: "Give you a handout or reading material to study", type: "R" },
      { text: "Let you do a hands-on activity or experiment", type: "K" },
    ],
  },
  {
    question: "When you're bored, you tend to:",
    emoji: "😴",
    options: [
      { text: "Scroll through Instagram, Pinterest, or watch videos", type: "V" },
      { text: "Listen to music, podcasts, or call a friend", type: "A" },
      { text: "Read a book, articles, or browse written content", type: "R" },
      { text: "Go outside, exercise, or fidget with something", type: "K" },
    ],
  },
  {
    question: "To understand a historical event, you'd prefer:",
    emoji: "🏛️",
    options: [
      { text: "A documentary with visuals and reenactments", type: "V" },
      { text: "A podcast or audio story about the event", type: "A" },
      { text: "A detailed article or chapter from a history book", type: "R" },
      { text: "Visiting a museum or doing a role-play activity", type: "K" },
    ],
  },
  {
    question: "When giving a presentation, you feel most confident:",
    emoji: "🎤",
    options: [
      { text: "Using slides full of images, infographics, and visuals", type: "V" },
      { text: "Speaking freely and engaging the audience with your voice", type: "A" },
      { text: "Reading from a well-prepared script or notes", type: "R" },
      { text: "Demonstrating something live or using physical props", type: "K" },
    ],
  },
  {
    question: "You're explaining something to a friend. You naturally:",
    emoji: "💬",
    options: [
      { text: "Draw a diagram or show them a picture", type: "V" },
      { text: "Talk them through it with detailed verbal explanation", type: "A" },
      { text: "Write it down or text them a detailed message", type: "R" },
      { text: "Show them physically — 'here, let me demonstrate'", type: "K" },
    ],
  },
  // New learning-focused questions
  {
    question: "When learning a new language, you pick it up fastest by:",
    emoji: "🌍",
    options: [
      { text: "Watching shows or movies with subtitles in that language", type: "V" },
      { text: "Listening to native speakers and repeating phrases aloud", type: "A" },
      { text: "Studying grammar rules, vocabulary lists, and textbooks", type: "R" },
      { text: "Traveling and immersing yourself in conversations", type: "K" },
    ],
  },
  {
    question: "You have to memorize a poem for class. You would:",
    emoji: "📜",
    options: [
      { text: "Visualize scenes from each stanza in your head", type: "V" },
      { text: "Read it aloud repeatedly until it sticks", type: "A" },
      { text: "Write it out by hand multiple times", type: "R" },
      { text: "Act it out with gestures or walk around while reciting", type: "K" },
    ],
  },
  {
    question: "When learning a math concept, it clicks when you:",
    emoji: "🔢",
    options: [
      { text: "See a graph, diagram, or visual representation of it", type: "V" },
      { text: "Hear the teacher explain the logic behind the formula", type: "A" },
      { text: "Read the textbook explanation and work through examples", type: "R" },
      { text: "Solve practice problems hands-on until you get it", type: "K" },
    ],
  },
  {
    question: "Your class is learning about the solar system. You'd enjoy:",
    emoji: "🪐",
    options: [
      { text: "Watching an animated video showing planet orbits and sizes", type: "V" },
      { text: "Listening to a narrated tour of each planet's features", type: "A" },
      { text: "Reading an article comparing facts about each planet", type: "R" },
      { text: "Building a scale model of the solar system", type: "K" },
    ],
  },
  {
    question: "When reviewing notes before a quiz, you prefer to:",
    emoji: "✏️",
    options: [
      { text: "Look at highlighted and color-coded summaries", type: "V" },
      { text: "Discuss key points with a classmate or study buddy", type: "A" },
      { text: "Re-read your written notes and rewrite unclear parts", type: "R" },
      { text: "Quiz yourself with flashcards or practice tests", type: "K" },
    ],
  },
  {
    question: "You're learning to play a musical instrument. You'd start by:",
    emoji: "🎵",
    options: [
      { text: "Watching tutorial videos showing finger placements", type: "V" },
      { text: "Listening to songs and trying to play by ear", type: "A" },
      { text: "Reading sheet music or a beginner's instruction book", type: "R" },
      { text: "Picking up the instrument and experimenting with sounds", type: "K" },
    ],
  },
  {
    question: "In science class, you understand experiments best when you:",
    emoji: "🔬",
    options: [
      { text: "Watch the teacher demonstrate with visual aids", type: "V" },
      { text: "Listen to the hypothesis and reasoning explained aloud", type: "A" },
      { text: "Read the lab procedure and expected outcomes first", type: "R" },
      { text: "Perform the experiment yourself in the lab", type: "K" },
    ],
  },
  {
    question: "When preparing for an oral report, you:",
    emoji: "🗣️",
    options: [
      { text: "Create visual cue cards with images and keywords", type: "V" },
      { text: "Practice speaking out loud in front of a mirror or friend", type: "A" },
      { text: "Write a detailed script and memorize key phrases", type: "R" },
      { text: "Rehearse with gestures, movement, and physical expression", type: "K" },
    ],
  },
  {
    question: "You forgot something your teacher said. To recall it, you:",
    emoji: "🤔",
    options: [
      { text: "Try to picture where you were sitting and what was on the board", type: "V" },
      { text: "Try to hear the teacher's voice and exact words in your mind", type: "A" },
      { text: "Check your written notes or textbook for the information", type: "R" },
      { text: "Recreate the situation — sitting the same way, retracing steps", type: "K" },
    ],
  },
  {
    question: "When choosing a learning app or website, you prefer one that:",
    emoji: "💻",
    options: [
      { text: "Has lots of videos, animations, and visual content", type: "V" },
      { text: "Includes audio lessons, narration, and voice explanations", type: "A" },
      { text: "Provides articles, quizzes, and written study materials", type: "R" },
      { text: "Offers interactive simulations and drag-and-drop activities", type: "K" },
    ],
  },
];

const styleInfo: Record<VarkType, {
  label: string;
  fullLabel: string;
  icon: React.ReactNode;
  gradient: string;
  glow: string;
  glowColor: string;
  emoji: string;
  color: string;
  description: string;
  tips: string[];
}> = {
  V: {
    label: "Visual",
    fullLabel: "Visual Learner",
    icon: <Eye className="w-6 h-6" />,
    gradient: "gradient-visual",
    glow: "glow-visual",
    glowColor: "262, 83%, 58%",
    emoji: "👁️",
    color: "hsl(var(--visual))",
    description: "You think in pictures and learn best through visual representations. Your mind naturally creates mental images to process and remember information.",
    tips: [
      "Use color-coded highlights and markers",
      "Create mind maps and concept diagrams",
      "Watch video tutorials and demonstrations",
      "Use charts, graphs, and infographics",
      "Sit at the front of class to see the board clearly",
      "Replace words with symbols and initials",
    ],
  },
  A: {
    label: "Auditory",
    fullLabel: "Auditory Learner",
    icon: <Headphones className="w-6 h-6" />,
    gradient: "gradient-auditory",
    glow: "glow-auditory",
    glowColor: "199, 89%, 48%",
    emoji: "🎧",
    color: "hsl(var(--auditory))",
    description: "You absorb information best through listening and speaking. Sounds, rhythms, and verbal explanations are your strongest learning channels.",
    tips: [
      "Record lectures and listen again later",
      "Join study groups and discuss topics aloud",
      "Use mnemonic devices and rhymes",
      "Explain concepts to others verbally",
      "Listen to educational podcasts",
      "Read important material out loud to yourself",
    ],
  },
  R: {
    label: "Read/Write",
    fullLabel: "Read/Write Learner",
    icon: <BookOpen className="w-6 h-6" />,
    gradient: "gradient-reading",
    glow: "glow-reading",
    glowColor: "140, 60%, 42%",
    emoji: "📚",
    color: "hsl(var(--reading))",
    description: "You excel with text-based information. Reading, writing, and organizing words are your superpowers when it comes to learning and retention.",
    tips: [
      "Rewrite notes in your own words",
      "Create detailed outlines and lists",
      "Read textbook chapters thoroughly",
      "Write practice essays and summaries",
      "Turn diagrams into written explanations",
      "Use glossaries and definition lists",
    ],
  },
  K: {
    label: "Kinesthetic",
    fullLabel: "Kinesthetic Learner",
    icon: <Hand className="w-6 h-6" />,
    gradient: "gradient-kinesthetic",
    glow: "glow-kinesthetic",
    glowColor: "25, 95%, 53%",
    emoji: "✋",
    color: "hsl(var(--kinesthetic))",
    description: "You learn by doing! Hands-on experience, movement, and real-world application are how you best understand and remember concepts.",
    tips: [
      "Use physical flashcards you can touch and sort",
      "Take breaks to move around while studying",
      "Build models or create real-world examples",
      "Practice with hands-on experiments",
      "Use role-play to understand concepts",
      "Study in short bursts with movement between",
    ],
  },
};

// Confetti particle component
const Confetti = () => {
  const colors = ["hsl(262, 83%, 58%)", "hsl(199, 89%, 48%)", "hsl(140, 60%, 42%)", "hsl(25, 95%, 53%)", "hsl(340, 82%, 52%)"];
  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {Array.from({ length: 50 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full"
          style={{
            backgroundColor: colors[i % colors.length],
            left: `${Math.random() * 100}%`,
            top: -10,
          }}
          initial={{ y: -10, opacity: 1, rotate: 0, scale: Math.random() * 0.5 + 0.5 }}
          animate={{
            y: window.innerHeight + 50,
            opacity: [1, 1, 0],
            rotate: Math.random() * 720 - 360,
            x: Math.random() * 200 - 100,
          }}
          transition={{
            duration: Math.random() * 2 + 2,
            delay: Math.random() * 0.8,
            ease: "easeOut",
          }}
        />
      ))}
    </div>
  );
};

const VarkQuiz = () => {
  const [started, setStarted] = useState(false);
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<(VarkType | null)[]>(new Array(questions.length).fill(null));
  const [showResults, setShowResults] = useState(false);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [direction, setDirection] = useState(1); // 1 = forward, -1 = backward
  const [showConfetti, setShowConfetti] = useState(false);

  const progress = ((currentQ + (answers[currentQ] !== null ? 1 : 0)) / questions.length) * 100;

  const scores = useMemo(() => {
    const s: Record<VarkType, number> = { V: 0, A: 0, R: 0, K: 0 };
    answers.forEach((a) => { if (a) s[a]++; });
    return s;
  }, [answers]);

  const maxScore = Math.max(...Object.values(scores));
  const dominantStyles = (Object.keys(scores) as VarkType[]).filter((k) => scores[k] === maxScore && maxScore > 0);
  const totalAnswered = answers.filter(Boolean).length;

  const handleSelect = useCallback((optionIndex: number, type: VarkType) => {
    setSelectedOption(optionIndex);
    const newAnswers = [...answers];
    newAnswers[currentQ] = type;
    setAnswers(newAnswers);

    setTimeout(() => {
      if (currentQ < questions.length - 1) {
        setDirection(1);
        setCurrentQ(currentQ + 1);
        setSelectedOption(null);
      } else {
        setShowConfetti(true);
        setTimeout(() => setShowConfetti(false), 3500);
        setShowResults(true);
      }
    }, 500);
  }, [answers, currentQ]);

  const goBack = useCallback(() => {
    if (currentQ > 0) {
      setDirection(-1);
      setCurrentQ(currentQ - 1);
      setSelectedOption(null);
    }
  }, [currentQ]);

  const goForward = useCallback(() => {
    if (answers[currentQ] !== null && currentQ < questions.length - 1) {
      setDirection(1);
      setCurrentQ(currentQ + 1);
      setSelectedOption(null);
    }
  }, [answers, currentQ]);

  const restart = () => {
    setStarted(false);
    setCurrentQ(0);
    setAnswers(new Array(questions.length).fill(null));
    setShowResults(false);
    setSelectedOption(null);
    setDirection(1);
  };

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9,
      rotateY: dir > 0 ? 15 : -15,
      filter: "blur(12px)",
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      rotateY: 0,
      filter: "blur(0px)",
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -300 : 300,
      opacity: 0,
      scale: 0.9,
      rotateY: dir > 0 ? -15 : 15,
      filter: "blur(12px)",
    }),
  };

  // Start screen
  if (!started) {
    return (
      <motion.div
        className="text-center max-w-2xl mx-auto"
        initial={{ opacity: 0, scale: 0.85, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.7, type: "spring", stiffness: 120 }}
      >
        <GlowingCard className="glass-strong rounded-3xl p-10 md:p-14 border border-border/50 relative overflow-hidden" glowColor="262, 83%, 58%">
          {/* Animated background shimmer */}
          <motion.div
            className="absolute inset-0 opacity-10"
            style={{ background: "linear-gradient(135deg, hsl(262, 83%, 58%), hsl(199, 89%, 48%), hsl(340, 82%, 52%))" }}
            animate={{ opacity: [0.05, 0.12, 0.05] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <motion.div
              className="text-7xl mb-6 inline-block"
              animate={{ 
                rotate: [0, 10, -10, 5, -5, 0], 
                scale: [1, 1.15, 1, 1.1, 1],
                y: [0, -10, 0],
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              🧠
            </motion.div>
            <h3 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Discover Your <span className="text-gradient-hero">Learning Style</span>
            </h3>
            <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
              Answer {questions.length} fun questions to find out if you're a Visual, Auditory, Read/Write, or Kinesthetic learner!
            </p>
            
            <div className="flex justify-center gap-4 mb-8">
              {(["V", "A", "R", "K"] as VarkType[]).map((type, i) => (
                <motion.div
                  key={type}
                  className={`relative w-14 h-14 rounded-2xl ${styleInfo[type].gradient} flex items-center justify-center text-primary-foreground shadow-lg ${styleInfo[type].glow}`}
                  initial={{ opacity: 0, scale: 0, rotate: -180 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0, y: [0, -8, 0] }}
                  transition={{ 
                    opacity: { delay: 0.4 + i * 0.15 },
                    scale: { delay: 0.4 + i * 0.15, type: "spring", stiffness: 200 },
                    rotate: { delay: 0.4 + i * 0.15, type: "spring" },
                    y: { duration: 2 + i * 0.3, repeat: Infinity, ease: "easeInOut", delay: i * 0.25 },
                  }}
                  whileHover={{ scale: 1.25, rotate: 15 }}
                >
                  {styleInfo[type].icon}
                  <motion.div
                    className="absolute -bottom-1 -right-1 text-sm"
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
                  >
                    {styleInfo[type].emoji}
                  </motion.div>
                </motion.div>
              ))}
            </div>
            
            <motion.div
              className="flex items-center justify-center gap-6 text-xs text-muted-foreground mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <span className="flex items-center gap-1.5">⏱️ ~5 minutes</span>
              <span className="w-1 h-1 rounded-full bg-muted-foreground/50" />
              <span className="flex items-center gap-1.5">✨ {questions.length} questions</span>
              <span className="w-1 h-1 rounded-full bg-muted-foreground/50" />
              <span className="flex items-center gap-1.5">💡 No wrong answers</span>
            </motion.div>
            
            <motion.button
              onClick={() => setStarted(true)}
              className="gradient-hero text-primary-foreground px-10 py-4 rounded-2xl font-display font-semibold text-lg inline-flex items-center gap-3 glow-primary shadow-2xl relative overflow-hidden"
              whileHover={{ scale: 1.06, y: -2 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
            >
              <motion.div
                className="absolute inset-0 bg-white/10"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.5 }}
              />
              <span className="relative">Start Quiz</span>
              <Sparkles className="w-5 h-5 relative" />
            </motion.button>
          </motion.div>
        </GlowingCard>
      </motion.div>
    );
  }

  // Results screen
  if (showResults) {
    const sortedStyles = (Object.keys(scores) as VarkType[]).sort((a, b) => scores[b] - scores[a]);
    const primary = sortedStyles[0];
    const info = styleInfo[primary];

    return (
      <>
        {showConfetti && <Confetti />}
        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, type: "spring" }}
        >
          {/* Celebration header */}
          <motion.div
            className="text-center mb-10"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
          >
            <motion.div className="flex justify-center gap-3 mb-4">
              {["🎉", "🏆", "⭐"].map((e, i) => (
                <motion.span
                  key={e}
                  className="text-5xl"
                  initial={{ opacity: 0, y: -50, scale: 0 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ delay: 0.3 + i * 0.15, type: "spring", stiffness: 200 }}
                >
                  {e}
                </motion.span>
              ))}
            </motion.div>
            <motion.h3
              className="text-3xl md:text-5xl font-display font-bold mb-3"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, type: "spring" }}
            >
              You're a <span className="text-gradient-hero">{info.fullLabel}!</span>
            </motion.h3>
            <motion.p
              className="text-muted-foreground max-w-lg mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              {info.description}
            </motion.p>
            {dominantStyles.length > 1 && (
              <motion.div
                className="inline-flex items-center gap-2 mt-3 px-4 py-2 rounded-full glass text-sm font-medium text-primary"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9 }}
              >
                <Flame className="w-4 h-4" />
                Multimodal! Equal in {dominantStyles.map(s => styleInfo[s].label).join(" & ")}
              </motion.div>
            )}
          </motion.div>

          {/* Dominant style hero card */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.5, type: "spring" }}
            className="mb-8"
          >
            <GlowingCard className="glass-strong rounded-3xl p-8 border border-border/50 relative overflow-hidden" glowColor={info.glowColor}>
              <motion.div
                className={`absolute top-0 right-0 w-40 h-40 rounded-full ${info.gradient} opacity-10 blur-3xl`}
                animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.2, 0.1] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              <div className="flex items-center gap-4 mb-6">
                <motion.div
                  className={`w-16 h-16 rounded-2xl ${info.gradient} flex items-center justify-center text-primary-foreground shadow-xl ${info.glow}`}
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  {info.icon}
                </motion.div>
                <div>
                  <div className="flex items-center gap-2">
                    <Trophy className="w-5 h-5 text-primary" />
                    <span className="text-sm font-medium text-primary">Dominant Style</span>
                  </div>
                  <h4 className="font-display font-bold text-2xl">{info.fullLabel} {info.emoji}</h4>
                </div>
                <div className="ml-auto text-right">
                  <div className="text-3xl font-display font-bold text-gradient-hero">{scores[primary]}/{totalAnswered}</div>
                  <div className="text-xs text-muted-foreground">answers</div>
                </div>
              </div>
            </GlowingCard>
          </motion.div>

          {/* Score Bars */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <GlowingCard className="glass-strong rounded-3xl p-8 border border-border/50 mb-8" glowColor={info.glowColor}>
              <h4 className="font-display font-bold text-lg mb-6 flex items-center gap-2">
                <Brain className="w-5 h-5 text-primary" />
                Your Complete VARK Profile
              </h4>
              <div className="space-y-6">
                {sortedStyles.map((type, i) => {
                  const s = styleInfo[type];
                  const pct = totalAnswered > 0 ? (scores[type] / totalAnswered) * 100 : 0;
                  const isTop = type === primary;
                  return (
                    <motion.div
                      key={type}
                      initial={{ opacity: 0, x: -40 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.9 + i * 0.12, type: "spring", stiffness: 150 }}
                    >
                      <div className="flex items-center justify-between mb-2.5">
                        <div className="flex items-center gap-3">
                          <motion.div
                            className={`w-11 h-11 rounded-xl ${s.gradient} flex items-center justify-center text-primary-foreground shadow-md ${s.glow}`}
                            animate={isTop ? { scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] } : {}}
                            transition={{ duration: 2, repeat: Infinity }}
                          >
                            {s.icon}
                          </motion.div>
                          <div>
                            <span className="font-display font-semibold flex items-center gap-2">
                              {s.label} {s.emoji}
                              {isTop && (
                                <motion.span
                                  initial={{ scale: 0 }}
                                  animate={{ scale: 1 }}
                                  transition={{ delay: 1.2, type: "spring" }}
                                >
                                  <Star className="w-4 h-4 text-primary fill-primary" />
                                </motion.span>
                              )}
                            </span>
                            <span className="text-xs text-muted-foreground">{scores[type]} out of {totalAnswered} answers</span>
                          </div>
                        </div>
                        <motion.span
                          className="font-display font-bold text-xl"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 1.2 + i * 0.1 }}
                        >
                          {Math.round(pct)}%
                        </motion.span>
                      </div>
                      <div className="h-5 rounded-full bg-muted overflow-hidden relative">
                        <motion.div
                          className={`h-full rounded-full ${s.gradient} relative overflow-hidden`}
                          initial={{ width: 0 }}
                          animate={{ width: `${Math.max(pct, 2)}%` }}
                          transition={{ duration: 1.2, delay: 1 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                        >
                          {/* Shimmer on bar */}
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                            animate={{ x: ["-100%", "200%"] }}
                            transition={{ duration: 2, repeat: Infinity, delay: 1.5 + i * 0.2 }}
                          />
                        </motion.div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </GlowingCard>
          </motion.div>

          {/* Tips & Donut Chart */}
          <div className="grid sm:grid-cols-2 gap-5 mb-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.3, type: "spring" }}
            >
              <GlowingCard className="glass-strong rounded-3xl p-7 border border-border/50 h-full" glowColor={info.glowColor}>
                <h4 className="font-display font-bold text-lg mb-5 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-primary animate-pulse-glow" />
                  Study Tips for You
                </h4>
                <ul className="space-y-3">
                  {info.tips.map((tip, i) => (
                    <motion.li
                      key={tip}
                      className="flex items-start gap-3 text-sm text-muted-foreground glass rounded-xl px-3 py-2.5"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.5 + i * 0.08, type: "spring" }}
                    >
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                      {tip}
                    </motion.li>
                  ))}
                </ul>
              </GlowingCard>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.4, type: "spring" }}
            >
              <GlowingCard className="glass-strong rounded-3xl p-7 border border-border/50 h-full flex flex-col items-center justify-center" glowColor={info.glowColor}>
                <h4 className="font-display font-bold text-lg mb-6">Your Style Blend</h4>
                <div className="relative w-52 h-52">
                  <svg viewBox="0 0 200 200" className="w-full h-full -rotate-90">
                    {sortedStyles.reduce((acc, type, i) => {
                      const pct = totalAnswered > 0 ? (scores[type] / totalAnswered) * 100 : 0;
                      const circumference = 2 * Math.PI * 70;
                      const offset = acc.offset;
                      const colors: Record<VarkType, string> = {
                        V: "hsl(262, 83%, 58%)",
                        A: "hsl(199, 89%, 48%)",
                        R: "hsl(140, 60%, 42%)",
                        K: "hsl(25, 95%, 53%)",
                      };
                      if (pct > 0) {
                        acc.elements.push(
                          <motion.circle
                            key={type}
                            cx="100"
                            cy="100"
                            r="70"
                            fill="none"
                            stroke={colors[type]}
                            strokeWidth="28"
                            strokeDasharray={`${(pct / 100) * circumference} ${circumference}`}
                            strokeDashoffset={-offset}
                            initial={{ strokeDasharray: `0 ${circumference}` }}
                            animate={{ strokeDasharray: `${(pct / 100) * circumference} ${circumference}` }}
                            transition={{ duration: 1.5, delay: 1.5 + i * 0.2, ease: [0.22, 1, 0.36, 1] }}
                          />
                        );
                      }
                      acc.offset += (pct / 100) * circumference;
                      return acc;
                    }, { elements: [] as React.ReactNode[], offset: 0 }).elements}
                  </svg>
                  <motion.div
                    className="absolute inset-0 flex flex-col items-center justify-center"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 2, type: "spring" }}
                  >
                    <span className="text-4xl">{info.emoji}</span>
                    <span className="text-xs text-muted-foreground font-medium mt-1">{info.label}</span>
                  </motion.div>
                </div>
                <div className="grid grid-cols-2 gap-2 mt-5 w-full">
                  {sortedStyles.map((type, i) => (
                    <motion.div
                      key={type}
                      className="flex items-center gap-2 text-xs text-muted-foreground"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 2 + i * 0.1 }}
                    >
                      <div className={`w-3 h-3 rounded-full ${styleInfo[type].gradient} shrink-0`} />
                      {styleInfo[type].label} ({Math.round(totalAnswered > 0 ? (scores[type] / totalAnswered) * 100 : 0)}%)
                    </motion.div>
                  ))}
                </div>
              </GlowingCard>
            </motion.div>
          </div>

          {/* Restart */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2 }}
          >
            <motion.button
              onClick={restart}
              className="glass-strong px-8 py-3.5 rounded-2xl font-display font-semibold inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors border border-border/50 relative overflow-hidden"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <RotateCcw className="w-4 h-4" />
              Retake Quiz
            </motion.button>
          </motion.div>
        </motion.div>
      </>
    );
  }

  // Question screen
  const q = questions[currentQ];
  const answeredCount = answers.filter(Boolean).length;

  return (
    <motion.div
      className="max-w-2xl mx-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {/* Progress area */}
      <motion.div
        className="mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <div className="flex items-center justify-between text-sm text-muted-foreground mb-3">
          <span className="font-display font-medium flex items-center gap-2">
            <motion.span
              className="text-lg"
              key={q.emoji}
              initial={{ scale: 0, rotate: -90 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {q.emoji}
            </motion.span>
            Question {currentQ + 1} of {questions.length}
          </span>
          <span className="font-display font-bold">{Math.round(progress)}%</span>
        </div>
        <div className="h-3 rounded-full bg-muted overflow-hidden relative">
          <motion.div
            className="h-full rounded-full gradient-hero relative overflow-hidden"
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent"
              animate={{ x: ["-100%", "200%"] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </motion.div>
        </div>
        {/* Question dots */}
        <div className="flex gap-1.5 mt-3 justify-center flex-wrap">
          {questions.map((_, i) => (
            <motion.button
              key={i}
              onClick={() => {
                setDirection(i > currentQ ? 1 : -1);
                setCurrentQ(i);
                setSelectedOption(null);
              }}
              className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${
                i === currentQ
                  ? "gradient-hero scale-125 glow-primary"
                  : answers[i] !== null
                  ? "bg-primary/60"
                  : "bg-muted-foreground/20"
              }`}
              whileHover={{ scale: 1.5 }}
              layout
            />
          ))}
        </div>
      </motion.div>

      {/* Question Card */}
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={currentQ}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          style={{ perspective: 1000 }}
        >
          <GlowingCard className="glass-strong rounded-3xl p-7 md:p-8 border border-border/50 mb-6 relative overflow-hidden" glowColor="262, 83%, 58%">
            <motion.div
              className="absolute -top-10 -right-10 text-8xl opacity-10 select-none"
              initial={{ rotate: -20, scale: 0.5 }}
              animate={{ rotate: 0, scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
            >
              {q.emoji}
            </motion.div>
            <motion.p
              className="text-lg md:text-xl font-display font-bold leading-relaxed relative"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
            >
              {q.question}
            </motion.p>
          </GlowingCard>

          {/* Options */}
          <div className="space-y-3">
            {q.options.map((opt, i) => {
              const isSelected = selectedOption === i || answers[currentQ] === opt.type;
              const s = styleInfo[opt.type];
              return (
                <motion.button
                  key={`${currentQ}-${i}`}
                  onClick={() => handleSelect(i, opt.type)}
                  className={`w-full text-left p-4 md:p-5 rounded-2xl border transition-all font-medium text-sm flex items-center gap-4 group relative overflow-hidden ${
                    isSelected
                      ? `${s.gradient} text-primary-foreground ${s.glow} shadow-xl border-transparent`
                      : "glass-strong border-border/50 hover:border-primary/30 text-foreground"
                  }`}
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ delay: 0.2 + i * 0.07, type: "spring", stiffness: 200, damping: 20 }}
                  whileHover={!isSelected ? { scale: 1.02, x: 8, transition: { duration: 0.2 } } : {}}
                  whileTap={{ scale: 0.97 }}
                >
                  {/* Hover glow effect */}
                  {!isSelected && (
                    <motion.div
                      className={`absolute inset-0 ${s.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl`}
                    />
                  )}
                  <motion.span
                    className={`w-9 h-9 rounded-xl flex items-center justify-center text-sm font-display font-bold shrink-0 transition-all relative ${
                      isSelected ? "bg-white/20 text-primary-foreground" : "glass text-muted-foreground group-hover:text-foreground"
                    }`}
                    animate={isSelected ? { rotate: [0, 360] } : {}}
                    transition={{ duration: 0.5 }}
                  >
                    {String.fromCharCode(65 + i)}
                  </motion.span>
                  <span className="relative flex-1">{opt.text}</span>
                  {isSelected && (
                    <motion.span
                      className="ml-auto relative"
                      initial={{ scale: 0, rotate: -90 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ type: "spring", stiffness: 300, damping: 15 }}
                    >
                      <CheckCircle2 className="w-5 h-5" />
                    </motion.span>
                  )}
                </motion.button>
              );
            })}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation */}
      <motion.div
        className="flex justify-between mt-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <motion.button
          onClick={goBack}
          className={`px-5 py-2.5 rounded-xl font-display font-medium text-sm inline-flex items-center gap-2 transition-all ${
            currentQ === 0 ? "opacity-30 cursor-not-allowed" : "glass-strong border border-border/50 hover:border-primary/30 text-muted-foreground hover:text-foreground"
          }`}
          disabled={currentQ === 0}
          whileHover={currentQ > 0 ? { scale: 1.05, x: -3 } : {}}
          whileTap={currentQ > 0 ? { scale: 0.95 } : {}}
        >
          <ArrowLeft className="w-4 h-4" /> Back
        </motion.button>

        <AnimatePresence mode="wait">
          {answers[currentQ] !== null && currentQ < questions.length - 1 && (
            <motion.button
              key="next"
              onClick={goForward}
              className="gradient-hero text-primary-foreground px-5 py-2.5 rounded-xl font-display font-medium text-sm inline-flex items-center gap-2 glow-primary shadow-lg relative overflow-hidden"
              initial={{ opacity: 0, scale: 0.8, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.8, x: 20 }}
              whileHover={{ scale: 1.05, x: 3 }}
              whileTap={{ scale: 0.95 }}
            >
              Next <ArrowRight className="w-4 h-4" />
            </motion.button>
          )}

          {answers[currentQ] !== null && currentQ === questions.length - 1 && (
            <motion.button
              key="results"
              onClick={() => {
                setShowConfetti(true);
                setTimeout(() => setShowConfetti(false), 3500);
                setShowResults(true);
              }}
              className="gradient-hero text-primary-foreground px-6 py-2.5 rounded-xl font-display font-medium text-sm inline-flex items-center gap-2 glow-primary shadow-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: [1, 1.08, 1] }}
              transition={{ scale: { duration: 1, repeat: Infinity } }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              See Results <Sparkles className="w-4 h-4" />
            </motion.button>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};

export default VarkQuiz;
