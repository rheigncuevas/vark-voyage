import { motion } from "framer-motion";
import { BookOpenCheck, Sparkles } from "lucide-react";
import VarkSection from "../components/VarkSection";
import { milVisual, milAuditory, milReading, milKinesthetic } from "../data/milResources";
import FloatingOrbs from "@/components/FloatingOrbs";
import ParticleField from "@/components/ParticleField";

const MILPage = () => {
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
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-primary text-sm font-medium mb-6"
              initial={{ opacity: 0, x: -20, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
            >
              <BookOpenCheck className="w-4 h-4" />
              Senior High School Subject
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-5">
              <span className="text-gradient-hero">Media & Information</span>
              <br />
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                Literacy
              </motion.span>
            </h1>
            <motion.p
              className="text-lg text-muted-foreground max-w-2xl glass rounded-2xl p-5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              Master media literacy, information literacy, and digital citizenship through your preferred 
              VARK learning style. All resources are aligned with the MELC curriculum for Senior High School.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* VARK Content */}
      <section className="py-20 pb-28 relative">
        <div className="container mx-auto px-4">
          <VarkSection
            visual={milVisual}
            auditory={milAuditory}
            reading={milReading}
            kinesthetic={milKinesthetic}
          />
        </div>
      </section>
    </div>
  );
};

export default MILPage;
