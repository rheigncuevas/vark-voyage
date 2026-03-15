import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { Eye, Headphones, BookOpen, Hand, ArrowRight, Sparkles, Brain, Lightbulb, Users, Target, Zap, GraduationCap, ClipboardCheck } from "lucide-react";
import schoolLogo from "@/assets/school-logo.jpg";
import FloatingOrbs from "@/components/FloatingOrbs";
import ParticleField from "@/components/ParticleField";
import TypewriterText from "@/components/TypewriterText";
import AnimatedCounter from "@/components/AnimatedCounter";
import MagneticButton from "@/components/MagneticButton";
import GlowingCard from "@/components/GlowingCard";
import VarkQuiz from "@/components/VarkQuiz";
import { useRef } from "react";

const varkStyles = [
  {
    key: "visual",
    label: "Visual (V)",
    icon: <Eye className="w-6 h-6" />,
    gradient: "gradient-visual",
    glow: "glow-visual",
    glowColor: "262, 83%, 58%",
    desc: "Visual learners think in pictures. They prefer diagrams, flowcharts, maps, and videos. When studying, they benefit from color-coding notes, creating mind maps, and watching demonstrations.",
    traits: ["Prefers charts & diagrams", "Thinks in images", "Remembers faces easily"],
    emoji: "👁️",
  },
  {
    key: "auditory",
    label: "Auditory (A)",
    icon: <Headphones className="w-6 h-6" />,
    gradient: "gradient-auditory",
    glow: "glow-auditory",
    glowColor: "199, 89%, 48%",
    desc: "Auditory learners absorb information best through listening. They thrive in lectures, group discussions, and podcasts. They often talk through problems and benefit from reading aloud.",
    traits: ["Learns through listening", "Enjoys discussions", "Remembers conversations"],
    emoji: "🎧",
  },
  {
    key: "reading",
    label: "Read & Write (R)",
    icon: <BookOpen className="w-6 h-6" />,
    gradient: "gradient-reading",
    glow: "glow-reading",
    glowColor: "140, 60%, 42%",
    desc: "Read/Write learners excel with text-based information. They love reading textbooks, writing essays, taking detailed notes, and creating lists. Written words are their primary tool for understanding.",
    traits: ["Loves reading & writing", "Takes detailed notes", "Prefers text over visuals"],
    emoji: "📚",
  },
  {
    key: "kinesthetic",
    label: "Kinesthetic (K)",
    icon: <Hand className="w-6 h-6" />,
    gradient: "gradient-kinesthetic",
    glow: "glow-kinesthetic",
    glowColor: "25, 95%, 53%",
    desc: "Kinesthetic learners need hands-on experience. They learn by doing — building models, conducting experiments, role-playing, and engaging in physical activities connected to the lesson.",
    traits: ["Learns by doing", "Needs movement", "Prefers real-world examples"],
    emoji: "✋",
  },
];

const subjectAreas = [
  {
    to: "/effective-communication",
    title: "Effective Communication",
    desc: "Master oral, written, and media communication skills for the 21st century.",
    gradient: "gradient-visual",
    glow: "glow-visual",
    icon: <GraduationCap className="w-8 h-8" />,
    color: "text-visual",
    count: 6,
  },
  {
    to: "/life-and-career-skills",
    title: "Life and Career Skills",
    desc: "Develop personal growth and physical wellness for lifelong success.",
    gradient: "gradient-auditory",
    glow: "glow-auditory",
    icon: <Users className="w-8 h-8" />,
    color: "text-auditory",
    count: 2,
  },
  {
    to: "/general-mathematics",
    title: "General Mathematics",
    desc: "Build analytical reasoning through math concepts and statistics.",
    gradient: "gradient-reading",
    glow: "glow-reading",
    icon: <Target className="w-8 h-8" />,
    color: "text-reading",
    count: 2,
  },
  {
    to: "/general-science",
    title: "General Science",
    desc: "Explore Earth sciences and physical sciences with scientific literacy.",
    gradient: "gradient-kinesthetic",
    glow: "glow-kinesthetic",
    icon: <Zap className="w-8 h-8" />,
    color: "text-kinesthetic",
    count: 2,
  },
  {
    to: "/kasaysayan-ng-lipunang-pilipino",
    title: "Kasaysayan ng Lipunang Pilipino",
    desc: "Unawain ang kultura, lipunan, politika, sining, at pilosopiya ng Pilipinas.",
    gradient: "gradient-hero",
    glow: "glow-primary",
    icon: <Brain className="w-8 h-8" />,
    color: "text-primary",
    count: 3,
  },
];

