import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

interface AnimatedCounterProps {
  end: number;
  suffix?: string;
  label: string;
  duration?: number;
  gradient: string;
}

const AnimatedCounter = ({ end, suffix = "", label, duration = 2, gradient }: AnimatedCounterProps) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = end / (duration * 60);
    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [inView, end, duration]);

  return (
    <motion.div
      ref={ref}
      className="text-center"
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
    >
      <span className={`text-4xl md:text-5xl font-display font-bold ${gradient} bg-clip-text text-transparent`}
        style={{ backgroundImage: `var(--${gradient.replace('gradient-', 'gradient-')})` }}
      >
        <span className="text-gradient-hero">{count}{suffix}</span>
      </span>
      <p className="text-sm text-muted-foreground mt-2 font-medium">{label}</p>
    </motion.div>
  );
};

export default AnimatedCounter;
