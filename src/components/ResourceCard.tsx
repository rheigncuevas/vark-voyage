import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

interface ResourceCardProps {
  title: string;
  description: string;
  url: string;
  icon: React.ReactNode;
  variant: "visual" | "auditory" | "reading" | "kinesthetic";
}

const gradientMap = {
  visual: "gradient-visual",
  auditory: "gradient-auditory",
  reading: "gradient-reading",
  kinesthetic: "gradient-kinesthetic",
};

const glowMap = {
  visual: "hover:glow-visual",
  auditory: "hover:glow-auditory",
  reading: "hover:glow-reading",
  kinesthetic: "hover:glow-kinesthetic",
};

const bgMap = {
  visual: "bg-visual-light",
  auditory: "bg-auditory-light",
  reading: "bg-reading-light",
  kinesthetic: "bg-kinesthetic-light",
};

const borderMap = {
  visual: "border-visual/20",
  auditory: "border-auditory/20",
  reading: "border-reading/20",
  kinesthetic: "border-kinesthetic/20",
};

const ResourceCard = ({ title, description, url, icon, variant }: ResourceCardProps) => {
  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`group block rounded-2xl border ${borderMap[variant]} ${bgMap[variant]} ${glowMap[variant]} p-5 transition-all duration-300`}
      whileHover={{ y: -4, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="flex items-start gap-4">
        <motion.div
          className={`shrink-0 w-11 h-11 rounded-xl ${gradientMap[variant]} flex items-center justify-center text-primary-foreground`}
          whileHover={{ rotate: 10 }}
        >
          {icon}
        </motion.div>
        <div className="flex-1 min-w-0">
          <h4 className="font-display font-semibold text-foreground group-hover:text-foreground/80 transition-colors line-clamp-2">
            {title}
          </h4>
          <p className="text-sm text-muted-foreground mt-1.5 line-clamp-2">{description}</p>
        </div>
        <motion.div
          className="mt-1"
          whileHover={{ x: 3 }}
        >
          <ExternalLink className="w-4 h-4 shrink-0 text-muted-foreground group-hover:text-foreground transition-colors" />
        </motion.div>
      </div>
    </motion.a>
  );
};

export default ResourceCard;
