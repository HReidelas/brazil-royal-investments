import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "@/assets/logo.png";
import { useLanguage } from "@/i18n/LanguageContext";
import LanguageSelector from "./LanguageSelector";
import { categories } from "@/data/productCategories";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [mobileCompanyOpen, setMobileCompanyOpen] = useState(false);
  const productsRef = useRef<HTMLDivElement>(null);
  const companyRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();
  const location = useLocation();
  const navigate = useNavigate();

  const isHome = location.pathname === "/";

  const goToSection = (sectionId: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    setOpen(false);
    const id = sectionId.replace("#", "");
    const scrollTo = () => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    };
    if (isHome) {
      scrollTo();
    } else {
      navigate("/");
      setTimeout(scrollTo, 100);
    }
  };

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (productsRef.current && !productsRef.current.contains(e.target as Node)) setProductsOpen(false);
      if (companyRef.current && !companyRef.current.contains(e.target as Node)) setCompanyOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const companyLinks = [
    { to: "/manufacturer", label: t.nav.manufacturer },
    { to: "/investor", label: t.nav.investor },
    { to: "/news", label: t.nav.news },
    { to: "/how-we-operate", label: t.nav.howWeOperate },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-background/95 backdrop-blur-md border-b border-border" : "bg-transparent"}`}>
      <div className="container mx-auto px-6 flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="BR Investments" className="w-10 h-10 rounded-full object-cover" />
          <span className="font-display text-lg text-gradient-gold hidden sm:inline">BR Investments</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 ms-auto ps-16">
          <a href="/#services" onClick={goToSection("services")} className="font-body text-sm tracking-widest uppercase text-muted-foreground hover:text-primary transition-colors duration-300">
            {t.nav.services}
          </a>

          {/* Products Dropdown */}
          <div ref={productsRef} className="relative">
            <button onClick={() => setProductsOpen(!productsOpen)} className="flex items-center gap-1 font-body text-sm tracking-widest uppercase text-muted-foreground hover:text-primary transition-colors duration-300">
              {t.nav.products}
              <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${productsOpen ? "rotate-180" : ""}`} />
            </button>
            <AnimatePresence>
              {productsOpen && (
                <motion.div initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -5 }} transition={{ duration: 0.2 }} className="absolute top-full mt-3 left-1/2 -translate-x-1/2 bg-card border border-border shadow-gold min-w-[220px] py-2 z-50">
                  <Link to="/products" onClick={() => setProductsOpen(false)} className="block px-5 py-2.5 font-body text-sm text-primary hover:bg-secondary transition-colors">
                    {t.products.title}
                  </Link>
                  <div className="bg-gradient-gold-horizontal h-px w-full my-1" />
                  {categories.map((c) => (
                    <Link key={c.slug} to={`/products/${c.slug}`} onClick={() => setProductsOpen(false)} className="block px-5 py-2.5 font-body text-sm text-muted-foreground hover:text-primary hover:bg-secondary transition-colors">
                      {t.products[c.nameKey] as string}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Company Dropdown */}
          <div ref={companyRef} className="relative">
            <button onClick={() => setCompanyOpen(!companyOpen)} className="flex items-center gap-1 font-body text-sm tracking-widest uppercase text-muted-foreground hover:text-primary transition-colors duration-300">
              {t.nav.company}
              <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${companyOpen ? "rotate-180" : ""}`} />
            </button>
            <AnimatePresence>
              {companyOpen && (
                <motion.div initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -5 }} transition={{ duration: 0.2 }} className="absolute top-full mt-3 left-1/2 -translate-x-1/2 bg-card border border-border shadow-gold min-w-[220px] py-2 z-50">
                  {companyLinks.map((link) => (
                    <Link key={link.to} to={link.to} onClick={() => setCompanyOpen(false)} className="block px-5 py-2.5 font-body text-sm text-muted-foreground hover:text-primary hover:bg-secondary transition-colors">
                      {link.label}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <a href="/#partners" onClick={goToSection("partners")} className="font-body text-sm tracking-widest uppercase text-muted-foreground hover:text-primary transition-colors duration-300">
            {t.nav.partners}
          </a>
          <a href="/#contact" onClick={goToSection("contact")} className="font-body text-sm tracking-widest uppercase text-muted-foreground hover:text-primary transition-colors duration-300">
            {t.nav.contact}
          </a>
          <LanguageSelector />
        </div>

        {/* Mobile */}
        <div className="flex items-center gap-4 md:hidden">
          <LanguageSelector />
          <button onClick={() => setOpen(!open)} className="text-primary">
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="md:hidden bg-background border-b border-border overflow-hidden">
            <div className="px-6 py-4 flex flex-col gap-4">
              
              <a href="/#services" onClick={goToSection("services")} className="font-body text-sm tracking-widest uppercase text-muted-foreground hover:text-primary transition-colors">{t.nav.services}</a>

              {/* Mobile Products */}
              <button onClick={() => setMobileProductsOpen(!mobileProductsOpen)} className="flex items-center gap-1 font-body text-sm tracking-widest uppercase text-muted-foreground hover:text-primary transition-colors text-left">
                {t.nav.products}
                <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${mobileProductsOpen ? "rotate-180" : ""}`} />
              </button>
              <AnimatePresence>
                {mobileProductsOpen && (
                  <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="flex flex-col gap-3 pl-4 border-l border-border">
                    {categories.map((c) => (
                      <Link key={c.slug} to={`/products/${c.slug}`} onClick={() => { setOpen(false); setMobileProductsOpen(false); }} className="font-body text-sm text-muted-foreground hover:text-primary transition-colors">
                        {t.products[c.nameKey] as string}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Mobile Company */}
              <button onClick={() => setMobileCompanyOpen(!mobileCompanyOpen)} className="flex items-center gap-1 font-body text-sm tracking-widest uppercase text-muted-foreground hover:text-primary transition-colors text-left">
                {t.nav.company}
                <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${mobileCompanyOpen ? "rotate-180" : ""}`} />
              </button>
              <AnimatePresence>
                {mobileCompanyOpen && (
                  <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="flex flex-col gap-3 pl-4 border-l border-border">
                    {companyLinks.map((link) => (
                      <Link key={link.to} to={link.to} onClick={() => { setOpen(false); setMobileCompanyOpen(false); }} className="font-body text-sm text-muted-foreground hover:text-primary transition-colors">
                        {link.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>

              <a href="/#partners" onClick={goToSection("partners")} className="font-body text-sm tracking-widest uppercase text-muted-foreground hover:text-primary transition-colors">{t.nav.partners}</a>
              <a href="/#contact" onClick={goToSection("contact")} className="font-body text-sm tracking-widest uppercase text-muted-foreground hover:text-primary transition-colors">{t.nav.contact}</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
