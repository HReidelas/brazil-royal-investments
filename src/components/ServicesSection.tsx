import { motion } from "framer-motion";
import { Briefcase, MessageSquare, Handshake, Package, Award, Eye, Target } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const ServicesSection = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: Briefcase,
      title: t.services.businessTitle,
      texts: [t.services.businessText1, t.services.businessText2, t.services.businessText3],
    },
    {
      icon: MessageSquare,
      title: t.services.consultingTitle,
      texts: [t.services.consultingText1, t.services.consultingText2],
    },
    {
      icon: Handshake,
      title: t.services.representationTitle,
      texts: [t.services.representationText1, t.services.representationText2],
    },
    {
      icon: Package,
      title: t.services.wholesaleTitle,
      texts: [t.services.wholesaleText1, t.services.wholesaleText2],
    },
    {
      icon: Award,
      title: t.services.brandTitle,
      texts: [t.services.brandText1, t.services.brandText2],
    },
  ];

  return (
    <section id="services" className="py-24 md:py-32 bg-secondary">
      <div className="container mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center mb-20">
          <p className="text-primary font-body text-sm tracking-[0.4em] uppercase mb-4">{t.services.subtitle}</p>
          <h2 className="text-3xl md:text-5xl font-display text-gradient-gold mb-6">{t.services.title}</h2>
          <div className="bg-gradient-gold-horizontal h-px w-32 mx-auto" />
        </motion.div>

        <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto mb-20">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative p-8 md:p-10 border border-border hover:border-primary group transition-all duration-500 bg-background hover:shadow-gold w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.4rem)]"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              <s.icon className="w-10 h-10 text-primary mb-6 group-hover:scale-110 transition-transform duration-500" />
              <h3 className="text-xl font-display text-primary mb-4">{s.title}</h3>
              {s.texts.map((text, j) => (
                <p key={j} className="text-muted-foreground font-body text-sm leading-relaxed mb-3 last:mb-0">{text}</p>
              ))}
            </motion.div>
          ))}
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="bg-background border border-border p-8 md:p-10 hover:border-primary transition-all duration-500 hover:shadow-gold">
            <Target className="w-10 h-10 text-primary mb-6" />
            <h3 className="text-xl font-display text-primary mb-4">{t.services.missionTitle}</h3>
            <p className="text-muted-foreground font-body text-sm leading-relaxed">{t.services.missionText}</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="bg-background border border-border p-8 md:p-10 hover:border-primary transition-all duration-500 hover:shadow-gold">
            <Eye className="w-10 h-10 text-primary mb-6" />
            <h3 className="text-xl font-display text-primary mb-4">{t.services.visionTitle}</h3>
            <p className="text-muted-foreground font-body text-sm leading-relaxed">{t.services.visionText}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
