import { useState } from "react";
import { Eye, Headphones, BookOpen, Hand } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ResourceCard from "./ResourceCard";

type VarkType = "visual" | "auditory" | "reading" | "kinesthetic";

interface Resource {
  title: string;
  description: string;
  url: string;
}

interface VarkSectionProps {
  visual: Resource[];
  auditory: Resource[];
  reading: Resource[];
  kinesthetic: Resource[];
}

const tabs: { key: VarkType; label: string; icon: React.ReactNode; gradient: string }[] = [
  { key: "visual", label: "Visual", icon: <Eye className="w-4 h-4" />, gradient: "gradient-visual" },
  { key: "auditory", label: "Auditory", icon: <Headphones className="w-4 h-4" />, gradient: "gradient-auditory" },
  { key: "reading", label: "Read & Write", icon: <BookOpen className="w-4 h-4" />, gradient: "gradient-reading" },
  { key: "kinesthetic", label: "Kinesthetic", icon: <Hand className="w-4 h-4" />, gradient: "gradient-kinesthetic" },
];

const iconMap: Record<VarkType, React.ReactNode> = {
  visual: <Eye className="w-4 h-4" />,
  auditory: <Headphones className="w-4 h-4" />,
  reading: <BookOpen className="w-4 h-4" />,
  kinesthetic: <Hand className="w-4 h-4" />,
};

const descriptions: Record<VarkType, string> = {
  visual: "Learn through visual aids like presentations, videos, graphs, and visual discussions.",
  auditory: "Learn through listening — podcasts, audio discussions, and verbal explanations.",
  reading: "Learn by reading and writing — modules, worksheets, notes, and written materials.",
  kinesthetic: "Learn by doing — hands-on activities, collaborative projects, and physical engagement.",
};

const VarkSection = ({ visual, auditory, reading, kinesthetic }: VarkSectionProps) => {
  const [active, setActive] = useState<VarkType>("visual");
  const resources = { visual, auditory, reading, kinesthetic };

  return (
    <div>
      {/* Tab Buttons */}
      <div className="flex flex-wrap gap-2 mb-8">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActive(tab.key)}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-display font-medium text-sm transition-all ${
              active === tab.key
                ? `${tab.gradient} text-primary-foreground shadow-lg`
                : "bg-muted text-muted-foreground hover:text-foreground"
            }`}
          >
            {tab.icon}
            {tab.label}
          </button>
        ))}
      </div>

      {/* Description */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.25 }}
        >
          <p className="text-muted-foreground mb-6 text-lg">{descriptions[active]}</p>

          {/* Resource Cards */}
          <div className="grid gap-4 sm:grid-cols-2">
            {resources[active].map((r, i) => (
              <ResourceCard
                key={i}
                title={r.title}
                description={r.description}
                url={r.url}
                icon={iconMap[active]}
                variant={active}
              />
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default VarkSection;
