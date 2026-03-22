import { motion, type Transition } from "framer-motion";
import { useLocation } from "react-router-dom";

const enterTransition: Transition = {
  duration: 0.4,
  ease: [0.25, 0.46, 0.45, 0.94],
};

const exitTransition: Transition = {
  duration: 0.25,
  ease: [0.55, 0.06, 0.68, 0.19],
};

const PageTransition = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();

  return (
    <motion.div
      key={location.pathname}
      initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)", transition: enterTransition }}
      exit={{ opacity: 0, y: -15, filter: "blur(6px)", transition: exitTransition }}
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;
