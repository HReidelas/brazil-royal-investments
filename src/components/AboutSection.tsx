import { motion } from "framer-motion";
import { Eye, Target, Award } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const AboutSection = () => {
  const { t } = useLanguage();

  const cards = [
    { icon: Eye, title: t.about.visionTitle, text: t.about.visionText },
    { icon: Target, title: t.about.missionTitle, text: t.about.missionText },
    { icon: Award, title: t.about.commitmentTitle, text: t.about.commitmentText },
  ];

  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center mb-20">
          <p className="text-primary font-body text-sm tracking-[0.4em] uppercase mb-4">{t.about.subtitle}</p>
          <h2 className="text-3xl md:text-5xl font-display text-gradient-gold mb-6">{t.about.title}</h2>
          <div className="bg-gradient-gold-horizontal h-px w-32 mx-auto mb-8" />
          <p className="text-muted-foreground font-elegant text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">{t.about.description}</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, i) => (
            <motion.div key={card.title} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.2 }} className="bg-card border border-border p-8 md:p-10 group hover:border-primary transition-all duration-500 hover:shadow-gold">
              <card.icon className="w-10 h-10 text-primary mb-6 group-hover:scale-110 transition-transform duration-500" />
              <h3 className="text-xl font-display text-primary mb-4">{card.title}</h3>
              <p className="text-muted-foreground font-body text-sm leading-relaxed">{card.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
