import { motion } from "framer-motion";
import { TrendingUp, Shield, BarChart3, Users } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { useLanguage } from "@/i18n/LanguageContext";

const InvestorPage = () => {
  const { t } = useLanguage();
  const p = t.investorPage;

  const pillars = [
    { icon: TrendingUp, title: p.pillar1Title, text: p.pillar1Text },
    { icon: Shield, title: p.pillar2Title, text: p.pillar2Text },
    { icon: BarChart3, title: p.pillar3Title, text: p.pillar3Text },
    { icon: Users, title: p.pillar4Title, text: p.pillar4Text },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-20">
            <TrendingUp className="w-12 h-12 text-primary mx-auto mb-6" />
            <p className="text-primary font-body text-sm tracking-[0.4em] uppercase mb-4">{p.subtitle}</p>
            <h1 className="text-3xl md:text-5xl font-display text-gradient-gold mb-6">{p.title}</h1>
            <div className="bg-gradient-gold-horizontal h-px w-32 mx-auto mb-8" />
            <p className="text-muted-foreground font-body text-base md:text-lg max-w-3xl mx-auto leading-relaxed">{p.description}</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-20">
            {pillars.map((b, i) => (
              <motion.div key={b.title} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.15 }} className="bg-card border border-border p-8 hover:border-primary transition-all duration-500 hover:shadow-gold group">
                <b.icon className="w-10 h-10 text-primary mb-6 group-hover:scale-110 transition-transform duration-500" />
                <h3 className="text-xl font-display text-primary mb-4">{b.title}</h3>
                <p className="text-muted-foreground font-body text-sm leading-relaxed">{b.text}</p>
              </motion.div>
            ))}
          </div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center">
            <a href="/#contact" className="inline-block bg-gradient-gold px-10 py-4 text-primary-foreground font-body font-semibold tracking-widest text-sm uppercase hover:shadow-gold-lg transition-shadow duration-500">
              {p.cta}
            </a>
          </motion.div>
        </div>
      </section>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default InvestorPage;
