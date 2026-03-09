import { motion } from "framer-motion";

interface Orb {
  color: string;
  size: string;
  position: string;
  delay: number;
  duration: number;
}

const defaultOrbs: Orb[] = [
  { color: "bg-primary/20", size: "w-72 h-72", position: "top-10 -left-20", delay: 0, duration: 7 },
  { color: "bg-secondary/20", size: "w-96 h-96", position: "-bottom-20 -right-20", delay: 1, duration: 9 },
  { color: "bg-accent/15", size: "w-64 h-64", position: "top-1/2 left-1/3", delay: 2, duration: 8 },
  { color: "bg-kinesthetic/10", size: "w-48 h-48", position: "bottom-20 left-10", delay: 3, duration: 6 },
];

const FloatingOrbs = ({ orbs = defaultOrbs }: { orbs?: Orb[] }) => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {orbs.map((orb, i) => (
        <motion.div
          key={i}
          className={`absolute ${orb.size} ${orb.color} rounded-full blur-3xl ${orb.position}`}
          animate={{
            y: [0, -30, 0, 20, 0],
            x: [0, 15, -10, 5, 0],
            scale: [1, 1.1, 0.95, 1.05, 1],
          }}
          transition={{
            duration: orb.duration,
            repeat: Infinity,
            delay: orb.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default FloatingOrbs;
