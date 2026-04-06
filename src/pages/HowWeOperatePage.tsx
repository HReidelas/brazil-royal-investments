import { motion } from "framer-motion";
import { Settings, Search, FileCheck, Truck, BarChart } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { useLanguage } from "@/i18n/LanguageContext";

const HowWeOperatePage = () => {
  const { t } = useLanguage();
  const p = t.howWeOperatePage;

  const steps = [
    { icon: Search, number: "01", title: p.step1Title, text: p.step1Text },
    { icon: FileCheck, number: "02", title: p.step2Title, text: p.step2Text },
    { icon: Settings, number: "03", title: p.step3Title, text: p.step3Text },
    { icon: Truck, number: "04", title: p.step4Title, text: p.step4Text },
    { icon: BarChart, number: "05", title: p.step5Title, text: p.step5Text },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-20">
            <Settings className="w-12 h-12 text-primary mx-auto mb-6" />
            <p className="text-primary font-body text-sm tracking-[0.4em] uppercase mb-4">{p.subtitle}</p>
            <h1 className="text-3xl md:text-5xl font-display text-gradient-gold mb-6">{p.title}</h1>
            <div className="bg-gradient-gold-horizontal h-px w-32 mx-auto mb-8" />
            <p className="text-muted-foreground font-body text-base md:text-lg max-w-3xl mx-auto leading-relaxed">{p.description}</p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-8">
            {steps.map((s, i) => (
              <motion.div key={s.number} initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }} className="flex gap-6 items-start bg-card border border-border p-8 hover:border-primary transition-all duration-500 hover:shadow-gold group">
                <div className="flex-shrink-0 text-center">
                  <span className="text-3xl font-display text-primary/30 group-hover:text-primary transition-colors duration-500">{s.number}</span>
                  <s.icon className="w-8 h-8 text-primary mx-auto mt-2" />
                </div>
                <div>
                  <h3 className="text-xl font-display text-primary mb-3">{s.title}</h3>
                  <p className="text-muted-foreground font-body text-sm leading-relaxed">{s.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default HowWeOperatePage;
