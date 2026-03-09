import { motion } from "framer-motion";
import VarkSection from "../components/VarkSection";
import { cparVisual, cparAuditory, cparReading, cparKinesthetic } from "../data/cparResources";
import FloatingOrbs from "@/components/FloatingOrbs";

const CPARPage = () => {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="relative overflow-hidden py-16 md:py-24 mesh-gradient">
        <FloatingOrbs orbs={[
          { color: "bg-kinesthetic/20", size: "w-72 h-72", position: "-bottom-10 -left-20", delay: 0, duration: 8 },
          { color: "bg-accent/15", size: "w-64 h-64", position: "top-10 right-10", delay: 1.5, duration: 7 },
        ]} />
        <div className="container mx-auto px-4 relative">
          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, y: 30, filter: "blur(15px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.7 }}
          >
            <motion.span
              className="inline-block px-4 py-1.5 rounded-full glass text-kinesthetic text-sm font-medium mb-5"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              Senior High School Subject
            </motion.span>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-5">
              <span className="text-gradient-hero">Contemporary Arts</span>
              <br />in the Philippines
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Explore Philippine contemporary art forms from different regions through your preferred 
              VARK learning style. Resources aligned with the MELC curriculum for CPAR.
            </p>
          </motion.div>
        </div>
      </section>

      {/* VARK Content */}
      <section className="py-16 pb-24">
        <div className="container mx-auto px-4">
          <VarkSection
            visual={cparVisual}
            auditory={cparAuditory}
            reading={cparReading}
            kinesthetic={cparKinesthetic}
          />
        </div>
      </section>
    </div>
  );
};

export default CPARPage;
