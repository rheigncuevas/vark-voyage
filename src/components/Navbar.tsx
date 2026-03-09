import { Link, useLocation } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import { BookOpen, Menu, X, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import schoolLogo from "@/assets/school-logo.jpg";

const Navbar = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { to: "/", label: "Home" },
    { to: "/mil", label: "Media & Info Literacy" },
    { to: "/cpar", label: "Contemporary Arts PH" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <motion.nav
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled ? "glass-strong shadow-lg" : "glass"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 200, damping: 25 }}
    >
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2.5 font-display font-bold text-xl group">
          <motion.div
            className="w-9 h-9 rounded-xl gradient-hero flex items-center justify-center glow-primary overflow-hidden"
            whileHover={{ scale: 1.15, rotate: 10 }}
            whileTap={{ scale: 0.95 }}
          >
            <img src={schoolLogo} alt="Logo" className="w-full h-full object-cover" />
          </motion.div>
          <motion.span
            className="text-gradient-hero group-hover:opacity-80 transition-opacity"
            whileHover={{ scale: 1.05 }}
          >
            VARKology
          </motion.span>
        </Link>

        <div className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="relative px-4 py-2 rounded-xl text-sm font-medium transition-all"
            >
              {isActive(l.to) && (
                <motion.div
                  layoutId="activeNav"
                  className="absolute inset-0 gradient-hero rounded-xl glow-primary"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
              <span className={`relative z-10 ${isActive(l.to) ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`}>
                {l.label}
              </span>
            </Link>
          ))}
          <div className="ml-3">
            <ThemeToggle />
          </div>
        </div>

        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <motion.button
            onClick={() => setOpen(!open)}
            className="p-2 rounded-xl hover:bg-muted transition-colors"
            whileTap={{ scale: 0.9 }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={open ? "close" : "open"}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </motion.div>
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="md:hidden border-t border-border glass-strong p-4 space-y-1"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {links.map((l, i) => (
              <motion.div
                key={l.to}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.08 }}
              >
                <Link
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className={`block px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                    isActive(l.to)
                      ? "gradient-hero text-primary-foreground glow-primary"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  }`}
                >
                  {l.label}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
