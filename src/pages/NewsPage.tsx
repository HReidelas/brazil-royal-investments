import { motion } from "framer-motion";
import { Newspaper, TrendingUp, Globe, Coffee } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { useLanguage } from "@/i18n/LanguageContext";

const NewsPage = () => {
  const { t } = useLanguage();
  const p = t.newsPage;

  const articles = [
    { icon: TrendingUp, title: p.article1Title, date: p.article1Date, text: p.article1Text },
    { icon: Globe, title: p.article2Title, date: p.article2Date, text: p.article2Text },
    { icon: Coffee, title: p.article3Title, date: p.article3Date, text: p.article3Text },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-20">
            <Newspaper className="w-12 h-12 text-primary mx-auto mb-6" />
            <p className="text-primary font-body text-sm tracking-[0.4em] uppercase mb-4">{p.subtitle}</p>
            <h1 className="text-3xl md:text-5xl font-display text-gradient-gold mb-6">{p.title}</h1>
            <div className="bg-gradient-gold-horizontal h-px w-32 mx-auto mb-8" />
            <p className="text-muted-foreground font-body text-base md:text-lg max-w-3xl mx-auto leading-relaxed">{p.description}</p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-8">
            {articles.map((a, i) => (
              <motion.article key={a.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.15 }} className="bg-card border border-border p-8 md:p-10 hover:border-primary transition-all duration-500 hover:shadow-gold">
                <div className="flex items-center gap-4 mb-4">
                  <a.icon className="w-8 h-8 text-primary flex-shrink-0" />
                  <div>
                    <p className="text-muted-foreground font-body text-xs tracking-wider uppercase">{a.date}</p>
                    <h3 className="text-xl font-display text-primary">{a.title}</h3>
                  </div>
                </div>
                <div className="bg-gradient-gold-horizontal h-px w-20 mb-4" />
                <p className="text-muted-foreground font-body text-sm leading-relaxed">{a.text}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default NewsPage;
