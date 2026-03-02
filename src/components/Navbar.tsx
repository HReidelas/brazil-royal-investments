import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.jpg";
import { useLanguage } from "@/i18n/LanguageContext";
import LanguageSelector from "./LanguageSelector";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { t } = useLanguage();

  const links = [
    { href: "#about", label: t.nav.about },
    { href: "#services", label: t.nav.services },
    { href: "#products", label: t.nav.products },
    { href: "#partners", label: t.nav.partners },
    { href: "#contact", label: t.nav.contact },
  ];

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-background/95 backdrop-blur-md border-b border-border" : "bg-transparent"}`}>
      <div className="container mx-auto px-6 flex items-center justify-between h-16">
        <a href="#" className="flex items-center gap-3">
          <img src={logo} alt="BR Investments" className="w-10 h-10 rounded-full object-cover" />
          <span className="font-display text-lg text-gradient-gold hidden sm:inline">BR Investments</span>
        </a>

        <div className="hidden md:flex items-center gap-8 ml-auto pl-16">
          {links.map(l => (
            <a key={l.href} href={l.href} className="font-body text-sm tracking-widest uppercase text-muted-foreground hover:text-primary transition-colors duration-300">
              {l.label}
            </a>
          ))}
          <LanguageSelector />
        </div>

        <div className="flex items-center gap-4 md:hidden">
          <LanguageSelector />
          <button onClick={() => setOpen(!open)} className="text-primary">
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-border overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {links.map(l => (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="font-body text-sm tracking-widest uppercase text-muted-foreground hover:text-primary transition-colors">
                  {l.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
