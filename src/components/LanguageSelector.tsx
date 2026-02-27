import { useLanguage } from "@/i18n/LanguageContext";
import { type Locale, localeNames } from "@/i18n/translations";
import { Globe } from "lucide-react";
import { useState, useRef, useEffect } from "react";

const locales: Locale[] = ["en", "pt", "ar"];

const LanguageSelector = () => {
  const { locale, setLocale } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 text-muted-foreground hover:text-primary transition-colors duration-300"
        aria-label="Select language"
      >
        <Globe className="w-4 h-4" />
        <span className="font-body text-xs tracking-wider uppercase">{locale}</span>
      </button>

      {open && (
        <div className="absolute top-full mt-2 right-0 bg-card border border-border rounded shadow-gold min-w-[140px] overflow-hidden z-50">
          {locales.map((l) => (
            <button
              key={l}
              onClick={() => { setLocale(l); setOpen(false); }}
              className={`w-full text-left px-4 py-2.5 font-body text-sm hover:bg-secondary transition-colors ${
                locale === l ? "text-primary" : "text-foreground"
              }`}
            >
              {localeNames[l]}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