const deeperInsights = [
  {
    icon: <Brain className="w-8 h-8" />,
    title: "Multiple Intelligences Connection",
    desc: "VARK connects to Howard Gardner's Theory of Multiple Intelligences. While Gardner identified 8 types of intelligence (linguistic, logical, spatial, musical, bodily-kinesthetic, interpersonal, intrapersonal, and naturalistic), VARK simplifies this into four practical learning preferences that students can immediately apply to their study habits.",
    gradient: "gradient-visual",
    glowColor: "262, 83%, 58%",
  },
  {
    icon: <Lightbulb className="w-8 h-8" />,
    title: "You're Not Just One Type",
    desc: "Most people are multimodal learners — meaning they use a combination of VARK styles. Research by Neil Fleming, who created the VARK model in 1987, shows that about 60% of learners don't fit neatly into a single category. The key is knowing your dominant style while being flexible enough to use others when needed.",
    gradient: "gradient-auditory",
    glowColor: "199, 89%, 48%",
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Why It Matters in the Classroom",
    desc: "When teachers use only one teaching method (like lectures), they only reach one type of learner effectively. VARK-aligned education ensures every student has access to materials that match how their brain best processes information — leading to better retention, higher engagement, and improved academic performance.",
    gradient: "gradient-reading",
    glowColor: "140, 60%, 42%",
  },
  {
    icon: <Target className="w-8 h-8" />,
    title: "Practical Study Tips",
    desc: "Visual learners: use highlighters and draw diagrams. Auditory learners: record lessons and discuss with classmates. Read/Write learners: rewrite notes in your own words. Kinesthetic learners: use flashcards, build models, or walk while reviewing. Combining strategies from multiple styles creates the strongest learning experience.",
    gradient: "gradient-kinesthetic",
    glowColor: "25, 95%, 53%",
  },
];

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40, filter: "blur(8px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.6, ease: "easeOut" as const } },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.5, type: "spring" as const, stiffness: 200 } },
};

