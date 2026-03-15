import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, BookOpen, MessageSquare, Heart, Calculator, Atom, Landmark, AlertCircle } from "lucide-react";
import { getCategoryBySlug } from "@/data/subjects";
import FloatingOrbs from "@/components/FloatingOrbs";
import ParticleField from "@/components/ParticleField";
import GlowingCard from "@/components/GlowingCard";

const iconMap: Record<string, React.ReactNode> = {
  MessageSquare: <MessageSquare className="w-8 h-8" />,
  Heart: <Heart className="w-8 h-8" />,
  Calculator: <Calculator className="w-8 h-8" />,
  Atom: <Atom className="w-8 h-8" />,
  Landmark: <Landmark className="w-8 h-8" />,
};

const glowColorMap: Record<string, string> = {
  "gradient-visual": "262, 83%, 58%",
  "gradient-auditory": "199, 89%, 48%",
  "gradient-reading": "140, 60%, 42%",
  "gradient-kinesthetic": "25, 95%, 53%",
  "gradient-hero": "262, 83%, 58%",
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30, filter: "blur(8px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.5, type: "spring" as const, stiffness: 150 } },
};

const CategoryPage = () => {
  const { categorySlug } = useParams();
  const category = getCategoryBySlug(categorySlug || "");

  if (!category) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <motion.div
          className="text-center glass-strong rounded-3xl p-12"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <AlertCircle className="w-16 h-16 text-destructive mx-auto mb-4" />
          <h2 className="text-2xl font-display font-bold mb-2">Category Not Found</h2>
          <p className="text-muted-foreground mb-6">The category you're looking for doesn't exist.</p>
          <Link to="/" className="gradient-hero text-primary-foreground px-6 py-3 rounded-xl font-semibold inline-block">
            Go Home
          </Link>
        </motion.div>
      </div>
    );
  }

  const hasResources = (subj: typeof category.subjects[0]) =>
    subj.visual.length > 0 || subj.auditory.length > 0 || subj.reading.length > 0 || subj.kinesthetic.length > 0;

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="relative overflow-hidden py-20 md:py-28 mesh-gradient">
        <ParticleField count={40} />
        <FloatingOrbs orbs={[
          { color: "bg-primary/20", size: "w-72 h-72", position: "top-10 -right-20", delay: 0, duration: 7 },
          { color: "bg-secondary/15", size: "w-64 h-64", position: "-bottom-10 left-10", delay: 1, duration: 9 },
          { color: "bg-accent/10", size: "w-48 h-48", position: "top-1/3 left-1/4", delay: 2, duration: 6 },
        ]} />
        <div className="container mx-auto px-4 relative">
          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, y: 30, filter: "blur(15px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.7 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-primary text-sm font-medium mb-6"
              initial={{ opacity: 0, x: -20, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
            >
              <Sparkles className="w-4 h-4 animate-pulse-glow" />
              Senior High School Subject Area
            </motion.div>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-5">
              <span className="text-gradient-hero">{category.name}</span>
            </h1>
            <motion.p
              className="text-lg text-muted-foreground max-w-2xl glass rounded-2xl p-5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              {category.description}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Subjects Grid */}
      <section className="py-20 pb-28 relative">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
              Choose a <span className="text-gradient-hero">Subject</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Select a subject to explore VARK-aligned learning resources.
            </p>
          </motion.div>

          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {category.subjects.map((subject, i) => (
              <motion.div key={subject.slug} variants={fadeUp}>
                <Link to={`/${category.slug}/${subject.slug}`}>
                  <GlowingCard
                    className="glass-strong rounded-3xl p-7 border border-border/50 h-full group cursor-pointer"
                    glowColor={glowColorMap[category.gradient] || "262, 83%, 58%"}
                  >
                    <motion.div
                      className={`w-14 h-14 rounded-2xl ${category.gradient} flex items-center justify-center text-primary-foreground mb-5 shadow-lg`}
                      whileHover={{ rotate: 10, scale: 1.1 }}
                    >
                      {iconMap[category.icon] || <BookOpen className="w-6 h-6" />}
                    </motion.div>

                    {hasResources(subject) && (
                      <motion.span
                        className="inline-block px-2.5 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary mb-3"
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        Resources Available ✨
                      </motion.span>
                    )}

                    <h3 className="font-display font-bold text-lg mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      {subject.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-5 line-clamp-3 leading-relaxed">
                      {subject.description}
                    </p>
                    <span className="inline-flex items-center gap-2 text-primary font-display font-semibold text-sm group-hover:gap-3 transition-all">
                      Explore
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </GlowingCard>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CategoryPage;
