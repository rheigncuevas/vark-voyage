import { motion } from "framer-motion";
import VarkSection from "../components/VarkSection";
import { milVisual, milAuditory, milReading, milKinesthetic } from "../data/milResources";

const MILPage = () => {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="relative overflow-hidden py-16 md:py-24">
        <div className="absolute inset-0 gradient-visual opacity-10" />
        <div className="absolute top-10 right-20 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
        <div className="container mx-auto px-4 relative">
          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Senior High School Subject
            </span>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Media & Information Literacy
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Master media literacy, information literacy, and digital citizenship through your preferred 
              VARK learning style. All resources are aligned with the MELC curriculum for Senior High School.
            </p>
          </motion.div>
        </div>
      </section>

      {/* VARK Content */}
      <section className="py-12 pb-24">
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
