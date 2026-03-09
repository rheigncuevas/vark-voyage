import { useState } from "react";
import { Eye, Headphones, BookOpen, Hand, Sparkles } from "lucide-react";
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

const tabs: { key: VarkType; label: string; icon: React.ReactNode; gradient: string; glow: string; emoji: string }[] = [
  { key: "visual", label: "Visual", icon: <Eye className="w-4 h-4" />, gradient: "gradient-visual", glow: "glow-visual", emoji: "👁️" },
  { key: "auditory", label: "Auditory", icon: <Headphones className="w-4 h-4" />, gradient: "gradient-auditory", glow: "glow-auditory", emoji: "🎧" },
  { key: "reading", label: "Read & Write", icon: <BookOpen className="w-4 h-4" />, gradient: "gradient-reading", glow: "glow-reading", emoji: "📚" },
  { key: "kinesthetic", label: "Kinesthetic", icon: <Hand className="w-4 h-4" />, gradient: "gradient-kinesthetic", glow: "glow-kinesthetic", emoji: "✋" },
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
      <div className="flex flex-wrap gap-3 mb-12">
        {tabs.map((tab) => (
          <motion.button
            key={tab.key}
            onClick={() => setActive(tab.key)}
            className={`relative flex items-center gap-2.5 px-6 py-3.5 rounded-2xl font-display font-medium text-sm transition-all border ${
              active === tab.key
                ? `${tab.gradient} text-primary-foreground ${tab.glow} shadow-xl border-transparent`
                : "glass-strong text-muted-foreground hover:text-foreground border-border/50 hover:border-primary/20"
            }`}
            whileHover={{ scale: 1.06, y: -3 }}
            whileTap={{ scale: 0.97 }}
            layout
          >
            <span className="text-lg">{tab.emoji}</span>
            {tab.icon}
            {tab.label}
            {active === tab.key && (
              <motion.div
                className="absolute -bottom-1.5 left-1/2 w-2.5 h-2.5 rounded-full bg-primary-foreground shadow-lg"
                layoutId="varkDot"
                style={{ x: "-50%" }}
              />
            )}
          </motion.button>
        ))}
      </div>

      {/* Description */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 25, filter: "blur(12px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -25, filter: "blur(12px)" }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <motion.p
            className="text-muted-foreground mb-10 text-lg glass-strong rounded-2xl p-6 border border-border/50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            <Sparkles className="w-5 h-5 inline-block mr-2 text-primary animate-pulse-glow" />
            {descriptions[active]}
          </motion.p>

          {/* Resource Cards */}
          <div className="grid gap-5 sm:grid-cols-2">
            {resources[active].map((r, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 25, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.4, delay: i * 0.08, type: "spring", stiffness: 200 }}
              >
                <ResourceCard
                  title={r.title}
                  description={r.description}
                  url={r.url}
                  icon={iconMap[active]}
                  variant={active}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default VarkSection;
