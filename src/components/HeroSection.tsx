import { motion } from "framer-motion";
import logo from "@/assets/logo.jpg";
import { useLanguage } from "@/i18n/LanguageContext";

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, hsl(43, 72%, 50%, 0.03) 35px, hsl(43, 72%, 50%, 0.03) 36px)`,
        }} />
      </div>

      {/* Gold corner accents */}
      <div className="absolute top-0 left-0 w-32 h-32 border-t border-l border-primary opacity-30" />
      <div className="absolute top-0 right-0 w-32 h-32 border-t border-r border-primary opacity-30" />
      <div className="absolute bottom-0 left-0 w-32 h-32 border-b border-l border-primary opacity-30" />
      <div className="absolute bottom-0 right-0 w-32 h-32 border-b border-r border-primary opacity-30" />

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="mb-8"
        >
          <img src={logo} alt="Brazil Royal Investments" className="w-48 h-48 md:w-64 md:h-64 mx-auto object-contain rounded-full shadow-gold-lg" />
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.5 }}>
          <div className="bg-gradient-gold-horizontal h-px w-48 mx-auto mb-8" />
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-gradient-gold mb-6 tracking-wider">BRAZIL ROYAL</h1>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-display text-gradient-gold mb-8 tracking-[0.3em]">INVESTMENTS</h2>
          <div className="bg-gradient-gold-horizontal h-px w-48 mx-auto mb-10" />
        </motion.div>

        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.9 }} className="text-muted-foreground font-elegant text-xl md:text-2xl max-w-3xl mx-auto mb-12 leading-relaxed italic">
          {t.hero.tagline}
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1.2 }} className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#products" className="inline-block bg-gradient-gold px-10 py-4 text-primary-foreground font-body font-semibold tracking-widest text-sm uppercase hover:shadow-gold-lg transition-shadow duration-500">
            {t.hero.exploreProducts}
          </a>
          <a href="#about" className="inline-block border border-primary px-10 py-4 text-primary font-body font-semibold tracking-widest text-sm uppercase hover:bg-primary hover:text-primary-foreground transition-all duration-500">
            {t.hero.learnMore}
          </a>
        </motion.div>
      </div>

      <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }} className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-6 h-10 border border-primary rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
