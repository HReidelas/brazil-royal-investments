import { motion } from "framer-motion";
import partnerCarmel from "@/assets/partner-carmel.png";
import partnerCamargo from "@/assets/partner-camargo.png";
import partnerGelaboca from "@/assets/partner-gelaboca.png";
import partnerSaria from "@/assets/partner-saria.png";
import partnerSubrak from "@/assets/partner-subrak.png";
import { useLanguage } from "@/i18n/LanguageContext";

const partners = [
  { name: "Carmel", logo: partnerCarmel },
  { name: "Doutor Camargo", logo: partnerCamargo },
  { name: "Gelaboca", logo: partnerGelaboca },
  { name: "Saria", logo: partnerSaria },
  { name: "Subrak", logo: partnerSubrak },
];

const PartnersSection = () => {
  const { t } = useLanguage();

  return (
    <section id="partners" className="py-24 md:py-32 bg-secondary">
      <div className="container mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center mb-16">
          <p className="text-primary font-body text-sm tracking-[0.4em] uppercase mb-4">{t.partners.subtitle}</p>
          <h2 className="text-3xl md:text-5xl font-display text-gradient-gold mb-6">{t.partners.title}</h2>
          <div className="bg-gradient-gold-horizontal h-px w-32 mx-auto" />
        </motion.div>

        <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16">
          {partners.map((p, i) => (
            <motion.div key={p.name} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="group">
              <div className="w-28 h-28 md:w-36 md:h-36 rounded-full bg-background border border-border flex items-center justify-center p-4 group-hover:border-primary group-hover:shadow-gold transition-all duration-500">
                <img src={p.logo} alt={p.name} className="w-full h-full object-contain rounded-full opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <p className="text-center text-muted-foreground font-body text-xs tracking-wider mt-3 group-hover:text-primary transition-colors duration-300">{p.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
