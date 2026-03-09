import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Eye, Headphones, BookOpen, Hand, ArrowRight, Sparkles, Brain, Lightbulb, Users, Target } from "lucide-react";
import schoolLogo from "@/assets/school-logo.jpg";
import FloatingOrbs from "@/components/FloatingOrbs";

const varkStyles = [
  {
    key: "visual",
    label: "Visual (V)",
    icon: <Eye className="w-6 h-6" />,
    gradient: "gradient-visual",
    glow: "glow-visual",
    desc: "Visual learners think in pictures. They prefer diagrams, flowcharts, maps, and videos. When studying, they benefit from color-coding notes, creating mind maps, and watching demonstrations.",
    traits: ["Prefers charts & diagrams", "Thinks in images", "Remembers faces easily"],
  },
  {
    key: "auditory",
    label: "Auditory (A)",
    icon: <Headphones className="w-6 h-6" />,
    gradient: "gradient-auditory",
    glow: "glow-auditory",
    desc: "Auditory learners absorb information best through listening. They thrive in lectures, group discussions, and podcasts. They often talk through problems and benefit from reading aloud.",
    traits: ["Learns through listening", "Enjoys discussions", "Remembers conversations"],
  },
  {
    key: "reading",
    label: "Read & Write (R)",
    icon: <BookOpen className="w-6 h-6" />,
    gradient: "gradient-reading",
    glow: "glow-reading",
    desc: "Read/Write learners excel with text-based information. They love reading textbooks, writing essays, taking detailed notes, and creating lists. Written words are their primary tool for understanding.",
    traits: ["Loves reading & writing", "Takes detailed notes", "Prefers text over visuals"],
  },
  {
    key: "kinesthetic",
    label: "Kinesthetic (K)",
    icon: <Hand className="w-6 h-6" />,
    gradient: "gradient-kinesthetic",
    glow: "glow-kinesthetic",
    desc: "Kinesthetic learners need hands-on experience. They learn by doing — building models, conducting experiments, role-playing, and engaging in physical activities connected to the lesson.",
    traits: ["Learns by doing", "Needs movement", "Prefers real-world examples"],
  },
];

const subjects = [
  {
    to: "/mil",
    title: "Media & Information Literacy",
    desc: "Explore media, information, and digital literacy through all VARK styles.",
    gradient: "gradient-visual",
    glow: "glow-visual",
  },
  {
    to: "/cpar",
    title: "Contemporary Arts in the Philippines",
    desc: "Discover Philippine contemporary art forms through diverse learning approaches.",
    gradient: "gradient-kinesthetic",
    glow: "glow-kinesthetic",
  },
];

