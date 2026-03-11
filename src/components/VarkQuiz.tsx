import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Eye, Headphones, BookOpen, Hand, ArrowRight, ArrowLeft, RotateCcw, Sparkles, CheckCircle2, Brain } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import GlowingCard from "./GlowingCard";

type VarkType = "V" | "A" | "R" | "K";

interface Question {
  question: string;
  options: { text: string; type: VarkType }[];
}

const questions: Question[] = [
  {
    question: "When you're trying to learn how to cook a new dish, you prefer to:",
    options: [
      { text: "Watch a cooking video or tutorial on YouTube", type: "V" },
      { text: "Listen to someone explain the recipe step by step", type: "A" },
      { text: "Read the written recipe and ingredient list carefully", type: "R" },
      { text: "Jump in the kitchen and start experimenting hands-on", type: "K" },
    ],
  },
  {
    question: "You need to remember directions to a new place. You would:",
    options: [
      { text: "Look at a map or use GPS with a visual route", type: "V" },
      { text: "Ask someone to tell you the directions verbally", type: "A" },
      { text: "Write down the step-by-step directions", type: "R" },
      { text: "Drive there once to memorize the route by experience", type: "K" },
    ],
  },
  {
    question: "In a group project, you naturally take the role of:",
    options: [
      { text: "Creating the slides, charts, and visual presentation", type: "V" },
      { text: "Leading group discussions and brainstorming sessions", type: "A" },
      { text: "Writing the report, documentation, and scripts", type: "R" },
      { text: "Building the prototype or doing the physical demo", type: "K" },
    ],
  },
  {
    question: "When studying for a big exam, your go-to method is:",
    options: [
      { text: "Using color-coded notes, diagrams, and mind maps", type: "V" },
      { text: "Recording yourself reading notes and listening back", type: "A" },
      { text: "Re-reading textbooks and rewriting key concepts", type: "R" },
      { text: "Using flashcards, walking while reviewing, or role-playing", type: "K" },
    ],
  },
  {
    question: "You just bought a new gadget. To set it up, you:",
    options: [
      { text: "Look at the diagrams and pictures in the manual", type: "V" },
      { text: "Call customer support or ask someone to walk you through it", type: "A" },
      { text: "Read the instruction manual from start to finish", type: "R" },
      { text: "Start pressing buttons and figure it out by trial and error", type: "K" },
    ],
  },
  {
    question: "Your teacher introduces a new topic. You learn best when they:",
    options: [
      { text: "Show a PowerPoint with images, graphs, and videos", type: "V" },
      { text: "Explain it through a lecture or class discussion", type: "A" },
      { text: "Give you a handout or reading material to study", type: "R" },
      { text: "Let you do a hands-on activity or experiment", type: "K" },
    ],
  },
  {
    question: "When you're bored, you tend to:",
    options: [
      { text: "Scroll through Instagram, Pinterest, or watch videos", type: "V" },
      { text: "Listen to music, podcasts, or call a friend", type: "A" },
      { text: "Read a book, articles, or browse written content", type: "R" },
      { text: "Go outside, exercise, or fidget with something", type: "K" },
    ],
  },
  {
    question: "To understand a historical event, you'd prefer:",
    options: [
      { text: "A documentary with visuals and reenactments", type: "V" },
      { text: "A podcast or audio story about the event", type: "A" },
      { text: "A detailed article or chapter from a history book", type: "R" },
      { text: "Visiting a museum or doing a role-play activity", type: "K" },
    ],
  },
  {
    question: "When giving a presentation, you feel most confident:",
    options: [
      { text: "Using slides full of images, infographics, and visuals", type: "V" },
      { text: "Speaking freely and engaging the audience with your voice", type: "A" },
      { text: "Reading from a well-prepared script or notes", type: "R" },
      { text: "Demonstrating something live or using physical props", type: "K" },
    ],
  },
  {
    question: "You're explaining something to a friend. You naturally:",
    options: [
      { text: "Draw a diagram or show them a picture", type: "V" },
      { text: "Talk them through it with detailed verbal explanation", type: "A" },
      { text: "Write it down or text them a detailed message", type: "R" },
      { text: "Show them physically — 'here, let me demonstrate'", type: "K" },
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
    tips: [
      "Use color-coded highlights and markers",
      "Create mind maps and concept diagrams",
      "Watch video tutorials and demonstrations",
      "Use charts, graphs, and infographics",
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
    tips: [
      "Record lectures and listen again later",
      "Join study groups and discuss topics aloud",
      "Use mnemonic devices and rhymes",
      "Explain concepts to others verbally",
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
    tips: [
      "Rewrite notes in your own words",
      "Create detailed outlines and lists",
      "Read textbook chapters thoroughly",
      "Write practice essays and summaries",
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
    tips: [
      "Use physical flashcards you can touch and sort",
      "Take breaks to move around while studying",
      "Build models or create real-world examples",
      "Practice with hands-on experiments",
    ],
  },
};

const VarkQuiz = () => {
  const [started, setStarted] = useState(false);
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<(VarkType | null)[]>(new Array(questions.length).fill(null));
  const [showResults, setShowResults] = useState(false);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const progress = ((currentQ + (answers[currentQ] !== null ? 1 : 0)) / questions.length) * 100;

  const scores = useMemo(() => {
    const s: Record<VarkType, number> = { V: 0, A: 0, R: 0, K: 0 };
    answers.forEach((a) => { if (a) s[a]++; });
    return s;
  }, [answers]);

  const maxScore = Math.max(...Object.values(scores));
  const dominantStyles = (Object.keys(scores) as VarkType[]).filter((k) => scores[k] === maxScore && maxScore > 0);
  const totalAnswered = answers.filter(Boolean).length;

  const handleSelect = (optionIndex: number, type: VarkType) => {
    setSelectedOption(optionIndex);
    const newAnswers = [...answers];
    newAnswers[currentQ] = type;
    setAnswers(newAnswers);

    // Auto-advance after brief delay
    setTimeout(() => {
      if (currentQ < questions.length - 1) {
        setCurrentQ(currentQ + 1);
        setSelectedOption(null);
      } else {
        setShowResults(true);
      }
    }, 600);
  };

  const restart = () => {
    setStarted(false);
    setCurrentQ(0);
    setAnswers(new Array(questions.length).fill(null));
    setShowResults(false);
    setSelectedOption(null);
  };

  // Start screen
  if (!started) {
    return (
      <motion.div
        className="text-center max-w-2xl mx-auto"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <GlowingCard className="glass-strong rounded-3xl p-10 md:p-14 border border-border/50" glowColor="262, 83%, 58%">
          <motion.div
            className="text-6xl mb-6"
            animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.1, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            🧠
          </motion.div>
          <h3 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Discover Your <span className="text-gradient-hero">Learning Style</span>
          </h3>
          <p className="text-muted-foreground mb-4 text-lg leading-relaxed">
            Answer {questions.length} fun questions to find out if you're a Visual, Auditory, Read/Write, or Kinesthetic learner!
          </p>
          <div className="flex justify-center gap-3 mb-8">
            {(["V", "A", "R", "K"] as VarkType[]).map((type, i) => (
              <motion.div
                key={type}
                className={`w-12 h-12 rounded-xl ${styleInfo[type].gradient} flex items-center justify-center text-primary-foreground shadow-lg ${styleInfo[type].glow}`}
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
              >
                {styleInfo[type].icon}
              </motion.div>
            ))}
          </div>
          <p className="text-xs text-muted-foreground mb-8">⏱️ Takes about 2-3 minutes • No right or wrong answers</p>
          <motion.button
            onClick={() => setStarted(true)}
            className="gradient-hero text-primary-foreground px-10 py-4 rounded-2xl font-display font-semibold text-lg inline-flex items-center gap-3 glow-primary shadow-2xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Quiz
            <Sparkles className="w-5 h-5" />
          </motion.button>
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
      <motion.div
        className="max-w-3xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Celebration header */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <motion.div
            className="text-7xl mb-4"
            animate={{ scale: [1, 1.3, 1], rotate: [0, 15, -15, 0] }}
            transition={{ duration: 1.5, repeat: 2 }}
          >
            🎉
          </motion.div>
          <h3 className="text-3xl md:text-4xl font-display font-bold mb-2">
            You're a <span className="text-gradient-hero">{info.fullLabel}!</span>
          </h3>
          {dominantStyles.length > 1 && (
            <p className="text-muted-foreground text-sm">
              You're multimodal! You scored equally in {dominantStyles.map(s => styleInfo[s].label).join(" & ")}.
            </p>
          )}
        </motion.div>

        {/* Score Bars */}
        <GlowingCard className="glass-strong rounded-3xl p-8 border border-border/50 mb-8" glowColor={info.glowColor}>
          <h4 className="font-display font-bold text-lg mb-6 flex items-center gap-2">
            <Brain className="w-5 h-5 text-primary" />
            Your VARK Profile
          </h4>
          <div className="space-y-5">
            {sortedStyles.map((type, i) => {
              const s = styleInfo[type];
              const pct = totalAnswered > 0 ? (scores[type] / totalAnswered) * 100 : 0;
              return (
                <motion.div
                  key={type}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + i * 0.15 }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <motion.div
                        className={`w-10 h-10 rounded-xl ${s.gradient} flex items-center justify-center text-primary-foreground shadow-md ${s.glow}`}
                        animate={type === primary ? { scale: [1, 1.15, 1] } : {}}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        {s.icon}
                      </motion.div>
                      <span className="font-display font-semibold">{s.label}</span>
                      <span className="text-lg">{s.emoji}</span>
                    </div>
                    <span className="font-display font-bold text-lg">
                      {scores[type]}/{totalAnswered}
                      <span className="text-muted-foreground text-sm ml-1">({Math.round(pct)}%)</span>
                    </span>
                  </div>
                  <div className="h-4 rounded-full bg-muted overflow-hidden">
                    <motion.div
                      className={`h-full rounded-full ${s.gradient} ${s.glow}`}
                      initial={{ width: 0 }}
                      animate={{ width: `${pct}%` }}
                      transition={{ duration: 1, delay: 0.5 + i * 0.15, ease: "easeOut" }}
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </GlowingCard>

        {/* Radar-like visual */}
        <div className="grid sm:grid-cols-2 gap-5 mb-8">
          {/* Tips Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <GlowingCard className="glass-strong rounded-3xl p-7 border border-border/50 h-full" glowColor={info.glowColor}>
              <h4 className="font-display font-bold text-lg mb-4 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-primary animate-pulse-glow" />
                Study Tips for You
              </h4>
              <ul className="space-y-3">
                {info.tips.map((tip, i) => (
                  <motion.li
                    key={tip}
                    className="flex items-start gap-3 text-sm text-muted-foreground"
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1 + i * 0.1 }}
                  >
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    {tip}
                  </motion.li>
                ))}
              </ul>
            </GlowingCard>
          </motion.div>

          {/* Style breakdown wheel */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            <GlowingCard className="glass-strong rounded-3xl p-7 border border-border/50 h-full flex flex-col items-center justify-center" glowColor={info.glowColor}>
              <h4 className="font-display font-bold text-lg mb-6">Your Style Blend</h4>
              <div className="relative w-48 h-48">
                {/* Circular segments */}
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
                        strokeLinecap="round"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.5 + i * 0.2 }}
                      />
                    );
                    acc.offset += (pct / 100) * circumference;
                    return acc;
                  }, { elements: [] as React.ReactNode[], offset: 0 }).elements}
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-3xl">{info.emoji}</span>
                  <span className="text-xs text-muted-foreground font-medium mt-1">{info.label}</span>
                </div>
              </div>
              {/* Legend */}
              <div className="grid grid-cols-2 gap-2 mt-5 w-full">
                {sortedStyles.map((type) => (
                  <div key={type} className="flex items-center gap-2 text-xs text-muted-foreground">
                    <div className={`w-3 h-3 rounded-full ${styleInfo[type].gradient} shrink-0`} />
                    {styleInfo[type].label}
                  </div>
                ))}
              </div>
            </GlowingCard>
          </motion.div>
        </div>

        {/* Restart */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <motion.button
            onClick={restart}
            className="glass-strong px-8 py-3 rounded-2xl font-display font-semibold inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors border border-border/50"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <RotateCcw className="w-4 h-4" />
            Retake Quiz
          </motion.button>
        </motion.div>
      </motion.div>
    );
  }

  // Question screen
  const q = questions[currentQ];

  return (
    <motion.div
      className="max-w-2xl mx-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {/* Progress */}
      <div className="mb-8">
        <div className="flex justify-between text-sm text-muted-foreground mb-3">
          <span className="font-display font-medium">Question {currentQ + 1} of {questions.length}</span>
          <span>{Math.round(progress)}%</span>
        </div>
        <div className="h-3 rounded-full bg-muted overflow-hidden">
          <motion.div
            className="h-full rounded-full gradient-hero glow-primary"
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.4 }}
          />
        </div>
      </div>

      {/* Question */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentQ}
          initial={{ opacity: 0, x: 50, filter: "blur(8px)" }}
          animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, x: -50, filter: "blur(8px)" }}
          transition={{ duration: 0.4 }}
        >
          <GlowingCard className="glass-strong rounded-3xl p-8 border border-border/50 mb-6" glowColor="262, 83%, 58%">
            <motion.p
              className="text-xl md:text-2xl font-display font-bold leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
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
                  key={i}
                  onClick={() => handleSelect(i, opt.type)}
                  className={`w-full text-left p-5 rounded-2xl border transition-all font-medium text-sm flex items-center gap-4 group ${
                    isSelected
                      ? `${s.gradient} text-primary-foreground ${s.glow} shadow-xl border-transparent`
                      : "glass-strong border-border/50 hover:border-primary/30 text-foreground"
                  }`}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 + i * 0.08 }}
                  whileHover={!isSelected ? { scale: 1.02, x: 5 } : {}}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className={`w-9 h-9 rounded-xl flex items-center justify-center text-sm font-display font-bold shrink-0 transition-all ${
                    isSelected ? "bg-white/20 text-primary-foreground" : "glass text-muted-foreground group-hover:text-foreground"
                  }`}>
                    {String.fromCharCode(65 + i)}
                  </span>
                  {opt.text}
                  {isSelected && (
                    <motion.span
                      className="ml-auto"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 300 }}
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
      <div className="flex justify-between mt-8">
        <motion.button
          onClick={() => { setCurrentQ(Math.max(0, currentQ - 1)); setSelectedOption(null); }}
          className={`px-5 py-2.5 rounded-xl font-display font-medium text-sm inline-flex items-center gap-2 transition-all ${
            currentQ === 0 ? "opacity-30 cursor-not-allowed" : "glass-strong border border-border/50 hover:border-primary/30 text-muted-foreground hover:text-foreground"
          }`}
          disabled={currentQ === 0}
          whileHover={currentQ > 0 ? { scale: 1.05 } : {}}
          whileTap={currentQ > 0 ? { scale: 0.95 } : {}}
        >
          <ArrowLeft className="w-4 h-4" /> Back
        </motion.button>

        {answers[currentQ] !== null && currentQ < questions.length - 1 && (
          <motion.button
            onClick={() => { setCurrentQ(currentQ + 1); setSelectedOption(null); }}
            className="gradient-hero text-primary-foreground px-5 py-2.5 rounded-xl font-display font-medium text-sm inline-flex items-center gap-2 glow-primary shadow-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Next <ArrowRight className="w-4 h-4" />
          </motion.button>
        )}

        {answers[currentQ] !== null && currentQ === questions.length - 1 && (
          <motion.button
            onClick={() => setShowResults(true)}
            className="gradient-hero text-primary-foreground px-6 py-2.5 rounded-xl font-display font-medium text-sm inline-flex items-center gap-2 glow-primary shadow-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            See Results <Sparkles className="w-4 h-4" />
          </motion.button>
        )}
      </div>
    </motion.div>
  );
};

export default VarkQuiz;
