import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Sparkles, ArrowLeft, AlertCircle, BookOpen } from "lucide-react";
import { getCategoryBySlug, getSubjectBySlug } from "@/data/subjects";
import VarkSection from "@/components/VarkSection";
import FloatingOrbs from "@/components/FloatingOrbs";
import ParticleField from "@/components/ParticleField";

const SubjectPage = () => {
  const { categorySlug, subjectSlug } = useParams();
  const category = getCategoryBySlug(categorySlug || "");
  const subject = getSubjectBySlug(categorySlug || "", subjectSlug || "");

  if (!category || !subject) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <motion.div
          className="text-center glass-strong rounded-3xl p-12"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <AlertCircle className="w-16 h-16 text-destructive mx-auto mb-4" />
          <h2 className="text-2xl font-display font-bold mb-2">Subject Not Found</h2>
          <p className="text-muted-foreground mb-6">The subject you're looking for doesn't exist.</p>
          <Link to="/" className="gradient-hero text-primary-foreground px-6 py-3 rounded-xl font-semibold inline-block">
            Go Home
          </Link>
        </motion.div>
      </div>
    );
  }

  const hasResources =
    subject.visual.length > 0 || subject.auditory.length > 0 || subject.reading.length > 0 || subject.kinesthetic.length > 0;

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="relative overflow-hidden py-20 md:py-28 mesh-gradient">
        <ParticleField count={35} />
        <FloatingOrbs orbs={[
          { color: "bg-primary/20", size: "w-72 h-72", position: "top-10 -right-20", delay: 0, duration: 7 },
          { color: "bg-secondary/15", size: "w-64 h-64", position: "-bottom-10 left-10", delay: 1, duration: 9 },
        ]} />
        <div className="container mx-auto px-4 relative">
          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, y: 30, filter: "blur(15px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.7 }}
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
            >
              <Link
                to={`/${category.slug}`}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-primary text-sm font-medium mb-6 hover:bg-primary/10 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                {category.name}
              </Link>
            </motion.div>

            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-accent text-sm font-medium mb-4"
              initial={{ opacity: 0, x: -20, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
            >
              <Sparkles className="w-4 h-4 animate-pulse-glow" />
              VARK Learning Resources
            </motion.div>

            <h1 className="text-4xl md:text-6xl font-display font-bold mb-5">
              <span className="text-gradient-hero">{subject.name}</span>
            </h1>
            <motion.p
              className="text-lg text-muted-foreground max-w-2xl glass rounded-2xl p-5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              {subject.description}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* VARK Content */}
      <section className="py-20 pb-28 relative">
        <div className="container mx-auto px-4">
          {hasResources ? (
            <VarkSection
              visual={subject.visual}
              auditory={subject.auditory}
              reading={subject.reading}
              kinesthetic={subject.kinesthetic}
            />
          ) : (
            <motion.div
              className="text-center py-20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <motion.div
                className="w-24 h-24 rounded-3xl glass-strong flex items-center justify-center mx-auto mb-8"
                animate={{ rotate: [0, 5, -5, 0], scale: [1, 1.05, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <BookOpen className="w-12 h-12 text-muted-foreground" />
              </motion.div>
              <h3 className="text-2xl font-display font-bold mb-3">Resources Coming Soon</h3>
              <p className="text-muted-foreground max-w-md mx-auto text-lg">
                We're curating VARK-aligned learning resources for this subject. Check back soon!
              </p>
              <motion.div
                className="mt-8 flex justify-center gap-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                {["Visual", "Auditory", "Read/Write", "Kinesthetic"].map((style, i) => (
                  <motion.span
                    key={style}
                    className="px-4 py-2 rounded-full glass text-sm text-muted-foreground"
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                  >
                    {style}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
};

export default SubjectPage;
