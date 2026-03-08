import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Eye, Headphones, BookOpen, Hand, ArrowRight, Sparkles, Brain, Lightbulb, Users, Target } from "lucide-react";
import schoolLogo from "@/assets/school-logo.jpg";

const varkStyles = [
  {
    key: "visual",
    label: "Visual (V)",
    icon: <Eye className="w-6 h-6" />,
    gradient: "gradient-visual",
    desc: "Visual learners think in pictures. They prefer diagrams, flowcharts, maps, and videos. When studying, they benefit from color-coding notes, creating mind maps, and watching demonstrations.",
    traits: ["Prefers charts & diagrams", "Thinks in images", "Remembers faces easily"],
  },
  {
    key: "auditory",
    label: "Auditory (A)",
    icon: <Headphones className="w-6 h-6" />,
    gradient: "gradient-auditory",
    desc: "Auditory learners absorb information best through listening. They thrive in lectures, group discussions, and podcasts. They often talk through problems and benefit from reading aloud.",
    traits: ["Learns through listening", "Enjoys discussions", "Remembers conversations"],
  },
  {
    key: "reading",
    label: "Read & Write (R)",
    icon: <BookOpen className="w-6 h-6" />,
    gradient: "gradient-reading",
    desc: "Read/Write learners excel with text-based information. They love reading textbooks, writing essays, taking detailed notes, and creating lists. Written words are their primary tool for understanding.",
    traits: ["Loves reading & writing", "Takes detailed notes", "Prefers text over visuals"],
  },
  {
    key: "kinesthetic",
    label: "Kinesthetic (K)",
    icon: <Hand className="w-6 h-6" />,
    gradient: "gradient-kinesthetic",
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
  },
  {
    to: "/cpar",
    title: "Contemporary Arts in the Philippines",
    desc: "Discover Philippine contemporary art forms through diverse learning approaches.",
    gradient: "gradient-kinesthetic",
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

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden py-24 md:py-36">
        <div className="absolute inset-0 gradient-hero opacity-10" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 relative">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <img src={schoolLogo} alt="Padre Garcia Integrated National High School Logo" className="w-8 h-8 rounded-full object-cover" />
              <div className="flex flex-col items-start leading-tight">
                <span className="flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4" />
                  Senior High School Learning Hub
                </span>
                <span className="text-xs text-muted-foreground">Padre Garcia Integrated National High School</span>
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight mb-6">
              <span className="text-gradient-hero">VARKology</span>
              <br />
              <span className="text-2xl md:text-3xl font-medium text-muted-foreground">Explore Beyond Your Capabilities</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
              Discover your unique learning style and unlock your full potential with curated resources aligned with the MELC curriculum.
              Visual, Auditory, Reading & Writing, or Kinesthetic — we've got you covered.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/mil"
                className="gradient-hero text-primary-foreground px-6 py-3 rounded-xl font-display font-semibold hover:opacity-90 transition-opacity inline-flex items-center gap-2"
              >
                Start Learning <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* VARK Styles */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              What is <span className="text-gradient-hero">VARK</span>?
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
              VARK stands for <strong className="text-foreground">Visual, Auditory, Read/Write, and Kinesthetic</strong> — a learning style model developed by Neil Fleming in 1987 in New Zealand.
              It helps learners identify how they best absorb, process, and retain information. Instead of a one-size-fits-all approach to education,
              VARK recognizes that every person's brain is wired differently, and understanding your style can dramatically improve how effectively you study and learn.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {varkStyles.map((style, i) => (
              <motion.div
                key={style.key}
                className="bg-card rounded-2xl p-6 border border-border hover:shadow-xl transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <div className={`w-12 h-12 rounded-xl ${style.gradient} flex items-center justify-center text-primary-foreground mb-4`}>
                  {style.icon}
                </div>
                <h3 className="font-display font-semibold text-lg mb-2">{style.label}</h3>
                <p className="text-sm text-muted-foreground mb-3">{style.desc}</p>
                <ul className="space-y-1">
                  {style.traits.map((trait) => (
                    <li key={trait} className="text-xs text-muted-foreground flex items-center gap-1.5">
                      <span className={`w-1.5 h-1.5 rounded-full ${style.gradient}`} />
                      {trait}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Deeper Understanding */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Understanding <span className="text-gradient-hero">Learning Intelligence</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              VARK isn't just about preferences — it's about how your brain is wired to learn. Here's a deeper look at why it matters.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {deeperInsights.map((insight, i) => (
              <motion.div
                key={insight.title}
                className="bg-card rounded-2xl p-8 border border-border hover:shadow-xl transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <div className="w-14 h-14 rounded-xl gradient-hero flex items-center justify-center text-primary-foreground mb-5">
                  {insight.icon}
                </div>
                <h3 className="font-display font-bold text-xl mb-3">{insight.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{insight.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Subjects */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Choose Your Subject</h2>
            <p className="text-muted-foreground text-lg">
              Explore curated VARK resources for these Senior High School subjects.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {subjects.map((subj, i) => (
              <motion.div
                key={subj.to}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.15 }}
              >
                <Link
                  to={subj.to}
                  className="group block bg-card border border-border rounded-2xl p-8 hover:shadow-2xl transition-all hover:-translate-y-1"
                >
                  <div className={`w-full h-2 rounded-full ${subj.gradient} mb-6`} />
                  <h3 className="font-display font-bold text-xl mb-3 group-hover:text-primary transition-colors">
                    {subj.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">{subj.desc}</p>
                  <span className="inline-flex items-center gap-1 text-primary font-medium text-sm">
                    Explore Resources <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p className="font-display font-semibold text-foreground">VARKology — Explore Beyond Your Capabilities</p>
          <p className="mt-1">Padre Garcia Integrated National High School</p>
          <p className="mt-1">Aligned with the MELC Curriculum • Built for Filipino Learners</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