const deeperInsights = [
  {
    icon: <Brain className="w-8 h-8" />,
    title: "Multiple Intelligences Connection",
    desc: "VARK connects to Howard Gardner's Theory of Multiple Intelligences. While Gardner identified 8 types of intelligence (linguistic, logical, spatial, musical, bodily-kinesthetic, interpersonal, intrapersonal, and naturalistic), VARK simplifies this into four practical learning preferences that students can immediately apply to their study habits.",
  },
  {
    icon: <Lightbulb className="w-8 h-8" />,
    title: "You're Not Just One Type",
    desc: "Most people are multimodal learners — meaning they use a combination of VARK styles. Research by Neil Fleming, who created the VARK model in 1987, shows that about 60% of learners don't fit neatly into a single category. The key is knowing your dominant style while being flexible enough to use others when needed.",
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Why It Matters in the Classroom",
    desc: "When teachers use only one teaching method (like lectures), they only reach one type of learner effectively. VARK-aligned education ensures every student has access to materials that match how their brain best processes information — leading to better retention, higher engagement, and improved academic performance.",
  },
  {
    icon: <Target className="w-8 h-8" />,
    title: "Practical Study Tips",
    desc: "Visual learners: use highlighters and draw diagrams. Auditory learners: record lessons and discuss with classmates. Read/Write learners: rewrite notes in your own words. Kinesthetic learners: use flashcards, build models, or walk while reviewing. Combining strategies from multiple styles creates the strongest learning experience.",
  },
];

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden py-24 md:py-36 mesh-gradient">
        <FloatingOrbs />

        <div className="container mx-auto px-4 relative">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 40, filter: "blur(20px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full glass text-primary text-sm font-medium mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <img src={schoolLogo} alt="Padre Garcia Integrated National High School Logo" className="w-8 h-8 rounded-full object-cover ring-2 ring-primary/20" />
              <div className="flex flex-col items-start leading-tight">
                <span className="flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4" />
                  Senior High School Learning Hub
                </span>
                <span className="text-xs text-muted-foreground">Padre Garcia Integrated National High School</span>
              </div>
            </motion.div>

            <motion.h1
              className="text-5xl md:text-7xl font-display font-bold leading-tight mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
            >
              <span className="text-gradient-hero">VARKology</span>
              <br />
              <span className="text-2xl md:text-3xl font-medium text-muted-foreground">Explore Beyond Your Capabilities</span>
            </motion.h1>

            <motion.p
              className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              Discover your unique learning style and unlock your full potential with curated resources aligned with the MELC curriculum.
              Visual, Auditory, Reading & Writing, or Kinesthetic — we've got you covered.
            </motion.p>

            <motion.div
              className="flex flex-wrap justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.97 }}>
                <Link
                  to="/mil"
                  className="gradient-hero text-primary-foreground px-7 py-3.5 rounded-2xl font-display font-semibold hover:opacity-90 transition-opacity inline-flex items-center gap-2 glow-primary shadow-xl"
                >
                  Start Learning <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Intro Video */}
      <section className="py-20 bg-muted/50 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Watch: <span className="text-gradient-hero">Introduction to VARK</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Get a quick overview of VARK learning styles before diving deeper.
            </p>
            <motion.div
              className="rounded-2xl overflow-hidden animated-border shadow-2xl"
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.3 }}
            >
              <video
                controls
                className="w-full aspect-video bg-black"
                preload="metadata"
              >
                <source src="/videos/vark-intro.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* VARK Styles */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 mesh-gradient opacity-50" />
        <div className="container mx-auto px-4 relative">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <motion.h2
              className="text-3xl md:text-5xl font-display font-bold mb-5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              What is <span className="text-gradient-hero">VARK</span>?
            </motion.h2>
            <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
              VARK stands for <strong className="text-foreground">Visual, Auditory, Read/Write, and Kinesthetic</strong> — a learning style model developed by Neil Fleming in 1987 in New Zealand.
              It helps learners identify how they best absorb, process, and retain information.
            </p>
          </motion.div>

          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {varkStyles.map((style) => (
              <motion.div
                key={style.key}
                className={`glass rounded-2xl p-6 hover:${style.glow} transition-all duration-300 group`}
                variants={fadeUp}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <motion.div
                  className={`w-14 h-14 rounded-2xl ${style.gradient} flex items-center justify-center text-primary-foreground mb-5 ${style.glow}`}
                  whileHover={{ rotate: 10, scale: 1.1 }}
                >
                  {style.icon}
                </motion.div>
                <h3 className="font-display font-semibold text-lg mb-2">{style.label}</h3>
                <p className="text-sm text-muted-foreground mb-4">{style.desc}</p>
                <ul className="space-y-2">
                  {style.traits.map((trait) => (
                    <li key={trait} className="text-xs text-muted-foreground flex items-center gap-2">
                      <span className={`w-2 h-2 rounded-full ${style.gradient}`} />
                      {trait}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Deeper Understanding */}
      <section className="py-24 bg-muted/30 relative overflow-hidden">
        <FloatingOrbs orbs={[
          { color: "bg-primary/10", size: "w-96 h-96", position: "-top-20 -right-20", delay: 0, duration: 10 },
          { color: "bg-secondary/10", size: "w-72 h-72", position: "bottom-0 -left-20", delay: 2, duration: 8 },
        ]} />
        <div className="container mx-auto px-4 relative">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-5">
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
              <motion.div
                key={insight.title}
                className="glass rounded-2xl p-8 hover:glow-primary transition-all duration-300 group"
                variants={fadeUp}
                whileHover={{ y: -5 }}
              >
                <motion.div
                  className="w-16 h-16 rounded-2xl gradient-hero flex items-center justify-center text-primary-foreground mb-6 glow-primary"
                  whileHover={{ rotate: -5, scale: 1.1 }}
                >
                  {insight.icon}
                </motion.div>
                <h3 className="font-display font-bold text-xl mb-3">{insight.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{insight.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Subjects */}
      <section className="py-24 relative overflow-hidden mesh-gradient">
        <div className="container mx-auto px-4 relative">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-5">Choose Your Subject</h2>
            <p className="text-muted-foreground text-lg">
              Explore curated VARK resources for these Senior High School subjects.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {subjects.map((subj, i) => (
              <motion.div
                key={subj.to}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
              >
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link
                    to={subj.to}
                    className={`group block glass rounded-2xl p-8 hover:${subj.glow} transition-all duration-300`}
                  >
                    <div className={`w-full h-2 rounded-full ${subj.gradient} mb-6 shimmer`} />
                    <h3 className="font-display font-bold text-xl mb-3 group-hover:text-primary transition-colors">
                      {subj.title}
                    </h3>
                    <p className="text-muted-foreground mb-5">{subj.desc}</p>
                    <span className="inline-flex items-center gap-2 text-primary font-display font-semibold text-sm">
                      Explore Resources
                      <motion.span
                        className="inline-block"
                        whileHover={{ x: 5 }}
                      >
                        <ArrowRight className="w-4 h-4" />
                      </motion.span>
                    </span>
                  </Link>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-10 relative overflow-hidden">
        <div className="absolute inset-0 mesh-gradient opacity-30" />
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground relative">
          <p className="font-display font-bold text-lg text-gradient-hero inline-block">VARKology — Explore Beyond Your Capabilities</p>
          <p className="mt-2">Padre Garcia Integrated National High School</p>
          <p className="mt-1">Aligned with the MELC Curriculum • Built for Filipino Learners</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