const Index = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Hero with parallax */}
      <section ref={heroRef} className="relative overflow-hidden py-28 md:py-40 mesh-gradient">
        <ParticleField count={60} />
        <FloatingOrbs />

        <div className="container mx-auto px-4 relative">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            style={{ y: heroY, opacity: heroOpacity }}
          >
            <motion.div
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full glass-strong text-primary text-sm font-medium mb-10 animated-border"
              initial={{ opacity: 0, scale: 0.7, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            >
              <motion.img
                src={schoolLogo}
                alt="Padre Garcia Integrated National High School Logo"
                className="w-10 h-10 rounded-full object-cover ring-2 ring-primary/30"
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
              <div className="flex flex-col items-start leading-tight">
                <span className="flex items-center gap-1.5 font-semibold">
                  <Sparkles className="w-4 h-4 animate-pulse-glow" />
                  Senior High School Learning Hub
                </span>
                <span className="text-xs text-muted-foreground">Padre Garcia Integrated National High School</span>
              </div>
            </motion.div>

            <motion.h1
              className="text-6xl md:text-8xl font-display font-bold leading-[0.9] mb-6"
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8, type: "spring" }}
            >
              <motion.span
                className="text-gradient-hero inline-block"
                animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
              >
                VARKology
              </motion.span>
              <br />
              <span className="text-xl md:text-2xl font-medium text-muted-foreground block mt-4">
                <TypewriterText
                  words={["Explore Beyond Your Capabilities", "Discover Your Learning Style", "Unlock Your Full Potential", "Learn the Way You Were Meant To"]}
                  className="text-gradient-hero font-semibold"
                />
              </span>
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              Discover your unique learning style and unlock your full potential with curated resources aligned with the MELC curriculum.
            </motion.p>

            {/* Floating VARK icons */}
            <motion.div
              className="flex justify-center gap-5 mb-12"
              initial="hidden"
              animate="show"
              variants={{ show: { transition: { staggerChildren: 0.1, delayChildren: 0.8 } } }}
            >
              {varkStyles.map((style, i) => (
                <motion.div
                  key={style.key}
                  variants={{ hidden: { opacity: 0, y: 30, scale: 0 }, show: { opacity: 1, y: 0, scale: 1 } }}
                  className={`w-14 h-14 rounded-2xl ${style.gradient} flex items-center justify-center text-primary-foreground ${style.glow} shadow-lg cursor-default`}
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 2 + i * 0.3, repeat: Infinity, ease: "easeInOut", delay: i * 0.2 }}
                  whileHover={{ scale: 1.3, rotate: 15 }}
                >
                  {style.icon}
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              <MagneticButton>
                <Link
                  to="/effective-communication"
                  className="gradient-hero text-primary-foreground px-8 py-4 rounded-2xl font-display font-semibold hover:opacity-90 transition-all inline-flex items-center gap-3 glow-primary shadow-2xl text-lg group"
                >
                  Start Learning
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight className="w-5 h-5" />
                  </motion.span>
                </Link>
              </MagneticButton>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0], opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex items-start justify-center p-2">
            <motion.div
              className="w-1.5 h-1.5 bg-primary rounded-full"
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      {/* Stats Banner */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 gradient-hero opacity-5" />
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <AnimatedCounter end={4} suffix="" label="Learning Styles" gradient="gradient-visual" />
            <AnimatedCounter end={2} suffix="" label="SHS Subjects" gradient="gradient-auditory" />
            <AnimatedCounter end={100} suffix="+" label="Curated Resources" gradient="gradient-reading" />
            <AnimatedCounter end={1987} suffix="" label="Year VARK was Created" gradient="gradient-kinesthetic" />
          </div>
        </div>
      </section>

      {/* Intro Video */}
      <section className="py-24 bg-muted/30 relative overflow-hidden">
        <FloatingOrbs orbs={[
          { color: "bg-secondary/10", size: "w-64 h-64", position: "top-0 right-0", delay: 0, duration: 8 },
        ]} />
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-secondary text-sm font-medium mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <Sparkles className="w-4 h-4" />
              Featured Video
            </motion.div>
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
              Watch: <span className="text-gradient-hero">Introduction to VARK</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-10">
              Get a quick overview of VARK learning styles before diving deeper.
            </p>
            <motion.div
              className="rounded-3xl overflow-hidden animated-border shadow-2xl"
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.3 }}
            >
              <video controls className="w-full aspect-video bg-black" preload="metadata">
                <source src="/videos/vark-intro.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* VARK Quiz Section */}
      <section className="py-28 relative overflow-hidden mesh-gradient">
        <ParticleField count={25} />
        <FloatingOrbs orbs={[
          { color: "bg-primary/10", size: "w-80 h-80", position: "-top-10 -left-20", delay: 0, duration: 9 },
          { color: "bg-accent/8", size: "w-60 h-60", position: "bottom-10 right-0", delay: 2, duration: 7 },
        ]} />
        <div className="container mx-auto px-4 relative">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-accent text-sm font-medium mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <ClipboardCheck className="w-4 h-4" />
              Pre-Assessment
            </motion.div>
            <motion.h2
              className="text-4xl md:text-6xl font-display font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              What's Your <span className="text-gradient-hero">Learning Style</span>?
            </motion.h2>
            <motion.p
              className="text-muted-foreground max-w-2xl mx-auto text-lg"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Take this quick quiz to discover how your brain best absorbs information — then use your results to study smarter!
            </motion.p>
          </motion.div>

          <VarkQuiz />
        </div>
      </section>

      {/* VARK Styles */}
      <section className="py-28 relative overflow-hidden">
        <div className="absolute inset-0 mesh-gradient opacity-60" />
        <ParticleField count={30} />
        <div className="container mx-auto px-4 relative">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-primary text-sm font-medium mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Brain className="w-4 h-4" />
              Learning Styles
            </motion.div>
            <motion.h2
              className="text-4xl md:text-6xl font-display font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              What is <span className="text-gradient-hero">VARK</span>?
            </motion.h2>
            <motion.p
              className="text-muted-foreground max-w-3xl mx-auto text-lg"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              VARK stands for <strong className="text-foreground">Visual, Auditory, Read/Write, and Kinesthetic</strong> — a learning style model developed by Neil Fleming in 1987.
              It helps learners identify how they best absorb, process, and retain information.
            </motion.p>
          </motion.div>

          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-7"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {varkStyles.map((style) => (
              <motion.div key={style.key} variants={fadeUp}>
                <GlowingCard
                  className={`glass-strong rounded-3xl p-7 border border-border/50`}
                  glowColor={style.glowColor}
                >
                  <motion.div className="text-4xl mb-4" animate={{ rotate: [0, 10, -10, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}>
                    {style.emoji}
                  </motion.div>
                  <motion.div
                    className={`w-14 h-14 rounded-2xl ${style.gradient} flex items-center justify-center text-primary-foreground mb-5 ${style.glow}`}
                    whileHover={{ rotate: 15, scale: 1.15 }}
                  >
                    {style.icon}
                  </motion.div>
                  <h3 className="font-display font-bold text-lg mb-3">{style.label}</h3>
                  <p className="text-sm text-muted-foreground mb-5 leading-relaxed">{style.desc}</p>
                  <ul className="space-y-2.5">
                    {style.traits.map((trait, i) => (
                      <motion.li
                        key={trait}
                        className="text-xs text-muted-foreground flex items-center gap-2.5 glass rounded-xl px-3 py-2"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                      >
                        <span className={`w-2.5 h-2.5 rounded-full ${style.gradient} shrink-0`} />
                        {trait}
                      </motion.li>
                    ))}
                  </ul>
                </GlowingCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Deeper Understanding */}
      <section className="py-28 bg-muted/20 relative overflow-hidden">
        <FloatingOrbs orbs={[
          { color: "bg-primary/10", size: "w-96 h-96", position: "-top-20 -right-20", delay: 0, duration: 10 },
          { color: "bg-secondary/10", size: "w-72 h-72", position: "bottom-0 -left-20", delay: 2, duration: 8 },
          { color: "bg-accent/8", size: "w-60 h-60", position: "top-1/3 right-1/4", delay: 3, duration: 7 },
        ]} />
        <div className="container mx-auto px-4 relative">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-accent text-sm font-medium mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Lightbulb className="w-4 h-4" />
              Deep Dive
            </motion.div>
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
              Understanding <span className="text-gradient-hero">Learning Intelligence</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              VARK isn't just about preferences — it's about how your brain is wired to learn.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {deeperInsights.map((insight) => (
              <motion.div key={insight.title} variants={fadeUp}>
                <GlowingCard
                  className="glass-strong rounded-3xl p-8 border border-border/50 h-full"
                  glowColor={insight.glowColor}
                >
                  <motion.div
                    className={`w-16 h-16 rounded-2xl ${insight.gradient} flex items-center justify-center text-primary-foreground mb-6 shadow-lg`}
                    whileHover={{ rotate: -10, scale: 1.15 }}
                    transition={{ type: "spring" }}
                  >
                    {insight.icon}
                  </motion.div>
                  <h3 className="font-display font-bold text-xl mb-4">{insight.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{insight.desc}</p>
                </GlowingCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Subject Areas */}
      <section className="py-28 relative overflow-hidden mesh-gradient">
        <ParticleField count={25} />
        <div className="container mx-auto px-4 relative">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-foreground text-sm font-medium mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <GraduationCap className="w-4 h-4" />
              Explore Subject Areas
            </motion.div>
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">Choose Your <span className="text-gradient-hero">Subject Area</span></h2>
            <p className="text-muted-foreground text-lg">
              5 subject areas with 15 subjects — each with VARK-aligned learning resources.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {subjectAreas.map((subj, i) => (
              <motion.div
                key={subj.to}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1, type: "spring" }}
              >
                <MagneticButton strength={0.12}>
                  <Link
                    to={subj.to}
                    className="group block glass-strong rounded-3xl p-8 transition-all duration-300 border border-border/50 hover:border-primary/30 h-full"
                  >
                    <motion.div
                      className={`w-14 h-14 rounded-2xl ${subj.gradient} flex items-center justify-center text-primary-foreground mb-5 shadow-lg ${subj.glow}`}
                      whileHover={{ rotate: 10, scale: 1.1 }}
                    >
                      {subj.icon}
                    </motion.div>
                    <div className={`w-full h-1 rounded-full ${subj.gradient} mb-5 shimmer`} />
                    <h3 className="font-display font-bold text-xl mb-2 group-hover:text-primary transition-colors">
                      {subj.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{subj.desc}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground glass rounded-full px-3 py-1">{subj.count} subjects</span>
                      <span className="inline-flex items-center gap-2 text-primary font-display font-semibold text-sm group-hover:gap-3 transition-all">
                        Explore
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </Link>
                </MagneticButton>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <footer className="border-t border-border py-14 relative overflow-hidden">
        <div className="absolute inset-0 mesh-gradient opacity-30" />
        <div className="container mx-auto px-4 relative">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="flex items-center justify-center gap-3 mb-4"
              whileHover={{ scale: 1.05 }}
            >
              <img src={schoolLogo} alt="School Logo" className="w-10 h-10 rounded-full object-cover ring-2 ring-primary/20" />
              <p className="font-display font-bold text-xl text-gradient-hero">VARKology</p>
            </motion.div>
            <p className="text-sm text-muted-foreground">Explore Beyond Your Capabilities</p>
            <p className="text-sm text-muted-foreground mt-1">Padre Garcia Integrated National High School</p>
            <div className="flex justify-center gap-8 mt-6">
              {varkStyles.map((s) => (
                <motion.div
                  key={s.key}
                  className={`w-3 h-3 rounded-full ${s.gradient}`}
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: varkStyles.indexOf(s) * 0.3 }}
                />
              ))}
            </div>
            <p className="text-xs text-muted-foreground mt-6">Aligned with the MELC Curriculum • Built for Filipino Learners</p>
          </motion.div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
