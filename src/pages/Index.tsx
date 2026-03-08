import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Eye, Headphones, BookOpen, Hand, ArrowRight, Sparkles } from "lucide-react";

const varkStyles = [
  {
    key: "visual",
    label: "Visual",
    icon: <Eye className="w-6 h-6" />,
    gradient: "gradient-visual",
    desc: "Learn through images, videos, diagrams, and spatial understanding.",
  },
  {
    key: "auditory",
    label: "Auditory",
    icon: <Headphones className="w-6 h-6" />,
    gradient: "gradient-auditory",
    desc: "Learn through listening, discussions, podcasts, and verbal instructions.",
  },
  {
    key: "reading",
    label: "Read & Write",
    icon: <BookOpen className="w-6 h-6" />,
    gradient: "gradient-reading",
    desc: "Learn through reading text, writing notes, and written exercises.",
  },
  {
    key: "kinesthetic",
    label: "Kinesthetic",
    icon: <Hand className="w-6 h-6" />,
    gradient: "gradient-kinesthetic",
    desc: "Learn through hands-on experience, practice, and physical activities.",
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
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              Senior High School Learning Hub
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight mb-6">
              Learn Your Way with{" "}
              <span className="text-gradient-hero">VARK</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
              Discover your learning style and access curated resources aligned with the MELC curriculum.
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
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              VARK is a learning style model that categorizes learners into four types. 
              Understanding your style helps you study more effectively and retain knowledge better.
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
                <p className="text-sm text-muted-foreground">{style.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Subjects */}
      <section className="py-20">
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
          <p>VARK Learn — A Senior High School Learning Resource Hub</p>
          <p className="mt-1">Aligned with the MELC Curriculum • Built for Filipino Learners</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
