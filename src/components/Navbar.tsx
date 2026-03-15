import { Link, useLocation } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import schoolLogo from "@/assets/school-logo.jpg";
import { categories } from "@/data/subjects";

const Navbar = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close mobile menu on route change
  useEffect(() => { setOpen(false); setActiveDropdown(null); }, [location.pathname]);

  const isActive = (path: string) => location.pathname.startsWith(path);

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
          <motion.span className="text-gradient-hero group-hover:opacity-80 transition-opacity" whileHover={{ scale: 1.05 }}>
            VARKology
          </motion.span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1" ref={dropdownRef}>
          <Link
            to="/"
            className="relative px-4 py-2 rounded-xl text-sm font-medium transition-all"
          >
            {location.pathname === "/" && (
              <motion.div layoutId="activeNav" className="absolute inset-0 gradient-hero rounded-xl glow-primary" transition={{ type: "spring", stiffness: 350, damping: 30 }} />
            )}
            <span className={`relative z-10 ${location.pathname === "/" ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`}>
              Home
            </span>
          </Link>

          {categories.map((cat) => (
            <div key={cat.slug} className="relative">
              <button
                onClick={() => setActiveDropdown(activeDropdown === cat.slug ? null : cat.slug)}
                className={`relative flex items-center gap-1 px-3 py-2 rounded-xl text-sm font-medium transition-all ${
                  isActive(`/${cat.slug}`) ? "text-primary" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <span className="truncate max-w-[120px]">{cat.name}</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeDropdown === cat.slug ? "rotate-180" : ""}`} />
              </button>

              <AnimatePresence>
                {activeDropdown === cat.slug && (
                  <motion.div
                    className="absolute top-full left-0 mt-2 w-72 glass-strong rounded-2xl p-2 shadow-2xl border border-border/50 z-50"
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                  >
                    <Link
                      to={`/${cat.slug}`}
                      className="block px-4 py-2.5 rounded-xl text-sm font-semibold text-primary hover:bg-primary/10 transition-colors mb-1"
                    >
                      📋 Overview
                    </Link>
                    <div className="h-px bg-border/50 mx-2 mb-1" />
                    {cat.subjects.map((subj, i) => (
                      <motion.div
                        key={subj.slug}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.03 }}
                      >
                        <Link
                          to={`/${cat.slug}/${subj.slug}`}
                          className={`block px-4 py-2.5 rounded-xl text-sm transition-colors ${
                            location.pathname === `/${cat.slug}/${subj.slug}`
                              ? "bg-primary/10 text-primary font-medium"
                              : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                          }`}
                        >
                          {subj.name}
                        </Link>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}

          <div className="ml-3">
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile */}
        <div className="lg:hidden flex items-center gap-2">
          <ThemeToggle />
          <motion.button onClick={() => setOpen(!open)} className="p-2 rounded-xl hover:bg-muted transition-colors" whileTap={{ scale: 0.9 }}>
            <AnimatePresence mode="wait">
              <motion.div key={open ? "close" : "open"} initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </motion.div>
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="lg:hidden border-t border-border glass-strong p-4 space-y-1 max-h-[80vh] overflow-y-auto"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <Link to="/" className={`block px-4 py-3 rounded-xl text-sm font-medium ${location.pathname === "/" ? "gradient-hero text-primary-foreground" : "text-muted-foreground hover:bg-muted"}`}>
              Home
            </Link>

            {categories.map((cat, ci) => (
              <motion.div key={cat.slug} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: ci * 0.05 }}>
                <button
                  onClick={() => setActiveDropdown(activeDropdown === cat.slug ? null : cat.slug)}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                    isActive(`/${cat.slug}`) ? "text-primary" : "text-muted-foreground hover:bg-muted"
                  }`}
                >
                  {cat.name}
                  <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === cat.slug ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence>
                  {activeDropdown === cat.slug && (
                    <motion.div
                      className="pl-4 space-y-0.5 overflow-hidden"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Link to={`/${cat.slug}`} className="block px-4 py-2 rounded-xl text-sm text-primary font-medium hover:bg-primary/10">
                        Overview
                      </Link>
                      {cat.subjects.map((subj) => (
                        <Link
                          key={subj.slug}
                          to={`/${cat.slug}/${subj.slug}`}
                          className={`block px-4 py-2 rounded-xl text-sm ${
                            location.pathname === `/${cat.slug}/${subj.slug}` ? "bg-primary/10 text-primary" : "text-muted-foreground hover:bg-muted/50"
                          }`}
                        >
                          {subj.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
