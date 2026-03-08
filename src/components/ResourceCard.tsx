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
      className={`group block rounded-xl border ${borderMap[variant]} ${bgMap[variant]} p-5 transition-all hover:shadow-lg hover:-translate-y-1`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      <div className="flex items-start gap-4">
        <div className={`shrink-0 w-10 h-10 rounded-lg ${gradientMap[variant]} flex items-center justify-center text-primary-foreground`}>
          {icon}
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="font-display font-semibold text-foreground group-hover:text-foreground/80 transition-colors line-clamp-2">
            {title}
          </h4>
          <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{description}</p>
        </div>
        <ExternalLink className="w-4 h-4 shrink-0 text-muted-foreground group-hover:text-foreground transition-colors mt-1" />
      </div>
    </motion.a>
  );
};

export default ResourceCard;
