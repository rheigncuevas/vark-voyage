import { motion } from "framer-motion";
import VarkSection from "../components/VarkSection";
import { cparVisual, cparAuditory, cparReading, cparKinesthetic } from "../data/cparResources";

const CPARPage = () => {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="relative overflow-hidden py-16 md:py-24">
        <div className="absolute inset-0 gradient-kinesthetic opacity-10" />
        <div className="absolute bottom-10 left-20 w-64 h-64 bg-kinesthetic/20 rounded-full blur-3xl" />
        <div className="container mx-auto px-4 relative">
          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-3 py-1 rounded-full bg-kinesthetic/10 text-kinesthetic text-sm font-medium mb-4">
              Senior High School Subject
            </span>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Contemporary Arts in the Philippines
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Explore Philippine contemporary art forms from different regions through your preferred 
              VARK learning style. Resources aligned with the MELC curriculum for CPAR.
            </p>
          </motion.div>
        </div>
      </section>

      {/* VARK Content */}
      <section className="py-12 pb-24">
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
