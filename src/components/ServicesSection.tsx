import { motion } from "framer-motion";
import { Briefcase, Shield, Handshake } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const ServicesSection = () => {
  const { t } = useLanguage();

  const services = [
    { icon: Briefcase, title: t.services.businessTitle, text: t.services.businessText },
    { icon: Shield, title: t.services.assetsTitle, text: t.services.assetsText },
    { icon: Handshake, title: t.services.agencyTitle, text: t.services.agencyText },
  ];

  return (
    <section id="services" className="py-24 md:py-32 bg-secondary">
      <div className="container mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center mb-20">
          <p className="text-primary font-body text-sm tracking-[0.4em] uppercase mb-4">{t.services.subtitle}</p>
          <h2 className="text-3xl md:text-5xl font-display text-gradient-gold mb-6">{t.services.title}</h2>
          <div className="bg-gradient-gold-horizontal h-px w-32 mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <motion.div key={s.title} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.2 }} className="relative p-8 md:p-10 border border-border hover:border-primary group transition-all duration-500 bg-background">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              <s.icon className="w-10 h-10 text-primary mb-6" />
              <h3 className="text-xl font-display text-primary mb-4">{s.title}</h3>
              <p className="text-muted-foreground font-body text-sm leading-relaxed">{s.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
